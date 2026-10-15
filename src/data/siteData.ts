/**
 * Backwards compatibility re-export.
 * All project, skills, experience, and profile data is now cleanly modularized in `src/config/`.
 */
import {
  profileConfig,
  projects as configProjects,
  technicalHighlights as configHighlights,
  skillCategories,
  experience as configExperience,
  education as configEducation,
  courses as configCourses,
  professionalAreas as configProfessionalAreas,
} from '../config'

export const personal = {
  initials: profileConfig.initials,
  firstName: profileConfig.firstName,
  name: profileConfig.name,
  title: profileConfig.title,
  role: profileConfig.role,
  copyrightYear: new Date().getFullYear(),
  headline: profileConfig.headline,
} as const

export type { Project } from '../config/projects.config'
export type ProjectCategory = string

export const technicalHighlights = configHighlights
export const projects = configProjects

export const about = {
  summary: profileConfig.aboutSummary,
  pillars: profileConfig.aboutPillars,
  technologies: profileConfig.technologiesSummary,
}

export const education = configEducation
export const professionalAreas = configProfessionalAreas
export const experience = configExperience
export const courses = configCourses
export const skills = skillCategories
