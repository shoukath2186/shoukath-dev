"use client";

import React from "react";
import { getTechIcon } from "./Icons";
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant, viewportConfig } from './Animations';

export default function SkillsSection() {
  const frontendSkills = ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Material UI", "HTML5", "CSS3", "SASS"];
  const backendSkills = ["Node.js", "Express.js", "GraphQL", "REST API", "MongoDB", "PostgreSQL", "Socket.io", "Prisma"];
  const toolsSkills = ["Strapi CMS", "Docker", "AWS", "Vercel", "GitHub", "Git", "Stripe", "Postman", "Figma"];

  return (
    <section id="skills" className="py-32 bg-zinc-900 text-white relative border-t border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Text and Skills */}
          <motion.div 
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUpVariant} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-orange-500" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">My Stack</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[1.1]">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Expertise</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                A comprehensive and carefully curated toolkit for building scalable, high-performance web applications and robust backend systems.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-10">
              {/* Frontend */}
              <motion.div variants={fadeUpVariant}>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-5 flex items-center gap-3">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {frontendSkills.map((tech) => (
                    <div 
                      key={tech} 
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 text-zinc-300 hover:text-white transition-all duration-300 rounded-xl shadow-sm cursor-default group"
                    >
                      <div className="text-zinc-400 group-hover:text-orange-400 transition-colors">
                        {getTechIcon(tech)}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div variants={fadeUpVariant}>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-5 flex items-center gap-3">
                  Backend & Databases
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {backendSkills.map((tech) => (
                    <div 
                      key={tech} 
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 text-zinc-300 hover:text-white transition-all duration-300 rounded-xl shadow-sm cursor-default group"
                    >
                      <div className="text-zinc-400 group-hover:text-orange-400 transition-colors">
                        {getTechIcon(tech)}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Cloud */}
              <motion.div variants={fadeUpVariant}>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-5 flex items-center gap-3">
                  CMS, Tools & Cloud
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {toolsSkills.map((tech) => (
                    <div 
                      key={tech} 
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 text-zinc-300 hover:text-white transition-all duration-300 rounded-xl shadow-sm cursor-default group"
                    >
                      <div className="text-zinc-400 group-hover:text-orange-400 transition-colors">
                        {getTechIcon(tech)}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Professional Image */}
          <motion.div 
            className="relative h-[600px] lg:h-[800px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportConfig}
          >
            <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
            <img 
              src="/skills-bg.png" 
              alt="Technical Architecture" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
