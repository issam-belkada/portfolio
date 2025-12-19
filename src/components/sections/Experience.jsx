"use client"

import { motion } from "framer-motion";
import experience from "../../data/experience.json";

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-neon-pink text-center mb-12"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-8">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-l-2 border-neon-pink pl-6"
          >
            <h3 className="text-neon-purple text-xl font-semibold">{exp.role} - {exp.company}</h3>
            <p className="text-neon-blue text-sm">{exp.date}</p>
            <p className="text-neon-blue/80 mt-1">{exp.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
