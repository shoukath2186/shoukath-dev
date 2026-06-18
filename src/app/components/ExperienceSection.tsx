"use client";

import React from "react";
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant, slideInLeftVariant, slideInRightVariant, viewportConfig } from './Animations';

const experiences = [
  {
    role: "Software Developer",
    company: "Progbiz Private Limited",
    location: "Kannur, Kerala (On-site)",
    date: "SEP 2025 - PRESENT",
    badges: ["🏆 BEST PERFORMER"],
    description: "Developing and maintaining Next.js / Strapi CMS websites and MERN applications. Optimizing visual appearance, Core Web Vitals, and lead generation capabilities across multiple client sites.",
    tags: ["Next.js", "Strapi", "TypeScript", "React", "Node.js", "Tailwind"],
    isActive: true,
  },
  {
    role: "Full Stack Developer",
    company: "Kerala Digital Park LLP",
    location: "Remote",
    date: "JUL 2025 - SEP 2025",
    description: "Developed full-stack web applications using the MERN Stack. Designed and built backend APIs, managed MongoDB database structures, and implemented clean code patterns under agile workflows.",
    tags: ["MERN Stack", "Express.js", "MongoDB", "REST APIs", "Agile"],
  },
  {
    role: "MERN Stack Developer",
    company: "Freelance",
    date: "2024 - 2025",
    description: "Built highly scalable and performance-tuned applications for clients, implementing custom dashboards, real-time client socket portals, database setups, and secure authentication models.",
    tags: ["React", "Node.js", "MongoDB", "TypeScript", "Redux"],
  },
  {
    role: "Intern Developer",
    company: "Brototype Bootcamp",
    location: "Calicut, India",
    date: "2023 - 2024",
    description: "Gained extensive, hands-on MERN stack engineering experience covering system design, relational schemas, RESTful APIs, JWT session tokens, and performance tuning.",
    tags: ["Authentication", "System Design", "JWT"],
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-white text-black relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-px " />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <motion.div variants={slideInLeftVariant} className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-orange-500" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">My Path</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter uppercase leading-[1.1]">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Journey</span>
            </h2>
          </motion.div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-[2px] bg-zinc-200 md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-orange-500 to-transparent" />
          </motion.div>

          <motion.div
            className="space-y-10 md:space-y-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  variants={isEven ? slideInLeftVariant : slideInRightVariant}
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between items-start group`}
                >
                  {/* Title Area */}
                  <div className={`md:w-[45%] pl-16 ${isEven ? 'md:pl-0 md:text-right md:pr-12' : 'md:pl-12'} space-y-2 pb-4 md:pb-0`}>
                    <h3 className="text-2xl font-bold text-black uppercase tracking-wider group-hover:text-orange-500 transition-colors">{exp.role}</h3>
                    <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">{exp.company}</p>
                    {exp.location && <p className="text-zinc-500 text-sm font-semibold">{exp.location}</p>}
                  </div>

                  {/* Timeline Dot */}
                  <div className={`absolute left-[16px] md:left-[50%] top-2 md:top-0 w-[10px] h-[10px] bg-white border-2 rounded-full md:-translate-x-1/2 z-10 transition-colors duration-300 ${exp.isActive ? 'border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'border-zinc-300 group-hover:border-orange-500'}`}>
                    {exp.isActive && <div className="absolute inset-[-4px] rounded-full border border-orange-500/30 animate-ping" />}
                  </div>

                  {/* Description Area */}
                  <div className={`md:w-[45%] pl-16 ${isEven ? 'md:pl-12' : 'md:pl-0 md:pr-12'}`}>
                    <div className="bg-zinc-50 border border-zinc-200 p-8 space-y-6 group-hover:border-orange-500/50 transition-all duration-300">
                      {exp.badges?.length ? (
                        <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                          <span className="inline-block px-3 py-1 text-[10px] font-bold border border-zinc-200 text-zinc-600 bg-white">
                            {exp.date}
                          </span>
                          {exp.badges.map(badge => (
                            <span key={badge} className="inline-block px-3 py-1 text-[10px] font-bold border border-amber-500/20 text-amber-600 bg-amber-500/5">
                              {badge}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-[10px] font-bold border border-zinc-200 text-zinc-600 bg-white">
                            {exp.date}
                          </span>
                        </div>
                      )}
                      <p className="text-zinc-600 text-base leading-relaxed">
                        {exp.description}
                      </p>
                      {/* <div className="flex flex-wrap gap-2">
                        {exp.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider border border-zinc-200 bg-white px-3 py-1 text-zinc-600">
                            {tag}
                          </span>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
