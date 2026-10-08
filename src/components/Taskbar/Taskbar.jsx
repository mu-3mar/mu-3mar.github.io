import { useState } from 'react';
import styles from './Taskbar.module.css';
import { appRegistry, taskbarPinned } from '../../data/appRegistry';
import { useWindowManager } from '../../context/WindowManagerContext';
import { useClock } from '../../hooks/useClock';
import AppGlyph from '../AppGlyph/AppGlyph';
import FullscreenButton from '../FullscreenButton/FullscreenButton';

export default function Taskbar({ onToggleFlyout, onShowDesktop }) {
  const { windows, focusedId, openWindow, setStartMenuOpen } = useWindowManager();
  const { time, shortDate } = useClock();
  const [search, setSearch] = useState('');

  const runningIds = windows.map((w) => w.id);
  const dynamicRunning = runningIds.filter((id) => !taskbarPinned.includes(id));
  const taskbarIds = [...taskbarPinned, ...dynamicRunning];

  function handleSearchChange(value) {
    setSearch(value);
    if (value.trim()) setStartMenuOpen(true);
  }

  return (
    <div className={styles.taskbar}>
      <div className={styles.left} />

      <div className={styles.center}>
        <div
          className={styles.start}
          onClick={(e) => {
            e.stopPropagation();
            setStartMenuOpen((v) => !v);
          }}
          title="Start"
        >
          <span className={styles.windowsLogo} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
        </div>

        <div className={styles.searchPill}>
          <i className="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            placeholder="Type here to search"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        {taskbarIds.map((id) => {
          const meta = appRegistry[id];
          if (!meta) return null;
          const hasWindow = runningIds.includes(id);
          const isActive = focusedId === id;
          return (
            <div
              key={id}
              className={`${styles.task} ${hasWindow ? styles.hasWindow : ''} ${isActive ? styles.activeTask : ''}`}
              title={meta.title}
              onClick={() => openWindow(id)}
            >
              <AppGlyph id={id} meta={meta} className={styles.taskGlyph} />
              <span className={styles.dot} />
            </div>
          );
        })}
      </div>

     <div className={styles.right}>

  <div
    className={styles.tray}
    onClick={(e) => {
      e.stopPropagation();
      onToggleFlyout('quick');
    }}
    title="Network, sound, battery"
  >
    <i className="fa-solid fa-wifi" />
    <i className="fa-solid fa-volume-high" />
    <i className="fa-solid fa-battery-three-quarters" />
  </div>

  <FullscreenButton />

  <div
    className={styles.clock}
    onClick={(e) => {
      e.stopPropagation();
      onToggleFlyout('calendar');
    }}
  >
    <div>{time}</div>
    <div>{shortDate}</div>
  </div>

  <div
    className={styles.showDesktopEdge}
    title="Show desktop"
    onClick={onShowDesktop}
  />

</div>
    </div>
  );
}
