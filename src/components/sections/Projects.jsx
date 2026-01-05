"use client";

import { motion } from "framer-motion";
import projects from "../../data/projects.json";

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center gap-12">
      
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-white tracking-wide"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="w-full flex overflow-x-auto md:grid md:grid-cols-2 md:gap-10 gap-6 scroll-smooth snap-x snap-mandatory">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeInOut" }}
            className="relative flex-shrink-0 w-72 sm:w-80 md:w-auto flex flex-col rounded-2xl bg-neutral-900 border border-blue-500/30
                       shadow-[0_0_15px_rgba(30,144,255,0.25)]
                       overflow-hidden cursor-pointer
                       hover:shadow-[0_0_35px_rgba(30,144,255,0.6)]
                       hover:-translate-y-1 hover:scale-105
                       transition-transform duration-500 ease-in-out
                       snap-start"
          >
            {/* Project Image */}
            <div className="w-full h-48 md:h-56 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-blue-400 text-2xl font-bold">{project.title}</h3>
              <p className="text-neutral-300 text-sm">{project.description}</p>

              {/* Technologies badges */}
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs font-medium bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Neon accent line */}
            <span className="absolute bottom-4 left-6 w-12 h-[2px] bg-blue-400 rounded-full opacity-50"></span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
