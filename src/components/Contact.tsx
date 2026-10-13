import { personalInfo } from '../data/portfolioData';
import { resume } from '../lib/resume';
import { Reveal } from './Reveal';
import SectionHead from './SectionHead';

/**
 * Panel 4 of the site map: four link tiles, then the location line and the
 * handle underneath.
 */
export default function Contact() {
  const links = [
    { label: 'Email',    value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { label: 'GitHub',   value: 'more-sidd',        href: personalInfo.github },
    { label: 'LinkedIn', value: 'more-siddhi',      href: personalInfo.linkedin },
    {
      label: 'Resume',
      value: resume.opensInBrowser ? 'View PDF' : 'Download',
      href: resume.url,
      download: !resume.opensInBrowser,
    },
  ];

  return (
    <section id="contact" className="section-pad section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="06" label="Contact" />

        <Reveal>
          <p className="prose-p" style={{ marginBottom: '1.8rem' }}>
            Open to robotics co-ops, research collaborations and full-time roles in{' '}
            <span className="kw kw-pink">assistive tech</span>,{' '}
            <span className="kw kw-blue">autonomous systems</span> and{' '}
            <span className="kw kw-amber">human-robot interaction</span>.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="contact-grid">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="contact-link"
                /* A download must not also open a tab, and neither must
                   mailto — only real external links get _blank. */
                {...(l.download
                  ? { download: '' }
                  : l.href.startsWith('mailto')
                    ? {}
                    : { target: '_blank', rel: 'noreferrer' })}
              >
                <span className="contact-link-label">{l.label}</span>
                <span className="contact-link-val">{l.value}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="contact-foot">
          <span>Based in Boston, Massachusetts</span>
          <span>@more-sidd</span>
        </div>
      </div>
    </section>
  );
}
