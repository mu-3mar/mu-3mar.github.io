import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const NotFoundPage: React.FC = () => {
  return (
    <section className="page-section not-found">
      <h1>Page not found</h1>
      <p>The page you requested does not exist or has been moved.</p>
      <Link className="primary-button" to="/">
        Return home <ArrowRight size={18} />
      </Link>
    </section>
  )
}
