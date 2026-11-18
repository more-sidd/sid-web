import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { goHome } from '../lib/useHashRoute';

/**
 * The portfolio as its own page rather than a section on the home page.
 *
 * The home page was seven sections deep and the project grid sat fifth, so
 * the work itself was the hardest thing on the site to reach. Here it has an
 * address, an index at the top, and nothing above it to scroll past.
 *
 * Eight projects carry eight distinct categories — one each — so grouping by
 * `category` would produce eight groups of one. These buckets are coarser.
 * Anything whose category is not listed falls into the last bucket rather
 * than vanishing, and dev builds warn about it.
 */
const GROUPS: {
  id: string; title: string; blurb: string; categories: string[];
  /** Drives the tag, the overview heading and the group's rule. The three
   *  hues come from the verified keyword palette, so they already clear
   *  4.5:1 as text on every background this page uses. */
  tone: 'blue' | 'pink' | 'amber';
}[] = [
  {
    id: 'robotics',
    title: 'Robotics & autonomy',
    tone: 'blue',
    blurb: 'Legged locomotion, SLAM navigation and agents that decide where to go next.',
    categories: ['Legged Robots/ Quadrupeds', 'Autonomous Navigation',
                 'Reinforcement Learning', 'Autonomous Systems'],
  },
  {
    id: 'wearable',
    title: 'Wearable & assistive',
    tone: 'pink',
    blurb: 'Hardware worn on the body, built to give something back to the person wearing it.',
    categories: ['Wearable Robotics', 'Assistive Robotics'],
  },
  {
    id: 'design',
    title: 'Design & manufacturing',
    tone: 'amber',
    blurb: 'CAD, drafting, FEA and the simulation work behind parts that get made.',
    categories: ['Manufacturing Simulation', 'CAD & Drafting'],
  },
];

const bucketFor = (p: Project) =>
  GROUPS.find(g => g.categories.includes(p.category)) ?? GROUPS[GROUPS.length - 1];

const grouped = GROUPS.map(g => ({
  ...g,
  items: projects.filter(p => bucketFor(p).id === g.id),
}));

if (import.meta.env.DEV) {
  const mapped = new Set(GROUPS.flatMap(g => g.categories));
  for (const p of projects) {
    if (!mapped.has(p.category)) {
      console.warn(
        `[portfolio] "${p.category}" is not in any group, so "${p.shortTitle ?? p.title}" ` +
        `fell into "${GROUPS[GROUPS.length - 1].title}". Add it to GROUPS in Portfolio.tsx.`,
      );
    }
  }
}

/** One preview frame per entry; the rest of the set lives in the modal. */
const previewOf = (p: Project) => p.images?.[0] ?? p.thumbnail;

export default function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  /* Anchor hrefs cannot be used to jump within this page: the whole app is
     hash-routed, so a `#design` href would replace `#/portfolio` and throw
     you back to the home route. Scrolling by id sidesteps that. */
  const jumpTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="pf-page">
      <div className="max-w-6xl mx-auto px-6">
        <div className="sec-head">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', flexWrap: 'wrap' }}>
            <span className="font-mono" style={{ color: 'var(--muted)', fontSize: '0.68rem' }}>03</span>
            <h1 className="label">Portfolio</h1>
          </div>
          <button className="btn-ghost" onClick={() => goHome()}>
            <span aria-hidden="true">←</span> Back
          </button>
        </div>

        <p className="pf-intro">
          Hardware, control and simulation work, grouped by what it is rather than
          when I built it. Each entry has a short description; open one for the
          objectives, results and the photos that go with it.
        </p>

        {/* ── Overview: what is here, and a way straight to it ── */}
        <section className="pf-overview" aria-label="Portfolio overview">
          {grouped.map(g => (
            <div key={g.id} className="pf-ov-col">
              <button className={`pf-ov-title pf-tone-${g.tone}`} onClick={() => jumpTo(g.id)}>
                <span className="pf-swatch" aria-hidden="true" />
                {g.title}
                <span className="pf-ov-count">{g.items.length}</span>
              </button>
              <ul className="pf-ov-list">
                {g.items.map(p => (
                  <li key={p.id}>
                    <button className="pf-ov-link" onClick={() => setActive(p)}>
                      {p.shortTitle ?? p.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── The groups themselves ── */}
        {grouped.map(g => (
          <section key={g.id} id={g.id} className="pf-group">
            <div className={`pf-group-head pf-tone-${g.tone}`}>
              <h2 className="pf-group-title">
                <span className="pf-swatch" aria-hidden="true" />
                {g.title}
              </h2>
              <p className="pf-group-blurb">{g.blurb}</p>
            </div>

            {g.items.map(p => (
              <article key={p.id} className="pf-entry">
                <button
                  className="pf-entry-media"
                  onClick={() => setActive(p)}
                  aria-label={`Open ${p.shortTitle ?? p.title}`}
                >
                  {previewOf(p)
                    ? <img src={previewOf(p)} alt="" loading="lazy" />
                    : <span className="pf-entry-nomedia">No image yet</span>}
                </button>

                <div className="pf-entry-body">
                  <p className="pf-entry-meta">
                    <span className={`pf-tag pf-tone-${bucketFor(p).tone}`}>{p.category}</span>
                    <span className={`pf-tag pf-tag-status${p.status === 'in-progress' ? ' is-live' : ''}`}>
                      {p.status === 'in-progress' && <span className="status-dot" aria-hidden="true" />}
                      {p.status === 'in-progress' ? 'In progress' : 'Complete'}
                    </span>
                  </p>

                  <h3 className="pf-entry-title">{p.shortTitle ?? p.title}</h3>
                  <p className="pf-entry-desc">{p.description}</p>

                  {p.skills && p.skills.length > 0 && (
                    <div className="tag-wrap" style={{ marginTop: '0.7rem' }}>
                      {p.skills.slice(0, 5).map(s => <span key={s} className="tag tag-sm">{s}</span>)}
                    </div>
                  )}

                  <div className="pf-entry-actions">
                    <button className="btn-line" onClick={() => setActive(p)}>
                      Learn more <span aria-hidden="true">→</span>
                    </button>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn-line">
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </section>
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </div>
  );
}
