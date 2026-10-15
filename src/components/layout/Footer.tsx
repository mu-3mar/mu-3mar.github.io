import React from 'react'
import { profileConfig } from '../../config/profile.config'
import { footerConfig } from '../../config/navigation.config'

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <span>{profileConfig.name}</span>
      <span>
        {footerConfig.copyrightPrefix} {footerConfig.showYear ? new Date().getFullYear() : ''}{' '}
        {footerConfig.customNote}
      </span>
    </footer>
  )
}
