import React from 'react'
import { FileDown } from 'lucide-react'
import { SiGithub, SiDocker } from '@icons-pack/react-simple-icons'
import { profileConfig } from '../../config/profile.config'

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" width="22" height="22">
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
        fill="currentColor"
      />
    </svg>
  )
}

export function KaggleIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" width={size} height={size} fill="currentColor">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.141-.141.305-.211.492-.211h3.139c.188 0 .29.094.305.281a.332.332 0 0 1-.094.25l-5.043 5.122 5.341 6.8c.141.164.211.328.211.492z" />
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
          <SiGithub size={22} />
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

      {socials.docker && (
        <a
          href={socials.docker}
          className="social-link"
          target="_blank"
          rel="noreferrer"
          aria-label="Docker Hub"
          title="Docker Hub"
        >
          <SiDocker size={22} />
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
          <KaggleIcon size={22} />
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
          <FileDown size={22} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}
