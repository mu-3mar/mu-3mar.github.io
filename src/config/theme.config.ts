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
  accentSoft: string
  accentStrong: string
  accentGlow: string
  accentText: string
  danger: string
  success: string
  shadowCard: string
  ambientGradient: string
}

export interface ThemeConfig {
  defaultTheme: 'dark' | 'light' | 'system'
  branding: {
    /** 'image' will use the logoUrl; 'text' will render initials/text */
    logoType: 'image' | 'text'
    /** Path to site logo (in /public or external URL) */
    logoUrl: string
    /** Fallback monogram or text logo */
    logoText: string
    /** Path to profile avatar / portrait image */
    avatarUrl: string
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
    logoUrl: '/images/logo-placeholder.svg',
    logoText: 'MA',
    avatarUrl: '/images/avatar-placeholder.svg',
    avatarPlaceholder: '/images/avatar-placeholder.svg',
    projectPlaceholder: '/images/projects/placeholder-project.svg',
  },

  colors: {
    dark: {
      bg: '#111111',
      bgSoft: '#18181b',
      panel: 'rgba(245, 245, 245, 0.025)',
      panelStrong: 'rgba(245, 245, 245, 0.05)',
      panelHover: 'rgba(245, 245, 245, 0.075)',
      border: 'rgba(245, 245, 245, 0.12)',
      borderSubtle: 'rgba(245, 245, 245, 0.07)',
      headerBg: 'rgba(17, 17, 17, 0.82)',
      text: '#F5F5F5',
      muted: 'rgba(245, 245, 245, 0.76)',
      soft: 'rgba(245, 245, 245, 0.58)',
      placeholder: 'rgba(245, 245, 245, 0.38)',
      // Unified brand gold (#FFC006)
      accent: '#FFC006',
      accentFg: '#FFC006',
      accentSoft: 'rgba(255, 192, 6, 0.14)',
      accentStrong: 'rgba(255, 192, 6, 0.24)',
      accentGlow: 'rgba(255, 192, 6, 0.18)',
      accentText: '#111111', // Deep black text & icons on gold button/fill
      danger: '#ff8080',
      success: '#86efac',
      shadowCard: '0 8px 30px rgba(0, 0, 0, 0.35)',
      ambientGradient: 'radial-gradient(circle at top, rgba(255, 192, 6, 0.08), transparent 35%)',
    },
    light: {
      bg: '#f8fafc',
      bgSoft: '#ffffff',
      panel: '#ffffff',
      panelStrong: '#f1f5f9',
      panelHover: '#f8fafc',
      border: 'rgba(15, 23, 42, 0.12)',
      borderSubtle: 'rgba(15, 23, 42, 0.07)',
      headerBg: 'rgba(248, 250, 252, 0.88)',
      text: '#0f172a',
      muted: '#334155',
      soft: '#64748b',
      placeholder: '#94a3b8',
      // Unified brand gold (#FFC006) for solid buttons and badges
      accent: '#FFC006',
      // Deepened brand gold for text on white backgrounds to guarantee high contrast
      accentFg: '#946800',
      accentSoft: 'rgba(255, 192, 6, 0.20)',
      accentStrong: 'rgba(255, 192, 6, 0.32)',
      accentGlow: 'rgba(255, 192, 6, 0.22)',
      accentText: '#111111', // Deep black text & icons on gold button/fill
      danger: '#dc2626',
      success: '#16a34a',
      shadowCard: '0 4px 20px rgba(0, 0, 0, 0.06)',
      ambientGradient: 'radial-gradient(circle at top, rgba(255, 192, 6, 0.10), transparent 40%)',
    },
  },
}
