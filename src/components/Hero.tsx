import { personalInfo, projects } from '../data/portfolioData';
import { posts, formatDate } from '../lib/posts';
import { navigate } from '../lib/useHashRoute';

export default function Hero() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  // Both cards read live data, so they never go stale.
  const latest = posts[0];
  const onBench = projects.find(p => p.status === 'in-progress');

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-glow" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-desk">

          {/* ── Left: the pitch ── */}
          <div>
            <p className="hero-eyebrow">
              <span className="hero-dot" aria-hidden="true" />
              MS Robotics · Northeastern University · Boston
            </p>

            <h1 className="hero-name">Siddhi More</h1>

            <p className="hero-tagline">Building robots that sense, decide, and help people.</p>

            <p className="hero-sub">
              I work at the intersection of mechanical engineering and intelligent autonomy —
              wearable assistive devices, impedance-controlled prosthetics, and autonomous
              navigation systems.
            </p>

            <div className="hero-cta">
              <button className="btn-primary" onClick={() => scroll('projects')}>View Projects</button>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">Resume</a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
            </div>

            <dl className="stat-row">
              <div className="stat-tile"><dt>GPA</dt><dd>3.25</dd></div>
              <div className="stat-tile"><dt>Publications</dt><dd>3</dd></div>
              <div className="stat-tile"><dt>Graduating</dt><dd>May 2027</dd></div>
            </dl>
          </div>

          {/* ── Right: portrait + live cards ── */}
          <div className="hero-side">
            <img className="hero-portrait" src={personalInfo.photo} alt="Siddhi Sanjay More" />

            {latest && (
              <article className="info-card">
                <p className="info-card-label">Latest writing</p>
                <p className="info-card-title">{latest.title}</p>
                <p className="info-card-desc">
                  {formatDate(latest.date)} · {latest.readingTime} min read
                </p>
                <button className="info-card-link" onClick={() => navigate('/blog/' + latest.slug)}>
                  Read post →
                </button>
              </article>
            )}

            {onBench && (
              <article className="info-card">
                <p className="info-card-label">Currently building</p>
                <p className="info-card-title">{onBench.category}</p>
                <p className="info-card-desc">{onBench.description}</p>
                <button className="info-card-link" onClick={() => scroll('projects')}>
                  See project →
                </button>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
