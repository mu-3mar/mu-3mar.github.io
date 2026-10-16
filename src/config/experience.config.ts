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
  /**
   * Optional: projects are automatically linked via `companySlug` in projects.config.ts.
   * You do not need to duplicate project details here.
   */
  projects?: ExperienceProject[]
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
  },
]

export const education: EducationItem[] = [
  {
    school: 'Mansoura University',
    degree: "Bachelor's Degree in Computer Science",
    period: '2022 – Jul 2026',
    details: 'Faculty of Computer and Information Science · Department of Computer Science',
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
