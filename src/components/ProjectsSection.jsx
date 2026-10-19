import { ArrowUpRight, Mail } from "lucide-react";
import { profile, projects } from "../data/portfolio";

function ProjectCover({ project }) {
  const preview = <img src={project.image} alt={`${project.title} landing page`} width="1265" height="712" loading="lazy" decoding="async" />;
  return project.website ? (
    <a className="project-cover project-screenshot" href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website (opens in a new tab)`}>
      {preview}<span className="project-image-action">Visit website <ArrowUpRight size={18} /></span>
    </a>
  ) : <div className="project-cover project-screenshot">{preview}</div>;
}
export default function ProjectsSection() {
  return (
    <section id="projects" className="section work-section" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas turned into<br /><span className="serif">digital experiences.</span></h2></div>
          <p>From personal websites to business systems.<br />Different challenges. The same attention to detail.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.id}>
          <ProjectCover project={project} />
          <div className="project-info"><div className="project-category"><span>{project.category}</span><span>{project.number}</span></div>
            <h3>{project.title}</h3><p>{project.description}</p>
            <div className="project-contribution"><span>{project.period}</span><span>{project.contribution}</span></div>
            <ul className="tags" aria-label={`${project.title} technologies`}>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            <div className="project-footer">
              {project.website ? <a className="project-visit" href={project.website} target="_blank" rel="noopener noreferrer">Visit website<ArrowUpRight size={20} /><span className="sr-only"> — {project.title} (opens in a new tab)</span></a> : <span className="project-status">{project.status}</span>}
            </div>
          </div>
        </article>)}</div>
        <div className="work-more"><span>Let's connect and talk about your next idea.</span><a className="text-link" href={`mailto:${profile.email}`}><Mail size={19} /> Email me directly <ArrowUpRight size={18} /></a></div>
      </div>
    </section>
  );
}
