const services = [
  ["01", "Product Showcase Websites", "Elevated digital catalogs that make your products feel considered, desirable, and easy to discover."],
  ["02", "E-commerce Websites", "Conversion-focused online stores with intuitive browsing, product pages, and seamless cart experiences."],
  ["03", "Custom Business Websites", "Distinct, strategically designed websites shaped around your brand, goals, and customer journey."],
  ["04", "Website Maintenance", "Reliable care, content updates, and performance improvements that keep your site at its best."],
];

export default function Services() {
  return (
    <section id="services" className="section section-dark">
      <div className="container">
        <div className="section-heading light"><div className="section-label"><span>02</span> What I do</div><h2>Services designed to move your business <em>forward.</em></h2></div>
        <div className="services-grid">
          {services.map(([number, title, description]) => (
            <article className="service-card" key={title}>
              <div className="service-top"><span>{number}</span><i>↗</i></div>
              <h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
