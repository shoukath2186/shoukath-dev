"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "./Icons";
import { motion } from 'framer-motion';
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, viewportConfig } from './Animations';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validateField = (name: string, value: string) => {
    let error = "";
    if (!value.trim()) {
      if (name === "name") error = "Name is required";
      else if (name === "phone") error = "Phone number is required";
    } else {
      if (name === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          error = "Please enter a valid email address";
        }
      } else if (name === "name") {
        const nameRegex = /^[a-zA-Z\s.]{2,50}$/;
        if (!nameRegex.test(value)) {
          error = "Name should contain only letters and spaces";
        }
      } else if (name === "phone") {
        const phoneRegex = /^\+?[\d\s-]{7,15}$/;
        if (!phoneRegex.test(value)) {
          error = "Please enter a valid phone number";
        }
      } else if (name === "subject" && value.trim().length < 4) {
        error = "Subject must be at least 4 characters";
      } else if (name === "message" && value.trim().length < 10) {
        error = "Message must be at least 10 characters";
      }
    }
    setFormErrors(prev => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField("name", formData.name);
    const isEmailValid = validateField("email", formData.email);
    const isPhoneValid = validateField("phone", formData.phone);
    const isSubjectValid = validateField("subject", formData.subject);
    const isMessageValid = validateField("message", formData.message);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isSubjectValid || !isMessageValid) {
      return;
    }

    setSubmitStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/1f4480949bca9155290e75d88372cb5d", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _template: "box"
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error("Failed response from server");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 text-white border-t border-zinc-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-zinc-950 to-zinc-950" />
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-800" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-8 h-[2px] bg-orange-500" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">Collaborate</span>
            <div className="w-8 h-[2px] bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[1.1]">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">Connect</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Have a project in mind or looking for a skilled developer? Let's discuss how we can work together.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-12 gap-0 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl bg-zinc-950/80 backdrop-blur-2xl"
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {/* Contact Info Panel */}
          <motion.div variants={slideInLeftVariant} className="lg:col-span-5 bg-zinc-900/50 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[80px]" />
            
            <div className="relative z-10 space-y-12 h-full flex flex-col">
              <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Get in touch</h3>
                <p className="text-zinc-400 leading-relaxed">I'm currently available for full-time opportunities or freelance projects.</p>
              </div>

              <div className="space-y-8 flex-grow">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-800 bg-black flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-bold tracking-widest mb-1">Email</span>
                    <a href="mailto:shoukathot77@gmail.com" className="text-lg text-white font-medium hover:text-orange-400 transition-colors">
                      shoukathot77@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-800 bg-black flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-bold tracking-widest mb-1">Phone</span>
                    <a href="tel:+919207022187" className="text-lg text-white font-medium hover:text-orange-400 transition-colors">
                      +91 9207022187
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-800 bg-black flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-bold tracking-widest mb-1">Location</span>
                    <span className="text-lg text-white font-medium">
                      Calicut, Kerala, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-800/50">
                <h4 className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <LinkedinIcon size={18} />, href: "https://www.linkedin.com/in/shoukath-0t-ab6338246/" },
                    { icon: <GithubIcon size={18} />, href: "https://github.com/shoukath2186" },
                    { icon: <TwitterIcon size={18} />, href: "https://x.com/0tShoukath27840" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black border border-zinc-800 hover:border-orange-500 hover:bg-orange-500 hover:text-white flex items-center justify-center text-zinc-400 transition-all duration-300 transform hover:-translate-y-1">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div variants={slideInRightVariant} className="lg:col-span-7 p-10 md:p-14 bg-black/40">
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder=" " className={`peer w-full bg-transparent border-b-2 px-0 py-3 text-white focus:outline-none focus:ring-0 text-lg transition-colors ${formErrors.name ? "border-red-500" : "border-zinc-800 focus:border-orange-500"}`} />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-zinc-500 font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-orange-500">Your Name *</label>
                  {formErrors.name && <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 uppercase tracking-wider font-bold flex items-center gap-1"><AlertCircle size={10} /> {formErrors.name}</span>}
                </div>

                <div className="relative group">
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder=" " className={`peer w-full bg-transparent border-b-2 px-0 py-3 text-white focus:outline-none focus:ring-0 text-lg transition-colors ${formErrors.email ? "border-red-500" : "border-zinc-800 focus:border-orange-500"}`} />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-zinc-500 font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-orange-500">Email Address</label>
                  {formErrors.email && <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 uppercase tracking-wider font-bold flex items-center gap-1"><AlertCircle size={10} /> {formErrors.email}</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div className="relative group">
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder=" " className={`peer w-full bg-transparent border-b-2 px-0 py-3 text-white focus:outline-none focus:ring-0 text-lg transition-colors ${formErrors.phone ? "border-red-500" : "border-zinc-800 focus:border-orange-500"}`} />
                  <label htmlFor="phone" className="absolute left-0 -top-0.5 text-xs text-zinc-500 font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-0.5 peer-focus:text-xs peer-focus:text-orange-500">Phone Number *</label>
                  {formErrors.phone && <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 uppercase tracking-wider font-bold flex items-center gap-1"><AlertCircle size={10} /> {formErrors.phone}</span>}
                </div>

                <div className="relative group">
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder=" " className={`peer w-full bg-transparent border-b-2 px-0 py-3 text-white focus:outline-none focus:ring-0 text-lg transition-colors ${formErrors.subject ? "border-red-500" : "border-zinc-800 focus:border-orange-500"}`} />
                  <label htmlFor="subject" className="absolute left-0 -top-0.5 text-xs text-zinc-500 font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-0.5 peer-focus:text-xs peer-focus:text-orange-500">Subject</label>
                  {formErrors.subject && <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 uppercase tracking-wider font-bold flex items-center gap-1"><AlertCircle size={10} /> {formErrors.subject}</span>}
                </div>
              </div>

              <div className="relative group pt-4">
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder=" " className={`peer w-full bg-transparent border-b-2 px-0 py-3 text-white focus:outline-none focus:ring-0 resize-none text-lg transition-colors ${formErrors.message ? "border-red-500" : "border-zinc-800 focus:border-orange-500"}`} />
                <label htmlFor="message" className="absolute left-0 -top-0.5 text-xs text-zinc-500 font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-7 peer-focus:-top-0.5 peer-focus:text-xs peer-focus:text-orange-500">Your Message</label>
                {formErrors.message && <span className="absolute -bottom-6 left-0 text-[10px] text-red-500 uppercase tracking-wider font-bold flex items-center gap-1"><AlertCircle size={10} /> {formErrors.message}</span>}
              </div>

              <div className="pt-6">
                <button type="submit" disabled={submitStatus === "sending"} className="w-full md:w-auto px-10 py-4 bg-orange-500 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-orange-600 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2">
                  {submitStatus === "sending" ? "Sending..." : "Send Message"} <ExternalLink size={14} className={submitStatus === "sending" ? "animate-spin" : ""} />
                </button>
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 text-green-400 rounded-md flex items-center gap-2 text-xs uppercase tracking-widest font-bold mt-4">
                  <CheckCircle2 size={16} />
                  Message sent successfully. I will get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-md flex items-center gap-2 text-xs uppercase tracking-widest font-bold mt-4">
                  <AlertCircle size={16} />
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
