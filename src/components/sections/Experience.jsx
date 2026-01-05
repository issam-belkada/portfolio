"use client";

import { motion } from "framer-motion";
import experiences from "../../data/experience.json";

export default function Experience() {
  return (
    <section className="w-full py-20 px-6 max-w-6xl mx-auto flex flex-col items-center gap-12">
      
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-white tracking-wide"
      >
        Experience
      </motion.h2>

      {/* Timeline Cards */}
      <div className="flex flex-col gap-8 w-full">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeInOut" }}
            className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-8 rounded-2xl border border-blue-500/30 bg-neutral-900 shadow-[0_0_20px_rgba(30,144,255,0.25)] p-6 md:p-8 hover:shadow-[0_0_35px_rgba(30,144,255,0.5)] transition-transform duration-500 hover:-translate-y-1"
          >
            {/* Left: Duration */}
            <div className="text-blue-400 font-mono text-sm md:text-base w-32 flex-shrink-0">
              {exp.duration}
            </div>

            {/* Right: Info */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-blue-400">{exp.role}</h3>
              <h4 className="text-neon-purple text-sm md:text-base">{exp.company}</h4>
              <p className="text-neutral-300 text-sm md:text-base">{exp.description}</p>
            </div>

            {/* Neon accent line */}
            <span className="absolute bottom-4 left-6 w-12 h-[2px] bg-blue-400 rounded-full opacity-50"></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
