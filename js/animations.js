function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasHover = window.matchMedia("(hover: hover)").matches;

/* ── Scroll reveal with stagger ── */
function initScrollReveal() {
  const items = qsa("[data-reveal]");
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
  );

  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 80, 320)}ms`;
    io.observe(el);
  });
}

/* ── 3D tilt on [data-tilt] elements ── */
function initTilt() {
  const els = qsa("[data-tilt]");
  if (!els.length || reducedMotion || !hasHover) return;

  els.forEach((el) => {
    const maxDeg = parseFloat(el.dataset.tiltMax) || 8;
    let raf = 0;
    let tX = 0, tY = 0, cX = 0, cY = 0;

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      cX = lerp(cX, tX, 0.08);
      cY = lerp(cY, tY, 0.08);
      if (Math.abs(cX - tX) < 0.01 && Math.abs(cY - tY) < 0.01) { cX = tX; cY = tY; }

      el.style.transform = `perspective(900px) rotateX(${cX}deg) rotateY(${cY}deg)`;

      if (cX !== tX || cY !== tY) { raf = requestAnimationFrame(tick); } else { raf = 0; }
    };

    const start = () => { if (!raf) raf = requestAnimationFrame(tick); };

    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      tY = (px - 0.5) * maxDeg * 2;
      tX = (0.5 - py) * maxDeg * 2;

      const shine = el.querySelector(".portrait-card__shine");
      if (shine) {
        shine.style.setProperty("--mx", `${px * 100}%`);
        shine.style.setProperty("--my", `${py * 100}%`);
      }
      start();
    });

    el.addEventListener("pointerleave", () => { tX = 0; tY = 0; start(); });
  });
}

/* ── Animated stat counters ── */
function initCounters() {
  const nums = qsa("[data-count]");
  if (!nums.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        io.unobserve(el);
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1400;
        const t0 = performance.now();
        const step = (now) => {
          const t = Math.min((now - t0) / duration, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))) + suffix;
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.3 },
  );

  nums.forEach((n) => io.observe(n));
}

/* ── Floating particles ── */
function initParticles() {
  const host = document.getElementById("particles");
  if (!host || reducedMotion) return;

  const count = window.innerWidth < 768 ? 8 : 22;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    const size = 2 + Math.random() * 4;
    const x = Math.random() * 100;
    const dur = 14 + Math.random() * 22;
    const delay = Math.random() * dur;
    p.style.cssText = `width:${size}px;height:${size}px;left:${x}%;bottom:-${size}px;animation-duration:${dur}s;animation-delay:-${delay}s;opacity:0;`;
    host.appendChild(p);
  }
}

/* ── Custom cursor glow ── */
function initCursor() {
  const glow = document.getElementById("cursor-glow");
  if (!glow || reducedMotion || !hasHover) return;

  let mx = -100, my = -100, cx = -100, cy = -100;
  let visible = false;
  let hovering = false;
  let raf = 0;

  const tick = () => {
    cx += (mx - cx) * 0.15;
    cy += (my - cy) * 0.15;
    glow.style.left = `${cx}px`;
    glow.style.top = `${cy}px`;
    raf = requestAnimationFrame(tick);
  };

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!visible) { visible = true; glow.classList.add("is-visible"); }
    if (!raf) raf = requestAnimationFrame(tick);
  });

  document.addEventListener("mouseleave", () => {
    visible = false;
    glow.classList.remove("is-visible");
  });

  const hoverTargets = "a, button, [data-service], .work-icon, .work__arrow, .social, .tab, .btn, .skill, .info-card, input, select, textarea";

  document.addEventListener("pointerover", (e) => {
    if (e.target instanceof Element && e.target.closest(hoverTargets)) {
      if (!hovering) { hovering = true; glow.classList.add("is-hover"); }
    }
  });

  document.addEventListener("pointerout", (e) => {
    if (e.target instanceof Element && e.target.closest(hoverTargets)) {
      if (hovering) { hovering = false; glow.classList.remove("is-hover"); }
    }
  });
}

/* ── Parallax background blobs (mouse-driven) ── */
function initParallaxBlobs() {
  const blobs = qsa(".blob");
  if (!blobs.length || reducedMotion || !hasHover) return;

  const speeds = [0.02, 0.015, 0.012];
  let mx = 0, my = 0;
  let running = false;

  const tick = () => {
    blobs.forEach((b, i) => {
      const s = speeds[i] || 0.01;
      const dx = (mx - window.innerWidth / 2) * s;
      const dy = (my - window.innerHeight / 2) * s;
      b.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    running = false;
  };

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!running) { running = true; requestAnimationFrame(tick); }
  });
}

/* ── Hero portrait hover pulse ── */
function initHeroHoverPulse() {
  const portrait = document.querySelector(".hero__portrait");
  if (!portrait) return;
  portrait.addEventListener("pointerenter", () => portrait.classList.add("is-hover"));
  portrait.addEventListener("pointerleave", () => portrait.classList.remove("is-hover"));
}

/* ── Scroll-driven section depth ── */
function initScrollDepth() {
  if (reducedMotion || window.innerWidth < 768) return;
  const sections = qsa(".section");
  if (!sections.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const ratio = e.intersectionRatio;
        const el = e.target;
        const scale = 0.97 + ratio * 0.03;
        const opa = 0.4 + ratio * 0.6;
        el.style.transform = `scale(${scale})`;
        el.style.opacity = String(opa);
      });
    },
    { threshold: Array.from({ length: 20 }, (_, i) => i / 19) },
  );

  sections.forEach((s) => {
    s.style.willChange = "transform, opacity";
    s.style.transition = "transform 100ms linear, opacity 100ms linear";
    io.observe(s);
  });
}

/* ── Init all ── */
document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  initTilt();
  initCounters();
  initParticles();
  initCursor();
  initParallaxBlobs();
  initHeroHoverPulse();
  initScrollDepth();
});
