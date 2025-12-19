"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import skillsData from "../../data/skills.json"; // adjust path

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 bg-gradient-to-b from-black/10 to-black/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#1E90FF] text-center mb-16 drop-shadow-[0_0_20px_rgba(30,144,255,0.8)]">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillsData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#1E90FF] mb-6">
                {section.category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {section.skills.map((skill, i) => (
                  <Tilt
                    key={i}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={500}
                    glareEnable={true}
                    glareMaxOpacity={0.2}
                    className="w-full"
                  >
                    <motion.div
                      className="bg-black/50 border border-[#1E90FF]/40 rounded-2xl p-4 flex items-center justify-center text-center shadow-[0_0_20px_rgba(30,144,255,0.3)] hover:shadow-[0_0_30px_rgba(30,144,255,0.6)] transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.08, rotateY: 5, rotateX: 5 }}
                    >
                      <span className="text-white/80 text-sm md:text-base">
                        {skill}
                      </span>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
