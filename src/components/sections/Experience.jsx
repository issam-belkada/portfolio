"use client";

import { motion } from "framer-motion";
import experiences from "../../data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 px-4 md:px-6 max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-16 relative overflow-hidden">
      
      {/* Title - Smaller on mobile */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center z-10"
      >
        <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(30,144,255,0.3)]">
          Professional <span className="text-blue-500">Journey</span>
        </h2>
        <div className="h-1 w-16 md:h-1.5 md:w-24 bg-blue-600 mx-auto mt-3 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
      </motion.div>

      {/* Cards Container */}
      <div className="flex flex-col gap-6 md:gap-10 w-full relative z-10">
        <div className="absolute left-0 md:left-8 top-0 h-full w-[1px] bg-gradient-to-b from-blue-500/30 via-transparent to-transparent hidden md:block" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative flex flex-col md:flex-row md:items-start gap-4 md:gap-10 rounded-2xl md:rounded-3xl border border-white/5 bg-neutral-900/40 backdrop-blur-md p-5 md:p-10 transition-all duration-500 hover:border-blue-500/40 hover:bg-neutral-900/60"
          >
            {/* Logo Section - Compact on Mobile */}
            <div className="flex flex-row md:flex-col items-center gap-4 md:gap-4 flex-shrink-0">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 p-2 md:p-4 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-blue-500/50 shadow-2xl relative">
                <img 
                  src={`/assets/${exp.logo}`} 
                  alt={exp.company}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-blue-500 font-bold text-xl md:text-2xl">${exp.company[0]}</span>`;
                  }}
                />
              </div>
              
              <span className="inline-block px-2.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest italic group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {exp.duration}
              </span>
            </div>

            {/* Text Content - Tighter Typography */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                {exp.role}
              </h3>
              <h4 className="text-[#1E90FF] font-bold text-sm md:text-lg flex items-center gap-2 mt-0.5 md:mt-1">
                <span className="w-3 h-[1.5px] md:w-4 md:h-[2px] bg-blue-500"></span>
                {exp.company}
              </h4>
              <p className="text-neutral-400 mt-3 md:mt-4 text-xs md:text-base leading-relaxed italic font-light">
                {exp.description}
              </p>
            </div>

            {/* Subtle Glow */}
            <div className="absolute -inset-1 bg-blue-500/5 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/5 blur-[60px] rounded-full -z-0 pointer-events-none"></div>
    </section>
  );
}