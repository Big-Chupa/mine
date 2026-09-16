const services = [
  {
    title: 'Web Applications',
    text: 'Responsive and interactive applications built with React and JavaScript for modern business needs.',
  },
  {
    title: 'E-commerce Solutions',
    text: 'Product catalogs, shopping flows, carts, and checkout-focused experiences with real business logic.',
  },
  {
    title: 'Backend APIs',
    text: 'REST APIs, authentication, database integrations, and server-side logic to support scalable products.',
  },
  {
    title: 'Business Websites',
    text: 'Clean, conversion-focused websites designed around brand goals and a great user journey.',
  },
];

const Services = () => {
  return (
    <section id="work" className="services section-spacing">
      <div className="section-heading">
        <p className="eyebrow">What I Can Build</p>
        <h2>Helping brands and teams bring ideas to life.</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card glow-card">
            <div className="service-index">0{services.indexOf(service) + 1}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
