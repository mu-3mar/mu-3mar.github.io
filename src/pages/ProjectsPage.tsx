import React, { useState } from 'react'
import { projects } from '../config/projects.config'
import { SectionHeader } from '../components/common/SectionHeader'
import { ProjectCard } from '../components/common/ProjectCard'

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Core categories ordered cleanly, plus any newly added categories in projects.config automatically
  const preferredOrder = ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
  const uniqueInProjects = Array.from(new Set(projects.map((project) => project.category)))
  const extraCategories = uniqueInProjects.filter((cat) => !preferredOrder.includes(cat))
  const categories = [
    'All',
    ...preferredOrder.filter((cat) => uniqueInProjects.includes(cat)),
    ...extraCategories,
  ]


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
