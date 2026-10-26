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

  const isHtml = currentLogo && currentLogo.toLowerCase().includes('.html')

  if (logoType === 'image' && currentLogo && !imgError) {
    if (isHtml) {
      const baseUrl = currentLogo.split('?')[0]
      const iframeSrc = `${baseUrl}?theme=${theme}&v=4`

      return (
        <span className={`brand-logo-wrap ${className}`}>
          <iframe
            key={`${theme}-${baseUrl}`}
            src={iframeSrc}
            title={logoText || 'Brand Logo'}
            className="brand-logo-frame"
            scrolling="no"
            tabIndex={-1}
            aria-hidden="true"
            allowTransparency={true}
            style={{
              background: 'transparent',
              backgroundColor: 'transparent',
              border: 'none',
              colorScheme: 'normal',
            }}
          />
        </span>
      )
    }

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

