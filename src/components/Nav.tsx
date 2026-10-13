import { useState, useEffect } from 'react';
import { useHashRoute, goHome, navigate } from '../lib/useHashRoute';
import { resume } from '../lib/resume';

/* The site map draws four arrows out of the nav, so there are four links.
   `covers` is every section a link owns, which keeps the right one lit while
   you scroll through the rest of its group. Projects and the toolbox sit
   under Work; the gallery has its own button in every section header. */
const LINKS = [
  { target: 'about',    label: 'About',      covers: ['about'] },
  { target: 'academic', label: 'Background', covers: ['academic'] },
  { target: 'projects', label: 'Work',       covers: ['projects', 'toolbox'] },
  { target: 'writing',  label: 'Blog',       covers: ['writing'] },
  { target: 'contact',  label: 'Contact',    covers: ['contact'] },
];

/** Which nav group owns the section currently in view. */
const groupFor = (sectionId: string) =>
  LINKS.find(l => l.covers.includes(sectionId))?.target ?? '';

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2"  x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2"  y1="12" x2="5"  y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22"  y1="4.22"  x2="6.34"  y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" />
      <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [open, setOpen]         = useState(false);
  const [dark, setDark]         = useState(() => localStorage.getItem('theme') === 'dark');
  const route = useHashRoute();
  const onHome = route.name === 'home';

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Whichever section fills the most of the screen is the current one.
  // A fixed scroll line breaks on short sections: centring a short section
  // leaves a taller neighbour across the top of the viewport, and the line
  // picks the neighbour.
  useEffect(() => {
    if (!onHome) { setActive(''); return; }

    const pick = () => {
      const vh = window.innerHeight;
      let current = '', mostVisible = 0;
      document.querySelectorAll('section[id]').forEach(sec => {
        const r = sec.getBoundingClientRect();
        const visible = Math.min(r.bottom, vh) - Math.max(r.top, 0);
        if (visible > mostVisible) { mostVisible = visible; current = sec.id; }
      });
      setActive(current);
    };

    pick();
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(pick);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [onHome]);

  const scrollTo = (id: string) => {
    setOpen(false);
    if (onHome) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    else goHome(id);   // leave the post or gallery first, then scroll
  };

  return (
    <nav className={`nav-base ${scrolled || !onHome ? 'nav-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => (onHome ? window.scrollTo({ top: 0, behavior: 'smooth' }) : goHome())}
          className="nav-logo"
          aria-label="Back to top"
        >
          siddhi more
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(l => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className={`nav-link ${groupFor(active) === l.target ? 'nav-link-active' : ''}`}
            >
              {l.label}
            </button>
          ))}

          <button
            onClick={() => navigate('/gallery')}
            className={`nav-link ${route.name === 'gallery' ? 'nav-link-active' : ''}`}
          >
            Gallery
          </button>

          <ThemeToggle dark={dark} onToggle={() => setDark(d => !d)} />

          <a {...resume.linkProps} className="btn-primary">
            Resume <span aria-hidden="true">{resume.glyph}</span>
          </a>
        </div>

        {/* Mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div className="md:hidden">
            <ThemeToggle dark={dark} onToggle={() => setDark(d => !d)} />
          </div>
          <button
            className="md:hidden"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)' }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open
                ? <><line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="1.6"/><line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="1.6"/></>
                : <><line x1="2" y1="5"  x2="20" y2="5"  stroke="currentColor" strokeWidth="1.6"/><line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.6"/><line x1="2" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.6"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map(l => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className="mobile-link"
              style={groupFor(active) === l.target ? { color: 'var(--text)' } : undefined}
            >
              {l.label}
            </button>
          ))}
          <button className="mobile-link" onClick={() => { setOpen(false); navigate('/gallery'); }}>
            Gallery
          </button>
          <a {...resume.linkProps} className="mobile-link" onClick={() => setOpen(false)}>
            Resume {resume.glyph}
          </a>
        </div>
      )}
    </nav>
  );
}
