"use client"

import { motion } from "framer-motion";
import skills from "../../data/skills.json";

export default function Skills() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-neon-pink text-center mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4 border border-neon-pink rounded-lg hover:shadow-[0_0_20px_var(--color-neon-pink)] transition"
          >
            <p className="text-neon-blue font-semibold">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
