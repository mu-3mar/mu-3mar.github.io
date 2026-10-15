import React, { useState } from 'react'
import { projects } from '../config/projects.config'
import { SectionHeader } from '../components/common/SectionHeader'
import { ProjectCard } from '../components/common/ProjectCard'

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Derive unique categories dynamically from the projects config
  const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))]

  const visibleProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="page-section">
      <SectionHeader eyebrow="Portfolio" title="Selected projects" />

      <div className="filter-row" role="tablist" aria-label="Project categories">
        {categories.map((filter) => (
          <button
            key={filter}
            type="button"
            className={selectedCategory === filter ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setSelectedCategory(filter)}
            aria-pressed={selectedCategory === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
