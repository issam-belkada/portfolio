"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 max-w-6xl mx-auto flex flex-col items-center gap-16 relative overflow-hidden"
    >
      {/* --- Section Title --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(30,144,255,0.3)]">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
      </motion.div>

      {/* --- Subtitle --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-xl md:text-2xl text-neutral-400 text-center max-w-3xl font-light italic leading-relaxed"
      >
        "Ready to build the future? Whether it's for <span className="text-white font-bold">collaboration</span>, 
        <span className="text-white font-bold"> internships</span>, or <span className="text-white font-bold">intelligent systems</span>, 
        my inbox is always open."
      </motion.p>

      {/* --- Contact Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
        
        {/* Card Component Helper */}
        {[
          { 
            icon: Mail, 
            title: "Email", 
            value: "belkadaissam@gmail.com", 
            link: "mailto:belkadaissam@gmail.com",
            color: "from-blue-600/20"
          },
          { 
            icon: Linkedin, 
            title: "LinkedIn", 
            value: "issam-belkada", 
            link: "https://www.linkedin.com/in/issam-belkada-735886311/",
            color: "from-cyan-600/20"
          },
          { 
            icon: Github, 
            title: "GitHub", 
            value: "issam-belkada", 
            link: "https://github.com/issam-belkada",
            color: "from-indigo-600/20"
          }
        ].map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target={item.title !== "Email" ? "_blank" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 shadow-2xl"
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <item.icon size={28} className="transition-transform group-hover:rotate-12" />
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              
              <h3 className="text-xs uppercase tracking-[0.2em] font-black text-blue-500 mb-1">
                {item.title}
              </h3>
              <p className="text-white font-bold text-lg break-all">
                {item.value}
              </p>
              
              <div className="mt-8 w-12 h-1 bg-blue-500/30 rounded-full group-hover:w-full transition-all duration-700" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
}