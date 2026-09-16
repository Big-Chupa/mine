const projects = [
  {
    title: 'Automated Clearance System',
    stack: 'React • JavaScript • Vanilla CSS • Node.js • Express • MongoDB',
    description:
      'A university graduate clearance portal that organizes requests, departmental verification, approvals, reports, and administrator workflows in one clear dashboard.',
    image: '/projects/clearance.png',
    imageAlt: 'Automated Clearance System administrator dashboard',
    link: 'https://automated-clearance-system-sage.vercel.app/admin/dashboard',
    features: ['Graduate clearance workflow', 'Administrator dashboard', 'Reports and status tracking'],
  },
  {
    title: 'OkoFresh',
    stack: 'React • JavaScript • Vanilla CSS • Node.js • Express • MongoDB',
    description:
      'A fresh-produce marketplace designed to connect customers with farm-fresh food through a warm, straightforward shopping experience.',
    image: '/projects/okofresh.png',
    imageAlt: 'OkoFresh farm-fresh produce landing page',
    link: 'https://oko-fresh.vercel.app/',
    features: ['Fresh produce discovery', 'Responsive storefront', 'Clear product-focused design'],
  },
  {
    title: 'Authority SunTech',
    stack: 'React • JavaScript • Vanilla CSS • Node.js • Express • MongoDB',
    description:
      'A solar energy website presenting smart power solutions for homes and businesses with a clear path from service discovery to enquiry.',
    image: '/projects/authoritysuntech.png',
    imageAlt: 'Authority SunTech solar energy landing page',
    link: 'https://authoritysuntech.vercel.app/',
    features: ['Solar service presentation', 'Business-focused landing page', 'Responsive marketing experience'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects section-spacing">
      <div className="section-heading">
        <p className="eyebrow">What I&apos;ve Built</p>
        <h2>Selected projects built for real-world needs.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card glow-card">
            <a className="project-image-link" href={project.link} target="_blank" rel="noreferrer">
              <img className="project-image" src={project.image} alt={project.imageAlt} />
            </a>
            <div className="project-top">
              <span className="project-stack">{project.stack}</span>
              <span className="project-badge">Featured</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
              View live project <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
