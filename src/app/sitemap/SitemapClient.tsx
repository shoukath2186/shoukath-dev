"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  ArrowLeft, 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Layers, 
  FolderGit2, 
  Mail, 
  FileCode, 
  Share2, 
  Globe, 
  Laptop, 
  Search, 
  Megaphone, 
  Cpu, 
  ExternalLink 
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function SitemapClient() {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50 || true); // keep it background filled for readability
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-[#030014] text-zinc-100 font-sans overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-orange-500 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-zinc-800 rounded-full mix-blend-screen filter blur-[150px] opacity-40" />
      </div>

      {/* Navbar wrapper */}
      <Navbar scrolled={scrolled} activeSection="" />

      {/* Main Content Area */}
      <main className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 z-10">
        
        {/* Breadcrumbs and Page Title */}
        <motion.div 
          className="space-y-4 mb-16"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-zinc-500 font-bold">
            <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
              <Home size={12} /> HOME
            </Link>
            <span>/</span>
            <span className="text-orange-500">SITEMAP</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                SITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">DIRECTORY</span>
              </h1>
              <p className="text-zinc-400 text-sm md:text-base max-w-xl">
                A complete map of Shoukath Otm's portfolio website. Easily navigate through sections, detailed services, social connects, and system pages.
              </p>
            </div>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 hover:border-orange-500 text-xs font-bold uppercase tracking-widest text-white bg-white/5 backdrop-blur-sm transition-all"
            >
              <ArrowLeft size={14} /> Back To Home
            </Link>
          </div>
        </motion.div>

        {/* Directory Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          
          {/* Card 1: Homepage Sections */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-8 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                  <Home size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">Landing Page</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Sections Index</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-zinc-400">
                <li>
                  <Link href="/#home" className="hover:text-orange-400 transition-colors flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                    <span>Introduction (Hero)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-orange-400 transition-colors flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                    <span>About Me & Timeline</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-orange-400 transition-colors flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                    <span>Services Overview</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#experience" className="hover:text-orange-400 transition-colors flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                    <span>Work Experience</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="hover:text-orange-400 transition-colors flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                    <span>Featured Projects</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#skills" className="hover:text-orange-400 transition-colors flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                    <span>Skills & Tech Stack</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-orange-400 transition-colors flex items-center gap-2 group/link">
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                    <span>Contact / Hire Me</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="pt-8 mt-6 border-t border-zinc-900/60">
              <Link 
                href="/" 
                className="text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-white transition-colors flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300"
              >
                Go to Landing Page <ExternalLink size={12} />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Detailed Services */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-8 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                  <Laptop size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">Services Page</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Specialized Offerings</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-zinc-400">
                <li>
                  <Link href="/services" className="hover:text-orange-400 transition-colors flex items-center gap-3 group/link">
                    <Code size={16} className="text-zinc-600 group-hover/link:text-orange-500 transition-colors" />
                    <span>Web Development</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400 transition-colors flex items-center gap-3 group/link">
                    <Search size={16} className="text-zinc-600 group-hover/link:text-orange-500 transition-colors" />
                    <span>Search Engine Optimization (SEO)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400 transition-colors flex items-center gap-3 group/link">
                    <Megaphone size={16} className="text-zinc-600 group-hover/link:text-orange-500 transition-colors" />
                    <span>Digital Marketing Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400 transition-colors flex items-center gap-3 group/link">
                    <Cpu size={16} className="text-zinc-600 group-hover/link:text-orange-500 transition-colors" />
                    <span>AI Integrations & Automation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-orange-400 transition-colors flex items-center gap-3 group/link">
                    <Mail size={16} className="text-zinc-600 group-hover/link:text-orange-500 transition-colors" />
                    <span>Request a Custom Quote</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-zinc-900/60">
              <Link 
                href="/services" 
                className="text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-white transition-colors flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300"
              >
                Go to Detailed Services <ExternalLink size={12} />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Connect & System Pages */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-8 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                  <Share2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">Connections & Meta</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Socials & System Files</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-zinc-400">
                <li>
                  <a 
                    href="https://github.com/shoukath2186" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-orange-400 transition-colors flex items-center justify-between group/link"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                      GitHub Profile
                    </span>
                    <ExternalLink size={12} className="text-zinc-600 group-hover/link:text-orange-400 transition-colors" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/shoukath-0t-ab6338246/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-orange-400 transition-colors flex items-center justify-between group/link"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                      LinkedIn Profile
                    </span>
                    <ExternalLink size={12} className="text-zinc-600 group-hover/link:text-orange-400 transition-colors" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/0tShoukath27840" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-orange-400 transition-colors flex items-center justify-between group/link"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-800 group-hover/link:bg-orange-500 rounded-full transition-all" />
                      Twitter / X Profile
                    </span>
                    <ExternalLink size={12} className="text-zinc-600 group-hover/link:text-orange-400 transition-colors" />
                  </a>
                </li>
                <li className="pt-2 border-t border-zinc-900/60"></li>
                <li>
                  <a 
                    href="/sitemap.xml" 
                    target="_blank" 
                    className="hover:text-orange-400 transition-colors flex items-center gap-2 group/link"
                  >
                    <FileCode size={16} className="text-zinc-600 group-hover/link:text-orange-500 transition-colors" />
                    <span>XML Sitemap (Crawlers)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/robots.txt" 
                    target="_blank" 
                    className="hover:text-orange-400 transition-colors flex items-center gap-2 group/link"
                  >
                    <Globe size={16} className="text-zinc-600 group-hover/link:text-orange-500 transition-colors" />
                    <span>Robots.txt Rules</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-zinc-900/60">
              <a 
                href="mailto:shoukathot77@gmail.com" 
                className="text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-white transition-colors flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300"
              >
                Send Direct Email <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* Informational Footer Area */}
        <motion.div 
          className="mt-16 p-6 border border-zinc-900 bg-zinc-950/20 text-center text-xs text-zinc-500 rounded-xl space-y-2 uppercase tracking-wider font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p>This sitemap is structured for maximum search engine optimization and user clarity.</p>
          <p>&copy; {new Date().getFullYear()} Shoukath Otm. All rights reserved.</p>
        </motion.div>

      </main>
    </div>
  );
}
