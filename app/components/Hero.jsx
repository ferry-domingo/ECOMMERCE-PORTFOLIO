export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <div className="eyebrow hero-enter"><span className="status-dot" /> Available for freelance projects</div>
        <h1 className="hero-enter hero-delay-1">Digital stores<br />with <span>character.</span></h1>
        <p className="hero-enter hero-delay-2">I design and build expressive e-commerce experiences that help growing brands look credible, feel memorable, and sell with confidence.</p>
        <div className="hero-actions hero-enter hero-delay-3"><a className="button button-primary" href="#projects">Explore selected work <span>↓</span></a><a className="button button-secondary" href="#contact">Start a project <span>↗</span></a></div>
      </div>
      <div className="hero-stage hero-enter hero-delay-2" aria-label="Animated preview of featured ecommerce work">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <a className="hero-project-card hero-moto" href="https://moto-drive.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open MotoDrive project"><span>04 / MOTODRIVE</span><img src="https://moto-drive.vercel.app/images/motodrive-hero.png" alt="MotoDrive website preview" /><b className="hero-brand">MOTO<em>DRIVE</em></b></a>
        <a className="hero-project-card hero-kape" href="https://kapehaus.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open Kapehaus project"><span>03 / KAPEHAUS</span><img src="/projects/kapehaus.png" alt="Kapehaus website preview" /><b className="hero-brand">KAPEHAUS</b></a>
        <a className="hero-project-card hero-noire" href="https://noire-men.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open Noire Men project"><span>02 / NOIRÉ MEN</span><img src="/projects/noire.png" alt="Noire Men website preview" /><b className="hero-brand">NOIRÉ <em>MEN</em></b></a>
        <a className="hero-project-card hero-luna" href="https://luna-fashion-ten.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open Luna Fashion project"><span>01 / LUNA FASHION</span><img src="/projects/luna.png" alt="Luna Fashion website preview" /><b className="hero-brand">LUNA</b></a>
        <div className="floating-pill"><span>Selected work</span><strong>04 projects</strong></div>
      </div>
      <div className="hero-footer"><span>Philippines · Available worldwide</span><a href="#about">Scroll to discover <i>↓</i></a></div>
    </section>
  );
}
