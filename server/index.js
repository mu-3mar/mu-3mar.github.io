import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3001)

app.use(cors())
app.use(express.json({ limit: '1mb' }))

const requestTimestamps = new Map()

function rateLimit(ip) {
  const now = Date.now()
  const recent = (requestTimestamps.get(ip) || []).filter((timestamp) => now - timestamp < 60000)
  if (recent.length >= 5) return false
  recent.push(now)
  requestTimestamps.set(ip, recent)
  return true
}

function stripHeaderInjection(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim()
}

app.use((request, response, next) => {
  const ip = request.ip || request.headers['x-forwarded-for'] || 'unknown'
  if (!rateLimit(ip)) {
    return response.status(429).json({
      success: false,
      message: 'Too many messages sent from this IP. Please wait a minute and try again.',
    })
  }
  next()
})

app.post('/api/contact', async (request, response) => {
  const { name, email, subject, message } = request.body || {}

  if (!name || !email || !subject || !message) {
    return response.status(400).json({
      success: false,
      message: 'Please complete all required fields before sending your message.',
    })
  }

  const sanitizedName = stripHeaderInjection(name).slice(0, 100)
  const sanitizedEmail = String(email).trim().slice(0, 254)
  const sanitizedSubject = stripHeaderInjection(subject).slice(0, 200)
  const sanitizedMessage = String(message).trim().slice(0, 5000)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(sanitizedEmail)) {
    return response.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    })
  }

  if (!sanitizedName || !sanitizedSubject || !sanitizedMessage) {
    return response.status(400).json({
      success: false,
      message: 'Please complete all required fields before sending your message.',
    })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL
  const toEmail = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !fromEmail || !toEmail) {
    return response.status(503).json({
      success: false,
      message:
        'Email delivery is not configured yet. Add RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL in the environment variables, then restart the server.',
    })
  }

  try {
    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: sanitizedEmail,
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      text: [
        `Name: ${sanitizedName}`,
        `Email: ${sanitizedEmail}`,
        `Subject: ${sanitizedSubject}`,
        '',
        'Message:',
        sanitizedMessage,
      ].join('\n'),
      html: `
        <h3>Portfolio contact</h3>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br />')}</p>
      `,
    })

    if (error || !data) {
      console.error('Resend email send failed:', error?.message || 'Unknown error')
      return response.status(500).json({
        success: false,
        message: 'The message could not be delivered. Please try again later or email me directly.',
      })
    }

    return response.status(200).json({
      success: true,
      message: 'Your message was sent successfully. I will get back to you soon.',
    })
  } catch (error) {
    console.error('Contact form error:', error?.message || error)
    return response.status(500).json({
      success: false,
      message: 'The message could not be delivered. Please try again later or email me directly.',
    })
  }
})

app.get('/api/health', (_request, response) => {
  response.status(200).json({ ok: true, service: 'portfolio-contact' })
})

app.listen(port, () => {
  console.log(`Portfolio contact server listening on http://localhost:${port}`)
})
