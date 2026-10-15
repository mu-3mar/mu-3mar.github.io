import React from 'react'
import { FileDown } from 'lucide-react'
import { SiGithub, SiKaggle } from '@icons-pack/react-simple-icons'
import { profileConfig } from '../../config/profile.config'

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" width="18" height="18">
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
        fill="currentColor"
      />
    </svg>
  )
}

interface SocialLinksProps {
  className?: string
  showResume?: boolean
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  showResume = true,
}) => {
  const { socials, resume } = profileConfig

  return (
    <div className={`social-links ${className}`} aria-label="Social links">
      {socials.github && (
        <a
          href={socials.github}
          className="social-link"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <SiGithub size={18} />
        </a>
      )}

      {socials.linkedin && (
        <a
          href={socials.linkedin}
          className="social-link"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      )}

      {socials.kaggle && (
        <a
          href={socials.kaggle}
          className="social-link"
          target="_blank"
          rel="noreferrer"
          aria-label="Kaggle"
          title="Kaggle"
        >
          <SiKaggle size={18} />
        </a>
      )}

      {showResume && resume.url && (
        <a
          href={resume.url}
          className="social-link resume-link"
          download={resume.downloadFilename}
          aria-label={resume.label}
          title={resume.label}
        >
          <FileDown size={18} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}
