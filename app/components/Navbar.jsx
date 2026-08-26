"use client";
import { useEffect, useState } from "react";
const links = ["Home", "About", "Services", "Projects", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    const closeOnDesktop = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);
  return <header className="nav-shell"><nav className="container nav" aria-label="Primary navigation"><a className="logo" href="#home" aria-label="Lovely Ferry Domingo home">LFD<span>.</span>Portfolio</a><button type="button" className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="nav-links" aria-label={open ? "Close navigation menu" : "Open navigation menu"}><span className="menu-bar menu-bar-top" aria-hidden="true" /><span className="menu-bar menu-bar-bottom" aria-hidden="true" /></button><div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <span>↗</span></a></div></nav></header>;
}
