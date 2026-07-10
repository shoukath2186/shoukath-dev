"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
}

export default function Navbar({ scrolled, activeSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLightPage = pathname === "/services";
  const useLightNavbar = isLightPage && scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      useLightNavbar 
        ? "bg-white/95 border-b border-zinc-200 py-4 shadow-sm"
        : (scrolled ? "bg-black/95 border-b border-zinc-800 py-4" : "bg-transparent py-6")
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href={isHome ? "#home" : "/#home"} 
          className={`text-xl font-bold tracking-wider transition-colors duration-300 ${
            useLightNavbar ? "text-zinc-900 hover:text-orange-600" : "text-white hover:text-orange-400"
          }`}
        >
          SHOUKATH <span className="text-orange-500 font-extrabold">OTM</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["home", "about", "services", "experience", "skills", "projects"].map((section) => {
            const isActive = isHome && activeSection === section;
            const href = isHome ? `#${section}` : `/#${section}`;
            
            return (
              <a
                key={section}
                href={href}
                className={`text-xs font-semibold capitalize tracking-widest transition-colors duration-300 ${
                  useLightNavbar
                    ? (isActive ? "text-orange-600 underline underline-offset-8 decoration-2 decoration-orange-600" : "text-zinc-600 hover:text-zinc-950")
                    : (isActive ? "text-orange-500 underline underline-offset-8 decoration-2 decoration-orange-500" : "text-zinc-400 hover:text-white")
                }`}
              >
                {section}
              </a>
            );
          })}
          <a
            href={isHome ? "#contact" : "/#contact"}
            className={`px-5 py-2 border rounded-none text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
              useLightNavbar
                ? "border-zinc-900 text-zinc-900 hover:border-orange-600 hover:bg-orange-600 hover:text-white"
                : "border-white text-white hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Hamburguer Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-none transition-colors ${
            useLightNavbar ? "text-zinc-600 hover:text-zinc-900" : "text-zinc-400 hover:text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 shadow-2xl border-b ${
          useLightNavbar ? "bg-white border-zinc-200 text-zinc-800" : "bg-black border-zinc-800 text-zinc-400"
        }`}>
          {["home", "about", "services", "experience", "skills", "projects"].map((section) => {
            const isActive = isHome && activeSection === section;
            const href = isHome ? `#${section}` : `/#${section}`;

            return (
              <a
                key={section}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? "text-orange-500 font-bold" : (useLightNavbar ? "text-zinc-600" : "text-zinc-400")
                }`}
              >
                {section}
              </a>
            );
          })}
          <a
            href={isHome ? "#contact" : "/#contact"}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`w-full text-center py-3 border font-semibold uppercase tracking-widest text-xs block ${
              useLightNavbar
                ? "border-zinc-900 text-zinc-900 hover:border-orange-600 hover:bg-orange-600 hover:text-white"
                : "border-white text-white hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
          >
            CONTACT ME
          </a>
        </div>
      )}
    </nav>
  );
}
