/**
 * Backwards compatibility re-export.
 * All configuration is now cleanly separated in `src/config/`
 */
import { profileConfig } from './profile.config'

export const siteConfig = {
  name: profileConfig.name,
  title: profileConfig.title,
  email: profileConfig.contact.email,
  phone: profileConfig.contact.phone,
  phoneHref: profileConfig.contact.phoneHref,
  githubUrl: profileConfig.socials.github,
  linkedinUrl: profileConfig.socials.linkedin,
  kaggleUrl: profileConfig.socials.kaggle,
  dockerHubUrl: profileConfig.socials.docker,
  resumeUrl: profileConfig.resume.url,
} as const
