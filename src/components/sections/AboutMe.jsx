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

        {/* ========= TEXT FIRST ========= */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#1E90FF] drop-shadow-[0_0_20px_rgba(30,144,255,0.8)]">
            About Me
          </h2>

          <p className="text-xl md:text-2xl font-semibold text-white/80">
            Passionate About Systems, Software, and Innovation
          </p>

          <p className="text-white/70 leading-relaxed text-lg md:text-xl">
            I am Issam BELKADA, a Systems & Information Engineer specializing in
            software development, web technologies, and AI. I build intelligent,
            efficient, and user-focused solutions using strong foundations in
            algorithms, databases, and system architectures.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            <motion.div
              className="bg-[#1E90FF]/20 border border-[#1E90FF]/50 rounded-2xl px-6 py-4 text-center flex-1"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(30,144,255,0.6)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl md:text-5xl font-bold text-[#1E90FF] drop-shadow-[0_0_15px_rgba(30,144,255,0.7)]">
                3+
              </span>
              <p className="text-white/80 mt-2 font-medium">Years of Study</p>
            </motion.div>

            <motion.div
              className="bg-[#1E90FF]/20 border border-[#1E90FF]/50 rounded-2xl px-6 py-4 text-center flex-1"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(30,144,255,0.6)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl md:text-5xl font-bold text-[#1E90FF] drop-shadow-[0_0_15px_rgba(30,144,255,0.7)]">
                10+
              </span>
              <p className="text-white/80 mt-2 font-medium">Projects Completed</p>
            </motion.div>
          </div>
        </motion.div>

        {/* ========= IMAGE LAST ========= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <motion.div
            whileHover={{ rotateY: 12, rotateX: -6, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 140, damping: 10 }}
            className="
              relative cursor-pointer 
              w-[280px] md:w-[360px] lg:w-[420px]
              rounded-3xl overflow-hidden
              shadow-[0_0_40px_rgba(30,144,255,0.45)]
              [transform-style:preserve-3d]
            "
          >
            <img
              src={aboutmePic}
              alt="Software Engineer"
              className="rounded-3xl w-full h-auto object-cover"
            />

            <div
              className="
                absolute -inset-8 -z-10 rounded-3xl
                blur-3xl bg-[#1E90FF]/40
              "
            ></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
