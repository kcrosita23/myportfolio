import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { navigation } from "./data/portfolio";

function initialTheme() {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch { /* The site remains usable when storage is unavailable. */ }
  return "dark";
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#17191b" : "#f6f4ef");
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Optional persistence. */ }
  }, [theme]);

  useEffect(() => {
    // The initial fragment may be resolved before React has rendered its target.
    const scrollToFragment = (event) => {
      const id = window.location.hash.slice(1);
      const target = id && document.getElementById(id);
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target?.scrollIntoView({ behavior: event?.type && !reducedMotion ? "smooth" : "instant", block: "start" });
    };
    const frame = requestAnimationFrame(scrollToFragment);
    window.addEventListener("hashchange", scrollToFragment);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToFragment);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nodes = [...document.querySelectorAll(".section-heading, .project-card, .about-intro, .capability, .experience-item, .contact-copy, .contact-form")];
    const animations = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        if (media.matches || !target.animate) return;
        const index = target.matches(".project-card") ? nodes.filter((node) => node.matches(".project-card")).indexOf(target) % 2 : 0;
        const animation = target.animate([
          { opacity: 0.35, transform: "translateY(16px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 480, delay: index * 70, easing: "cubic-bezier(.22,1,.36,1)" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    nodes.forEach((node) => observer.observe(node));
    const stopMotion = () => { if (media.matches) animations.forEach((animation) => animation.cancel()); };
    media.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      media.removeEventListener("change", stopMotion);
    };
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll("main > section[id]")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-15% 0px -45% 0px", threshold: [0, 0.1, 0.3] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        activeSection={activeSection} items={navigation} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
