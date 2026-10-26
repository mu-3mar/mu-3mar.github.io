/**
 * Theme & Branding Configuration
 * 
 * Customize colors, typography, logos, and default theme modes here.
 * Any changes made here are immediately applied across the entire site.
 */

export interface ThemeColors {
  bg: string
  bgSoft: string
  panel: string
  panelStrong: string
  panelHover: string
  border: string
  borderSubtle: string
  headerBg: string
  text: string
  muted: string
  soft: string
  placeholder: string
  accent: string
  accentFg: string
  accentHover?: string
  accentActive?: string
  accentSoft: string
  accentStrong: string
  accentGlow: string
  accentText: string
  danger: string
  success: string
  shadowCard: string
  ambientGradient: string
  portraitGlow?: string
}

export interface ThemeConfig {
  defaultTheme: 'dark' | 'light' | 'system'
  branding: {
    /** 'image' will use the logoUrl; 'text' will render initials/text */
    logoType: 'image' | 'text'
    /** Path to site logo (in /public or external URL) */
    logoUrl: string
    /** Logo specifically for dark theme */
    logoDarkUrl?: string
    /** Logo specifically for light theme */
    logoLightUrl?: string
    /** Fallback monogram or text logo */
    logoText: string
    /** Path to profile avatar / portrait image (fallback or default) */
    avatarUrl: string
    /** Avatar specifically for dark theme */
    avatarDarkUrl?: string
    /** Avatar specifically for light theme */
    avatarLightUrl?: string
    /** Fallback avatar placeholder */
    avatarPlaceholder: string
    /** Default project card cover placeholder */
    projectPlaceholder: string
  }
  colors: {
    dark: ThemeColors
    light: ThemeColors
  }
}

export const themeConfig: ThemeConfig = {
  defaultTheme: 'dark',

  branding: {
    logoType: 'image',
    logoUrl: '/logo-animated.html',
    logoDarkUrl: '/logo-animated.html',
    logoLightUrl: '/logo-animated.html',
    logoText: 'MA',
    avatarUrl: '/images/profile_dark_theme.png?v=2',
    avatarDarkUrl: '/images/profile_dark_theme.png?v=2',
    avatarLightUrl: '/images/profile_light_theme.png?v=2',
    avatarPlaceholder: '/images/avatar-placeholder.svg',
    projectPlaceholder: '/images/projects/placeholder-project.svg',
  },

  colors: {
    dark: {
      bg: '#141211',
      bgSoft: '#1C1816',
      panel: '#211B18',
      panelStrong: '#2A221E',
      panelHover: '#2E2521',
      border: '#382A25',
      borderSubtle: '#2D221E',
      headerBg: 'rgba(20, 18, 17, 0.85)',
      text: '#FFF8F5',
      muted: '#C7BBB5',
      soft: '#A99A93',
      placeholder: 'rgba(199, 187, 181, 0.40)',
      // Unified brand Orange-Red (#F04B24)
      accent: '#F04B24',
      accentFg: '#F04B24',
      accentHover: '#FF7048',
      accentActive: '#D93C1A',
      accentSoft: 'rgba(240, 75, 36, 0.15)',
      accentStrong: 'rgba(240, 75, 36, 0.28)',
      accentGlow: 'rgba(240, 75, 36, 0.20)',
      accentText: '#FFFFFF', // High-contrast white text & icons on brand button/fill
      danger: '#ff6b6b',
      success: '#4ade80',
      shadowCard: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      ambientGradient: 'radial-gradient(circle at top, rgba(240, 75, 36, 0.10), transparent 38%)',
      portraitGlow: 'radial-gradient(circle at center, rgba(240, 75, 36, 0.16), transparent 62%)',
    },
    light: {
      bg: '#FFF8F5',
      bgSoft: '#F7EEE9',
      panel: '#FFFFFF',
      panelStrong: '#F3E8E2',
      panelHover: '#FAF2ED',
      border: '#EBDCD5',
      borderSubtle: 'rgba(41, 32, 29, 0.06)',
      headerBg: 'rgba(255, 248, 245, 0.88)',
      text: '#29201D',
      muted: '#6E625C',
      soft: '#806D64',
      placeholder: 'rgba(41, 32, 29, 0.38)',
      // Unified brand Orange-Red (#F04B24)
      accent: '#F04B24',
      accentFg: '#D93C1A', // Refined for WCAG AA text/icon readability on light background
      accentHover: '#D93C1A',
      accentActive: '#A92D19',
      accentSoft: 'rgba(240, 75, 36, 0.10)',
      accentStrong: 'rgba(240, 75, 36, 0.22)',
      accentGlow: 'rgba(240, 75, 36, 0.12)',
      accentText: '#FFFFFF', // High-contrast white text & icons on brand button/fill
      danger: '#dc2626',
      success: '#16a34a',
      shadowCard: '0 4px 20px rgba(41, 32, 29, 0.06)',
      ambientGradient: 'radial-gradient(circle at top, rgba(240, 75, 36, 0.08), transparent 40%)',
      portraitGlow: 'radial-gradient(circle at center, rgba(240, 75, 36, 0.14), transparent 65%)',
    },
  },
}
