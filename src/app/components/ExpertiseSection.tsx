"use client";

import React from "react";
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant, slideInLeftVariant, viewportConfig } from './Animations';

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-32 text-white relative border-t border-zinc-900 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/expertise-bg.png')" }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row gap-16 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <motion.div variants={slideInLeftVariant} className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-orange-500" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[1.1]">
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">Technology</span>
              <br />Expertise
            </h2>
          </motion.div>

          <div className="lg:w-2/3 space-y-8 text-zinc-400 text-lg leading-relaxed">
            <motion.div variants={fadeUpVariant} className="glass-panel p-8 md:p-10 border border-zinc-800/50 hover:border-orange-500/30 transition-colors duration-300 backdrop-blur-xl group">
              <p className="group-hover:text-zinc-300 transition-colors">
                <strong className="text-white">In today's rapidly evolving digital landscape</strong>, I leverage modern web technologies and industry best practices to build fast, secure, scalable, and user-focused applications. My goal is to create high-performance digital solutions that not only meet current business needs but are also prepared for future growth and innovation.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="glass-panel p-8 md:p-10 border border-zinc-800/50 hover:border-orange-500/30 transition-colors duration-300 backdrop-blur-xl group">
              <p className="group-hover:text-zinc-300 transition-colors">
                <strong className="text-white">My technical expertise</strong> spans a wide range of modern development tools and frameworks, including Next.js, React.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, Strapi CMS, Redux, Tailwind CSS, AWS, and RESTful APIs. With strong full-stack development experience, I build seamless user experiences on the front end while developing robust and efficient back-end systems.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="glass-panel p-8 md:p-10 border border-zinc-800/50 hover:border-orange-500/30 transition-colors duration-300 backdrop-blur-xl group">
              <p className="group-hover:text-zinc-300 transition-colors">
                <strong className="text-white">Whether it's a startup</strong> looking for a scalable web application, a business seeking a modern digital presence, or an enterprise requiring custom software solutions, I select the most suitable technology stack to deliver reliable and impactful results. From responsive user interfaces to secure server-side architectures, I focus on creating solutions that combine performance, functionality, and exceptional user experience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
