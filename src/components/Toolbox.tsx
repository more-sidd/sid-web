import { skills } from '../data/portfolioData';
import { Reveal } from './Reveal';
import SectionHead from './SectionHead';

/**
 * The site map does not draw a skills panel, but the data is real and
 * dropping it would lose content rather than restyle it. It sits here as a
 * compact ruled list instead of the card grid it used to be — easy to delete
 * from App.tsx if it is genuinely not wanted.
 */
export default function Toolbox() {
  return (
    <section id="toolbox" className="section-pad section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="04" label="Toolbox" gallery={false} />

        <div>
          {skills.map((s, i) => (
            <Reveal key={s.category} delay={i * 40}>
              <div className="skill-row">
                <p className="skill-cat">{s.category}</p>
                <div className="tag-wrap">
                  {s.items.map(item => <span key={item} className="tag">{item}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
