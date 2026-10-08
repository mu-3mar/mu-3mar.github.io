import {
  ArrowClockwise24Regular,
  ArrowLeft24Regular,
  ArrowRight24Regular,
  Globe24Regular,
  LockClosed24Regular,
} from '@fluentui/react-icons';
import styles from './Browser.module.css';

export default function Browser() {
  return (
    <div className={styles.browser}>
      <div className={styles.chrome}>
        <div className={styles.tabRow}>
          <div className={styles.tab}>
            <i className="fa-brands fa-chrome" aria-hidden="true" />
            <span>Google</span>
          </div>
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.navControls} aria-hidden="true">
            <ArrowLeft24Regular />
            <ArrowRight24Regular />
            <ArrowClockwise24Regular />
          </div>
          <div className={styles.addressBar}>
            <LockClosed24Regular aria-hidden="true" />
            <span>https://www.google.com</span>
          </div>
          <Globe24Regular className={styles.browserAction} aria-hidden="true" />
        </div>
      </div>
      <iframe
        title="Browser"
        className={styles.iframe}
        src="https://www.google.com/webhp?igu=1"
      />
    </div>
  );
}
