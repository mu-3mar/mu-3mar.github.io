import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { profileConfig } from '../config/profile.config'
import { themeConfig } from '../config/theme.config'
import { projects } from '../config/projects.config'
import { FloatingLogoField } from '../components/common/FloatingLogoField'
import { SectionHeader } from '../components/common/SectionHeader'
import { ProjectCard } from '../components/common/ProjectCard'

export const HomePage: React.FC = () => {
  const [avatarError, setAvatarError] = useState(false)
  const { name, title, heroSubtitle, heroSummary } = profileConfig
  const { avatarUrl, avatarPlaceholder } = themeConfig.branding

  // Dynamically select featured projects (or fallback to first 4 projects)
  const previewProjects = projects.filter((p) => p.featured)
  const displayProjects = previewProjects.length > 0 ? previewProjects : projects.slice(0, 4)

  return (
    <>
      <section className="hero-section page-section">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-name">{name}</span>
          </h1>
          <p className="hero-professional-title">{title}</p>
          <h2 className="hero-headline">{heroSubtitle}</h2>
          <p className="hero-summary">{heroSummary}</p>
          <div className="cta-row">
            <Link className="primary-button" to="/projects">
              Explore Projects <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-ambient">
            <img
              src={avatarError ? avatarPlaceholder : avatarUrl}
              alt={name}
              onError={() => setAvatarError(true)}
            />
          </div>
        </div>
      </section>

      <section className="page-section tech-stack-shell" aria-label="Technology stack">
        <FloatingLogoField variant="home" />
      </section>

      <section className="page-section">
        <SectionHeader eyebrow="Selected work" title="Featured projects" />
        <div className="project-grid">
          {displayProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>
    </>
  )
}
