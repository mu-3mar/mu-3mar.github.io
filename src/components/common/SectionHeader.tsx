import React from 'react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, className = '' }) => {
  return (
    <div className={`section-heading ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}
