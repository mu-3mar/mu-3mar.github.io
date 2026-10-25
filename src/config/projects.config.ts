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
  /** General Category: 'Machine Learning' | 'Deep Learning' | 'NLP' | 'Computer Vision' (or dynamic) */
  category: 'Machine Learning' | 'Deep Learning' | 'NLP' | 'Computer Vision' | string
  /** Type mirrors general category */
  type?: string
  /** Work venue / classification: 'Self-Practice', 'Internship', 'Graduation Project', etc. */
  context: string
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
    category: 'Computer Vision',
    type: 'Computer Vision',
    context: 'Graduation Project',
    featured: true,
    description:
      'Developed a real-time, two-stage computer vision system that locates products on a production line and inspects each product region for defects.',
    problem:
      'Manual quality inspection can be slow and inconsistent, especially when products move continuously through an industrial production line.',
    solution:
      'Built a two-stage YOLO-based detection pipeline with an asynchronous video-processing architecture. The system streams annotated frames, stabilizes detections across time, and records defect events and session information through Firebase.',
    contribution:
      'Developed the quality-control detection workflow, integrated model inference with live video processing, and implemented detection stabilization and defect-event handling.',
    tech: ['Python', 'YOLO', 'OpenCV', 'ONNX', 'TensorRT', 'FastAPI', 'Firebase'],
    githubUrl: 'https://github.com/mu-3mar/real-time-industrial-defect-detection-system',
    image: '/images/projects/project-industrial-quality-control-cover.png',
    implementationPoints: [
      'Designed a two-stage detection pipeline for product localization followed by defect inspection on cropped product regions.',
      'Exported detection models to ONNX and explored optimized inference with dynamic INT8 quantization and TensorRT.',
      'Implemented asynchronous frame processing with bounded queues to separate camera input, GPU inference, and result streaming.',
      'Added IoU-based track matching, bounding-box smoothing, and temporal voting to reduce unstable frame-by-frame detections.',
      'Integrated FastAPI streaming and Firebase event/session records with an operations dashboard.'
    ],
  },
    {
    slug: 'nyc-taxi-trip-duration-prediction',
    title: 'NYC Taxi Trip Duration Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning',
    context: 'Self-Practice',
    featured: true,
    description:
      'Built a regression workflow to estimate New York City taxi trip duration from trip coordinates and time-related features.',
    problem:
      'Trip duration depends on multiple factors, including route distance and pickup timing, so raw trip coordinates and timestamps need to be transformed into useful predictive features.',
    solution:
      'Performed exploratory data analysis and feature engineering, including Haversine distance and temporal features. Trained a polynomial Ridge Regression pipeline with consistent preprocessing and exposed single-trip predictions through a FastAPI endpoint.',
    contribution:
      'Prepared and analyzed the trip dataset, engineered geospatial and temporal features, trained and evaluated the regression pipeline, and implemented API-based inference.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'FastAPI'],
    githubUrl: 'https://github.com/mu-3mar/nyc-taxi-duration-prediction',
    image: '/images/projects/project-nyc-taxi-duration-cover.png',
    implementationPoints: [
      'Engineered Haversine distance and pickup-time features from trip coordinates and timestamps.',
      'Applied data cleaning, outlier filtering, and target transformation as part of the modeling workflow.',
      'Built a reusable PolynomialFeatures, MinMaxScaler, and Ridge Regression pipeline.',
      'Evaluated the model on held-out validation and test splits using metrics in the transformed log-duration space.',
      'Implemented a FastAPI prediction endpoint with shared preprocessing for incoming trip records.'
    ],
  },
    {
    slug: 'road-accident-risk-prediction',
    title: 'Road Accident Risk Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning',
    context: 'Self-Practice',
    featured: true,
    description:
      'Developed a regression pipeline that estimates a continuous road accident risk score from road, environmental, and traffic-related features.',
    problem:
      'Road conditions, lighting, weather, and traffic context can relate to different levels of accident risk, requiring a structured workflow to analyze these factors and estimate a risk score.',
    solution:
      'Explored the dataset with statistical analysis and visualizations, prepared categorical and numerical features, compared several regression algorithms, and selected a HistGradientBoostingRegressor for the final modeling workflow.',
    contribution:
      'Performed exploratory and statistical analysis, built a consistent preprocessing workflow, compared regression models, tuned hyperparameters with RandomizedSearchCV, and prepared scripts for model training and batch prediction.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'SciPy'],
    githubUrl: 'https://github.com/mu-3mar/road-accident-risk-prediction',
    image: '/images/projects/project-road-accident-risk-cover.png',
    implementationPoints: [
      'Analyzed relationships between accident risk and road, lighting, weather, and time-of-day features.',
      'Encoded categorical variables and maintained a fixed feature schema for inference.',
      'Compared Linear Regression, Gradient Boosting, HistGradientBoosting, AdaBoost, and XGBoost regressors.',
      'Used RandomizedSearchCV with cross-validation to explore model hyperparameters.',
      'Created command-line workflows for training and generating predictions in batches.'
    ],
  },
  {
    slug: 'hotel-booking-cancellation-prediction',
    title: 'Hotel Booking Cancellation Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning',
    context: 'Internship · Cellula Technology',
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
    githubUrl: 'https://github.com/mu-3mar/Hotel-Reservation-Classification',
    image: '/images/projects/project-hotel-booking-cancellation-cover.png',
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
    category: 'Machine Learning',
    type: 'Machine Learning',
    context: 'Internship · Cellula Technology',
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
    githubUrl: 'https://github.com/mu-3mar/Uber-Price-Prediction',
    image: '/images/projects/project-uber-fare-prediction-cover.png',
    implementationPoints: [
      'Engineered geospatial distance measures (Haversine/Manhattan) and temporal cyclical features on 1M+ trip records.',
      'Trained and tuned gradient boosted regressors to achieve an R² of 0.74 and MAE of 1.01.',
      'Integrated the model into an asynchronous FastAPI REST API enabling real-time fare predictions.',
    ],
  },
    {
    slug: 'ai-body-measurement-system',
    title: 'AI Body Measurement System',
    category: 'Deep Learning',
    type: 'Deep Learning',
    context: 'Self-Practice',
    featured: false,
    description:
      'Built a multi-input deep learning application that estimates 14 body measurements from front and side images together with basic user attributes, then maps the estimates to clothing sizes.',
    problem:
      'Estimating body measurements from images requires combining visual information from multiple views with relevant user attributes in a consistent prediction pipeline.',
    solution:
      'Developed a dual-branch CNN with late fusion for the front image, side image, and user metadata. The model predicts 14 continuous measurements, which are passed to a rule-based size chart in a FastAPI application with a browser interface.',
    contribution:
      'Designed and trained the multi-input regression model, built the image preprocessing workflow, and integrated prediction and size recommendation into a user-facing application.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'rembg', 'FastAPI', 'Pillow'],
    githubUrl: 'https://github.com/mu-3mar/ai-body-measurement',
    image: '/images/projects/project-ai-body-measurement-cover.png',
    implementationPoints: [
      'Designed separate CNN branches for front and side images and combined their learned representations with user metadata.',
      'Trained a multi-output regression model to estimate 14 body measurements.',
      'Used training callbacks including early stopping, learning-rate reduction, and best-checkpoint saving.',
      'Built an inference preprocessing pipeline that extracts subject masks and prepares both image views for the model.',
      'Integrated measurement predictions and rule-based clothing-size recommendations into a FastAPI web application.',
      'Achieved a best observed validation MAE of approximately 2.86 cm across the predicted measurements.'
    ],
  },
    {
    slug: 'sign-language-recognition',
    title: 'Sign Language Recognition',
    category: 'Computer Vision',
    type: 'Computer Vision',
    context: 'Self-Practice',
    featured: false,
    description:
      'Built a webcam-based ASL fingerspelling recognizer that converts hand movements into text using hand landmarks and a PyTorch classifier.',
    problem:
      'Frame-by-frame hand predictions can fluctuate during live interaction, so a practical recognizer needs a consistent feature representation and a mechanism to stabilize predictions over time.',
    solution:
      'Used MediaPipe Hands to extract 21 hand landmarks, transformed the landmarks into numerical features, and classified them with a 1D CNN in PyTorch. Added temporal smoothing, confidence thresholding, text editing controls, and spell correction to the recognition workflow.',
    contribution:
      'Implemented the landmark-to-classification pipeline, integrated webcam capture with API-based inference, and developed the text accumulation and correction features.',
    tech: ['Python', 'MediaPipe', 'PyTorch', 'OpenCV', 'FastAPI', 'pyspellchecker'],
    githubUrl: 'https://github.com/mu-3mar/sign-language-recognition',
    image: '/images/projects/project-sign-language-recognition-cover.png',
    implementationPoints: [
      'Extracted 21 hand landmarks and represented each hand as 63 numerical x, y, and z features.',
      'Developed a 1D CNN classifier in PyTorch for 28 ASL fingerspelling classes, including letter and text-control classes.',
      'Applied temporal prediction smoothing and confidence thresholding to make live predictions more stable.',
      'Connected an OpenCV webcam client to a FastAPI inference service.',
      'Implemented text accumulation, space and delete controls, and spell correction with pyspellchecker.'
    ],
  },
    {
    slug: 'bank-marketing-campaign-prediction',
    title: 'Bank Marketing Campaign Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning',
    context: 'Self-Practice',
    featured: false,
    description:
      'Built a machine learning workflow to predict whether a customer would subscribe to a term deposit following a bank marketing campaign.',
    problem:
      'Bank marketing datasets often contain imbalanced outcomes and a mix of numerical and categorical customer information, making it important to evaluate models beyond overall accuracy.',
    solution:
      'Performed exploratory analysis and preprocessing, engineered model-ready features, applied SMOTE to address class imbalance during training, and compared multiple classification algorithms. Packaged a Random Forest pipeline for predictions and provided a Streamlit interface and command-line inference workflow.',
    contribution:
      'Conducted exploratory data analysis, prepared numerical and categorical features, built and compared classification models, and integrated the saved prediction pipeline with a user interface and CLI.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'imbalanced-learn', 'Streamlit', 'Joblib'],
    githubUrl: 'https://github.com/mu-3mar/Bank-Marketing-Campaign-Prediction',
    image: '/images/projects/project-bank-marketing-campaign-cover.png',
    implementationPoints: [
      'Analyzed customer and campaign features for a binary term-deposit subscription task.',
      'Built preprocessing for numerical and categorical variables and used SMOTE to address class imbalance.',
      'Compared eight classification algorithms using classification metrics, including F1-score and ROC-AUC.',
      'Packaged a Random Forest pipeline for reusable predictions.',
      'Created a Streamlit interface and command-line script for running predictions.'
    ],
  },
{
  slug: 'stroke-risk-prediction-system',
  title: 'Stroke Risk Prediction System',
  category: 'Machine Learning',
  type: 'Machine Learning',
  context: 'Self-Practice',
  featured: false,
  description:
    'Built an end-to-end machine learning system to estimate stroke risk using patient demographics, medical history, and health-related features, with a Streamlit interface for interactive predictions.',
  problem:
    'Analyzing multiple patient risk factors to estimate stroke risk requires a consistent prediction pipeline and an accessible interface for exploring model results.',
  solution:
    'Developed a complete ML pipeline with exploratory data analysis, preprocessing, and comparison of five classification models: Logistic Regression, Random Forest, SVM, Decision Tree, and Gradient Boosting. Deployed the selected model through a FastAPI REST API connected to a Streamlit frontend that displays risk predictions and probabilities.',
  contribution:
    'Performed EDA and data preprocessing, trained and compared five machine learning models, saved the best-performing model and scaler, and integrated the prediction pipeline with a FastAPI backend and Streamlit user interface.',
  tech: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI', 'Streamlit', 'Jupyter Notebook'],
  githubUrl: 'https://github.com/mu-3mar/Stroke-Risk-Prediction',
  image: '/images/projects/project-stroke-risk-prediction-cover.png',
},
]


