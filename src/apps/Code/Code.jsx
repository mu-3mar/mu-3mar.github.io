import styles from './Code.module.css';
import { profile, skills } from '../../data/profile';
import { Code24Filled } from '@fluentui/react-icons';

export default function Code() {
  return (
    <div className={styles.editor}>
      <div className={styles.editorChrome}>
        <div className={styles.tab}>
          <Code24Filled aria-hidden="true" />
          <span>developer.js</span>
        </div>
      </div>
      <div className={styles.codeSurface}>
        <pre className={styles.pre}>
          <code>
          <span className={styles.kw}>const</span> <span className={styles.var}>developer</span> = {'{'}
          {'\n'}  <span className={styles.prop}>name</span>: <span className={styles.str}>{JSON.stringify(profile.name)}</span>,
          {'\n'}  <span className={styles.prop}>role</span>: <span className={styles.str}>{JSON.stringify(profile.role)}</span>,
          {'\n'}  <span className={styles.prop}>skills</span>: [{skills.flatMap((group) => group.items).map((technology, index, items) => (
            <span key={technology}><span className={styles.str}>{JSON.stringify(technology)}</span>{index < items.length - 1 ? ', ' : ''}</span>
          ))}],
          {'\n'}  <span className={styles.prop}>github</span>: <span className={styles.str}>{JSON.stringify(profile.github)}</span>,
          {'\n'}  <span className={styles.prop}>linkedin</span>: <span className={styles.str}>{JSON.stringify(profile.linkedin)}</span>,
          {'\n'}  <span className={styles.prop}>kaggle</span>: <span className={styles.str}>{JSON.stringify(profile.kaggle)}</span>,
          {'\n'}{'}'};
          {'\n'}
          {'\n'}<span className={styles.kw}>console</span>.<span className={styles.fn}>log</span>(<span className={styles.str}>&quot;Hi, I&apos;m &quot;</span> + developer.name + <span className={styles.str}>&quot; 👋&quot;</span>);
          </code>
        </pre>
      </div>
      <div className={styles.statusBar}>
        <span>JavaScript</span>
        <span>Read-only</span>
      </div>
    </div>
  );
}
