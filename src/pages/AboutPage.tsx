import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { profileConfig } from '../config/profile.config'
import { themeConfig } from '../config/theme.config'
import { education, experience, courses } from '../config/experience.config'
import { SectionHeader } from '../components/common/SectionHeader'

export const AboutPage: React.FC = () => {
  const { theme } = useTheme()
  const [avatarError, setAvatarError] = useState(false)
  const { name, aboutSummary } = profileConfig
  const { avatarUrl, avatarDarkUrl, avatarLightUrl, avatarPlaceholder } = themeConfig.branding

  const currentAvatar =
    theme === 'light'
      ? (avatarLightUrl || avatarUrl)
      : (avatarDarkUrl || avatarUrl)

  return (
    <section className="page-section about-page">
      <SectionHeader eyebrow="Profile" title="About me" />

      <div className="about-spotlight">
        <div className="about-copy">
          <p>{aboutSummary}</p>
        </div>
        <div className="portrait-stack">
          <img
            key={theme}
            src={avatarError ? avatarPlaceholder : currentAvatar}
            alt={name}
            onError={() => setAvatarError(true)}
          />
        </div>
      </div>

      <div className="about-info-grid">
        <article className="detail-panel">
          <h3>Education</h3>
          {education.map((item) => (
            <div className="timeline-item" key={item.school}>
              <div className="timeline-dot" />
              <div>
                <strong>{item.school}</strong>
                <p>{item.details}</p>
                <p>{item.degree}</p>
                <small>{item.period}</small>
              </div>
            </div>
          ))}
        </article>

        <article className="detail-panel">
          <h3>Experience</h3>
          {experience.map((job) => (
            <Link
              className="timeline-item experience-link"
              key={job.company}
              to={`/experience/${job.slug}`}
            >
              <div className="timeline-dot" />
              <div>
                <strong>{job.company}</strong>
                <p>{job.role}</p>
                <small>{job.period}</small>
                <small>Project-based work · View project details</small>
              </div>
            </Link>
          ))}
        </article>

        <article className="detail-panel">
          <h3>Courses & Certifications</h3>
          <ul className="detail-list">
            {courses.map((course) => (
              <li key={course.title}>
                <strong>{course.provider}</strong>: {course.title}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
