/* ═══════════════════════════════════════════════════════
   ALL PROJECTS PAGE
   ═══════════════════════════════════════════════════════ */

function qs(sel, root = document) { return root.querySelector(sel); }

function esc(s) {
  const d = document.createElement('div');
  d.textContent = String(s);
  return d.innerHTML;
}

/* ─── Modal ─── */
const overlay = qs('#modal-overlay');
const modalBody = qs('#modal-body');

function openModal(html) {
  if (!overlay || !modalBody) return;
  modalBody.innerHTML = html;
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-locked');
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-locked');
}

if (overlay) {
  const closeBtn = qs('.modal__close', overlay);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
  });
}

/* ─── Utilities ─── */
const categoryLabels = {
  'computer-vision': 'Computer Vision',
  'deep-learning': 'Deep Learning',
  'machine-learning': 'Machine Learning',
  'nlp': 'NLP',
};

function normalizeCategory(cat) {
  return categoryLabels[cat] || 'General';
}

function projectTime(p) {
  if (p && p.date) {
    var t = Date.parse(p.date);
    if (!Number.isNaN(t)) return t;
  }
  // Fallback: try parsing timeline as a year
  var y = parseInt(p && p.timeline, 10);
  if (!Number.isNaN(y)) return Date.parse(String(y) + '-01-01');
  return 0;
}

function sortProjects(items, mode) {
  const list = [...items];
  switch (mode) {
    case 'date-asc': return list.sort((a, b) => projectTime(a) - projectTime(b));
    case 'name-asc': return list.sort((a, b) => a.title.localeCompare(b.title));
    case 'name-desc': return list.sort((a, b) => b.title.localeCompare(a.title));
    default: return list.sort((a, b) => projectTime(b) - projectTime(a));
  }
}

function coverSrcs(p) {
  var base = (p && (p.imageBase || (p.slug ? ('assets/projects/' + p.slug + '/cover') : ''))) || '';
  var fb = (p && p._fallback) ? p._fallback : 'assets/images/profile.png';
  return [base + '.webp', base + '.png', base + '.jpg', base + '.jpeg', fb].filter(Boolean);
}

function imgFallbackAttrs(p) {
  var srcs = coverSrcs(p).map(esc).join('|');
  // Cycles through candidates on error.
  var onerr = "(function(img){var s=(img.dataset.srcs||'').split('|');var i=(parseInt(img.dataset.sidx||'0',10)+1);img.dataset.sidx=i; if(i<s.length){img.src=s[i];}else{img.onerror=null;}})(this)";
  return ` data-srcs="${srcs}" data-sidx="0" onerror="${onerr}"`;
}

/* ─── Modal content ─── */
function renderProjectModal(p) {
  const ghSvg = `<svg width="15" height="15" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>`;

  var src0 = esc(coverSrcs(p)[0] || '');
  return `
    <div class="m-project-grid">
      <div class="m-project-img">
        <img src="${src0}" alt="${esc(p.title)} preview" loading="lazy"${imgFallbackAttrs(p)} />
      </div>
      <div>
        <div class="m-chip">Project details</div>
        <h3 class="m-title">${esc(p.title)}</h3>

        <dl class="m-detail-row"><dt>Timeline</dt><dd>${esc(p.timeline)}</dd></dl>
        <dl class="m-detail-row"><dt>Category</dt><dd>${normalizeCategory(p.category)}</dd></dl>
        <dl class="m-detail-row"><dt>Purpose</dt><dd>${esc(p.purpose)}</dd></dl>

        <p class="m-section-label">Technologies</p>
        <div class="m-techs">${p.stack.map(t => `<span class="m-tech">${esc(t)}</span>`).join('')}</div>

        <p class="m-section-label">Description</p>
        <p class="m-desc">${esc(p.longDesc)}</p>

        <p class="m-section-label">Problem</p>
        <p class="m-desc">${esc(p.problem || p.desc)}</p>

        <p class="m-section-label">Solution</p>
        <p class="m-desc">${esc(p.solution || p.purpose || p.longDesc)}</p>

        <p class="m-section-label">Challenges solved</p>
        <ul class="m-bullets">${p.challenges.map(c => `<li>${esc(c)}</li>`).join('')}</ul>

        <a class="m-gh-btn" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">${ghSvg} View on GitHub</a>
      </div>
    </div>
  `;
}

/* ─── Render grid ─── */
function renderProjects(items) {
  const grid = qs('#projects-grid');
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = `<p style="color:var(--muted);font-size:14px;grid-column:1/-1">No projects match the selected filters.</p>`;
    return;
  }

  grid.innerHTML = items.map(p => {
    var src0 = esc(coverSrcs(p)[0] || '');
    const ghIcon = `<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>`;
    const expandIcon = `<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5H5v4M15 5h4v4M9 19H5v-4M15 19h4v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10 5 5m14 0-5 5m-4 4-5 5m14 0-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
    return `
    <article class="project-card" data-project-title="${esc(p.title)}">
      <div class="project-card__img">
        <img src="${src0}" alt="${esc(p.title)} thumbnail" loading="lazy"${imgFallbackAttrs(p)} />
      </div>
      <div class="project-card__body">
        <p class="project-card__meta">
          <span class="project-card__meta-cat">${esc(normalizeCategory(p.category))}</span>
          <span>${esc(p.timeline)}</span>
        </p>
        <h2 class="project-card__title">${esc(p.title)}</h2>
        <p class="project-card__desc">${esc(p.desc)}</p>
        <div class="project-card__stack">
          ${p.stack.slice(0, 4).map(s => `<span>${esc(s)}</span>`).join('')}
          ${p.stack.length > 4 ? `<span>+${p.stack.length - 4}</span>` : ''}
        </div>
        <div class="project-card__actions">
          <button class="project-card__btn project-card__btn--details" type="button" data-project-details="${esc(p.title)}">
            ${expandIcon}
          </button>
          <a class="project-card__btn" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">
            ${ghIcon}
          </a>
        </div>
      </div>
    </article>
  `}).join('');
}

/* ─── Bind interactions ─── */
function bindProjectInteractions(allProjects) {
  document.querySelectorAll('[data-project-details]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-project-details');
      const project = allProjects.find(p => p.title === title);
      if (project) openModal(renderProjectModal(project));
    });
  });

  document.querySelectorAll('[data-project-title]').forEach(card => {
    card.addEventListener('click', e => {
      const t = e.target;
      if (t instanceof Element && (t.closest('a') || t.closest('button'))) return;
      const title = card.getAttribute('data-project-title');
      const project = allProjects.find(p => p.title === title);
      if (project) openModal(renderProjectModal(project));
    });
  });
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  // Ensure the "Back to Projects" button returns to the Projects section.
  const backBtn = qs('[data-back-projects]');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      try { sessionStorage.setItem('RETURN_TO_SECTION', '#projects'); } catch (_) {}
    });
  }

  const allProjects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const categoryFilter = qs('#category-filter');
  const sortFilter = qs('#sort-filter');
  if (!categoryFilter || !sortFilter) return;

  const applyFilters = () => {
    const category = categoryFilter.value;
    const sortMode = sortFilter.value;
    let list = category !== 'all' ? allProjects.filter(p => p.category === category) : [...allProjects];
    list = sortProjects(list, sortMode);
    renderProjects(list);
    bindProjectInteractions(allProjects);
  };

  categoryFilter.addEventListener('change', applyFilters);
  sortFilter.addEventListener('change', applyFilters);
  applyFilters();
});
