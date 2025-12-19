"use client"

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-neon-pink mb-8"
      >
        Contact Me
      </motion.h2>

      <motion.a
        href="mailto:example@email.com"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-8 py-4 border border-neon-blue rounded-lg text-neon-blue hover:shadow-[0_0_20px_var(--color-neon-blue)] transition"
      >
        Send Email
      </motion.a>
    </section>
  );
}
