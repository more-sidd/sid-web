import { personalInfo } from '../data/portfolioData';
import { Reveal } from './Reveal';
import SectionHead from './SectionHead';

/**
 * Panel 2 of the site map: copy on both sides of a round portrait, with a
 * gallery link in the header.
 *
 * Keyword colours follow the reference layout. The hues are from the
 * supplied palette but driven to 4.5:1 on this paper, since the pastels as
 * given sit between 1.2:1 and 3.1:1 — see the keyword block in index.css.
 * Weight carries the emphasis alongside hue, so colour is never the only
 * signal.
 */
export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="01" label="About me" />

        <div className="about-grid">
          <Reveal className="about-col">
            <div>
              <p className="about-p">
                Hi! I&rsquo;m Siddhi, a{' '}
                <span className="kw kw-blue">robotics graduate student at Northeastern University</span>{' '}
                finishing an MS in December 2026, with a background in{' '}
                <span className="kw kw-eggplant">mechanical engineering</span> from
                Mumbai University.
              </p>
              <p className="about-p">
                My work sits where physical design meets embedded systems and autonomy:{' '}
                <span className="kw kw-amber">planetary gearboxes</span>,{' '}
                <span className="kw kw-green">firmware on bare metal</span>, and the
                control that ties them together.
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
                I&rsquo;m drawn to machines that give something back to the person using
                them &mdash; <span className="kw kw-pink">wearable assistive devices</span>,{' '}
                <span className="kw kw-orange">prosthetics that restore natural movement</span>,
                and robots that take on work nobody should have to do by hand.
              </p>
              <p className="about-p">
                I hold the <span className="kw kw-amber">Global Student Award</span> at
                Northeastern and have published in{' '}
                <span className="kw kw-green">AIP Conference Proceedings</span>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
