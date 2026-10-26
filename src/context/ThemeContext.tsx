import React, { createContext, useContext, useEffect, useState } from 'react'
import { themeConfig } from '../config/theme.config'

type ThemeMode = 'dark' | 'light'

interface ThemeContextType {
  theme: ThemeMode
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = 'portfolio-theme'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    // 1. Check localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
      if (stored === 'dark' || stored === 'light') {
        return stored
      }
      // 2. Check system preference if configured
      if (themeConfig.defaultTheme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
    }
    return (themeConfig.defaultTheme === 'light' ? 'light' : 'dark')
  })

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)

    // Apply color tokens from themeConfig dynamically
    const colors = themeConfig.colors[theme]
    root.style.setProperty('--bg', colors.bg)
    root.style.setProperty('--bg-soft', colors.bgSoft)
    root.style.setProperty('--panel', colors.panel)
    root.style.setProperty('--panel-strong', colors.panelStrong)
    root.style.setProperty('--panel-hover', colors.panelHover)
    root.style.setProperty('--border', colors.border)
    root.style.setProperty('--border-subtle', colors.borderSubtle)
    root.style.setProperty('--header-bg', colors.headerBg)
    root.style.setProperty('--text', colors.text)
    root.style.setProperty('--muted', colors.muted)
    root.style.setProperty('--soft', colors.soft)
    root.style.setProperty('--placeholder', colors.placeholder)
    root.style.setProperty('--accent', colors.accent)
    root.style.setProperty('--accent-fg', colors.accentFg)
    if (colors.accentHover) root.style.setProperty('--accent-hover', colors.accentHover)
    if (colors.accentActive) root.style.setProperty('--accent-active', colors.accentActive)
    root.style.setProperty('--accent-soft', colors.accentSoft)
    root.style.setProperty('--accent-strong', colors.accentStrong)
    root.style.setProperty('--accent-glow', colors.accentGlow)
    root.style.setProperty('--accent-text', colors.accentText)
    root.style.setProperty('--danger', colors.danger)
    root.style.setProperty('--success', colors.success)
    root.style.setProperty('--shadow-card', colors.shadowCard)
    root.style.setProperty('--ambient-top-gradient', colors.ambientGradient)
    if (colors.portraitGlow) root.style.setProperty('--portrait-glow', colors.portraitGlow)
  }, [theme])

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
