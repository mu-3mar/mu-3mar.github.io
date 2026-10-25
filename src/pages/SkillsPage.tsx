import React, { useState } from 'react'
import { List, Orbit } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'
import { FloatingLogoField, resolveSkillIcon } from '../components/common/FloatingLogoField'
import { skillCategories } from '../config/skills.config'

type ViewMode = 'field' | 'list'

export const SkillsPage: React.FC = () => {
  const [view, setView] = useState<ViewMode>('field')
  const isList = view === 'list'
  const ToggleIcon = isList ? Orbit : List

  return (
    <section className="page-section">
      <div className="skills-head">
        <SectionHeader eyebrow="Capabilities" title="Technical skills" />
        <button
          type="button"
          className={`view-toggle${isList ? ' is-active' : ''}`}
          onClick={() => setView(isList ? 'field' : 'list')}
          aria-label={isList ? 'Switch to floating logo view' : 'Switch to ordered list view'}
          title={isList ? 'Floating view' : 'List view'}
        >
          <ToggleIcon aria-hidden={true} />
          <span>{isList ? 'Floating view' : 'List view'}</span>
        </button>
      </div>

      {isList ? (
        <div className="skill-list">
          {skillCategories.map((category) => {
            const GroupIcon = resolveSkillIcon(category.iconKey)
            return (
              <article className="skill-group" key={category.group}>
                <header className="skill-group-head">
                  <span className="skill-group-icon">
                    <GroupIcon aria-hidden={true} />
                  </span>
                  <h3>{category.group}</h3>
                  <span className="skill-group-count">{category.items.length}</span>
                </header>
                <ul className="skill-items">
                  {category.items.map((item) => {
                    const ItemIcon = resolveSkillIcon(item.iconKey)
                    return (
                      <li className="skill-item" key={item.name}>
                        <span className="skill-item-icon">
                          <ItemIcon aria-hidden={true} />
                        </span>
                        <span className="skill-item-name">{item.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      ) : (
        <FloatingLogoField variant="skills" />
      )}
    </section>
  )
}
