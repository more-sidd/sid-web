import { personalInfo } from '../data/portfolioData';
import { resume } from '../lib/resume';

/**
 * Contact as the site footer rather than a section of its own.
 *
 * It was a full home-page section with its own nav entry, which meant the
 * one thing a visitor might want from any page was reachable only from the
 * bottom of the home page. The footer renders outside the route switch, so
 * these links are now on the portfolio page, the gallery and every post too.
 */
export default function Footer() {
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
    <footer id="contact" className="site-footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="footer-top">
          <div className="footer-pitch">
            <h2 className="footer-title">Get in touch</h2>
            <p className="footer-blurb">
              Open to robotics co-ops, research collaborations and full-time roles in{' '}
              <span className="kw kw-pink">assistive tech</span>,{' '}
              <span className="kw kw-blue">autonomous systems</span> and{' '}
              <span className="kw kw-amber">human-robot interaction</span>.
            </p>
          </div>

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
        </div>

        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Siddhi More · Boston, Massachusetts</span>
          <span>@more-sidd</span>
          <span>React · Vite · TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
