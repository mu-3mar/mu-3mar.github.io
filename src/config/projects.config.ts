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
  /** Whether the project is visible but temporarily unavailable */
  disabled?: boolean
  /** Message shown when a disabled project is displayed */
  disabledNote?: string
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
  /** Toggle switch to show/hide Live Demo link */
  hasDemo: boolean
  /** Optional live demo link */
  demoUrl?: string
  /** Optional in-page demo video */
  videoUrl?: string
  /** Toggle switch to show/hide Docker Hub link */
  hasDocker: boolean
  /** Optional Docker Hub repository link */
  dockerHubUrl?: string
  /** Path to cover image (place your file in /public/images/projects/) */
  image: string
  /** Optional specific implementation highlights shown on detail page */
  implementationPoints?: string[]
  /** Optional healthcare or general disclaimer */
  disclaimer?: string
  /** Optional dataset specifications */
  dataset?: {
    title?: string
    source: string
    stats: Array<{ label: string; value: string }>
    notes?: string
  }
  /** Optional machine learning workflow breakdown */
  mlWorkflow?: {
    dataPrep: string[]
    modelDev: string[]
  }
  /** Optional model evaluation metrics and caveats */
  evaluation?: {
    lead?: string
    metrics: Array<{ label: string; value: string }>
    tradeoffExplanation?: string
    tradeoffTitle?: string
    caveat?: string
  }
  /** Optional Docker containerization details */
  dockerDetails?: {
    imageTag: string
    hubUrl: string
    description: string
    verificationNote?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'real-time-industrial-quality-control-system',
    title: 'Real-Time Industrial Quality Control System',
    category: 'Computer Vision',
    type: 'Computer Vision · Deep Learning · Edge AI',
    context: 'Graduation Project',
    featured: true,
    description:
      'QC-SCM is a high-speed industrial quality inspection platform that combines dual-stage deep learning models (product localization and defect analysis) with a multi-threaded asynchronous architecture, sub-30ms hardware acceleration via ONNX/TensorRT, and Firebase cloud telemetry.',
    problem:
      'Manual quality inspection on continuous manufacturing conveyor lines is slow, inconsistent, and prone to human error, creating critical throughput bottlenecks in high-speed manufacturing environments.',
    solution:
      'Engineered an asynchronous dual-stage vision pipeline decoupling camera I/O and GPU inference with a producer-consumer architecture. Integrated temporal voting and defect-locking algorithms to suppress flicker and false positives, optimized inference to sub-30ms with ONNX/TensorRT, and synchronized telemetry to Firebase.',
    contribution:
      'Architected the multi-threaded asynchronous flow engine, engineered industrial data augmentations (horizontal motion blur and mosaic) for the V2.0 training pipeline, implemented detection stabilization, and integrated cloud reporting with live operations streaming.',
    tech: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'ONNX Runtime', 'TensorRT', 'FastAPI', 'Firebase', 'CUDA'],
    githubUrl: 'https://github.com/mu-3mar/real-time-industrial-defect-detection-system',
    hasDemo: true,
    videoUrl: '/videos/industrial-quality-control-demo.mp4',
    hasDocker: false,
    dockerHubUrl: '',
    image: '/images/projects/project-industrial-quality-control-cover.png',
    implementationPoints: [
      'Designed a two-stage detection pipeline for product localization (Box Detection) followed by defect inspection on cropped product regions.',
      'Exported detection models to ONNX and achieved sub-30ms end-to-end inference using NVIDIA TensorRT execution providers.',
      'Implemented an asynchronous producer-consumer architecture with bounded queues to decouple camera input, GPU inference, and result streaming.',
      'Added IoU-based track matching, bounding-box smoothing, and temporal voting to eliminate false positives and frame flicker.',
      'Integrated FastAPI MJPEG streaming and Firebase Realtime Database telemetry synchronization with an operations dashboard.',
    ],
    dataset: {
      source: 'Industrial Manufacturing & Defect Inspection Dataset (V2.0)',
      stats: [
        { label: 'Pipeline Architecture', value: 'Dual-Stage' },
        { label: 'End-to-End Latency', value: '< 30ms' },
        { label: 'Localization mAP@50', value: '99.2%' },
        { label: 'Concurrency Pattern', value: 'Multi-Thread' },
      ],
      notes:
        'The V2.0 training pipeline introduced custom horizontal motion blur augmentations to simulate high-speed conveyor belt conditions and mosaic augmentations to improve detection for small-scale anomalies.',
    },
    mlWorkflow: {
      dataPrep: [
        'Generated synthetic horizontal motion blur augmentations to replicate high-speed conveyor belt speeds.',
        'Implemented mosaic data augmentations to increase sensitivity and bounding-box accuracy for small defect regions.',
        'Constructed dynamic cropping of localized box regions to feed high-resolution inputs to downstream defect classifiers.',
        'Engineered multi-session camera input pipelines with thread-safe queue buffering.',
      ],
      modelDev: [
        'Architected a dual-stage pipeline: Stage 1 for product localization and Stage 2 for high-resolution defect inspection.',
        'Built an asynchronous producer-consumer pipeline separating camera capture, GPU inference, and MJPEG streaming.',
        'Developed temporal voting and defect-locking algorithms to eliminate false positives and frame-by-frame flicker.',
        'Exported models to ONNX and accelerated execution with NVIDIA TensorRT, achieving sub-30ms real-time throughput.',
      ],
    },
    evaluation: {
      metrics: [
        { label: 'Localization mAP@50', value: '99.2%' },
        { label: 'End-to-End Latency', value: '< 30ms' },
        { label: 'Hardware Runtime', value: 'TensorRT' },
        { label: 'Cloud Telemetry', value: 'Firebase' },
      ],
      tradeoffTitle: 'Asynchronous Concurrency & Latency',
      tradeoffExplanation:
        'Decoupling camera acquisition and telemetry threads from the GPU inference loop eliminated frame drops and ensured deterministic sub-30ms end-to-end response times under continuous manufacturing load.',
      caveat:
        'Hardware-accelerated execution requires an NVIDIA GPU environment with CUDA/cuDNN and TensorRT execution providers for optimal sub-30ms performance.',
    },
  },
  {
    slug: 'healthlens-diabetes-risk-prediction',
    title: 'HealthLens — Diabetes Risk Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning · Healthcare Analytics · Full-Stack ML Deployment',
    context: 'Self-Practice',
    featured: true,
    description:
      'An end-to-end machine learning application that estimates diabetes/prediabetes risk from 21 health indicators using CDC BRFSS survey data. It combines data preprocessing, classification, threshold tuning, a FastAPI backend, an interactive web interface, and Docker containerization.',
    problem:
      'Diabetes risk assessment is a meaningful healthcare analytics use case. HealthLens explores how survey-based health indicators can be used to identify records associated with diabetes or prediabetes.',
    solution:
      'Trained a Logistic Regression pipeline with balanced class weighting, tuned the decision threshold to 0.60 to prioritize recall, and deployed the inference pipeline through a FastAPI REST API, Docker container, and an interactive web interface on Vercel.',
    contribution:
      'Conducted EDA and outlier analysis on 250K+ CDC records, built leakage-free preprocessing pipelines, handled class imbalance, tuned the decision threshold, implemented FastAPI endpoints, built the browser interface, and containerized the service with Docker.',
    tech: [
      'Python',
      'Scikit-learn',
      'FastAPI',
      'Docker',
      'Vercel',
      'HTML',
      'CSS',
      'JavaScript',
      'Pandas',
      'NumPy',
      'Joblib',
      'imbalanced-learn',
    ],
    githubUrl: 'https://github.com/mu-3mar/cdc-diabetes-health-indicators',
    hasDemo: true,
    demoUrl: 'https://cdc-diabetes-health-indicators.vercel.app/',
    hasDocker: true,
    dockerHubUrl: 'https://hub.docker.com/r/mu3mar/healthlens-api',
    image: '/images/projects/project-healthlens-diabetes-cover.png',
    implementationPoints: [
      'Processed and analyzed 253,680 CDC BRFSS 2015 survey records, removing 24,206 duplicate rows and retaining valid health indicators.',
      'Investigated feature distributions and outliers across 21 indicators including BMI, mental health days, and physical health days.',
      'Evaluated Logistic Regression, Decision Tree, Random Forest, and KNN with class weighting, oversampling, undersampling, and SMOTE.',
      'Constructed a leakage-free Scikit-learn pipeline with Stratified 5-Fold Cross-Validation and GridSearchCV.',
      'Optimized the decision threshold to 0.60, achieving 64.2% recall on positive cases.',
      'Built and deployed a FastAPI REST API with interactive Swagger documentation (/docs) and OpenAPI schema (/openapi.json).',
      'Created a vanilla HTML/CSS/JavaScript web interface with dynamic sliders, randomizer, and probability meter without a Node build process.',
      'Packaged the complete inference pipeline into a portable Docker image (mu3mar/healthlens-api:latest) pushed to Docker Hub.',
    ],
    disclaimer:
      'Educational machine learning demonstration, not a clinical diagnostic system. Its predictions must not be used as a substitute for professional medical assessment.',
    dataset: {
      source: 'CDC Diabetes Health Indicators (BRFSS 2015)',
      stats: [
        { label: 'Original Records', value: '253,680' },
        { label: 'Cleaned Records', value: '229,474' },
        { label: 'Health Indicators', value: '21' },
        { label: 'Duplicates Removed', value: '24,206' },
      ],
      notes:
        'Target: Diabetes_binary (0: No Diabetes, 1: Prediabetes / Diabetes). No missing values in cleaned dataset. Conflicting target labels for identical feature combinations were retained to reflect authentic survey response patterns.',
    },
    mlWorkflow: {
      dataPrep: [
        'Inspected data quality, feature distributions, duplicate records, and target class balance.',
        'Removed 24,206 exact duplicate rows across survey records.',
        'Investigated outliers in key health variables including BMI, mental health days, and physical health days.',
        'Retained valid observations within survey value ranges and preserved conflicting combinations.',
      ],
      modelDev: [
        'Compared Logistic Regression, Decision Tree, Random Forest, and K-Nearest Neighbors.',
        'Evaluated class-imbalance strategies: balanced weighting, oversampling, undersampling, and SMOTE.',
        'Built preprocessing directly into the Scikit-learn pipeline to prevent data leakage across folds.',
        'Used Stratified 5-Fold Cross-Validation and GridSearchCV for hyperparameter tuning.',
        'Selected Logistic Regression (balanced weighting, C=1, lbfgs) and optimized decision threshold to 0.60 to prioritize recall.',
      ],
    },
    evaluation: {
      metrics: [
        { label: 'Accuracy', value: '77.49%' },
        { label: 'Recall', value: '64.2%' },
        { label: 'Precision', value: '36.6%' },
        { label: 'F1-Score', value: '0.466' },
        { label: 'PR-AUC', value: '0.4121' },
      ],
      tradeoffTitle: 'Recall-Aware Threshold',
      tradeoffExplanation:
        'The classification threshold was adjusted to 0.60 to prioritize detecting positive cases while maintaining recall above 60%. At this operating point, the model captures ~64% of positive test records, with precision reflecting an acceptable trade-off for early screening indicators.',
      caveat:
        'The project README notes that the test set was reused in earlier exploratory baseline comparisons before final tuning. The reported test metrics may therefore be optimistic and should not be presented as an entirely untouched final evaluation.',
    },
    dockerDetails: {
      imageTag: 'mu3mar/healthlens-api:latest',
      hubUrl: 'https://hub.docker.com/r/mu3mar/healthlens-api',
      description:
        'The inference pipeline is served via FastAPI and containerized with Docker, packaging Python dependencies, model artifacts, and API routes for portable and reproducible deployment.',
      verificationNote:
        'Built and validated locally, tested on the prediction endpoint, and published to Docker Hub. Live application served on Vercel.',
    },
  },
    {
    slug: 'road-accident-risk-prediction',
    title: 'RoadGuard — Road Accident Risk Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning · Regression · Risk Analytics · API Deployment',
    context: 'Self-Practice',
    featured: true,
    description:
      'RoadGuard is an end-to-end machine learning system that estimates a continuous accident_risk score from road, traffic, weather, lighting, and time-related conditions. It combines exploratory analysis, stable feature preprocessing, model selection and tuning, a saved inference pipeline, batch prediction, a lightweight HTTP API, a browser interface, and Docker support.',
    problem:
      'Accident-risk patterns depend on interacting road, environmental, traffic, and temporal conditions. These mixed categorical, boolean, and numeric inputs need consistent transformations before a regression model can estimate a useful continuous risk score.',
    solution:
      'Built a reproducible preprocessing and regression workflow that converts boolean indicators to integers, one-hot encodes categorical conditions, enforces a stable 20-feature schema, and standardizes speed_limit. Compared five regressors, tuned HistGradientBoostingRegressor with randomized cross-validation, and exposed the saved pipeline through batch scripts and an HTTP API.',
    contribution:
      'Performed EDA and data-quality analysis, engineered categorical and boolean features, maintained the training/inference feature contract, compared and tuned regression models, exported all inference artifacts, implemented batch prediction and API workflows, and prepared the browser and Docker interfaces.',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'HistGradientBoosting',
      'XGBoost',
      'RandomizedSearchCV',
      'StandardScaler',
      'HTTP API',
      'Docker',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    githubUrl: 'https://github.com/mu-3mar/road-accident-risk-prediction',
    hasDemo: false,
    demoUrl: '',
    hasDocker: true,
    dockerHubUrl: 'https://hub.docker.com/r/mu3mar/road-accident-risk-prediction',
    image: '/images/projects/project-road-accident-risk-cover.png',
    implementationPoints: [
      'Analyzed a Kaggle Playground Series road accident dataset containing 517,754 rows and 14 columns.',
      'Used 12 model inputs covering road type, lanes, curvature, speed limit, lighting, weather, road context, time, and reported accidents.',
      'Converted boolean indicators to integers and one-hot encoded road_type, lighting, weather, and time_of_day.',
      'Enforced a stable 20-feature schema and standardized speed_limit with a fitted StandardScaler.',
      'Compared Linear Regression, Gradient Boosting, HistGradientBoosting, AdaBoost, and XGBoost.',
      'Tuned the selected model with 12 RandomizedSearchCV candidates and 5-fold cross-validation.',
      'Exported final_model.pkl, scaler.pkl, preprocessor.pkl, and feature_names.pkl for consistent inference.',
      'Implemented batch prediction with configurable input/output paths and id,accident_risk CSV results.',
      'Built an HTTP API with health checks, validation, model predictions, and a clearly labeled offline heuristic fallback in the frontend.',
    ],
    dataset: {
      title: 'Dataset & Road-Condition Indicators',
      source: 'Predicting Road Accident Risk dataset from the Kaggle Playground Series, Season 5 Episode 10',
      stats: [
        { label: 'Training Records', value: '517,754' },
        { label: 'Model Inputs', value: '12' },
        { label: 'Task', value: 'Regression' },
        { label: 'Target', value: 'accident_risk' },
      ],
      notes:
        'The training and test CSV files are downloaded separately from Kaggle and kept outside the repository. The id column is preserved for batch output but excluded from model features. Kaggle evaluates predictions with RMSE.',
    },
    mlWorkflow: {
      dataPrep: [
        'Reviewed dataset shape, data quality, numerical and categorical distributions, correlations, and target relationships during EDA.',
        'Converted boolean road-context indicators to integer values.',
        'One-hot encoded road_type, lighting, weather, and time_of_day.',
        'Enforced a stable 20-feature schema so training and inference use the same columns.',
        'Standardized speed_limit with a fitted StandardScaler.',
        'Separated id from the model feature set while preserving it for batch prediction output.',
      ],
      modelDev: [
        'Compared Linear Regression, Gradient Boosting, HistGradientBoosting, AdaBoost, and XGBoost with RMSE and R².',
        'Used a shuffled 5% hold-out test split with random_state=15.',
        'Tuned HistGradientBoostingRegressor with 12 RandomizedSearchCV candidates and 5-fold cross-validation.',
        'Selected min_samples_leaf=50, max_leaf_nodes=63, max_iter=300, learning_rate=0.05, and early stopping.',
        'Saved the model, scaler, preprocessor, and feature names as serialized inference artifacts.',
        'Connected the artifacts to batch prediction scripts, an HTTP API, and a standalone RoadGuard browser interface.',
      ],
    },
    evaluation: {
      lead: 'Recorded hold-out results from the final regression workflow:',
      metrics: [
        { label: 'Test RMSE', value: '0.0561' },
        { label: 'Test MAE', value: '0.0433' },
        { label: 'Test R²', value: '0.8868' },
        { label: 'Train R²', value: '0.8874' },
        { label: 'CV R²', value: '0.8862' },
      ],
      tradeoffTitle: 'Continuous Risk Score',
      tradeoffExplanation:
        'HistGradientBoosting achieved the selected final hold-out result after tuning, while XGBoost reached a similar baseline test R² of 0.887. The output is a numeric accident_risk score, not a class label or calibrated probability.',
      caveat:
        'The reported metrics come from one shuffled 5% split and should not be interpreted as a guarantee for every road or region. The score is intended for educational and planning purposes only, not as a guarantee of road safety.',
    },
    dockerDetails: {
      imageTag: 'mu3mar/road-accident-risk-prediction:latest',
      hubUrl: 'https://hub.docker.com/r/mu3mar/road-accident-risk-prediction',
      description:
        'The Docker image contains minimal runtime dependencies, source code, prediction scripts, and trained artifacts for the RoadGuard API and batch inference workflows.',
      verificationNote:
        'Run the published image on port 8000 and verify the service with GET / before sending prediction requests.',
    },
  },
  {
    slug: 'uber-fare-prediction',
    title: 'RideFare — Uber Fare Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning · Regression · Geospatial Analytics · API Deployment',
    context: 'Internship · Cellula Technology',
    company: 'Cellula Technology',
    companySlug: 'cellula-technology',
    featured: false,
    description:
      'RideFare is an end-to-end machine learning application that estimates an Uber ride fare from trip coordinates, route distance, time, passenger count, and weather information. It combines data preparation, exploratory analysis, geospatial and temporal feature engineering, regression model comparison, a serialized XGBoost pipeline, FastAPI inference, Docker deployment, and a standalone browser interface.',
    problem:
      'Ride fares depend on non-linear relationships between pickup and drop-off locations, route distance, time patterns, passenger context, and weather. Raw trip data must be cleaned, transformed, and represented consistently so an inference service can estimate fares from the same feature contract used during training.',
    solution:
      'Prepared approximately 500,000 trip records by removing unused identifiers and date fields, handling missing values, encoding categorical weather information, filtering selected outliers, and retaining correlation-selected features. Compared multiple regression models and selected XGBoost based on the lowest recorded MAE/MSE and highest R², then served the serialized model through FastAPI.',
    contribution:
      'Handled data cleaning, EDA, geospatial distance and bearing features, temporal feature extraction, model comparison, scaler fitting, artifact serialization, FastAPI request validation, standalone frontend integration, and Docker runtime deployment.',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
      'StandardScaler',
      'Jupyter Notebook',
      'FastAPI',
      'Uvicorn',
      'Docker',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    githubUrl: 'https://github.com/mu-3mar/Uber-Price-Prediction',
    hasDemo: false,
    demoUrl: '',
    hasDocker: true,
    dockerHubUrl: 'https://hub.docker.com/r/mu3mar/uber-price-prediction',
    image: '/images/projects/project-uber-fare-prediction-cover.png',
    implementationPoints: [
      'Built an 18-feature inference contract including weather, pickup/drop-off coordinates, passenger count, temporal values, landmark distances, distance, and bearing.',
      'Converted frontend date/time input into hour, day, month, weekday, and year before sending the prediction request.',
      'Engineered geospatial features including jfk_dist, ewr_dist, lga_dist, sol_dist, nyc_dist, distance, and bearing.',
      'Compared Linear, Ridge, Polynomial, Decision Tree, Random Forest, and XGBoost regressors on an 80/20 split with random_state=2.',
      'Fitted and saved a StandardScaler alongside the committed XGBRegressor artifact.',
      'Implemented FastAPI liveness and /predict endpoints with validation for all 18 numeric features.',
      'Built a standalone static frontend with randomize/reset controls and configurable API origin.',
      'Packaged the API, model artifacts, and runtime dependencies into the published Docker image.',
    ],
    dataset: {
      title: 'Dataset & Trip Features',
      source: 'Privately provided Uber fare dataset (not redistributed; the repository includes a similar public reference note)',
      stats: [
        { label: 'Starting Records', value: '~500,000' },
        { label: 'Model Features', value: '18' },
        { label: 'Task', value: 'Regression' },
        { label: 'Split', value: '80/20' },
      ],
      notes:
        'The target is fare_amount. The model uses weather, pickup and drop-off coordinates, passenger count, five temporal features, five landmark distances, route distance, and bearing. The original source data is private, so the committed model and scaler are required for inference.',
    },
    mlWorkflow: {
      dataPrep: [
        'Prepared approximately 500,000 trip records through exploratory analysis and data-quality inspection.',
        'Removed unused identifier and date columns, dropped missing values, encoded categorical weather data, and filtered selected outliers.',
        'Extracted hour, day, month, weekday, and year from pickup datetime.',
        'Engineered geospatial distance and bearing features between trip coordinates.',
        'Calculated distances to JFK, EWR, LGA, Statue of Liberty, and central NYC reference points.',
        'Selected the final feature set through correlation analysis and fitted a StandardScaler for inference.',
      ],
      modelDev: [
        'Compared Linear Regression, Ridge Regression, Polynomial Regression, Decision Tree, Random Forest, and XGBoost.',
        'Used an 80/20 train-test split with random_state=2 for the recorded notebook experiments.',
        'Selected XGBRegressor because it achieved the lowest recorded MAE and MSE and the highest R².',
        'Serialized the XGBRegressor to models/model.pkl and the fitted scaler to models/scaler.pkl.',
        'Connected the artifacts to a FastAPI /predict endpoint and a static browser interface.',
        'Packaged the inference service with runtime-only dependencies in Docker.',
      ],
    },
    evaluation: {
      lead: 'Recorded single-split benchmark results from the modeling notebooks:',
      metrics: [
        { label: 'MAE', value: '1.0148' },
        { label: 'MSE', value: '2.1999' },
        { label: 'RMSE', value: '1.4832' },
        { label: 'R²', value: '0.7419' },
        { label: 'Model', value: 'XGBoost' },
      ],
      tradeoffTitle: 'Model Selection & Metric Context',
      tradeoffExplanation:
        'XGBoost was selected over the tested regressors based on the lowest recorded MAE/MSE and highest R². RMSE is the square root of the recorded MSE because the notebook did not print RMSE for that experiment; all values are single-split benchmarks, not a production accuracy guarantee.',
      caveat:
        'The original dataset is private, and the notebooks currently pass prediction before target arrays to some scikit-learn metric functions. The reported R² should therefore be revalidated after correcting metric argument order before being treated as a formal statistic. This is an educational estimate, not an official Uber quote.',
    },
    dockerDetails: {
      imageTag: 'mu3mar/uber-price-prediction:latest',
      hubUrl: 'https://hub.docker.com/r/mu3mar/uber-price-prediction',
      description:
        'The inference image contains the FastAPI service, serialized model artifacts, and runtime dependencies. It listens internally on port 8000 and can be mapped to host port 5000 for local use.',
      verificationNote:
        'Run the published image on port 5000 and verify the liveness endpoint before sending fare prediction requests.',
    },
    disclaimer:
      'Educational estimate, not an official Uber quote. The prediction may differ from a live commercial fare and should not be treated as a guaranteed price.',
  },
    {
    slug: 'bank-marketing-campaign-prediction',
    title: 'Bank Marketing Campaign Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning · Classification · Full-Stack ML Deployment',
    context: 'Self-Practice',
    featured: false,
    description:
      'An end-to-end machine learning application that estimates whether a bank customer will subscribe to a term deposit after a marketing contact. It combines exploratory analysis, reproducible preprocessing, class-imbalance handling, model comparison, a tuned Random Forest pipeline, FastAPI inference, an interactive web interface, and Docker/Vercel deployment.',
    problem:
      'Marketing response data combines customer, financial, and campaign attributes with a heavily imbalanced subscription outcome. A useful decision-support system must transform mixed data consistently, avoid letting the majority class dominate training, and evaluate performance with precision, recall, F1-score, and ROC-AUC rather than accuracy alone.',
    solution:
      'Built a reproducible preprocessing pipeline with age grouping, logarithmic transformations, cyclical month features, categorical encoding, stable feature ordering, RobustScaler, and SMOTE. Compared eight classification algorithms, selected a tuned Random Forest pipeline, and exposed it through a FastAPI endpoint with probability scores and an interactive browser frontend.',
    contribution:
      'Conducted EDA, prepared mixed numerical and categorical features, engineered domain-specific transformations, handled class imbalance with SMOTE, trained and compared eight models, tuned and serialized the Random Forest pipeline, implemented FastAPI inference, built the responsive frontend, and prepared Docker and Vercel deployment.',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'imbalanced-learn',
      'SMOTE',
      'Random Forest',
      'FastAPI',
      'Docker',
      'Vercel',
      'HTML',
      'CSS',
      'JavaScript',
      'Joblib',
    ],
    githubUrl: 'https://github.com/mu-3mar/Bank-marketing-prediction',
    hasDemo: true,
    demoUrl: 'https://bank-marketing-campaign-prediction-self.vercel.app/',
    hasDocker: true,
    dockerHubUrl: 'https://hub.docker.com/r/mu3mar/bank-marketing-api',
    image: '/images/projects/project-bank-marketing-campaign-cover.png',
    implementationPoints: [
      'Analyzed a Portuguese bank marketing dataset with 22,605 training rows and 18 columns.',
      'Removed identifier and excluded low-value fields including SampleId, previous, default, and loan.',
      'Binned age, transformed balance, duration, and campaign logarithmically, and encoded month cyclically.',
      'Applied one-hot, ordinal, and binary encodings while enforcing a stable feature order for inference.',
      'Used SMOTE on the training data and RobustScaler for class-imbalance and scale handling.',
      'Compared Logistic Regression, Random Forest, XGBoost, Gradient Boosting, AdaBoost, Decision Tree, KNN, and Naive Bayes.',
      'Saved the final pipeline and required feature names as reusable Joblib artifacts.',
      'Implemented FastAPI /predict responses with a binary prediction and subscription probability.',
      'Built a responsive frontend with validation, random sample generation, and a probability meter.',
    ],
    dataset: {
      title: 'Dataset & Customer Attributes',
      source: 'Bank Marketing Prediction Kaggle competition dataset',
      stats: [
        { label: 'Training Records', value: '22,605' },
        { label: 'Input Fields', value: '17' },
        { label: 'Task', value: 'Binary Classification' },
        { label: 'Positive Class', value: '~11%' },
      ],
      notes:
        'The target y indicates whether the customer subscribed to a term deposit. The raw dataset contains customer, financial, and campaign information, has no missing values in the initial inspection, and is kept outside the repository. Download train.csv and test.csv into data/raw/ to reproduce training.',
    },
    mlWorkflow: {
      dataPrep: [
        'Explored class distribution, feature quality, and customer/campaign patterns in the EDA notebook.',
        'Removed identifiers and excluded low-value fields from the modeling schema.',
        'Grouped age into young, adult, middle_aged, and senior categories and created age indicators.',
        'Applied log transformations to balance, duration, and campaign.',
        'Encoded contact month with sine/cosine cyclical features.',
        'Applied one-hot encoding for job, marital status, contact type, and previous outcome.',
        'Applied ordinal education encoding and binary housing-loan encoding.',
        'Enforced a stable feature order and applied RobustScaler before model inference.',
        'Applied SMOTE to the training data to address the approximately 11% positive-class ratio.',
      ],
      modelDev: [
        'Compared eight classification algorithms on the prepared train/test split.',
        'Evaluated models with accuracy, precision, recall, F1-score, and ROC-AUC.',
        'Selected a tuned RandomForestClassifier inside an imbalanced-learn pipeline.',
        'Configured 168 trees, max_depth=14, min_samples_split=9, min_samples_leaf=4, sqrt features, and bootstrap disabled.',
        'Serialized model_pipeline.joblib and feature_names.joblib for consistent API inference.',
        'Connected the saved artifacts to FastAPI and deployed the API/frontend through Docker and Vercel.',
      ],
    },
    evaluation: {
      lead: 'Final tuned Random Forest evaluation summary used for the deployed artifact:',
      metrics: [
        { label: 'Accuracy', value: '89%' },
        { label: 'Precision', value: '57%' },
        { label: 'Recall', value: '60%' },
        { label: 'F1-Score', value: '58%' },
        { label: 'ROC-AUC', value: '0.77' },
      ],
      tradeoffTitle: 'Imbalanced Classification Metrics',
      tradeoffExplanation:
        'The baseline comparison covered eight models, while the deployed artifact is the tuned Random Forest pipeline. Accuracy alone is not sufficient for this imbalanced task, so precision, recall, F1-score, and ROC-AUC provide a more useful view of subscription detection quality.',
      caveat:
        'The duration feature is only known after a contact has taken place, so this is not a pure pre-contact targeting model. Historical campaign patterns may not represent future customer behavior, and predictions should support rather than automate customer-contact decisions.',
    },
    dockerDetails: {
      imageTag: 'mu3mar/bank-marketing-api:latest',
      hubUrl: 'https://hub.docker.com/r/mu3mar/bank-marketing-api',
      description:
        'The FastAPI application is packaged in a lightweight Docker image for local or hosted inference. The same-origin deployment can serve the API and frontend together, while the model pipeline and feature-order artifacts remain available to the runtime.',
      verificationNote:
        'Run the published image on port 8000 to expose the prediction API and interactive frontend locally.',
    },
    disclaimer:
      'This prediction is a statistical estimate for decision support. It is not a guarantee of customer behavior and should not replace professional judgment.',
  },
{
  slug: 'stroke-risk-prediction-system',
  title: 'Stroke Risk Prediction System',
  category: 'Machine Learning',
  type: 'Machine Learning · Classification · Healthcare Analytics · Full-Stack ML Deployment',
  context: 'Self-Practice',
  featured: false,
  description:
    'An end-to-end machine learning application that estimates stroke-risk likelihood from age and 15 health and symptom indicators. It combines exploratory analysis, reproducible preprocessing, model comparison, a serialized Support Vector Machine classifier, a FastAPI inference service, a responsive browser interface, Docker support, and Vercel deployment.',
  problem:
    'Stroke-risk estimation involves mixed binary health indicators and age, requiring consistent feature validation, scaling, and classification. The project provides an educational way to explore model probabilities while making clear that a hold-out score is not clinical validation or a diagnosis.',
  solution:
    'Built a notebook workflow that cleans and encodes the dataset, uses a stratified 80/20 split, standardizes Age with a saved StandardScaler, and compares five classifiers. Selected the Support Vector Machine based on recall, serialized the model and scaler, and exposed probability-based predictions through FastAPI and a responsive browser frontend.',
  contribution:
    'Performed EDA and preprocessing, mapped categorical health values to binary features, trained and compared five classifiers, saved the best-performing model and scaler, implemented request validation and health endpoints, built the interactive frontend, and prepared Docker and Vercel deployment.',
  tech: [
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'Support Vector Machine',
    'StandardScaler',
    'FastAPI',
    'Docker',
    'Vercel',
    'HTML',
    'CSS',
    'JavaScript',
    'Jupyter Notebook',
  ],
  githubUrl: 'https://github.com/mu-3mar/Stroke-Risk-Prediction',
  hasDemo: true,
  demoUrl: 'https://stroke-prediction-mu.vercel.app/',
  hasDocker: true,
  dockerHubUrl: 'https://hub.docker.com/r/mu3mar/stroke-risk-api',
  image: '/images/projects/project-stroke-risk-prediction-cover.png',
  implementationPoints: [
    'Loaded and cleaned the public Kaggle Stroke Prediction Dataset, removing duplicate rows before modeling.',
    'Mapped Absent/Present symptom values to 0/1 and mapped Not At Risk/At Risk to the binary target.',
    'Dropped the derived Stroke Risk (%) column before training to avoid using the target-related field as an input.',
    'Compared Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, and Support Vector Machine classifiers.',
    'Used class-weighted training for Logistic Regression, Decision Tree, Random Forest, and SVM.',
    'Standardized Age with a saved StandardScaler while retaining the 16-feature inference contract.',
    'Implemented FastAPI health and prediction endpoints with validation for required features, binary values, and Age from 1 through 120.',
    'Built a responsive browser interface with 16 inputs, probability visualization, reset/randomize controls, and API status.',
    'Packaged the inference service with lean Docker runtime dependencies and configured Vercel serverless deployment.',
  ],
  dataset: {
    title: 'Dataset & Health Indicators',
    source: 'Public Stroke Prediction Dataset from Kaggle',
    stats: [
      { label: 'Deduplicated Records', value: '68,979' },
      { label: 'Model Features', value: '16' },
      { label: 'Task', value: 'Binary Classification' },
      { label: 'Split', value: '80/20 Stratified' },
    ],
    notes:
      'The model receives 15 binary health and symptom indicators plus Age. The raw CSV is not committed and should be placed at data/raw/healthcare-dataset-stroke-data.csv. The notebook drops the derived Stroke Risk (%) field before training.',
  },
  mlWorkflow: {
    dataPrep: [
      'Loaded the Kaggle healthcare dataset and removed duplicate rows, producing 68,979 records in the recorded run.',
      'Mapped Absent/Present categorical values to 0/1 and Not At Risk/At Risk to the binary target.',
      'Dropped the derived Stroke Risk (%) column before model training.',
      'Maintained a fixed 16-feature schema covering symptoms, health indicators, and Age.',
      'Split the data with an 80/20 stratified train/test split using random_state=42.',
      'Standardized Age with a saved StandardScaler and reused the scaler during API inference.',
    ],
    modelDev: [
      'Compared Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, and Support Vector Machine models.',
      'Applied class-weighted training to Logistic Regression, Decision Tree, Random Forest, and SVM.',
      'Ranked models by Recall because missing a positive risk case was prioritized for this educational experiment.',
      'Selected and serialized the Support Vector Machine as models/best_stroke_model.pkl.',
      'Saved the preprocessing scaler as models/scaler.pkl and loaded both artifacts at API startup.',
      'Connected the artifacts to FastAPI and a static browser interface for probability and binary prediction output.',
    ],
  },
  evaluation: {
    lead: 'Recorded test-set results from the 80/20 stratified notebook split:',
    metrics: [
      { label: 'Accuracy', value: '98.81%' },
      { label: 'Recall', value: '98.29%' },
      { label: 'F1-Score', value: '99.08%' },
      { label: 'ROC-AUC', value: '99.98%' },
      { label: 'Threshold', value: '0.5' },
    ],
    tradeoffTitle: 'Recall-Focused Model Selection',
    tradeoffExplanation:
      'The notebook compared five classifiers and selected the Support Vector Machine based on Recall. The API converts the class-1 probability into the binary prediction using a threshold of 0.5, while the frontend displays the returned probability for exploration.',
    caveat:
      'These metrics come from one hold-out split and are not clinical validation. Dataset definitions, feature quality, possible leakage, and generalization outside this data require further review before any real-world use.',
  },
  dockerDetails: {
    imageTag: 'mu3mar/stroke-risk-api:latest',
    hubUrl: 'https://hub.docker.com/r/mu3mar/stroke-risk-api',
    description:
      'The FastAPI inference service is packaged in a small Docker image using runtime-only dependencies. It loads the serialized classifier and age scaler at startup and exposes health, prediction, and OpenAPI endpoints.',
    verificationNote:
      'Run the published image on port 8000 and verify the service with GET /health before sending prediction requests.',
  },
  disclaimer:
    'Educational machine-learning demonstration, not a medical device, diagnosis, or treatment recommendation. Do not use the output to make medical decisions. Always consult a qualified healthcare professional.',
},
    {
    slug: 'nyc-taxi-trip-duration-prediction',
    title: 'TripSight — NYC Taxi Trip Duration Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning · Regression · Full-Stack ML Deployment',
    context: 'Self-Practice',
    featured: false,
    description:
      'TripSight is an end-to-end machine learning application that estimates New York City taxi trip duration from route coordinates, pickup time, passenger count, vendor, and store-and-forward status. It combines geospatial and temporal feature engineering, a Ridge regression pipeline, a FastAPI inference service, Docker deployment, and a dependency-free browser frontend.',
    problem:
      'Taxi trip duration is influenced by route length, pickup timing, passenger context, and vendor behavior. Raw coordinates and timestamps are not directly suitable for regression, so they must be cleaned and transformed into meaningful spatial and temporal signals while accounting for the skewed duration target.',
    solution:
      'Built a reusable preprocessing workflow that extracts pickup-time features, calculates Haversine distance and its logarithm, and applies a log transform to trip duration. Trained a PolynomialFeatures degree-3, MinMaxScaler, and Ridge Regression pipeline, then exposed the saved artifact through a FastAPI /predict endpoint and a standalone browser interface.',
    contribution:
      'Prepared and analyzed the taxi trip data, investigated distributions, correlations, duplicates, and outliers, engineered geospatial and temporal features, trained and evaluated the regression pipeline, implemented shared preprocessing for API inference, built the independent frontend, and containerized the FastAPI runtime.',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Joblib',
      'FastAPI',
      'Uvicorn',
      'Docker',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    githubUrl: 'https://github.com/mu-3mar/nyc-taxi-duration-prediction',
    hasDemo: true,
    demoUrl: 'https://nyc-taxi-duration-prediction.vercel.app/',
    hasDocker: true,
    dockerHubUrl: 'https://hub.docker.com/r/mu3mar/nyc-taxi-duration-api',
    image: '/images/projects/project-nyc-taxi-duration-cover.png',
    implementationPoints: [
      'Explored trip distributions, correlations, duplicates, and outliers through dedicated EDA and modeling notebooks.',
      'Extracted pickup hour, day of week, day, and month from pickup timestamps.',
      'Calculated straight-line Haversine distance between pickup and drop-off coordinates and added log1p(distance).',
      'Applied log1p(trip_duration) during training and reversed the target transform with expm1 at inference.',
      'Serialized the trained Ridge pipeline to models/model.pkl and reused the same preprocessing logic in the API.',
      'Implemented FastAPI endpoints for liveness, interactive Swagger documentation, and single-trip duration prediction.',
      'Built a standalone frontend with API availability detection, random trip generation, validation, and minutes/seconds output.',
      'Published a lightweight Docker image containing only the API runtime, source code, and trained model artifact.',
    ],
    dataset: {
      title: 'Dataset & Input Features',
      source: 'NYC Taxi Trip Duration dataset (original source data is private and not redistributed)',
      stats: [
        { label: 'Task', value: 'Regression' },
        { label: 'Target', value: 'Trip Duration' },
        { label: 'Route Inputs', value: 'Coordinates' },
        { label: 'Time Inputs', value: 'Pickup Datetime' },
      ],
      notes:
        'The expected schema includes trip ID, vendor ID, pickup and drop-off coordinates, pickup datetime, passenger count, store-and-forward status, and trip duration in seconds. CSV files remain local and ignored by Git; the repository includes a dataset note with a public reference dataset of similar structure.',
    },
    mlWorkflow: {
      dataPrep: [
        'Explored distributions, correlations, duplicates, outliers, and data quality in the EDA notebook.',
        'Extracted pickup hour, day of week, day, and month from pickup_datetime.',
        'Computed straight-line Haversine distance between pickup and drop-off coordinates.',
        'Added log1p(distance) to reduce the effect of route-distance skew.',
        'Applied log1p(trip_duration) during training and reversed it with expm1 for API predictions.',
        'Kept the shared transformation logic in src/preprocessing.py for training, evaluation, and inference consistency.',
      ],
      modelDev: [
        'Built a PolynomialFeatures degree-3, MinMaxScaler, and Ridge Regression pipeline.',
        'Selected Ridge regularization with alpha=0.1 for the final saved model artifact.',
        'Serialized the complete pipeline with joblib to models/model.pkl.',
        'Evaluated the artifact with R² and MSE using validation and test data when available.',
        'Exposed the trained artifact through FastAPI and connected it to an independent static frontend.',
      ],
    },
    evaluation: {
      lead:
        'Recorded training results evaluated in the log-transformed trip-duration space:',
      metrics: [
        { label: 'R² Score', value: '63.25%' },
        { label: 'MSE', value: '0.1517' },
        { label: 'Target Space', value: 'Log Duration' },
        { label: 'Model', value: 'Ridge Regression' },
      ],
      tradeoffTitle: 'How to Read the Results',
      tradeoffExplanation:
        'R² indicates how much variance in the log-transformed trip duration is explained by the model, while MSE measures the average squared prediction error in that transformed target space. These are recorded training results, not production accuracy or a guarantee for every trip.',
      caveat:
        'Predictions use straight-line Haversine distance rather than live map routing. The model does not account for traffic, road closures, weather, or real-time taxi availability.',
    },
    dockerDetails: {
      imageTag: 'mu3mar/nyc-taxi-duration-api:latest',
      hubUrl: 'https://hub.docker.com/r/mu3mar/nyc-taxi-duration-api',
      description:
        'The FastAPI inference service is packaged in a lightweight Docker image containing only the API runtime dependencies, source code, and trained model artifact. Training notebooks, datasets, and the standalone frontend remain outside the image.',
      verificationNote:
        'The runtime pins scikit-learn to 1.5.1, matching the version used to serialize the current model artifact.',
    },
  },
    {
    slug: 'ai-body-measurement-system',
    title: 'AI Body Measurement System',
    category: 'Deep Learning',
      type: 'Deep Learning · Computer Vision · Multi-Input Regression',
    context: 'Self-Practice',
    featured: false,
    description:
        'An end-to-end computer vision application that estimates 14 body measurements in centimetres from front and side photographs plus gender, height, and weight metadata. It combines background removal, silhouette preprocessing, a multi-input Keras regression model, FastAPI inference, and transparent clothing-size heuristics.',
    problem:
        'Estimating body measurements from photographs requires combining complementary front and side views with personal metadata while handling background clutter, image format differences, pose, clothing, and camera conditions. Clothing-size recommendations also need to remain transparent rather than being presented as a learned or universal sizing authority.',
    solution:
        'Built a dual-branch CNN with global average pooling for 128×128 grayscale silhouettes, fused with gender, height, and weight inputs. The model predicts 14 continuous measurements, then FastAPI maps them to generic T-shirt and pants sizes using explicit measurement charts and apparel rules.',
    contribution:
        'Designed and trained the multi-input regression model, implemented background removal and silhouette normalization, added request and image validation, integrated Keras inference with FastAPI, built the browser workflow with previews and progress feedback, and implemented transparent clothing-size recommendations.',
      tech: [
        'Python',
        'TensorFlow',
        'Keras',
        'Computer Vision',
        'OpenCV',
        'rembg',
        'Pillow',
        'FastAPI',
        'HTML',
        'CSS',
        'JavaScript',
        'Jupyter Notebook',
      ],
    githubUrl: 'https://github.com/mu-3mar/ai-body-measurement',
    hasDemo: false,
    demoUrl: '',
    hasDocker: false,
    dockerHubUrl: '',
    image: '/images/projects/project-ai-body-measurement-cover.png',
    implementationPoints: [
      'Accepted one front-view and one side-view JPEG or PNG image together with gender, height, weight, and apparel type.',
      'Validated metadata, MIME types, and actual image contents before inference; temporary uploaded files are removed after the request.',
      'Removed image backgrounds with rembg and converted each person into a white grayscale silhouette on a black background.',
      'Resized both silhouettes to 128×128 and scaled pixel values to the [0, 1] range.',
      'Designed separate CNN branches for front and side silhouettes, then fused their representations with metadata inputs.',
      'Predicted ankle, arm-length, bicep, calf, chest, forearm, height, hip, leg-length, shoulder-breadth, shoulder-to-crotch, thigh, waist, and wrist.',
      'Used EarlyStopping, ReduceLROnPlateau, and ModelCheckpoint during training.',
      'Mapped predictions to generic T-shirt and pants sizes using explicit chest, shoulder, waist, hip, height, and weight rules.',
      'Provided health and prediction endpoints plus a browser interface with image previews, API status, progress feedback, and error messages.',
    ],
    dataset: {
      title: 'Dataset & Body Measurement Targets',
      source: 'BodyM dataset originally hosted on AWS Open Data',
      stats: [
        { label: 'Subjects', value: '2,505' },
        { label: 'Silhouette Images', value: '8,978' },
        { label: 'Model Outputs', value: '14' },
        { label: 'Input Views', value: 'Front + Side' },
      ],
      notes:
        'The dataset includes front and lateral/side views, height, weight, gender metadata, and 14 target measurements in centimetres. The original images and personal body information are not included or redistributed in the repository.',
    },
    mlWorkflow: {
      dataPrep: [
        'Prepared front and side image inputs as 128×128 grayscale silhouettes.',
        'Verified JPEG/PNG content, removed backgrounds with rembg, composited white subjects on black backgrounds, and scaled pixels to [0, 1].',
        'Combined the two image views with gender, height_cm, and weight_kg metadata.',
        'Used a 10% validation split with random_state=15 and batch size 8.',
        'Kept the 14 continuous body measurements as the multi-output regression targets.',
      ],
      modelDev: [
        'Built two convolutional silhouette branches with global average pooling.',
        'Concatenated visual representations with metadata before dense regression layers.',
        'Applied dropout and L2 regularization to support generalization.',
        'Trained for up to 60 epochs with ReduceLROnPlateau and EarlyStopping with restored best weights.',
        'Saved the application checkpoint as artifacts/models/best_model.keras and loaded it at FastAPI startup.',
        'Added a separate transparent sizing layer instead of treating apparel size as a learned classification output.',
      ],
    },
    evaluation: {
      lead: 'Recorded validation results from the available training run:',
      metrics: [
        { label: 'Validation MAE', value: '2.8598 cm' },
        { label: 'Best Validation Loss', value: '40.7038' },
        { label: 'Early Stopping', value: 'Epoch 22' },
        { label: 'Restored Checkpoint', value: 'Epoch 17' },
        { label: 'Max Epochs', value: '60' },
      ],
      tradeoffTitle: 'Validation Result, Not Guaranteed Accuracy',
      tradeoffExplanation:
        'The recorded validation run reached an aggregate MAE of 2.8598 cm across 14 measurements. It is averaged over one validation split, not an independently verified test result, and the lowest MAE occurred at epoch 22 while val_loss restored the epoch-17 checkpoint.',
      caveat:
        'Independent subject-disjoint test performance is not currently reported. Results can vary with pose, clothing, camera angle, lighting, background removal, and subjects outside the training distribution. The model has no calibrated confidence score.',
    },
    disclaimer:
      'Educational computer-vision demonstration, not a medical device, professional tailoring service, or production sizing engine. Do not use the output for medical decisions, safety-critical applications, or irreversible purchases without independent measurement.',
  },
    {
    slug: 'sign-language-recognition',
    title: 'Sign Language Recognition',
    category: 'Computer Vision',
    type: 'Computer Vision · Deep Learning · Real-Time Inference',
    context: 'Self-Practice',
    featured: false,
    description:
      'An end-to-end real-time American Sign Language alphabet recognizer that detects one hand from a webcam, converts its 21 landmarks into a normalized 63-value feature vector, and classifies isolated signs with a PyTorch 1D CNN. The result is exposed through FastAPI with browser and OpenCV clients, temporal stabilization, text accumulation, and English spell correction.',
    problem:
      'Hand landmark predictions can fluctuate between frames because of pose, lighting, camera angle, and visually similar signs. A practical recognizer needs consistent wrist-relative features, confidence filtering, temporal stability checks, and text actions while clearly distinguishing isolated alphabet signs from continuous sign-language sentences.',
    solution:
      'Built a real-time pipeline using MediaPipe Hands, wrist-relative and scale normalization, and a PyTorch CNN1D classifier. Added a 0.75 confidence threshold, prediction buffering and stability checks, space/delete actions, reset behavior, and spell correction before returning the current text and inference metadata.',
    contribution:
      'Implemented landmark extraction and normalization, trained and loaded the CNN checkpoint with its label encoder, built FastAPI validation and inference routes, integrated browser and OpenCV webcam clients, developed temporal stability and text actions, and added unit and optional load-testing coverage.',
    tech: [
      'Python',
      'MediaPipe',
      'PyTorch',
      'OpenCV',
      'FastAPI',
      'NumPy',
      'scikit-learn',
      'pyspellchecker',
      'Webcam Inference',
      'CNN1D',
    ],
    githubUrl: 'https://github.com/mu-3mar/sign-language-recognition',
    hasDemo: false,
    demoUrl: '',
    hasDocker: false,
    dockerHubUrl: '',
    image: '/images/projects/project-sign-language-recognition-cover.png',
    implementationPoints: [
      'Captured webcam frames in the browser or through an OpenCV desktop client and sent encoded images to POST /ws.',
      'Detected one hand and extracted 21 landmarks with x, y, and z coordinates.',
      'Normalized landmarks relative to the wrist and applied scale normalization to produce 63 stable values.',
      'Classified the normalized vector with a CPU-compatible PyTorch CNN1D with optional CUDA acceleration.',
      'Applied a default 0.75 confidence threshold and temporal buffering to reduce accidental characters.',
      'Supported isolated A-Z alphabet signs plus space and del actions when those labels exist in the loaded model.',
      'Returned current text, predicted sign, confidence, FPS, stability, and action feedback from the API.',
      'Added /health and /reset endpoints, Swagger documentation, request validation, and error handling.',
      'Covered normalization, stability, actions, frame processing, reset behavior, and API errors with tests.',
    ],
    dataset: {
      title: 'Dataset & Landmark Features',
      source: 'Privately collected ASL landmark dataset (the repository also documents a reference dataset)',
      stats: [
        { label: 'Sign Scope', value: 'A-Z' },
        { label: 'Landmarks', value: '21' },
        { label: 'Numeric Features', value: '63' },
        { label: 'Task', value: 'Isolated Sign Classification' },
      ],
      notes:
        'The training CSV is expected at data/landmarks.csv with 63 landmark columns and one label column. The private source data is not included because of data-privacy considerations. The current model recognizes isolated static signs, not continuous sign-language sentences.',
    },
    mlWorkflow: {
      dataPrep: [
        'Collected one-hand landmark samples with 21 landmarks and three coordinates per landmark.',
        'Normalized every sample relative to the wrist and applied scale normalization.',
        'Created an augmented subset equal to 20% of the original samples using noise, scaling, and small in-plane rotation.',
        'Encoded sign labels with LabelEncoder and preserved the label order with the checkpoint.',
        'Split the resulting data into 80% training and 20% validation using stratification and random_state=42.',
      ],
      modelDev: [
        'Trained a PyTorch CNN1D for four epochs with Adam, learning_rate=0.001, and batch size 32.',
        'Saved the model checkpoint as models/cnn_asl_model_full.pth and labels as models/label_encoder_classes.npy.',
        'Loaded the checkpoint and label encoder as a matched pair at inference time.',
        'Applied confidence thresholding, prediction buffering, and stability checks before accepting a character.',
        'Connected the model to FastAPI POST /ws, browser webcam capture, and an OpenCV client.',
        'Added text accumulation, repeated-letter handling, space/delete actions, reset state, and spell correction.',
      ],
    },
    evaluation: {
      lead: 'The current repository does not claim a final accuracy percentage:',
      metrics: [
        { label: 'Confidence Threshold', value: '0.75' },
        { label: 'Validation Split', value: '80/20' },
        { label: 'Training Epochs', value: '4' },
        { label: 'Classes', value: 'A-Z' },
      ],
      tradeoffTitle: 'Confidence Is Not Accuracy',
      tradeoffExplanation:
        'The confidence value returned by the API is the model softmax confidence for the current prediction, not an independently measured accuracy score. The runtime ignores predictions below 0.75 to favor stable text over uncertain characters.',
      caveat:
        'A reproducible final accuracy report, independent held-out test score, confusion matrix, and per-class precision/recall/F1 are not currently stored. Future evaluation should use a subject-independent split and document latency and hardware conditions.',
    },
    disclaimer:
      'This project recognizes isolated static signs rather than continuous sign-language sentences. The private dataset is not included and should not be redistributed without permission.',
  },
  {
    slug: 'hotel-booking-cancellation-prediction',
    title: 'Hotel Booking Cancellation Prediction',
    category: 'Machine Learning',
    type: 'Machine Learning',
    context: 'Internship · Cellula Technology',
    disabled: true,
    disabledNote: 'This project is being prepared and will be added soon.',
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
    hasDemo: false,
    demoUrl: '',
    hasDocker: false,
    dockerHubUrl: '',
    image: '/images/projects/project-hotel-booking-cancellation-cover.png',
    implementationPoints: [
      'Cleaned and validated 500K+ structured hotel booking records, resolving missing values and class imbalance.',
      'Constructed domain-focused features capturing customer lead times, seasonality, and previous cancellation tendencies.',
      'Trained and evaluated cross-validated classification models, reaching 87% overall accuracy and 0.91 F1-score on cancellations.',
      'Packaged the trained model into a production-ready FastAPI endpoint with an interactive local interface.',
    ],
  },

]
