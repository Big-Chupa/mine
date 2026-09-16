const experiences = [
  {
    period: '2023 — Present',
    title: 'Computer Science Graduate / Software Developer',
    details: 'Focused on building responsive web applications, improving full-stack development skills, and learning professional workflows for creating real-world products.',
  },
  {
    period: '2022 — 2023',
    title: 'SIWES / Internship Experience',
    details: 'Worked on practical software development tasks, strengthened technical problem-solving skills, and gained experience collaborating in a development environment.',
  },
  {
    period: '2021 — 2022',
    title: 'Technology and Programming Training',
    details: 'Built a strong foundation in web development, application building, and digital problem solving through structured learning and hands-on projects.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience section-spacing">
      <div className="section-heading">
        <p className="eyebrow">Experience & Education</p>
        <h2>Growing through learning, practice, and real development work.</h2>
      </div>

      <div className="timeline">
        {experiences.map((item) => (
          <div key={item.title} className="timeline-item glow-card">
            <span className="timeline-period">{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
