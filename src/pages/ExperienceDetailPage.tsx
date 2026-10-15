import React from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { experience } from '../config/experience.config'

export const ExperienceDetailPage: React.FC = () => {
  const { slug } = useParams()
  const entry = experience.find((item) => item.slug === slug)

  if (!entry) return <Navigate to="/about" replace />

  return (
    <section className="page-section experience-detail-page">
      <Link className="back-link" to="/about">
        ← About
      </Link>
      <div className="detail-header">
        <div>
          <p className="eyebrow">Project-based experience</p>
          <h1>{entry.company}</h1>
          <p className="experience-meta">
            {entry.role} · {entry.period} {entry.location ? `· ${entry.location}` : ''}
          </p>
        </div>
      </div>
      <div className="experience-project-grid">
        {entry.projects.map((project) => (
          <article className="detail-panel" key={project.name}>
            <h2>{project.name}</h2>
            <ul className="detail-list">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            {project.slug && (
              <div className="project-experience-link-wrap">
                <Link to={`/projects/${project.slug}`} className="project-experience-link">
                  View project details <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
