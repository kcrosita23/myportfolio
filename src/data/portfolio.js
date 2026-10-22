import bbcccconnect from "../assets/projects/bbcccconnect-welcome.png";
import surgicalOncology from "../assets/projects/surgical-oncology.jpg";
import kalinaw from "../assets/projects/kalinaw.jpg";
import eci from "../assets/projects/eci.jpg";

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
  { title: "Software development", tools: ["Magic xpa Studio", "Angular", "React", "JavaScript", "Git", "Visual Studio Code"] },
  { title: "Collaboration & productivity", tools: ["GitHub", "GitLab", "Microsoft Office", "Google Workspace"] },
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
    description: "A website for a surgical oncology team, presenting the doctors' professional backgrounds, areas of expertise, contact details, and clinic schedules.",
    tech: ["React", "Tailwind CSS"], image: surgicalOncology, period: "Mar — Jun 2025", contribution: "Sole developer · Website design & development",
    website: "https://surgicaloncology.vercel.app",
    status: "Live website",
  },
  {
    id: "coffee", number: "02", title: "Kalinaw Coffee", category: "Freelance project",
    description: "A website introducing Kalinaw Coffee to the web, showcasing its menu, branch locations, and the story behind the business.",
    website: "https://kalinawcoffee.netlify.app",
    tech: ["React", "Tailwind CSS"], image: kalinaw, period: "Oct 2025", contribution: "Sole developer · Website design & development", status: "Project overview",
  },
  {
    id: "eci-website", number: "03", title: "Everywhere Consulting Inc.", category: "Company website",
    description: "A company website presenting ECI's products, solutions, services, partners, clients, and contact information. I handle its development, enhancements, and deployment updates.",
    tech: ["HTML", "CSS", "JavaScript"], image: eci, contribution: "Sole developer · Development, enhancements & deployment",
    website: "https://everywhereconsulting.com/eci-preview/", status: "Website preview",
  },
  {
    id: "business-systems", number: "04", title: "Web-Based Loan Management System — BBCCC", category: "BBCCC / Enterprise applications",
    featured: true,
    highlightTitles: ["Loan workflows", "Development & integration", "System deployment"],
    description: "Designed and developed a web-based application for managing online loan applications using Angular and Magic Web Client, integrated with the existing Magic xpa enterprise system.",
    highlights: [
      "Developed loan review workflows, application status management, member search, and loan reporting interfaces.",
      "Handled application development, database integration, and troubleshooting across the web client and enterprise application.",
      "Handled system deployment, application updates, and troubleshooting.",
    ],
    tech: ["Angular", "Magic Software", "Magic Web Client"], image: bbcccconnect, period: "Jun 2025 — Feb 2026", contribution: "Sole developer · System design & development", status: "Enterprise project overview",
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
