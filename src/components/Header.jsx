// src/components/Header.jsx
import { NavLink } from 'react-router-dom'

export default function Header() {
  const commonClasses = 'text-[#4D54DA] text-[30px] transition-colors duration-200 hover:text-[#ffffff]';

  return (
    <header className="w-full h-[100px] bg-white flex items-center border-b border-gray-300">
      <nav className="mx-auto flex justify-between items-center space-x-6 w-[60vw]">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${commonClasses} ${isActive ? 'underline' : 'no-underline'}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `${commonClasses} ${isActive ? 'underline' : 'no-underline'}`
          }
        >
          Work
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${commonClasses} ${isActive ? 'underline' : 'no-underline'}`
          }
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  )
}


