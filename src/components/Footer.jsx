import { ArrowUp, Github, Linkedin } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><p>© {new Date().getFullYear()} {profile.name}</p><span className="footer-note">Made with care. Built with React.</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={17} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={17} /></a><a href="#hero" className="back-top">Back to top <ArrowUp size={15} /></a></div></div></footer>;
}
