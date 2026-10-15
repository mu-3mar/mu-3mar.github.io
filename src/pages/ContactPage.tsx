import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, Phone, FileDown, Send } from 'lucide-react'
import { SiGithub, SiKaggle } from '@icons-pack/react-simple-icons'
import { profileConfig } from '../config/profile.config'
import { SectionHeader } from '../components/common/SectionHeader'
import { LinkedInIcon } from '../components/common/SocialLinks'

export const ContactPage: React.FC = () => {
  const { contact, socials, resume } = profileConfig
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

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
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
      <SectionHeader eyebrow="Contact" title={contact.heading} />
      <div className="contact-layout">
        <div className="contact-card">
          <p>{contact.subheading}</p>
          <ul className="contact-list">
            {contact.email && (
              <li>
                <Mail size={18} />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
            {contact.phone && (
              <li>
                <Phone size={18} />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
            )}
            {socials.github && (
              <li>
                <SiGithub size={18} aria-hidden="true" />
                <a href={socials.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            )}
            {socials.linkedin && (
              <li>
                <LinkedInIcon />
                <a href={socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            )}
            {socials.kaggle && (
              <li>
                <SiKaggle size={18} />
                <a href={socials.kaggle} target="_blank" rel="noreferrer">
                  Kaggle
                </a>
              </li>
            )}
            {resume.url && (
              <li>
                <FileDown size={18} />
                <a href={resume.url} download={resume.downloadFilename}>
                  {resume.label}
                </a>
              </li>
            )}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
            />
          </label>

          <button
            type="submit"
            className="primary-button submit-button"
            disabled={submitState === 'submitting'}
          >
            <Send size={18} aria-hidden={true} />
            <span>{submitState === 'submitting' ? 'Sending...' : 'Send Message'}</span>
          </button>

          {submitMessage ? (
            <p className={submitState === 'success' ? 'form-status success' : 'form-status error'}>
              {submitMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
