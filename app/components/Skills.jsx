const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "GitHub", "Vercel"];

export default function Skills() {
  return (
    <section className="skills section">
      <div className="container skills-grid reveal-on-scroll">
        <div><div className="section-label"><span>04</span> Toolkit</div><h2>The tools behind<br />the <em>work.</em></h2></div>
        <div className="skill-list">{skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span><strong>{skill}</strong><i>↗</i></div>)}</div>
      </div>
    </section>
  );
}
