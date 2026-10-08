import doc from '../../styles/doc-content.module.css';
import { profile } from '../../data/profile';

export default function Contact() {
  const contactLinks = [
    profile.email && {
      icon: 'fa-solid fa-envelope',
      href: `mailto:${profile.email}`,
      label: profile.email,
    },
    profile.phone && {
      icon: 'fa-solid fa-phone',
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      label: profile.phone,
    },
    profile.github && {
      icon: 'fa-brands fa-github',
      href: profile.github,
      label: profile.github.replace('https://', ''),
    },
    profile.linkedin && {
      icon: 'fa-brands fa-linkedin',
      href: profile.linkedin,
      label: profile.linkedin.replace('https://', ''),
    },
    profile.kaggle && {
      icon: 'fa-brands fa-kaggle',
      href: profile.kaggle,
      label: profile.kaggle.replace('https://www.', ''),
    },
  ].filter(Boolean);

  return (
    <div className={doc.docContent}>
      <h2>Get in Touch</h2>
      <div className={doc.lead}>{profile.contactText}</div>

      <div className={doc.sectionBlock}>
        {contactLinks.map((link) => (
          <div className={doc.contactRow} key={link.href}>
            <i className={link.icon} />
            <a
              href={link.href}
              target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : '_blank'}
              rel="noreferrer"
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
