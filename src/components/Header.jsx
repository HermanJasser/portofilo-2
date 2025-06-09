import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          Work
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  )
}
