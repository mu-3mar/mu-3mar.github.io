import doc from '../../styles/doc-content.module.css';
import { experience, education } from '../../data/profile';

export default function Experience() {
  return (
    <div className={doc.docContent}>
      <h3 style={{ marginTop: 0 }}>Work History</h3>
      <div className={doc.timeline}>
        {experience.map((job) => (
          <div className={doc.cardItem} key={job.title}>
            <h4>{job.title}</h4>
            <div className={doc.metaLine}>{job.company}</div>
            <div><span className={doc.timelineBadge}>{job.period}</span></div>
            {job.logo && (
              <img
                src={job.logo}
                alt={job.company}
                className={doc.companyLogo}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            {job.stack && <div className={doc.stackLine}>{job.stack}</div>}
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3>Education</h3>
      <div className={doc.cardItem}>
        <h4>{education.degree}</h4>
        <span className={doc.timelineBadge}>{education.period}</span>
        {education.logo && (
          <img
            src={education.logo}
            alt={education.school}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className={doc.companyLogo}
          />
        )}
        <div className={doc.metaLine}>
          {education.school} · {education.detail}
        </div>
      </div>
    </div>
  );
}
