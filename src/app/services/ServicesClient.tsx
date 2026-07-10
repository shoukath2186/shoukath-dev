"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Search, 
  Megaphone, 
  Cpu, 
  Check, 
  ChevronDown, 
  ArrowRight,
  Code,
  ShoppingBag,
  User,
  CheckCircle2,
  Terminal,
  Database,
  LineChart,
  Bot
} from "lucide-react";
import Image from "next/image";
import { getTechIcon } from "../components/Icons";

export default function ServicesClient() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How much does a corporate website cost?",
      answer: "Pricing depends on the scope, features, and design complexity. Contact me for a custom quote based on your specific requirements."
    },
    {
      question: "Do you offer eCommerce website development for small businesses?",
      answer: "Yes, I build eCommerce solutions for businesses of all sizes, from small online stores to large-scale platforms."
    },
    {
      question: "How long does SEO take to show results?",
      answer: "SEO is a long-term strategy — most clients start seeing measurable improvements in rankings and traffic within 3–6 months, depending on competition and starting point."
    },
    {
      question: "Can you integrate AI features into my existing website?",
      answer: "Yes, I can integrate AI chatbots, automation tools, and custom AI features into both new and existing websites and applications."
    }
  ];

  const technologies = [
    {
      category: "Frontend Stack",
      icon: <Laptop className="w-5 h-5" />,
      items: [
        { name: "Next.js", level: "Expert", desc: "For server-rendered, static, and high-performance React web applications." },
        { name: "React", level: "Expert", desc: "Core library for building dynamic, modern, and reusable component user interfaces." },
        { name: "TypeScript", level: "Advanced", desc: "Ensures type safety, bug prevention, and clean, self-documenting codebases." },
        { name: "Tailwind CSS", level: "Expert", desc: "Utility-first design framework for responsive, modern, and bespoke layouts." },
        { name: "Framer Motion", level: "Advanced", desc: "Provides fluid micro-interactions and smooth page/content animations." }
      ]
    },
    {
      category: "Backend & Database",
      icon: <Database className="w-5 h-5" />,
      items: [
        { name: "Node.js & Express", level: "Expert", desc: "Scalable asynchronous servers and RESTful APIs optimized for speed." },
        { name: "MongoDB", level: "Advanced", desc: "NoSQL database for flexible data structures and high-availability systems." },
        { name: "PostgreSQL", level: "Intermediate", desc: "Relational database for robust transactions and structural data modeling." },
        { name: "Strapi CMS", level: "Advanced", desc: "Headless CMS to empower clients with easy and seamless content editing." }
      ]
    },
    {
      category: "AI & Integrations",
      icon: <Bot className="w-5 h-5" />,
      items: [
        { name: "OpenAI API", level: "Advanced", desc: "Integrating smart ChatGPT models, embeddings, and customized AI completions." },
        { name: "Claude API", level: "Advanced", desc: "Leveraging Anthropic's model for complex automation and smart content tools." },
        { name: "Vector Databases", level: "Intermediate", desc: "Pinecone / Chroma for building semantic search and AI knowledge bases." },
        { name: "RESTful Webhooks", level: "Expert", desc: "Building seamless integrations with third-party web services and tools." }
      ]
    },
    {
      category: "SEO & Digital Marketing",
      icon: <LineChart className="w-5 h-5" />,
      items: [
        { name: "Google Analytics 4", level: "Expert", desc: "Tracking user events, attribution paths, conversion funnels, and ROI." },
        { name: "Google Search Console", level: "Expert", desc: "Sitemaps submission, indexing optimization, crawling issue fixes, and keyword tracking." },
        { name: "On-Page Schema", level: "Expert", desc: "JSON-LD local business and service schemas for rich snippet search results." },
        { name: "SEO Audit Tools", level: "Advanced", desc: "Detailed audits targeting performance bottlenecks, bad redirect links, and metadata." }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-zinc-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Dynamic Navbar */}
      <Navbar scrolled={scrolled} activeSection="services" />

      {/* Premium Hero Section (Black, editorial asymmetric design) */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-black border-b border-zinc-950 overflow-hidden text-white">
        {/* Soft background light patterns */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full filter blur-[150px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[150px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-orange-400">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Grow Your Business
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-white uppercase">
              Premium Web <br />
              Development, SEO & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-50 to-amber-300">
                Digital Marketing
              </span>
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed border-l-4 border-orange-500 pl-5 max-w-2xl">
              I build powerful, result-oriented websites and integrated marketing strategies. Whether you need corporate web assets, highly ranked SEO pipelines, or custom AI-assisted workflows, I create the solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="/#contact" 
                className="group px-8 py-4 border border-orange-500 text-xs font-bold uppercase tracking-widest bg-orange-500 text-white hover:bg-transparent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get a Free Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/#projects" 
                className="px-8 py-4 border border-zinc-800 hover:border-orange-500 text-xs font-bold uppercase tracking-widest text-zinc-300 bg-white/5 hover:bg-transparent transition-all duration-300 flex items-center justify-center"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Hero Banner Image Box */}
          <div className="lg:col-span-5 relative flex justify-center z-10">
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/5 border border-zinc-850 group">
              <Image 
                src="/services_banner.png" 
                alt="Web Development and Digital Marketing Services" 
                fill 
                className="object-cover group-hover:scale-102 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Floating micro-card */}
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-5 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold">✓</div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-orange-400">SEO & Core Performance</div>
                  <div className="text-xs font-black text-white uppercase">99+ Google Lighthouse Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Layout */}
      <section className="py-24 md:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-24 space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-6 h-[2px] bg-orange-600" />
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-orange-600 font-mono">Expert Solutions</span>
              <div className="w-6 h-[2px] bg-orange-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight uppercase">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Service Verticals</span>
            </h2>
          </div>

          <div className="space-y-32">
            
            {/* Service 1: Web Development */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                <span className="text-[50px] font-black text-orange-200/50 leading-none">01</span>
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                  <Laptop className="w-7 h-7" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-zinc-950 uppercase tracking-tight">
                  Web Development
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Custom, responsive, and high-performance websites built to convert visitors into customers. Every website is optimized for speed, mobile devices, and search engines from day one.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Corporate Development", "Creative Portfolios", "eCommerce Systems", "Custom API Web Apps"].map(t => (
                    <span key={t} className="text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 bg-white border border-zinc-200 text-zinc-600 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="bg-white border border-zinc-200/70 p-8 shadow-xl shadow-zinc-200/30 hover:border-orange-500/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="text-orange-600 w-5 h-5" />
                    <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">Corporate Website Development</h4>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    A professional, credible online presence is essential for any business. I design and develop corporate websites that reflect your brand identity, communicate trust, and convert visitors into leads — built with clean code, fast load times, and SEO best practices baked in.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200/70 p-8 shadow-xl shadow-zinc-200/30 hover:border-orange-500/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <User className="text-orange-600 w-5 h-5" />
                    <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">Portfolio Website Design</h4>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Showcase your work, skills, and achievements with a stunning portfolio website. Perfect for freelancers, creatives, agencies, and professionals who want to stand out and attract the right clients or employers.
                  </p>
                </div>

                <div className="bg-white border border-zinc-200/70 p-8 shadow-xl shadow-zinc-200/30 hover:border-orange-500/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <ShoppingBag className="text-orange-600 w-5 h-5" />
                    <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">eCommerce Website Development</h4>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Launch or scale your online store with a secure, scalable eCommerce platform. From product catalogs and payment gateway integration to inventory management and checkout optimization, I build online stores designed to increase sales and deliver a seamless shopping experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2: SEO Services */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                <span className="text-[50px] font-black text-orange-200/50 leading-none">02</span>
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-zinc-950 uppercase tracking-tight">
                  SEO Services
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Get found on Google. I offer complete Search Engine Optimization (SEO) services to improve your website's visibility, rankings, and organic traffic.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["On-Page & Keyword", "Technical SEO", "Local SEO Optimization", "Performance Analytics"].map(t => (
                    <span key={t} className="text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 bg-white border border-zinc-200 text-zinc-600 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-zinc-200/70 p-8 md:p-10 shadow-xl shadow-zinc-200/30 hover:border-orange-500/20 transition-all">
                <h4 className="text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-100 pb-4 mb-4">
                  Comprehensive Google Search Optimization
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Whether you need a one-time SEO audit or ongoing optimization, I help your website rank higher, attract qualified traffic, and generate more leads and sales.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "On-Page SEO & Keyword Optimization",
                    "Technical SEO Audits",
                    "Local SEO for Businesses",
                    "Content Optimization",
                    "Link Building Strategy",
                    "SEO Performance Reporting"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-zinc-700 font-semibold">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service 3: Digital Marketing */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                <span className="text-[50px] font-black text-orange-200/50 leading-none">03</span>
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                  <Megaphone className="w-7 h-7" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-zinc-950 uppercase tracking-tight">
                  Digital Marketing
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Reach the right audience and grow your brand with data-driven digital marketing strategies.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["SMM Campaigns", "PPC Campaigns", "Email Funnels", "Conversion Optimization"].map(t => (
                    <span key={t} className="text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 bg-white border border-zinc-200 text-zinc-600 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-zinc-200/70 p-8 md:p-10 shadow-xl shadow-zinc-200/30 hover:border-orange-500/20 transition-all">
                <h4 className="text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-100 pb-4 mb-4">
                  ROI-focused Online Growth
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  I combine creativity with analytics to build marketing campaigns that deliver measurable ROI — more traffic, more engagement, and more conversions.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Social Media Marketing",
                    "Pay-Per-Click (PPC) Advertising",
                    "Email Marketing Campaigns",
                    "Content Marketing Strategy",
                    "Conversion Rate Optimization (CRO)",
                    "Analytics & Performance Tracking"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-zinc-700 font-semibold">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service 4: AI Integration */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                <span className="text-[50px] font-black text-orange-200/50 leading-none">04</span>
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-zinc-950 uppercase tracking-tight">
                  AI Integration
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Future-proof your business with intelligent, AI-powered solutions integrated directly into your website or application.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["AI Chatbots", "Custom API Integrations", "Automation Workflows", "Vector Knowledge Bases"].map(t => (
                    <span key={t} className="text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 bg-white border border-zinc-200 text-zinc-600 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-white border border-zinc-200/70 p-8 md:p-10 shadow-xl shadow-zinc-200/30 hover:border-orange-500/20 transition-all">
                <h4 className="text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-100 pb-4 mb-4">
                  Intelligent Business Automation
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  From automating customer support with AI chatbots to building smart features that personalize user experience, I help you leverage AI to save time, cut costs, and deliver better results.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "AI Chatbot Development & Integration",
                    "AI-Powered Content Generation Tools",
                    "Workflow & Process Automation",
                    "Custom AI Feature Development",
                    "API Integration (OpenAI, Claude, and more)",
                    "Data Embeddings & Semantic Search"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-zinc-700 font-semibold">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION: Technologies We Use */}
      <section className="py-24 md:py-32 bg-zinc-950 border-t border-b border-zinc-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-6 h-[2px] bg-orange-500" />
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-orange-500 font-mono">Our Tech Stack</span>
              <div className="w-6 h-[2px] bg-orange-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-550 to-amber-300">We Leverage</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
              I use cutting-edge, modern, and reliable developer frameworks to guarantee fast performance, scaling capabilities, and robust security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((group, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800/80 p-8 rounded-3xl space-y-6 shadow-md">
                <div className="flex items-center gap-3.5 border-b border-zinc-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white">{group.category}</h3>
                </div>

                <div className="space-y-5">
                  {group.items.map((tech, tIdx) => (
                    <div key={tIdx} className="group/item flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-zinc-850 border border-zinc-800 flex items-center justify-center text-orange-400 group-hover/item:border-orange-500/40 transition-all shrink-0">
                        {getTechIcon(tech.name)}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm group-hover/item:text-orange-400 transition-colors">{tech.name}</span>
                          <span className="text-[8px] font-extrabold uppercase px-1.5 py-0.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded">
                            {tech.level}
                          </span>
                        </div>
                        <p className="text-zinc-400 text-xs leading-relaxed">{tech.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-6 h-[2px] bg-orange-600" />
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-orange-600 font-mono">My Value Proposition</span>
              <div className="w-6 h-[2px] bg-orange-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight uppercase">
              Why Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Me?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "End-to-End Solutions",
                desc: "From designing high-fidelity layouts to coding, deploying, configuring search queries, and analytics tracking."
              },
              {
                title: "SEO-First Approach",
                desc: "Every codebase is written with correct structural markup, clean semantics, and site performance optimization from day one."
              },
              {
                title: "Custom, Scalable Code",
                desc: "No template hacks, no shortcuts. Codebases are configured using Next.js/React standard structures for optimal scaling."
              },
              {
                title: "Transparent Communication",
                desc: "Honest status updates, structured milestones, clear pricing models, and no hidden surprises."
              },
              {
                title: "Post-Launch Support",
                desc: "Providing active maintenance, core security patches, backups, and page tweaks to keep your website performing."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/80 p-8 rounded-3xl shadow-xl shadow-zinc-200/30 hover:border-orange-500/20 transition-all duration-300 relative space-y-4 group">
                <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-zinc-950 uppercase tracking-wide group-hover:text-orange-600 transition-colors">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-3">
              <div className="w-6 h-[2px] bg-orange-600" />
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-orange-600 font-mono">Answers</span>
              <div className="w-6 h-[2px] bg-orange-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-zinc-950 tracking-tight uppercase">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="border border-zinc-200 bg-slate-50 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left py-4 px-5 md:py-5 md:px-6 flex justify-between items-center gap-3 focus:outline-none"
                  >
                    <span className="font-bold text-zinc-900 text-sm sm:text-base tracking-wide hover:text-orange-600 transition-colors duration-200">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-zinc-550 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "transform rotate-180 text-orange-600" : ""
                      }`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-zinc-200/50"
                      >
                        <p className="pb-4 px-5 md:pb-5 md:px-6 pt-2 text-zinc-650 text-xs sm:text-sm leading-relaxed bg-slate-50/50">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section (Dark theme for strong closure visual impact) */}
      <section className="py-24 bg-zinc-950 text-white relative text-center">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-orange-600/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-zinc-800/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none animate-pulse" />

        <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">Something Great?</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Let's turn your idea into a high-performing website or digital strategy that drives real results. Get in touch today for a free consultation and quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="/#contact" 
              className="px-8 py-4 border border-orange-500 text-xs font-bold uppercase tracking-widest bg-orange-500 text-white hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
            <a 
              href="/#projects" 
              className="px-8 py-4 border border-zinc-800 hover:border-orange-500 text-xs font-bold uppercase tracking-widest text-white bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              View Portfolio
            </a>
            <a 
              href="/#contact" 
              className="px-8 py-4 border border-zinc-800 hover:border-orange-500 text-xs font-bold uppercase tracking-widest text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Footer (Light to complement page) */}
      <footer className="py-12 border-t border-zinc-200 bg-white text-center text-xs text-zinc-500 uppercase tracking-widest font-bold space-y-4">
        <div className="flex justify-center gap-6">
          <a href="/" className="text-zinc-500 hover:text-orange-650 transition-colors duration-300">
            Back to Home
          </a>
          <span className="text-zinc-300">|</span>
          <a href="/sitemap" className="text-zinc-500 hover:text-orange-650 transition-colors duration-300">
            Sitemap
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Shoukath Otm. All rights reserved.</p>
      </footer>
    </div>
  );
}
