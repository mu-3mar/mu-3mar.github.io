/**
 * Navigation & Footer Configuration
 */

export interface NavItem {
  to: string
  label: string
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const footerConfig = {
  copyrightPrefix: '©',
  showYear: true,
  customNote: '',
}
