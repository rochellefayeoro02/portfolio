// Contact.jsx
import { useState } from 'react';
import './styles.css';

const CONTACT_ITEMS = [
  { 
    icon: '📧', 
    label: 'Email', 
    value: 'ororochellefaye0226@gmail.com',
    link: 'mailto:ororochellefaye0226@gmail.com'
  },
  { 
    icon: '💻', 
    label: 'GitHub', 
    value: 'github.com/rochelleoro',
    link: 'https://github.com/rochellefayeoro02'
  },
  { 
    icon: '🔗', 
    label: 'LinkedIn', 
    value: 'linkedin.com/in/rochelle-faye-oro',
    link: 'https://www.linkedin.com/in/rochelle-faye-oro-3ba473372/'
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', message: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', form);
    setSent(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleContactClick = (item) => {
    window.open(item.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact-section">
      <div className="section-tag">Get In Touch</div>
      <h2 className="section-title">
        Let's <span className="highlight">Connect</span>
      </h2>
      <p className="contact-subtitle">
        Have a project in mind? Reach out and let's create something amazing together.
      </p>

      <div className="contact-wrapper">
        {/* ── Left: Contact Info ── */}
        <div className="contact-info">
          {CONTACT_ITEMS.map((item) => (
            <div 
              key={item.label} 
              className="contact-item"
              onClick={() => handleContactClick(item)}
            >
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-details">
                <div className="contact-label">{item.label}</div>
                <div className="contact-value">{item.value}</div>
              </div>
              <div className="contact-arrow">→</div>
            </div>
          ))}
        </div>

        {/* ── Right: Contact Form ── */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">Your Name</label>
            <input
              className="form-input"
              name="name"
              type="text"
              placeholder="Rochelle Oro"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              name="email"
              type="email"
              placeholder="hello@rochelle.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Tell me about your project or inquiry..."
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>

          <button type="submit" className="btn-submit">
            {sent ? (
              <>
                <span className="checkmark">✓</span>
                Message Sent!
              </>
            ) : (
              <>
                Send Message
                <span className="send-icon">→</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}