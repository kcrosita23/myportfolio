import { Code2, Layers3, Workflow } from "lucide-react";
import { biography, capabilities, toolGroups } from "../data/portfolio";
const icons = { code: Code2, layers: Layers3, workflow: Workflow };

export default function AboutSection() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="shell">
        <div className="about-intro"><div><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2 id="about-title">Curious by nature.<br /><span className="serif">Practical by design.</span></h2></div>
          <div className="about-copy">{biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        <div className="capability-grid">{capabilities.map((capability, index) => {
          const Icon = icons[capability.icon];
          return <article className="capability" key={capability.title}><div className="capability-top"><Icon size={25} strokeWidth={1.5} /><span>0{index + 1}</span></div><h3>{capability.title}</h3><p>{capability.description}</p><ul className="tags">{capability.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul></article>;
        })}</div>
        <div className="background-grid">
          <div className="background-panel">
            <p className="eyebrow">MY EVERYDAY TOOLKIT</p>
            <h3>Tools I work with</h3>
            {toolGroups.map((group) => (
              <div className="tool-group" key={group.title}>
                <h4>{group.title}</h4>
                <ul className="tags" aria-label={group.title}>
                  {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </div>
            ))}
            <p className="toolkit-note">From interface mockups and visual content to version control and team collaboration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
