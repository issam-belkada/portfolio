"use client";

import { motion } from "framer-motion";
import projects from "../../data/projects.json";

export default function Projects() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden" id="projects">
      
      {/* --- Section Title --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12 md:mb-20 text-center"
      >
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        <div className="h-1 w-16 md:h-1.5 md:w-24 bg-blue-600 mt-3 rounded-full shadow-[0_0_25px_rgba(37,99,235,0.8)]"></div>
      </motion.div>

      {/* Container with Horizontal Scroll Hints */}
      <div className="relative group/container">
        
        {/* Subtle Side Gradients (Mobile Only) */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-transparent to-transparent z-20 pointer-events-none md:hidden" />

        {/* Grid: Mobile Horizontal Scroll & Desktop Grid */}
        <div className="flex overflow-x-auto pb-8 gap-5 snap-x snap-mandatory 
                        md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 
                        scrollbar-hide">
          
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
              whileHover={{ y: -10 }}
              className="group relative flex-shrink-0 w-[82vw] sm:w-[350px] md:w-auto snap-center 
                         flex flex-col rounded-[2rem] bg-neutral-900/40 border border-white/5 
                         backdrop-blur-xl overflow-hidden transition-all duration-500
                         hover:border-blue-500/40 hover:bg-neutral-900/60 shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative h-48 md:h-60 w-full overflow-hidden bg-neutral-800">
                <img
                  src={project.image.startsWith('/') ? project.image : `/projects/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => { 
                    e.target.src = "https://placehold.co/600x400/171717/3b82f6?text=Project";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
                  <p className="text-[8px] md:text-[10px] font-black text-blue-400 uppercase tracking-widest">Case Study</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-8 flex flex-col flex-grow gap-3">
                <h3 className="text-white text-xl md:text-3xl font-black tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-xs md:text-base leading-relaxed line-clamp-2 md:line-clamp-3 font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="px-2 py-0.5 text-[8px] md:text-[10px] font-black bg-blue-500/5 text-blue-400/80 rounded-full border border-blue-500/20 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex md:hidden items-center justify-center gap-2 mt-2 text-blue-500/40 text-[10px] font-bold uppercase tracking-widest"
      >
        <span>Swipe</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.span>
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
}