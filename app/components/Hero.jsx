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
        <div className="hero-card card-back"><small>03 / KAPEHAUS</small><strong>Good coffee.<br />Great days.</strong></div>
        <div className="hero-card card-front"><div className="card-nav"><b>LUNA</b><span>NEW&nbsp;&nbsp; SHOP&nbsp;&nbsp; EDITORIAL</span><i>BAG 0</i></div><div className="card-art"><small>THE NEW EDIT</small><strong>Quiet luxury,<br /><em>made wearable.</em></strong><div className="fashion-form" /></div></div>
        <div className="floating-pill"><span>Selected work</span><strong>03 projects</strong></div>
      </div>
      <div className="hero-footer"><span>Philippines · Available worldwide</span><a href="#about">Scroll to discover <i>↓</i></a></div>
    </section>
  );
}
