const steps = [
  {
    number: '01',
    title: 'Understand',
    text: 'Understand the problem, user needs, and business requirements before building anything.',
  },
  {
    number: '02',
    title: 'Plan',
    text: 'Shape the structure, interaction flow, and user experience to match the product goal.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Develop the frontend and backend with maintainable, scalable architecture in mind.',
  },
  {
    number: '04',
    title: 'Test',
    text: 'Check functionality, fix bugs, optimize performance, and refine the experience.',
  },
  {
    number: '05',
    title: 'Deploy',
    text: 'Launch the finished product and support its continued performance in production.',
  },
];

const Process = () => {
  return (
    <section className="process section-spacing">
      <div className="section-heading">
        <p className="eyebrow">My Development Process</p>
        <h2>A structured path from idea to launch.</h2>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <div key={step.number} className="process-step glow-card">
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
