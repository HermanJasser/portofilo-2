// src/pages/Work.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Work.module.css'
import projects from '../data/projects'   // <- Hent dataene her

export default function Work() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Some of my work</h1>
      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.id} className={styles.card}>
            <img
              src={p.image}                // bruker `image` fra data-fila
              alt={p.title}
              className={styles.image}
            />
            <h2 className={styles.cardTitle}>{p.title}</h2>
            <p className={styles.cardDesc}>{p.description}</p>  {/* `description` */}
            <Link to={`/work/${p.id}`} className={styles.button}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
