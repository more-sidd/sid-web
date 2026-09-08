import { personalInfo } from '../data/portfolioData';
import { Reveal } from './Reveal';

export default function About() {
  // Right-hand slot is optional — until a path is set it renders as a
  // labelled placeholder rather than a broken image.
  const second = personalInfo.photo2?.trim();

  return (
    <section id="about" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="label">01 — About</p>
          <h2 className="heading">Engineer. Researcher. Builder.</h2>
        </Reveal>

        {/* Photo / bio / photo. The bio is written first in the DOM so reading
            and tab order follow the content, while grid-column places it in the
            middle visually. */}
        <div className="about-grid">
          <div className="about-bio">
            <Reveal delay={80}>
              <p className="about-p">
                I'm a <strong>robotics graduate student at Northeastern University</strong> (MS, May 2027),
                with a background in mechanical engineering from Mumbai University. My work bridges
                physical design, embedded systems, and intelligent autonomy.
              </p>
              <p className="about-p">
                I'm motivated by systems that directly help people — wearable assistive devices,
                prosthetics that restore natural movement, and autonomous robots that take on tasks
                humans shouldn't have to. I hold the <strong>Global Student Award</strong> at Northeastern
                and have published in <strong>AIP Conference Proceedings</strong>.
              </p>
            </Reveal>
          </div>

          <div className="about-photo about-photo-left">
            <Reveal delay={120}>
              <figure className="photo-frame">
                <img src={personalInfo.photo} alt="Siddhi Sanjay More" />
              </figure>
            </Reveal>
          </div>

          <div className="about-photo about-photo-right">
            <Reveal delay={180}>
              {second ? (
                <figure className="photo-frame">
                  <img src={second} alt="Siddhi in the lab" />
                </figure>
              ) : (
                <div className="photo-frame photo-frame-empty">
                  <span className="font-mono">
                    2nd photo
                    <br />
                    set <code>photo2</code> in
                    <br />
                    portfolioData.ts
                  </span>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
