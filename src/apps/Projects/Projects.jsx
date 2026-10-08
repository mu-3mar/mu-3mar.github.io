import doc from '../../styles/doc-content.module.css';
import { projects } from '../../data/profile';

export default function Projects() {
  return (
    <div className={doc.docContent}>
      <h3 style={{ marginTop: 0 }}>Featured Projects</h3>

      <div className={doc.projectGrid}>
      {projects.map((p) => (
        <div className={doc.cardItem} key={p.title}>
          <h4>
            {p.title}{' '}
            {p.badge && <span className={doc.timelineBadge}>{p.badge}</span>}
          </h4>
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className={doc.projectImage}
            />
          )}
          <div className={doc.stackLine}>{p.stack}</div>
          <ul>
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {p.github && (
            <div className={doc.links}>
              <a href={p.github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" /> GitHub
              </a>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}
