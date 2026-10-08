import doc from '../../styles/doc-content.module.css';
import { profile, education, skills } from '../../data/profile';

export default function About() {
  return (
    <div className={doc.docContent}>
      <section className={doc.profileHeader}>
        <img className={doc.profileAvatar} src={profile.avatar} alt={profile.name} />
        <div className={doc.profileIntro}>
          <h2>Hi, I&apos;m {profile.name.split(' ')[0]} 👋</h2>
          <div className={doc.lead}>{profile.role}</div>
          <p>{profile.summary}</p>
          <div className={doc.links}>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.kaggle} target="_blank" rel="noreferrer">Kaggle</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </section>

      <section className={doc.sectionBlock}>
        <h3>Focus</h3>
        <div className={doc.tagRow}>
          {profile.careerFocus.map((focus) => (
            <div className={doc.tag} key={focus}>{focus}</div>
          ))}
        </div>
      </section>

      <section className={doc.sectionBlock}>
        <h3>Education</h3>
        <div className={doc.cardItem}>
          <h4>{education.school}</h4>
          <div className={doc.metaLine}>{education.degree}</div>
          <div><span className={doc.timelineBadge}>{education.period} · {education.detail}</span></div>
        </div>
      </section>

      <section className={doc.sectionBlock}>
        <h3>Skills</h3>
        {skills.map((group) => (
          <div className={doc.skillGroup} key={group.group}>
            <h4>{group.group}</h4>
            <div className={doc.tagRow}>
              {group.items.map((item) => <div className={doc.tag} key={item}>{item}</div>)}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
