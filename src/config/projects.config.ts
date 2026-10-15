/**
 * Projects Configuration
 * 
 * To add a new project:
 * Just copy one of the objects below and append it to the `projects` array.
 * 
 * It will AUTOMATICALLY:
 * 1. Appear in the Projects grid (/projects)
 * 2. Add its category to the filter chips dynamically
 * 3. Appear on the Homepage under "Featured projects" if `featured: true`
 * 4. Create its own dedicated detail page at (/projects/:slug)
 * 5. Be suggested in "Related projects" on other project pages
 */

export interface Project {
  /** Unique URL path segment, e.g. 'my-cool-project' -> /projects/my-cool-project */
  slug: string
  /** Display title */
  title: string
  /** Subtitle/type badge, e.g. 'University Graduation Project', 'Deep Learning' */
  type: string
  /** Year or duration, e.g. '2025' */
  period?: string
  /** Category used for filtering (e.g. 'Computer Vision', 'Deep Learning', 'Machine Learning', 'Data Analysis') */
  category: string
  /** Associated company name (optional, e.g. 'Cellula Technology') */
  company?: string
  /** Associated company slug for experience linking (optional, e.g. 'cellula-technology') */
  companySlug?: string
  /** Whether this project is featured on the homepage preview */
  featured?: boolean
  /** Short summary of what was built */
  description: string
  /** Problem statement */
  problem: string
  /** How it was solved */
  solution: string
  /** Specific personal contribution */
  contribution?: string
  /** Technologies used (badges) */
  tech: string[]
  /** Link to GitHub repo */
  githubUrl: string
  /** Optional live demo link */
  demoUrl?: string
  /** Path to cover image (place your file in /public/images/projects/) */
  image: string
  /** Optional specific implementation highlights shown on detail page */
  implementationPoints?: string[]
}

export const projects: Project[] = [
  {
    slug: 'real-time-industrial-quality-control-system',
    title: 'Real-Time Industrial Quality Control System',
    type: 'University Graduation Project',
    period: '2025',
    category: 'Computer Vision',
    featured: true,
    description:
      'Built a two-stage vision pipeline that localizes products and then inspects defects in cropped regions for live factory monitoring.',
    problem:
      'Industrial inspection needed a faster and more consistent way to detect subtle product defects without relying on manual review.',
    solution:
      'The pipeline uses YOLO26n for object localization, ONNX export for efficient inference, and asynchronous video processing with a monitoring dashboard to surface defects in real time.',
    contribution:
      'Designed the end-to-end detection workflow, optimized model inference for live streams, and integrated the deployment layer with analytics and event tracking.',
    tech: ['YOLO26n', 'OpenCV', 'ONNX', 'TensorRT', 'FastAPI', 'WebRTC', 'Firebase'],
    githubUrl: 'https://github.com/mu-3mar/real-time-industrial-defect-detection-system',
    image: '/images/projects/project-industrial-quality-control-cover.png',
  },
  {
    slug: 'nyc-taxi-trip-duration-prediction',
    title: 'NYC Taxi Trip Duration Prediction',
    type: 'Regression Modeling',
    period: '2025',
    category: 'Data Analysis',
    featured: true,
    description:
      'Developed a geospatial and temporal regression pipeline that predicts taxi trip duration using a large-scale travel dataset.',
    problem:
      'Trip duration prediction is highly sensitive to route, time, and demand patterns, which required robust feature engineering and efficient modeling at scale.',
    solution:
      'The project combines engineered distance measures, temporal and geospatial features, and a reusable FastAPI inference service for batch and single-record predictions.',
    contribution:
      'Built the feature pipeline, evaluated the regression model, and exposed inference through an API for practical local use.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI'],
    githubUrl: 'https://github.com/mu-3mar/nyc-taxi-duration-prediction',
    image: '/images/projects/project-nyc-taxi-duration-cover.png',
  },
  {
    slug: 'road-accident-risk-prediction',
    title: 'Road Accident Risk Prediction',
    type: 'Risk Modeling',
    period: '2025',
    category: 'Machine Learning',
    featured: true,
    description:
      'Created a predictive modeling workflow to estimate road accident risk across a large structured dataset using comparative model evaluation.',
    problem:
      'Road risk modeling requires balancing predictive power with interpretability and reusable inference patterns across many input combinations.',
    solution:
      'The project compares multiple models with cross-validation, tunes weak learners, and supports both batch and single-record prediction loops.',
    contribution:
      'Implemented the end-to-end pipeline from data preparation through model comparison and inference design for repeatable forecasting.',
    tech: ['Python', 'Scikit-learn', 'HistGradientBoosting', 'XGBoost'],
    githubUrl: 'https://github.com/mu-3mar/road-accident-risk-prediction',
    image: '/images/projects/project-road-accident-risk-cover.png',
  },
  {
    slug: 'hotel-booking-cancellation-prediction',
    title: 'Hotel Booking Cancellation Prediction',
    type: 'Machine Learning · Classification',
    period: '2025',
    category: 'Machine Learning',
    company: 'Cellula Technology',
    companySlug: 'cellula-technology',
    featured: false,
    description:
      'Built a classification pipeline on 500K+ hotel booking records to predict cancellations, achieving 87% accuracy and 0.91 F1-score on the minority class.',
    problem:
      'Hotel cancellations cause unpredictable revenue losses and scheduling bottlenecks, necessitating early and reliable prediction of high-risk bookings.',
    solution:
      'Conducted extensive exploratory analysis, engineered features reflecting customer lead time and booking patterns, and trained balanced classifiers optimized for minority-class recall.',
    contribution:
      'Handled data cleaning, feature engineering, model training, and integrated the model into a FastAPI REST API with a lightweight HTML interface for local predictions.',
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'Pandas', 'NumPy', 'HTML'],
    githubUrl: 'https://github.com/mu-3mar',
    image: '/images/projects/placeholder-project.svg',
    implementationPoints: [
      'Cleaned and validated 500K+ structured hotel booking records, resolving missing values and class imbalance.',
      'Constructed domain-focused features capturing customer lead times, seasonality, and previous cancellation tendencies.',
      'Trained and evaluated cross-validated classification models, reaching 87% overall accuracy and 0.91 F1-score on cancellations.',
      'Packaged the trained model into a production-ready FastAPI endpoint with an interactive local interface.',
    ],
  },
  {
    slug: 'uber-fare-prediction',
    title: 'Uber Fare Prediction',
    type: 'Regression Modeling',
    period: '2025',
    category: 'Machine Learning',
    company: 'Cellula Technology',
    companySlug: 'cellula-technology',
    featured: false,
    description:
      'Built a large-scale regression pipeline on 1M+ trip records using gradient boosting to forecast ride fares, achieving an R² of 0.74 and MAE of 1.01.',
    problem:
      'Fare estimation across metropolitan areas involves significant non-linear relationships with distance, time-of-day demand spikes, and geospatial clusters.',
    solution:
      'Developed specialized coordinate distance metrics, temporal encodings, and gradient-boosted regression models with automated hyperparameter tuning.',
    contribution:
      'Handled data cleaning, exploratory analysis, feature engineering, model training and evaluation, and deployed a FastAPI REST inference service.',
    tech: ['Python', 'Gradient Boosting', 'Scikit-learn', 'FastAPI', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/mu-3mar',
    image: '/images/projects/placeholder-project.svg',
    implementationPoints: [
      'Engineered geospatial distance measures (Haversine/Manhattan) and temporal cyclical features on 1M+ trip records.',
      'Trained and tuned gradient boosted regressors to achieve an R² of 0.74 and MAE of 1.01.',
      'Integrated the model into an asynchronous FastAPI REST API enabling real-time fare predictions.',
    ],
  },
  {
    slug: 'ai-body-measurement-system',
    title: 'AI Body Measurement System',
    type: 'Deep Learning',
    period: '2025',
    category: 'Deep Learning',
    featured: false,
    description:
      'Built a multi-input deep learning system for estimating body measurements from front and side images, enabling size recommendation workflows.',
    problem:
      'Traditional measurement approaches are slow and inconsistent, while image-based estimation needs a reliable model that integrates visual appearance with user metadata.',
    solution:
      'The project builds a multi-input model using front and side images with attribute information and serves predictions through a browser-based FastAPI application.',
    contribution:
      'Developed the modeling approach, assembled the image pipeline, and integrated the model into an interactive user-facing inference interface.',
    tech: ['TensorFlow', 'Keras', 'Computer Vision', 'FastAPI', 'Python'],
    githubUrl: 'https://github.com/mu-3mar/ai-body-measurement',
    image: '/images/projects/project-ai-body-measurement-cover.png',
  },
  {
    slug: 'sign-language-recognition',
    title: 'Sign Language Recognition',
    type: 'Real-Time ML',
    period: '2025',
    category: 'Computer Vision',
    featured: false,
    description:
      'Built an accessible sign-language recognition system using hand landmarks and a webcam client for live classification and text accumulation.',
    problem:
      'Real-time recognition requires reliable hand tracking and a low-latency decision layer that can support continuous user interaction.',
    solution:
      'The application uses MediaPipe landmarks, a PyTorch classifier, and a FastAPI-backed interface to recognize signs with error-tolerant text output.',
    contribution:
      'Designed the recognition pipeline, built the client-side inference flow, and integrated the text accumulation and spell-correction experience.',
    tech: ['MediaPipe', 'PyTorch', 'FastAPI', 'OpenCV', 'Python'],
    githubUrl: 'https://github.com/mu-3mar/sign-language-recognition',
    image: '/images/projects/project-sign-language-recognition-cover.png',
  },
]
