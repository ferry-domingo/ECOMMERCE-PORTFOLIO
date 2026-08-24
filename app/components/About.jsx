export default function About() {
  return (
    <section id="about" className="section about container">
      <div className="section-label"><span>01</span> About me</div>
      <div className="about-grid">
        <h2>Turning business ideas into <em>digital experiences.</em></h2>
        <div className="about-copy">
          <p>I&apos;m Alex, an aspiring e-commerce web developer focused on building thoughtful websites for businesses ready to showcase and sell their products online.</p>
          <p>I combine clean design, purposeful development, and a genuine understanding of what small businesses need: a site that looks credible, works beautifully, and helps customers take action.</p>
          <a className="text-link" href="#contact">Let&apos;s work together <span>↗</span></a>
        </div>
      </div>
      <div className="stats">
        <div><strong>03</strong><span>Featured projects</span></div>
        <div><strong>09</strong><span>Core technologies</span></div>
        <div><strong>100%</strong><span>Responsive builds</span></div>
      </div>
    </section>
  );
}
