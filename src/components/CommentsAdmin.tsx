import { useCallback, useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { goHome } from '../lib/useHashRoute';
import { getPost } from '../lib/posts';
import type { Comment } from '../types';

/**
 * Moderation is gated by Supabase Auth, not by a client-side password — the
 * hide/delete permissions live in RLS policies, so this page is useless to
 * anyone who isn't signed in as the blog owner even if they load the URL.
 */
export default function CommentsAdmin() {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!supabase) { setChecking(false); return; }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!isSupabaseConfigured) {
    return <Shell><p className="comments-status font-mono">Supabase isn’t configured. See BLOG-SETUP.md.</p></Shell>;
  }
  if (checking) {
    return <Shell><p className="comments-status font-mono">Checking session…</p></Shell>;
  }
  if (!session) {
    return <Shell><LoginForm /></Shell>;
  }
  return <Shell><ModerationList email={session.user.email ?? ''} /></Shell>;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <article className="post-page">
      <div className="post-container" style={{ maxWidth: 780 }}>
        <button className="post-back font-mono" onClick={() => goHome()}>← Back to site</button>
        <h1 className="post-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Comment Moderation</h1>
        {children}
      </div>
    </article>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setBusy(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (error) setError(error.message);
  }

  return (
    <form onSubmit={signIn} className="comment-form" style={{ marginTop: '1.5rem' }}>
      <input
        className="comment-input"
        type="email"
        placeholder="Email"
        autoComplete="username"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="comment-input"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="comment-form-footer">
        <span className="comment-counter font-mono">Owner access only</span>
        <button className="btn-primary" disabled={busy}>{busy ? 'Signing in…' : 'Sign In'}</button>
      </div>
      {error && <p className="comment-error font-mono">{error}</p>}
    </form>
  );
}

function ModerationList({ email }: { email: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'visible' | 'hidden'>('all');

  const load = useCallback(async () => {
    if (!supabase) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('comments')
      .select('id, post_slug, author_name, body, created_at, is_hidden')
      .order('created_at', { ascending: false });
    setError(error ? error.message : null);
    setComments((data ?? []) as Comment[]);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function toggleHidden(c: Comment) {
    if (!supabase) return;
    const { error } = await supabase.from('comments').update({ is_hidden: !c.is_hidden }).eq('id', c.id);
    if (error) return setError(error.message);
    setComments(list => list.map(x => (x.id === c.id ? { ...x, is_hidden: !x.is_hidden } : x)));
  }

  async function remove(c: Comment) {
    if (!supabase) return;
    if (!confirm(`Permanently delete this comment by ${c.author_name}? This cannot be undone.`)) return;
    const { error } = await supabase.from('comments').delete().eq('id', c.id);
    if (error) return setError(error.message);
    setComments(list => list.filter(x => x.id !== c.id));
  }

  const shown = comments.filter(c =>
    filter === 'all' ? true : filter === 'hidden' ? c.is_hidden : !c.is_hidden
  );

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <div className="admin-bar">
        <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{email}</span>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="blog-filters">
            {(['all', 'visible', 'hidden'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`blog-filter font-mono ${filter === f ? 'blog-filter-active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="blog-filter font-mono" onClick={load}>Refresh</button>
          <button className="blog-filter font-mono" onClick={() => supabase?.auth.signOut()}>Sign out</button>
        </div>
      </div>

      {error && <p className="comment-error font-mono">{error}</p>}

      {loading ? (
        <p className="comments-status font-mono">Loading…</p>
      ) : shown.length === 0 ? (
        <p className="comments-status font-mono">Nothing here.</p>
      ) : (
        <ul className="comment-list">
          {shown.map(c => (
            <li key={c.id} className="comment-item" style={{ opacity: c.is_hidden ? 0.5 : 1 }}>
              <div className="comment-body-col">
                <div className="comment-meta">
                  <span className="comment-author">{c.author_name}</span>
                  <span className="comment-time font-mono">
                    {new Date(c.created_at).toLocaleString()} · {getPost(c.post_slug)?.title ?? c.post_slug}
                  </span>
                  {c.is_hidden && <span className="tag tag-sm">hidden</span>}
                </div>
                <p className="comment-text">{c.body}</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem' }}>
                  <button className="blog-filter font-mono" onClick={() => toggleHidden(c)}>
                    {c.is_hidden ? 'Unhide' : 'Hide'}
                  </button>
                  <button className="blog-filter font-mono admin-danger" onClick={() => remove(c)}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
