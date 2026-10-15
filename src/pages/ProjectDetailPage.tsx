import React from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { projects } from '../config/projects.config'
import { ProjectImage } from '../components/common/ProjectImage'
import { SectionHeader } from '../components/common/SectionHeader'
import { ProjectCard } from '../components/common/ProjectCard'

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  // Related projects: exclude current project and select up to 2
  const relatedProjects = projects
    .filter((entry) => entry.slug !== project.slug)
    .sort((a, _b) => (a.category === project.category ? -1 : 1))
    .slice(0, 2)

  return (
    <section className="page-section project-detail-page">
      <div className="detail-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <p className="eyebrow" style={{ margin: 0 }}>{project.type}</p>
            {project.context && <span className="project-context-tag">{project.context}</span>}
          </div>
          <h1>{project.title}</h1>

          {project.company && project.companySlug ? (
            <p className="project-company-tag">
              Developed during internship at{' '}
              <Link to={`/experience/${project.companySlug}`} className="company-tag-link">
                {project.company} →
              </Link>
            </p>
          ) : null}
        </div>
        <div className="detail-actions">
          {project.githubUrl && (
            <a
              className="primary-button"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
            >
              <SiGithub size={18} aria-hidden={true} />
              <span>GitHub</span>
              <ArrowRight size={18} />
            </a>
          )}
          {project.demoUrl ? (
            <a
              className="secondary-button"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>

      <div className="detail-hero">
        <div className="detail-image-wrap">
          <ProjectImage src={project.image} alt={project.title} />
        </div>
        <div className="detail-summary">
          <div className="summary-block">
            <span className="meta-label">Problem</span>
            <p>{project.problem}</p>
          </div>
          <div className="summary-block">
            <span className="meta-label">Solution</span>
            <p>{project.solution}</p>
          </div>
          {project.contribution ? (
            <div className="summary-block">
              <span className="meta-label">Contribution</span>
              <p>{project.contribution}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="detail-grid">
        <article className="detail-panel">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </article>

        <article className="detail-panel">
          <h2>Technologies</h2>
          <div className="chip-row">
            {project.tech.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>

      <div className="detail-grid">
        <article className="detail-panel">
          <h2>Implementation</h2>
          <ul className="detail-list">
            {project.implementationPoints && project.implementationPoints.length > 0 ? (
              project.implementationPoints.map((point) => <li key={point}>{point}</li>)
            ) : (
              <>
                <li>Data preparation and validation using the project’s primary signal sources.</li>
                <li>Feature engineering and modeling decisions shaped around the task objective.</li>
                <li>Training, evaluation, and iterative improvement based on measurable outcomes.</li>
                <li>Inference and integration into a usable interface or API workflow.</li>
              </>
            )}
          </ul>
        </article>

        <article className="detail-panel">
          <h2>Engineering focus</h2>
          <ul className="detail-list">
            {project.tech.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      {relatedProjects.length > 0 ? (
        <div className="related-projects">
          <SectionHeader eyebrow="More work" title="Related projects" />
          <div className="project-grid two-up">
            {relatedProjects.map((relatedProject) => (
              <ProjectCard key={relatedProject.slug} project={relatedProject} compact />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
