import { Code2, Layers3, Workflow } from "lucide-react";
import { capabilities } from "../data/portfolio";
const icons = { code: Code2, layers: Layers3, workflow: Workflow };

export default function AboutSection() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="shell">
        <div className="about-intro"><div><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2 id="about-title">Curious by nature.<br /><span className="serif">Practical by design.</span></h2></div>
          <div className="about-copy"><p>I work at the intersection of web development and enterprise systems—turning ideas and business needs into interfaces people can use.</p><p>My experience spans freelance websites, full stack applications, and business solutions built with Magic xpa and Magic xpi. I care about clear design, maintainable code, and the details that make an application feel right.</p></div></div>
        <div className="capability-grid">{capabilities.map((capability, index) => {
          const Icon = icons[capability.icon];
          return <article className="capability" key={capability.title}><div className="capability-top"><Icon size={25} strokeWidth={1.5} /><span>0{index + 1}</span></div><h3>{capability.title}</h3><p>{capability.description}</p><ul className="tags">{capability.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul></article>;
        })}</div>
      </div>
    </section>
  );
}
