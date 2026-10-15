import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  )
}
