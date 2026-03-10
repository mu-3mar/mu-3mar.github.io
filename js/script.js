function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function setActiveNav(hash) {
  const links = qsa(".nav__link");
  links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === hash));
}

function initMobileNav() {
  const toggle = qs(".nav__toggle");
  const panel = qs("[data-nav-panel]");
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    panel.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", open);
  };

  toggle.addEventListener("click", () => {
    setOpen(!panel.classList.contains("is-open"));
  });

  qsa("a", panel).forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (panel.classList.contains("is-open") && !panel.contains(t) && !toggle.contains(t)) setOpen(false);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function initTabs() {
  const tabs = qsa(".tab[data-tab]");
  const panels = qsa(".tab-panel[data-panel]");
  if (!tabs.length || !panels.length) return;

  const activate = (key) => {
    tabs.forEach((t) => {
      const active = t.dataset.tab === key;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });
    panels.forEach((p) => p.classList.toggle("is-active", p.dataset.panel === key));
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.tab));
  });
}

function initSmoothScroll() {
  qsa('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = qs(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
      setActiveNav(href);
    });
  });
}

function initActiveNavOnScroll() {
  const sections = ["#home", "#services", "#resume", "#work", "#contact"]
    .map((id) => qs(id))
    .filter(Boolean);
  if (!sections.length) return;

  const byId = new Map(sections.map((s) => [s.id, s]));

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (!visible) return;
      setActiveNav(`#${visible.target.id}`);
    },
    { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -60% 0px" },
  );

  byId.forEach((section) => io.observe(section));
}

/* ── Full Modal System ── */
const overlay = qs("#modal-overlay");
const modalBody = qs("#modal-body");

function openModal(html) {
  if (!overlay || !modalBody) return;
  modalBody.innerHTML = html;
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-locked");
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-locked");
}

if (overlay) {
  qs(".modal__close", overlay).addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
  });
}

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

/* ── Services Data & Modal ── */
const servicesData = [
  {
    num: "01",
    title: "Machine Learning Solutions",
    desc: "I design, build, and evaluate end-to-end ML pipelines — from raw data ingestion and feature engineering through model training, hyper-parameter tuning, and final evaluation. Every solution is built around measurable metrics and production-grade reliability.",
    techs: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    capabilities: [
      "Data cleaning, transformation, and feature engineering",
      "Supervised & unsupervised model selection and comparison",
      "Hyper-parameter tuning with cross-validation",
      "Performance evaluation with precision/recall/F1 analysis",
      "End-to-end reproducible experiment pipelines",
    ],
    useCases: [
      "Bank marketing campaign prediction",
      "Customer churn and retention modeling",
      "Classification and regression systems for business insights",
    ],
  },
  {
    num: "02",
    title: "Deep Learning Models",
    desc: "I develop neural-network-based systems with strong training workflows. This includes architecture selection, transfer learning, data augmentation strategies, and rigorous performance benchmarking on real-world datasets.",
    techs: ["PyTorch", "TensorFlow", "CNNs", "Transfer Learning", "GPU Training"],
    capabilities: [
      "Custom CNN architecture design and fine-tuning",
      "Transfer learning from pre-trained backbones (ResNet, EfficientNet)",
      "Data augmentation and class-imbalance handling",
      "Training loop engineering with early stopping and scheduling",
      "Model export and optimization for inference",
    ],
    useCases: [
      "Sign language gesture recognition",
      "Image classification and multi-label tagging",
      "Real-time detection systems with webcam input",
    ],
  },
  {
    num: "03",
    title: "Computer Vision Systems",
    desc: "I build practical CV pipelines that handle detection, segmentation, tracking, and measurement tasks using classical and deep-learning approaches, tailored for real-time or batch processing.",
    techs: ["OpenCV", "MediaPipe", "PyTorch", "Segmentation Models", "NumPy"],
    capabilities: [
      "Real-time video/image processing pipelines",
      "Hand/body/face landmark detection",
      "Semantic and instance segmentation",
      "Measurement extraction from visual data",
      "Frame-by-frame analysis at interactive speed",
    ],
    useCases: [
      "AI-powered body measurement from photos",
      "Real-time gesture recognition for accessibility",
      "Object detection and tracking in video streams",
    ],
  },
  {
    num: "04",
    title: "AI Model Deployment",
    desc: "I package trained models into production-ready REST APIs with clean documentation, Dockerized environments, and reproducible inference pipelines — ready to integrate into any application.",
    techs: ["FastAPI", "Docker", "Git", "Linux", "REST APIs"],
    capabilities: [
      "FastAPI-based inference endpoints with auto-docs",
      "Docker containerization for reproducible environments",
      "Model versioning and artifact management",
      "Load testing and latency optimization",
      "CI/CD-ready deployment workflows",
    ],
    useCases: [
      "Containerized ML inference servers",
      "API-driven prediction services for web/mobile",
      "Automated retraining and deployment pipelines",
    ],
  },
];

function renderServiceModal(s) {
  return `
    <p class="m-num">${esc(s.num)}</p>
    <h3 class="m-title">${esc(s.title)}</h3>
    <p class="m-desc">${esc(s.desc)}</p>

    <p class="m-section-label">Technologies</p>
    <div class="m-techs">${s.techs.map((t) => `<span class="m-tech">${esc(t)}</span>`).join("")}</div>

    <div class="m-rule"></div>

    <p class="m-section-label">Capabilities</p>
    <ul class="m-bullets">${s.capabilities.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>

    <p class="m-section-label">Typical Use Cases</p>
    <ul class="m-bullets">${s.useCases.map((u) => `<li>${esc(u)}</li>`).join("")}</ul>
  `;
}

function initServiceModals() {
  qsa("[data-service]").forEach((card) => {
    card.addEventListener("click", () => {
      const i = parseInt(card.dataset.service, 10);
      const s = servicesData[i];
      if (!s) return;
      openModal(renderServiceModal(s));
    });
  });
}

/* ── Projects Data & Carousel ── */
const projects = [
  {
    title: "Sign Language Recognition System",
    desc: "Real-time webcam system translating sign gestures into text to improve accessibility.",
    longDesc: "Developed a real-time pipeline using MediaPipe for hand landmark extraction, OpenCV for frame processing, and a PyTorch classifier for gesture-to-text mapping. The system runs at interactive frame rates and was designed to improve communication accessibility for hearing-impaired users.",
    stack: ["MediaPipe", "OpenCV", "PyTorch"],
    timeline: "2024",
    purpose: "Improve accessibility by translating sign language into readable text in real time.",
    challenges: [
      "Achieving reliable hand tracking under varying lighting conditions",
      "Building a classifier that generalizes across different hand sizes and skin tones",
      "Maintaining interactive frame rates on consumer hardware",
    ],
    github: "https://github.com/mu-3mar/Sign-Language-Recognition",
    image: "assets/images/project-01.jpg",
  },
  {
    title: "AI Body Measurement System",
    desc: "Predicts body measurements from paired photos and segmentation masks using CV-driven modeling.",
    longDesc: "Built a Computer Vision pipeline that takes paired photographs with segmentation masks and predicts physical body measurements. Uses segmentation models for silhouette extraction and metadata-based regression for accurate dimension prediction from 2D images.",
    stack: ["Computer Vision", "Segmentation", "Metadata Modeling"],
    timeline: "2024",
    purpose: "Enable accurate body measurements from photos without physical tools.",
    challenges: [
      "Extracting reliable silhouettes from varying photo conditions",
      "Mapping 2D pixel data to real-world measurements",
      "Handling diverse body types and camera perspectives",
    ],
    github: "https://github.com/mu-3mar/AI-Body-Measurement",
    image: "assets/images/project-02.webp",
  },
  {
    title: "Bank Marketing Campaign Prediction",
    desc: "Predicts term-deposit subscription success to help banks target the right clients.",
    longDesc: "Created a classification model that predicts whether a bank client will subscribe to a term deposit after a marketing campaign. Includes full exploratory data analysis, feature engineering, model comparison, and evaluation with precision/recall trade-off analysis to optimize targeting.",
    stack: ["Scikit-Learn", "Pandas", "Model Evaluation"],
    timeline: "2024",
    purpose: "Help financial institutions identify high-potential clients through data-driven targeting.",
    challenges: [
      "Handling class imbalance in the target variable",
      "Feature engineering from mixed categorical and numerical data",
      "Balancing precision and recall for business-relevant predictions",
    ],
    github: "https://github.com/mu-3mar/Bank-marketing-prediction",
    image: "assets/images/project-03.webp",
  },
  {
    title: "Linear Regression From Scratch",
    desc: "From-scratch linear regression with gradient descent and RMSE evaluation.",
    longDesc: "Implemented the complete Linear Regression algorithm from the ground up — including cost function computation, gradient descent optimization, and RMSE-based evaluation — using only Python and NumPy, with no ML framework dependencies. Built for deep understanding of ML fundamentals.",
    stack: ["Python", "NumPy", "Gradient Descent"],
    timeline: "2024",
    purpose: "Build foundational understanding of ML algorithms by implementing them from scratch.",
    challenges: [
      "Implementing numerically stable gradient descent",
      "Debugging convergence issues with learning rate selection",
      "Validating results against Scikit-learn's implementation",
    ],
    github: "https://github.com/mu-3mar/Linear-Regression-From-Scratch",
    image: "assets/images/project-04.jpg",
  },
];

function renderProjectModal(p) {
  const ghSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 19c-3 1-3-1.5-4-2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M15 19v-2.4c0-.7.2-1.2.6-1.6 2-.2 4-.9 4-4.5 0-1-.4-1.9-1.1-2.6.1-.3.5-1.4-.1-2.8 0 0-.9-.3-3 .9-.8-.2-1.7-.3-2.5-.3s-1.7.1-2.5.3c-2.1-1.2-3-.9-3-.9-.6 1.4-.2 2.5-.1 2.8-.7.7-1.1 1.6-1.1 2.6 0 3.6 2 4.3 4 4.5.3.3.5.8.5 1.6V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  return `
    <div class="m-project-grid">
      <div class="m-project-img">
        <img src="${esc(p.image)}" alt="${esc(p.title)} preview" />
      </div>
      <div>
        <h3 class="m-title">${esc(p.title)}</h3>

        <dl class="m-detail-row"><dt>Timeline</dt><dd>${esc(p.timeline)}</dd></dl>
        <dl class="m-detail-row"><dt>Purpose</dt><dd>${esc(p.purpose)}</dd></dl>

        <p class="m-section-label">Technologies</p>
        <div class="m-techs">${p.stack.map((t) => `<span class="m-tech">${esc(t)}</span>`).join("")}</div>

        <p class="m-section-label">Description</p>
        <p class="m-desc">${esc(p.longDesc)}</p>

        <p class="m-section-label">Challenges Solved</p>
        <ul class="m-bullets">${p.challenges.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>

        ${p.github ? `<a class="m-gh-btn" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">${ghSvg} View on GitHub</a>` : ""}
      </div>
    </div>
  `;
}

function initWorkCarousel() {
  const shot = qs("[data-work-shot]");
  const track = qs("[data-work-track]");
  const prevBtn = qs("[data-work-prev]");
  const nextBtn = qs("[data-work-next]");
  const elNum = qs("[data-work-num]");
  const elTitle = qs("[data-work-title]");
  const elDesc = qs("[data-work-desc]");
  const elStack = qs("[data-work-stack]");
  const elGh = qs("[data-work-github]");
  const elLive = qs("[data-work-live]");
  if (!shot || !track || !prevBtn || !nextBtn || !elNum || !elTitle || !elDesc || !elStack || !elGh || !elLive)
    return;

  let index = 0;
  let wheelLock = false;

  const setContent = (i) => {
    const p = projects[i];
    elNum.textContent = String(i + 1).padStart(2, "0");
    elTitle.textContent = p.title;
    elDesc.textContent = p.desc;
    elStack.innerHTML = p.stack.map((s) => `<span class="accent">${esc(s)}</span>`).join(", ");
    elGh.href = p.github;
    elGh.setAttribute("target", "_blank");
    elGh.setAttribute("rel", "noopener noreferrer");
    elGh.style.pointerEvents = p.github ? "" : "none";
    elGh.style.opacity = p.github ? "" : "0.45";

    const slideW = track.clientWidth;
    track.scrollTo({ left: i * slideW, behavior: "smooth" });
  };

  const go = (dir) => {
    index = (index + dir + projects.length) % projects.length;
    setContent(index);
  };

  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));

  const onWheel = (e) => {
    const absX = Math.abs(e.deltaX);
    const absY = Math.abs(e.deltaY);
    const wantsHorizontal = absX > absY || e.shiftKey;
    if (!wantsHorizontal) return;
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = true;
    const delta = absX > absY ? e.deltaX : e.deltaY;
    go(delta > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelLock = false;
    }, 420);
  };

  shot.addEventListener("wheel", onWheel, { passive: false });

  let startX = 0;
  let dragging = false;
  shot.addEventListener("pointerdown", (e) => {
    dragging = true;
    startX = e.clientX;
    shot.setPointerCapture(e.pointerId);
  });
  shot.addEventListener("pointerup", (e) => {
    if (!dragging) return;
    dragging = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) < 28) return;
    go(dx < 0 ? 1 : -1);
  });
  shot.addEventListener("pointercancel", () => {
    dragging = false;
  });

  elLive.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(renderProjectModal(projects[index]));
  });

  setContent(index);
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initTabs();
  initSmoothScroll();
  initActiveNavOnScroll();
  initWorkCarousel();
  initServiceModals();
  setActiveNav(location.hash || "#home");
});
