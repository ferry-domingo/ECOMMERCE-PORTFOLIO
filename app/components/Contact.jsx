"use client";
import { useState } from "react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <section id="contact" className="section contact"><div className="container contact-grid reveal-on-scroll"><div className="contact-intro"><div className="section-label"><span>05</span> Get in touch</div><h2>Let&apos;s build your<br />next <em>storefront.</em></h2><p>Tell me about your brand, your goals, and the experience you want your customers to have.</p><div className="social-links"><a href="#projects">Selected work ↗</a><a href="mailto:hello@example.com">Email me ↗</a></div></div><form className="contact-form" onSubmit={submit}><label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" required /></label><label><span>Email address</span><input name="email" type="email" placeholder="jane@company.com" required /></label><label><span>Tell me about your project</span><textarea name="message" rows="5" placeholder="A little about your brand, project, and goals..." required /></label><button className="button button-primary" type="submit">{sent ? "Message received — thank you!" : "Send inquiry →"}</button></form></div></section>;
}
