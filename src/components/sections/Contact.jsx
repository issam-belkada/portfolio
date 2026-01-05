"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 max-w-5xl mx-auto flex flex-col items-center gap-12"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white tracking-wide text-center"
      >
        Contact
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-neutral-400 text-center max-w-2xl"
      >
        Interested in collaboration, internships, or opportunities in software
        engineering and information systems? Feel free to reach out.
      </motion.p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full">
        
        {/* Email */}
        <motion.a
          href="mailto:your.email@example.com"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="group relative rounded-2xl border border-blue-500/30 bg-neutral-900 p-6
                     shadow-[0_0_20px_rgba(30,144,255,0.25)]
                     hover:shadow-[0_0_35px_rgba(30,144,255,0.5)]
                     hover:-translate-y-1 transition-all duration-500"
        >
          <Mail className="text-blue-400 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-blue-400">Email</h3>
          <p className="text-neutral-300 text-sm">your.email@example.com</p>
          <span className="absolute bottom-4 left-6 w-10 h-[2px] bg-blue-400 opacity-50 rounded-full" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="group relative rounded-2xl border border-blue-500/30 bg-neutral-900 p-6
                     shadow-[0_0_20px_rgba(30,144,255,0.25)]
                     hover:shadow-[0_0_35px_rgba(30,144,255,0.5)]
                     hover:-translate-y-1 transition-all duration-500"
        >
          <Linkedin className="text-blue-400 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-blue-400">LinkedIn</h3>
          <p className="text-neutral-300 text-sm">linkedin.com/in/yourprofile</p>
          <span className="absolute bottom-4 left-6 w-10 h-[2px] bg-blue-400 opacity-50 rounded-full" />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="group relative rounded-2xl border border-blue-500/30 bg-neutral-900 p-6
                     shadow-[0_0_20px_rgba(30,144,255,0.25)]
                     hover:shadow-[0_0_35px_rgba(30,144,255,0.5)]
                     hover:-translate-y-1 transition-all duration-500"
        >
          <Github className="text-blue-400 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-blue-400">GitHub</h3>
          <p className="text-neutral-300 text-sm">github.com/yourusername</p>
          <span className="absolute bottom-4 left-6 w-10 h-[2px] bg-blue-400 opacity-50 rounded-full" />
        </motion.a>
      </div>
    </section>
  );
}
