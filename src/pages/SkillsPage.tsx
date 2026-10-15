import React from 'react'
import { technicalHighlights, skillCategories } from '../config/skills.config'
import { SectionHeader } from '../components/common/SectionHeader'
import { FloatingLogoField } from '../components/common/FloatingLogoField'

export const SkillsPage: React.FC = () => {
  return (
    <section className="page-section skills-page">
      <SectionHeader eyebrow="Capabilities" title="Technical skills" />

      {/* Floating interactive technology icons */}
      <div className="skills-floating-container">
        <FloatingLogoField variant="skills" />
      </div>

      {/* Technical Focus Highlights */}
      <div className="skills-highlights-grid">
        {technicalHighlights.map((highlight) => (
          <div className="detail-panel highlight-card" key={highlight.title}>
            <div className="highlight-icon-badge">{highlight.icon}</div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Categorized Skills Taxonomy */}
      <div className="skill-groups-container">
        <SectionHeader eyebrow="Expertise" title="Tools & Technologies" />
        <div className="skill-groups-grid">
          {skillCategories.map((cat) => (
            <article className="detail-panel skill-category-card" key={cat.group}>
              <h3>{cat.group}</h3>
              <div className="chip-row">
                {cat.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
