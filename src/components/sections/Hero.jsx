"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../../assets/profile.png";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Issam BELKADA";
  const controls = useAnimation();

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
      <div className="flex flex-col pt-20 md:flex-row items-center gap-12">

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
            className="w-64 h-64 object-cover rounded-full shadow-xl relative z-20"
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
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(30,144,255,0.7)]">
            Hi, I’m{" "}
            <span className="text-[#1E90FF] drop-shadow-[0_0_20px_rgba(30,144,255,0.8)]">
              {displayedName}
            </span>
            <span className="animate-blink">|</span>
          </h1>

          <p className="mt-4 text-2xl font-semibold text-[#1E90FF] drop-shadow-[0_0_10px_rgba(30,144,255,0.6)]">
            Building Intelligent Systems & Transforming Ideas into Software Solutions
          </p>

          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Full-Stack Developer • AI Student • Information Systems Engineer.
            I build advanced web platforms with React, Laravel, MySQL, and Neo4j.
            Passionate about intelligent systems, AI, and scalable software solutions.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#1E90FF] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(30,144,255,0.6)] transition-transform duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#1E90FF] text-white rounded-full font-semibold hover:bg-[#1E90FF] hover:text-white hover:shadow-[0_0_20px_rgba(30,144,255,0.6)] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-8 mt-8 text-2xl text-[#1E90FF]">
            <a
              href="https://github.com/YourGithub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(30,144,255,0.6)] transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/YourLinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(30,144,255,0.6)] transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(30,144,255,0.6)] transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
