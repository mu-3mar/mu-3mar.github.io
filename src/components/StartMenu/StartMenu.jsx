import { useState } from 'react';
import styles from './StartMenu.module.css';
import { appRegistry, pinnedAppOrder } from '../../data/appRegistry';
import { profile, projects } from '../../data/profile';
import AppGlyph from '../AppGlyph/AppGlyph';

const RECOMMENDED = [
  { id: 'projects', title: projects[0].title, sub: 'Graduation Project · YOLO26n · FastAPI' },
  { id: 'projects', title: projects[3].title, sub: 'Project · TensorFlow · Computer Vision' },
  { id: 'resume', title: profile.resumeFilename, sub: 'Resume' },
];

export default function StartMenu({ open, onOpenApp, onPower }) {
  const [query, setQuery] = useState('');
  const [powerMenuOpen, setPowerMenuOpen] = useState(false);

  const filteredPinned = pinnedAppOrder.filter((id) =>
    appRegistry[id].shortLabel.toLowerCase().includes(query.toLowerCase())
  );
  const filteredRecommended = RECOMMENDED.filter((r) =>
    r.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className={`${styles.menu} ${open ? styles.open : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.search}>
        <i className="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          placeholder="Search for apps, resume, projects…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className={styles.sectionTitle}>
        <span>Pinned</span>
        <span className={styles.allLink}>All apps &gt;</span>
      </div>
      <div className={styles.pinnedGrid}>
        {filteredPinned.map((id) => {
          const meta = appRegistry[id];
          return (
            <div key={id} className={styles.pinnedApp} onClick={() => onOpenApp(id)}>
              <AppGlyph id={id} meta={meta} className={styles.pinnedGlyph} />
              <span>{meta.shortLabel}</span>
            </div>
          );
        })}
      </div>

      <div className={styles.sectionTitle} style={{ marginTop: 6 }}>
        <span>Recommended</span>
        <span className={styles.allLink}>More &gt;</span>
      </div>
      <div className={`${styles.recommendedList} scrollable`}>
        {filteredRecommended.map((r, i) => (
          <div key={i} className={styles.recommendedItem} onClick={() => onOpenApp(r.id)}>
            <AppGlyph id={r.id} meta={appRegistry[r.id]} className={styles.recommendedGlyph} />
            <div>
              <div className={styles.recTitle}>{r.title}</div>
              <div className={styles.recSub}>{r.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.user}>
          <img src={profile.avatar} alt={profile.name} />
          <span>{profile.name}</span>
        </div>
        <div className={styles.powerWrap}>
          <div
            className={styles.powerBtn}
            onClick={(e) => {
              e.stopPropagation();
              setPowerMenuOpen((v) => !v);
            }}
          >
            <i className="fa-solid fa-power-off" />
          </div>
          {powerMenuOpen && (
            <div className={styles.powerMenu}>
              <div onClick={() => onPower('sleep')}>
                <i className="fa-solid fa-moon" /> Sleep
              </div>
              <div onClick={() => onPower('restart')}>
                <i className="fa-solid fa-rotate-right" /> Restart
              </div>
              <div onClick={() => onPower('shutdown')}>
                <i className="fa-solid fa-power-off" /> Shut down
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
