import { useMemo, useState } from 'react';
import { posts, news, formatDate } from '../lib/posts';
import { navigate } from '../lib/useHashRoute';
import SectionHead from './SectionHead';

type Filter = 'all' | 'blog' | 'news';

const TABS: { id: Filter; label: string }[] = [
  { id: 'all',  label: 'All' },
  { id: 'blog', label: 'Blog' },
  { id: 'news', label: 'News' },
];

/**
 * Panel 3 of the site map: blog and news as one row of cards.
 *
 * They were two sections before. The map puts them under a single heading,
 * and they already shared a post page and one comment system, so the split
 * only ever existed in the nav.
 */
export default function Writing() {
  const [filter, setFilter] = useState<Filter>('all');

  const items = useMemo(() => {
    const pool = filter === 'blog' ? posts : filter === 'news' ? news : [...posts, ...news];
    return [...pool].sort((a, b) => b.date.localeCompare(a.date));
  }, [filter]);

  const open = (slug: string) => navigate(`/blog/${slug}`);

  return (
    <section id="writing" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="05" label="Blog & news">
          <div className="gal-tabs">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                className={t.id === filter ? 'btn-primary' : 'btn-ghost'}
                aria-pressed={t.id === filter}
              >
                {t.label}
              </button>
            ))}
          </div>
        </SectionHead>

        {items.length === 0 ? (
          <p className="prose-p">
            Nothing here yet. Add a <code>.md</code> file to{' '}
            <code>src/content/blog/</code> or <code>src/content/news/</code>.
          </p>
        ) : (
          <div className="write-grid">
            {items.map(p => (
              <article
                key={p.slug}
                className="write-card"
                onClick={() => open(p.slug)}
                role="link"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') open(p.slug); }}
              >
                {p.cover && (
                  <div className="write-card-cover">
                    <img src={p.cover} alt={p.coverAlt ?? ''} loading="lazy" />
                  </div>
                )}

                <div className="write-card-body">
                  <p className="write-card-meta">
                    <span>{p.kind === 'news' ? 'News' : 'Blog'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{formatDate(p.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.readingTime} min</span>
                  </p>

                  <h3 className="write-card-title">{p.title}</h3>
                  <p className="write-card-excerpt">{p.excerpt}</p>

                  <p className="write-card-link">Read <span aria-hidden="true">→</span></p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
