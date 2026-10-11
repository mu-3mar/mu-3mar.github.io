import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import {
  ArrowRight,
  FileDown,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react'
import {
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiKeras,
  SiLinux,
  SiMediapipe,
  SiNumpy,
  SiOnnx,
  SiOpencv,
  SiPandas,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
  SiUltralytics,
} from '@icons-pack/react-simple-icons'
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import './App.css'
import portrait from './assets/portrait.png'
import { siteConfig } from './config/siteConfig'
import { about, courses, education, experience, projects } from './data/siteData'

const technologyLogos = [
  { name: 'Python', Icon: SiPython, home: [14, 23, 48], skills: [14, 15, 58] },
  { name: 'NumPy', Icon: SiNumpy, home: [22, 73, 38], skills: [25, 70, 42] },
  { name: 'Pandas', Icon: SiPandas, home: [44, 39, 52], skills: [46, 35, 46] },
  { name: 'Scikit-learn', Icon: SiScikitlearn, home: [62, 70, 52], skills: [68, 75, 50] },
  { name: 'PyTorch', Icon: SiPytorch, home: [82, 25, 46], skills: [84, 23, 48] },
  { name: 'TensorFlow', Icon: SiTensorflow, home: [84, 77, 54], skills: [84, 66, 42] },
  { name: 'Keras', Icon: SiKeras, home: [14, 82, 34], skills: [15, 88, 38] },
  { name: 'OpenCV', Icon: SiOpencv, home: [34, 54, 44], skills: [38, 56, 52] },
  { name: 'YOLO by Ultralytics', Icon: SiUltralytics, home: [55, 86, 40], skills: [55, 88, 44] },
  { name: 'MediaPipe', Icon: SiMediapipe, home: [74, 52, 36], skills: [76, 43, 38] },
  { name: 'FastAPI', Icon: SiFastapi, home: [14, 49, 40], skills: [14, 50, 44] },
  { name: 'Docker', Icon: SiDocker, home: [30, 10, 36], skills: [29, 11, 38] },
  { name: 'ONNX', Icon: SiOnnx, home: [47, 64, 34], skills: [51, 69, 36] },
  { name: 'Firebase', Icon: SiFirebase, home: [68, 13, 40], skills: [72, 10, 42] },
  { name: 'Git', Icon: SiGit, home: [82, 55, 40], skills: [83, 48, 38] },
  { name: 'GitHub', Icon: SiGithub, home: [41, 88, 34], skills: [35, 85, 34] },
  { name: 'Linux', Icon: SiLinux, home: [84, 19, 34], skills: [85, 30, 36] },
] as const

function FloatingLogoField({ variant }: { variant: 'home' | 'skills' }) {
  return (
    <div className={`logo-field logo-field-${variant}`} role="list" aria-label="Technology logos">
      {technologyLogos.map(({ name, Icon, home, skills }, index) => {
        const [left, top, size] = variant === 'home' ? home : skills
        return (
          <span
            className={`floating-logo float-path-${index % 4}`}
            key={name}
            role="listitem"
            aria-label={name}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${index * -1.17}s`,
              animationDuration: `${10 + (index % 5) * 2.4}s`,
            }}
          >
            <Icon aria-hidden="true" />
          </span>
        )
      })}
    </div>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img">
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
        fill="currentColor"
      />
    </svg>
  )
}

function KaggleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img">
      <path
        fill="currentColor"
        d="M5.25 4 H8.75 V11.5 L16.25 4 H18.75 L11.25 12 L18.75 20 H16.25 L8.75 12.5 V20 H5.25 Z"
      />
    </svg>
  )
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) return <div className="project-image-empty" role="img" aria-label={`${alt} image not yet supplied`} />

  return <img src={src} alt={alt} onError={() => setHasError(true)} loading="lazy" />
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { href: siteConfig.githubUrl, label: 'GitHub', icon: SiGithub },
    { href: siteConfig.linkedinUrl, label: 'LinkedIn', icon: LinkedInIcon },
    { href: siteConfig.kaggleUrl, label: 'Kaggle', icon: KaggleIcon },
  ].filter(({ href }) => Boolean(href))

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Go to home page">
            <span className="brand-logo" role="img" aria-label="Personal logo" />
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="social-links" aria-label="Social links">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a key={label} href={href} className="social-link" target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
            {siteConfig.resumeUrl ? (
              <a className="social-link resume-link" href={siteConfig.resumeUrl} aria-label="Download CV" download="Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf">
                <FileDown aria-hidden="true" />
              </a>
            ) : null}
          </div>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="mobile-menu" id="mobile-menu">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mobile-socials">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon />
                </a>
              ))}
              {siteConfig.resumeUrl ? (
                <a href={siteConfig.resumeUrl} aria-label="Download CV" download="Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf">
                  <FileDown aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>{siteConfig.name}</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

function HomePage() {
  const previewProjects = projects.slice(0, 3)

  return (
    <>
      <section className="hero-section page-section">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-name">{siteConfig.name}</span>
          </h1>
          <p className="hero-professional-title">{siteConfig.title}</p>
          <h2 className="hero-headline">From Data to Deployed ML Models</h2>
          <p className="hero-summary">
            I build machine learning pipelines for classification, regression, and computer vision — from data preparation
            and feature engineering to model evaluation and FastAPI deployment.
          </p>
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
            <img src={portrait} alt="Muhammad Ammar" />
          </div>
        </div>
      </section>

      <section className="page-section tech-stack-shell" aria-label="Technology stack">
        <FloatingLogoField variant="home" />
      </section>

      <section className="page-section">
        <SectionHeader eyebrow="Selected work" title="Featured projects" />
        <div className="project-grid">
          {previewProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>
    </>
  )
}

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const filters = ['All', ...new Set(projects.map((project) => project.category))]

  const visibleProjects =
    selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="page-section">
      <SectionHeader eyebrow="Portfolio" title="Selected projects" />

      <div className="filter-row" role="tablist" aria-label="Project categories">
        {filters.map((filter) => (
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

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const relatedProjects = projects.filter((entry) => entry.slug !== project.slug).slice(0, 2)

  return (
    <section className="page-section project-detail-page">
      <div className="detail-header">
        <div>
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
        </div>
        <div className="detail-actions">
          <a className="primary-button" href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub <ArrowRight size={18} />
          </a>
          {project.demoUrl ? (
            <a className="secondary-button" href={project.demoUrl} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          ) : null}
        </div>
      </div>

      <div className="detail-hero">
        <div className="detail-image-wrap">
          <ProjectImage src={project.image} alt={project.title} />
        </div>
        <div className="detail-summary">
          <div className="summary-block">
            <span className="meta-label">Problem</span>
            <p>{project.problem}</p>
          </div>
          <div className="summary-block">
            <span className="meta-label">Solution</span>
            <p>{project.solution}</p>
          </div>
          {project.contribution ? (
            <div className="summary-block">
              <span className="meta-label">Contribution</span>
              <p>{project.contribution}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="detail-grid">
        <article className="detail-panel">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </article>

        <article className="detail-panel">
          <h2>Technologies</h2>
          <div className="chip-row">
            {project.tech.map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>
        </article>
      </div>

      <div className="detail-grid">
        <article className="detail-panel">
          <h2>Implementation</h2>
          <ul className="detail-list">
            <li>Data preparation and validation using the project’s primary signal sources.</li>
            <li>Feature engineering and modeling decisions shaped around the task objective.</li>
            <li>Training, evaluation, and iterative improvement based on measurable outcomes.</li>
            <li>Inference and integration into a usable interface or API workflow.</li>
          </ul>
        </article>

        <article className="detail-panel">
          <h2>Engineering focus</h2>
          <ul className="detail-list">
            {project.tech.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      {relatedProjects.length ? (
        <div className="related-projects">
          <SectionHeader eyebrow="More work" title="Related projects" />
          <div className="project-grid two-up">
            {relatedProjects.map((relatedProject) => (
              <ProjectCard key={relatedProject.slug} project={relatedProject} compact />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

function ExperienceDetailPage() {
  const { slug } = useParams()
  const entry = experience.find((item) => item.slug === slug)

  if (!entry) return <Navigate to="/about" replace />

  return (
    <section className="page-section experience-detail-page">
      <Link className="back-link" to="/about">← About</Link>
      <div className="detail-header">
        <div>
          <p className="eyebrow">Project-based experience</p>
          <h1>{entry.company}</h1>
          <p className="experience-meta">{entry.role} · {entry.period}</p>
        </div>
      </div>
      <div className="experience-project-grid">
        {entry.projects.map((project) => (
          <article className="detail-panel" key={project.name}>
            <h2>{project.name}</h2>
            <ul className="detail-list">
              {project.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function SkillsPage() {
  return (
    <section className="page-section">
      <SectionHeader eyebrow="Capabilities" title="Technical skills" />
      <FloatingLogoField variant="skills" />
    </section>
  )
}

function AboutPage() {
  return (
    <section className="page-section about-page">
      <SectionHeader eyebrow="Profile" title="About me" />

      <div className="about-spotlight">
        <div className="about-copy">
          <p>{about.summary}</p>
        </div>
        <div className="portrait-stack">
          <img src={portrait} alt="Muhammad Ammar" />
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
            <Link className="timeline-item experience-link" key={job.company} to={`/experience/${job.slug}`}>
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
              <li key={course.title}><strong>{course.provider}</strong>: {course.title}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    if (submitState !== 'idle') {
      setSubmitState('idle')
      setSubmitMessage('')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitState('error')
      setSubmitMessage('Please complete all required fields before sending your message.')
      return
    }

    setSubmitState('submitting')
    setSubmitMessage('Sending your message...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Unable to send the message at the moment.')
      }

      setSubmitState('success')
      setSubmitMessage(result.message || 'Your message was sent successfully.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitState('error')
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending the message. Please try again later.',
      )
    }
  }

  return (
    <section className="page-section">
      <SectionHeader eyebrow="Contact" title="Get in touch" />
      <div className="contact-layout">
        <div className="contact-card">
          <p>Want to chat about a project, research idea, or engineering opportunity?</p>
          <ul className="contact-list">
            <li>
              <Mail size={18} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <Phone size={18} />
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li>
              <SiGithub aria-hidden="true" />
              <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li>
              <LinkedInIcon />
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li>
              <KaggleIcon />
              <a href={siteConfig.kaggleUrl} target="_blank" rel="noreferrer">Kaggle</a>
            </li>
            {siteConfig.resumeUrl ? (
              <li>
                <FileDown size={18} />
                <a href={siteConfig.resumeUrl} download="Muhammad_Ammar_Machine_Learning_Engineer_Resume.pdf">Download CV</a>
              </li>
            ) : null}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            <span>Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
          </label>

          <label>
            <span>Subject</span>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry" required />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" rows={6} value={formData.message} onChange={handleChange} placeholder="Write your message..." required />
          </label>

          <button type="submit" className="primary-button submit-button" disabled={submitState === 'submitting'}>
            {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {submitMessage ? (
            <p className={submitState === 'success' ? 'form-status success' : 'form-status error'}>{submitMessage}</p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

function NotFoundPage() {
  return (
    <section className="page-section not-found">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="primary-button" to="/">
        Return home <ArrowRight size={18} />
      </Link>
    </section>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

function ProjectCard({ project, compact = false }: { project: (typeof projects)[number]; compact?: boolean }) {
  return (
    <article className={compact ? 'project-card compact' : 'project-card'}>
      <Link to={`/projects/${project.slug}`} className="project-visual" aria-label={`Open ${project.title}`}>
        <ProjectImage src={project.image} alt={project.title} />
      </Link>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.period || 'Project'}</span>
        </div>
        <Link to={`/projects/${project.slug}`} className="project-title-link">
          <h3>{project.title}</h3>
        </Link>
        <p>{project.description}</p>
        <div className="chip-row">
          {project.tech.slice(0, 4).map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
        </div>
        <div className="project-actions">
          <Link to={`/projects/${project.slug}`}>
            View project <ArrowRight size={16} />
          </Link>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  )
}

export default App
