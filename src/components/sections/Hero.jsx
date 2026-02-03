"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../../assets/profile.png";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Issam BELKADA";

  useEffect(() => {
    let index = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (forward) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
        if (index === fullName.length) forward = false;
      } else {
        setDisplayedName(fullName.slice(0, index - 1));
        index--;
        if (index === 0) forward = true;
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-6 sm:pt-24"
    >
      <div className="flex flex-col pt-20 md:flex-row items-center gap-12 max-w-7xl mx-auto">

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20"
        >
          <img
            src={profilePic}
            alt="Issam Belkada"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl relative z-20 border-2 border-white/10"
          />
          <div className="absolute -inset-4 blur-3xl bg-gradient-to-tr from-[#1E90FF] to-[#1E90FF]/50 opacity-70 rounded-full -z-10" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-20 max-w-2xl text-center md:text-left text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(30,144,255,0.7)]">
            Hi, I’m{" "}
            <span className="text-[#1E90FF] drop-shadow-[0_0_20px_rgba(30,144,255,0.8)]">
              {displayedName}
            </span>
            <span className="animate-blink">|</span>
          </h1>

          <p className="mt-4 text-2xl font-semibold text-[#1E90FF] drop-shadow-[0_0_10px_rgba(30,144,255,0.6)] leading-tight">
            Building Intelligent Systems & Transforming Ideas into Software Solutions
          </p>

          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            <span className="text-white font-black border-b-2 border-[#1E90FF] pb-0.5">Full-Stack Developer</span> 
            <span className="mx-2 text-[#1E90FF]">|</span> 
            <span className="text-white font-black border-b-2 border-white/30 pb-0.5">Information Systems Engineering Student</span>.
            <br className="hidden md:block" />
            <span className="inline-block mt-2 text-white/90 font-medium">
                I build advanced web platforms and applications.
                Passionnate about intelligent systems, AI, and scalable software solutions.
            </span>
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#1E90FF] text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(30,144,255,0.6)] transition-transform duration-300 uppercase tracking-wide text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#1E90FF] text-white rounded-full font-bold hover:bg-[#1E90FF] hover:text-white hover:shadow-[0_0_20px_rgba(30,144,255,0.6)] transition-all duration-300 uppercase tracking-wide text-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-start gap-8 mt-10 text-2xl text-[#1E90FF]">
            <a
              href="https://github.com/issam-belkada"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/issam-belkada-735886311/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:belkadaissam@gmail.com"
              className="hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}