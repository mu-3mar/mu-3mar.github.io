/**
 * Personal & Profile Information Configuration
 * 
 * Edit your details, headline, summary, contact channels, and resume link here.
 * Any updates here automatically update the Navbar, Hero, About page, Contact page, and Footer.
 */

export interface ProfileConfig {
  name: string
  firstName: string
  initials: string
  title: string
  role: string
  headline: {
    lineOne: string
    highlightWord: string
    lineTwo: string
  }
  heroSubtitle: string
  heroSummary: string
  aboutSummary: string
  aboutPillars: string[]
  technologiesSummary: string
  contact: {
    email: string
    phone: string
    phoneHref: string
    heading: string
    subheading: string
  }
  socials: {
    github: string
    linkedin: string
    kaggle: string
    twitter?: string
  }
  resume: {
    url: string
    downloadFilename: string
    label: string
  }
}

export const profileConfig: ProfileConfig = {
  name: 'Muhammad Ammar',
  firstName: 'Muhammad',
  initials: 'MA',
  title: 'Machine Learning Engineer',
  role: 'Machine Learning Engineer',

  headline: {
    lineOne: 'I build',
    highlightWord: 'intelligent',
    lineTwo: 'systems.',
  },

  heroSubtitle: 'From Data to Deployed ML Models',
  heroSummary:
    'I build machine learning pipelines for classification, regression, and computer vision — from data preparation and feature engineering to model evaluation and FastAPI deployment.',

  aboutSummary:
    'Machine Learning Engineer with hands-on experience building end-to-end machine learning solutions across classification, regression, and deep learning. Experienced in data preprocessing, feature engineering, model evaluation, and model optimization using Python and Scikit-learn. Also experienced in integrating ML models into FastAPI applications and building practical ML systems from data and modeling to inference.',

  aboutPillars: [
    'Computer vision',
    'End-to-end machine learning solutions',
    'Data preprocessing and feature engineering',
    'Model deployment and FastAPI integrations',
  ],

  technologiesSummary:
    'Python, SQL, NumPy, Pandas, Matplotlib, Scikit-learn, PyTorch, YOLO, ONNX, TensorRT, FastAPI, Docker, Git, GitHub, Linux',

  contact: {
    email: 'i.muhamad.amar@gmail.com',
    phone: '+20 104 432 2560',
    phoneHref: 'tel:+201044322560',
    heading: 'Get in touch',
    subheading: 'Want to chat about a project, research idea, or engineering opportunity?',
  },

  socials: {
    github: 'https://github.com/mu-3mar',
    linkedin: 'https://linkedin.com/in/mu-3mar',
    kaggle: 'https://www.kaggle.com/mohamedsayedamarmsa',
  },

  resume: {
    url: '/Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf',
    downloadFilename: 'Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf',
    label: 'Download CV',
  },
}
