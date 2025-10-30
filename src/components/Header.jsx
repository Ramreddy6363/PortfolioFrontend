import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li><a href="#about" aria-label="Navigate to About section">About</a></li>
          <li><a href="#projects" aria-label="Navigate to Projects section">Projects</a></li>
          <li><a href="#contact" aria-label="Navigate to Contact section">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
