"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ExperienceSection from "./components/ExperienceSection";
import ExpertiseSection from "./components/ExpertiseSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function PortfolioPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section tracker
      const sections = ["home", "about", "services", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Header / Navbar (Sticky, blur styled) */}
      <Navbar scrolled={scrolled} activeSection={activeSection} />

      {/* Sections */}
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ExpertiseSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-black text-center text-xs text-zinc-500 uppercase tracking-widest font-bold space-y-4">
        <div className="flex justify-center gap-6">
          <a href="/services" className="text-zinc-400 hover:text-orange-500 transition-colors duration-300">
            View Detailed Services
          </a>
          <span className="text-zinc-800">|</span>
          <a href="/sitemap" className="text-zinc-400 hover:text-orange-500 transition-colors duration-300">
            Sitemap
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Shoukath Otm. All rights reserved.</p>
      </footer>
    </div>
  );
}
