"use client";
import { useEffect } from "react";
export default function Motion() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return null;
}
