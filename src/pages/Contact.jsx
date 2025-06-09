// src/pages/Contact.jsx
import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {/* Venstre kolonne */}
        <div className={styles.left}>
          <p>Want to</p>
          <p>start a</p>
          <p>new</p>
          <p>project?</p>
          <p className="highlight">
            <span className={styles.highlight}>Or just say hello.</span>
          </p>
        </div>

        {/* Høyre kolonne */}
        <div className={styles.right}>
          {/* E-post */}
          <p className={styles.h2}>Contact info:</p>
          <a
            href="mailto:hermanjasser@live.com"
            className={styles.email}
          >
            hermanjasser@live.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/HermanJasser"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.github}
          >
            <FaGithub className={styles.githubIcon} />
            <span className={styles.githubText}>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}
