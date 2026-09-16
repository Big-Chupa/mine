import profileImage from '../assets/amos-portrait.png';

const resumeFile = '/amos-resume.docx';

const Hero = () => {
  return (
    <section className="hero section-spacing">
      <div className="hero-copy">
        <p className="eyebrow">Full-Stack Developer</p>
        <h1>
          Building modern, scalable
          <span> web experiences</span>
        </h1>
        <p className="lead">
          I am a software developer focused on building clean, responsive products
          and dependable backend systems that solve real business problems.
        </p>

        <div className="cta-row">
          <a className="primary-btn" href={resumeFile} target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a className="secondary-btn" href="mailto:amossambrightsamuel123@mail.com">
            Let&apos;s Work Together
          </a>
        </div>

        <div className="social-row">
          <a className="social-link" href="https://github.com/Big-Chupa" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M12 .5A12 12 0 0 0 8.21 23.4c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.82 1.23 1.82 1.23 1.07 1.82 2.8 1.29 3.48.99.11-.77.42-1.29.76-1.59-2.66-.3-5.45-1.33-5.45-5.91 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23A11.36 11.36 0 0 1 12 6.58c1.01 0 2.03.14 2.98.41 2.28-1.55 3.28-1.23 3.28-1.23.65 1.65.24 2.88.12 3.18.77.84 1.22 1.91 1.22 3.22 0 4.59-2.8 5.6-5.47 5.9.43.37.81 1.09.81 2.2v3.26c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"/></svg>
            </span>
            GitHub
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/amos-samuel-729a35228?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.75h2.88v8.75H5.5V9.75Zm5.08 0h2.76v1.2h.04c.38-.72 1.32-1.47 2.72-1.47 2.91 0 3.45 1.91 3.45 4.4v4.62h-2.88v-4.33c0-1.03-.02-2.36-1.44-2.36-1.44 0-1.66 1.12-1.66 2.28v4.41H10.58V9.75Z"/></svg>
            </span>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Developer profile card">
        <div className="animal animal-left" aria-hidden="true">
          🐾
        </div>
        <div className="animal animal-right" aria-hidden="true">
          🐾
        </div>

        <div className="profile-card glow-card">
          <div className="mini-badge">Available for work</div>

          <div className="profile-image-shell">
            <img src={profileImage} alt="Amos Samuel portrait" className="profile-image" />
          </div>

          <h3>Amos Samuel</h3>
          <p>Full-Stack Developer</p>

          <div className="stats-grid">
            <div>
              <strong>4+</strong>
              <span>Years</span>
            </div>
            <div>
              <strong>15+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
