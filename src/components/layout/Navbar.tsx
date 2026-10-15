import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../config/navigation.config'
import { BrandLogo } from '../common/BrandLogo'
import { SocialLinks } from '../common/SocialLinks'
import { ThemeToggle } from './ThemeToggle'

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Go to home page">
          <BrandLogo />
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <SocialLinks />

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mobile-actions-bar">
            <SocialLinks />
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  )
}
