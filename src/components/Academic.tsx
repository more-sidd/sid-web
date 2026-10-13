import { education, experience, publications } from '../data/portfolioData';
import { Reveal } from './Reveal';
import SectionHead from './SectionHead';

const pad = (n: number) => String(n + 1).padStart(2, '0');

/**
 * Panel 2b of the site map: education, professional work and publications.
 *
 * These were three side-by-side columns, which read badly — the degrees ran
 * out after two entries while the work column kept going, so the section was
 * a short stub beside a very long wall. Now each block runs full width and
 * they stack, with dates and numbering in a narrow left rail and the prose
 * capped at a comfortable measure. One thing at a time, top to bottom.
 */
export default function Academic() {
  return (
    <section id="academic" className="section-pad section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="02" label="Academic & professional" />

        {/* ── Education: the two degrees side by side ── */}
        <Reveal className="acad-block">
          <div>
            <p className="col-head">Education</p>
            <div className="edu-pair">
              {education.map(e => (
                <div key={e.id} className="edu-card">
                  <p className="edu-year">{e.graduationDate}</p>
                  <h3 className="entry-title">{e.degree}</h3>
                  <p className="entry-sub">{e.institution} · {e.location}</p>

                  {e.honors && e.honors.length > 0 && (
                    <div className="tag-wrap" style={{ marginTop: '0.7rem' }}>
                      {e.honors.map(h => <span key={h} className="tag tag-accent">{h}</span>)}
                    </div>
                  )}

                  {e.courses && e.courses.length > 0 && (
                    <div style={{ marginTop: '0.8rem' }}>
                      <p className="font-mono" style={{ fontSize: '0.58rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                        Coursework
                      </p>
                      <div className="tag-wrap">
                        {e.courses.map(c => <span key={c} className="tag tag-sm">{c}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Professional work ── */}
        <Reveal delay={80} className="acad-block">
          <div>
            <p className="col-head">Professional work</p>
            <ul className="entries">
              {experience.map((x, i) => (
                <li key={x.id} className="entry-wide">
                  <div className="entry-rail">
                    <span className="entry-num">{pad(i)}</span>
                    <span className="entry-period">{x.startDate} – {x.endDate}</span>
                    <span className="entry-place">{x.location}</span>
                  </div>
                  <div className="entry-main">
                    <h3 className="entry-title">{x.title}</h3>
                    <p className="entry-sub">{x.company}</p>
                    <ul className="entry-bullets">
                      {x.responsibilities.map((r, ri) => <li key={ri}>{r}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ── Publications ── */}
        <Reveal delay={140} className="acad-block">
          <div>
            <p className="col-head">Publications</p>
            <ul className="entries">
              {publications.map((p, i) => (
                <li key={p.id} className="entry-wide">
                  <div className="entry-rail">
                    <span className="entry-num">{pad(i)}</span>
                    <span className="entry-period">{p.year}</span>
                  </div>
                  <div className="entry-main">
                    <h3 className="entry-title">{p.title}</h3>
                    <p className="entry-sub">
                      {p.authors.map((a, ai) => (
                        <span key={ai}>
                          {a === 'Siddhi More' ? <strong style={{ color: 'var(--text)' }}>{a}</strong> : a}
                          {ai < p.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                    <p className="entry-body">{p.venue}</p>
                    {p.externalUrl && (
                      <a
                        href={p.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-line"
                        style={{ marginTop: '0.7rem' }}
                      >
                        DOI <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
