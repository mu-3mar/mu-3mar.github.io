import { profile, experience, education, projects, skills, courses } from '../../data/profile';
import styles from './Resume.module.css';

export default function Resume() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.name}>{profile.name}</h2>
          <div className={styles.role}>{profile.role}</div>
        </div>
        <a href={profile.resumePdf} download={profile.resumeFilename} className={styles.downloadBtn}>
          <i className="fa-solid fa-download" /> Download PDF
        </a>
      </div>

      <div className={styles.preview}>
        <ResumeSheet />
      </div>
    </div>
  );
}

function ResumeSheet() {
  return (
    <iframe
      title="Resume preview"
      className={styles.iframe}
      srcDoc={buildResumeHtml()}
    />
  );
}

function buildResumeHtml() {
  const escapeHtml = (value) =>
    String(value ?? '').replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[character]);
  const renderList = (items) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  const contactLinks = [
    profile.email && `<a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>`,
    profile.phone && `<a href="tel:${escapeHtml(profile.phone)}">${escapeHtml(profile.phone)}</a>`,
    profile.github && `<a href="${escapeHtml(profile.github)}">GitHub</a>`,
    profile.linkedin && `<a href="${escapeHtml(profile.linkedin)}">LinkedIn</a>`,
    profile.kaggle && `<a href="${escapeHtml(profile.kaggle)}">Kaggle</a>`,
    profile.portfolioUrl && `<a href="${escapeHtml(profile.portfolioUrl)}">Portfolio</a>`,
  ].filter(Boolean).join(' · ');
  const experienceHtml = experience.map((job) => `
    <div class="item">
      <div class="row"><div class="item-title">${escapeHtml(job.title)} — ${escapeHtml(job.company)}</div><div class="meta">${escapeHtml(job.period)}</div></div>
      ${job.stack ? `<div class="stack">${escapeHtml(job.stack)}</div>` : ''}
      ${renderList(job.bullets)}
    </div>
  `).join('');
  const projectsHtml = projects.map((project) => `
    <div class="item">
      <div class="row"><div class="item-title">${escapeHtml(project.title)}${project.badge ? ` — ${escapeHtml(project.badge)}` : ''}</div><a class="meta" href="${escapeHtml(project.github)}">Source</a></div>
      <div class="stack">${escapeHtml(project.stack)}</div>
      ${renderList(project.bullets)}
    </div>
  `).join('');
  const skillsHtml = skills.map((group) => `
    <div class="skill-group"><strong>${escapeHtml(group.group)}:</strong> ${group.items.map(escapeHtml).join(', ')}</div>
  `).join('');
  const coursesHtml = courses.map((courseGroup) => `
    <div class="item"><div class="item-title">${escapeHtml(courseGroup.provider)}</div>${renderList(courseGroup.items)}</div>
  `).join('');

  return `<!DOCTYPE html><html><head><meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; }
    html, body { min-height:100%; }
    body { margin:0; font-family:'Segoe UI Variable','Segoe UI',Aptos,system-ui,sans-serif; color:#243244; font-size:12.5px; }
    .resume { width:100%; max-width:900px; margin:0 auto; padding:32px 38px 44px; }
    .header { display:block; border-bottom:1px solid #dce4ed; padding-bottom:18px; margin-bottom:20px; }
    .name { color:#182b40; font-size:28px; font-weight:700; line-height:1.12; }
    .role { font-size:14px; color:#5b6d81; margin-top:6px; }
    .contacts { display:flex; flex-wrap:wrap; align-items:center; gap:6px 12px; margin-top:14px; text-align:left; font-size:11px; line-height:1.5; color:#536579; }
    .contacts a, .meta { color:inherit; text-decoration:none; overflow-wrap:anywhere; }
    .section-title { display:flex; align-items:center; gap:12px; font-weight:700; color:#397caf; margin:22px 0 10px; font-size:10.5px; text-transform:uppercase; letter-spacing:.06em; }
    .section-title::after { content:''; height:1px; flex:1; background:#e2e8ef; }
    .row { display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:baseline; gap:14px; margin-bottom:4px; }
    .meta { color:#65768a; font-size:11px; text-align:right; }
    .item { margin-bottom:14px; break-inside:avoid; }
    .item-title { color:#25384d; font-weight:650; font-size:13px; line-height:1.4; }
    .stack { font-size:11.5px; color:#397caf; font-weight:600; line-height:1.45; margin:4px 0 6px; }
    ul { margin:0; padding-left:18px; font-size:12px; line-height:1.5; }
    li { margin-bottom:3px; padding-left:2px; }
    .grid-2 { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:24px; }
    .skill-group { color:#42566c; font-size:12px; line-height:1.6; margin-bottom:6px; }
    .skill-group strong { color:#263c53; }
    @media (max-width:680px) {
      .resume { padding:24px 22px 36px; }
      .name { font-size:24px; }
      .row { grid-template-columns:minmax(0,1fr); gap:2px; }
      .meta { text-align:left; }
      .grid-2 { grid-template-columns:minmax(0,1fr); gap:0; }
    }
    @media print { .resume { padding:0; } }
  </style></head>
  <body><div class="resume">
    <div class="header">
      <div><div class="name">${escapeHtml(profile.name)}</div><div class="role">${escapeHtml(profile.role)}</div></div>
      <div class="contacts">${contactLinks}</div>
    </div>

    <div class="section-title">Experience</div>
    ${experienceHtml}

    <div class="section-title">Projects</div>
    ${projectsHtml}

    <div class="grid-2">
      <div>
        <div class="section-title">Skills</div>
        ${skillsHtml}
      </div>
      <div>
        <div class="section-title">Courses &amp; Certifications</div>
        ${coursesHtml}
      </div>
    </div>

    <div class="section-title">Education</div>
    <div class="item">
      <div class="item-title">${escapeHtml(education.school)}</div>
      <div>${escapeHtml(education.degree)}</div>
      <div class="meta" style="text-align:left;">${escapeHtml(education.period)} · ${escapeHtml(education.detail)}</div>
    </div>
  </div></body></html>`;
}
