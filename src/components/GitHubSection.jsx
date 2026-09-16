const repos = [
  'React Portfolio Projects',
  'Node API Services',
  'Dashboard UI Experiments',
  'E-commerce Prototypes',
];

const GitHubSection = () => {
  return (
    <section className="github section-spacing">
      <div className="section-heading">
        <p className="eyebrow">GitHub Activity</p>
        <h2>Consistent coding and continuous learning.</h2>
      </div>

      <div className="github-panel glow-card">
        <div className="github-graph" aria-label="GitHub contribution illustration">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="github-info">
          <h3>Active developer profile</h3>
          <p>
            I am building projects and improving my workflow through frequent coding practice,
            experimentation, and full-stack implementation.
          </p>

          <ul>
            {repos.map((repo) => (
              <li key={repo}>{repo}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
