import { projects, education, publications, personalInfo } from '../data/portfolioData';
import { allPosts, formatDate } from '../lib/posts';
import { resume } from '../lib/resume';
import { navigate } from '../lib/useHashRoute';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/**
 * The landing section and the about section, merged.
 *
 * They were saying the same thing twice: both opened by naming what she
 * does, both carried a round portrait, and the index blurb restated the
 * about copy. This keeps one portrait, one introduction and one set of
 * jump buttons, and the bio is two paragraphs rather than four plus a
 * standalone sub-line.
 *
 * Layout is two columns: everything you read on the left, the portrait and
 * the two live panels stacked on the right. Both panels derive from the
 * data, so they cannot go stale.
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
          {/* ── Left: who, what, and where to go next ── */}
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

            <div className="idx-bio">
              <p>
                I have been a <span className="kw kw-blue">curious learner</span> for as
                long as I can remember — opening up toys and computers, with a soft spot
                for <span className="kw kw-amber">astronomy and mechanics</span>. That
                turned into mechanical engineering, and then into robotics.
              </p>
              <p>
                Now I build <span className="kw kw-green">robot hardware</span>: the
                simulation first, then{' '}
                <span className="kw kw-blue">validating it on the real thing</span>.
                TurtleBot, a robot arm, Pupper v3, or my own builds. I am especially
                drawn to <span className="kw kw-pink">medical robotics</span>. I hold the{' '}
                <span className="kw kw-amber">Global Student Award</span> at Northeastern
                and have published in{' '}
                <span className="kw kw-orange">AIP Conference Proceedings</span>.
              </p>
            </div>

            <div className="idx-cta">
              <button className="btn-primary" onClick={() => navigate('/portfolio')}>
                Portfolio <span aria-hidden="true">↗</span>
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

          {/* ── Right: portrait, then the two live panels ── */}
          <aside className="idx-side">
            <div className="idx-avatar">
              <img src={personalInfo.photo} alt="Siddhi More" width={300} height={300} />
            </div>

            {building && (
              <div className="info-card">
                <p className="info-card-label">
                  <span className="live-dot" aria-hidden="true" />
                  Currently building
                </p>
                <p className="info-card-title">{building.shortTitle ?? building.title}</p>
                <p className="info-card-desc">{building.description}</p>
                <button className="info-card-link" onClick={() => navigate('/portfolio')}>
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
