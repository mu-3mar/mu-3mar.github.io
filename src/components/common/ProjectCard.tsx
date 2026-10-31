import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { SiGithub, SiDocker } from '@icons-pack/react-simple-icons'
import type { Project } from '../../config/projects.config'
import { ProjectImage } from './ProjectImage'

interface ProjectCardProps {
  project: Project
  compact?: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact = false }) => {
  return (
    <article className={`${compact ? 'project-card compact' : 'project-card'}${project.disabled ? ' project-card-disabled' : ''}`}>
      {project.disabled ? (
        <div className="project-visual project-visual-disabled" aria-label={`${project.title} is unavailable`}>
          <ProjectImage src={project.image} alt={project.title} />
          <span className="project-disabled-badge">Coming soon</span>
        </div>
      ) : (
        <Link
          to={`/projects/${project.slug}`}
          className="project-visual"
          aria-label={`Open ${project.title}`}
        >
          <ProjectImage src={project.image} alt={project.title} />
        </Link>
      )}

      <div className="project-body">
        <div className="project-meta">
          <span className="project-category-badge">{project.category}</span>
          {project.context && <span className="project-context-tag">{project.context}</span>}
        </div>

        {project.disabled ? (
          <h3 className="project-title-disabled">{project.title}</h3>
        ) : (
          <Link to={`/projects/${project.slug}`} className="project-title-link">
            <h3>{project.title}</h3>
          </Link>
        )}

        <p>{project.description}</p>

        {project.disabled && (
          <p className="project-disabled-note" role="status">
            {project.disabledNote || 'This project will be available soon.'}
          </p>
        )}

        <div className="chip-row">
          {project.tech.slice(0, 4).map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.disabled ? (
            <span className="project-action-disabled" aria-disabled="true">
              Project unavailable <ArrowRight size={16} />
            </span>
          ) : (
            <Link to={`/projects/${project.slug}`}>
              View project <ArrowRight size={16} />
            </Link>
          )}
          <div className="project-action-links">
            {project.disabled && (
              <span className="project-action-disabled" aria-disabled="true">
                <ExternalLink size={16} aria-hidden={true} />
                <span>Demo</span>
              </span>
            )}
            {project.disabled && project.hasDocker && (
              <span className="project-action-disabled" aria-disabled="true">
                <SiDocker size={16} aria-hidden={true} />
                <span>Docker</span>
              </span>
            )}
            {project.disabled && project.githubUrl && (
              <span className="project-action-disabled" aria-disabled="true">
                <SiGithub size={16} aria-hidden={true} />
                <span>GitHub</span>
              </span>
            )}
            {project.hasDemo && (project.demoUrl || project.videoUrl) && (
              !project.disabled && project.videoUrl ? (
              <Link
                to={`/projects/${project.slug}#project-demo`}
                aria-label={`${project.title} Live Demo`}
                title="Live Demo"
              >
                <ExternalLink size={16} aria-hidden={true} />
                <span>Demo</span>
              </Link>
              ) : !project.disabled ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} Live Demo`}
                  title="Live Demo"
                >
                  <ExternalLink size={16} aria-hidden={true} />
                  <span>Demo</span>
                </a>
              ) : null
            )}
            {!project.disabled && project.hasDocker && project.dockerHubUrl && (
              <a
                href={project.dockerHubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} Docker Hub`}
                title="Docker Hub"
              >
                <SiDocker size={16} aria-hidden={true} />
                <span>Docker</span>
              </a>
            )}
            {!project.disabled && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub Repository`}
                title="GitHub"
              >
                <SiGithub size={16} aria-hidden={true} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
