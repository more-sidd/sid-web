import { personalInfo } from '../data/portfolioData';
import { Reveal } from './Reveal';
import SectionHead from './SectionHead';

/**
 * Panel 2 of the site map: copy on both sides of a round portrait, with a
 * gallery link in the header.
 *
 * Keyword colours follow the reference layout. The hues are from the
 * supplied palette but driven to 4.5:1 against all three light grounds,
 * since the pastels as given sit between 1.2:1 and 3.1:1 — see the keyword
 * block in index.css. Weight carries the emphasis alongside hue, so colour
 * is never the only signal.
 */
export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="01" label="About me" />

        <Reveal>
          <p className="about-tagline">Engineer. Researcher. Builder.</p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-col">
            <div>
              <p className="about-p">
                I have been a <span className="kw kw-blue">curious learner</span> for as
                long as I can remember. As a kid I was the one opening up toys and
                computers, with a soft spot for{' '}
                <span className="kw kw-amber">astronomy and mechanics</span>.
              </p>
              <p className="about-p">
                That turned into exploring engineering, and it landed me in{' '}
                <span className="kw kw-eggplant">mechanical engineering</span> — which is
                what led me to robotics.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <figure className="about-portrait">
              <img src={personalInfo.photo} alt="Siddhi More" />
            </figure>
          </Reveal>

          <Reveal delay={160} className="about-col">
            <div>
              <p className="about-p">
                Now I love robots and cannot get enough of them. TurtleBot, a robot arm,
                Pupper v3, or my own builds — they are all proof of how much I love{' '}
                <span className="kw kw-green">robotics and hardware</span>.
              </p>
              <p className="about-p">
                I am motivated to put what I know toward bringing change, and I am
                especially drawn to <span className="kw kw-pink">medical robotics</span>.
                I hold the <span className="kw kw-amber">Global Student Award</span> at
                Northeastern and have published in{' '}
                <span className="kw kw-orange">AIP Conference Proceedings</span>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
