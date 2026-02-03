"use client";

import { motion } from "framer-motion";
import experiences from "../../data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 px-6 max-w-6xl mx-auto flex flex-col items-center gap-16">
      
      {/* Section Title - Remarkable Style */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(30,144,255,0.3)]">
          Professional <span className="text-blue-500">Journey</span>
        </h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
      </motion.div>

      {/* Timeline Cards */}
      <div className="flex flex-col gap-10 w-full relative">
        {/* Decorative central line for desktop */}
        <div className="absolute left-0 md:left-8 top-0 h-full w-[1px] bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent hidden md:block" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="group relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 rounded-3xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:border-blue-500/40 hover:bg-neutral-900/60 hover:shadow-[0_20px_50px_rgba(30,144,255,0.15)]"
          >
            {/* Left Side: Duration with Neon Badge Style */}
            <div className="flex-shrink-0">
              <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 font-black text-xs md:text-sm uppercase tracking-widest italic group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {exp.duration}
              </span>
            </div>

            {/* Right Side: Info Content */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-[#1E90FF] font-bold text-lg flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-blue-500"></span>
                  {exp.company}
                </h4>
              </div>

              <p className="text-neutral-400 leading-relaxed text-base md:text-lg italic font-light">
                {exp.description}
              </p>

              {/* Skill Tags (If you have them in JSON, or just as a decorative element) */}
              <div className="flex flex-wrap gap-2 mt-2">
                 <span className="text-[10px] uppercase font-black tracking-widest text-white/30">Industry Experience // System Design</span>
              </div>
            </div>

            {/* Subtle Neon Glow behind cards */}
            <div className="absolute -inset-1 bg-blue-500/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </motion.div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 blur-[150px] rounded-full -z-10"></div>
    </section>
  );
}