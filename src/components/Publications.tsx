import { publications } from '../data/portfolioData';
import { Reveal } from './Reveal';

export default function Publications() {
  return (
    <section id="publications" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="label">05 — Publications</p>
          <h2 className="heading">Research</h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          {publications.map((pub, i) => (
            <Reveal key={pub.id} delay={i * 80}>
              <div className="card" style={{ padding: '1.8rem 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                  <div>
                    <span className="font-mono" style={{
                      fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                      background: 'var(--accent)', color: '#fff',
                      padding: '0.2rem 0.65rem', borderRadius: 2, display: 'inline-block', marginBottom: '0.7rem',
                    }}>
                      {pub.year} · Conference Paper
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.35, maxWidth: 600 }}>{pub.title}</h3>
                  </div>
                  {pub.externalUrl && (
                    <a href={pub.externalUrl} target="_blank" rel="noreferrer" className="btn-ghost" style={{ flexShrink: 0, padding: '0.4rem 0.9rem', fontSize: '0.65rem' }}>
                      DOI ↗
                    </a>
                  )}
                </div>

                {/* Authors */}
                <p className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                  {pub.authors.map((a, ai) => (
                    <span key={ai}>
                      {a === 'Siddhi More'
                        ? <strong style={{ color: 'var(--accent)', textDecoration: 'underline', textDecorationColor: '#e8b09a' }}>{a}</strong>
                        : a
                      }
                      {ai < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>

                {/* Venue */}
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', fontStyle: 'italic', marginBottom: '0.8rem' }}>
                  {pub.venue}
                </p>

                {/* Abstract */}
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75 }}>{pub.abstract}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
