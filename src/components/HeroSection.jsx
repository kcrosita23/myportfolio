import { ArrowDown, ArrowUpRight, Facebook, MapPin } from "lucide-react";
import portrait from "../assets/profile-pic.png";
import { profile } from "../data/portfolio";

export default function HeroSection() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="accent-line" /> DEVELOPER. ENGINEER. PROBLEM SOLVER.</p>
          <h1 id="hero-title">Thoughtful code.<br /><span className="serif">Meaningful</span><br />digital experiences<span className="accent-text">.</span></h1>
          <p className="hero-intro">I'm <strong>{profile.name}</strong>, a full stack developer and system engineer building responsive websites and practical business applications.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={19} /></a>
            <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={18} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={14} /> {profile.location}</span>
            <span className="meta-divider" />
            <a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Kim Carlo on Facebook (opens in a new tab)"><Facebook size={18} /></a>
          </div>
        </div>
        <div className="portrait-composition">
          <div className="portrait-frame">
            <img src={portrait} alt="Kim Carlo Rosita" width="849" height="926" fetchPriority="high" />
            <div className="portrait-caption"><span>KIM CARLO ROSITA</span><span>DESIGN → DEVELOPMENT</span></div>
          </div>
          <div className="portrait-note"><span className="note-symbol" aria-hidden="true">✳</span><span>Built with purpose.<br />Refined with care.</span></div>
          <span className="portrait-index" aria-hidden="true">PORTFOLIO / 01</span>
        </div>
      </div>
      <div className="shell hero-bottom"><a href="#projects">SCROLL TO EXPLORE <ArrowDown size={15} /></a><span>WEB DEVELOPMENT & ENTERPRISE SYSTEMS</span></div>
    </section>
  );
}
