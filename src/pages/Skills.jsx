// Skills.jsx
import './styles.css';

const TOOLS_CATEGORIES = [
  {
    title: 'Frontend Core',
    icon: '⚛️',
    skills: [
      { name: 'React',          level: 92 },
      { name: 'HTML5',          level: 95 },
      { name: 'CSS3',           level: 94 },
      { name: 'JavaScript (ES6+)', level: 93 },
      { name: 'Tailwind CSS',   level: 88 },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: '🗄️',
    skills: [
      { name: 'Node.js',        level: 40 },
      { name: 'Express.js',     level: 40 },
      { name: 'MongoDB',        level: 78 },
      { name: 'Python',         level: 53 },
      { name: 'Java',           level: 75 },
    ],
  },
  {
    title: 'Design & Networking',
    icon: '🎨',
    skills: [
      { name: 'Figma',          level: 90 },
      { name: 'Cisco (CCNA)',   level: 40 },
      { name: 'UI/UX Principles', level: 65},
    ],
  },
];

const TOOL_CLOUD = [
  'MongoDB', 'React', 'Express.js', 'Node.js', 'Figma',
  'Cisco Packet Tracer', 'Python', 'JavaScript', 'Java',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'GitHub',
  'Postman', 'VS Code', 
];

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="section-tag">Skills & Tools</div>
      <h2 className="section-title">
        Technologies <span className="highlight">I use</span>
      </h2>
      <p className="section-sub">
        From full‑stack development to design and networking — tools I use daily to build robust digital solutions.
      </p>

      {/* Skill Categories with Proficiency Bars */}
      <div className="skills-grid">
        {TOOLS_CATEGORIES.map(({ title, icon, skills }) => (
          <div key={title} className="skill-category-card">
            <div className="skill-cat-header">
              <span className="skill-cat-icon">{icon}</span>
              <h3 className="skill-cat-title">{title}</h3>
            </div>
            <div className="skill-bars">
              {skills.map(({ name, level }) => (
                <div key={name} className="skill-bar-row">
                  <div className="skill-bar-meta">
                    <span className="skill-bar-name">{name}</span>
                    <span className="skill-bar-pct">{level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools Cloud (Expanded) */}
      <div className="tools-section">
        <div className="section-tag" style={{ marginBottom: 24 }}>Full Toolbelt</div>
        <div className="tools-cloud">
          {TOOL_CLOUD.map((tool) => (
            <span key={tool} className="tool-pill">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}