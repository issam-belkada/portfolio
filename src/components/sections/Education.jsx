"use client"

import { motion } from "framer-motion";
import education from "../../data/education.json";

export default function Education() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-neon-pink text-center mb-12"
      >
        Education
      </motion.h2>

      <div className="flex flex-col gap-8">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-l-2 border-neon-pink pl-6"
          >
            <h3 className="text-neon-purple text-xl font-semibold">{edu.degree} - {edu.school}</h3>
            <p className="text-neon-blue text-sm">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
