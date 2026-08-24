const projects = [
  { name: "Luna Fashion", category: "Fashion E-commerce", description: "A refined clothing store with an editorial feel and frictionless shopping experience.", features: ["Product catalog", "Categories", "Product details", "Cart"], tech: ["Next.js", "Tailwind CSS", "JavaScript"], theme: "luna" },
  { name: "Aura Skin", category: "Beauty & Skincare", description: "A premium product showcase designed to build trust and turn curiosity into orders.", features: ["Product showcase", "Testimonials", "Responsive design", "Order buttons"], tech: ["React", "Tailwind CSS", "JavaScript"], theme: "aura" },
  { name: "Brew & Bite", category: "Cafe & Food", description: "A warm, modern cafe website that makes the menu easy to explore and orders effortless.", features: ["Menu", "Product cards", "Order CTA", "Location section"], tech: ["Next.js", "Tailwind CSS", "Vercel"], theme: "brew" },
];

function ProjectMockup({ project }) {
  return (
    <div className={`project-mockup ${project.theme}`}>
      <div className="mock-window"><div className="mock-bar"><span /><span /><span /></div>
        {project.theme === "luna" && <><div className="mock-nav">LUNA <small>NEW&nbsp;&nbsp; SHOP&nbsp;&nbsp; JOURNAL</small><i>BAG 0</i></div><div className="luna-scene"><p>THE NEW<br /><b>EVERYDAY</b></p><div className="fashion-figure" /></div></>}
        {project.theme === "aura" && <><div className="mock-nav">aura° <small>SHOP&nbsp;&nbsp; ABOUT&nbsp;&nbsp; RITUALS</small><i>○</i></div><div className="aura-scene"><div className="skin-bottle">AURA<br /><small>DAILY DEW</small></div><p>Glow begins<br />with good care.<button>SHOP THE RITUAL</button></p></div></>}
        {project.theme === "brew" && <><div className="mock-nav">BREW<br />& BITE <small>MENU&nbsp;&nbsp; OUR STORY&nbsp;&nbsp; VISIT</small><i>ORDER</i></div><div className="brew-scene"><div className="coffee-cup">B&B</div><p>GOOD DAYS<br /><b>START HERE.</b></p></div></>}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects container">
      <div className="section-heading"><div className="section-label"><span>03</span> Selected work</div><h2>Projects built with purpose<br />and <em>personality.</em></h2></div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <ProjectMockup project={project} />
            <div className="project-details">
              <div className="project-number">0{index + 1} / 03</div><small>{project.category}</small><h3>{project.name}</h3><p>{project.description}</p>
              <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="project-actions"><a className="button button-primary" href="#" aria-label={`${project.name} live demo`}>Live demo ↗</a><a className="button button-secondary" href="#" aria-label={`${project.name} source code`}>View code ↗</a></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
