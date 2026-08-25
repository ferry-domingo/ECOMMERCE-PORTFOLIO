const projects = [
  { name: "Luna Fashion", category: "Women’s fashion", url: "https://luna-fashion-ten.vercel.app/", description: "An editorial fashion storefront pairing confident art direction with a clear, modern shopping journey.", features: ["Editorial landing page", "Curated collections", "Responsive storefront"], theme: "luna", label: "LUNA / FASHION" },
  { name: "Noire Men", category: "Menswear store", url: "https://noire-men.vercel.app/", description: "A sharp menswear experience built around bold typography, premium presentation, and effortless product discovery.", features: ["Premium visual system", "Product browsing", "Mobile-first design"], theme: "noire", label: "NOIRE / MEN" },
  { name: "Kapehaus", category: "Coffee & lifestyle", url: "https://kapehaus.vercel.app/", description: "A warm coffee brand website that turns a local café identity into an inviting digital experience.", features: ["Brand storytelling", "Menu showcase", "Conversion-focused CTAs"], theme: "kape", label: "KAPE / HAUS" },
];

function ProjectVisual({ project, number }) {
  return (
    <a className={`project-visual ${project.theme}`} href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live website`}>
      <div className="project-browser">
        <div className="browser-bar"><span /><span /><span /><small>{project.url.replace("https://", "")}</small></div>
        <div className="project-scene"><span className="scene-index">{number}</span><p>{project.label}</p><div className="scene-object" /><span className="scene-cta">Visit website ↗</span></div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects container">
      <div className="section-heading reveal-on-scroll"><div className="section-label"><span>03</span> Selected work</div><h2>Three brands.<br />Three distinct <em>worlds.</em></h2></div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-card reveal-on-scroll" key={project.name}>
            <ProjectVisual project={project} number={`0${index + 1}`} />
            <div className="project-details"><div className="project-number">0{index + 1} / 03</div><small>{project.category}</small><h3>{project.name}</h3><p>{project.description}</p><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><a className="project-link" href={project.url} target="_blank" rel="noreferrer">Explore live project <span>↗</span></a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
