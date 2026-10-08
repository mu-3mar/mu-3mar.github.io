import doc from '../../styles/doc-content.module.css';
import { courses } from '../../data/profile';

export default function Certifications() {
  return (
    <div className={doc.docContent}>
      <h3 style={{ marginTop: 0 }}>Courses &amp; Certifications</h3>
      {courses.map((courseGroup) => (
        <div className={doc.cardItem} key={courseGroup.provider}>
          <h4>{courseGroup.provider}</h4>
          <ul className={doc.courseList}>
            {courseGroup.items.map((title) => (
              <li className={doc.courseItem} key={title}>
                <span>{title}</span>
                <span className={doc.metaLine}>Course / Training</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
