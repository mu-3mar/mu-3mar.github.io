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

export interface SkillCategory {
  group: string
  items: string[]
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
]

export const skillCategories: SkillCategory[] = [
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
    items: ['PyTorch', 'FastAPI', 'OpenCV', 'YOLO', 'MediaPipe', 'ONNX', 'TensorRT'],
  },
  {
    group: 'Libraries',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Keras'],
  },
  {
    group: 'Languages & Tools',
    items: ['Python', 'SQL', 'Docker', 'Git', 'GitHub', 'Linux'],
  },
  {
    group: 'Languages',
    items: ['Arabic (Native)', 'English (Professional)'],
  },
]

export const floatingTechnologyLogos: FloatingTechnology[] = [
  { name: 'Python', iconKey: 'Python', home: [14, 23, 48], skills: [14, 15, 58] },
  { name: 'NumPy', iconKey: 'Numpy', home: [22, 73, 38], skills: [25, 70, 42] },
  { name: 'Pandas', iconKey: 'Pandas', home: [44, 39, 52], skills: [46, 35, 46] },
  { name: 'Scikit-learn', iconKey: 'Scikitlearn', home: [62, 70, 52], skills: [68, 75, 50] },
  { name: 'PyTorch', iconKey: 'Pytorch', home: [82, 25, 46], skills: [84, 23, 48] },
  { name: 'TensorFlow', iconKey: 'Tensorflow', home: [84, 77, 54], skills: [84, 66, 42] },
  { name: 'Keras', iconKey: 'Keras', home: [14, 82, 34], skills: [15, 88, 38] },
  { name: 'OpenCV', iconKey: 'Opencv', home: [34, 54, 44], skills: [38, 56, 52] },
  { name: 'YOLO by Ultralytics', iconKey: 'Ultralytics', home: [55, 86, 40], skills: [55, 88, 44] },
  { name: 'MediaPipe', iconKey: 'Mediapipe', home: [74, 52, 36], skills: [76, 43, 38] },
  { name: 'FastAPI', iconKey: 'Fastapi', home: [14, 49, 40], skills: [14, 50, 44] },
  { name: 'Docker', iconKey: 'Docker', home: [30, 10, 36], skills: [29, 11, 38] },
  { name: 'ONNX', iconKey: 'Onnx', home: [47, 64, 34], skills: [51, 69, 36] },
  { name: 'Firebase', iconKey: 'Firebase', home: [68, 13, 40], skills: [72, 10, 42] },
  { name: 'Git', iconKey: 'Git', home: [82, 55, 40], skills: [83, 48, 38] },
  { name: 'GitHub', iconKey: 'Github', home: [41, 88, 34], skills: [35, 85, 34] },
  { name: 'Linux', iconKey: 'Linux', home: [84, 19, 34], skills: [85, 30, 36] },
]
