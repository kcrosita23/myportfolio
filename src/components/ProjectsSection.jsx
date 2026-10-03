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
      <div className="task-header"><span><LayoutDashboard size={16} /> Business systems</span><Plus size={16} /></div>
      <div className="task-columns">{["Loans", "Payroll", "Overview"].map((name, i) => <div key={name}><span className="task-column-name">{name}</span><div className={`mini-task task-${i}`}><span /><strong>{["Application management", "Payroll processing", "Clearer workflows"][i]}</strong><div className="task-lines" /><i /></div></div>)}</div>
    </div><span className="cover-caption">PRACTICAL SYSTEMS. EVERYDAY OPERATIONS.</span></div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section work-section" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas turned into<br /><span className="serif">digital experiences.</span></h2></div>
          <p>From personal websites to business systems.<br />Different challenges. The same attention to detail.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.id}>
          <ProjectCover type={project.cover} />
          <div className="project-info"><div className="project-category"><span>{project.category}</span><span>{project.number}</span></div>
            <h3>{project.title}</h3><p>{project.description}</p>
            <div className="project-contribution"><span>{project.period}</span><span>{project.contribution}</span></div>
            <ul className="tags" aria-label={`${project.title} technologies`}>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            <div className="project-footer">{project.repository ? <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">{project.linkLabel}<ArrowUpRight size={16} /><span className="sr-only"> (opens in a new tab)</span></a> : <span className="project-status">{project.status}</span>}<span className="cover-disclaimer">Illustrative cover</span></div>
          </div>
        </article>)}</div>
        <div className="work-more"><span>Let's connect and talk about your next idea.</span><a className="text-link" href={profile.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={17} /> Connect on Facebook <ArrowUpRight size={16} /><span className="sr-only"> (opens in a new tab)</span></a></div>
      </div>
    </section>
  );
}
