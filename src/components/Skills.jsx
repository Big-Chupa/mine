const frontend = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'];
const backend = ['Node.js', 'Express', 'Nest.js', 'MongoDB'];
const tools = ['Git', 'GitHub', 'REST APIs', 'AI-assisted development'];

const Skills = () => {
  return (
    <section id="skills" className="skills section-spacing">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Tools I use to build effective digital products.</h2>
      </div>

      <div className="skills-grid">
        <div className="skill-card glow-card">
          <h3>Frontend</h3>
          <ul>
            {frontend.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card glow-card">
          <h3>Backend</h3>
          <ul>
            {backend.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card glow-card">
          <h3>Tools</h3>
          <ul>
            {tools.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
