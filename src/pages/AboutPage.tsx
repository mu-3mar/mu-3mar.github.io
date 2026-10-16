import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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
        <div className="portrait-ambient about-portrait">
          <img
            key={theme}
            src={avatarError ? avatarPlaceholder : currentAvatar}
            alt={name}
            onError={() => setAvatarError(true)}
          />
        </div>
      </div>

      <div className="about-info-grid">
        {/* Education Panel */}
        <article className="detail-panel about-card-panel">
          <div className="panel-header">
            <h3>Education</h3>
          </div>
          <div className="card-panel-content">
            <div className="timeline-track">
              {education.map((item) => {
                const isActive = item.current || item.period?.toLowerCase().includes('present')
                return (
                  <div className="timeline-node" key={item.school}>
                    <div
                      className={`timeline-dot ${isActive ? 'active' : ''}`}
                      title={isActive ? 'Currently studying' : undefined}
                    />
                    <div className="timeline-body">
                      <strong>{item.school}</strong>
                      <p>{item.details}</p>
                      <p>{item.degree}</p>
                      <small>{item.period}</small>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </article>

        {/* Experience Panel */}
        <article className="detail-panel about-card-panel">
          <div className="panel-header">
            <h3>Experience</h3>
          </div>
          <div className="card-panel-content">
            <div className="timeline-track">
              {experience.map((job) => {
                const isJobActive =
                  job.current ||
                  job.period?.toLowerCase().includes('present') ||
                  job.roles?.some((r) => r.current || r.period.toLowerCase().includes('present'))

                return (
                  <div className="timeline-node" key={job.company}>
                    <div
                      className={`timeline-dot ${isJobActive ? 'active' : ''}`}
                      title={isJobActive ? 'Current company / role' : undefined}
                    />
                    <Link
                      className="experience-link-card"
                      to={`/experience/${job.slug}`}
                      title={`View ${job.company} projects and details`}
                    >
                      <div className="experience-link-content">
                        <div className="experience-link-header">
                          <strong>{job.company}</strong>
                          <span className="experience-badge">
                            {job.projects.length} Projects <ArrowRight size={14} />
                          </span>
                        </div>

                        {job.roles && job.roles.length > 0 ? (
                          <div className="experience-roles-track">
                            {job.roles.map((r, idx) => {
                              const isSubActive = r.current || r.period.toLowerCase().includes('present')
                              return (
                                <div key={idx} className="experience-role-item">
                                  <div className="role-subdot-wrapper">
                                    <span className={`role-subdot ${isSubActive ? 'active' : ''}`} />
                                  </div>
                                  <div className="role-subinfo">
                                    <span className="role-subtitle">{r.title}</span>
                                    <small className="role-subperiod">{r.period}</small>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        ) : (
                          <>
                            <p className="experience-link-role">{job.role}</p>
                            <small className="experience-link-period">
                              {job.period} {job.location ? `· ${job.location}` : ''}
                            </small>
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </article>

        {/* Courses & Certifications Panel */}
        <article className="detail-panel about-card-panel">
          <div className="panel-header">
            <h3>Courses & Certifications</h3>
          </div>
          <div className="card-panel-content">
            <ul className="detail-list">
              {courses.map((course) => (
                <li key={course.title}>
                  <strong>{course.provider}</strong>: {course.title}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
