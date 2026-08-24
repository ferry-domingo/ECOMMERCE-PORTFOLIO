"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-intro"><div className="section-label"><span>05</span> Get in touch</div><h2>Have a project<br />in mind? <em>Let&apos;s talk.</em></h2><p>Tell me about your business and what you&apos;re looking to create. I&apos;ll get back to you within 1–2 business days.</p>
          <div className="social-links"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:hello@alexmorgan.dev">Email ↗</a></div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" required /></label>
          <label><span>Email address</span><input name="email" type="email" placeholder="jane@company.com" required /></label>
          <label><span>Tell me about your project</span><textarea name="message" rows="5" placeholder="A little about your business, project, and goals..." required /></label>
          <button className="button button-primary" type="submit">{sent ? "Message sent — thank you!" : "Send message →"}</button>
        </form>
      </div>
    </section>
  );
}
