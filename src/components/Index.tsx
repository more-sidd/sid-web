import { personalInfo, projects, education, publications } from '../data/portfolioData';
import { allPosts, formatDate } from '../lib/posts';
import { resume } from '../lib/resume';
import { navigate } from '../lib/useHashRoute';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/**
 * Panel 1 of the site map: the name and avatar, the three jump buttons
 * (projects, resume, socials), a fact row, and two live panels on the right.
 *
 * Everything on the right is derived from the data rather than typed in, so
 * "currently building" and "recent writing" cannot go stale.
 */
export default function Index() {
  const building = projects.find(p => p.status === 'in-progress');
  const latest   = [...allPosts].sort((a, b) => b.date.localeCompare(a.date))[0];

  const current = education[0];   // newest first

  return (
    <section id="index" className="idx">
      <div className="max-w-6xl mx-auto px-6" style={{ width: '100%' }}>
        <div className="idx-meta">
          <span>Portfolio / {new Date().getFullYear()}</span>
          <span>Boston, Massachusetts</span>
        </div>

        <div className="idx-grid">
          {/* ── Left: identity ── */}
          <div>
            <div className="idx-namerow">
              <h1 className="idx-name">
                Siddhi
                <br />
                More
              </h1>
              <div className="idx-avatar">
                <img src="/avatar.png" alt="Siddhi More" width={124} height={124} />
              </div>
            </div>

            <p className="idx-role">
              Wearable &amp; <span className="kw kw-pink">assistive robotics</span> engineer
            </p>

            <p className="idx-sub">
              Hardware that restores human mobility. Planetary gearbox design and{' '}
              <span className="kw kw-green">embedded firmware</span> through to{' '}
              <span className="kw kw-blue">ROS2 navigation</span> and ML-validated
              musculoskeletal simulation.
            </p>

            {/* The three buttons the map puts under the name. */}
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

          {/* ── Right: the two panels from the map ── */}
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
                <p className="info-card-label">Recent {latest.kind === 'news' ? 'news' : 'blog'}</p>
                <p className="info-card-title">{latest.title}</p>
                <p className="info-card-desc">
                  {formatDate(latest.date)} · {latest.readingTime} min read
                </p>
                <button className="info-card-link" onClick={() => navigate(`/blog/${latest.slug}`)}>
                  Read it <span aria-hidden="true">→</span>
                </button>
              </div>
            )}

            <div className="info-card">
              <p className="info-card-label">Reach me</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="info-card-link"
                style={{ marginTop: 0, fontSize: '0.7rem' }}
              >
                {personalInfo.email}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
