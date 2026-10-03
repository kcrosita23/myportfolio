// Update personal details and content here without changing the layout components.
export const profile = {
  name: "Kim Carlo Rosita",
  role: "Full Stack Developer & System Engineer",
  email: "kimcarlo23.dev@gmail.com",
  phone: "+63 917 397 1955",
  phoneHref: "+639173971955",
  location: "Metro Manila, Philippines",
  github: "https://github.com/kcrosita23",
  linkedin: "https://www.linkedin.com/in/kimcarlorosita/",
};

export const navigation = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    id: "portfolio", number: "01", title: "Portfolio websites", category: "Web development",
    description: "Responsive portfolio websites that bring a person's work, services, and story into focus.",
    tech: ["React", "Tailwind CSS"], cover: "portfolio",
    repository: "https://github.com/kcrosita23/doctors", linkLabel: "View repository",
    status: "Repository available",
  },
  {
    id: "coffee", number: "02", title: "Coffee shop commerce", category: "E-commerce",
    description: "A coffee shop e-commerce project exploring product discovery and an approachable shopping experience.",
    tech: ["React", "Tailwind CSS"], cover: "coffee", status: "Project overview",
  },
  {
    id: "tasks", number: "03", title: "Task management", category: "Application concept",
    description: "An example application concept for organizing tasks and making team priorities easier to follow.",
    tech: ["React", "Firebase", "Material UI"], cover: "tasks", status: "Concept example",
  },
];

export const capabilities = [
  { title: "Frontend development", description: "Responsive interfaces with clear structure and thoughtful interactions.", tech: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS"], icon: "code" },
  { title: "Full stack applications", description: "Connecting the interface to the data and services behind it.", tech: ["Node.js", "MongoDB", "Web applications"], icon: "layers" },
  { title: "Enterprise systems", description: "Building and maintaining business applications and integrations.", tech: ["Magic xpa", "Magic xpi", "System engineering"], icon: "workflow" },
];

export const experiences = [
  {
    id: "eci", title: "System Engineer", company: "Everywhere Consulting Inc.", period: "Mar 2025 — Present",
    description: "Contribute to enterprise applications using Magic xpa and Magic xpi. Develop and maintain web applications with a focus on performance and responsiveness.",
    tags: ["Enterprise applications", "Magic xpa", "Magic xpi"],
  },
  {
    id: "freelance", title: "Freelance Web Developer", company: "Self-employed", period: "Aug 2024 — Present",
    description: "Create responsive websites and web applications for small businesses and startups using React, Node.js, and MongoDB.",
    tags: ["Web development", "Responsive design"],
  },
  {
    id: "rgs", title: "Software Developer Coordinator Lead Intern", company: "RGS Recovery Management & Collection Services Inc.", period: "Mar 2024 — Jul 2024",
    description: "Led a team of software developer interns and helped refine the user interface and experience of the company system and website.",
    tags: ["Team coordination", "UI/UX improvements"],
  },
];
