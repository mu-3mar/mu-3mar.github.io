import React, { useState } from 'react'
import { themeConfig } from '../../config/theme.config'

export const BrandLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false)
  const { logoType, logoUrl, logoText } = themeConfig.branding

  if (logoType === 'image' && logoUrl && !imgError) {
    return (
      <span className={`brand-logo-wrap ${className}`}>
        <img
          src={logoUrl}
          alt={logoText || 'Brand Logo'}
          className="brand-logo-img"
          onError={() => setImgError(true)}
        />
      </span>
    )
  }

  return (
    <span className={`brand-logo-wrap brand-logo-monogram ${className}`} aria-label={logoText}>
      <span className="monogram-text">{logoText || 'MA'}</span>
    </span>
  )
}
