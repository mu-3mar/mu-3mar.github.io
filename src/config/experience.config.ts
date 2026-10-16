/**
 * Experience, Education & Certifications Configuration
 * 
 * Edit your past roles, graduation degrees, and certificates here.
 */

export interface ExperienceProject {
  name: string
  slug?: string
  details: string[]
}

export interface CompanyRole {
  title: string
  period: string
  current?: boolean
}

export interface WorkExperience {
  slug: string
  company: string
  /** Single role or primary role */
  role?: string
  /** Single role period */
  period?: string
  /** Whether currently working at this company */
  current?: boolean
  /** Support multiple roles / career promotions within the same company */
  roles?: CompanyRole[]
  location?: string
  projects: ExperienceProject[]
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  details: string
  /** Whether currently studying here */
  current?: boolean
}

export interface CourseCertification {
  provider: string
  title: string
  link?: string
}

export const experience: WorkExperience[] = [
  {
    slug: 'cellula-technology',
    company: 'Cellula Technology',
    role: 'Machine Learning Intern',
    period: 'Oct 2025 – Dec 2025',
    location: 'Remote',
    projects: [
      {
        name: 'Hotel Booking Cancellation Prediction',
        slug: 'hotel-booking-cancellation-prediction',
        details: [
          'Built a classification pipeline on 500K+ hotel booking records, achieving 87% accuracy and 0.91 F1-score on the minority class.',
          'Handled data cleaning, exploratory analysis, feature engineering, model training, and evaluation.',
          'Integrated the model into a FastAPI REST API with a lightweight HTML interface for local predictions.',
        ],
      },
      {
        name: 'Uber Fare Prediction',
        slug: 'uber-fare-prediction',
        details: [
          'Built a regression pipeline on 1M+ trip records using gradient boosting, achieving R² of 0.74 and MAE of 1.01.',
          'Handled data cleaning, exploratory analysis, feature engineering, model training, and evaluation.',
          'Integrated the model into a FastAPI REST API with a lightweight HTML interface for local predictions.',
        ],
      },
    ],
  },
]

export const education: EducationItem[] = [
  {
    school: 'Mansoura University',
    degree: "Bachelor's Degree in Computer Science",
    period: '2022 – 2026',
    details: 'Faculty of Computer and Information Science · Department of Computer Science',
    current: true,
  },
]


export const courses: CourseCertification[] = [
  { provider: 'deeplearning.ai', title: 'Machine Learning Specialization' },
  { provider: 'deeplearning.ai', title: 'Deep Learning Specialization' },
  { provider: 'deeplearning.ai', title: 'Machine Learning in Production' },
  { provider: 'CSkilled', title: 'Machine Learning Diploma' },
]

export const professionalAreas: string[] = [
  'Classification',
  'Regression',
  'Deep Learning',
  'Computer Vision',
  'Feature Engineering',
  'Model Evaluation',
  'Model Deployment',
  'FastAPI integrations',
]
