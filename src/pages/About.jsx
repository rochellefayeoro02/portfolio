// about.jsx
import './styles.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">
            Crafting <span className="highlight">Digital</span> Experiences
          </h2>
          
          <div className="about-text">
            <p className="about-paragraph">
              I'm Rochelle, a UI/UX designer who creates meaningful digital experiences. 
              I believe great design happens at the intersection of creativity and functionality.
            </p>
            
            <p className="about-paragraph">
              Every pixel serves a purpose and every interaction feels natural. 
              I'm passionate about designing products that people love to use.
            </p>
            
            <p className="about-paragraph">
              My approach combines user research, visual design, and thoughtful 
              interaction to build experiences that truly connect with people.
            </p>
          </div>
          
          <div className="about-highlight">
            <span className="highlight-emoji">✨</span>
            <span className="highlight-text">Design is not just how it looks — it's how it works.</span>
          </div>
        </div>
      </div>
    </section>
  );
}