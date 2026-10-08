import doc from '../../styles/doc-content.module.css';
import { useWindowManager } from '../../context/WindowManagerContext';
import { profile } from '../../data/profile';

const entries = [
  { id: 'resume', label: profile.resumeFilename, icon: 'fa-solid fa-file-lines', color: '#dc4b3f' },
  { id: 'projects', label: 'Projects', icon: 'fa-solid fa-folder', color: '#dfb620' },
  { id: 'experience', label: 'Experience', icon: 'fa-solid fa-briefcase', color: '#d46a1f' },
  { id: 'certifications', label: 'Courses & Certifications', icon: 'fa-solid fa-certificate', color: '#b98700' },
  { id: 'games', label: 'Games', icon: 'fa-solid fa-gamepad', color: '#ff5da2' },
];

export default function Explorer() {
  const { openWindow } = useWindowManager();

  return (
    <div className={doc.docContent}>
      <div className={doc.explorerPath}>C:\Users\{profile.name}\Documents</div>
      <div className={doc.explorerGrid}>
      {entries.map((e) => (
        <div
          key={e.id}
          className={`${doc.cardItem} ${doc.explorerItem}`}
          onClick={() => openWindow(e.id)}
        >
          <span className={doc.explorerIcon}>
            <i className={e.icon} style={{ color: e.color }} />
          </span>
          <h4>{e.label}</h4>
        </div>
      ))}
      </div>
    </div>
  );
}
