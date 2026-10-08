# RohanOS Customization Map

## 1. Summary

### How RohanOS is structured

RohanOS is a React + Vite + JavaScript project organized as an **OS shell + independent applications** architecture.

- **OS Shell** (`src/components/`) — LockScreen, Desktop, Taskbar, StartMenu, Window, ContextMenu, Flyouts (Calendar, QuickSettings), DesktopIcon, FullscreenButton. These handle the desktop environment mechanics.
- **Applications** (`src/apps/`) — 16 apps including portfolio apps (Resume, About, Experience, Projects, Skills, Certifications, Contact) and utility/fun apps (Explorer, Browser, VS Code, Paint, Personalize, Recycle, Notes, GamesHub with Snake/TicTacToe/Memory).
- **State/Context** (`src/context/`) — `WindowManagerContext` (window z-index, open/close/maximize/minimize) and `WallpaperContext` (wallpaper selection).
- **Hooks** (`src/hooks/`) — `useClock` and `useDraggableWindow`.
- **Data** (`src/data/`) — **TWO central files**:
  - [profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js) — `profile`, `experience`, `education`, `projects`, `skills`, `certifications` objects.
  - [appRegistry.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/appRegistry.js) — `appRegistry` metadata (titles, icons, colors, external URLs), plus `desktopIconOrder`, `pinnedAppOrder`, `taskbarPinned`.
- **Assets** (`src/assets/images/`) — avatar images, wallpapers, start.png, resume PDF.
- **Styles** (`src/styles/`) — `global.css` and shared `doc-content.module.css`.

### Where its portfolio data lives

Portfolio data is split between **centralized JS exports in `src/data/`** and **hard-coded copy inside several app components / UI components**:

| Data | Central (`profile.js`) | Hard-coded elsewhere |
|---|---|---|
| Name / role / email / phone / GitHub / LinkedIn | ✅ `profile` object | ❌ Also duplicated inline in About.jsx, Resume.jsx (buildResumeHtml), Code.jsx, LockScreen.jsx, StartMenu.jsx, Explorer.jsx, Notes.jsx, Contact.jsx, appRegistry.js |
| Experience | ✅ `experience[]` | ❌ Also duplicated inline in Resume.jsx (buildResumeHtml) |
| Education | ✅ `education{}` | ❌ Also duplicated inline in Resume.jsx |
| Projects | ✅ `projects[]` | ❌ Also hard-coded references in StartMenu.jsx (RECOMMENDED list), Notes.jsx (My-Projects.txt) |
| Skills | ✅ `skills[]` | ❌ Also duplicated inline in Resume.jsx |
| Certifications | ✅ `certifications[]` | ❌ Also duplicated inline in Resume.jsx |
| About / bio copy | ❌ N/A — fully hard-coded | ✅ [About.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/About/About.jsx) |
| Notes copy | ❌ N/A — fully hard-coded | ✅ [Notes.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx) (5 notes) |
| Explorer path | ❌ N/A | ✅ [Explorer.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Explorer/Explorer.jsx#L17) `C:\Users\Rohan\Documents` |
| VS Code snippet | ❌ N/A | ✅ [Code.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Code/Code.jsx) |
| Resume HTML preview | ❌ N/A | ✅ [Resume.jsx buildResumeHtml()](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Resume/Resume.jsx#L35-L131) fully hard-coded string |
| LockScreen users | ❌ N/A | ✅ [LockScreen.jsx USERS[]](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/LockScreen/LockScreen.jsx#L9-L13) includes user "Rohan" |
| StartMenu footer + Recommended | ❌ N/A | ✅ [StartMenu.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/StartMenu/StartMenu.jsx#L6-L10, L71-L74) |
| Wallpaper options | ❌ N/A | ✅ [WallpaperContext.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/context/WallpaperContext.jsx#L11-L18) |

### How difficult the customization is

**Medium difficulty.** The project is **partially data-driven**:
- Experience/Projects/Skills/Certifications/Education + basic profile fields have a central source (`profile.js`) but several apps **bypass it** and embed their own hard-coded copies, especially Resume.jsx and Notes.jsx.
- About copy, Code.jsx, StartMenu RECOMMENDED, LockScreen USERS, Explorer path, and all 5 Notes are fully hard-coded.
- This means **you cannot just edit profile.js** — you must also hunt down and replace every hard-coded duplicate. Counting all locations yields **~28 individual change items** across ~19 files.

### Is the project already data-driven?

**Partially.** The `profile.js` + `appRegistry.js` two-file pattern is a good base, but:
1. Resume.jsx renders its resume preview through a **fully hard-coded HTML string** inside `buildResumeHtml()` instead of consuming `profile`/`experience`/etc. — this is the biggest single risk.
2. About, Notes, Code, Explorer path, LockScreen user list, and StartMenu Recommended are **not data-driven at all**.
3. StartMenu footer user name ("Rohan") is hard-coded instead of reading from `profile.name`.
4. `appRegistry` `resume.title` and the Resume PDF import filename are hard-coded to "rohan_resume.pdf".

---

## 2. Customization Categories

### Category 01 — Central Data (profile.js + appRegistry.js)
- Change 01: Replace `profile` object (name, role, email, phone, GitHub, LinkedIn) — add Kaggle + portfolio URL
- Change 02: Replace `experience[]` with Cellula Technology internship (1 entry → 2 sub-projects)
- Change 03: Replace `education{}` with Mansoura University entry
- Change 04: Replace `projects[]` with 5 Muhammad Ammar projects
- Change 05: Replace `skills[]` groups/categories with ML engineer skills
- Change 06: Replace `certifications[]` with DeepLearning.AI + CSkilled courses data
- Change 07: Update `appRegistry` resume title, GitHub URL, LinkedIn URL, and add Kaggle entry

### Category 02 — Desktop Identity / Boot / Lock Screen
- Change 08: LockScreen user list — rename "Rohan" to "Muhammad Ammar", replace avatar
- Change 09: LockScreen welcome notification greeting "Welcome, {user.name}" (auto-updates if Change 08 done)
- Change 10: StartMenu footer user name + avatarLogo image

### Category 03 — About
- Change 11: Rewrite About.jsx content (greeting, title, paragraphs, "Currently" tags)

### Category 04 — Projects
- Change 12: StartMenu RECOMMENDED items — replace IronRentals/Prajna AI/rohan_resume.pdf refs with Muhammad's projects + new resume filename
- Change 13: (Done via Change 04) profile.js projects[]

### Category 05 — Experience + Education
- Change 14: (Done via Change 02 + 03) profile.js experience[] / education{}

### Category 06 — Skills
- Change 15: (Done via Change 05) profile.js skills[]

### Category 07 — Certifications / Courses
- Change 16: (Done via Change 06) profile.js certifications[] + decide whether to rename app to "Courses & Certifications"

### Category 08 — Contact
- Change 17: Contact.jsx — replace "Open to full-time MERN roles" lead, phone rendering (handle `null` phone), add Kaggle link row

### Category 09 — Resume App
- Change 18: Resume.jsx — replace `rohan_resume.pdf` import with Muhammad's PDF
- Change 19: Resume.jsx `buildResumeHtml()` — rebuild the entire hard-coded resume HTML string from Muhammad's data

### Category 10 — Notes App
- Change 20: Notes.jsx Welcome.txt — rewrite title and all content lines
- Change 21: Notes.jsx About-Portfolio.txt — rewrite
- Change 22: Notes.jsx Explore.txt — rewrite (generic, minimal changes)
- Change 23: Notes.jsx My-Projects.txt — rewrite with Muhammad's 5 projects
- Change 24: Notes.jsx Contact.txt — rewrite with GitHub/LinkedIn/Kaggle/email for Muhammad

### Category 11 — Explorer
- Change 25: Explorer.jsx — rename `C:\Users\Rohan\Documents` → `C:\Users\Muhammad\Documents`, rename `rohan_resume.pdf` label

### Category 12 — Code Editor (VS Code)
- Change 26: Code.jsx — rewrite the faux code snippet to reflect Muhammad Ammar / ML Engineer / Python + PyTorch + FastAPI stack + interests

### Category 13 — App Registry + Desktop Icon Order + Start Menu Pins
- Change 27: appRegistry — add `kaggle` external app entry (user has Kaggle, original doesn't)
- Change 28: Optionally add `kaggle` to `desktopIconOrder`, `pinnedAppOrder`, and/or `taskbarPinned`

### Category 14 — Visual Assets
- Change 29: Replace avatar images (avatar.png, avatar-logo.png, "avatar logo.png") with Muhammad's me.png
- Change 30: Replace resume PDF (rohan_resume.pdf) with Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf
- Change 31: Update favicon in index.html → Muhammad's initials / brand
- Change 32: Update page title + "rohanOS" → e.g., "AmmarOS" or "Muhammad Ammar — Portfolio OS"

### Category 15 — SEO / Metadata (index.html)
- Change 33: index.html `<title>` rohanOS → new OS name
- Change 34: index.html favicon `href` → Muhammad's image
- Change 35: Add Open Graph / description meta tags (currently missing) + author

### Category 16 — README
- Change 36: README.md — update title, author section, live URL, GitHub clone URL, project description, author links

---

## 3. Detailed Change Registry

### CHANGE-001

**Category:** Identity / Central Data

**What changes:**  
Replace the `profile` object values with Muhammad Ammar's personal data; add `kaggle` + `portfolioUrl` + `location` fields.

**Current value:**  
```js
{
  name: 'Rohan Dohe',
  role: 'Full Stack Developer',
  email: 'rohandohe5427@gmail.com',
  phone: '+91 82085 XXXXX',
  github: 'https://github.com/rowhn',
  linkedin: 'https://www.linkedin.com/in/rohan-dohe-68965a233/',
}
```

**Source file:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L1-L8)

**Component:**  
N/A (data object consumed by Resume, Experience, Contact, Certifications, Projects, Skills, appRegistry)

**Current data structure:**  
Flat object with keys: `name`, `role`, `email`, `phone`, `github`, `linkedin`.

**Target data from my portfolio:**  
From PORTFOLIO_DATA.json → `personal_information`:
- `full_name`: "Muhammad Ammar"
- `professional_title`: "Machine Learning Engineer"
- `email`: "i.muhamad.amar@gmil.com"
- `phone`: null (not present)
- `github`: "https://github.com/mu-3mar"
- `linkedin`: "https://linkedin.com/in/mu-3mar"
- `kaggle`: "https://www.kaggle.com/mohamedsayedamarmsa" (new field — currently missing)
- `portfolioUrl`: "https://mu-3mar.github.io" (new field)
- `location`: "" (empty — keep as empty)
- `initials`: "MA" (useful as fallback avatar)

**Exact fields affected:**  
`profile.name`, `profile.role`, `profile.email`, `profile.phone`, `profile.github`, `profile.linkedin`. **New:** `profile.kaggle`, `profile.portfolioUrl`, `profile.initials`.

**Files that must change:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L1-L8)

**Files that should NOT change:**  
All app components that read from `profile` (they will auto-update once this file is correct).

**Risk:** Low. This is the canonical source — but many hard-coded duplicates elsewhere bypass it (see Changes 11, 17, 19, 20-24, 25, 26, etc.).

**Dependencies:**  
None for the data update itself. Contact.jsx must handle `profile.phone === null` (Change 17) separately.

**Can this be implemented independently?** Yes.

---

### CHANGE-002

**Category:** Experience / Central Data

**What changes:**  
Replace `experience[]` array with Muhammad's Cellula Technology internship entry. Original has 2 entries → new has 1 entry (with 2 sub-projects inside description bullets).

**Current value:**  
2 entries: "Full Stack Developer @ DezyKode IT Solutions · Pune" and "MERN Stack Developer — Internship @ Wide Softech Pvt. Ltd. · Nagpur".

**Source file:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L10-L31)

**Component:**  
[Experience.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Experience/Experience.jsx) (renders `experience.map`)

**Current data structure:**  
```ts
experience: Array<{ title: string; company: string; period: string; bullets: string[] }>
```

**Target data from my portfolio:**  
PORTFOLIO_DATA.json → `experience[0]`:
- `title`: "Machine Learning Intern"
- `company`: "Cellula Technology · Project-based"
- `period`: "Oct 2025 – Dec 2025"
- `bullets`: Combine sub_projects[0] + sub_projects[1] responsibilities + metrics → ~14 bullets (Hotel Booking Cancellation Prediction + Uber Fare Prediction with metrics and responsibilities).

**Exact fields affected:**  
Replace entire `experience` array (length 2 → length 1).

**Files that must change:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L10-L31)

**Files that should NOT change:**  
Experience.jsx component structure.

**Risk:** Low. But Resume.jsx bypasses this data (Change 19) and must be updated separately.

**Dependencies:**  
Change 19 (Resume `buildResumeHtml` duplicates) must be kept in sync.

**Can this be implemented independently?** Yes.

---

### CHANGE-003

**Category:** Education / Central Data

**What changes:**  
Replace `education{}` with Mansoura University entry.

**Current value:**  
```js
{
  degree: 'B.Tech, Information Technology',
  school: 'J D College of Engineering and Management, Nagpur',
  period: '2021 – 2025',
  detail: 'CGPA 6.96 / 10',
}
```

**Source file:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L33-L38)

**Component:**  
[Experience.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Experience/Experience.jsx#L23-L31) (also renders education from here)

**Current data structure:**  
Flat object: `degree`, `school`, `period`, `detail`.

**Target data from my portfolio:**  
PORTFOLIO_DATA.json → `education[0]`:
- `degree`: "Faculty of Computer and Information Science | Bachelor's Degree in Computer Science"
- `school`: "Mansoura University"
- `period`: "2022 – 2026"
- `detail`: "In progress" (since 2026 end date not yet reached as of 2026-10-08, and no GPA present)

**Exact fields affected:**  
All 4 keys of education object.

**Files that must change:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L33-L38)

**Files that should NOT change:**  
Experience.jsx rendering.

**Risk:** Low.

**Dependencies:**  
Resume.jsx has a hard-coded duplicate (Change 19).

**Can this be implemented independently?** Yes.

---

### CHANGE-004

**Category:** Projects / Central Data

**What changes:**  
Replace `projects[]` with Muhammad's 5 projects. Original: 3 MERN/web projects → New: 5 ML/CV projects.

**Current value:**  
3 entries: "Iron Rentals — Heavy Equipment Rental Platform", "Prajna AI — RAG Chatbot", "Windows-Style Portfolio".

**Source file:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L40-L70)

**Component:**  
[Projects.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Projects/Projects.jsx)

**Current data structure:**  
```ts
projects: Array<{
  title: string;
  stack: string;           // "React · Node · ..."
  bullets: string[];       // bullet descriptions
  github?: string;
  badge?: string;          // e.g. "you're using it"
}>
```

**Target data from my portfolio:**  
PORTFOLIO_DATA.json → `projects[]` (5 entries). For each project:
- `title`: projects[i].name
- `stack`: projects[i].technologies joined with " · "
- `bullets`: Split projects[i].description on "\n" (each line starts with "- " → keep as bullets)
- `github`: projects[i].github_repository
- `badge`: Only project 0 ("University Graduation Project") — set badge to `"Graduation Project"`; others no badge.

Mapped projects:
1. Real-Time Industrial Quality Control System (badge)
2. NYC Taxi Trip Duration Prediction
3. Road Accident Risk Prediction
4. AI Body Measurement System
5. Sign Language Recognition

**Exact fields affected:**  
Entire array (length 3 → length 5).

**Files that must change:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L40-L70)

**Files that should NOT change:**  
Projects.jsx component.

**Risk:** Low.

**Dependencies:**  
StartMenu RECOMMENDED (Change 12), Notes My-Projects.txt (Change 23), Resume buildResumeHtml projects (Change 19).

**Can this be implemented independently?** Yes.

---

### CHANGE-005

**Category:** Skills / Central Data

**What changes:**  
Replace `skills[]` groups from MERN/web categories → ML Engineer categories.

**Current value:**  
4 groups: Languages, Frameworks & Databases, Tools & Testing, Concepts (all JavaScript/web focused).

**Source file:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L72-L77)

**Component:**  
[Skills.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Skills/Skills.jsx) (renders skills.map → skillGroup)

**Current data structure:**  
```ts
skills: Array<{ group: string; items: string[] }>
```

**Target data from my portfolio:**  
PORTFOLIO_DATA.json → `technical_skills.as_grouped_in_data`:
1. Group: "ML & AI" → Supervised Learning, Classification, Regression, Deep Learning, Feature Engineering, Model Evaluation, Hyperparameter Tuning
2. Group: "Frameworks & Technologies" → PyTorch, FastAPI, OpenCV, YOLO, MediaPipe
3. Group: "Libraries" → NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn
4. Group: "Languages & Tools" → Python, SQL, Docker, Git, GitHub, Linux
5. Group: "Languages" → Arabic, English

**Exact fields affected:**  
Entire skills array (4 groups → 5 groups).

**Files that must change:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L72-L77)

**Files that should NOT change:**  
Skills.jsx rendering.

**Risk:** Low.

**Dependencies:**  
Resume buildResumeHtml skills grid has hard-coded copy (Change 19).

**Can this be implemented independently?** Yes.

---

### CHANGE-006

**Category:** Certifications / Central Data

**What changes:**  
Replace `certifications[]` with Muhammad's courses list. Original has 4 AICTE/Udemy/IIT type certs. Muhammad has **no structured certifications** but has `courses_training` (DeepLearning.AI + CSkilled). Decision: repurpose this array to hold the courses as cert-like entries (provider as issuer, course title as title), OR keep certs empty and add a new app. Recommendation: **repurpose `certifications[]` to hold courses** (no new app needed).

**Current value:**  
```js
[
  { title: 'AI-ML Virtual Internship', issuer: 'AICTE' },
  { title: 'Paper Presentation', issuer: 'International Conference' },
  { title: 'Foundations of Web Development', issuer: 'Udemy' },
  { title: 'Web Development', issuer: 'IIT Bombay' },
]
```

**Source file:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L79-L84)

**Component:**  
[Certifications.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Certifications/Certifications.jsx) (renders `certifications.map(c → { c.title, c.issuer })`)

**Current data structure:**  
```ts
certifications: Array<{ title: string; issuer: string }>
```

**Target data from my portfolio:**  
PORTFOLIO_DATA.json → `courses_training`:
- DeepLearning.AI:
  - Machine Learning Specialization
  - Deep Learning Specialization
  - Machine Learning in Production
- CSkilled:
  - Machine Learning Diploma

→ 4 entries matching the array size:
```js
[
  { title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI' },
  { title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI' },
  { title: 'Machine Learning in Production', issuer: 'DeepLearning.AI' },
  { title: 'Machine Learning Diploma', issuer: 'CSkilled' },
]
```

**Exact fields affected:**  
All 4 entries replaced. Also optionally change appRegistry `certifications` title/shortLabel from "Certifications" → "Courses & Certifications".

**Files that must change:**  
[profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js#L79-L84), optionally [appRegistry.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/appRegistry.js#L42-L47) (label text only).

**Files that should NOT change:**  
Certifications.jsx component.

**Risk:** Low.

**Dependencies:**  
Resume buildResumeHtml certifications list (Change 19).

**Can this be implemented independently?** Yes.

---

### CHANGE-007

**Category:** App Registry / Identity

**What changes:**  
Update `appRegistry.resume.title` from "Resume — rohan_resume.pdf" → "Resume — Muhammad_Ammar_..._Resume.pdf", and update `github` / `linkedin` `external` URLs (they already read from `profile` so actually auto-updated). **Add a `kaggle` entry** (original has no Kaggle).

**Current value:**  
`resume.title = "Resume — rohan_resume.pdf"`; no kaggle entry.

**Source file:**  
[appRegistry.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/appRegistry.js#L6-L133)

**Component:**  
Used everywhere: Desktop icons, StartMenu, Taskbar, Window title bars.

**Current data structure:**  
`appRegistry[appId] = { title, shortLabel, icon, color, fit?, external? }`

**Target data from my portfolio:**  
- `resume.title`: "Resume — Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf"
- **New** `kaggle` entry:
  ```js
  kaggle: {
    title: 'Kaggle',
    shortLabel: 'Kaggle',
    icon: 'fa-brands fa-kaggle',    // NOTE: Font Awesome has fa-kaggle (check FA 6.4 — it exists as fa-kaggle)
    color: '#20beff',                // Kaggle blue
    external: profile.kaggle,        // requires profile.kaggle in CHANGE-001
  }
  ```
- Also optional: `certifications.title` from "Certifications" → "Courses & Certifications" (matches portfolio section label).

**Exact fields affected:**  
`appRegistry.resume.title`, new `appRegistry.kaggle`, optionally `appRegistry.certifications.title/shortLabel`.

**Files that must change:**  
[appRegistry.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/appRegistry.js)

**Files that should NOT change:**  
Window title reading logic, DesktopIcon, StartMenu — they already render from registry.

**Risk:** Low. Note: `fa-kaggle` is in Font Awesome 6 free? Double-check. Kaggle is a free brand icon in FA 6.x ✅.

**Dependencies:**  
Change 001 (must add `profile.kaggle` first).

**Can this be implemented independently?** Only after Change 001. For resume.title alone: Yes.

---

### CHANGE-008

**Category:** Lock Screen / Identity

**What changes:**  
Rename the primary user "Rohan" → "Muhammad Ammar" (or just "Muhammad") in the LockScreen `USERS` constant. Also replace the `avatar` image import with Muhammad's profile image.

**Current value:**  
```js
const USERS = [
  { name: 'Rohan', img: avatar },
  { name: 'Administrator', img: snowflakes },
  { name: 'Guest', img: download },
];
```

**Source file:**  
[LockScreen.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/LockScreen/LockScreen.jsx#L9-L13)

**Component:**  
LockScreen — Sign-in profile list, sign-in greeting, default user = USERS[0].

**Current data structure:**  
Inline USERS[] array with name + img. Default user: USERS[0] (line 19).

**Target data from my portfolio:**  
- USERS[0].name: "Muhammad Ammar" (or "Muhammad" for short)
- USERS[0].img: replaced with Muhammad's me.png asset (Change 29 asset drop-in)

Other users (Administrator, Guest) are decorative/fun — can keep or rename as you like (not critical).

**Exact fields affected:**  
Line 10 name, line 10 img (after asset replaced). Also line 79 "Welcome, {user.name}" updates automatically.

**Files that must change:**  
[LockScreen.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/LockScreen/LockScreen.jsx#L9-L13)

**Files that should NOT change:**  
LockScreen.module.css, useClock, rendering logic.

**Risk:** Low. Pure text + asset swap.

**Dependencies:**  
Change 29 (avatar asset placement — or can import directly once asset exists).

**Can this be implemented independently?** Yes (name change is independent; asset swap depends on file being added).

---

### CHANGE-009

**Category:** Lock Screen / Welcome

**What changes:**  
Welcome notification body copy "Have a great session — feel free to look around" and footer "Portfolio OS Notifications" can optionally be branded to "Muhammad Ammar — Portfolio OS Notifications". Also "Welcome, {user.name}" auto-updates from Change 008.

**Current value:**  
```
Welcome, Rohan
Have a great session — feel free to look around
Portfolio OS Notifications
```

**Source file:**  
[LockScreen.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/LockScreen/LockScreen.jsx#L69-L84)

**Component:**  
LockScreen sign-in overlay notification card.

**Current data structure:**  
Hard-coded strings inside JSX (lines 73, 79, 80, 83).

**Target data from my portfolio:**  
- Line 79: updates automatically (interpolates user.name)
- Line 80: "Have a great session — explore my projects and get in touch!" (optional — original is fine too)
- Line 83: "Muhammad Ammar — Portfolio Notifications" (optional)

**Exact fields affected:**  
Lines 80, 83.

**Files that must change:**  
[LockScreen.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/LockScreen/LockScreen.jsx#L80-L83)

**Files that should NOT change:**  
LockScreen.module.css.

**Risk:** Very Low (cosmetic copy only).

**Dependencies:**  
None. Can leave as-is if desired.

**Can this be implemented independently?** Yes.

---

### CHANGE-010

**Category:** Start Menu / Identity

**What changes:**  
Replace StartMenu footer user display name "Rohan" → read from `profile.name` or hard-code "Muhammad Ammar", and replace avatarLogo image path. Also replace imported asset.

**Current value:**  
```jsx
<div className={styles.user}>
  <img src={avatarLogo} alt="User" />
  <span>Rohan</span>
</div>
```
And import `avatar-logo.png` on line 4.

**Source file:**  
[StartMenu.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/StartMenu/StartMenu.jsx#L4, L70-L74)

**Component:**  
StartMenu footer user badge.

**Current data structure:**  
Hard-coded `<span>Rohan</span>` + imported PNG.

**Target data from my portfolio:**  
- Use `profile.name` (import `{ profile } from '../../data/profile'`) OR short-name "Muhammad" / "Muhammad Ammar".
- Image src → Muhammad's me.png (placed at a new asset path — see Change 29).

**Exact fields affected:**  
Line 4 import path, line 71 src image, line 73 span text.

**Files that must change:**  
[StartMenu.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/StartMenu/StartMenu.jsx#L4, L70-L74)

**Files that should NOT change:**  
StartMenu.module.css.

**Risk:** Low.

**Dependencies:**  
Change 29 (asset placement) OR drop-in replacement of existing avatar-logo.png.

**Can this be implemented independently?** Yes (text; asset depends on Change 29).

---

### CHANGE-011

**Category:** About App

**What changes:**  
Rewrite the entire content of the About app to reflect Muhammad Ammar's bio. Currently fully hard-coded with Rohan's story.

**Current value:**  
- H2: "Hi, I'm Rohan 👋"
- Lead: "Full Stack Developer · MERN"
- Para 1: builds full-stack web apps with MERN
- Para 2: internships → Full Stack Dev @ DezyKode in Pune → LLM APIs, Vercel, Render
- Para 3: this Windows desktop side project
- "Currently" tags: "Full Stack Developer @ DezyKode IT", "Pune, India", "Open to full-time MERN roles"

**Source file:**  
[About.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/About/About.jsx#L1-L35)

**Component:**  
About

**Current data structure:**  
All copy inline — no data binding at all.

**Target data from my portfolio:**  
From PORTFOLIO_DATA.json → `professional_summary`:
- H2 greeting: "Hi, I'm Muhammad 👋" (matches hero_greeting: "Hi, I'm Muhammad")
- Lead: "Machine Learning Engineer"
- Para 1: `summary` → "Machine Learning Engineer with hands-on experience building end-to-end machine learning solutions across classification, regression, and deep learning. Experienced in data preprocessing, feature engineering, model evaluation, and model optimization using Python and Scikit-learn."
- Para 2: "Also experienced in integrating ML models into FastAPI applications and building practical ML systems from data and modeling to inference."
- Para 3 (optional — about this portfolio): "I built this interactive desktop-style portfolio to let you explore my work like an OS — open the apps, check out my projects, play the games, and if something catches your eye, reach out!"
- "Currently" tags (3 items):
  1. "Machine Learning Engineer" (or "CS Student @ Mansoura University")
  2. Based on location field: if empty → omit or replace with "Location: (available upon request)"
  3. "Open to ML / CV roles" or similar (match career_focus → "End-to-end ML Solutions · FastAPI Integration")

**Exact fields affected:**  
Lines 6, 7, 9-25 (paragraphs), 28-31 (tagRow tags).

**Files that must change:**  
[About.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/About/About.jsx)

**Files that should NOT change:**  
doc-content.module.css.

**Risk:** Low — but this is the most visible "voice" of the portfolio. Must read naturally.

**Dependencies:**  
None.

**Can this be implemented independently?** Yes. One of the highest-impact single changes.

---

### CHANGE-012

**Category:** Start Menu / Recommended

**What changes:**  
Replace the 3 hard-coded RECOMMENDED items in StartMenu (currently references to Rohan's projects).

**Current value:**  
```js
const RECOMMENDED = [
  { id: 'projects', icon: 'fa-solid fa-truck-ramp-box', title: 'IronRentals — heavy equipment platform', sub: 'Project · MERN' },
  { id: 'projects', icon: 'fa-solid fa-robot', title: 'Prajna AI — RAG chatbot', sub: 'Project · Gemini API' },
  { id: 'resume', icon: 'fa-solid fa-file-pdf', title: 'rohan_resume.pdf', sub: 'Recently opened' },
];
```

**Source file:**  
[StartMenu.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/StartMenu/StartMenu.jsx#L6-L10)

**Component:**  
StartMenu Recommended list (below Pinned grid).

**Current data structure:**  
Inline `RECOMMENDED: Array<{ id, icon, title, sub }>`.

**Target data from my portfolio:**  
3-4 items recommending Muhammad's portfolio features. Example mapping (3 entries — keeps length same):
1. { id: 'projects', icon: 'fa-solid fa-industry', title: 'Industrial QC System', sub: 'Project · YOLO · FastAPI' } → top graduation project
2. { id: 'projects', icon: 'fa-solid fa-brain', title: 'AI Body Measurement System', sub: 'Project · TensorFlow · CV' } → notable CV project
3. { id: 'resume', icon: 'fa-solid fa-file-pdf', title: 'Muhammad_Ammar_..._Resume.pdf', sub: 'Recently opened' }

Or optionally add a 4th Kaggle entry if adding kaggle app.

**Exact fields affected:**  
RECOMMENDED array (lines 7-9 content).

**Files that must change:**  
[StartMenu.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/StartMenu/StartMenu.jsx#L6-L10)

**Files that should NOT change:**  
StartMenu.module.css.

**Risk:** Low.

**Dependencies:**  
None.

**Can this be implemented independently?** Yes.

---

### CHANGE-013

**Category:** Desktop Icon Order + Pinned App Order + Taskbar Pinned (optional Kaggle)

**What changes:**  
If adding the new Kaggle app (Change 007), insert it into the user-visible order arrays so it actually shows up on the desktop, StartMenu pinned, and/or taskbar.

**Current value:**  
- `desktopIconOrder`: 14 apps (no kaggle)
- `pinnedAppOrder`: 16 apps (no kaggle)
- `taskbarPinned`: 5 apps (no kaggle)

**Source file:**  
[appRegistry.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/appRegistry.js#L136-L180)

**Component:**  
Desktop (desktop icons), StartMenu (pinned grid), Taskbar (pinned left-of-running-apps).

**Current data structure:**  
Arrays of app ID strings.

**Target data from my portfolio:**  
User has Kaggle as a key social/professional profile. Recommend:
- Insert `'kaggle'` into `desktopIconOrder` next to `'github'` / `'linkedin'` (around index 10-11).
- Insert `'kaggle'` into `pinnedAppOrder` in the same region.
- Optionally insert into `taskbarPinned` (optional — taskbar has more limited space).

**Exact fields affected:**  
Arrays at lines 136-150, 153-170, 173-180.

**Files that must change:**  
[appRegistry.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/appRegistry.js#L136-L180)

**Files that should NOT change:**  
Desktop.jsx, StartMenu.jsx, Taskbar.jsx rendering.

**Risk:** Very Low. Pure order arrays.

**Dependencies:**  
Change 007 (`kaggle` entry must exist in registry first or the icon will not render metadata).

**Can this be implemented independently?** Only after Change 007.

---

### CHANGE-014

**Category:** Projects App — already done via profile.js (Change 004)
This entry intentionally left as a marker. No additional file edits needed beyond Change 004 because Projects.jsx correctly reads from `projects` in profile.js.

**Files that must change:** None beyond profile.js.

---

### CHANGE-015

**Category:** Skills App — already done via profile.js (Change 005)
Marker entry. Skills.jsx reads correctly from `skills` in profile.js.

---

### CHANGE-016

**Category:** Certifications App — already done via profile.js (Change 006)
Marker entry. Certifications.jsx reads correctly from `certifications` in profile.js.

---

### CHANGE-017

**Category:** Contact App

**What changes:**  
Replace the Contact page copy and contact rows to match Muhammad's data. Issues in current:
1. Lead text "Open to full-time MERN roles" — wrong role/domain.
2. Phone row uses `profile.phone.replace(/\s/g, '')` — Muhammad's phone is `null`, which would throw.
3. No Kaggle row (Muhammad has Kaggle).
4. Email + GitHub + LinkedIn URLs already read from `profile` and will auto-update → good.

**Current value:**  
```
Let's talk
Open to full-time MERN roles
[envelope] rohandohe5427@gmail.com       ← reads from profile.email (auto)
[phone]    +91 82085 XXXXX                ← reads from profile.phone (THROWS if null)
[github]   github.com/rowhn               ← reads from profile.github (auto)
[linkedin] linkedin.com/in/rohan-dohe-…   ← reads from profile.linkedin (auto)
```

**Source file:**  
[Contact.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Contact/Contact.jsx#L1-L34)

**Component:**  
Contact

**Current data structure:**  
Hard-coded H2 + lead, then profile-object bound rows. 4 rows (email, phone, github, linkedin).

**Target data from my portfolio:**  
- H2: "Get in Touch" (matches portfolio contact section heading)
- Lead: "Want to chat? Reach out by email and I'll respond whenever I can." (matches body_text from PORTFOLIO_DATA) OR "Machine Learning Engineer — open to ML / CV roles"
- Rows:
  1. Email (auto)
  2. **Conditionally render Phone only if `profile.phone` is non-null truthy**
  3. GitHub (auto)
  4. LinkedIn (auto)
  5. **NEW Kaggle row:** icon `fa-brands fa-kaggle`, href = `profile.kaggle`, display = stripped URL (e.g., `kaggle.com/mohamedsayedamarmsa`)

**Exact fields affected:**  
Line 7 (H2), line 8 (lead), lines 15-18 (phone guard), NEW lines after LinkedIn for Kaggle row.

**Files that must change:**  
[Contact.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Contact/Contact.jsx)

**Files that should NOT change:**  
doc-content.module.css.

**Risk:** Medium (null phone → unguarded replace call would crash).

**Dependencies:**  
Change 001 for `profile.kaggle` value, Change 007 for `fa-kaggle` icon FA registration verification.

**Can this be implemented independently?** Yes with null guard, but Kaggle row needs Change 001 first.

---

### CHANGE-018

**Category:** Resume / PDF Asset

**What changes:**  
Replace the `rohan_resume.pdf` import in Resume.jsx with the path to Muhammad's PDF after dropping the file into `src/assets/images/` (or `public/` for simpler Vite serve).

**Current value:**  
```js
import resumePdf from '../../assets/images/rohan_resume.pdf';
```

**Source file:**  
[Resume.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Resume/Resume.jsx#L2)

**Component:**  
Resume

**Current data structure:**  
Static import.

**Target data from my portfolio:**  
File `Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf` should be dropped in `src/assets/images/` (consistent with current pattern) and import changed to:
```js
import resumePdf from '../../assets/images/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf';
```
OR better: put in `/public/` → served at `/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf` → no import needed, use string URL.

**Exact fields affected:**  
Line 2 import.

**Files that must change:**  
[Resume.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Resume/Resume.jsx#L2)

**Files that should NOT change:**  
Resume.module.css.

**Risk:** Low.

**Dependencies:**  
Must physically copy the PDF file to the project first (asset task).

**Can this be implemented independently?** Only after PDF file exists in project.

---

### CHANGE-019

**Category:** Resume / Inline HTML Preview (HIGH RISK)

**What changes:**  
The `buildResumeHtml()` function in Resume.jsx is a **fully hard-coded template string** (lines 35-131) that renders the resume preview inside an `<iframe srcDoc={...}>`. It duplicates the ENTIRE resume: header (name + role + contacts), Experience, Projects, Skills+Certifications grid, and Education. **None of it reads from `profile`/`experience`/etc.** This is the single largest change because the function's HTML string contains Rohan's data in ~14 locations.

**Current value (summary of hard-coded parts):**  
- Line 59: Name "Rohan Dohe" + role "MERN Stack Developer"
- Line 60: Phone + email + "GitHub · LinkedIn"
- Lines 64-79: Experience x2 (DezyKode + Wide Softech, each with 3 bullets)
- Lines 82-103: Projects x3 (Iron Rentals, Prajna AI, Windows-Style Portfolio)
- Lines 105-124: Grid-2 — Skills (Languages / Frameworks & DB / Tools / Concepts) + Certifications (4 bullets)
- Lines 126-130: Education (B.Tech IT + J D College + CGPA 6.96 + dates)

**Source file:**  
[Resume.jsx buildResumeHtml()](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Resume/Resume.jsx#L35-L131)

**Component:**  
Resume → ResumeSheet → `<iframe srcDoc>`

**Current data structure:**  
```js
function buildResumeHtml() { return `<!DOCTYPE html>...hard-coded strings...`; }
```

**Target data from my portfolio:**  
Best approach: **Rewrite `buildResumeHtml()` to consume data from the `profile.js` imports at the top of the file** (which already import `profile`). Build strings dynamically so this never goes out of sync again:

```js
import { profile, experience, education, projects, skills, certifications } from '../../data/profile';

function buildResumeHtml() {
  const expHTML = experience.map(job => `
    <div class="item">
      <div class="row"><div class="item-title">${job.title} — ${job.company}</div><div class="meta">${job.period}</div></div>
      <ul>${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>
  `).join('');

  // ... similarly for projects, skills, certifications, education
  // ... header uses profile.name, profile.role, profile.email, profile.phone (guarded), links for GitHub/LinkedIn/Kaggle
}
```

If dynamic approach is preferred, remove the hard-coded strings entirely. If quick patch is needed (not recommended), replace each hard-coded section line-by-line with Muhammad's equivalent copy.

**Exact fields affected:**  
Lines 59-60 (header), 64-79 (experience section), 82-103 (projects section), 105-124 (skills/cert grid), 126-130 (education). Practically the entire function body.

**Files that must change:**  
[Resume.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Resume/Resume.jsx#L35-L131)

**Files that should NOT change:**  
Resume.module.css, `<iframe>` wrapper.

**Risk:** High. This is the single change most likely to introduce typos / broken resume rendering. Strongly recommended to refactor to data-driven first.

**Dependencies:**  
Change 001-006 (profile data must be correct first) and Change 018 (PDF reference).

**Can this be implemented independently?** No — depends on Change 001-006 being done first. Strongly recommended to do this Change as a batch after all data changes land.

---

### CHANGE-020

**Category:** Notes / Welcome.txt

**What changes:**  
Rewrite the first note "Welcome.txt" content and title.

**Current value:**  
```
id: "welcome"
name: "Welcome.txt"
icon: "📝"
title: "Welcome to Rohan's Portfolio"
content: [
  "Hey! I'm Rohan.",
  "",
  "Welcome to my interactive portfolio.",
  ...
  "— Rohan Dohe",
  "MERN Stack Developer",
]
```

**Source file:**  
[Notes.jsx notes[0]](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx#L4-L26)

**Component:**  
Notes (sidebar list + document viewer)

**Current data structure:**  
Inline notes[] array of objects with string array content.

**Target data from my portfolio:**  
```
title: "Welcome to Muhammad's Portfolio"
content: [
  "Hey! I'm Muhammad Ammar.",
  "",
  "Welcome to my interactive portfolio OS.",
  "",
  "I'm a Machine Learning Engineer focused on building end-to-end ML solutions and integrating models into FastAPI applications.",
  "",
  "Explore the folders, open the applications, check out my projects, learn about my experience, and play the games.",
  "",
  "Don't be afraid to click around — there might be something interesting hiding somewhere.",
  "",
  "— Muhammad Ammar",
  "Machine Learning Engineer",
]
```

**Exact fields affected:**  
notes[0].title, notes[0].content array (line 9, lines 10-25).

**Files that must change:**  
[Notes.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx#L4-L26)

**Files that should NOT change:**  
Notes.module.css, rendering.

**Risk:** Low.

**Dependencies:**  
None.

**Can this be implemented independently?** Yes.

---

### CHANGE-021

**Category:** Notes / About-Portfolio.txt

**What changes:**  
Rewrite note[1] content — describes the "why" of the portfolio OS + app purpose list.

**Current value:**  
"Why a Windows-style portfolio?" + app map with MERN-biased descriptions ("Resume → My professional journey", etc. — the descriptions are generic and OK, but the closing tone and intro should change to Muhammad voice).

**Source file:**  
[Notes.jsx notes[1]](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx#L27-L51)

**Component:**  
Notes.

**Target data from my portfolio:**  
Update intro to Muhammad's ML/CV focus:
- Line 33: "Why a Windows-style portfolio?" can stay OR change to "Why build a desktop-style portfolio?"
- Lines 35-38: Change "A traditional portfolio usually tells you what I can do. I wanted mine to let you experience it." → keep the concept but re-brand mention.
- Line 39: "This website is built as an interactive desktop environment where each application represents a different part of my professional profile." → keep.
- Lines 41-47: App map → keep the 7 lines but make tone ML-focused. E.g., "Projects → ML & computer vision projects I've built", "Skills → ML frameworks, Python libraries, and tools I use".
- Closing: keep "Have fun exploring."

**Exact fields affected:**  
notes[1].title, notes[1].content lines.

**Files that must change:**  
[Notes.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx#L27-L51)

**Risk:** Very Low.

**Can this be implemented independently?** Yes.

---

### CHANGE-022

**Category:** Notes / Explore.txt

**What changes:**  
Minor copy pass. The note is generic (how to use desktop). Mostly keep but remove lines 72 "check out my GitHub and LinkedIn" → add Kaggle.

**Source file:**  
[Notes.jsx notes[2]](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx#L52-L76)

**Target data from my portfolio:**  
Line 72: "And if you want to know more about me, check out my GitHub, LinkedIn, or Kaggle."

**Can this be implemented independently?** Yes.

---

### CHANGE-023

**Category:** Notes / My-Projects.txt

**What changes:**  
Rewrite the projects summary note from "Iron Rentals / Prajna AI / This portfolio" → Muhammad's 5 projects.

**Current value:**  
3 short project paragraphs + Iron Rentals / Prajna AI names.

**Source file:**  
[Notes.jsx notes[3]](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx#L77-L96)

**Component:**  
Notes.

**Target data from my portfolio:**  
Replace with:
```
title: "Things I've Built"
content: [
  "My projects are where I turn ML ideas into practical systems.",
  "",
  "Real-Time Industrial Quality Control System",
  "Two-stage YOLO defect detection pipeline (graduation project).",
  "",
  "NYC Taxi Trip Duration Prediction",
  "Regression pipeline (1M+ records, Ridge regression, FastAPI).",
  "",
  "Road Accident Risk Prediction",
  "517K+ records, multi-model comparison — best R² 0.887.",
  "",
  "AI Body Measurement System",
  "Multi-input dual-branch CNN for 14 body measurements + browser UI.",
  "",
  "Sign Language Recognition",
  "Real-time MediaPipe + PyTorch system with FastAPI webcam client.",
  "",
  "Open the Projects application on the desktop for more detail.",
]
```

**Exact fields affected:**  
notes[3].title, notes[3].content (lines 78-95 all).

**Files that must change:**  
[Notes.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx#L77-L96)

**Risk:** Low.

**Can this be implemented independently?** Yes.

---

### CHANGE-024

**Category:** Notes / Contact.txt

**What changes:**  
Replace GitHub username + LinkedIn URL with Muhammad's. Add Kaggle + email.

**Current value:**  
```
"GitHub" → "github.com/rowhn"
"LinkedIn" → "linkedin.com/in/rohan-dohe-68965a233/"
```

**Source file:**  
[Notes.jsx notes[4]](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx#L97-L119)

**Component:**  
Notes.

**Target data from my portfolio:**  
From PORTFOLIO_DATA.json → `personal_information.social_links`:
- "GitHub" → "github.com/mu-3mar"
- "LinkedIn" → "linkedin.com/in/mu-3mar"
- NEW "Kaggle" → "kaggle.com/mohamedsayedamarmsa"
- NEW "Email" → "i.muhamad.amar@gmil.com"

Insert these before the closing.

**Exact fields affected:**  
notes[4].content lines 98-118.

**Files that must change:**  
[Notes.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx#L97-L119)

**Risk:** Low.

**Can this be implemented independently?** Yes.

---

### CHANGE-025

**Category:** Explorer App

**What changes:**  
Two items in Explorer: the `C:\Users\Rohan\Documents` path header, and the `rohan_resume.pdf` entry label.

**Current value:**  
```
entries[0].label = "rohan_resume.pdf"
h3 = "C:\Users\Rohan\Documents"
```

**Source file:**  
[Explorer.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Explorer/Explorer.jsx#L5, L17)

**Component:**  
Explorer.

**Target data from my portfolio:**  
- Path: `C:\Users\Muhammad\Documents` (or `C:\Users\Ammar\Documents`)
- entries[0].label: "Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf"

**Exact fields affected:**  
Line 5, Line 17.

**Files that must change:**  
[Explorer.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Explorer/Explorer.jsx)

**Risk:** Very Low.

**Can this be implemented independently?** Yes.

---

### CHANGE-026

**Category:** Code Editor App (VS Code-style snippet)

**What changes:**  
Rewrite the fake JavaScript code object in Code.jsx from `developer` object with MERN stack → Muhammad / ML Engineer.

**Current value:**  
```js
{
  name: "Rohan Dohe",
  role: "Full Stack Developer",
  stack: ["MongoDB", "Express", "React", "Node.js"],
  currentlyBuilding: "AI-powered web apps",
  openTo: "full-time MERN roles",
}
console.log("Hi, I'm " + developer.name + " 👋");
```

**Source file:**  
[Code.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Code/Code.jsx#L1-L21)

**Component:**  
Code (syntax-highlighted faux editor)

**Target data from my portfolio:**  
```js
{
  name: "Muhammad Ammar",
  role: "Machine Learning Engineer",
  stack: ["Python", "PyTorch", "Scikit-learn", "FastAPI", "OpenCV"],
  currentlyBuilding: "End-to-end ML & CV systems",
  openTo: "ML / Computer Vision roles",
}
console.log("Hi, I'm " + developer.name + " 👋");
```

**Exact fields affected:**  
Lines 8-16.

**Files that must change:**  
[Code.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Code/Code.jsx)

**Risk:** Very Low.

**Can this be implemented independently?** Yes.

---

### CHANGE-027

**Category:** App Registry — already covered in Change 007 + 013 (Kaggle entry + orders)

---

### CHANGE-028

**Category:** App Registry — resume title already done in Change 007; certifications.title optional here if changed in Change 006.

---

### CHANGE-029

**Category:** Visual Assets / Avatars

**What changes:**  
Replace Rohan's personal avatar images with Muhammad's profile image (`me.png` from portfolio).

Files currently in RohanOS under `src/assets/images/`:
1. `avatar.png` — used by LockScreen user "Rohan" (LockScreen.jsx line 5)
2. `avatar-logo.png` — used by StartMenu footer (StartMenu.jsx line 4)
3. `"avatar logo.png"` — used in index.html as favicon (index.html line 5)

**Current values:** All 3 files contain Rohan's portrait.

**Source files (assets on disk):**  
[avatar.png](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/assets/images/avatar.png)
[avatar-logo.png](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/assets/images/avatar-logo.png)
["avatar logo.png"](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/assets/images/avatar%20logo.png)

**Target data from my portfolio:**  
PORTFOLIO_DATA.json → `personal_information.profile_image.file_path` = `/public/me.png` in the original portfolio project.

Copy Muhammad's `me.png` into the RohanOS project and overwrite:
- Replace `src/assets/images/avatar.png` (same dimensions → drop-in)
- Replace `src/assets/images/avatar-logo.png` (same)
- Replace `src/assets/images/avatar logo.png` (same) → used as favicon

Alternative: keep 3 distinct copies for different crops/ sizes if desired — but simple copy-over keeps imports stable and avoids touching component code.

**Files that must change:**  
No code changes if overwriting with same filenames. If different filenames → imports must change (LockScreen.jsx, StartMenu.jsx, index.html).

**Risk:** Low (overwrite same names) / Medium (rename + update imports).

**Dependencies:**  
Need physical file `me.png` available.

**Can this be implemented independently?** Yes — purely an asset drop-in (overwrite) with zero code changes if filenames match.

---

### CHANGE-030

**Category:** Visual Assets / Resume PDF

**What changes:**  
Replace the file `src/assets/images/rohan_resume.pdf` → Muhammad's resume PDF.

**Current value:** Rohan's resume PDF.

**Source file:** [rohan_resume.pdf](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/assets/images/rohan_resume.pdf)

**Target data from my portfolio:**  
PORTFOLIO_DATA.json → `resume_cv_data.pdf.file_path`:
`/public/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf`

Copy this PDF to `src/assets/images/` folder in RohanOS. Two options:
- (A) Keep old filename `rohan_resume.pdf` → zero code changes (Change 007 and Change 025 would still need text changed; but the actual file is Muhammad's). NOT recommended because text mismatches.
- (B) Use Muhammad's filename → requires Change 018 (import in Resume.jsx) and Change 007 and Change 025 text. **RECOMMENDED.**

**Can this be implemented independently?** Asset copy is independent; full wiring requires Change 018 + 007 + 025.

---

### CHANGE-031

**Category:** Visual Assets / Wallpaper Default (optional)

**What changes:**  
`WallpaperContext` imports 8 wallpapers — default wallpaper is `{ id: 'default', label: 'Default', src: cat }` (a cat photo). May want to change default wallpaper to something ML/neutral themed.

**Source file:** [WallpaperContext.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/context/WallpaperContext.jsx#L11-L18)

**Current value:** `wallpapers[0]` = cat image.

**Target:** Optional. Can leave alone. Or replace `cat.png` with a gradient/ML-themed wallpaper and keep `wallpapers[0]` mapping.

**Risk:** Very Low. Cosmetic.

---

### CHANGE-032

**Category:** Favicon / index.html

**What changes:**  
Update the favicon href in `index.html`. Currently points to `"/src/assets/images/avatar logo.png"` which, after Change 029, will already be Muhammad's image (good). BUT consider replacing with a proper icon.

**Current value:**  
```html
<link rel="icon" type="image/svg+xml" href="/src/assets/images/avatar logo.png" />
```

**Source file:** [index.html](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/index.html#L5)

**Target:** If `avatar logo.png` is overwritten (Change 29) → no code change needed. Otherwise update the `href`.

Also note: `public/favicon.svg` and `public/icons.svg` exist — they're currently generic FA-style icons, not personal. Keep or update.

---

### CHANGE-033

**Category:** SEO / Page Title

**What changes:**  
`<title>rohanOS</title>` in `index.html` → rename to new OS name (e.g., "AmmarOS" or "Muhammad Ammar — Portfolio OS").

**Current value:** rohanOS

**Source file:** [index.html](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/index.html#L7)

**Exact fields affected:** `<title>` element text.

**Can this be implemented independently?** Yes. Low risk.

---

### CHANGE-034

**Category:** SEO / Favicon href — already listed in Change 032.

---

### CHANGE-035

**Category:** SEO / Meta tags (add)

**What changes:**  
`index.html` currently has no `<meta name="description">`, no OpenGraph / Twitter / author tags. The portfolio data tells us: OpenGraph title = "Muhammad Ammar", description = "Machine Learning Engineer". Suggest adding these lines to `<head>`.

**Current value:** None of these tags exist.

**Source file:** [index.html](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/index.html#L3-L13)

**Target data from my portfolio:**  
```html
<meta name="description" content="Muhammad Ammar — Machine Learning Engineer. Portfolio of end-to-end ML / computer vision projects." />
<meta name="author" content="Muhammad Ammar" />
<meta property="og:title" content="Muhammad Ammar — Portfolio OS" />
<meta property="og:description" content="Machine Learning Engineer. Explore my projects, experience, and skills in an interactive desktop OS." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://mu-3mar.github.io" />
```

**Risk:** Very Low. Purely additive.

**Can this be implemented independently?** Yes.

---

### CHANGE-036

**Category:** README

**What changes:**  
Update the project README to reflect the new owner and personal links.

**Current value:** Title "Rohan Dohe — Portfolio OS"; Live URL `https://rohanos.vercel.app/`; GitHub `github.com/rowhn/windows_screen_portfolio`; Tech Stack badges (React/Vite/JS/CSS Modules/Vercel — **these stay because they describe the framework, not the person**); Author section "Rohan Dohe / MERN Stack Developer / GitHub rowhn / LinkedIn rohan-dohe-68965a233 / Portfolio rohanos.vercel.app".

**Source file:** [README.md](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/README.md)

**Target data from my portfolio:**  
- Line 1 title: "Muhammad Ammar — Portfolio OS"
- Line 11 live + GitHub URLs: `https://mu-3mar.github.io` (portfolio URL) + `https://github.com/mu-3mar/rohanOS-main` (or whatever the fork/new repo URL will be)
- Lines 39, 338: Update live URLs
- Lines 301: Update `git clone` URL
- Lines 379-393: Author section — "Muhammad Ammar", "Machine Learning Engineer", "Building end-to-end ML systems with PyTorch, FastAPI, and computer vision", links = GitHub mu-3mar / LinkedIn mu-3mar / Kaggle + Portfolio URL.

Leave the **framework badges (React, Vite, Vercel, JS, CSS Modules)** alone — they describe RohanOS tech stack and are correct for the project.

Also: the **Architecture / Structure / Features** section content is generic about the OS — **do not change it**.

**Risk:** Very Low. Public-facing only, zero runtime impact.

**Can this be implemented independently?** Yes.

---

## 4. Data Mapping

### Central Data File Recommendation

**`src/data/profile.js` should become the single source of truth for all portfolio data.** Currently it is the base but it is **bypassed** by Resume.jsx, About.jsx, Notes.jsx, Code.jsx, Explorer.jsx, LockScreen.jsx, StartMenu.jsx.

Recommended future refactor (not required now — noted for later): move all inline copy to this file.

### PORTFOLIO_DATA.json → RohanOS mapping

| PORTFOLIO_DATA.json | → | RohanOS | File | Field / Component |
|---|---|---|---|---|
| personal_information.full_name | → | profile.name | profile.js L2 | LockScreen.jsx L10, StartMenu.jsx L73, About.jsx L6, Resume.jsx L59, Code.jsx L9, Notes.jsx (many) |
| personal_information.professional_title | → | profile.role | profile.js L3 | About.jsx L7, Resume.jsx L59, Code.jsx L10 |
| personal_information.email | → | profile.email | profile.js L4 | Contact.jsx L13, Resume.jsx L60 |
| personal_information.phone (null) | → | profile.phone | profile.js L5 | Contact.jsx L17 — MUST add null guard |
| personal_information.social_links[name=GitHub].url | → | profile.github | profile.js L6 | appRegistry L123, Contact.jsx L21, StartMenu Recommended, Notes Contact.txt |
| personal_information.social_links[name=LinkedIn].url | → | profile.linkedin | profile.js L7 | appRegistry L131, Contact.jsx L27, Notes Contact.txt |
| personal_information.social_links[name=Kaggle].url | → | profile.kaggle (NEW) | profile.js — add after L7 | NEW appRegistry kaggle, NEW Contact row, NEW Notes Contact line |
| personal_information.profile_image.file_path /public/me.png | → | assets/images/avatar.png, avatar-logo.png, "avatar logo.png" (replace) | 3 image files | LockScreen, StartMenu, index.html favicon |
| professional_summary.summary (2 paragraphs) | → | About.jsx paragraphs + lead text | About.jsx L9-L25 | Manual copy-paste |
| professional_summary.hero_greeting "Hi, I'm Muhammad" | → | About.jsx L6 h2 "Hi, I'm Rohan 👋" | About.jsx L6 | Replace |
| professional_summary.career_focus + areas_of_interest | → | About.jsx "Currently" tag row | About.jsx L28-L31 | Manual rewrite |
| education[0] Mansoura University | → | education{} | profile.js L33-L38 | Experience.jsx L26-L29, Resume.jsx L128-L129 |
| experience[0] Cellula Technology | → | experience[0] | profile.js L10-L31 | Experience.jsx L9-L20, Resume.jsx L64-L79 |
| experience[0].sub_projects × 2 | → | experience[0].bullets (combined 14 bullets) | profile.js L15-L19 / L26-L29 | Merge descriptions |
| projects[0-4] (5 ML/CV projects) | → | projects[] (length 5) | profile.js L40-L70 | Projects.jsx L9-L29, StartMenu RECOMMENDED, Notes My-Projects.txt, Resume.jsx L82-L103 |
| projects[i].name | → | projects[i].title | profile.js | |
| projects[i].technologies → join(" · ") | → | projects[i].stack | profile.js | |
| projects[i].description → split("\n") bullets | → | projects[i].bullets | profile.js | |
| projects[i].github_repository | → | projects[i].github | profile.js | |
| projects[0].type "University Graduation Project" | → | projects[0].badge "Graduation Project" | profile.js | |
| technical_skills.as_grouped_in_data (5 groups) | → | skills[] (5 groups) | profile.js L72-L77 | Skills.jsx, Resume.jsx skills grid L107-L113 |
| courses_training (DeepLearning.AI × 3, CSkilled × 1) | → | certifications[] (repurposed) | profile.js L79-L84 | Certifications.jsx, Resume.jsx cert list L116-L123 |
| contact_information.contact_section.body_text | → | Contact.jsx lead / body | Contact.jsx L7-L8 | |
| contact_information.resume_download.file_url | → | Resume.jsx PDF import src | Resume.jsx L2 + asset file | |
| contact_information.resume_download.download_filename | → | appRegistry.resume.title, Explorer entries[0].label, StartMenu Recommended row | appRegistry.js L8, Explorer.jsx L5, StartMenu.jsx L9 | |
| personal_information.initials "MA" | → | Fallback avatar if no image (optional use) | N/A — add to profile.initials (NEW) | |
| personal_information.portfolio_url | → | profile.portfolioUrl (NEW), SEO meta og:url | NEW in profile.js, index.html meta | |

---

## 5. Assets Mapping

### Existing RohanOS Assets → Keep / Replace / Remove

| Asset | Path | Current purpose | Personal to Rohan? | Verdict | Replacement / Notes |
|---|---|---|---|---|---|
| avatar.png | src/assets/images/avatar.png | LockScreen "Rohan" user img | ✅ Yes — portrait | **REPLACE** | Overwrite with Muhammad's me.png |
| avatar-logo.png | src/assets/images/avatar-logo.png | StartMenu footer user img | ✅ Yes — portrait | **REPLACE** | Overwrite with Muhammad's me.png |
| "avatar logo.png" | src/assets/images/avatar logo.png | index.html favicon | ✅ Yes — portrait/favicon branding | **REPLACE** | Overwrite with Muhammad's me.png or new branded favicon |
| rohan_resume.pdf | src/assets/images/rohan_resume.pdf | Resume PDF download + view | ✅ Yes — resume | **REPLACE** | Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf |
| cat.png | src/assets/images/cat.png | Default wallpaper | ❌ Generic (cat photo) | Keep (or replace default) | Wallpaper; user can change via Personalize app |
| windows.jpg (bliss) | src/assets/images/windows.jpg | LockScreen background + wallpaper | ❌ Generic (Win XP Bliss) | Keep | Wallpaper option |
| snowflakes.jpg | src/assets/images/snowflakes.jpg | Wallpaper + "Administrator" user img | ❌ Generic (photo) | Keep | Wallpaper / decorative |
| frog.jpg | src/assets/images/frog.jpg | Wallpaper option | ❌ Generic | Keep | |
| windows10.jpg | src/assets/images/windows10.jpg | Wallpaper option | ❌ Generic Win10 default | Keep | |
| windows11wall.jpg | src/assets/images/windows11wall.jpg | Wallpaper option | ❌ Generic Win11 default | Keep | |
| sm.jpg | src/assets/images/sm.jpg | Wallpaper option | ❓Unknown (label "sm") — investigate | Inspect visually. Probably a celebrity photo (Cristiano?); if not Rohan → Keep. If Rohan → Replace. |
| cr7.jpg | src/assets/images/cr7.jpg | Wallpaper option "cr7" = Cristiano Ronaldo | ❌ Generic celebrity image | Keep | |
| download.jpg | src/assets/images/download.jpg | "Guest" user img + wallpaper | ❓Unknown — likely a random image (label=download) | Inspect. Probably keep. | |
| start.png | src/assets/images/start.png | Windows start button icon in Taskbar | ❌ Generic OS asset (Windows logo-like) | **KEEP** | OS UI, not personal |
| favicon.svg | public/favicon.svg | Favicon fallback | ❌ Generic SVG | Keep (or overwrite with personal) | |
| icons.svg | public/icons.svg | Generic icon sprite | ❌ Generic | **KEEP** | |

### Assets to ADD (from Muhammad's portfolio)

These assets exist in Muhammad's original portfolio project (`mu-3mar.github.io`) but **not in RohanOS**. They should be copied/added if and only if their usage is wired up:

| Asset | Source in original portfolio | Where to add in RohanOS | Usage |
|---|---|---|---|
| me.png (profile photo) | /public/me.png | Overwrite src/assets/images/avatar.png + avatar-logo.png + "avatar logo.png" | LockScreen, StartMenu, favicon |
| Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf | /public/...pdf | src/assets/images/ (or /public/) | Resume app download + preview |
| mansoura-university.png | /public/ | Optional: RohanOS doesn't render education logos — currently no UI place. Skip unless we add logo rendering. | Education (not rendered by Experience.jsx currently) |
| cellula-technology.png | /public/ | Optional: same caveat — no logo UI currently. | Experience (not rendered) |
| industrial-quality-control.png | /public/projects/ | **NOT USED by Projects.jsx currently.** Projects.jsx renders text + tech only, no project images. Adding images requires a JSX change to Projects.jsx + CSS additions. | Project thumbnails (would require JSX feature extension) |
| nyc-taxi.png | /public/projects/ | Same | Project thumbnails |
| road-accident.png | /public/projects/ | Same | Project thumbnails |
| body-measurement.png | /public/projects/ | Same | Project thumbnails |
| sign-language.png | /public/projects/ | Same | Project thumbnails |

### Important note on project images:

**RohanOS's current Projects app does NOT show project images.** It only renders: title, (optional badge), stack line, bullet descriptions, and a GitHub link icon. This is a **significant architectural gap** vs. Muhammad's portfolio which shows project screenshots. Options:
1. Keep RohanOS text-only (fastest — no extra work beyond data text).
2. Add image rendering to Projects.jsx. Requires: image field to `projects[]` in profile.js, JSX code to render `<img>` with styling, copying 5 PNGs into assets. **Out of scope for the "replace content" task** — flag as a potential enhancement.

---

## 6. Core OS Protection List

Files / directories that implement the RohanOS shell mechanics. **These should NOT be touched** unless there is a specific reason. Data/identity changes must not modify these.

### Must NOT touch — pure OS shell

| File / Path | Role | Why protected |
|---|---|---|
| [WindowManagerContext.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/context/WindowManagerContext.jsx) | Window state manager (open/close/minimize/maximize/z-index/snap/focus/position) | Core OS. Changing this can break all window interactions. |
| [WallpaperContext.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/context/WallpaperContext.jsx) lines 1-10, 20-34 | Provider structure, default state, useWallpaper hook | Provider logic is generic; ONLY safe edit is the `wallpapers` array (lines 11-18) which IS wallpaper data. |
| [Window.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/Window/Window.jsx) — entire file | Draggable window chrome: title bar, minimize/maximize/close, snap modes, sizing, focus, drag, AppRenderer mount | Pure OS windowing. |
| [Desktop.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/Desktop/Desktop.jsx) — lines 20-68, 81-89, 109-195 (interaction shell) | Context menu wiring, click-outside handlers, flyout toggle logic, windows loop + sort, desktop backdrop click handler | Layout shell. Safe to read data-driven `iconOrder` from appRegistry — do not change wiring. |
| [Taskbar.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/Taskbar/Taskbar.jsx) — mechanics | Running app detection (runningIds/dynamicRunning), start button toggle/stopPropagation handlers, tray + clock + showDesktop edge wiring, activeTask highlight logic | Mechanics OS. |
| [StartMenu.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/StartMenu/StartMenu.jsx) — mechanics (NOT strings) | Search/filter logic, pin grid map/renderer, recommended renderer, power menu open/close + sleep/restart/shut down handlers | Mechanics stay; strings and RECOMMENDED items change (Changes 010, 012). |
| [useDraggableWindow.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/hooks/useDraggableWindow.js) — entire file | Drag physics + snap detection | Never touch. |
| [useClock.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/hooks/useClock.js) — entire file | Clock formatting | Never touch. |
| [ContextMenu.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/ContextMenu/ContextMenu.jsx) — entire file except potentially labels | Menu items + callback props. Labels are generic (View, Sort by, Refresh, Personalize, About this PC). Keep. |
| [Flyouts/Calendar.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/Flyouts/Calendar.jsx) — entire file | Date/calendar | No personal content. |
| [Flyouts/QuickSettings.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/Flyouts/QuickSettings.jsx) — entire file | Wi-Fi/Bluetooth/brightness/volume toggles | No personal content. |
| [DesktopIcon.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/DesktopIcon/DesktopIcon.jsx) — entire file | Icon rendering, label, click/double-click to open | Data-driven from props — no personal content. |
| [FullscreenButton.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/FullscreenButton/FullscreenButton.jsx) — entire file | Fullscreen API wrapper | No personal content. |
| [AppRenderer.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/AppRenderer.jsx) — lines 17-41 | componentMap + routing from app id to component | Routing only; safe to add a new component entry if adding new app (e.g., Kaggle would need internal window? No — external, so not needed here). |
| [LockScreen.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/LockScreen/LockScreen.jsx) mechanics (lines 1-8, 16-66 interactions) — NOT the USERS data or the greeting strings | Lock→blur animation, keydown unlock listener, setPin/handleSignIn flow, userList selection handlers, footer actions, signing-in spinner state, sign-in options buttons | Mechanics OS safe. |
| [App.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/App.jsx) — entire file | Boot flow, session state (locked→desktop), power screens (sleep/restart/shutdown), mobile notice rendering | Session management. Mobile notice copy (lines 127-139) is generic — safe. |
| [Browser.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Browser/Browser.jsx) | Iframe to google.com/webhp?igu=1 | Generic iframe — no personal data. Keep. |
| [Paint.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Paint/Paint.jsx) | Iframe to miniPaint | Generic — keep. |
| [Recycle.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Recycle/Recycle.jsx) lines 3-13 joke text | Empty state copy: "No bugs were thrown away in the making of this portfolio... probably." — humorous, not personal. Can leave. |
| Games/ directory — Snake.jsx, TicTacToe.jsx, Memory.jsx, GamesHub.jsx (string content) | Game logic + UI labels. Generic games. No personal content. Keep. GamesHub "Take a break — pick a game" → could personalize but optional. |
| Personalize.jsx (entire file minus wallpaper data) | Wallpaper picker UI. |
| All `*.module.css` files | Styling. No personal data. |
| global.css, doc-content.module.css | Global / shared styles. |
| main.jsx, vite.config.js, package.json, package-lock.json, .oxlintrc.json, .gitignore, LICENSE | Build / infra / licenses. No personal data. |
| public/icons.svg | Generic icon sprite. |

### Safe to modify per changes above

The following files ARE touched by customization (they contain personal/portfolio content) — they are intentionally NOT in the protection list even though some of them mix OS mechanics with personal strings:
- profile.js, appRegistry.js → ALL data changes
- About.jsx, Contact.jsx, Resume.jsx, Notes.jsx, Explorer.jsx, Code.jsx → personal copy
- LockScreen.jsx → USERS array + greeting copy (mechanics untouched)
- StartMenu.jsx → RECOMMENDED array + footer user name (mechanics untouched)
- WallpaperContext.jsx → wallpapers array only
- index.html → title, meta tags, favicon path
- README.md

---

## 7. Recommended Implementation Order

Implementation sequence. Each step is small and independently verifiable. After each step: run `npm run dev`, open the app, verify that one change works before moving on.

### Phase 0 — Setup (no code)
0. **Copy assets in:**
   a. Overwrite `src/assets/images/avatar.png`, `avatar-logo.png`, `"avatar logo.png"` with Muhammad's `me.png`.
   b. Copy Muhammad's PDF into `src/assets/images/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf` (keep old `rohan_resume.pdf` for now to avoid import errors until we edit Resume.jsx).
   c. Run `npm install` once to ensure dependencies are installed.
   d. Run `npm run dev` → verify rohanOS boots, windows open, games work. Confirm zero build errors.

### Phase 1 — Central Data (lowest risk; feeds the most apps)
1. **CHANGE-001** — Edit `profile.js` profile object (name/role/email/phone/github/linkedin + add kaggle/portfolioUrl/initials). Verify: contact window rows now show new email; Resume header reads "Muhammad Ammar".
2. **CHANGE-002** — Replace `experience[]` in profile.js with Cellula Technology internship. Verify: Experience app Work History shows 1 ML Intern role.
3. **CHANGE-003** — Replace `education{}` in profile.js. Verify: Education section in Experience app → Mansoura University.
4. **CHANGE-004** — Replace `projects[]` (5 projects). Verify: Projects app lists 5 ML/CV projects.
5. **CHANGE-005** — Replace `skills[]` (5 groups). Verify: Skills app shows ML & AI / Frameworks & Technologies / Libraries / Languages & Tools / Languages groups.
6. **CHANGE-006** — Replace `certifications[]` (DeepLearning.AI × 3, CSkilled × 1). Verify: Certifications app shows courses list.

### Phase 2 — App Registry
7. **CHANGE-007** — appRegistry.resume.title → new PDF name; add `kaggle` registry entry with profile.kaggle external; optional certifications shortLabel → "Courses & Certifications". Verify: Window title on Resume app shows new PDF name.
8. **CHANGE-013** — Add `'kaggle'` to desktopIconOrder and pinnedAppOrder (after LinkedIn). Verify: new Kaggle icon appears on desktop + StartMenu pinned grid.
9. Run → click desktop Kaggle icon → confirms it opens Kaggle profile URL in new tab.

### Phase 3 — Identity components (smallest text fixes)
10. **CHANGE-008** — LockScreen USERS[0].name = "Muhammad Ammar". Verify: lock screen → user list → primary user name changed.
11. **CHANGE-009** — LockScreen greeting footer copy (optional low-priority branding).
12. **CHANGE-010** — StartMenu footer user name = "Muhammad" (or import profile.name). Verify: StartMenu footer → name + avatar are correct.
13. **CHANGE-033** — index.html `<title>` → "AmmarOS" or "Muhammad Ammar — Portfolio OS". Verify: browser tab title changes.
14. **CHANGE-032** — favicon verify (already asset-swapped in Step 0 → just check tab icon).

### Phase 4 — About + Contact + Code + Explorer (hard-coded copy apps)
15. **CHANGE-011** — Rewrite About.jsx. Verify: About window greeting/bio/Currently tags match Muhammad.
16. **CHANGE-017** — Contact.jsx: rewrite lead ("Open to ML/CV roles"), guard phone when null, add Kaggle row. Verify: Contact app renders 4 rows (no phone) or 5 (if phone added later); no crash.
17. **CHANGE-026** — Code.jsx: rewrite faux object. Verify: VS Code window shows new developer object.
18. **CHANGE-025** — Explorer.jsx: rename path + resume label. Verify: File Explorer title `C:\Users\Muhammad\Documents` and first entry label match.

### Phase 5 — StartMenu Recommended
19. **CHANGE-012** — Replace StartMenu.jsx RECOMMENDED array. Verify: StartMenu "Recommended" list now shows 3 items referring to Muhammad's graduation project / CV project / resume.

### Phase 6 — Notes (5 notes, batchable within one file)
20. **CHANGE-020 to 024** — Edit all 5 notes in Notes.jsx in a single file edit: Welcome.txt, About-Portfolio.txt, Explore.txt, My-Projects.txt, Contact.txt. Verify: Open Notes app → select each of the 5 files → content reads correctly for Muhammad.

### Phase 7 — Resume App (largest / most risky; do late so data is stable)
21. **CHANGE-018** — Resume.jsx PDF import → new PDF filename.
22. **CHANGE-019** — Resume.jsx `buildResumeHtml()` rewrite. **Recommended approach: convert to data-driven template literals using the profile.js imports at top of file** instead of hard-coded copy — so future profile.js edits auto-update resume preview. Verify: Resume app shows (a) Download PDF button downloads correct file, (b) iframe preview has Muhammad's name, correct 1 experience entry, 5 projects, 5 skills groups, 4 courses, Mansoura University education.

### Phase 8 — SEO + README
23. **CHANGE-035** — index.html meta tags (description, author, OG tags). Verify: view source → new tags present.
24. **CHANGE-036** — README.md title, URLs, author section. No runtime verification needed; just review file.

### Phase 9 — Polish / Optional
25. **CHANGE-031** — Wallpaper default (optional). Change WallpaperContext `wallpapers[0]` default from cat.png to something else (or leave).
26. **Optional extension:** Add project image support (outside baseline scope — requires JSX/CSS extension to Projects.jsx + copying 5 PNGs).
27. Run `npm run build` → confirm production build succeeds (zero errors). Run `npm run lint` → oxlint passes.
28. Final QA pass: open every app once (About, Experience, Projects, Skills, Certifications, Contact, Resume, Notes, Explorer, Code, Personalize, Games × 3, Paint, Browser, Recycle) + StartMenu + LockScreen + desktop icons.

---

## Summary of Changes

### Total number of individual changes (non-marker)

Excluding marker entries (013/014/015/016/027/028) and aggregating the 5 Notes sub-changes (20-24) as **5 items**, the actionable list totals:

- **28 substantive changes** (CHANGE-001 to CHANGE-036 minus 7 markers + notes count) — see below.

Breakdown:
1. profile.js data (6): 001-006
2. appRegistry + icon orders (2): 007, 013
3. LockScreen (2): 008, 009
4. StartMenu personal + recommended (2): 010, 012
5. About (1): 011
6. Contact (1): 017
7. Resume (2): 018, 019
8. Notes (5): 020, 021, 022, 023, 024
9. Explorer (1): 025
10. Code editor (1): 026
11. Asset swap — avatars (1): 029
12. Asset swap — PDF (1): 030
13. Wallpaper default (optional — 1): 031
14. Favicon + title + meta in index.html (3): 032 (merge into 033/035), 033, 035
15. README (1): 036

Total = **~28 changes** (if 032/033/035 counted as 3 index.html changes).

### Total files likely to be modified (~19 files)

Core + code files (16):
1. [src/data/profile.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/profile.js)
2. [src/data/appRegistry.js](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/data/appRegistry.js)
3. [src/components/LockScreen/LockScreen.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/LockScreen/LockScreen.jsx)
4. [src/components/StartMenu/StartMenu.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/components/StartMenu/StartMenu.jsx)
5. [src/apps/About/About.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/About/About.jsx)
6. [src/apps/Contact/Contact.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Contact/Contact.jsx)
7. [src/apps/Resume/Resume.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Resume/Resume.jsx)
8. [src/apps/Notes/Notes.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Notes/Notes.jsx)
9. [src/apps/Explorer/Explorer.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Explorer/Explorer.jsx)
10. [src/apps/Code/Code.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/apps/Code/Code.jsx)
11. [src/context/WallpaperContext.jsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/src/context/WallpaperContext.jsx) (optional — wallpapers array or default)
12. [index.html](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/index.html)
13. [README.md](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/rohanOS-main/README.md)

Asset files replaced (drop-ins — 4 binary files):
14. src/assets/images/avatar.png
15. src/assets/images/avatar-logo.png
16. src/assets/images/avatar logo.png
17. src/assets/images/rohan_resume.pdf → replaced by or supplemented with Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf

### Total files that should remain untouched (core OS)

Approximately **43 files** protected by Core OS Protection List above:
- All hooks: useClock.js, useDraggableWindow.js → 2
- All components mechanics: Window.jsx, Desktop.jsx (shell), Taskbar.jsx (shell), ContextMenu.jsx, Calendar.jsx, QuickSettings.jsx, DesktopIcon.jsx, FullscreenButton.jsx → 8  
- AppRenderer.jsx (routing only) → 1
- All *.module.css files: 15 (App, Desktop, DesktopIcon, ContextMenu, Calendar, QuickSettings, FullscreenButton, LockScreen, StartMenu, Taskbar, Window, Resume, Code, Notes, Paint, Browser, GamesHub, Snake, TicTacToe, Memory, Personalize, doc-content, global → ~23
- Games apps: Snake.jsx, TicTacToe.jsx, Memory.jsx, GamesHub.jsx (keep)
- Browser.jsx, Paint.jsx, Recycle.jsx, Personalize.jsx (keep)
- main.jsx, vite.config.js, package.json, package-lock.json, .oxlintrc.json, .gitignore, LICENSE → 7
- public/icons.svg, public/favicon.svg → 2
- App.jsx (session management)

### Blockers

1. **Need actual binary files from Muhammad's portfolio project.** Specifically: `me.png` and `Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf`. They exist on disk at `/home/muhammad-ammar/muhammad's space/Projects/Web/mu-3mar.github.io/public/` per PORTFOLIO_DATA extraction notes — confirmed by the `file_path` entries in the JSON.
2. **Font Awesome `fa-kaggle` icon** — need to confirm Kaggle is in Font Awesome 6.4.0 free. According to FA docs, `fa-kaggle` (`fa-brands fa-kaggle`) IS in the free brands set ✅. If for some reason it doesn't render, substitute with a generic `fa-solid fa-chart-line` or add `react-icons/fa6` (new dependency would be required — prefer not to add deps).
3. **Resume buildResumeHtml hard-coded duplication** (Change 019) — if we just patch strings manually instead of refactoring to data-driven, future `profile.js` edits will silently not propagate to the resume preview. Strongly recommend refactoring to data-driven.

### Missing information (from PORTFOLIO_DATA.json)

Items explicitly missing/empty in Muhammad's portfolio data that RohanOS would normally show:

| Item | Value in RohanOS original | Value in Muhammad data | Gap |
|---|---|---|---|
| Phone | `+91 82085 XXXXX` | `null` | Contact.jsx must guard phone |
| Location | Implicit "Pune, India" (in About tags) | `""` (empty) | About.jsx "Currently" row — replace with generic tag, e.g. "End-to-end ML Solutions" |
| Kaggle | N/A — original didn't have | exists | Add NEW registry entry + icon |
| Personal portfolio URL | N/A | `https://mu-3mar.github.io` exists → no current usage in OS UI, only useful for meta OG:url |
| Certifications with date/ID | 4 structured certs | No certifications — only courses | Repurpose certifications[] to hold courses |
| Achievements / Awards / Hackathons / Competitions | None in OS UI anyway | Empty arrays | No OS app exists for these → nothing to change |
| Services | None in OS | Empty array | No OS app → nothing to change |
| Profile images for projects | Not rendered by OS anyway | 5 project screenshot PNGs exist | Gap if we add image rendering (optional feature) |
| Logos for companies/universities | Not rendered | 2 logos exist | Experience.jsx doesn't render logos → gap but nothing to change |
| Project live demo URLs | Only GitHub | All live_demo = null | All 5 projects in profile.js will have only github link (consistent with original pattern) |
| New OS name | "rohanOS" (index.html title) | User hasn't specified name | Ask in follow-up: rename to "AmmarOS"? "Muhammad Ammar — Portfolio OS"? Keep "rohanOS"? (Change 033) |

### Conflicts between RohanOS and Muhammad portfolio data

1. **Project count mismatch:** RohanOS `projects[]` = 3 → Muhammad = 5. The JSX (Projects.jsx) does `.map()` so it will render all 5 cleanly — no conflict. Desktop icon / StartMenu still works fine (just opens Projects app). But `profile.js` certs count = 4 → matches Muhammad's courses count (4) — happy accident.
2. **Skills categories mismatch:** Original 4 groups → Muhammad 5 groups. Skills.jsx maps dynamically — no JSX changes needed. However Resume.jsx `buildResumeHtml()` Skills/Certifications **2-column grid** currently has 4 skills sub-headings hard-coded in the HTML. With 5 groups the grid will overflow or the column must absorb. Fix by converting to data-driven map or by putting 5 bullet sub-headings in a single column (the grid-2 cell can hold `<p>` per group with strong header).
3. **Experience count:** Original 2 → Muhammad 1. Again `.map()` is fine for Experience app. Resume buildResumeHtml hard-coded 2 blocks → delete one in Change 19.
4. **Certifications vs Courses:** Certifications app UI renders title/issuer pairs exactly matching courses structure (course name/provider) → zero conflict.
5. **Project images / logos:** Muhammad's portfolio relies heavily on them; RohanOS's Projects app is text-only. This is **not a content conflict** but an **architectural feature gap**. Flag for follow-up enhancement only.
6. **About copy shape:** RohanOS About has 3 paragraphs + 3 "Currently" tag chips. Muhammad's professional_summary has a single long `summary` paragraph + career_focus array + areas_of_interest array. Not a conflict — we split into paragraphs during Change 011.
7. **"Open to full-time MERN roles" lead** in Contact.jsx vs Muhammad being an ML Engineer — obvious wording conflict. Change 017 addresses it.
8. **Phone null usage:** Phone is called with `.replace()` in Contact.jsx. Throws on null. This is a real bug in the new configuration if we don't guard it. Change 017 MUST include the null check.
9. **OS name "rohanOS" vs re-branding.** The `<title>` and visible name are still Rohan-branded. Whether we rename fully or leave as "AmmarOS" is a user decision needed for Change 033/CHANGE-036 final wording.
10. **File Explorer personal Documents path "C:\Users\Rohan\Documents" vs "C:\Users\Muhammad\Documents"** — low but noticeable branding.

None of the conflicts are blockers; they are deliberate text/data replacements in the relevant changes above, except #8 (null phone) which is a runtime crash risk and MUST be guarded.
