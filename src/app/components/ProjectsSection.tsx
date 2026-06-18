"use client";

import React, { useState } from "react";
import { GithubIcon } from "./Icons";
import { projects, Project } from "../../data/projects";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeUpVariant, viewportConfig } from './Animations';

export default function ProjectsSection() {
  const [projectFilter, setProjectFilter] = useState<"all" | "fullstack" | "frontend">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    if (projectFilter === "all") return true;
    return project.category === projectFilter;
  });

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-gray-50 text-gray-900 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            className="space-y-4 max-w-2xl"
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            variants={fadeUpVariant}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-orange-500" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[1.1] mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Work</span>
            </h2>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            variants={fadeUpVariant}
          >
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full Stack" },
              { id: "frontend", label: "Frontend" }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setProjectFilter(filter.id as any)}
                className={`px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${projectFilter === filter.id
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-orange-500 hover:shadow-sm"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project List - Alternating Horizontal Layout */}
        <motion.div
          className="space-y-16 md:space-y-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={fadeUpVariant}
                initial="hidden"
                animate="show"
                exit="hidden"
                layout
                className={`flex flex-col md:flex-row items-stretch gap-8 md:gap-16 group ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 lg:w-3/5">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gray-100 shadow-md  transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-md px-4 py-2 text-gray-900 rounded-full shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center">
                  <div className={`space-y-6 ${idx % 2 !== 0 ? 'md:items-start' : ''}`}>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="text-[10px] bg-white border border-gray-200 px-3 py-1.5 text-gray-500 font-bold uppercase tracking-widest rounded-lg">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[10px] bg-gray-100 border border-transparent px-3 py-1.5 text-gray-500 font-bold uppercase tracking-widest rounded-lg">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="pt-8 border-t border-gray-200 mt-8 flex flex-wrap gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 sm:flex-none inline-flex justify-center items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest bg-gray-900 text-white hover:bg-orange-500 transition-all duration-300 rounded-xl shadow-md hover:-translate-y-1"
                      >
                        Explore Project
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none inline-flex justify-center items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest bg-white text-gray-900 border border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 rounded-xl shadow-sm hover:-translate-y-1"
                        >
                          Live View
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-transparent backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl flex flex-col [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-orange-500/50"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/90 hover:bg-orange-500 border border-gray-200 hover:border-orange-500 rounded-full transition-all text-gray-800 hover:text-white backdrop-blur-md shadow-lg group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Banner Image */}
              <div className="relative w-full shrink-0 rounded-t-[2rem] overflow-hidden bg-gray-50 border-b border-gray-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col relative z-10">
                {/* Header */}
                <div className="mb-10 max-w-3xl">
                  <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-orange-500 text-white rounded-full mb-4 shadow-sm shadow-orange-500/20">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4 leading-[1.1]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column - Tech Stack & Links */}
                  <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-orange-500"></span> Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="text-[10px] bg-gray-50 border border-gray-200 px-3 py-1.5 text-gray-700 font-bold uppercase tracking-widest rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors shadow-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center px-6 py-3.5 text-xs font-black bg-orange-500 text-white hover:bg-orange-600 transition-all uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-md shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
                        >
                          Launch Live Site
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center px-6 py-3.5 text-xs font-black bg-gray-900 text-white hover:bg-gray-800 transition-all uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl shadow-md hover:-translate-y-0.5"
                        >
                          View Repository <GithubIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column - Key Features */}
                  {selectedProject.points && selectedProject.points.length > 0 && (
                    <div className="lg:col-span-8 order-1 lg:order-2">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-orange-500"></span> Key Features & Impact
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-500/30 transition-colors group">
                            <div className="w-8 h-8 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                              <span className="text-orange-500 font-black text-xs">0{idx + 1}</span>
                            </div>
                            <span className="text-gray-600 leading-relaxed font-medium mt-1 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
