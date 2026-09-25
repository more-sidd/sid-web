import { useState } from 'react';
import type { BlogPost } from '../types';
import { formatDate } from '../lib/posts';
import { navigate } from '../lib/useHashRoute';
import { Reveal } from './Reveal';

interface Props {
  id: string;
  label: string;
  heading: string;
  items: BlogPost[];
  tags: string[];
  /** Shown when there is nothing to list — tells you which folder to add to. */
  emptyFolder: string;
  emptyIcon?: string;
}

/**
 * Blog and News render the same card, so they share this component. Keeping
 * one copy means a change to the card shape can't land in one section and
 * quietly miss the other.
 */
export default function PostGrid({ id, label, heading, items, tags, emptyFolder, emptyIcon = '✍️' }: Props) {
  const [tag, setTag] = useState<string | null>(null);
  const shown = tag ? items.filter(p => p.tags.includes(tag)) : items;

  const open = (slug: string) => navigate(`/blog/${slug}`);

  return (
    <section id={id} className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="label">{label}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="heading" style={{ marginBottom: 0 }}>{heading}</h2>

          {tags.length > 0 && (
            <div className="blog-filters">
              <button
                onClick={() => setTag(null)}
                className={`blog-filter ${tag === null ? 'blog-filter-active' : ''}`}
              >
                All
              </button>
              {tags.map(t => (
                <button
                  key={t}
                  onClick={() => setTag(t === tag ? null : t)}
                  className={`blog-filter ${tag === t ? 'blog-filter-active' : ''}`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {shown.length === 0 ? (
          <div className="blog-empty">
            <div style={{ fontSize: '2rem', marginBottom: '0.8rem', opacity: 0.3 }}>{emptyIcon}</div>
            <p>
              Add a <code>.md</code> file to <code>{emptyFolder}</code> to publish the first one.
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <article
                  className="blog-card card"
                  onClick={() => open(p.slug)}
                  role="link"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter') open(p.slug); }}
                >
                  {p.cover && (
                    <div className="blog-card-cover">
                      <img src={p.cover} alt={p.coverAlt ?? ''} loading="lazy" />
                    </div>
                  )}

                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>{formatDate(p.date)}</span>
                      <span className="blog-dot">·</span>
                      <span>{p.readingTime} min read</span>
                    </div>

                    <h3 className="blog-card-title">{p.title}</h3>
                    <p className="blog-card-excerpt">{p.excerpt}</p>

                    <div className="blog-card-footer">
                      <div className="blog-card-tags">
                        {p.tags.slice(0, 3).map(t => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                      <span className="blog-card-link">Read →</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
