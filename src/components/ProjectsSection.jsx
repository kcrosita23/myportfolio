import { ArrowUpRight, Coffee, Facebook, LayoutDashboard, Plus } from "lucide-react";
import { profile, projects } from "../data/portfolio";

// These are illustrative covers, not screenshots of deployed applications.
function ProjectCover({ type }) {
  if (type === "portfolio") return (
    <div className="project-cover cover-portfolio" aria-hidden="true">
      <div className="mini-browser"><div className="browser-bar"><i /><i /><i /><span>portfolio</span></div>
        <div className="mini-portfolio"><span className="mini-label">A SPACE FOR YOUR STORY</span><strong>Expertise.<br /><em>With a human touch.</em></strong><div className="mini-rule" /><span className="mini-pill">Discover more ↗</span><div className="mini-orbit" /></div>
      </div>
      <span className="cover-caption">PERSONAL BRANDS, THOUGHTFULLY PRESENTED</span>
    </div>
  );
  if (type === "coffee") return (
    <div className="project-cover cover-coffee" aria-hidden="true"><span className="coffee-wordmark">a daily ritual.</span>
      <div className="coffee-center"><Coffee size={67} strokeWidth={1} /><strong>Good coffee.<br /><em>Great mornings.</em></strong></div>
      <div className="coffee-bottom"><span>BREW / BROWSE / ENJOY</span><span className="coffee-arrow">↗</span></div>
    </div>
  );
  return (
    <div className="project-cover cover-tasks" aria-hidden="true"><div className="task-window">
      <div className="task-header"><span><LayoutDashboard size={16} /> Workspace</span><Plus size={16} /></div>
      <div className="task-columns">{["To do", "In progress", "Done"].map((name, i) => <div key={name}><span className="task-column-name">{name}<small>{i === 0 ? "2" : "1"}</small></span><div className={`mini-task task-${i}`}><span /><strong>{["Plan the next idea", "Bring it to life", "Make it count"][i]}</strong><div className="task-lines" /><i /></div>{i === 0 && <div className="mini-task short-task"><strong>A little more clarity</strong></div>}</div>)}</div>
    </div><span className="cover-caption">LESS CLUTTER. MORE CLARITY.</span></div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section work-section" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas turned into<br /><span className="serif">digital experiences.</span></h2></div>
          <p>A selection of web projects and concepts.<br />Different challenges. The same attention to detail.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.id}>
          <ProjectCover type={project.cover} />
          <div className="project-info"><div className="project-category"><span>{project.category}</span><span>{project.number}</span></div>
            <h3>{project.title}</h3><p>{project.description}</p>
            <ul className="tags" aria-label={`${project.title} technologies`}>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            <div className="project-footer">{project.repository ? <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">{project.linkLabel}<ArrowUpRight size={16} /><span className="sr-only"> (opens in a new tab)</span></a> : <span className="project-status">{project.status}</span>}<span className="cover-disclaimer">Illustrative cover</span></div>
          </div>
        </article>)}</div>
        <div className="work-more"><span>Let's connect and talk about your next idea.</span><a className="text-link" href={profile.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={17} /> Connect on Facebook <ArrowUpRight size={16} /><span className="sr-only"> (opens in a new tab)</span></a></div>
      </div>
    </section>
  );
}
