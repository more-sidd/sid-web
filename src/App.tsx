import Nav          from './components/Nav';
import Hero         from './components/Hero';
import About        from './components/About';
import Projects     from './components/Projects';
import Experience   from './components/Experience';
import Education    from './components/Education';
import Publications from './components/Publications';
import Contact      from './components/Contact';
import './index.css';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '1.2rem 1.5rem',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem',
      }}>
        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>
          © 2026 Siddhi More · Boston, MA
        </span>
        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--border-2)', letterSpacing: '0.06em' }}>
          React + Vite + Tailwind
        </span>
      </footer>
    </>
  );
}
