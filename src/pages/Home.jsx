// home.jsx
import './styles.css';
import { useState, useEffect } from 'react';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/rochellefayeoro02', icon: 'fab fa-github', username: 'rochelleoro' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rochelle-faye-oro-3ba473372/', icon: 'fab fa-linkedin-in', username: 'rochelle-faye-oro' },
  { label: 'Email', href: 'https://mail.google.com/mail/u/0/', icon: 'fas fa-envelope', username: 'ororochellefaye0226@gmail.com' },
];

const ROLES = [
  'UI/UX Designer',
  'Front-end Developer',
  'Problem Solver',
  'Creative Thinker',
];


export default function Home({ setActivePage }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        // Typing forward
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText.length > 0) {
        // Deleting backward
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        // Move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  // Handle social link click with tracking
  const handleSocialClick = (platform, url) => {
    console.log(`Opening ${platform}: ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="home-section" id="home">
      {/* ── Left Content ── */}
      <div className="home-content">
        <div className="home-tag">
          <span className="home-tag-dot" />
          Welcome to my world ✦
        </div>

        <p className="home-greeting">Hi, I'm</p>
        <h1 className="home-name">Rochelle Faye A. Oro</h1>
        
        <div className="home-title-wrapper">
          <h2 className="home-title">
            I'm a{' '}
            <span className="role-container">
              <span className="highlight typing-text">
                {displayText}
              </span>
              <span className="cursor-blink"></span>
            </span>
          </h2>
        </div>

        <p className="home-desc">
          Passionate UI/UX designer who creates intuitive and visually
          compelling digital experiences. I transform ideas into seamless
          designs that exceed users' expectations. With a keen eye for detail
          and a love for clean code, I bridge the gap between design and development.
        </p>

        <div className="home-actions">
          <button className="btn-primary" onClick={() => setActivePage('Contact')}>
            <span>✦</span> connect with me
          </button>
        </div>

        <div className="home-socials">
          {SOCIALS.map(({ label, href, icon, username }) => (
            <a 
              key={label} 
              href={href + username}
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick(label, href + username)}
              title={`Connect on ${label}`}
            >
              <i className={icon}></i>
              <span className="social-tooltip">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Avatar Visual with Image Display ── */}
      <div className="home-visual">
        <div className="avatar-frame">
          <div className="avatar-glow" />
          <div className="avatar-ring" />
          <div className="avatar-inner">
            <img 
              src="rochelle.jpg" 
              alt="Rochelle Faye A. Oro - UI/UX Designer" 
              className="avatar-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://ui-avatars.com/api/?name=Rochelle+Oro&background=6d28d9&color=fff&size=400';
              }}
            />
            <div className="avatar-overlay">
              <span className="avatar-emoji-overlay"></span>
              <span className="avatar-text-overlay">View Portfolio</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="scroll-indicator" onClick={() => setActivePage('About')}>
        <div className="scroll-dot" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}