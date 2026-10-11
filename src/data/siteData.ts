export const personal = {
  initials: 'MA',
  firstName: 'Muhammad',
  name: 'Muhammad Ammar',
  title: 'Machine Learning Engineer',
  role: 'Machine Learning Engineer',
  copyrightYear: 2026,
  headline: {
    lineOne: 'I build',
    lineTwo: 'systems.',
    highlightWord: 'intelligent',
  },
} as const

export type ProjectCategory =
  | 'Machine Learning'
  | 'Deep Learning'
  | 'Computer Vision'
  | 'Data Analysis'
  | 'Deployment'

export type Project = {
  slug: string
  title: string
  type: string
  period?: string
  description: string
  problem: string
  solution: string
  contribution?: string
  tech: string[]
  githubUrl: string
  demoUrl?: string
  image: string
  category: ProjectCategory
}

export const technicalHighlights = [
  {
    title: 'Machine Learning',
    description: 'Model building, hypothesis testing, feature engineering, and practical prediction workflows.',
    icon: 'ML',
  },
  {
    title: 'Deep Learning',
    description: 'Computer vision and multi-input modeling for image-based decision systems and inferencing pipelines.',
    icon: 'DL',
  },
  {
    title: 'Computer Vision',
    description: 'Object detection, hand tracking, and image-based measurement systems optimized for real-time usage.',
    icon: 'CV',
  },
  {
    title: 'Data Analysis',
    description: 'Large-scale exploratory analysis, data validation, and actionable modeling insights from raw records.',
    icon: 'DA',
  },
  {
    title: 'Deployment',
    description: 'FastAPI services, model export, local inference APIs, and production-oriented deployment patterns.',
    icon: 'DP',
  },
] as const

export const projects: Project[] = [
  {
    slug: 'real-time-industrial-quality-control-system',
    title: 'Real-Time Industrial Quality Control System',
    type: 'University Graduation Project',
    period: '2025',
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
    category: 'Computer Vision',
  },
  {
    slug: 'nyc-taxi-trip-duration-prediction',
    title: 'NYC Taxi Trip Duration Prediction',
    type: 'Regression Modeling',
    period: '2025',
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
    category: 'Data Analysis',
  },
  {
    slug: 'road-accident-risk-prediction',
    title: 'Road Accident Risk Prediction',
    type: 'Risk Modeling',
    period: '2025',
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
    category: 'Machine Learning',
  },
  {
    slug: 'ai-body-measurement-system',
    title: 'AI Body Measurement System',
    type: 'Deep Learning',
    period: '2025',
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
    category: 'Deep Learning',
  },
  {
    slug: 'sign-language-recognition',
    title: 'Sign Language Recognition',
    type: 'Real-Time ML',
    period: '2025',
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
    category: 'Computer Vision',
  },
]

export const about = {
  summary:
    'Machine Learning Engineer with hands-on experience building end-to-end machine learning solutions across classification, regression, and deep learning. Experienced in data preprocessing, feature engineering, model evaluation, and model optimization using Python and Scikit-learn. Also experienced in integrating ML models into FastAPI applications and building practical ML systems from data and modeling to inference.',
  pillars: [
    'Computer vision',
    'End-to-end machine learning solutions',
    'Data preprocessing and feature engineering',
    'Model deployment and FastAPI integrations',
  ],
  technologies:
    'Python, SQL, NumPy, Pandas, Matplotlib, Scikit-learn, PyTorch, YOLO, ONNX, TensorRT, FastAPI, Docker, Git, GitHub, Linux',
}

export const education = [
  {
    school: 'Mansoura University',
    degree: "Bachelor's Degree in Computer Science",
    period: '2022 – 2026',
    details: 'Faculty of Computer and Information Science · Department of Computer Science',
  },
] as const

export const professionalAreas = [
  'Classification',
  'Regression',
  'Deep Learning',
  'Computer Vision',
  'Feature Engineering',
  'Model Evaluation',
  'Model Deployment',
  'FastAPI integrations',
] as const

export const experience = [
  {
    slug: 'cellula-technology',
    company: 'Cellula Technology',
    role: 'Machine Learning Intern',
    period: 'Oct 2025 – Dec 2025',
    projects: [
      {
        name: 'Hotel Booking Cancellation Prediction',
        details: [
          'Built a classification pipeline on 500K+ hotel booking records, achieving 87% accuracy and 0.91 F1-score on the minority class.',
          'Handled data cleaning, exploratory analysis, feature engineering, model training, and evaluation.',
          'Integrated the model into a FastAPI REST API with a lightweight HTML interface for local predictions.',
        ],
      },
      {
        name: 'Uber Fare Prediction',
        details: [
          'Built a regression pipeline on 1M+ trip records using gradient boosting, achieving R² of 0.74 and MAE of 1.01.',
          'Handled data cleaning, exploratory analysis, feature engineering, model training, and evaluation.',
          'Integrated the model into a FastAPI REST API with a lightweight HTML interface for local predictions.',
        ],
      },
    ],
  },
] as const

export const courses = [
  { provider: 'deeplearning.ai', title: 'Machine Learning Specialization' },
  { provider: 'deeplearning.ai', title: 'Deep Learning Specialization' },
  { provider: 'deeplearning.ai', title: 'Machine Learning in Production' },
  { provider: 'CSkilled', title: 'Machine Learning Diploma' },
] as const

export const skills = [
  {
    group: 'ML & AI',
    items: ['Supervised Learning', 'Classification', 'Regression', 'Deep Learning', 'Feature Engineering', 'Model Evaluation', 'Hyperparameter Tuning'],
  },
  {
    group: 'Frameworks & Technologies',
    items: ['PyTorch', 'FastAPI', 'OpenCV', 'YOLO', 'MediaPipe'],
  },
  {
    group: 'Libraries',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  },
  {
    group: 'Languages & Tools',
    items: ['Python', 'SQL', 'Docker', 'Git', 'GitHub', 'Linux'],
  },
  {
    group: 'Languages',
    items: ['Arabic', 'English'],
  },
] as const
