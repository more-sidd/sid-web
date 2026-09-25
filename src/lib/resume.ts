import { personalInfo } from '../data/portfolioData';

/**
 * A PDF renders inside the browser, so it should open in a new tab. A .docx
 * cannot render, so `target="_blank"` just flashes a blank tab and then
 * downloads anyway — better to ask for the download explicitly.
 *
 * Every resume link goes through here so all three call sites stay in step
 * when the file format changes.
 */
const url = personalInfo.resumeUrl;
const opensInBrowser = /\.pdf(\?|#|$)/i.test(url);

export const resume = {
  url,
  opensInBrowser,
  /** ↗ means it opens; ↓ means it downloads. */
  glyph: opensInBrowser ? '↗' : '↓',
  label: opensInBrowser ? 'Resume ↗' : 'Resume ↓',
  /** Spread onto an <a>. */
  linkProps: opensInBrowser
    ? { href: url, target: '_blank', rel: 'noreferrer' }
    : { href: url, download: '' },
} as const;
