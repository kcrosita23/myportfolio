import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar({ theme, onToggleTheme, activeSection, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!nav.current?.contains(event.target)) setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 800px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <header className="site-header" ref={nav}>
      <nav className="shell nav-bar" aria-label="Main navigation">
        <a href="#hero" className="brand" onClick={() => setIsOpen(false)} aria-label="Kim Carlo Rosita, home">
          <span className="brand-mark">k<span>.</span></span><span>kim carlo<span className="brand-dot">.</span></span>
        </a>
        <div className="desktop-nav">
          {items.map((item) => <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? "active" : ""}
            aria-current={activeSection === item.id ? "location" : undefined}>{item.label}</a>)}
        </div>
        <div className="nav-actions">
          <button className="icon-button" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <a href="#contact" className="nav-contact">Let's talk <ArrowUpRight size={16} /></a>
          <button className="icon-button menu-toggle" ref={menuButton} aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div id="mobile-navigation" className="mobile-nav" hidden={!isOpen}>
          {items.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)}
            aria-current={activeSection === item.id ? "location" : undefined}>{item.label}<ArrowUpRight size={17} /></a>)}
        </div>
      </nav>
    </header>
  );
}
