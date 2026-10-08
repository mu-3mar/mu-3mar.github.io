# PORTFOLIO_DATA.md

All data extracted from the existing portfolio project. Data is consolidated from multiple source files without modification or rewording.

---

# 1. Personal Information

- **Full name**: Muhammad Ammar
- **Initials**: MA
- **Professional title**: Machine Learning Engineer
- **Portfolio URL**: https://mu-3mar.github.io
- **Location**: (empty - not specified in project)
- **Location Link**: (empty - not specified in project)
- **Email**: i.muhamad.amar@gmil.com
- **Phone**: (not found in project)
- **GitHub**: https://github.com/mu-3mar
- **LinkedIn**: https://linkedin.com/in/mu-3mar
- **Kaggle**: https://www.kaggle.com/mohamedsayedamarmsa
- **Other social/professional links**:
  - Send Email (mailto:i.muhamad.amar@gmil.com)
- **Profile image/avatar references**:
  - `/me.png` (used in hero section as AvatarImage, alt="Muhammad Ammar", fallback="MA")

---

# 2. Professional Summary

## Current professional description
Machine Learning Engineer

## About me / Summary
Machine Learning Engineer with hands-on experience building end-to-end machine learning solutions across classification, regression, and deep learning. Experienced in data preprocessing, feature engineering, model evaluation, and model optimization using Python and Scikit-learn. Also experienced in integrating ML models into FastAPI applications and building practical ML systems from data and modeling to inference.

## Short bio / Hero text
Hi, I'm Muhammad

## Career focus
Building end-to-end machine learning solutions, integrating ML models into FastAPI applications, practical ML systems from data and modeling to inference.

## Areas of interest
- Classification
- Regression
- Deep Learning
- Data Preprocessing
- Feature Engineering
- Model Evaluation
- Model Optimization
- Computer Vision
- Real-time systems

---

# 3. Education

## Entry 1
- **Institution**: Mansoura University
- **Institution href/link**: (empty string)
- **Degree**: Faculty of Computer and Information Science | Bachelor's Degree in Computer Science
- **Department / Major**: Computer Science
- **Specialization**: (not specified)
- **Start date**: 2022
- **End date**: 2026
- **Current status**: In progress (2022 - 2026, end date not yet reached as of 2026-10-08)
- **Relevant details**: None provided beyond degree title
- **Logo**: `/mansoura-university.png`

---

# 4. Experience

## Entry 1 - Cellula Technology

- **Company / Organization**: Cellula Technology
- **Company href/link**: (empty string)
- **Position**: Machine Learning Intern
- **Employment type**: Project-based
- **Start date**: Oct 2025
- **End date**: Dec 2025
- **Location**: Project-based
- **Badges**: [] (none)
- **Logo**: `/cellula-technology.png`
- **Description / Responsibilities / Achievements** (exact original text):

```
Hotel Booking Cancellation Prediction
- Worked with 500K+ records.
- Achieved 87% accuracy and 0.91 F1 on the minority class.
- Built the solution end-to-end including data cleaning, EDA, feature engineering, model training, and evaluation.
- Integrated the model into a FastAPI REST API with a lightweight HTML interface for interactive local predictions.

Uber Fare Prediction
- Worked with 1M+ records.
- Achieved R² of 0.74 and MAE of 1.01 using gradient boosting.
- Built the solution end-to-end including data cleaning, EDA, feature engineering, model training, and evaluation.
- Integrated the model into a FastAPI REST API with a lightweight HTML interface for interactive local predictions.
```

- **Technologies used** (inferred from description):
  - FastAPI
  - HTML
  - Gradient Boosting
  - Data cleaning
  - EDA
  - Feature engineering
  - Model training
  - Model evaluation

---

# 5. Projects

## Project 1: Real-Time Industrial Quality Control System

- **Project name**: Real-Time Industrial Quality Control System
- **Short description / type**: University Graduation Project
- **Full description** (exact original text):
  ```
  - Built a two-stage object detection pipeline using YOLO26n, first localizing products and then detecting defects within cropped product regions.
  - Achieved 99.4% validation mAP50 for product detection and 94.2% validation mAP50 for defect detection.
  - Exported PyTorch models through ONNX and implemented dynamic-shape TensorRT conversion, while using asynchronous frame processing for camera inference.
  - Integrated the detection pipeline into a FastAPI service with annotated video streaming, Firebase event storage, and a monitoring dashboard.
  ```
- **Problem being solved**: Real-time industrial defect detection / quality control on production lines
- **Technologies / frameworks**: YOLO26n, OpenCV, ONNX, TensorRT, FastAPI, WebRTC, Firebase
- **Programming languages**: Python (implied by stack)
- **ML / AI models**: YOLO26n (object detection)
- **Libraries**: PyTorch, ONNX, TensorRT, OpenCV, FastAPI, WebRTC, Firebase
- **Tools**: (see technologies)
- **Architecture details**:
  - Two-stage object detection pipeline
  - Stage 1: Localize products
  - Stage 2: Detect defects within cropped product regions
  - PyTorch models exported through ONNX
  - Dynamic-shape TensorRT conversion
  - Asynchronous frame processing for camera inference
  - FastAPI service layer
  - Annotated video streaming (via WebRTC)
  - Firebase event storage
  - Monitoring dashboard
- **Key features**:
  - Real-time detection
  - Two-stage detection approach
  - Model optimization via ONNX + TensorRT
  - Video streaming with annotations
  - Event persistence in Firebase
  - Monitoring dashboard
- **Results / metrics**:
  - 99.4% validation mAP50 for product detection
  - 94.2% validation mAP50 for defect detection
- **Dataset information**: Not specified
- **Deployment information**: FastAPI service, WebRTC streaming, Firebase integration
- **GitHub repository**: https://github.com/mu-3mar/real-time-industrial-defect-detection-system
- **Live demo**: Not provided (video: "")
- **Images / screenshots**: `/projects/industrial-quality-control.png`
- **Href/link**: https://github.com/mu-3mar/real-time-industrial-defect-detection-system
- **Dates**: "" (not specified)
- **Links**: [Source -> GitHub repo]

---

## Project 2: NYC Taxi Trip Duration Prediction

- **Project name**: NYC Taxi Trip Duration Prediction
- **Short description / type**: "" (not specified)
- **Full description** (exact original text):
  ```
  - Built a regression pipeline for predicting NYC taxi trip duration from 1M+ training records, using geospatial and temporal trip features.
  - Engineered Haversine distance and time-based features, applied log transformations and degree-3 polynomial features, and trained a Ridge regression model with scaling.
  - Integrated the trained model into a FastAPI REST API for local trip-duration inference.
  ```
- **Problem being solved**: Predicting NYC taxi trip duration based on trip features
- **Technologies / frameworks**: Python, Scikit-learn, Pandas, NumPy, FastAPI
- **Programming languages**: Python
- **ML / AI models**: Ridge regression
- **Libraries**: Scikit-learn, Pandas, NumPy, FastAPI
- **Architecture details**:
  - Regression pipeline
  - Geospatial and temporal feature engineering
  - Haversine distance features
  - Time-based features
  - Log transformations
  - Degree-3 polynomial features
  - Feature scaling
  - FastAPI REST API for inference
- **Key features**:
  - 1M+ training records
  - Geospatial features (Haversine distance)
  - Temporal features
  - FastAPI REST API endpoint
- **Results / metrics**: Not explicitly stated beyond model type
- **Dataset information**: 1M+ training records (NYC taxi trip data)
- **Deployment information**: FastAPI REST API for local trip-duration inference
- **GitHub repository**: https://github.com/mu-3mar/nyc-taxi-duration-prediction
- **Live demo**: Not provided (video: "")
- **Images / screenshots**: `/projects/nyc-taxi.png`
- **Href/link**: https://github.com/mu-3mar/nyc-taxi-duration-prediction
- **Dates**: "" (not specified)
- **Links**: [Source -> GitHub repo]

---

## Project 3: Road Accident Risk Prediction

- **Project name**: Road Accident Risk Prediction
- **Short description / type**: "" (not specified)
- **Full description** (exact original text):
  ```
  - Built an end-to-end regression pipeline to predict road accident risk across 517K+ records, comparing Linear Regression, Gradient Boosting, HistGradientBoosting, AdaBoost, and XGBoost.
  - Improved performance over a Linear Regression baseline from 0.804 to 0.887 test R² using HistGradientBoosting with one-hot encoding and engineered numerical/categorical features.
  - Tuned model hyperparameters using RandomizedSearchCV with 5-fold cross-validation and implemented reusable model serialization with batch and single-record inference.
  ```
- **Problem being solved**: Predicting road accident risk
- **Technologies / frameworks**: Python, Scikit-learn, HistGradientBoosting, XGBoost
- **Programming languages**: Python
- **ML / AI models**:
  - Linear Regression (baseline)
  - Gradient Boosting
  - HistGradientBoosting (selected best)
  - AdaBoost
  - XGBoost
- **Libraries**: Scikit-learn, XGBoost
- **Architecture details**:
  - End-to-end regression pipeline
  - Model comparison across 5 algorithms
  - One-hot encoding
  - Engineered numerical/categorical features
  - RandomizedSearchCV hyperparameter tuning
  - 5-fold cross-validation
  - Reusable model serialization
  - Batch inference support
  - Single-record inference support
- **Key features**:
  - 517K+ records
  - Multi-model comparison
  - Hyperparameter tuning with cross-validation
  - Model serialization
  - Both batch and single inference modes
- **Results / metrics**:
  - Linear Regression baseline: 0.804 test R²
  - Best (HistGradientBoosting): 0.887 test R²
- **Dataset information**: 517K+ records (road accident data)
- **Deployment information**: Not specified beyond reusable inference implementations
- **GitHub repository**: https://github.com/mu-3mar/road-accident-risk-prediction
- **Live demo**: Not provided (video: "")
- **Images / screenshots**: `/projects/road-accident.png`
- **Href/link**: https://github.com/mu-3mar/road-accident-risk-prediction
- **Dates**: "" (not specified)
- **Links**: [Source -> GitHub repo]

---

## Project 4: AI Body Measurement System

- **Project name**: AI Body Measurement System
- **Short description / type**: "" (not specified)
- **Full description** (exact original text):
  ```
  - Built a multi-input deep learning model combining front and side body images with gender, height, and weight to predict 14 body measurements.
  - Developed a dual-branch CNN regression architecture and achieved a recorded validation MAE of 2.86 across the predicted measurements.
  - Integrated image preprocessing, background removal, and model inference into a FastAPI application with a browser-based interface for measurement and clothing-size recommendations.
  ```
- **Problem being solved**: Predicting 14 body measurements from images + basic physical attributes; clothing-size recommendations
- **Technologies / frameworks**: TensorFlow, Keras, Computer Vision, FastAPI, Python
- **Programming languages**: Python
- **ML / AI models**:
  - Multi-input deep learning model
  - Dual-branch CNN regression architecture
- **Libraries**: TensorFlow, Keras, FastAPI
- **Architecture details**:
  - Multi-input model: front body image + side body image + gender + height + weight
  - Dual-branch CNN (for two image inputs)
  - Regression output: 14 body measurements
  - Image preprocessing pipeline
  - Background removal
  - FastAPI application
  - Browser-based interface
- **Key features**:
  - Predicts 14 body measurements
  - Multi-modal input (images + tabular attributes)
  - Background removal preprocessing
  - FastAPI backend
  - Browser interface for measurements
  - Clothing-size recommendations
- **Results / metrics**:
  - Validation MAE: 2.86 across 14 predicted measurements
- **Dataset information**: Not specified
- **Deployment information**: FastAPI application with browser-based interface
- **GitHub repository**: https://github.com/mu-3mar/ai-body-measurement
- **Live demo**: Not provided (video: "")
- **Images / screenshots**: `/projects/body-measurement.png`
- **Href/link**: https://github.com/mu-3mar/ai-body-measurement
- **Dates**: "" (not specified)
- **Links**: [Source -> GitHub repo]

---

## Project 5: Sign Language Recognition

- **Project name**: Sign Language Recognition
- **Short description / type**: "" (not specified)
- **Full description** (exact original text):
  ```
  - Built a real-time sign language recognition system using MediaPipe hand landmarks and a PyTorch classifier.
  - Exposed recognition through a FastAPI service with a base64-encoded frame endpoint and a webcam client.
  - Added text accumulation with delete and space handling, plus spell correction.
  ```
- **Problem being solved**: Real-time sign language recognition from webcam/video input
- **Technologies / frameworks**: MediaPipe, PyTorch, FastAPI, OpenCV, Python
- **Programming languages**: Python
- **ML / AI models**:
  - MediaPipe (hand landmark extraction)
  - PyTorch classifier (sign language classification based on landmarks)
- **Libraries**: MediaPipe, PyTorch, FastAPI, OpenCV
- **Architecture details**:
  - MediaPipe hand landmark extraction
  - PyTorch classifier on extracted landmarks
  - FastAPI service endpoint (accepts base64-encoded frames)
  - Webcam client
  - Text accumulation system
  - Delete and space handling
  - Spell correction
- **Key features**:
  - Real-time recognition
  - Base64 frame API endpoint
  - Webcam client
  - Text accumulation buffer
  - Delete + space controls
  - Spell correction
- **Results / metrics**: Not specified
- **Dataset information**: Not specified
- **Deployment information**: FastAPI service with webcam client
- **GitHub repository**: https://github.com/mu-3mar/sign-language-recognition
- **Live demo**: Not provided (video: "")
- **Images / screenshots**: `/projects/sign-language.png`
- **Href/link**: https://github.com/mu-3mar/sign-language-recognition
- **Dates**: "" (not specified)
- **Links**: [Source -> GitHub repo]

---

# 6. Technical Skills

Grouped exactly as found in the project data. Additional categories derived from SKILL_ICONS and project content are cross-referenced.

## ML & AI (as labeled in DATA.skills)
- Supervised Learning
- Classification
- Regression
- Deep Learning
- Feature Engineering
- Model Evaluation
- Hyperparameter Tuning

## Frameworks & Technologies (as labeled in DATA.skills)
- PyTorch
- FastAPI
- OpenCV
- YOLO
- MediaPipe

## Libraries (as labeled in DATA.skills)
- NumPy
- Pandas
- Scikit-learn
- Matplotlib
- Seaborn

## Languages & Tools (as labeled in DATA.skills)
- Python
- SQL
- Docker
- Git
- GitHub
- Linux

## Languages / Natural Languages (as labeled in DATA.skills)
- Arabic
- English

## Additional skills derived from SKILL_ICONS mapping (same DATA file)
(These are present in the icon registry and overlap with items above)
- Python (Python icon)
- Docker (Docker icon)
- SQL (SQLite icon)
- Git (Git icon)
- GitHub (GitHub icon)
- Linux (Linux icon)
- NumPy
- Pandas
- Scikit-learn
- Seaborn
- Matplotlib
- MediaPipe
- YOLO
- OpenCV
- FastAPI
- PyTorch

## Additional skills / technologies derived from Project entries and Experience entries
(Cross-referenced with above; duplicates consolidated)
- TensorFlow / Keras (from AI Body Measurement project)
- XGBoost (from Road Accident Risk project)
- HistGradientBoosting (from Road Accident Risk project)
- Ridge Regression (from NYC Taxi project)
- Gradient Boosting (from Uber Fare internship experience)
- Linear Regression (from Road Accident project baseline)
- AdaBoost (from Road Accident project comparison)
- ONNX (from Industrial QC project)
- TensorRT (from Industrial QC project)
- WebRTC (from Industrial QC project)
- Firebase (from Industrial QC project)
- EDA / Exploratory Data Analysis (from internship experience)
- Data Cleaning (from internship experience)
- Model Serialization (from Road Accident project)
- RandomizedSearchCV (from Road Accident project)
- Cross-validation / 5-fold CV (from Road Accident project)
- Haversine distance feature engineering (from NYC Taxi project)
- Polynomial features (degree-3) (from NYC Taxi project)
- Log transformations (from NYC Taxi project)
- One-hot encoding (from Road Accident project)
- Asynchronous frame processing (from Industrial QC project)
- Background removal / image preprocessing (from AI Body Measurement project)
- Spell correction (from Sign Language project)
- REST API design / development (multiple projects)

## Icon-only / framework tech logos present in ui/svgs (NOT in DATA.skills — likely available for future use)
- C# / csharp
- Go / golang
- Java
- Kubernetes
- Next.js
- Node.js
- PostgreSQL
- React
- TypeScript

Note: The above icon-only items are SVG component files in the project but are NOT listed in the user's actual skills data (DATA.skills). They are present as UI components only.

---

# 7. Certifications

No certifications with structured fields (credential ID, date, credential URL, description) were found in the portfolio data. The DATA object does not contain a `certifications` key; only `courses` is present.

---

# 8. Courses / Training

## Provider: DeepLearning.AI

1. Machine Learning Specialization
2. Deep Learning Specialization
3. Machine Learning in Production

## Provider: CSkilled

1. Machine Learning Diploma

Note: These are listed under the section label "Courses & Certifications" in the UI but stored in DATA.courses with no dates, IDs, or URLs.

---

# 9. Achievements

No dedicated `hackathons`, `awards`, `achievements`, `competitions`, `rankings`, or `publications` data found in project files.

The `DATA.hackathons` field exists but is set to `[]` (empty array).

---

# 10. Services

No freelance / services information was found in the project. There are no service names, descriptions, technologies, deliverables, pricing, or related links.

---

# 11. Contact Information

## Email
- **Address**: i.muhamad.amar@gmil.com
- **Mailto link**: mailto:i.muhamad.amar@gmil.com
- **Displayed in**: Contact section, Navbar social dock

## Contact Section Text
(Exact text from contact-section.tsx)

- **Section badge label**: Contact
- **Heading**: Get in Touch
- **Body text**:
  Want to chat? Reach out by email at i.muhamad.amar@gmil.com and I'll respond whenever I can.
  (Email is rendered as a link with blue color, underline on hover)

## Social / Professional Contact Links (in navbar dock)

1. **GitHub**: https://github.com/mu-3mar  (navbar: true)
2. **LinkedIn**: https://linkedin.com/in/mu-3mar  (navbar: true)
3. **Kaggle**: https://www.kaggle.com/mohamedsayedamarmsa  (navbar: true)
4. **Send Email**: mailto:i.muhamad.amar@gmil.com  (navbar: true)

## Download CV
- **File**: `/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf`
- **Download filename**: `Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf`
- **Button text**: "Download CV"

---

# 12. Resume / CV Data

## Resume PDF
- **File path**: `/public/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf`
- **Download link**: `/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf`
- **Saved as**: Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf

Note: The content of the PDF itself was not parsed (binary). All structured resume data available in code is already in sections 1-9, 11 above.

---

# 13. Portfolio Navigation / Content Structure

## Page Sections (HTML section elements with IDs, from page.tsx)

1. **#hero** — Hero / intro section
   - Greeting text: "Hi, I'm {first name}" (Muhammad)
   - Professional title description
   - Avatar image
   - "Download CV" button (downloads PDF)

2. **#about** — About section
   - Heading: "About"
   - DATA.summary rendered via Markdown

3. **#work** — Work Experience section
   - Heading: "Work Experience"
   - Accordion with collapsible entries (one per work item)
   - Each entry: company logo, company name, position, date range, expandable description

4. **#education** — Education section
   - Heading: "Education"
   - Each entry: school logo, school name, degree, date range
   - ArrowUpRight icon on hover (external link behavior)

5. **#projects** — Projects section
   - Badge label: "My Projects"
   - Heading: "Check out my latest work"
   - Subheading: "Here are a few of my machine learning and computer vision projects."
   - 2-column grid (sm breakpoint+) of ProjectCard components
   - Each card: title, type/dates, tech tags (badges), image/video, expandable description, source links

6. **#skills** — Skills section
   - Heading: "Skills"
   - Skill groups rendered as category headers + pill/badge rows
   - Categories: ML & AI, Frameworks & Technologies, Libraries, Languages & Tools, Languages

7. **#courses** — Courses & Certifications section
   - Heading: "Courses & Certifications"
   - Provider groups with bulleted course lists

8. **#contact** — Contact section
   - ContactSection component (card with FlickeringGrid background)
   - Badge label: "Contact"
   - Heading: "Get in Touch"
   - Email with link

## Bottom Dock Navbar (fixed at bottom center)

### Home navigation
- Home (icon: HomeIcon, href: "/", label: "Home" via tooltip)

### Social links (after first Separator)
In this order:
1. GitHub (tooltip: "GitHub")
2. LinkedIn (tooltip: "LinkedIn")
3. Kaggle (tooltip: "Kaggle")
4. email / Send Email (tooltip: "email")

### Theme toggle (after second Separator)
- Theme (icon: ModeToggle, tooltip: "Theme")
- Supports light/dark theme switching

## CTAs / Buttons
- **Download CV** — in hero section, downloads the resume PDF
- **Source** badges on project cards (top-right of project image area)
- **Expand/Collapse** chevron on project cards and work accordion
- **Email link** in contact section
- **Social links** in navbar dock
- **Project title/image** links go to project.href (external GitHub)
- **Education entries** link to education.href (currently empty)
- **Work/Experience company entries** are accordion triggers

## Hidden / Secondary content
- **hackathons: []** — empty array, section not rendered in UI
- **blog content-collections** — defined in content-collections.ts (posts collection from `content/**/*.mdx`) but no `content/` folder and no MDX files exist, so blog feature is configured but unused
- **SVG icon files in ui/svgs** for C#, Go, Java, Kubernetes, Next.js, Node.js, PostgreSQL, React, TypeScript — present as components but NOT referenced in user skills data
- **Icons in icons.tsx** for X/Twitter, YouTube, Notion, OpenAI, Google Drive, WhatsApp, Globe — defined but NOT used in the current navbar/social configuration
- **opengraph-image.tsx, not-found.tsx** — Next.js built-ins with no portfolio data (metadata only)
- **mode-toggle.tsx** — UI only, no data

---

# 14. Assets

## Images / Photos

### Profile / Avatar
| Filename | Path | What it represents | Where it is used |
|---|---|---|---|
| me.png | `/public/me.png` — served at `/me.png` | Profile photo / avatar of Muhammad Ammar | Hero section (Avatar component, `DATA.avatarUrl`) |

### Company / Organization Logos
| Filename | Path | What it represents | Where it is used |
|---|---|---|---|
| cellula-technology.png | `/public/cellula-technology.png` — served at `/cellula-technology.png` | Cellula Technology company logo | Work experience section (work[0].logoUrl) |
| mansoura-university.png | `/public/mansoura-university.png` — served at `/mansoura-university.png` | Mansoura University logo | Education section (education[0].logoUrl) |

### Project Screenshots
| Filename | Path | What it represents | Where it is used |
|---|---|---|---|
| industrial-quality-control.png | `/public/projects/industrial-quality-control.png` — served at `/projects/industrial-quality-control.png` | Real-Time Industrial Quality Control System project screenshot/thumbnail | Projects section — "Real-Time Industrial Quality Control System" card |
| nyc-taxi.png | `/public/projects/nyc-taxi.png` — served at `/projects/nyc-taxi.png` | NYC Taxi Trip Duration Prediction project screenshot/thumbnail | Projects section — "NYC Taxi Trip Duration Prediction" card |
| road-accident.png | `/public/projects/road-accident.png` — served at `/projects/road-accident.png` | Road Accident Risk Prediction project screenshot/thumbnail | Projects section — "Road Accident Risk Prediction" card |
| body-measurement.png | `/public/projects/body-measurement.png` — served at `/projects/body-measurement.png` | AI Body Measurement System project screenshot/thumbnail | Projects section — "AI Body Measurement System" card |
| sign-language.png | `/public/projects/sign-language.png` — served at `/projects/sign-language.png` | Sign Language Recognition project screenshot/thumbnail | Projects section — "Sign Language Recognition" card |

### Icons (Favicon / Metadata)
| Filename | Path | What it represents | Where it is used |
|---|---|---|---|
| favicon.ico | `/src/app/favicon.ico` | Site favicon | Next.js App Router convention (tab icon) |

### opengraph-image.tsx
| File | Path | Purpose |
|---|---|---|
| opengraph-image.tsx | `/src/app/opengraph-image.tsx` | Dynamic Open Graph image generation (Next.js convention) | Open Graph / social sharing metadata — no personal content found; uses layout metadata |

## PDF Documents
| Filename | Path | What it represents | Where it is used |
|---|---|---|---|
| Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf | `/public/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf` — served at `/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf` | Resume / CV PDF of Muhammad Ammar, Machine Learning Engineer | Hero section "Download CV" button |

## Fonts
| Filename | Path | Font | Where it is used |
|---|---|---|---|
| CabinetGrotesk-Medium.ttf | `/public/fonts/CabinetGrotesk-Medium.ttf` | Cabinet Grotesk (Medium weight) | Project static fonts (may be used via globals.css) |
| ClashDisplay-Semibold.ttf | `/public/fonts/ClashDisplay-Semibold.ttf` | Clash Display (Semibold weight) | Project static fonts (may be used via globals.css) |

Note: layout.tsx also loads `Geist` (sans) and `Geist_Mono` (mono) from `next/font/google`.

## SVG Icon Components (UI assets)
These are React components rendering inline SVG. They are framework/technology logos or social icons.

### In `src/components/icons.tsx`
- globe (GlobeIcon from lucide-react)
- email (MailIcon from lucide-react)
- linkedin (custom LinkedIn SVG)
- x / Twitter (custom SVG)
- youtube (custom SVG)
- nextjs (Next.js logo SVG)
- framermotion (Framer Motion SVG)
- tailwindcss (Tailwind CSS SVG)
- typescript (TypeScript SVG)
- react (React SVG)
- github (GitHub SVG)
- notion (Notion SVG)
- openai (OpenAI SVG)
- googleDrive (Google Drive SVG)
- whatsapp (WhatsApp SVG)

### In `src/components/ui/svgs/`
- csharp.tsx — C# icon
- docker.tsx — Docker icon
- golang.tsx — Go icon (light variant)
- golangDark.tsx — Go icon (dark variant)
- java.tsx — Java icon
- kubernetes.tsx — Kubernetes icon
- nextjsIconDark.tsx — Next.js icon (dark)
- nextjsLogoDark.tsx — Next.js logo wordmark (dark)
- nextjsLogoLight.tsx — Next.js logo wordmark (light)
- nodejs.tsx — Node.js icon
- postgresql.tsx — PostgreSQL icon
- postgresqlWordmarkDark.tsx — PostgreSQL wordmark (dark)
- postgresqlWordmarkLight.tsx — PostgreSQL wordmark (light)
- python.tsx — Python icon
- reactDark.tsx — React icon (dark)
- reactLight.tsx — React icon (light)
- reactWordmarkDark.tsx — React wordmark (dark)
- reactWordmarkLight.tsx — React wordmark (light)
- typescript.tsx — TypeScript icon

---

# 15. Exact Text Content

## Hero Text (page.tsx lines 22-32)
- Greeting: `Hi, I'm Muhammad` (derived from DATA.name.split(" ")[0] = "Muhammad")
- Title: `Machine Learning Engineer` (DATA.description)
- CTA button: `Download CV`

## About Section
- Section heading: `About`
- Body (DATA.summary exact):
```
Machine Learning Engineer with hands-on experience building end-to-end machine learning solutions across classification, regression, and deep learning. Experienced in data preprocessing, feature engineering, model evaluation, and model optimization using Python and Scikit-learn. Also experienced in integrating ML models into FastAPI applications and building practical ML systems from data and modeling to inference.
```

## Work Experience Section
- Section heading: `Work Experience`
- Work 1 accordion:
  - Company: `Cellula Technology`
  - Position: `Machine Learning Intern`
  - Dates: `Oct 2025 - Dec 2025`
  - Description (exact):
```
Hotel Booking Cancellation Prediction
- Worked with 500K+ records.
- Achieved 87% accuracy and 0.91 F1 on the minority class.
- Built the solution end-to-end including data cleaning, EDA, feature engineering, model training, and evaluation.
- Integrated the model into a FastAPI REST API with a lightweight HTML interface for interactive local predictions.

Uber Fare Prediction
- Worked with 1M+ records.
- Achieved R² of 0.74 and MAE of 1.01 using gradient boosting.
- Built the solution end-to-end including data cleaning, EDA, feature engineering, model training, and evaluation.
- Integrated the model into a FastAPI REST API with a lightweight HTML interface for interactive local predictions.
```

## Education Section
- Section heading: `Education`
- Entry 1:
  - School: `Mansoura University`
  - Degree: `Faculty of Computer and Information Science | Bachelor's Degree in Computer Science`
  - Dates: `2022 - 2026`

## Projects Section
- Top badge: `My Projects`
- Section heading: `Check out my latest work`
- Subheading: `Here are a few of my machine learning and computer vision projects.`

### Project Card Exact Descriptions:

**Real-Time Industrial Quality Control System** (type: `University Graduation Project`)
```
- Built a two-stage object detection pipeline using YOLO26n, first localizing products and then detecting defects within cropped product regions.
- Achieved 99.4% validation mAP50 for product detection and 94.2% validation mAP50 for defect detection.
- Exported PyTorch models through ONNX and implemented dynamic-shape TensorRT conversion, while using asynchronous frame processing for camera inference.
- Integrated the detection pipeline into a FastAPI service with annotated video streaming, Firebase event storage, and a monitoring dashboard.
```
Technologies badges: `YOLO26n` `OpenCV` `ONNX` `TensorRT` `FastAPI` `WebRTC` `Firebase`
Link badge: `Source` (GitHub)

**NYC Taxi Trip Duration Prediction** (type: empty)
```
- Built a regression pipeline for predicting NYC taxi trip duration from 1M+ training records, using geospatial and temporal trip features.
- Engineered Haversine distance and time-based features, applied log transformations and degree-3 polynomial features, and trained a Ridge regression model with scaling.
- Integrated the trained model into a FastAPI REST API for local trip-duration inference.
```
Technologies badges: `Python` `Scikit-learn` `Pandas` `NumPy` `FastAPI`
Link badge: `Source` (GitHub)

**Road Accident Risk Prediction** (type: empty)
```
- Built an end-to-end regression pipeline to predict road accident risk across 517K+ records, comparing Linear Regression, Gradient Boosting, HistGradientBoosting, AdaBoost, and XGBoost.
- Improved performance over a Linear Regression baseline from 0.804 to 0.887 test R² using HistGradientBoosting with one-hot encoding and engineered numerical/categorical features.
- Tuned model hyperparameters using RandomizedSearchCV with 5-fold cross-validation and implemented reusable model serialization with batch and single-record inference.
```
Technologies badges: `Python` `Scikit-learn` `HistGradientBoosting` `XGBoost`
Link badge: `Source` (GitHub)

**AI Body Measurement System** (type: empty)
```
- Built a multi-input deep learning model combining front and side body images with gender, height, and weight to predict 14 body measurements.
- Developed a dual-branch CNN regression architecture and achieved a recorded validation MAE of 2.86 across the predicted measurements.
- Integrated image preprocessing, background removal, and model inference into a FastAPI application with a browser-based interface for measurement and clothing-size recommendations.
```
Technologies badges: `TensorFlow` `Keras` `Computer Vision` `FastAPI` `Python`
Link badge: `Source` (GitHub)

**Sign Language Recognition** (type: empty)
```
- Built a real-time sign language recognition system using MediaPipe hand landmarks and a PyTorch classifier.
- Exposed recognition through a FastAPI service with a base64-encoded frame endpoint and a webcam client.
- Added text accumulation with delete and space handling, plus spell correction.
```
Technologies badges: `MediaPipe` `PyTorch` `FastAPI` `OpenCV` `Python`
Link badge: `Source` (GitHub)

## Skills Section
- Section heading: `Skills`

Group labels and skill labels (exact):

**ML & AI**: `Supervised Learning` `Classification` `Regression` `Deep Learning` `Feature Engineering` `Model Evaluation` `Hyperparameter Tuning`

**Frameworks & Technologies**: `PyTorch` `FastAPI` `OpenCV` `YOLO` `MediaPipe`

**Libraries**: `NumPy` `Pandas` `Scikit-learn` `Matplotlib` `Seaborn`

**Languages & Tools**: `Python` `SQL` `Docker` `Git` `GitHub` `Linux`

**Languages**: `Arabic` `English`

## Courses & Certifications Section
- Section heading: `Courses & Certifications`

**DeepLearning.AI**:
- `Machine Learning Specialization`
- `Deep Learning Specialization`
- `Machine Learning in Production`

**CSkilled**:
- `Machine Learning Diploma`

## Contact Section
- Badge label: `Contact`
- Heading: `Get in Touch`
- Body (exact):
  `Want to chat? Reach out by email at i.muhamad.amar@gmil.com and I'll respond whenever I can.`

## Navbar Dock Tooltip Labels
- `Home`
- `GitHub`
- `LinkedIn`
- `Kaggle`
- `email`
- `Theme`

## Project Card Expand / Collapse aria-labels
- `Expand {title}` / `Collapse {title}`

## Social label (contact.social keys)
- `GitHub` (display name: GitHub)
- `LinkedIn` (display name: LinkedIn)
- `Kaggle` (display name: Kaggle)
- `email` (display name: Send Email)

---

# 16. External Links

All external URLs found in the project, sorted by purpose:

## Portfolio Site
| URL | Belongs to |
|---|---|
| https://mu-3mar.github.io | Portfolio main URL (DATA.url, metadataBase, OpenGraph url) |

## Social / Professional Profiles
| URL | Belongs to |
|---|---|
| https://github.com/mu-3mar | Muhammad Ammar — GitHub profile |
| https://linkedin.com/in/mu-3mar | Muhammad Ammar — LinkedIn profile |
| https://www.kaggle.com/mohamedsayedamarmsa | Muhammad Ammar — Kaggle profile |
| mailto:i.muhamad.amar@gmil.com | Muhammad Ammar — email |

## Project Repositories
| URL | Belongs to |
|---|---|
| https://github.com/mu-3mar/real-time-industrial-defect-detection-system | Real-Time Industrial Quality Control System project (href + Source link) |
| https://github.com/mu-3mar/nyc-taxi-duration-prediction | NYC Taxi Trip Duration Prediction project (href + Source link) |
| https://github.com/mu-3mar/road-accident-risk-prediction | Road Accident Risk Prediction project (href + Source link) |
| https://github.com/mu-3mar/ai-body-measurement | AI Body Measurement System project (href + Source link) |
| https://github.com/mu-3mar/sign-language-recognition | Sign Language Recognition project (href + Source link) |

## Internal / Asset Links
| URL | Belongs to |
|---|---|
| /me.png | Profile avatar |
| /mansoura-university.png | Mansoura University logo |
| /cellula-technology.png | Cellula Technology logo |
| /projects/industrial-quality-control.png | Project: Industrial QC screenshot |
| /projects/nyc-taxi.png | Project: NYC Taxi screenshot |
| /projects/road-accident.png | Project: Road Accident screenshot |
| /projects/body-measurement.png | Project: Body Measurement screenshot |
| /projects/sign-language.png | Project: Sign Language screenshot |
| /Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf | Resume PDF download |
| / | Home navigation |

## README Framework Links (documentation, not personal)
| URL | Belongs to |
|---|---|
| https://ui.shadcn.com/ | shadcn/ui component library (README only) |
| https://magicui.design/ | Magic UI component library (README only) |

## Metadata / SEO
- OpenGraph locale: `en_US`
- OpenGraph type: `website`
- OpenGraph siteName: `Muhammad Ammar`
- Twitter card: `summary_large_image`
- Robots: index + follow (all)

---

# 17. Data Sources / File Locations

All source files and where each major piece of data was found.

## Primary Data Source — All core portfolio data
**File**: [resume.tsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/data/resume.tsx#L1-L247)

Contains (via `DATA` object and `SKILL_ICONS`):
- name, initials, url, location, locationLink, description, summary, avatarUrl — lines 52-61
- skills array with categories — lines 62-88
- navbar items — line 89
- contact (email + social with GitHub, LinkedIn, Kaggle, email) — lines 90-118
- work experience (Cellula Technology internship + 2 sub-projects) — lines 119-132
- education (Mansoura University) — lines 133-142
- projects (5 projects with title, href, type, dates, image, video, description, technologies, links) — lines 143-234
- courses (DeepLearning.AI, CSkilled) — lines 235-245
- hackathons: [] — line 246
- SKILL_ICONS mapping for skill badges — lines 33-50
- Imports: FaKaggle (react-icons/fa6), simple-icons (siDocker, siFastapi, etc.) — lines 1-23

## Page Layout / Section Structure
**File**: [page.tsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/app/page.tsx#L1-L192)

Contains:
- Section order: hero → about → work → education → projects → skills → courses → contact
- Hero greeting rendering (Hi, I'm {name.split(" ")[0]}) — lines 22-27
- Download CV button + PDF filename — lines 33-40
- Section heading labels: "About", "Work Experience", "Education", "Skills", "Courses & Certifications"

## Root Layout / Metadata / Navbar Mount
**File**: [layout.tsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/app/layout.tsx#L1-L95)

Contains:
- metadata title default: DATA.name
- metadata title template: `%s | ${DATA.name}`
- metadata description: DATA.description
- OpenGraph: title, description, url, siteName, locale (en_US), type (website)
- Twitter card: summary_large_image
- FlickeringGrid background decoration
- Navbar mounted at bottom
- ThemeProvider default: light
- Google fonts: Geist, Geist_Mono

## Contact Section Content
**File**: [contact-section.tsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/components/section/contact-section.tsx#L1-L39)

Contains:
- Badge label: "Contact"
- Heading: "Get in Touch"
- Contact body copy (exact paragraph)
- Email link rendering

## Projects Section Content
**File**: [projects-section.tsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/components/section/projects-section.tsx#L1-L58)

Contains:
- Badge: "My Projects"
- Heading: "Check out my latest work"
- Subheading: "Here are a few of my machine learning and computer vision projects."
- Grid layout (2-col sm+)
- Card expand/collapse behavior via ProjectCard

## Work Section Content
**File**: [work-section.tsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/components/section/work-section.tsx#L1-L86)

Contains:
- Accordion rendering for work description
- Date display: `{work.start} - {work.end ?? "Present"}`

## Project Card Rendering
**File**: [project-card.tsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/components/project-card.tsx#L1-L163)

Contains:
- Technology badge rendering
- Source badge rendering
- Type/dates time element (shows `type` first, falls back to `dates`)
- Expand/collapse description

## Navbar Dock
**File**: [navbar.tsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/components/navbar.tsx#L1-L97)

Contains:
- Navbar order: Home items → Separator → social.navbar items → Separator → Theme toggle
- Tooltip labels rendered from `item.label` and social `name` keys

## Custom Social Icons
**File**: [icons.tsx](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/components/icons.tsx#L1-L229)

Contains:
- SVG definitions for social icons (LinkedIn, GitHub, etc.) used in contact.social
- Additional icons defined but not in use (X, YouTube, Notion, OpenAI, Google Drive, WhatsApp)

## Technology SVG Icon Components
**Directory**: [svgs](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/src/components/ui/svgs)

Contains C#, Go, Java, Kubernetes, Next.js, Node.js, PostgreSQL, React, TypeScript SVG components. NOT in DATA.skills.

## Blog Configuration (unused)
**File**: [content-collections.ts](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/content-collections.ts#L1-L33)

Defines posts collection (MDX). No MDX files exist on disk.

## README
**File**: [README.md](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/README.md#L1-L43)

Project-only info. No personal data beyond title line.

## package.json
**File**: [package.json](file:///home/muhammad-ammar/muhammad's%20space/Projects/Web/mu-3mar.github.io/package.json#L1-L57)

Dependencies only. No personal data.

---

# 18. Missing / Unclear Information

Items that are referenced, expected, or typically part of a portfolio but are not present / not filled / unclear in the project:

## Personal
- **Location field** exists in DATA but is empty string `""`
- **LocationLink field** exists in DATA but is empty string `""`
- **Phone number**: not found anywhere
- **Date of birth**: not found
- **Profile avatar alt text**: only "Muhammad Ammar" via alt prop — no specific alt caption

## Work / Experience
- **employment type**: not explicitly stored as field; inferred from `location: "Project-based"`
- **`href` for Cellula Technology**: empty string (no company link)
- **Badges** on work entry: `[]` (empty)
- Only 1 work entry exists — unclear if any prior roles were intentionally omitted or not added

## Education
- **`href` for Mansoura University**: empty string (no school link)
- **GPA / grades**: not present
- **Relevant coursework**: not present
- **Specialization / minor**: not specified beyond "Computer Science"
- **Current enrollment status**: not explicitly tagged (must be inferred from 2022-2026 range)

## Projects
- **Project `dates` field**: empty string `""` for all 5 projects (no start/end dates)
- **Project `type` field**: empty for all projects except Industrial QC ("University Graduation Project")
- **Project `video` field**: empty string `""` for all projects (no demo videos)
- **Live demo URLs**: none (only GitHub source links)
- **Dataset names / links**: not specified for any project
- **Project collaborators**: not mentioned
- **Project context (e.g., academic / personal / client)**: only 1 of 5 has type filled

## Skills / Icons Discrepancy
- **UI/svgs folder** has icons for C#, Go, Java, Kubernetes, Next.js, Node.js, PostgreSQL, React, TypeScript — but none are in DATA.skills. Unclear if user deliberately excluded them or simply hasn't added them to skills list.
- **icons.tsx** has X/Twitter, YouTube, Notion, OpenAI, Google Drive, WhatsApp SVG icons defined but none are wired into contact.social. Unclear if unused by choice.
- **Keras** is in project technologies but NOT in DATA.skills or SKILL_ICONS.
- **TensorFlow** is in project technologies but NOT in DATA.skills or SKILL_ICONS.
- **XGBoost** is in project technologies but NOT in DATA.skills or SKILL_ICONS.
- **HistGradientBoosting** is in project technologies but NOT in DATA.skills or SKILL_ICONS.
- **YOLO26n** vs **YOLO**: YOLO is in skills, YOLO26n in project tech tags — slight inconsistency in naming granularity.

## Certifications
- **No certifications object** with date / credential ID / URL exists — only courses list with provider names and course titles

## Achievements / Hackathons / Competitions
- **DATA.hackathons** is empty array `[]`
- No awards, rankings, publications, competition results, speaking engagements, or open-source contributions listed

## Services / Freelance
- No services data present at all

## Resume PDF
- Resume PDF exists in `/public/` but its **internal content was not parsed** (only filename / meta-data is available from code). PDF binary content is not included in this extraction.

## Blog / MDX Posts
- `content-collections.ts` defines a `posts` collection for MDX blog posts. However, **no `content/` directory** exists on disk and **zero `.mdx` files** were found. Blog feature is scaffolded but completely empty.

## Metadata / SEO
- Google verification ID: `""` (empty)
- Yandex verification ID: `""` (empty)

## README
- Repository title line says "Muhammad Ammar Portfolio". The `<repository-url>` placeholder in the README `git clone` command is still a placeholder (not substituted).

---

*Extraction completed. No existing project files were modified.*
