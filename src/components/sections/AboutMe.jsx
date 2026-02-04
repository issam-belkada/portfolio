"use client";

import { motion } from "framer-motion";
import aboutmePic from "../../assets/Software Developer.jpg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-transparent overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

        {/* ========= TEXT SECTION ========= */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-2">
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">Who I Am</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
              About <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">Me</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full mt-2" />
          </div>

          <div className="relative group">
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              Passionate About <span className="text-blue-400">Systems</span>, <br />
              Software, and <span className="text-blue-400">Innovation</span>
            </p>
          </div>

          <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-medium max-w-xl">
            I am <span className="text-white font-bold border-b-2 border-blue-600">Issam BELKADA</span>, 
            a Systems & Information Engineer specializing in software development, web technologies, and AI. 
            I build intelligent, efficient, and user-focused solutions using strong foundations in algorithms and system architectures.
          </p>

          {/* Stats Cards - Modernized */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { label: "Years of Study", val: "3+" },
              { label: "Projects Done", val: "10+" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
                className="bg-neutral-900/50 border border-white/5 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-1 transition-colors"
              >
                <span className="text-3xl md:text-4xl font-black text-blue-500 tracking-tighter italic">
                  {stat.val}
                </span>
                <span className="text-white/40 uppercase font-black text-[10px] tracking-widest leading-none">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ========= IMAGE SECTION ========= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative group">
            {/* Animated Frame Behind Image */}
            <div className="absolute -inset-4 border border-blue-600/20 rounded-[2rem] -z-10 group-hover:-inset-2 transition-all duration-500" />
            
            {/* Floating Info Tag */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-blue-600 text-white font-black text-xs px-4 py-2 rounded-full shadow-xl z-20 italic uppercase tracking-widest hidden md:block"
            >
              Available for work
            </motion.div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl w-[280px] md:w-[380px] lg:w-[440px]">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={aboutmePic}
                alt="Issam Belkada"
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Scanline Animation Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-1/2 w-full -top-full group-hover:top-full transition-all duration-[1.5s] ease-in-out pointer-events-none" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Accent Corner */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-4 border-b-4 border-blue-600 rounded-bl-3xl -z-10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}