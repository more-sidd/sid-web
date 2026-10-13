import { projects, education, publications } from '../data/portfolioData';
import { allPosts, formatDate } from '../lib/posts';
import { resume } from '../lib/resume';
import { navigate } from '../lib/useHashRoute';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/**
 * Panel 1 of the site map: the name and photo, the four jump buttons, a fact
 * row, and the two highlight panels on the right.
 *
 * Both panels are derived from the data rather than typed in, so "currently
 * building" and "recent writing" cannot go stale.
 */
export default function Index() {
  const building = projects.find(p => p.status === 'in-progress');
  const latest   = [...allPosts].sort((a, b) => b.date.localeCompare(a.date))[0];
  const current  = education[0];   // newest first

  return (
    <section id="index" className="idx">
      <div className="max-w-6xl mx-auto px-6" style={{ width: '100%' }}>
        <div className="idx-meta">
          <span>Portfolio / {new Date().getFullYear()}</span>
          <span>Boston, Massachusetts</span>
        </div>

        <div className="idx-grid">
          {/* ── Left: identity. The photo takes its own column beside the
               copy rather than sitting inline with the name, which leaves
               no dead space under it. ── */}
          <div className="idx-left">
            <div className="idx-copy">
              <h1 className="idx-name">
                Siddhi
                <br />
                More
              </h1>

              <p className="idx-role">
                <span className="kw kw-green">Hardware</span> &amp;{' '}
                <span className="kw kw-eggplant">mechanical</span> engineer
              </p>

              <p className="idx-sub">
                MS Robotics with a mechanical engineering background. My interest is{' '}
                <span className="kw kw-green">robot hardware</span> — building the
                simulation, then{' '}
                <span className="kw kw-blue">validating it on the real thing</span>.
              </p>

              {/* Three buttons under the name. Socials drops you at the
                  profile tiles in the contact section. */}
              <div className="idx-cta">
                <button className="btn-primary" onClick={() => scrollTo('projects')}>
                  Projects <span aria-hidden="true">↓</span>
                </button>
                <a {...resume.linkProps} className="btn-ghost">
                  Resume <span aria-hidden="true">{resume.glyph}</span>
                </a>
                <button className="btn-ghost" onClick={() => scrollTo('contact')}>
                  Socials <span aria-hidden="true">↓</span>
                </button>
              </div>

              <dl className="stat-row">
                <div className="stat-tile">
                  <dt>Publications</dt>
                  <dd>{publications.length}</dd>
                </div>
                <div className="stat-tile">
                  <dt>Graduating</dt>
                  <dd>{current?.graduationDate}</dd>
                </div>
              </dl>
            </div>

            <div className="idx-avatar">
              <img src="/gallery/sidd3.jpg" alt="Siddhi More" width={320} height={320} />
            </div>
          </div>

          {/* ── Right: the two highlights from the map ── */}
          <aside className="idx-side">
            {building && (
              <div className="info-card">
                <p className="info-card-label">
                  <span className="live-dot" aria-hidden="true" />
                  Currently building
                </p>
                <p className="info-card-title">{building.shortTitle ?? building.title}</p>
                <p className="info-card-desc">{building.description}</p>
                <button className="info-card-link" onClick={() => scrollTo('projects')}>
                  See the work <span aria-hidden="true">→</span>
                </button>
              </div>
            )}

            {latest && (
              <div className="info-card">
                <p className="info-card-label">
                  Latest {latest.kind === 'news' ? 'news' : 'writing'}
                </p>
                <p className="info-card-title">{latest.title}</p>
                <p className="info-card-desc">
                  {formatDate(latest.date)} · {latest.readingTime} min read
                </p>
                <button className="info-card-link" onClick={() => navigate(`/blog/${latest.slug}`)}>
                  Read it <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
