"use client";

import { motion } from "framer-motion";
import aboutmePic from "../../assets/Software Developer.jpg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-black/10 to-black/20"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-16">

        {/* ========= TEXT SECTION ========= */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#1E90FF] drop-shadow-[0_0_20px_rgba(30,144,255,0.8)] tracking-tighter uppercase italic">
            About Me
          </h2>

          <p className="text-xl md:text-2xl font-bold text-white/90 border-l-4 border-[#1E90FF] pl-4">
            Passionate About Systems, Software, and Innovation
          </p>

          <p className="text-white/70 leading-relaxed text-lg md:text-xl italic">
            I am <span className="text-white font-semibold underline decoration-[#1E90FF] decoration-2 underline-offset-4">Issam BELKADA</span>, a Systems & Information Engineer specializing in
            software development, web technologies, and AI. I build intelligent,
            efficient, and user-focused solutions using strong foundations in
            algorithms, databases, and system architectures.
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap gap-6 mt-6">
            <motion.div
              className="bg-[#1E90FF]/10 border border-[#1E90FF]/30 backdrop-blur-md rounded-2xl px-8 py-6 text-center flex-1 min-w-[160px]"
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(30, 144, 255, 0.2)",
                borderColor: "rgba(30, 144, 255, 0.6)",
                boxShadow: "0 15px 30px rgba(30,144,255,0.3)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl md:text-5xl font-black text-[#1E90FF] block">
                3+
              </span>
              <p className="text-white font-bold mt-2 uppercase tracking-tighter text-sm">Years of Study</p>
            </motion.div>

            <motion.div
              className="bg-[#1E90FF]/10 border border-[#1E90FF]/30 backdrop-blur-md rounded-2xl px-8 py-6 text-center flex-1 min-w-[160px]"
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(30, 144, 255, 0.2)",
                borderColor: "rgba(30, 144, 255, 0.6)",
                boxShadow: "0 15px 30px rgba(30,144,255,0.3)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl md:text-5xl font-black text-[#1E90FF] block">
                10+
              </span>
              <p className="text-white font-bold mt-2 uppercase tracking-tighter text-sm">Projects Completed</p>
            </motion.div>
          </div>
        </motion.div>

        {/* ========= IMAGE SECTION ========= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <motion.div
            whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative cursor-pointer w-[280px] md:w-[360px] lg:w-[420px] rounded-3xl [transform-style:preserve-3d]"
          >
            {/* Image Glow Effect */}
            <div className="absolute -inset-2 bg-[#1E90FF]/20 blur-2xl rounded-3xl -z-10 group-hover:bg-[#1E90FF]/40 transition-all duration-500"></div>
            
            <img
              src={aboutmePic}
              alt="Issam Belkada Software Engineer"
              className="rounded-3xl w-full h-auto object-cover border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />

            {/* Floating Frame Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/5 pointer-events-none"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}