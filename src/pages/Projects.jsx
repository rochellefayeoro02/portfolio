// Projects.jsx
import './styles.css';

const PROJECTS = [
  {
    id: 1,
    emoji: '🔔',
    tags: ['UI/UX', 'Figma', 'Dashboard'],
    name: 'Devify',
    desc: 'An app that notifies you in real time event which can easily track your activitiess.',
    theme: 'theme-indigo',
    link: 'https://www.figma.com/proto/RcEAgcitjEzZQlW6RD0miK/DEVIFY?node-id=499-726&p=f&m=draw&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=499%3A712&page-id=440%3A281&t=R0XNP1WNOUqqwGrM-1',
    livePreview: true,
  },
  {
    id: 2,
    emoji: '👥',
    tags: ['Web Design', 'UI/UX', 'Figma'],
    name: 'LetsGo',
    desc: 'Real time activity tracking app to join different activities base on your interest and location.',
    theme: 'theme-blue',
    link: 'https://www.figma.com/proto/BZBrT1mz1qnNmV2bs9eoQO/Let-s-GO?page-id=243%3A640&node-id=243-641&p=f&viewport=256%2C99%2C0.03&t=JXHfD3RKYXBdXGi6-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=243%3A641',
    livePreview: true,
  },
  {
    id: 3,
    emoji: '📓',
    tags: ['MongoDB', 'Express.js', 'React','Node.js'],
    name: 'Task Tracker App',
    desc: 'awesome todos app.',
    theme: 'theme-dark',
    link: 'https://awesometodos-nd1t.onrender.com',
    livePreview: true,
  },
];

export default function Projects() {
  const handleProjectClick = (projectName, link) => {
    console.log(`Opening project: ${projectName}`);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="projects-section">
      <div className="section-tag">My Work</div>
      <h2 className="section-title">
        Featured <span className="highlight">Projects</span>
      </h2>
      <p className="section-sub">
        A selection of my best work showcasing thoughtful and impactful design.
      </p>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => handleProjectClick(project.name, project.link)}
          >
            <div className={`project-thumb ${project.theme}`}>
              <span className="project-emoji">{project.emoji}</span>
              <div className="project-overlay">
                <span className="overlay-icon"></span>
                <span className="overlay-text">View Live</span>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-link">
                <span className="link-text">View Project</span>
                <span className="link-arrow">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}