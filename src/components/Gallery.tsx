import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { galleryItems } from '../data/portfolioData';
import type { GalleryItem } from '../types';

type Bucket = 'robotics' | 'fun';

const TABS: { id: Bucket; label: string }[] = [
  { id: 'robotics', label: 'Robotics & Mech' },
  { id: 'fun',      label: 'Fun & Events' },
];

const SLIDE_MS = 4500;

/** Videos are .mp4; the #t=0.1 fragment makes the browser paint a real frame
 *  instead of a black rectangle while the slide is idle. */
function Media({ item, active, controls }: { item: GalleryItem; active: boolean; controls?: boolean }) {
  if (!item.video) {
    return <img src={item.src} alt={item.caption} loading={active ? 'eager' : 'lazy'} />;
  }
  return (
    <video
      src={controls ? item.src : item.src + '#t=0.1'}
      controls={controls}
      preload="metadata"
      playsInline
      muted={!controls}
    />
  );
}

export default function Gallery() {
  const [tab, setTab] = useState<Bucket>('robotics');
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  /** Index of the item open in manual mode, or null when the lightbox is shut. */
  const [manual, setManual] = useState<number | null>(null);

  const items = useMemo(() => galleryItems.filter(i => i.category === tab), [tab]);

  // Some readers ask for less movement; for them the slideshow never auto-runs.
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const on = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  useEffect(() => { setIndex(0); }, [tab]);

  const step = useCallback((delta: number) => {
    setIndex(i => (i + delta + items.length) % items.length);
  }, [items.length]);

  // Auto-advance. Paused while the lightbox is open, and never runs on a video
  // slide — rotating away from something someone might be watching is rude.
  const onVideo = items[index]?.video === true;
  useEffect(() => {
    if (!playing || reduceMotion || manual !== null || items.length < 2 || onVideo) return;
    const t = setInterval(() => step(1), SLIDE_MS);
    return () => clearInterval(t);
  }, [playing, reduceMotion, manual, items.length, onVideo, step]);

  // Manual mode keyboard controls.
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (manual === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setManual(null);
      if (e.key === 'ArrowRight') setManual(m => (m === null ? m : (m + 1) % items.length));
      if (e.key === 'ArrowLeft')  setManual(m => (m === null ? m : (m - 1 + items.length) % items.length));
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [manual, items.length]);

  const current = items[index];
  const open = items[manual ?? -1];

  return (
    <section id="gallery" className="section-pad section-alt" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="label">05 — Gallery</p>
        <div className="gal-head">
          <h2 className="heading" style={{ marginBottom: 0 }}>Visual Archive</h2>
          <div className="gal-tabs">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`blog-filter ${tab === t.id ? 'blog-filter-active' : ''}`}
                aria-pressed={tab === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {items.length === 0 ? (
          <div className="blog-empty">
            <p>Nothing in this bucket yet — add entries to <code>galleryItems</code>.</p>
          </div>
        ) : (
          <>
            {/* ── Auto-playing stage. Clicking it opens manual mode. ── */}
            <div className="gal-stage">
              <button
                className="gal-slide"
                onClick={() => setManual(index)}
                aria-label={`Open "${current.caption}" in the viewer`}
              >
                <Media item={current} active />
                {current.video && <span className="gal-play" aria-hidden="true">▶</span>}
              </button>

              <button className="gal-arrow gal-arrow-l" onClick={() => step(-1)} aria-label="Previous">‹</button>
              <button className="gal-arrow gal-arrow-r" onClick={() => step(1)} aria-label="Next">›</button>
            </div>

            <div className="gal-bar">
              <p className="gal-caption">{current.caption}</p>
              <div className="gal-bar-right">
                <span className="gal-count">{index + 1} / {items.length}</span>
                {!reduceMotion && items.length > 1 && (
                  <button
                    className="gal-pause"
                    onClick={() => setPlaying(p => !p)}
                    aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
                  >
                    {playing ? '❙❙ Pause' : '▶ Play'}
                  </button>
                )}
              </div>
            </div>

            {/* ── Thumbnail strip: jump anywhere, and a view of the whole set ── */}
            <div className="gal-thumbs">
              {items.map((it, i) => (
                <button
                  key={it.src}
                  className={`gal-thumb ${i === index ? 'gal-thumb-on' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={it.caption}
                  aria-current={i === index}
                >
                  <Media item={it} active={false} />
                  {it.video && <span className="gal-thumb-play" aria-hidden="true">▶</span>}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Manual mode ── */}
      {open && (
        <div
          className="gal-modal"
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          onClick={() => setManual(null)}
        >
          <div className="gal-modal-inner" onClick={e => e.stopPropagation()}>
            <div className="gal-modal-top">
              <span className="gal-count">{(manual ?? 0) + 1} / {items.length}</span>
              <button ref={closeRef} className="gal-modal-close" onClick={() => setManual(null)} aria-label="Close viewer">✕</button>
            </div>

            <div className="gal-modal-stage">
              <button
                className="gal-arrow gal-arrow-l"
                onClick={() => setManual(m => (m === null ? m : (m - 1 + items.length) % items.length))}
                aria-label="Previous"
              >‹</button>

              <div className="gal-modal-media">
                <Media item={open} active controls={open.video} />
              </div>

              <button
                className="gal-arrow gal-arrow-r"
                onClick={() => setManual(m => (m === null ? m : (m + 1) % items.length))}
                aria-label="Next"
              >›</button>
            </div>

            <p className="gal-modal-caption">{open.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
