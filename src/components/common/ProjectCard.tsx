import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import type { Project } from '../../config/projects.config'
import { ProjectImage } from './ProjectImage'

interface ProjectCardProps {
  project: Project
  compact?: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact = false }) => {
  return (
    <article className={compact ? 'project-card compact' : 'project-card'}>
      <Link
        to={`/projects/${project.slug}`}
        className="project-visual"
        aria-label={`Open ${project.title}`}
      >
        <ProjectImage src={project.image} alt={project.title} />
      </Link>

      <div className="project-body">
        <div className="project-meta">
          <span className="project-category-badge">{project.category}</span>
          {project.context && <span className="project-context-tag">{project.context}</span>}
        </div>



        <Link to={`/projects/${project.slug}`} className="project-title-link">
          <h3>{project.title}</h3>
        </Link>

        <p>{project.description}</p>

        <div className="chip-row">
          {project.tech.slice(0, 4).map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <Link to={`/projects/${project.slug}`}>
            View project <ArrowRight size={16} />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              title="GitHub"
            >
              <SiGithub size={18} aria-hidden={true} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
