/* ═══════════════════════════════════════════════════════
   PORTFOLIO — ANIMATIONS + GLOBAL THEME BOOTSTRAP
   ═══════════════════════════════════════════════════════ */

function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasHover = window.matchMedia('(hover: hover)').matches;
const THEME_STORAGE_KEY = 'PREF_THEME';

/* ─── Global theme bootstrap (runs on every page) ─── */
function bootstrapTheme() {
  const root = document.documentElement;
  if (!root) return;

  // If another script has already set an explicit theme, respect it.
  if (root.hasAttribute('data-theme')) return;

  let stored = null;
  try {
    stored = localStorage.getItem(THEME_STORAGE_KEY);
  } catch (_) {}

  let theme = stored;
  if (!theme) {
    const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    theme = mql && !mql.matches ? 'light' : 'dark';
  }

  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme');
  }
}

bootstrapTheme();

/* ─── Scroll reveal ─── */
function initScrollReveal() {
  const items = qsa('[data-reveal]');
  if (!items.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );

  items.forEach((el, i) => {
    if (!reducedMotion) {
      el.style.transitionDelay = `${Math.min(i * 60, 280)}ms`;
    }
    io.observe(el);
  });
}

/* ─── 3D tilt ─── */
function initTilt() {
  const els = qsa('[data-tilt]');
  if (!els.length || reducedMotion || !hasHover) return;

  els.forEach(el => {
    const maxDeg = parseFloat(el.dataset.tiltMax) || 8;
    let raf = 0;
    let tX = 0, tY = 0, cX = 0, cY = 0;

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      cX = lerp(cX, tX, 0.1);
      cY = lerp(cY, tY, 0.1);
      const done = Math.abs(cX - tX) < 0.005 && Math.abs(cY - tY) < 0.005;
      if (done) { cX = tX; cY = tY; }

      el.style.transform = `perspective(1000px) rotateX(${cX}deg) rotateY(${cY}deg)`;
      raf = done ? 0 : requestAnimationFrame(tick);
    };

    const start = () => { if (!raf) raf = requestAnimationFrame(tick); };

    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      tY = (px - 0.5) * maxDeg * 2;
      tX = (0.5 - py) * maxDeg * 2;

      const shine = el.querySelector('.portrait-card__shine');
      if (shine) {
        shine.style.setProperty('--mx', `${px * 100}%`);
        shine.style.setProperty('--my', `${py * 100}%`);
      }
      start();
    });

    el.addEventListener('pointerleave', () => { tX = 0; tY = 0; start(); });
  });
}

/* ─── Counter animation ─── */
function initCounters() {
  const nums = qsa('[data-count]');
  if (!nums.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);

        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = reducedMotion ? 0 : 1600;
        const t0 = performance.now();

        const easeOut = t => 1 - Math.pow(1 - t, 3);

        const step = now => {
          const t = Math.min((now - t0) / duration, 1);
          el.textContent = prefix + Math.round(target * easeOut(t)) + suffix;
          if (t < 1) requestAnimationFrame(step);
        };

        if (duration === 0) {
          el.textContent = prefix + target + suffix;
        } else {
          requestAnimationFrame(step);
        }
      });
    },
    { threshold: 0.3 }
  );

  nums.forEach(n => io.observe(n));
}

/* ─── Particles ─── */
function initParticles() {
  const host = document.getElementById('particles');
  if (!host || reducedMotion) return;

  const count = window.innerWidth < 768 ? 10 : 26;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    const size = 1.5 + Math.random() * 3;
    const x = Math.random() * 100;
    const dur = 18 + Math.random() * 24;
    const delay = Math.random() * dur;
    const opacity = 0.2 + Math.random() * 0.5;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${x}%;bottom:-${size * 2}px;
      animation-duration:${dur}s;
      animation-delay:-${delay}s;
      opacity:${opacity};
    `;
    frag.appendChild(p);
  }

  host.appendChild(frag);
}

/* ─── Cursor glow ─── */
function initCursor() {
  const glow = document.getElementById('cursor-glow');
  if (!glow || reducedMotion || !hasHover) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;
  let visible = false;
  let raf = 0;

  const lerp = (a, b, t) => a + (b - a) * t;

  const tick = () => {
    cx = lerp(cx, mx, 0.1);
    cy = lerp(cy, my, 0.1);
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    raf = requestAnimationFrame(tick);
  };

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!visible) {
      visible = true;
      glow.classList.add('is-visible');
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    visible = false;
    glow.classList.remove('is-visible');
  });

  const hoverTargets = 'a, button, [data-service], .work-icon, .work__arrow, .social, .tab, .btn, .skill, .info-card, .project-card, input, select, textarea';

  document.addEventListener('pointerover', e => {
    if (e.target instanceof Element && e.target.closest(hoverTargets)) {
      glow.classList.add('is-hover');
    }
  }, { passive: true });

  document.addEventListener('pointerout', e => {
    if (e.target instanceof Element && e.target.closest(hoverTargets)) {
      glow.classList.remove('is-hover');
    }
  }, { passive: true });
}

/* ─── Parallax blobs ─── */
function initParallaxBlobs() {
  const blobs = qsa('.blob');
  if (!blobs.length || reducedMotion || !hasHover) return;

  const speeds = [0.018, 0.012, 0.009];
  let mx = 0, my = 0;
  let running = false;

  const tick = () => {
    blobs.forEach((b, i) => {
      const s = speeds[i] || 0.008;
      const dx = (mx - window.innerWidth / 2) * s;
      const dy = (my - window.innerHeight / 2) * s;
      b.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    running = false;
  };

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!running) { running = true; requestAnimationFrame(tick); }
  }, { passive: true });
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initTilt();
  initCounters();
  initParticles();
  initCursor();
  initParallaxBlobs();
});
