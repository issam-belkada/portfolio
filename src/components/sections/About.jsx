"use client"

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-neon-pink text-center mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg leading-8 text-center text-neon-blue"
      >
        Passionate full-stack developer building intelligent systems and innovative digital experiences. 
        Specialized in system architecture, AI integration, and web platforms.
      </motion.p>
    </section>
  );
}
