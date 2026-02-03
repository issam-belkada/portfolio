"use client";

import { motion } from "framer-motion";
import projects from "../../data/projects.json";

export default function Projects() {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden" id="projects">
      
      {/* --- Section Title --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-20 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(30,144,255,0.3)]">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        <div className="h-1.5 w-24 bg-blue-600 mt-4 rounded-full shadow-[0_0_25px_rgba(37,99,235,0.8)]"></div>
      </motion.div>

      {/* Grid: Mobile Horizontal Scroll & Desktop Grid */}
      <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory 
                      md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -12 }}
            className="group relative flex-shrink-0 w-[85vw] sm:w-[400px] md:w-auto snap-center 
                       flex flex-col rounded-[2.5rem] bg-neutral-900/40 border border-white/5 
                       backdrop-blur-xl overflow-hidden transition-all duration-500
                       hover:border-blue-500/40 hover:bg-neutral-900/60 shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative h-60 w-full overflow-hidden bg-neutral-800">
              <img
                // CORRECTION: On utilise le chemin relatif à la racine du serveur
                src={project.image.startsWith('/') ? project.image : `/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                onError={(e) => { 
                  e.target.src = "https://placehold.co/600x400/171717/3b82f6?text=Software+Solution";
                  e.target.onerror = null; 
                }}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge (Optional Remarkable touch) */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Case Study</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow gap-4">
              <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed line-clamp-3 font-medium">
                {project.description}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-[10px] font-black bg-blue-500/5 text-blue-400/80 
                               rounded-full border border-blue-500/20 group-hover:border-blue-500/50 
                               group-hover:text-blue-300 transition-all duration-300 uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
          </motion.a>
        ))}
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[150px] rounded-full -z-10" />
    </section>
  );
}