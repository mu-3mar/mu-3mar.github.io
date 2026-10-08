import { useState } from "react";
import {
  ChevronLeft24Regular,
  ChevronRight24Regular,
  Code24Filled,
  DocumentText24Filled,
  FolderOpen24Regular,
  Mail24Filled,
  Map24Filled,
  Note24Filled,
  Search24Regular,
} from '@fluentui/react-icons';
import styles from "./Notes.module.css";
import { profile, projects, skills } from '../../data/profile';

const notes = [
  {
    id: "welcome",
    name: "Welcome.txt",
    icon: Note24Filled,
    title: `Welcome to ${profile.name}'s Portfolio OS`,
    content: [
      `Hey! I'm ${profile.name}.`,
      "",
      "Welcome to my interactive portfolio OS.",
      "",
      profile.summary,
      "",
      "Explore the applications to see my projects, experience, and skills.",
      "",
      `— ${profile.name}`,
      profile.role,
    ],
  },
  {
    id: "about",
    name: "About-Portfolio.txt",
    icon: DocumentText24Filled,
    title: "About This Portfolio",
    content: [
      "Why a Windows-style portfolio?",
      "",
      "A traditional portfolio usually tells you what I can do.",
      "",
      "I wanted mine to let you experience it.",
      "",
      "This portfolio is presented as an interactive desktop environment where each application represents a different part of my professional profile.",
      "",
      "Resume → My professional profile",
      "Projects → Machine learning and computer vision work",
      `Skills → ${skills.map((group) => group.group).join(", ")}`,
      "Experience → Machine learning project experience",
      "Courses & Certifications → Courses and training",
      "GitHub and Kaggle → My work and professional profiles",
      "",
      "Have fun exploring.",
    ],
  },
  {
    id: "explore",
    name: "Explore.txt",
    icon: Map24Filled,
    title: "How To Explore",
    content: [
      "Welcome to the desktop.",
      "",
      "Double-click desktop icons to open applications.",
      "",
      "Drag windows around the screen.",
      "",
      "Try maximizing and minimizing windows.",
      "",
      "Right-click the desktop to see additional options.",
      "",
      "Open the Start Menu to discover more applications.",
      "",
      "Try the Games folder when you need a break.",
      "",
      "And if you want to know more about me, check out my GitHub, LinkedIn, or Kaggle.",
      "",
      "Enjoy the experience.",
    ],
  },
  {
    id: "projects",
    name: "My-Projects.txt",
    icon: Code24Filled,
    title: "Things I've Built",
    content: [
      "My projects apply machine learning to practical prediction and computer vision systems.",
      ...projects.flatMap((project) => [project.title, project.bullets[0], ""]),
      "",
      "Open the Projects application on the desktop to explore the projects in more detail.",
    ],
  },
  {
    id: "contact",
    name: "Contact.txt",
    icon: Mail24Filled,
    title: "Let's Connect",
    content: [
      "Found something interesting?",
      "",
      "Want to discuss a project?",
      "",
      "Want to discuss machine learning work?",
      "",
      "Reach out by email, or find me through these profiles.",
      "",
      "GitHub",
      profile.github.replace('https://', ''),
      "",
      "LinkedIn",
      profile.linkedin.replace('https://', ''),
      "",
      "Kaggle",
      profile.kaggle.replace('https://www.', ''),
      "",
      "Email",
      profile.email,
    ],
  },
];

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState(notes[0]);
  const SelectedNoteIcon = selectedNote.icon;

  return (
    <div className={styles.notes}>
      {/* Explorer-style toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            title="Back"
          >
            <ChevronLeft24Regular aria-hidden="true" />
          </button>

          <button
            className={styles.navButton}
            title="Forward"
          >
            <ChevronRight24Regular aria-hidden="true" />
          </button>
        </div>

        <div className={styles.addressBar}>
          <FolderOpen24Regular className={styles.folderIcon} aria-hidden="true" />
          <span>This PC</span>
          <span className={styles.separator}>›</span>
          <span>Notes</span>
        </div>

        <button
          className={styles.searchButton}
          title="Search"
        >
          <Search24Regular aria-hidden="true" />
        </button>
      </div>

      {/* Main content */}
      <div className={styles.body}>
        {/* File list */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarTitle}>
            Notes
          </div>

          <div className={styles.fileList}>
            {notes.map((note) => {
              const NoteIcon = note.icon;
              return (
                <button
                  key={note.id}
                  className={`${styles.fileItem} ${selectedNote.id === note.id ? styles.selected : ''}`}
                  onClick={() => setSelectedNote(note)}
                >
                  <NoteIcon className={styles.fileIcon} aria-hidden="true" />
                  <span className={styles.fileName}>{note.name}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Note viewer */}
        <main className={styles.viewer}>
          <div className={styles.viewerHeader}>
            <SelectedNoteIcon className={styles.viewerIcon} aria-hidden="true" />

            <div>
              <div className={styles.viewerTitle}>
                {selectedNote.name}
              </div>

              <div className={styles.viewerSubtitle}>
                Text Document
              </div>
            </div>
          </div>

          <div className={styles.document}>
            {selectedNote.content.map(
              (line, index) => {
                if (index === 0) {
                  return (
                    <h2
                      key={index}
                      className={styles.documentTitle}
                    >
                      {line}
                    </h2>
                  );
                }

                if (line === "") {
                  return (
                    <div
                      key={index}
                      className={styles.spacer}
                    />
                  );
                }

                return (
                  <p key={index}>
                    {line}
                  </p>
                );
              }
            )}
          </div>

          <div className={styles.statusBar}>
            <span>
              {selectedNote.content.length} lines
            </span>

            <span>
              Read-only
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}