"use client";

// HeroBanner component with dynamic background and floating elements
import Image from 'next/image';
import { ExternalLink, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariant, slideInRightVariant } from './Animations';

export default function HeroBanner() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative bg-black text-white overflow-hidden">
      {/* Dynamic Geometric Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-zinc-700 rounded-full mix-blend-screen filter blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center w-full z-10">
        {/* Text Content */}
        <motion.div 
          className="md:col-span-7 space-y-8 text-center md:text-left z-10 mt-10 md:mt-0"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-orange-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </motion.div>
          
          <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white">
            DESIGN. <br/>
            BUILD. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">
              SCALE.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUpVariant} className="text-zinc-400 text-lg md:text-xl font-medium max-w-xl border-l-2 border-orange-500 pl-4 mx-auto md:mx-0">
            Hi, I'm <strong className="text-white">Shoukath O T</strong>. A Full Stack Developer specializing in Next.js, building scalable interfaces and powerful backends.
          </motion.p>
          
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="group px-8 py-4 border border-orange-500 text-xs font-bold uppercase tracking-widest bg-orange-500 text-white hover:bg-transparent hover:text-white transition-all flex items-center justify-center gap-2">
              VIEW MY WORK <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={() => {
              const cvUrl = "https://drive.google.com/file/d/1aJGiRq9rXLOqSxZXEqawZnsIVctS_wdu/view?usp=sharing";
              window.open(cvUrl, "_blank", "noopener,noreferrer");
            }} className="px-8 py-4 border border-zinc-800 hover:border-orange-500 text-xs font-bold uppercase tracking-widest text-white bg-white/5 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
              DOWNLOAD CV <Download size={14} />
            </button>
          </motion.div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          className="md:col-span-5 flex justify-center z-10 relative"
          variants={slideInRightVariant}
          initial="hidden"
          animate="show"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Main Image Container */}
            <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Image src="/20230918_200752.jpg" alt="Shoukath Otm" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" priority />
            </div>

            {/* Floating Glass Panel */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl animate-float-slow z-20">
              <div className="flex items-center gap-4">
                <div className="text-orange-500 font-black text-3xl">2+</div>
                <div className="text-xs text-white font-semibold uppercase tracking-wider leading-tight">
                  Years of<br/>Experience
                </div>
              </div>
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(circle,#27272a_2px,transparent_2px)] bg-[size:8px_8px] -z-10" />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[9px] tracking-widest uppercase text-zinc-400 font-semibold">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
}
