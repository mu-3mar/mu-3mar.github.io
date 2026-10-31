import React, { useEffect } from 'react'
import { useParams, Navigate, Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  AlertCircle,
  Database,
  Cpu,
  BarChart3,
  Box,
} from 'lucide-react'
import { SiGithub, SiDocker } from '@icons-pack/react-simple-icons'
import { projects } from '../config/projects.config'
import { ProjectImage } from '../components/common/ProjectImage'
import { SectionHeader } from '../components/common/SectionHeader'
import { ProjectCard } from '../components/common/ProjectCard'

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams()
  const location = useLocation()
  const project = projects.find((entry) => entry.slug === slug)

  useEffect(() => {
    if (location.hash !== '#project-demo' || !project?.videoUrl) {
      return
    }

    document.getElementById('project-demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash, project?.videoUrl])

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  if (project.disabled) {
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
            <p className="eyebrow" style={{ margin: 0 }}>{project.category}</p>
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
          {project.hasDemo && (project.demoUrl || project.videoUrl) && (
            project.videoUrl ? (
              <a className="primary-button" href="#project-demo" aria-label={`${project.title} Watch Demo`}>
                <ExternalLink size={18} aria-hidden={true} />
                <span>Watch Demo</span>
                <ArrowRight size={18} />
              </a>
            ) : (
              <a
                className="primary-button"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} Live Demo`}
              >
                <ExternalLink size={18} aria-hidden={true} />
                <span>Live Demo</span>
                <ArrowRight size={18} />
              </a>
            )
          )}
          {project.githubUrl && (
            <a
              className={project.hasDemo && (project.demoUrl || project.videoUrl) ? 'secondary-button' : 'primary-button'}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub Repository`}
            >
              <SiGithub size={18} aria-hidden={true} />
              <span>GitHub</span>
              {!(project.hasDemo && (project.demoUrl || project.videoUrl)) && <ArrowRight size={18} />}
            </a>
          )}
          {project.hasDocker && project.dockerHubUrl && (
            <a
              className="secondary-button"
              href={project.dockerHubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} Docker Hub`}
            >
              <SiDocker size={18} aria-hidden={true} />
              <span>Docker Hub</span>
            </a>
          )}
        </div>
      </div>

      {project.disclaimer && (
        <div className="project-alert-banner warning" role="region" aria-label="Healthcare Disclaimer">
          <div className="project-alert-header">
            <ShieldAlert size={18} className="project-alert-icon" aria-hidden="true" />
            <span className="project-alert-title">Healthcare Disclaimer</span>
          </div>
          <p className="project-alert-body">{project.disclaimer}</p>
        </div>
      )}

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

      {project.videoUrl && (
        <article className="project-demo-panel full-width" id="project-demo">
          <div className="panel-title-row">
            <ExternalLink size={20} className="panel-title-icon" aria-hidden="true" />
            <div>
              <h2>Project Demo</h2>
              <p className="panel-lead">Watch the real-time quality control system in action.</p>
            </div>
          </div>
          <div className="project-video-frame">
            <video
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster={project.image}
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support embedded video playback.
            </video>
          </div>
        </article>
      )}

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

      {project.dataset && (
        <article className="detail-panel full-width">
          <div className="panel-title-row">
            <Database size={20} className="panel-title-icon" aria-hidden="true" />
            <h2>{project.dataset.title || 'Dataset & Health Indicators'}</h2>
          </div>
          <p className="panel-lead"><strong>Source:</strong> {project.dataset.source}</p>

          <div className="project-stat-grid">
            {project.dataset.stats.map((stat) => (
              <div key={stat.label} className="project-stat-card">
                <span className="project-stat-value">{stat.value}</span>
                <span className="project-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {project.dataset.notes && (
            <div className="project-note-box" style={{ marginTop: '1rem' }}>
              <p>{project.dataset.notes}</p>
            </div>
          )}
        </article>
      )}

      {project.mlWorkflow && (
        <article className="detail-panel full-width">
          <div className="panel-title-row">
            <Cpu size={20} className="panel-title-icon" aria-hidden="true" />
            <h2>Machine Learning Workflow</h2>
          </div>

          <div className="detail-grid" style={{ gap: '1.2rem', marginTop: '0.6rem' }}>
            <div className="workflow-step">
              <h3 style={{ fontSize: '1.02rem', marginTop: '0', marginBottom: '0.6rem', color: 'var(--text)' }}>
                Data Preparation & Exploration
              </h3>
              <ul className="detail-list">
                {project.mlWorkflow.dataPrep.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="workflow-step">
              <h3 style={{ fontSize: '1.02rem', marginTop: '0', marginBottom: '0.6rem', color: 'var(--text)' }}>
                Model Development & Selection
              </h3>
              <ul className="detail-list">
                {project.mlWorkflow.modelDev.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      )}

      {project.evaluation && (
        <article className="detail-panel full-width">
          <div className="panel-title-row">
            <BarChart3 size={20} className="panel-title-icon" aria-hidden="true" />
            <h2>Model Evaluation</h2>
          </div>
          <p className="panel-lead">
            {project.evaluation.lead || (
              <>Final test results evaluated at decision threshold <strong>0.60</strong>:</>
            )}
          </p>

          <div className="project-stat-grid">
            {project.evaluation.metrics.map((m) => (
              <div key={m.label} className="project-stat-card">
                <span className="project-stat-value">{m.value}</span>
                <span className="project-stat-label">{m.label}</span>
              </div>
            ))}
          </div>

          {project.evaluation.tradeoffExplanation && (
            <div className="evaluation-tradeoff-box">
              <h3>{project.evaluation.tradeoffTitle || 'Performance Insights'}</h3>
              <p>{project.evaluation.tradeoffExplanation}</p>
            </div>
          )}

          {project.evaluation.caveat && (
            <div className="project-alert-banner info" style={{ marginTop: '1rem' }} role="region" aria-label="Evaluation Caveat">
              <div className="project-alert-header">
                <AlertCircle size={18} className="project-alert-icon" aria-hidden="true" />
                <span className="project-alert-title">Evaluation Caveat</span>
              </div>
              <p className="project-alert-body">{project.evaluation.caveat}</p>
            </div>
          )}
        </article>
      )}

      {project.dockerDetails && (
        <article className="detail-panel full-width">
          <div className="panel-title-row">
            <Box size={20} className="panel-title-icon" aria-hidden="true" />
            <h2>Docker & Deployment</h2>
          </div>
          <p>{project.dockerDetails.description}</p>

          <div className="docker-info-card">
            <span className="meta-label">Docker Image</span>
            <code className="docker-tag">{project.dockerDetails.imageTag}</code>
          </div>

          {project.dockerDetails.verificationNote && (
            <p className="meta-subtext" style={{ marginTop: '0.75rem' }}>
              {project.dockerDetails.verificationNote}
            </p>
          )}

          <div className="docker-card-actions">
            {project.hasDocker && project.dockerHubUrl && (
              <a
                className="secondary-button"
                href={project.dockerHubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View on Docker Hub"
              >
                <SiDocker size={18} aria-hidden={true} />
                <span>Docker Hub Repository</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </article>
      )}

      {project.implementationPoints && !project.mlWorkflow && (
        <div className="detail-grid">
          <article className="detail-panel">
            <h2>Implementation</h2>
            <ul className="detail-list">
              {project.implementationPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
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
      )}

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
