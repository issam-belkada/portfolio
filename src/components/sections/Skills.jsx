import { useMemo } from "react";
import { motion } from "framer-motion";

import {
  SiJavascript, SiPython, SiPhp, SiHtml5, SiCss3, SiTailwindcss, SiReact,
  SiOracle, SiLaravel, SiPostgresql, SiMysql, SiMongodb, SiDocker,
  SiGit, SiLinux, SiPostman, SiC
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import skillsData from '../../data/skills.json';

const iconMap = {
  SiJavascript, SiPython, SiPhp, SiHtml5, SiCss3, SiTailwindcss, SiReact,
  SiOracle, SiLaravel, SiPostgresql, SiMysql, SiMongodb, SiDocker,
  SiGit, SiLinux, SiPostman, SiC, FaJava
};

export default function Skills() {
  // Filtrage et préparation des données
  const processedSkills = useMemo(() => 
    skillsData
      .filter(s => s.icon)
      .map(skill => ({
        ...skill,
        Icon: iconMap[skill.icon] || SiReact
      })), []);

  // On triple les données pour éviter tout trou visuel pendant le défilement
  const tripleSkills = [...processedSkills, ...processedSkills, ...processedSkills];

  const SkillCard = ({ skill }) => {
    const color = skill.color || "#3b82f6";
    
    return (
      <div className="flex flex-col items-center gap-3 px-6 group">
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-900/40 backdrop-blur-md border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            boxShadow: `0 4px 15px rgba(0,0,0,0.3)`
          }}
        >
          <skill.Icon 
            style={{ color: color }}
            className="text-3xl md:text-4xl filter drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]" 
          />
        </div>
        
        {/* Description visible en permanence et petite */}
        <div className="text-center pointer-events-none">
          <div className="text-white font-bold text-[10px] md:text-xs uppercase tracking-tight">
            {skill.name}
          </div>
          <div 
            className="text-[8px] md:text-[9px] font-medium opacity-80 mt-0.5 max-w-[80px] leading-tight"
            style={{ color: color }}
          >
            {skill.level}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="relative w-full py-20 overflow-hidden bg-transparent">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          Technical <span className="text-blue-500">Stack</span>
        </h2>
        <div className="h-1 w-16 bg-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
      </div>

      {/* Container des lignes de défilement */}
      <div className="flex flex-col gap-8 pause-on-hover">
        
        {/* Ligne 1 - Défilement normal */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex items-center">
            {tripleSkills.map((skill, i) => (
              <SkillCard key={`top-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Ligne 2 - Défilement inversé */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee-reverse flex items-center">
            {tripleSkills.map((skill, i) => (
              <SkillCard key={`bottom-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Masques de dégradé sur les côtés pour la fluidité visuelle */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />
    </section>
  );
}