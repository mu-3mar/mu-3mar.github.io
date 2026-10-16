import React from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { experience } from '../config/experience.config'
import { projects } from '../config/projects.config'
import { ProjectCard } from '../components/common/ProjectCard'

export const ExperienceDetailPage: React.FC = () => {
  const { slug } = useParams()
  const entry = experience.find((item) => item.slug === slug)

  if (!entry) return <Navigate to="/about" replace />

  // Filter projects associated with this experience entry
  const companyProjects = projects.filter(
    (p) =>
      p.companySlug === entry.slug ||
      entry.projects?.some((ep) => ep.slug === p.slug || ep.name.toLowerCase() === p.title.toLowerCase())
  )

  const rolesDisplay =
    entry.roles && entry.roles.length > 0
      ? entry.roles.map((r) => r.title).join(' · ')
      : entry.role

  const periodDisplay =
    entry.period ||
    (entry.roles && entry.roles.length > 0
      ? `${entry.roles[entry.roles.length - 1].period.split('–')[0].trim()} – ${
          entry.roles[0].period.split('–')[1]?.trim() || 'Present'
        }`
      : '')

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
            {rolesDisplay}
            {periodDisplay ? ` · ${periodDisplay}` : ''}
            {entry.location ? ` · ${entry.location}` : ''}
          </p>
        </div>
      </div>
      <div className="project-grid experience-detail-grid">
        {companyProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

