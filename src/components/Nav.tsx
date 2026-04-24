import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const LINKS = [
  { id: 'about',        label: 'About' },
  { id: 'projects',     label: 'Projects' },
  { id: 'experience',   label: 'Experience' },
  { id: 'education',    label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact',      label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`nav-base ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-2xl"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)' }}
        >
          SM<span style={{ color: 'var(--accent)' }}>_</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-mono"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: active === l.id ? 'var(--accent)' : 'var(--muted)',
                transition: 'color 0.2s',
              }}
            >
              {l.label}
            </button>
          ))}
          <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.68rem' }}>
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open
              ? <><line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/><line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="2"/></>
              : <><line x1="2" y1="5"  x2="20" y2="5"  stroke="currentColor" strokeWidth="2"/><line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="2"/><line x1="2" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          {LINKS.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '0.85rem 1.5rem', background: 'none', border: 'none',
                borderBottom: '1px solid var(--border)', cursor: 'pointer',
                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: active === l.id ? 'var(--accent)' : 'var(--muted)',
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
