import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { education } from '../config/experience.config'
import { projects } from '../config/projects.config'
import { ProjectCard } from '../components/common/ProjectCard'

export const AcademicDetailPage: React.FC = () => {
  const { slug } = useParams()
  const academicEntry = education.find((item) => item.projectSlug === slug)
  const project = projects.find((item) => item.slug === slug)

  if (!academicEntry || !project) {
    return <Navigate to="/about" replace />
  }

  return (
    <section className="page-section experience-detail-page">
      <Link className="back-link" to="/about">
        ← About
      </Link>
      <div className="detail-header">
        <div>
          <p className="eyebrow">Academic Journey</p>
          <h1>Graduation Project from Bachelor's</h1>
          <p className="experience-meta">
            {academicEntry.degree} · {academicEntry.school}
          </p>
        </div>
      </div>
      <div className="project-grid experience-detail-grid">
        <ProjectCard project={project} backTo={`/academic/${academicEntry.projectSlug}`} />
      </div>
    </section>
  )
}
