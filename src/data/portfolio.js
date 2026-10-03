// Update personal details and content here without changing the layout components.
export const profile = {
  name: "Kim Carlo Rosita",
  role: "Full Stack Developer & Systems Engineer",
  email: "kimcarlo23.dev@gmail.com",
  phone: "+63 917 397 1955",
  phoneHref: "+639173971955",
  location: "Metro Manila, Philippines",
  facebook: "https://www.facebook.com/kimcarlooooo/",
};

export const biography = [
  "I'm a systems engineer and web developer focused on programming practical business applications and responsive websites. I work with JavaScript, React, and Magic Software to turn requirements into clear, maintainable solutions.",
  "At Everywhere Consulting Inc., I contributed to the design, development, and deployment of a loan management system and a payroll management system. My work includes system prototyping, application debugging, and collaborating with other engineers to improve business workflows.",
  "I also manage and enhance the company website, support repository migration, and deploy website updates to production. Alongside portal administration and freelance web development, this experience connects my programming work with the day-to-day needs of the people using it.",
];

export const toolGroups = [
  { title: "Development & collaboration", tools: ["Visual Studio Code", "GitHub", "GitLab", "Microsoft Office", "Google Workspace"] },
  { title: "Design & multimedia", tools: ["Figma", "Canva", "Adobe Photoshop", "Adobe Premiere", "CapCut"] },
];

export const navigation = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    id: "portfolio", number: "01", title: "Doctor's portfolio website", category: "Freelance web development",
    description: "A responsive website for a surgical oncologist, presenting professional background, expertise, and contact details with a focus on mobile usability and accessibility.",
    tech: ["React", "Tailwind CSS"], cover: "portfolio", period: "Mar — Jun 2025", contribution: "Website design & development",
    repository: "https://github.com/kcrosita23/doctors", linkLabel: "View repository",
    status: "Repository available",
  },
  {
    id: "coffee", number: "02", title: "Coffee shop website", category: "Freelance project",
    description: "A coffee shop website application developed as a freelance project, bringing a business presence to the web.",
    tech: ["React", "Tailwind CSS"], cover: "coffee", period: "Oct 2025", contribution: "Web application development", status: "Project overview",
  },
  {
    id: "business-systems", number: "03", title: "Loan & payroll systems", category: "BBCCC / Enterprise applications",
    description: "Contributed to the design, development, and deployment of loan and payroll management systems using Magic Software.",
    tech: ["Magic Software", "Magic Web Client"], cover: "systems", period: "Jun 2025 — Feb 2026", contribution: "Systems engineering & system design", status: "Enterprise project overview",
  },
];

export const capabilities = [
  { title: "Web development", description: "Responsive websites with attention to interface design, accessibility, debugging, and performance.", tech: ["React", "JavaScript", "Tailwind CSS", "Bootstrap"], icon: "code" },
  { title: "Enterprise applications", description: "System design, prototyping, application development, and database-backed management systems.", tech: ["Magic Software", "Magic Web Client", "SmartUX", "Database management"], icon: "workflow" },
  { title: "IT & systems support", description: "Hands-on equipment troubleshooting, network configuration, and day-to-day portal administration.", tech: ["Desktop & laptop support", "POS equipment", "Networking", "Portal administration"], icon: "layers" },
];

export const experiences = [
  {
    id: "eci-mid", title: "Mid-Systems Engineer", company: "Everywhere Consulting Inc.", period: "Sep 2025 — Present",
    description: "Oversee company portal operations, including content, access, structure, and daily functionality. Manage and enhance the company website, support repository migration, and deploy website updates to production.",
    tags: ["Portal administration", "Web development", "Production deployment"],
  },
  {
    id: "eci-junior", title: "Junior Systems Engineer", company: "Everywhere Consulting Inc.", period: "Feb 2025 — Sep 2025",
    description: "Collaborated with engineers on Magic Software solutions, contributing to architecture, system design, and prototyping. Built and deployed payroll and loan management systems.",
    tags: ["Magic Software", "System design", "Application development"],
  },
  {
    id: "freelance", title: "Freelance Web Developer", company: "Independent projects", period: "Mar 2025 — Dec 2025",
    description: "Developed responsive personal and team websites for clients across industries. Created a surgical oncologist's portfolio with a focus on clear presentation, mobile usability, and accessibility, and optimized website performance.",
    tags: ["Responsive websites", "UI design", "Performance optimization"],
  },
  {
    id: "smartcomp", title: "IT Field Engineer", company: "Smartcomp Solutions Inc.", period: "Aug 2024 — Jan 2025",
    description: "Troubleshot and isolated POS equipment issues, provided network technical support, and configured network equipment. Worked with desktop and laptop hardware, routers, modems, switches, and access points.",
    tags: ["POS troubleshooting", "Network support", "Equipment configuration"],
  },
  {
    id: "rgs", title: "Software Developer Coordinator Intern Lead", company: "RGS Global Solutions", period: "Mar 2024 — Jul 2024",
    description: "Led a team of software developer interns, contributed to the company's mobile application, and refined the UI/UX of its system and website. Contributed ideas for system improvements and worked on a field tracker application.",
    tags: ["Team leadership", "Mobile applications", "UI/UX improvements"],
  },
];
