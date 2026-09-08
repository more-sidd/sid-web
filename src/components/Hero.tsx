import { personalInfo, projects } from '../data/portfolioData';
import { posts, formatDate } from '../lib/posts';
import { navigate } from '../lib/useHashRoute';

/* The reference desktop had a now-playing panel and a system monitor. Same
   furniture, repurposed: the side column carries the latest post and whatever
   is actually on the bench, both read from real data rather than hardcoded. */

export default function Hero() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const latest = posts[0];
  const onBench = projects.find(p => p.status === 'in-progress');

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-bg-glow" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-desk">

          {/* ── Main window ── */}
          <div className="win hero-win-main">
            <div className="win-bar">
              <div className="win-dots" aria-hidden="true">
                <span className="win-dot" />
                <span className="win-dot" />
              </div>
              <span className="win-title">~/siddhi — whoami</span>
            </div>

            <div className="win-body hero-win-main-body">
              <div className="hero-eyebrow">
                <span className="hero-dot" aria-hidden="true" />
                MS Robotics · Northeastern University · Boston, MA
              </div>

              <h1 className="hero-name">
                Siddhi<br />
                <span className="hero-name-accent">
                  More<span className="hero-cursor" aria-hidden="true">_</span>
                </span>
              </h1>

              <p className="hero-tagline">Building robots that sense, decide, and help people.</p>

              <p className="hero-sub">
                I work at the intersection of mechanical engineering and intelligent autonomy —
                wearable assistive devices, impedance-controlled prosthetics, and autonomous
                navigation systems.
              </p>

              <div className="hero-cta">
                <button className="btn-primary" onClick={() => scroll('projects')}>View Projects</button>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub ↗</a>
                <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">Resume ↗</a>
              </div>
            </div>
          </div>

          {/* ── Side column, offset downward so the pair reads asymmetrically ── */}
          <div className="hero-side">

            {/* Latest writing */}
            {latest && (
              <div className="win">
                <div className="win-bar">
                  <div className="win-dots" aria-hidden="true">
                    <span className="win-dot" />
                    <span className="win-dot" />
                  </div>
                  <span className="win-title">blog</span>
                </div>
                <div className="win-body">
                  <p className="bench-title">
                    {formatDate(latest.date)} · {latest.readingTime} min read
                  </p>
                  <p className="bench-desc">{latest.title}</p>
                  <button className="bench-link font-mono" onClick={() => navigate('/blog/' + latest.slug)}>
                    Read ↗
                  </button>
                </div>
              </div>
            )}

            {/* On the bench */}
            {onBench && (
              <div className="win">
                <div className="win-bar">
                  <div className="win-dots" aria-hidden="true">
                    <span className="win-dot win-dot-live" />
                    <span className="win-dot" />
                  </div>
                  <span className="win-title">on the bench</span>
                </div>
                <div className="win-body">
                  <p className="bench-title">{onBench.category}</p>
                  <p className="bench-desc">{onBench.description}</p>
                  <button className="bench-link font-mono" onClick={() => scroll('projects')}>
                    Open ↗
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
