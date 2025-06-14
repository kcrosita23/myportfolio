import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ThemeWrapper from "./components/ThemeWrapper";
import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const experiences = [
    {
      title: "System Engineer",
      company: "Everywhere Consulting Inc.",
      period: "March 2025 - Present",
      description:
        "Contributed as one of the engineers building enterprise web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "Aug 2024 - Present",
      description: `Created responsive websites and web applications for various clients using modern frontend technologies. 
                    Provided web development services to small businesses and startups, specializing in React`,
    },
    {
      title: "Software Developer Coordinator Lead Intern",
      company: "RGS Recovery Management & Collection Services Inc.",
      period: "March 2024 - July 2024",
      description:
        "Team leader of software developer interns, Refined and improved the UI/UX of the company system and website.",
    },
  ];

  const projects = [
    {
      title: "Example: E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
    {
      title: "Portfolio Websites",
      description:
        "Modern portfolio website with animations and responsive design.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    },
    {
      title: "Example: Task Management App",
      description:
        "Collaborative task management application with real-time updates.",
      tech: ["React", "Firebase", "Material-UI"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    },
  ];

  const skills = [
    { name: "Web Development", icon: Code, level: 95 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 80 },
    { name: "Web Technologies", icon: Globe, level: 90 },
  ];

  return (
    <ThemeWrapper isDark={isDark}>
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />
      <HeroSection
        isDark={isDark}
        scrollY={scrollY}
        scrollToSection={scrollToSection}
      />
      <AboutSection isDark={isDark} skills={skills} />
      <ExperienceSection isDark={isDark} experiences={experiences} />
      <ProjectsSection isDark={isDark} projects={projects} />
      <ContactSection
        isDark={isDark}
        Mail={Mail}
        Phone={Phone}
        MapPin={MapPin}
        Github={Github}
        Linkedin={Linkedin}
      />
      <Footer isDark={isDark} />
    </ThemeWrapper>
  );
};

export default App;
