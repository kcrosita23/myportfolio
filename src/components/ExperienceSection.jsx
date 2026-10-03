import { experiences } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="shell experience-grid"><div className="experience-intro"><p className="eyebrow">03 / THE JOURNEY SO FAR</p><h2 id="experience-title">Learning.<br />Building.<br /><span className="serif">Growing.</span></h2><p>Experience shaped by real projects,<br />collaboration, and continuous learning.</p></div>
        <div className="experience-list">{experiences.map((experience, index) => <article key={experience.id} className="experience-item"><div className="experience-marker" aria-hidden="true">0{index + 1}</div><p className="experience-period">{experience.period}</p><h3>{experience.title}</h3><p className="experience-company">{experience.company}</p><p className="experience-description">{experience.description}</p><ul className="tags">{experience.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </div>
    </section>
  );
}
