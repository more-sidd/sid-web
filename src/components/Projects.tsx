import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import SectionHead from './SectionHead';

/** One preview frame per tile; the rest of the set lives in the modal. */
const previewOf = (p: Project) => p.images?.[0] ?? p.thumbnail;

const pad = (n: number) => String(n + 1).padStart(2, '0');

/**
 * Panel 2c of the site map: a plain grid of tiles, one per project.
 *
 * The tiles share single-pixel gridlines (the grid's own background shows
 * through the gaps) so the block reads as one ruled table rather than eight
 * floating cards. Images move into the modal; on the map the tiles are text.
 */
export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead num="03" label="Projects">
          <span className="font-mono" style={{ color: 'var(--muted)' }}>
            {projects.length} total
          </span>
        </SectionHead>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className="proj-tile"
              onClick={() => setActive(p)}
              aria-haspopup="dialog"
            >
              {previewOf(p) && (
                <div className="proj-tile-cover">
                  <img src={previewOf(p)} alt="" loading="lazy" />
                </div>
              )}

              <div className="proj-tile-top">
                <span>{pad(i)}</span>
                <span style={{ textAlign: 'right' }}>{p.category}</span>
              </div>

              <h3 className="proj-tile-title">{p.shortTitle ?? p.title}</h3>
              <p className="proj-tile-desc">{p.description}</p>

              <p className="proj-tile-foot">
                {p.status === 'in-progress' && <span className="status-dot" aria-hidden="true" />}
                {p.status === 'in-progress' ? 'In progress' : 'Complete'}
                {p.images && p.images.length > 0 &&
                  ` · ${p.images.length} photo${p.images.length === 1 ? '' : 's'}`}
                {' · Open →'}
              </p>
            </button>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
