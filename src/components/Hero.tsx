import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '72px 72px', opacity: 0.45,
      }} />
      {/* Warm glow */}
      <div style={{
        position: 'absolute', top: '-180px', right: '-180px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(193,68,14,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Eyebrow */}
        <div className="font-mono" style={{
          fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.6rem',
          marginBottom: '1rem',
          animation: 'fadeUp 0.6s ease 0.1s both',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
          MS Robotics · Northeastern University · Boston, MA
        </div>

        {/* Name */}
        <h1 className="font-display" style={{
          fontSize: 'clamp(4.5rem, 13vw, 10rem)',
          lineHeight: 0.88, color: 'var(--text)',
          animation: 'fadeUp 0.7s ease 0.22s both',
        }}>
          Siddhi<br />
          <span style={{ color: 'var(--accent)' }}>More
            <span style={{ animation: 'blink 1s step-end infinite', display: 'inline-block' }}>.</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-display" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.7rem)', color: 'var(--muted)',
          marginTop: '1.2rem', letterSpacing: '0.06em',
          animation: 'fadeUp 0.7s ease 0.36s both',
        }}>
          Building robots that sense, decide, and help people.
        </p>

        {/* Sub */}
        <p style={{
          maxWidth: 560, fontSize: '0.97rem', color: 'var(--muted)',
          lineHeight: 1.8, marginTop: '1rem',
          animation: 'fadeUp 0.7s ease 0.46s both',
        }}>
          I work at the intersection of mechanical engineering and intelligent autonomy —
          wearable assistive devices, impedance-controlled prosthetics, and autonomous navigation systems.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2.2rem', animation: 'fadeUp 0.7s ease 0.56s both' }}>
          <button className="btn-primary" onClick={() => scroll('projects')}>View Projects</button>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub ↗</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn ↗</a>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">Resume ↗</a>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'flex', alignItems: 'center', marginTop: '3.5rem', width: 'fit-content',
          background: 'var(--surface)', border: '1.5px solid var(--border)', borderRadius: 4, overflow: 'hidden',
          animation: 'fadeUp 0.7s ease 0.7s both',
        }}>
          {[
            { n: '3.67', l: 'GPA' },
            { n: '6',    l: 'Projects' },
            { n: '2',    l: 'Publications' },
            { n: '2027', l: 'Graduating' },
          ].map((s, i) => (
            <div key={s.l} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <div style={{ width: 1, height: 36, background: 'var(--border)' }} />}
              <div style={{ padding: '1rem 1.6rem', textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: '1.9rem', color: 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
                <div className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 2 }}>{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes pulse  { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(0.8); } }
        @keyframes blink  { 0%,100% { opacity:1; } 50% { opacity:0; } }
      `}</style>
    </section>
  );
}
