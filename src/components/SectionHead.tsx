import type { ReactNode } from 'react';
import { navigate } from '../lib/useHashRoute';

interface Props {
  /** Running index, shown small and mono to the left of the label. */
  num: string;
  label: string;
  /** The site map draws a link to the gallery in the corner of every
   *  section, so it is on by default. */
  gallery?: boolean;
  /** Extra controls for the right-hand side, e.g. tag filters. */
  children?: ReactNode;
}

/**
 * One header for every section: bracketed label on the left, controls and
 * the gallery link on the right, all sitting on a heavy rule.
 *
 * Shared rather than repeated so the bracket style, the rule weight and the
 * gallery button cannot drift apart between sections.
 */
export default function SectionHead({ num, label, gallery = true, children }: Props) {
  return (
    <div className="sec-head">
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', flexWrap: 'wrap' }}>
        <span className="font-mono" style={{ color: 'var(--muted)', fontSize: '0.68rem' }}>{num}</span>
        <h2 className="label">{label}</h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        {children}
        {gallery && (
          <button className="btn-ghost" onClick={() => navigate('/gallery')}>
            Gallery <span aria-hidden="true">↗</span>
          </button>
        )}
      </div>
    </div>
  );
}
