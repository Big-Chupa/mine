const About = () => {
  return (
    <section id="about" className="about section-spacing">
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h2>I build products that solve real problems.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I studied Computer Science and developed a strong interest in software
            development through hands-on problem solving, building interfaces, and learning
            how real systems work behind the scenes.
          </p>
          <p>
            I enjoy building responsive frontends, integrating them with strong backend logic,
            and turning ideas into products that people can actually use and trust.
          </p>
          <p>
            I am currently improving my full-stack skills in React, APIs, and scalable product
            development, and I am actively looking for opportunities to contribute to a team
            where I can grow and build impactful digital products.
          </p>
        </div>

        <div className="about-panel glow-card">
          <div className="panel-item">
            <span className="label">Focus</span>
            <strong>Web application development</strong>
          </div>
          <div className="panel-item">
            <span className="label">Current learning</span>
            <strong>Advanced React, APIs, and scalable architecture</strong>
          </div>
          <div className="panel-item">
            <span className="label">Opportunity</span>
            <strong>Full-stack role / product engineering team</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
