import React from 'react'
import { SectionHeader } from '../components/common/SectionHeader'
import { FloatingLogoField } from '../components/common/FloatingLogoField'

export const SkillsPage: React.FC = () => {
  return (
    <section className="page-section">
      <SectionHeader eyebrow="Capabilities" title="Technical skills" />
      <FloatingLogoField variant="skills" />
    </section>
  )
}
