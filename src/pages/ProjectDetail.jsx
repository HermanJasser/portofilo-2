import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../data/projects'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className={styles.container}>
        <h1>Project not found</h1>
      </div>
    )
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  return (
    <div className={styles.container}>
      {/* Tittel og share/ copy */}
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <button
          onClick={handleCopyLink}
          className={styles.copyButton}
        >
          Copy link
        </button>
      </header>

      {/* Beskrivelse */}
      <p className={styles.description}>{project.description}</p>

      {/* Bilde & caption */}
      <figure className={styles.figure}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.image}
        />
        <figcaption className={styles.caption}>
          {project.imageCaption}
        </figcaption>
      </figure>

      {/* Lenker */}
      <div className={styles.links}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          View live site
        </a>
        <a
          href={project.repoUrl + '#readme'}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          View README
        </a>
      </div>

      {/* Refleksjoner */}
      <article
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: project.reflections.replace(/\n/g, '<br/>'),
        }}
      />
    </div>
  )
}
