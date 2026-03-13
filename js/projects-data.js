window.PORTFOLIO_PROJECTS = [
  {
    title: "Real-Time Industrial Defect Detection System (QC-SCM)",
    slug: "real-time-industrial-defect-detection-system",
    desc: "AI-driven quality inspection with two-stage defect detection and real-time WebRTC streaming.",
    longDesc:
      "QC-SCM is an AI-driven quality inspection system for automated defect detection on manufacturing lines. It connects to industrial cameras, analyzes products in real time with a two-stage YOLO pipeline, streams annotated video to clients using WebRTC, and logs defect events to Firebase Realtime Database.",
    stack: ["Python", "PyTorch", "YOLO", "OpenCV", "FastAPI", "WebRTC", "ONNX", "TensorRT", "Firebase"],
    date: "2026-02-01",
    timeline: "February 2026 (in development)",
    problem:
      "Manual or semi-automated inspection in production lines can delay defect detection and reduce quality monitoring efficiency.",
    solution:
      "Implemented a two-stage computer vision pipeline with YOLO-based box detection and defect detection, with real-time WebRTC streaming and Firebase event logging.",
    purpose: "Improve manufacturing quality monitoring by detecting defects early and automatically.",
    challenges: [
      "Building a robust two-stage pipeline for box detection and defect detection",
      "Maintaining reliable real-time processing in production-line conditions",
      "Synchronizing live stream annotation with backend event logging",
    ],
    github: "https://github.com/mu-3mar/real-time-industrial-defect-detection-system",
    category: "computer-vision",
    featured: true,
  },
  {
    title: "Sign Language Recognition System",
    slug: "sign-language-recognition",
    desc: "Real-time sign language recognition from webcam input with gesture-to-text conversion.",
    longDesc:
      "A real-time sign language recognition system that detects hand gestures and converts them into text. Frames are processed with MediaPipe for hand landmark detection and classified by a PyTorch model. It also includes a FastAPI endpoint for base64 frame input and text accumulation with space and delete handling.",
    stack: ["Python", "PyTorch", "MediaPipe", "OpenCV", "FastAPI"],
    date: "2025-04-01",
    timeline: "April 2025",
    problem:
      "Sign language communication can be difficult in many real-time interaction scenarios without assistive tools.",
    solution:
      "Built a real-time gesture-to-text pipeline using MediaPipe landmarks and a PyTorch classifier, exposed through FastAPI for live usage.",
    purpose: "Improve communication accessibility with live gesture recognition.",
    challenges: [
      "Extracting stable landmarks from varying webcam conditions",
      "Designing fast inference for real-time usage",
      "Managing text accumulation logic for practical output",
    ],
    github: "https://github.com/mu-3mar/sign-language-recognition",
    category: "deep-learning",
    featured: true,
  },
  {
    title: "AI Body Measurement System",
    slug: "ai-body-measurement",
    desc: "Computer vision system that estimates body measurements and recommends clothing sizes.",
    longDesc:
      "A computer vision application where users upload front and side photos, and the system predicts body measurements then recommends clothing sizes. It includes a web interface for image upload and a FastAPI backend for prediction.",
    stack: ["Python", "Computer Vision", "FastAPI", "HTML", "CSS"],
    date: "2025-01-01",
    timeline: "January 2025",
    problem:
      "Getting body measurements manually is time-consuming and can be inconvenient for online clothing selection.",
    solution:
      "Developed a vision-based system that estimates body measurements from uploaded images and recommends suitable clothing sizes.",
    purpose: "Provide practical body measurement estimation and clothing size recommendations.",
    challenges: [
      "Inferring reliable body dimensions from image inputs",
      "Supporting multiple measurement outputs from one workflow",
      "Designing a simple and accessible user experience",
    ],
    github: "https://github.com/mu-3mar/ai-body-measurement",
    category: "computer-vision",
    featured: true,
  },
  {
    title: "NYC Taxi Trip Duration Prediction",
    slug: "nyc-taxi-duration-prediction",
    desc: "Regression model predicting taxi trip duration using geographic and time features.",
    longDesc:
      "A machine learning regression project that predicts NYC taxi trip duration using engineered geographic and time-based features. It includes Haversine distance calculation, temporal feature extraction, model training with scikit-learn, and a FastAPI prediction API.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "FastAPI"],
    date: "2025-07-01",
    timeline: "July 2025",
    problem:
      "Trip duration estimation can be inaccurate without strong spatial and temporal feature engineering.",
    solution:
      "Engineered Haversine and time-based features, trained a regression model, and served predictions through a FastAPI endpoint.",
    purpose: "Enable better trip duration estimation from location and timing context.",
    challenges: [
      "Engineering high-impact spatial and temporal features",
      "Choosing a stable regression baseline for deployment",
      "Exposing model inference through a clean API layer",
    ],
    github: "https://github.com/mu-3mar/nyc-taxi-duration-prediction",
    category: "machine-learning",
    featured: true,
  },
  {
    title: "Road Accident Risk Prediction",
    slug: "road-accident-risk-prediction",
    desc: "Predicts accident risk from tabular datasets using regression models.",
    longDesc:
      "A machine learning project that predicts road accident risk from tabular data. It includes a data preprocessing pipeline, model training with HistGradientBoostingRegressor, and a reusable batch prediction workflow with modular structure.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    date: "2025-10-01",
    timeline: "October 2025",
    problem:
      "Road risk estimation from tabular data is hard without a clean, reusable prediction pipeline.",
    solution:
      "Built a modular preprocessing and training architecture with HistGradientBoostingRegressor and batch prediction support.",
    purpose: "Support risk-aware decision making through predictive analytics.",
    challenges: [
      "Building a reusable preprocessing and training pipeline",
      "Maintaining model consistency across batch predictions",
      "Structuring code for modular experimentation and reuse",
    ],
    github: "https://github.com/mu-3mar/road-accident-risk-prediction",
    category: "machine-learning",
    featured: false,
  },
  {
    title: "Bank Marketing Campaign Prediction",
    slug: "bank-marketing-campaign-prediction",
    desc: "Predicts term-deposit subscriptions using a class-imbalance-aware ML pipeline.",
    longDesc:
      "A machine learning system that predicts whether bank clients will subscribe to a term deposit. The pipeline handles data preprocessing, class imbalance with SMOTE, Random Forest training, and FastAPI-based prediction serving. Reported performance includes Accuracy 89%, Precision 57%, Recall 60%, F1 Score 58%, and ROC-AUC 0.77.",
    stack: ["Python", "Scikit-learn", "FastAPI", "Pandas", "NumPy", "SMOTE"],
    date: "2025-12-01",
    timeline: "December 2025",
    problem:
      "Bank campaigns often suffer from low conversion because identifying likely subscribers is difficult.",
    solution:
      "Created an imbalance-aware ML pipeline using SMOTE and Random Forest, then deployed it behind a FastAPI prediction API.",
    purpose: "Help marketing teams target likely subscribers more effectively.",
    challenges: [
      "Handling class imbalance to improve minority-class detection",
      "Balancing precision and recall for business value",
      "Deploying a practical prediction interface via API",
    ],
    github: "https://github.com/mu-3mar/Bank-Marketing-Campaign-Prediction",
    category: "machine-learning",
    featured: false,
  },
];

(function () {
  var FALLBACK = "assets/images/profile.png";
  window.PORTFOLIO_PROJECTS.forEach(function (p) {
    var base = "assets/projects/" + p.slug + "/cover";
    p.imageBase = base;
    // Default to webp (fast), with runtime fallbacks for other extensions.
    p.image = base + ".webp";
    p._fallback = FALLBACK;
  });
})();
