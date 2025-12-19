"use client";

import { motion } from "framer-motion";
import DarkVeil from "../DarkVeil";
import profilePic from "./../../assets/profile.png"; // Replace with your profile image

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      <DarkVeil className="opacity-40" />
      {/* Neon grid background */}
      <div className="absolute inset-0 bg-[url('/src/assets/bg-grid.svg')] bg-no-repeat bg-center bg-cover opacity-30 -z-10"></div>
      {/* Dark veil overlay */}
      <div className="absolute inset-0 bg-black/40 -z-5"></div>

      {/* Profile picture */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-6 rounded-full overflow-hidden w-36 h-36 md:w-48 md:h-48 border-4 border-neon-purple shadow-neon"
      >
        <img src={profilePic} alt="Issam Belkada" className="object-cover" />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold neon-text"
      >
        Issam Belkada
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-2xl text-neon-purple max-w-xl"
      >
        Full-stack Developer & AI Student | Cyberpunk 3D Neon Portfolio
      </motion.p>

      {/* Call to action buttons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-neon-purple text-black font-semibold rounded-full shadow-neon hover:scale-105 transition-transform"
        >
          My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-neon-purple text-neon-purple font-semibold rounded-full shadow-neon hover:bg-neon-purple hover:text-black transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
