import { ArrowUpRight, Mail } from "lucide-react";
import { profile, projects } from "../data/portfolio";

function ProjectCover({ project }) {
  const preview = <img src={project.image} alt={project.featured ? "BBCCCConnect welcome screen with loan application, schedule, and reporting features" : `${project.title} landing page`} width="1265" height="712" loading="lazy" decoding="async" />;
  return project.website ? (
    <a className="project-cover project-screenshot" href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} website (opens in a new tab)`}>
      {preview}<span className="project-image-action">Visit website <ArrowUpRight size={18} /></span>
    </a>
  ) : <div className="project-cover project-screenshot">{preview}</div>;
}
function FeaturedProject({ project }) {
  return <article className="featured-project" aria-labelledby="featured-project-title">
    <header className="featured-project-heading">
      <p className="eyebrow">{project.category}</p>
      <h3 id="featured-project-title">{project.title}</h3>
      <p className="featured-credit">{project.contribution}</p>
    </header>
    <div className="featured-project-grid">
      <div className="featured-project-media">
        <figure><ProjectCover project={project} /><figcaption>BBCCCConnect · Application interface</figcaption></figure>
        <ul className="tags" aria-label={`${project.title} technologies`}>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      </div>
      <div className="featured-project-details">
        <p className="featured-summary">{project.description}</p>
        <ol className="featured-responsibilities">{project.highlights.map((highlight, index) => <li key={highlight}><span className="responsibility-number" aria-hidden="true">0{index + 1}</span><div><h4>{project.highlightTitles[index]}</h4><p>{highlight}</p></div></li>)}</ol>
        <p className="featured-status">{project.status}</p>
      </div>
    </div>
  </article>;
}
export default function ProjectsSection() {
  return (
    <section id="projects" className="section work-section" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas turned into<br /><span className="serif">digital experiences.</span></h2></div>
          <p>From personal websites to business systems.<br />Different challenges. The same attention to detail.</p></div>
        {projects.filter((project) => project.featured).map((project) => <FeaturedProject project={project} key={project.id} />)}
        <div className="project-grid">{projects.filter((project) => !project.featured).map((project) => <article className="project-card" key={project.id}>
          <ProjectCover project={project} />
          <div className="project-info"><div className="project-category"><span>{project.category}</span><span>{project.number}</span></div>
            <h3>{project.title}</h3><p>{project.description}</p>
            {project.highlights?.length > 0 && <ul className="project-highlights" aria-label={`${project.title} responsibilities`}>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
            <div className="project-contribution">{project.period && <span>{project.period}</span>}<span>{project.contribution}</span></div>
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
