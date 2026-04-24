import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { Reveal } from './Reveal';

const ACCENT_COLORS = ['#2a9d8f','#4361ee','#f4a261','#52b788','#e63946','#7b61ff'];
const ACCENT_BGS    = ['#e8f4f0','#eef2ff','#fff8ee','#f0f7ee','#fdf0f0','#f3f0ff'];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad section-alt" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="label">02 — Projects</p>
          <h2 className="heading">Selected Work</h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.4rem' }}>
          {projects.map((p, i) => {
            const ac = ACCENT_COLORS[i % ACCENT_COLORS.length];
            const bg = ACCENT_BGS[i % ACCENT_BGS.length];
            return (
              <Reveal key={p.id} delay={i * 55}>
                <div
                  className="card"
                  style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}
                  onClick={() => setActive(p)}
                >
                  {/* Top accent bar */}
                  <div style={{ height: 3, background: ac, transition: 'opacity 0.2s' }} />

                  {/* Thumbnail (if exists) */}
                  {p.thumbnail && (
                    <div style={{ overflow: 'hidden', maxHeight: 160 }}>
                      <img src={p.thumbnail} alt={p.title} style={{ width: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                  )}

                  <div style={{ padding: '1.2rem 1.3rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Period + category */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className="tag" style={{ background: bg, borderColor: ac + '55', color: ac, fontWeight: 500 }}>{p.category}</span>
                    </div>

                    <h3 className="font-display" style={{ fontSize: '1.15rem', lineHeight: 1.15, marginBottom: '0.55rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{p.description}</p>

                    {/* Key result bullets */}
                    <ul style={{ listStyle: 'none', marginBottom: '1rem' }}>
                      {p.results.slice(0, 2).map((r, ri) => (
                        <li key={ri} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '0.25rem' }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: ac, flexShrink: 0, marginTop: '0.38rem' }} />
                          {r}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                      <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--muted)' }}>
                        {p.github ? '↗ GitHub available' : 'In progress'}
                      </span>
                      <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: ac, textTransform: 'uppercase' }}>
                        Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
