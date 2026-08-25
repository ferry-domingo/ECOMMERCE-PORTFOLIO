"use client";
import { useState } from "react";
const links = ["Home", "About", "Services", "Projects", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-shell"><nav className="container nav" aria-label="Primary navigation"><a className="logo" href="#home" aria-label="Lovely Ferry Domingo home">LFD<span>.</span>Portfolio</a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links"><span /><span /><span className="sr-only">Toggle menu</span></button><div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <span>↗</span></a></div></nav></header>;
}
