import AppGlyph from '../AppGlyph/AppGlyph';
import styles from './DesktopIcon.module.css';

export default function DesktopIcon({ id, meta, selected, large, onSelect, onOpen }) {
  return (
    <div
      className={`${styles.icon} ${selected ? styles.selected : ''} ${large ? styles.large : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
        onOpen(id);
      }}
    >
      <AppGlyph id={id} meta={meta} className={styles.iconGlyph} />
      <p>{meta.shortLabel}</p>
    </div>
  );
}
