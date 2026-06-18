"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
}

export default function Navbar({ scrolled, activeSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/95 border-b border-zinc-800 py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-wider text-white hover:text-orange-400 transition-colors duration-300">
          SHOUKATH <span className="text-orange-500 font-extrabold">OTM</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["home", "about", "services", "experience", "skills", "projects"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`text-xs font-semibold capitalize tracking-widest transition-colors duration-300 hover:text-white ${
                activeSection === section ? "text-orange-500 underline underline-offset-8 decoration-2 decoration-orange-500" : "text-zinc-400"
              }`}
            >
              {section}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 border border-white hover:border-orange-500 rounded-none text-xs font-semibold uppercase tracking-widest text-white hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Hamburguer Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-zinc-800 py-6 px-6 flex flex-col space-y-4 shadow-2xl">
          {["home", "about", "services", "experience", "skills", "projects"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                activeSection === section ? "text-orange-500 font-bold" : "text-zinc-400"
              }`}
            >
              {section}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-3 border border-white hover:border-orange-500 text-white font-semibold uppercase tracking-widest text-xs block"
          >
            CONTACT ME
          </a>
        </div>
      )}
    </nav>
  );
}
