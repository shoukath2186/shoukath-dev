"use client";

import React from "react";
import { Layers, Server, Briefcase } from "lucide-react";
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant, viewportConfig } from './Animations';

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-4">
            <div className="w-8 h-[2px] bg-orange-500" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">What I Do</span>
            <div className="w-8 h-[2px] bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[1.1]">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">Expertise</span>
          </h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {/* Frontend Card */}
          <motion.div variants={fadeUpVariant} className="group relative bg-zinc-950 border border-zinc-900 p-10 overflow-hidden hover:border-orange-500/50 transition-colors duration-500 mt-0 md:mt-12">
            <div className="absolute -right-4 -top-4 text-[120px] font-black text-zinc-900/50 group-hover:text-orange-500/10 transition-colors duration-500 pointer-events-none select-none">
              01
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-full border border-zinc-800 bg-black flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Layers size={24} />
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-4">Frontend<br/>Development</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Building responsive, accessible, and high-performance user interfaces using modern React ecosystems.
                </p>
                <ul className="space-y-3">
                  {["React & Next.js", "TypeScript", "Tailwind CSS", "Redux & State Mgmt"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-300 font-semibold">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div variants={fadeUpVariant} className="group relative bg-zinc-950 border border-zinc-900 p-10 overflow-hidden hover:border-orange-500/50 transition-colors duration-500">
            <div className="absolute -right-4 -top-4 text-[120px] font-black text-zinc-900/50 group-hover:text-orange-500/10 transition-colors duration-500 pointer-events-none select-none">
              02
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-full border border-zinc-800 bg-black flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Server size={24} />
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-4">Backend<br/>Architecture</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Designing scalable REST APIs, secure authentication flows, and efficient database schemas.
                </p>
                <ul className="space-y-3">
                  {["Node.js & Express", "MongoDB & PostgreSQL", "Strapi CMS", "RESTful APIs"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-300 font-semibold">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Full Stack Card */}
          <motion.div variants={fadeUpVariant} className="group relative bg-zinc-950 border border-zinc-900 p-10 overflow-hidden hover:border-orange-500/50 transition-colors duration-500 mt-0 md:-mt-12">
            <div className="absolute -right-4 -top-4 text-[120px] font-black text-zinc-900/50 group-hover:text-orange-500/10 transition-colors duration-500 pointer-events-none select-none">
              03
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-full border border-zinc-800 bg-black flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Briefcase size={24} />
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-4">Full Stack<br/>Solutions</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Delivering end-to-end applications from conceptualization to deployment and maintenance.
                </p>
                <ul className="space-y-3">
                  {["MERN Stack", "System Design", "Cloud Deployment (AWS)", "Payment Integration"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-300 font-semibold">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
