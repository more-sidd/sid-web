import { personalInfo, skills } from '../data/portfolioData';
import { Reveal } from './Reveal';

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="label">01 — About</p>
          <h2 className="heading">Engineer. Researcher. Builder.</h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(200px,22%,260px) 1fr', gap: '3.5rem', alignItems: 'start' }}>
          {/* Photo */}
          <Reveal delay={80}>
            <img
              src={personalInfo.photo}
              alt="Siddhi More"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: 4, border: '1.5px solid var(--border)' }}
            />
          </Reveal>

          {/* Text + Skills */}
          <div>
            <Reveal delay={120}>
              <p style={{ color: 'var(--muted)', marginBottom: '0.9rem', lineHeight: 1.8, fontSize: '0.97rem' }}>
                I'm a <strong style={{ color: 'var(--text)' }}>robotics graduate student at Northeastern University</strong> (MS, May 2027),
                with a background in mechanical engineering from Mumbai University. My work bridges
                physical design, embedded systems, and intelligent autonomy.
              </p>
              <p style={{ color: 'var(--muted)', marginBottom: '0.9rem', lineHeight: 1.8, fontSize: '0.97rem' }}>
                I'm motivated by systems that directly help people — wearable assistive devices,
                prosthetics that restore natural movement, and autonomous robots that take on tasks
                humans shouldn't have to. I hold the <strong style={{ color: 'var(--text)' }}>Global Student Award</strong> at Northeastern
                and have published in <strong style={{ color: 'var(--text)' }}>AIP Conference Proceedings</strong>.
              </p>
            </Reveal>

            {/* Skills */}
            <Reveal delay={180}>
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {skills.map(s => (
                  <div key={s.category}>
                    <p className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.45rem' }}>
                      {s.category}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {s.items.map(item => <span key={item} className="tag">{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 680px) {
          #about .max-w-6xl > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
