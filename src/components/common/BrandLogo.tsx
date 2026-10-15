import React, { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { themeConfig } from '../../config/theme.config'

export const BrandLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme } = useTheme()
  const [imgError, setImgError] = useState(false)
  const { logoType, logoUrl, logoDarkUrl, logoLightUrl, logoText } = themeConfig.branding

  const currentLogo =
    theme === 'light'
      ? (logoLightUrl || logoUrl)
      : (logoDarkUrl || logoUrl)

  if (logoType === 'image' && currentLogo && !imgError) {
    return (
      <span className={`brand-logo-wrap ${className}`}>
        <img
          key={theme}
          src={currentLogo}
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

