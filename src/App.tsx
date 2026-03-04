import './App.css'
import InteractiveAscii from './components/InteractiveAscii'

function App() {
  const skills = [
    'JavaScript / TypeScript',
    'Python',
    'Java',
    'React.js',
    'Electron.js',
    'Full-Stack Development',
    'System Design'
  ];

  const projects = [
    {
      name: 'H.62 (HOPE AES)',
      description: 'Intelligent drone detection and jamming system. Winner of JNC 2025 Mali - Cybersecurity & Innovation category.',
      tech: ['AI', 'Security', 'Hardware Integration', 'Python'],
      link: '#'
    },
    {
      name: 'TheChat',
      description: '100% anonymous desktop chat terminal built with Electron.js. Anyone can create their own home server and share the address for others to join anonymously.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Electron.js'],
      link: 'https://github.com/abbgoesghost/thechat'
    },
    {
      name: 'JustPostIt',
      description: 'Interactive playground whiteboard where anyone can post content on a shared map. A chaotic but creative space for anonymous expression.',
      tech: ['JavaScript', 'Web Technologies', 'Real-time'],
      link: 'https://justpostit-safe.netlify.app/'
    }
  ];

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-left">
          <a href="#home" className="nav-link">Aboubacar Dabo</a>
        </div>
        <div className="nav-right">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
        </div>
      </nav>

      <main className="main">
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="ascii-art">
              <InteractiveAscii />
            </div>
            <div className="hero-text">
              <h1>hi, <span className="highlight">aboubacar</span> here.</h1>
              <p className="hero-description">
                I'm a software engineer and tech entrepreneur based in Bamako, Mali. 
                I specialize in full-stack development, software architecture, and building innovative 
                digital solutions. Winner of JNC 2025 for cybersecurity innovation.
              </p>
              <a href="mailto:yhodamaru@gmail.com" className="cta-button">Say hi!</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">/ about me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am currently <span className="highlight">CEO at XARM INDUSTRIES</span>, 
                where I lead software development and technological innovation projects. 
                I am also pursuing my <span className="highlight">Baccalauréat</span> while building 
                cutting-edge solutions.
              </p>
              <p>
                Here are some technologies I have been working with:
              </p>
              <ul className="skills-list">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <p>
                Outside of work, I'm passionate about tech innovation, cybersecurity research, 
                and building solutions that make a real-world impact.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">/ experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-date">
                <span>JAN 2024</span>
                <span>-</span>
                <span>PRESENT</span>
              </div>
              <div className="experience-details">
                <h3>CEO @ <span className="highlight">XARM INDUSTRIES</span></h3>
                <p className="experience-location">Bamako, Mali</p>
                <ul className="experience-description">
                  <li>
                    Leading software development and technological innovation projects
                  </li>
                  <li>
                    Developed H.62 (HOPE AES), an intelligent drone detection and jamming system, 
                    winning JNC 2025 Mali in Cybersecurity & Innovation category
                  </li>
                  <li>
                    Building full-stack applications and desktop software using modern technologies 
                    including Electron.js, React, and Node.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">/ projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <a href={project.link} className="project-link" aria-label="View project">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section awards-section">
          <h2 className="section-title">/ awards & recognition</h2>
          <div className="award-card">
            <h3>Winner - National Digital Days (JNC) 2025</h3>
            <p className="award-category">Category: Cybersecurity & Innovation</p>
            <p className="award-description">
              Recognized for innovative technological solutions integrating software development, 
              security, automation, and artificial intelligence through the H.62 (HOPE AES) project.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built and designed by ME.</p>
        <p>All rights reserved. ©</p>
      </footer>
    </div>
  )
}

export default App
