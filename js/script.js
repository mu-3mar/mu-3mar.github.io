/* ═══════════════════════════════════════════════════════
   PORTFOLIO — MAIN SCRIPT
   Muhammad Ammar Portfolio
   ═══════════════════════════════════════════════════════ */

function qs(sel, root = document) { return root.querySelector(sel); }
function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

const RETURN_TO_SECTION_KEY = 'RETURN_TO_SECTION';
const THEME_KEY = 'PREF_THEME';

/* ─── Nav active state ─── */
function setActiveNav(hash) {
  qsa('.nav__link').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === hash));
}

function getCenteredScrollTop(target, headerHeight) {
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const targetH = Math.max(target.offsetHeight || 0, 1);
  const visibleH = Math.max(window.innerHeight - headerHeight, 1);
  return targetTop + (targetH / 2) - (visibleH / 2) - headerHeight;
}

/* ─── Mobile nav ─── */
function initMobileNav() {
  const toggle = qs('.nav__toggle');
  const panel = qs('[data-nav-panel]');
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    panel.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));
  qsa('a, button', panel).forEach(el => el.addEventListener('click', () => setOpen(false)));

  document.addEventListener('click', e => {
    if (!(e.target instanceof Element)) return;
    if (panel.classList.contains('is-open') && !panel.contains(e.target) && !toggle.contains(e.target)) {
      setOpen(false);
    }
  });

  window.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
}

/* ─── Tabs ─── */
function initTabs() {
  const tabs = qsa('.tab[data-tab]');
  const panels = qsa('.tab-panel[data-panel]');
  if (!tabs.length || !panels.length) return;

  const activate = (key) => {
    const scrollY = window.scrollY;

    tabs.forEach(t => {
      const active = t.dataset.tab === key;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
    });
    panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === key));

    window.scrollTo(0, scrollY);
  };

  tabs.forEach(tab => tab.addEventListener('click', () => activate(tab.dataset.tab)));

  // Keyboard navigation
  tabs.forEach((tab, i) => {
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        tabs[(i + 1) % tabs.length].focus();
        activate(tabs[(i + 1) % tabs.length].dataset.tab);
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        tabs[(i - 1 + tabs.length) % tabs.length].focus();
        activate(tabs[(i - 1 + tabs.length) % tabs.length].dataset.tab);
      }
    });
  });
}

/* ─── Smooth scroll ─── */
function initSmoothScroll() {
  const HEADER_HEIGHT = 70;
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = qs(href);
      if (!target) return;
      e.preventDefault();

      // Center the section in the visible viewport (below the fixed header).
      const top = getCenteredScrollTop(target, HEADER_HEIGHT);
      window.scrollTo({ top: Math.max(0, Math.round(top)), behavior: 'smooth' });

      history.replaceState(null, '', href);
      setActiveNav(href);
    });
  });
}

/* ─── Active nav on scroll ─── */
function initActiveNavOnScroll() {
  const sectionIds = ['#home', '#services', '#info', '#projects', '#contact'];
  const sections = sectionIds.map(id => qs(id)).filter(Boolean);
  if (!sections.length) return;

  const io = new IntersectionObserver(
    entries => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveNav(`#${visible.target.id}`);
    },
    { threshold: [0.2, 0.4], rootMargin: '-15% 0px -60% 0px' }
  );

  sections.forEach(s => io.observe(s));
}

/* ─── Theme ─── */
function applyTheme(mode) {
  const root = document.documentElement;
  const theme = mode === 'light' ? 'light' : 'dark';

  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme');
  }

  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (_) {}

  const toggle = qs('.theme-toggle');
  if (toggle) {
    const isLight = theme === 'light';
    toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    toggle.classList.toggle('is-light', isLight);
  }
}

function initThemeToggle() {
  const toggle = qs('.theme-toggle');
  if (!toggle) return;

  let stored = null;
  try {
    stored = localStorage.getItem(THEME_KEY);
  } catch (_) {}

  let initial = stored;
  if (!initial) {
    const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    initial = mql && !mql.matches ? 'light' : 'dark';
  }

  applyTheme(initial);

  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    applyTheme(isLight ? 'dark' : 'light');
  });
}

/* ─── Modal system ─── */
const overlay = qs('#modal-overlay');
const modalBody = qs('#modal-body');

function esc(s) {
  const d = document.createElement('div');
  d.textContent = String(s);
  return d.innerHTML;
}

function coverSrcs(p) {
  const base = (p && (p.imageBase || (p.slug ? (`assets/projects/${p.slug}/cover`) : ''))) || '';
  const fb = (p && p._fallback) ? p._fallback : 'assets/images/profile.png';
  return [base + '.webp', base + '.png', base + '.jpg', base + '.jpeg', fb].filter(Boolean);
}

function imgFallbackAttrs(p) {
  const srcs = coverSrcs(p).map(esc).join('|');
  const onerr = "(function(img){var s=(img.dataset.srcs||'').split('|');var i=(parseInt(img.dataset.sidx||'0',10)+1);img.dataset.sidx=i; if(i<s.length){img.src=s[i];}else{img.onerror=null;}})(this)";
  return ` data-srcs="${srcs}" data-sidx="0" onerror="${onerr}"`;
}

function attachCoverOnError(img) {
  img.onerror = function () {
    const s = (img.dataset.srcs || '').split('|');
    const i = (parseInt(img.dataset.sidx || '0', 10) + 1);
    img.dataset.sidx = String(i);
    if (i < s.length && s[i]) {
      img.src = s[i];
    } else {
      img.onerror = null;
    }
  };
}

function openModal(html) {
  if (!overlay || !modalBody) return;
  modalBody.innerHTML = html;
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-locked');

  // Focus first focusable element
  const focusable = qs('button, a, input, select, textarea, [tabindex]', overlay);
  if (focusable) setTimeout(() => focusable.focus(), 50);
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

/* ─── Services data ─── */
const servicesData = [
  {
    num: '01', title: 'Machine Learning Solutions',
    desc: 'I design, build, and evaluate end-to-end ML pipelines — from raw data ingestion and feature engineering through model training, hyper-parameter tuning, and final evaluation. Every solution is built around measurable metrics and production-grade reliability.',
    techs: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    capabilities: [
      'Data cleaning, transformation, and feature engineering',
      'Supervised & unsupervised model selection and comparison',
      'Hyper-parameter tuning with cross-validation',
      'Performance evaluation with precision/recall/F1 analysis',
      'End-to-end reproducible experiment pipelines',
    ],
    useCases: [
      'Bank marketing campaign prediction',
      'Customer churn and retention modeling',
      'Classification and regression systems for business insights',
    ],
  },
  {
    num: '02', title: 'Deep Learning Models',
    desc: 'I develop neural-network-based systems with strong training workflows. This includes architecture selection, transfer learning, data augmentation strategies, and rigorous performance benchmarking on real-world datasets.',
    techs: ['PyTorch', 'TensorFlow', 'CNNs', 'Transfer Learning', 'GPU Training'],
    capabilities: [
      'Custom CNN architecture design and fine-tuning',
      'Transfer learning from pre-trained backbones (ResNet, EfficientNet)',
      'Data augmentation and class-imbalance handling',
      'Training loop engineering with early stopping and scheduling',
      'Model export and optimization for inference',
    ],
    useCases: [
      'Sign language gesture recognition',
      'Image classification and multi-label tagging',
      'Real-time detection systems with webcam input',
    ],
  },
  {
    num: '03', title: 'Computer Vision Systems',
    desc: 'I build practical CV pipelines that handle detection, segmentation, tracking, and measurement tasks using classical and deep-learning approaches, tailored for real-time or batch processing.',
    techs: ['OpenCV', 'MediaPipe', 'PyTorch', 'YOLO', 'NumPy'],
    capabilities: [
      'Real-time video/image processing pipelines',
      'Hand/body/face landmark detection',
      'Semantic and instance segmentation',
      'Measurement extraction from visual data',
      'Frame-by-frame analysis at interactive speed',
    ],
    useCases: [
      'AI-powered body measurement from photos',
      'Real-time gesture recognition for accessibility',
      'Object detection and tracking in video streams',
    ],
  },
  {
    num: '04', title: 'AI Model Deployment',
    desc: 'I package trained models into production-ready REST APIs with clean documentation, Dockerized environments, and reproducible inference pipelines — ready to integrate into any application.',
    techs: ['FastAPI', 'Docker', 'Git', 'Linux', 'REST APIs', 'ONNX'],
    capabilities: [
      'FastAPI-based inference endpoints with auto-docs',
      'Docker containerization for reproducible environments',
      'Model versioning and artifact management',
      'Load testing and latency optimization',
      'CI/CD-ready deployment workflows',
    ],
    useCases: [
      'Containerized ML inference servers',
      'API-driven prediction services for web/mobile',
      'Automated retraining and deployment pipelines',
    ],
  },
];

function renderServiceModal(s) {
  return `
    <div class="m-chip">Service ${esc(s.num)}</div>
    <h3 class="m-title" id="modal-title">${esc(s.title)}</h3>
    <p class="m-desc" style="margin-bottom:0">${esc(s.desc)}</p>

    <div class="m-block">
      <p class="m-section-label">Technologies</p>
      <div class="m-techs">${s.techs.map(t => `<span class="m-tech">${esc(t)}</span>`).join('')}</div>
    </div>

    <div class="m-rule"></div>

    <div class="m-block">
      <p class="m-section-label">Capabilities</p>
      <ul class="m-bullets">${s.capabilities.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
    </div>

    <div class="m-block">
      <p class="m-section-label">Typical use cases</p>
      <ul class="m-bullets">${s.useCases.map(u => `<li>${esc(u)}</li>`).join('')}</ul>
    </div>
  `;
}

function initServiceModals() {
  qsa('[data-service]').forEach(card => {
    card.addEventListener('click', () => {
      const i = parseInt(card.dataset.service, 10);
      const s = servicesData[i];
      if (!s) return;
      openModal(renderServiceModal(s));
    });
  });
}

/* ─── Projects data ─── */
const allProjects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
const featuredProjects = allProjects.filter(p => p.featured);
const projects = (featuredProjects.length ? featuredProjects : allProjects).slice(0, 4);

function renderProjectModal(p) {
  const ghSvg = `<svg width="15" height="15" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>`;

  const src0 = esc(coverSrcs(p)[0] || '');
  return `
    <div class="m-project-grid">
      <div class="m-project-img">
        <img src="${src0}" alt="${esc(p.title)} preview" loading="lazy"${imgFallbackAttrs(p)} />
      </div>
      <div>
        <div class="m-chip">Project details</div>
        <h3 class="m-title" id="modal-title">${esc(p.title)}</h3>

        <dl class="m-detail-row"><dt>Timeline</dt><dd>${esc(p.timeline)}</dd></dl>
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

        ${p.github ? `<a class="m-gh-btn" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">${ghSvg} View on GitHub</a>` : ''}
      </div>
    </div>
  `;
}

/* ─── Work carousel ─── */
function initWorkCarousel() {
  const shot = qs('[data-work-shot]');
  const track = qs('[data-work-track]');
  const prevBtn = qs('[data-work-prev]');
  const nextBtn = qs('[data-work-next]');
  const elNum = qs('[data-work-num]');
  const elTitle = qs('[data-work-title]');
  const elDesc = qs('[data-work-desc]');
  const elStack = qs('[data-work-stack]');
  const elGh = qs('[data-work-github]');
  const elLive = qs('[data-work-live]');
  const progressFill = qs('#work-progress-fill');

  if (!shot || !track || !prevBtn || !nextBtn || !elNum || !elTitle || !elDesc || !elStack) return;
  if (!projects.length) return;

  // Simple, one-image renderer: a single <img> bound to the active project.
  track.innerHTML = `<img class="work__img" alt="" />`;
  const imgEl = qs('.work__img', track);
  if (!imgEl) return;

  let index = 0;
  let wheelLock = false;

  const setContent = (i, dir = 0) => {
    const p = projects[i];
    const srcs = coverSrcs(p);
    imgEl.dataset.srcs = srcs.map(String).join('|');
    imgEl.dataset.sidx = '0';
    imgEl.src = srcs[0];
    imgEl.alt = p.title;
    attachCoverOnError(imgEl);

    // Animate out/in
    const left = qs('.work__left');
    if (left && dir !== 0) {
      left.style.transition = 'none';
      left.style.opacity = '0';
      left.style.transform = `translateY(${dir > 0 ? '12px' : '-12px'})`;
      setTimeout(() => {
        left.style.transition = 'opacity 320ms ease, transform 320ms ease';
        left.style.opacity = '1';
        left.style.transform = 'none';
      }, 30);
    }

    elNum.textContent = String(i + 1).padStart(2, '0');
    elTitle.textContent = p.title;
    elDesc.textContent = p.desc;

    // Update stack badges
    elStack.innerHTML = p.stack.map(s => `<span class="work__stack-item">${esc(s)}</span>`).join('');

    if (elGh) {
      elGh.href = p.github;
      elGh.setAttribute('target', '_blank');
      elGh.setAttribute('rel', 'noopener noreferrer');
      elGh.style.pointerEvents = p.github ? '' : 'none';
      elGh.style.opacity = p.github ? '' : '0.4';
    }

    // Progress bar
    if (progressFill) {
      progressFill.style.width = `${((i + 1) / projects.length) * 100}%`;
    }
  };

  // Set initial track style
  track.style.display = 'block';
  track.style.height = '100%';

  const go = (dir) => {
    index = (index + dir + projects.length) % projects.length;
    setContent(index, dir);
  };

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));

  // Wheel navigation (horizontal or shift + wheel)
  const onWheel = e => {
    const absX = Math.abs(e.deltaX), absY = Math.abs(e.deltaY);
    if (!(absX > absY || e.shiftKey)) return;
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = true;
    go(e.deltaX > 0 ? 1 : -1);
    setTimeout(() => { wheelLock = false; }, 500);
  };
  shot.addEventListener('wheel', onWheel, { passive: false });

  // Drag/swipe on image: swipe to change, tap to open details
  let startX = 0;
  let dragging = false;
  shot.addEventListener('pointerdown', e => {
    dragging = true;
    startX = e.clientX;
    shot.setPointerCapture(e.pointerId);
  });
  shot.addEventListener('pointerup', e => {
    if (!dragging) return;
    dragging = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) < 30) {
      openModal(renderProjectModal(projects[index]));
    } else {
      go(dx < 0 ? 1 : -1);
    }
  });
  shot.addEventListener('pointercancel', () => { dragging = false; });

  // Live button → open modal
  if (elLive) {
    elLive.addEventListener('click', e => {
      e.preventDefault();
      openModal(renderProjectModal(projects[index]));
    });
  }

  setContent(index);
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initTabs();
  initSmoothScroll();
  initActiveNavOnScroll();
  initWorkCarousel();
  initServiceModals();
  initContactForm();
  initThemeToggle();
  setActiveNav(location.hash || '#home');

  // Hero stats: keep Total Projects synced with portfolio data.
  const totalProjectsEl = qs('[data-stat="total-projects"]');
  const all = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  if (totalProjectsEl) {
    totalProjectsEl.dataset.count = String(all.length || 0);
  }

  // Persist return target when navigating to All Projects.
  const allBtn = qs('[data-return-projects]');
  if (allBtn) {
    allBtn.addEventListener('click', () => {
      try { sessionStorage.setItem(RETURN_TO_SECTION_KEY, '#projects'); } catch (_) {}
    });
  }

  // If we came back from All Projects, auto-scroll to the saved section.
  let returnTo = null;
  try { returnTo = sessionStorage.getItem(RETURN_TO_SECTION_KEY); } catch (_) {}
  if (returnTo) {
    try { sessionStorage.removeItem(RETURN_TO_SECTION_KEY); } catch (_) {}
    const target = qs(returnTo);
    if (target) {
      const HEADER_HEIGHT = 70;
      requestAnimationFrame(() => {
        const top = getCenteredScrollTop(target, HEADER_HEIGHT);
        window.scrollTo({ top: Math.max(0, Math.round(top)), behavior: 'auto' });
      });
    }
  }
});

function initContactForm() {
  const form = document.querySelector('.contact-card .form');
  if (!form) return;

  const statusEl = form.querySelector('.form__status');
  if (!statusEl) return;

  form.addEventListener('submit', () => {
    statusEl.textContent = 'Sending...';
  });
}
