import avatar from '../assets/images/Muhammad_Ammar_Profile.png';
import resumePdf from '../assets/images/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf';

export const profile = {
  name: 'Muhammad Ammar',
  initials: 'MA',
  role: 'Machine Learning Engineer',
  summary:
    'Machine Learning Engineer with hands-on experience building end-to-end machine learning solutions across classification, regression, and deep learning. Experienced in data preprocessing, feature engineering, model evaluation, and model optimization using Python and Scikit-learn. Also experienced in integrating ML models into FastAPI applications and building practical ML systems from data and modeling to inference.',
  careerFocus: [
    'End-to-end machine learning solutions',
    'ML model integration into FastAPI applications',
    'Practical ML systems from data and modeling to inference',
  ],
  email: 'i.muhamad.amar@gmil.com',
  phone: '+20 104 432 2560',
  github: 'https://github.com/mu-3mar',
  linkedin: 'https://linkedin.com/in/mu-3mar',
  kaggle: 'https://www.kaggle.com/mohamedsayedamarmsa',
  portfolioUrl: 'https://mu-3mar.github.io',
  avatar,
  resumePdf,
  resumeFilename: 'Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf',
  contactText:
    "Want to chat? Reach out by email at i.muhamad.amar@gmil.com and I'll respond whenever I can.",
};

export const experience = [
  {
    title: 'Machine Learning Intern',
    company: 'Cellula Technology',
    period: 'Oct 2025 – Dec 2025',
    stack: 'Python · Scikit-learn · FastAPI · HTML · Gradient Boosting',
    logo: '/cellula-technology.png',
    bullets: [
      'Hotel Booking Cancellation Prediction: worked with 500K+ records and achieved 87% accuracy and 0.91 F1 on the minority class.',
      'Built the hotel booking solution end-to-end, including data cleaning, EDA, feature engineering, model training, and evaluation.',
      'Integrated the hotel booking model into a FastAPI REST API with a lightweight HTML interface for interactive local predictions.',
      'Uber Fare Prediction: worked with 1M+ records and achieved R² of 0.74 and MAE of 1.01 using gradient boosting.',
      'Built the fare prediction solution end-to-end, including data cleaning, EDA, feature engineering, model training, and evaluation.',
      'Integrated the fare prediction model into a FastAPI REST API with a lightweight HTML interface for interactive local predictions.',
    ],
  },
];

export const education = {
  degree: "Faculty of Computer and Information Science | Bachelor's Degree in Computer Science",
  school: 'Mansoura University',
  period: '2022 – 2026',
  detail: 'Graduated',
  logo: '/mansoura-university.png',
};

export const projects = [
  {
    title: 'Real-Time Industrial Quality Control System',
    badge: 'Graduation Project',
    stack: 'YOLO26n · OpenCV · ONNX · TensorRT · FastAPI · WebRTC · Firebase',
    bullets: [
      'Built a two-stage object detection pipeline using YOLO26n, first localizing products and then detecting defects within cropped product regions.',
      'Achieved 99.4% validation mAP50 for product detection and 94.2% validation mAP50 for defect detection.',
      'Exported PyTorch models through ONNX and implemented dynamic-shape TensorRT conversion, while using asynchronous frame processing for camera inference.',
      'Integrated the detection pipeline into a FastAPI service with annotated video streaming, Firebase event storage, and a monitoring dashboard.',
    ],
    github: 'https://github.com/mu-3mar/real-time-industrial-defect-detection-system',
    image: '/projects/industrial-quality-control.png',
  },
  {
    title: 'NYC Taxi Trip Duration Prediction',
    stack: 'Python · Scikit-learn · Pandas · NumPy · FastAPI',
    bullets: [
      'Built a regression pipeline for predicting NYC taxi trip duration from 1M+ training records, using geospatial and temporal trip features.',
      'Engineered Haversine distance and time-based features, applied log transformations and degree-3 polynomial features, and trained a Ridge regression model with scaling.',
      'Integrated the trained model into a FastAPI REST API for local trip-duration inference.',
    ],
    github: 'https://github.com/mu-3mar/nyc-taxi-duration-prediction',
    image: '/projects/nyc-taxi.png',
  },
  {
    title: 'Road Accident Risk Prediction',
    stack: 'Python · Scikit-learn · HistGradientBoosting · XGBoost',
    bullets: [
      'Built an end-to-end regression pipeline to predict road accident risk across 517K+ records, comparing Linear Regression, Gradient Boosting, HistGradientBoosting, AdaBoost, and XGBoost.',
      'Improved performance over a Linear Regression baseline from 0.804 to 0.887 test R² using HistGradientBoosting with one-hot encoding and engineered numerical/categorical features.',
      'Tuned model hyperparameters using RandomizedSearchCV with 5-fold cross-validation and implemented reusable model serialization with batch and single-record inference.',
    ],
    github: 'https://github.com/mu-3mar/road-accident-risk-prediction',
    image: '/projects/road-accident.png',
  },
  {
    title: 'AI Body Measurement System',
    stack: 'TensorFlow · Keras · Computer Vision · FastAPI · Python',
    bullets: [
      'Built a multi-input deep learning model combining front and side body images with gender, height, and weight to predict 14 body measurements.',
      'Developed a dual-branch CNN regression architecture and achieved a recorded validation MAE of 2.86 across the predicted measurements.',
      'Integrated image preprocessing, background removal, and model inference into a FastAPI application with a browser-based interface for measurement and clothing-size recommendations.',
    ],
    github: 'https://github.com/mu-3mar/ai-body-measurement',
    image: '/projects/body-measurement.png',
  },
  {
    title: 'Sign Language Recognition',
    stack: 'MediaPipe · PyTorch · FastAPI · OpenCV · Python',
    bullets: [
      'Built a real-time sign language recognition system using MediaPipe hand landmarks and a PyTorch classifier.',
      'Exposed recognition through a FastAPI service with a base64-encoded frame endpoint and a webcam client.',
      'Added text accumulation with delete and space handling, plus spell correction.',
    ],
    github: 'https://github.com/mu-3mar/sign-language-recognition',
    image: '/projects/sign-language.png',
  },
];

export const skills = [
  {
    group: 'ML & AI',
    items: [
      'Supervised Learning',
      'Classification',
      'Regression',
      'Deep Learning',
      'Feature Engineering',
      'Model Evaluation',
      'Hyperparameter Tuning',
    ],
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
  { group: 'Languages', items: ['Arabic', 'English'] },
];

export const certifications = [];

export const courses = [
  {
    provider: 'DeepLearning.AI',
    items: [
      'Machine Learning Specialization',
      'Deep Learning Specialization',
      'Machine Learning in Production',
    ],
  },
  { provider: 'CSkilled', items: ['Machine Learning Diploma'] },
];