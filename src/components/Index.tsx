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
      {/* Outside the max-width container on purpose: this one runs edge to
          edge, which is what makes it read as a banner rather than a figure. */}
      <figure className="idx-banner">
        <img
          src="/gallery/soldering.webp"
          alt="Siddhi soldering a small circuit board at a workbench"
          width={2000}
          height={1125}
        />
      </figure>

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
                I&rsquo;m a mechanical engineer who likes building real, physical machines
                that work reliably and efficiently. My background spans{' '}
                <span className="kw kw-green">CAD, prototyping, and manufacturing</span>,
                alongside{' '}
                <span className="kw kw-blue">sensor fusion and control systems</span>.
              </p>
              <p>
                Right now, I&rsquo;m focused on robotics and physical AI&mdash;specifically
                the messy, rewarding work of{' '}
                <span className="kw kw-pink">closing the sim-to-real gap</span>. With
                software and AI tools becoming so accessible, the real bottleneck
                isn&rsquo;t writing code; it&rsquo;s getting{' '}
                <span className="kw kw-amber">traditional hardware and mechanical systems</span>{' '}
                to actually perform in the real world. That&rsquo;s the problem I want to
                solve.
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

          {/* ── Right: the two live panels ── */}
          <aside className="idx-side">
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

            {/* Square, which is the photo's own ratio, so the headshot is
                uncropped. */}
            <figure className="idx-headshot">
              <img
                src={personalInfo.photo}
                alt="Siddhi More"
                width={800}
                height={800}
                loading="lazy"
              />
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
