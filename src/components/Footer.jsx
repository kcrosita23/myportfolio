import { ArrowUp, Facebook } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><p>© {new Date().getFullYear()} {profile.name}</p><span className="footer-note">Made with care. Built with React.</span><div className="footer-links"><a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in a new tab)"><Facebook size={17} /></a><a href="#hero" className="back-top">Back to top <ArrowUp size={15} /></a></div></div></footer>;
}
