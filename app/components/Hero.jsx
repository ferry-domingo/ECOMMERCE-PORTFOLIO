export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="status-dot" /> Available for select projects</div>
        <h1>I Build Modern <span>E-commerce</span> Websites for Growing Businesses</h1>
        <p>I create responsive, professional, and user-friendly online stores and product showcase websites for small businesses.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View my projects <span>↓</span></a>
          <a className="button button-secondary" href="#contact">Contact me <span>↗</span></a>
        </div>
      </div>
      <div className="hero-visual reveal delay-1" aria-label="E-commerce dashboard preview">
        <div className="visual-top"><span /><span /><span /><small>atelier.shop</small></div>
        <div className="visual-body">
          <div className="visual-nav"><b>ATELIER</b><div>Shop&nbsp;&nbsp; Collection&nbsp;&nbsp; About</div><i>Bag (2)</i></div>
          <div className="visual-product">
            <div className="product-art"><span>01</span><div className="bag-shape" /></div>
            <div className="product-info"><small>NEW COLLECTION</small><h2>Objects for<br />everyday life.</h2><p>Thoughtfully designed essentials for modern living.</p><button>Explore collection →</button></div>
          </div>
        </div>
        <div className="floating-tag"><strong>+38%</strong><span>conversion rate</span></div>
      </div>
      <div className="hero-footer"><span>Based in the Philippines · Working worldwide</span><span className="scroll-mark">SCROLL TO EXPLORE <i>↓</i></span></div>
    </section>
  );
}
