import { Project } from '../types';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding: '1.6rem 1.8rem 1.2rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div>
            <span className="tag tag-accent" style={{ marginBottom: '0.6rem', display: 'inline-block' }}>{project.category}</span>
            <h3 className="font-display" style={{ fontSize: '1.6rem', lineHeight: 1.1 }}>{project.title}</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', flexShrink: 0, padding: '0.2rem' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8"/>
              <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.8"/>
            </svg>
          </button>
        </div>

        {/* Thumbnail */}
        {project.thumbnail && (
          <div style={{ padding: '1.2rem 1.8rem 0' }}>
            <img src={project.thumbnail} alt={project.title} style={{ width: '100%', borderRadius: 3, border: '1px solid var(--border)' }} />
          </div>
        )}

        {/* Body */}
        <div style={{ padding: '1.4rem 1.8rem 1.8rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.93rem' }}>{project.fullDescription}</p>

          {[
            { label: 'Objectives', items: project.objectives },
            { label: 'Results',    items: project.results },
            { label: 'Key Takeaways', items: project.keyTakeaways },
          ].map(block => (
            <div key={block.label}>
              <p className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                {block.label}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {block.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '0.42rem' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost" style={{ alignSelf: 'flex-start' }}>
              View on GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
