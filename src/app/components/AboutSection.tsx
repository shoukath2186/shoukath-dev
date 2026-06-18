"use client";

import React from "react";
import { motion } from 'framer-motion';
import { staggerContainer, slideInLeftVariant, slideInRightVariant, viewportConfig } from './Animations';

const techStack = [
  "Next.js", "React.js", "TypeScript", "JavaScript", "Node.js",
  "Express.js", "MongoDB", "PostgreSQL", "Strapi CMS", "Redux",
  "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "Material UI", "SASS",
  "GraphQL", "Prisma", "AWS", "Git", "GitHub", "REST APIs",
  "Docker", "Shopify", "MySQL", "Firebase", "Figma"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white text-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col lg:flex-row gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >

          {/* Text Content (Left Side) */}
          <motion.div variants={slideInLeftVariant} className="lg:w-3/5 space-y-8 z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-orange-500" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">About Me</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-[1.1]">
                Engineering <br />
                <span className="text-zinc-400">Digital</span> <br />
                Experiences
              </h2>
            </div>

            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed max-w-xl">
              <p>
                I am a professional Software Developer specializing in <strong className="text-black">Full Stack</strong> and Frontend Development. My core expertise lies in Next.js, React, Node.js, and integrating robust Headless CMS architectures like Strapi.
              </p>
              <p>
                With a proven track record across digital agencies, I focus on building scalable web applications that not only look beautiful but perform flawlessly. I prioritize <strong className="text-black">Clean Architecture</strong>, SEO optimization, and exceptional Core Web Vitals.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-black">10+</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Projects Delivered</span>
              </div>
              <div className="w-[1px] h-12 bg-zinc-300" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-orange-500">🏆</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">Best Performer Award</span>
              </div>
            </div>
          </motion.div>

          {/* Image (Right Side - Floating and Overlapping) */}
          <motion.div variants={slideInRightVariant} className="lg:w-2/5 relative z-10 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[4/5] group">
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-zinc-200 translate-x-4 translate-y-4 rounded-xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

              {/* Image */}
              <div className="absolute inset-0 bg-zinc-100 rounded-xl overflow-hidden z-10 border border-zinc-200">
                <img
                  src="/IMG-20240531-WA0014 (1).jpg"
                  alt="About Shoukath"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>

              {/* Accent block */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-2xl -z-10 mix-blend-normal" />
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Infinite Marquee for Technologies */}
      <div className="mt-32 border-y border-zinc-200 py-6 bg-white overflow-hidden flex relative group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap w-max">
          <div className="animate-marquee flex gap-16 items-center pr-16 group-hover:[animation-play-state:paused]">
            {techStack.map((tech, idx) => (
              <span key={`tech-1-${idx}`} className="text-4xl md:text-6xl font-black text-zinc-400 uppercase tracking-tighter whitespace-nowrap hover:text-orange-500 transition-colors duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
          <div className="animate-marquee flex gap-16 items-center pr-16 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {techStack.map((tech, idx) => (
              <span key={`tech-2-${idx}`} className="text-4xl md:text-6xl font-black text-zinc-400 uppercase tracking-tighter whitespace-nowrap hover:text-orange-500 transition-colors duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
