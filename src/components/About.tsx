import { personalInfo } from '../data/portfolioData';
import { Reveal } from './Reveal';

export default function About() {
  // Second slot is optional — until a path is set it shows a labelled
  // placeholder rather than a broken image.
  const second = personalInfo.photo2?.trim();

  return (
    <section id="about" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="label">01 — About</p>
          <h2 className="heading">Engineer. Researcher. Builder.</h2>
        </Reveal>

        {/* Photo, bio, photo — one image on each side of the text. */}
        <div className="about-grid">
          <Reveal delay={80} className="about-photo">
            <figure className="photo-frame">
              <img src={personalInfo.photo} alt="Siddhi Sanjay More" />
            </figure>
          </Reveal>

          <Reveal delay={120} className="about-bio">
            <div>
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
            </div>
          </Reveal>

          <Reveal delay={160} className="about-photo">
            {second ? (
              <figure className="photo-frame">
                <img src={second} alt="Siddhi in the lab" />
              </figure>
            ) : (
              <div className="photo-frame photo-frame-empty">
                <span>
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
    </section>
  );
}
