import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 'cloudnews',
      title: 'CloudNews',
      description: 'A weather app to show city weather conditions',
      link: 'https://github.com/Ramreddy6363/CloudNews'
    },
    {
      id: 'crypto-dashboard',
      title: 'Crypto Dashboard',
      description: 'A cryptocurrency tracking dashboard',
      link: 'https://github.com/Ramreddy6363/Crypto-Dashboard'
    },
    {
      id: 'blackjack-game',
      title: 'BlackJack Game',
      description: 'Interactive BlackJack card game',
      link: 'https://github.com/Ramreddy6363/BlackJack-Game'
    },
    {
      id: 'scanme',
      title: 'ScanMe',
      description: 'QR code scanner application',
      link: 'https://github.com/Ramreddy6363/ScanMe'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
