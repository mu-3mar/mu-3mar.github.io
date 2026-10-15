import React, { useState } from 'react'
import { themeConfig } from '../../config/theme.config'

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, className = '' }) => {
  const [hasError, setHasError] = useState(false)
  const placeholder = themeConfig.branding.projectPlaceholder

  if (hasError) {
    if (placeholder && placeholder !== src) {
      return (
        <img
          src={placeholder}
          alt={alt}
          className={`project-img-rendered ${className}`}
          loading="lazy"
        />
      )
    }
    return (
      <div
        className={`project-image-empty ${className}`}
        role="img"
        aria-label={`${alt} image preview`}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`project-img-rendered ${className}`}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  )
}
