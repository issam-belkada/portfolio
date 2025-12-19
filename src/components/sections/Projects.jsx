"use client"

import { motion } from "framer-motion";
import projects from "../../data/projects.json";

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-neon-pink text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-neon-pink rounded-lg hover:shadow-[0_0_25px_var(--color-neon-pink)] transition"
          >
            <h3 className="text-neon-purple text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-neon-blue text-sm">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
