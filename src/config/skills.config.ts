/**
 * Skills & Technical Capabilities Configuration
 *
 * Edit your skill groups, technical highlights, and floating logos here.
 */

export interface TechnicalHighlight {
  title: string
  description: string
  icon: string
}

export interface SkillItem {
  name: string
  iconKey: string
}

export interface SkillCategory {
  group: string
  iconKey: string
  items: SkillItem[]
}

export interface FloatingTechnology {
  name: string
  iconKey: string
  home: [number, number, number] // [leftPercent, topPercent, sizePx]
  skills: [number, number, number] // [leftPercent, topPercent, sizePx]
}

export const technicalHighlights: TechnicalHighlight[] = [
  {
    title: 'Machine Learning',
    description:
      'Supervised classification and regression, feature engineering, model comparison, and evaluation on structured datasets.',
    icon: 'ML',
  },
  {
    title: 'Deep Learning',
    description:
      'CNN-based classification and multi-input, multi-output neural networks built with PyTorch and TensorFlow/Keras.',
    icon: 'DL',
  },
  {
    title: 'Computer Vision',
    description:
      'Object detection, hand-landmark extraction, image preprocessing, and temporal stabilization for vision pipelines.',
    icon: 'CV',
  },
  {
    title: 'Data Analysis',
    description:
      'Exploratory data analysis, data cleaning, statistical analysis, feature preparation, and visualization for modeling.',
    icon: 'DA',
  },
  {
    title: 'Inference & Integration',
    description:
      'Reusable preprocessing and prediction pipelines, FastAPI inference endpoints, model serialization, and optimized ONNX inference workflows.',
    icon: 'AI',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    group: 'Machine Learning',
    iconKey: 'Brain',
    items: [
      { name: 'Supervised Learning', iconKey: 'Target' },
      { name: 'Classification', iconKey: 'Shapes' },
      { name: 'Regression', iconKey: 'TrendingUp' },
      { name: 'Ensemble Learning', iconKey: 'Layers' },
      { name: 'Feature Engineering', iconKey: 'Puzzle' },
      { name: 'Data Preprocessing', iconKey: 'Funnel' },
      { name: 'Feature Encoding & Scaling', iconKey: 'Scale' },
      { name: 'Class Imbalance Handling', iconKey: 'Repeat' },
      { name: 'Model Evaluation', iconKey: 'Gauge' },
      { name: 'Cross-Validation', iconKey: 'GitFork' },
      { name: 'Hyperparameter Tuning', iconKey: 'SlidersHorizontal' },
    ],
  },
  {
    group: 'Deep Learning & Computer Vision',
    iconKey: 'Cpu',
    items: [
      { name: 'Neural Networks', iconKey: 'Network' },
      { name: 'Convolutional Neural Networks (CNNs)', iconKey: 'Grid2x2' },
      { name: 'Multi-Input Modeling', iconKey: 'GitMerge' },
      { name: 'Multi-Output Regression', iconKey: 'Waypoints' },
      { name: 'Object Detection', iconKey: 'ScanEye' },
      { name: 'Hand Landmark Extraction', iconKey: 'Aperture' },
      { name: 'Image Preprocessing', iconKey: 'Blend' },
      { name: 'Temporal Prediction Smoothing', iconKey: 'WavesHorizontal' },
    ],
  },
  {
    group: 'Frameworks & Technologies',
    iconKey: 'Boxes',
    items: [
      { name: 'PyTorch', iconKey: 'Pytorch' },
      { name: 'TensorFlow', iconKey: 'Tensorflow' },
      { name: 'Keras', iconKey: 'Keras' },
      { name: 'Scikit-learn', iconKey: 'Scikitlearn' },
      { name: 'FastAPI', iconKey: 'Fastapi' },
      { name: 'OpenCV', iconKey: 'Opencv' },
      { name: 'MediaPipe', iconKey: 'Mediapipe' },
      { name: 'YOLO', iconKey: 'Ultralytics' },
      { name: 'ONNX', iconKey: 'Onnx' },
      { name: 'TensorRT', iconKey: 'Nvidia' },
    ],
  },
  {
    group: 'Data & Scientific Libraries',
    iconKey: 'FlaskConical',
    items: [
      { name: 'NumPy', iconKey: 'Numpy' },
      { name: 'Pandas', iconKey: 'Pandas' },
      { name: 'Matplotlib', iconKey: 'Matplotlib' },
      { name: 'Seaborn', iconKey: 'Seaborn' },
      { name: 'SciPy', iconKey: 'Scipy' },
      { name: 'imbalanced-learn', iconKey: 'Scale' },
    ],
  },
  {
    group: 'Inference & Development Tools',
    iconKey: 'Terminal',
    items: [
      { name: 'REST APIs', iconKey: 'Server' },
      { name: 'Model Serialization', iconKey: 'Package' },
      { name: 'Batch Inference', iconKey: 'Boxes' },
      { name: 'Real-Time Video Processing', iconKey: 'Film' },
      { name: 'Asynchronous Processing', iconKey: 'Clock' },
      { name: 'Git', iconKey: 'Git' },
      { name: 'GitHub', iconKey: 'Github' },
      { name: 'Linux', iconKey: 'Linux' },
      { name: 'Joblib', iconKey: 'Binary' },
      { name: 'Docker', iconKey: 'Docker' },
      { name: 'Firebase Realtime Database', iconKey: 'Firebase' },
    ],
  },
  {
    group: 'Programming Languages',
    iconKey: 'CodeXml',
    items: [
      { name: 'Python', iconKey: 'Python' },
      { name: 'SQL', iconKey: 'Database' },
    ],
  },
  {
    group: 'Spoken Languages',
    iconKey: 'Languages',
    items: [
      { name: 'Arabic (Native)', iconKey: 'Languages' },
      { name: 'English (B1)', iconKey: 'Globe' },
    ],
  },
]

export const floatingTechnologyLogos: FloatingTechnology[] = [
  { name: 'Python', iconKey: 'Python', home: [13, 10, 48], skills: [29, 49, 58] },
  { name: 'NumPy', iconKey: 'Numpy', home: [60, 14, 38], skills: [52, 89, 42] },
  { name: 'Pandas', iconKey: 'Pandas', home: [29, 9, 52], skills: [43, 66, 46] },
  { name: 'Scikit-learn', iconKey: 'Scikitlearn', home: [38, 91, 52], skills: [8, 72, 50] },
  { name: 'PyTorch', iconKey: 'Pytorch', home: [61, 86, 46], skills: [64, 54, 48] },
  { name: 'TensorFlow', iconKey: 'Tensorflow', home: [18, 91, 54], skills: [35, 26, 42] },
  { name: 'Keras', iconKey: 'Keras', home: [64, 57, 34], skills: [29, 74, 38] },
  { name: 'OpenCV', iconKey: 'Opencv', home: [85, 74, 44], skills: [18, 91, 52] },
  { name: 'Ultralytics YOLO', iconKey: 'Ultralytics', home: [44, 17, 40], skills: [45, 9, 44] },
  { name: 'MediaPipe', iconKey: 'Mediapipe', home: [28, 66, 36], skills: [85, 64, 38] },
  { name: 'FastAPI', iconKey: 'Fastapi', home: [13, 59, 40], skills: [14, 23, 44] },
  { name: 'ONNX', iconKey: 'Onnx', home: [84, 45, 34], skills: [14, 45, 36] },
  { name: 'TensorRT', iconKey: 'Nvidia', home: [37, 44, 40], skills: [26, 9, 42] },
  { name: 'Git', iconKey: 'Git', home: [73, 26, 40], skills: [64, 77, 38] },
  { name: 'GitHub', iconKey: 'Github', home: [53, 40, 34], skills: [79, 15, 34] },
  { name: 'Linux', iconKey: 'Linux', home: [22, 37, 34], skills: [90, 27, 36] },
  { name: 'Docker', iconKey: 'Docker', home: [48, 67, 42], skills: [71, 33, 44] },
  { name: 'Firebase Realtime Database', iconKey: 'Firebase', home: [92, 21, 40], skills: [51, 42, 42] },
]
