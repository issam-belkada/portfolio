// src/components/SkillsCarousel.jsx
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript, SiPython, SiPhp, SiHtml5, SiCss3, SiTailwindcss, SiReact,
  SiOracle, SiLaravel, SiPostgresql, SiMysql, SiMongodb, SiDocker,
  SiGit, SiLinux, SiPostman, SiC
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Custom Neo4j Logo Component (since it's not in react-icons)
const Neo4jLogo = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.898 8.287l-2.399 4.157 2.399 4.156h-4.795l-2.399-4.156-2.399 4.156H3.307l4.796-8.313-4.796-8.312h4.795l2.399 4.156 2.399-4.156h4.795l-2.399 4.156 2.399 4.157z"/>
  </svg>
);

// Import skills from JSON file
import skillsData from '../../data/skills.json';

// Map icon strings to actual components
const iconMap = {
  SiJavascript, SiPython, SiPhp, SiHtml5, SiCss3, SiTailwindcss, SiReact,
  SiOracle, SiLaravel, SiPostgresql, SiMysql, SiMongodb, SiDocker,
  SiGit, SiLinux, SiPostman, SiC,
  FaJava,
  Neo4jLogo
};

// Process JSON data to include Icon components
const processedSkillsData = skillsData.map(skill => ({
  ...skill,
  Icon: iconMap[skill.icon] || SiReact // Fallback to React icon if not found
}));

// --- Custom Hook to get the window size ---
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  
  useEffect(() => {
    let timeoutId;
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 150);
    }
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);
  
  return windowSize;
};

// --- Helper to generate dynamic styles for the 3D effect ---
const getDynamicStyles = (count) => {
  const center = Math.floor(count / 2);
  const depths = Array.from({ length: count }, (_, i) => Math.abs(center - i) * 80);
  const scales = Array.from({ length: count }, (_, i) => 1 - Math.abs(center - i) * 0.2);
  const opacities = Array.from({ length: count }, (_, i) => 1 - Math.abs(center - i) * 0.25);
  const blurs = Array.from({ length: count }, (_, i) => (i === 0 || i === count - 1) ? 3 : 0);
  const rotations = Array.from({ length: count }, (_, i) => (center - i) * 2);
  return { count, depths, scales, blurs, opacities, rotations };
};

export default function SkillsCarousel() {
  const { width } = useWindowSize();
  const [activeSkill, setActiveSkill] = useState(null);
  const intervalRef = useRef(null);

  // Get visible config based on screen width
  const getVisibleConfig = useCallback(() => {
    if (!width) return getDynamicStyles(5);
    if (width >= 1024) return getDynamicStyles(7);
    if (width >= 768) return getDynamicStyles(5);
    return getDynamicStyles(3);
  }, [width]);

  const { count, depths, scales, blurs, opacities, rotations } = getVisibleConfig();

  const [topRow, setTopRow] = useState([]);
  const [bottomRow, setBottomRow] = useState([]);

  // Initialize carousel
  useEffect(() => {
    const initialTop = processedSkillsData.slice(0, count);
    const initialBottom = processedSkillsData.slice(count, count * 2);
    setTopRow(initialTop);
    setBottomRow(initialBottom);
  }, [count]);

  // Auto-rotation logic - NEVER STOPS
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTopRow(prev => {
        const currentIndex = processedSkillsData.findIndex(
          skill => skill.name === prev[0]?.name
        );
        const nextIndex = (currentIndex + 1) % processedSkillsData.length;
        
        const newRow = [];
        for (let i = 0; i < count; i++) {
          const skillIndex = (nextIndex + i) % processedSkillsData.length;
          newRow.push(processedSkillsData[skillIndex]);
        }
        return newRow;
      });
      
      setBottomRow(prev => {
        const currentIndex = processedSkillsData.findIndex(
          skill => skill.name === prev[0]?.name
        );
        const prevIndex = (currentIndex - 1 + processedSkillsData.length) % processedSkillsData.length;
        
        const newRow = [];
        for (let i = 0; i < count; i++) {
          const skillIndex = (prevIndex + i) % processedSkillsData.length;
          newRow.push(processedSkillsData[skillIndex]);
        }
        return newRow;
      });
    }, 1200);
    
    return () => clearInterval(intervalRef.current);
  }, [count]);

  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-24 flex flex-col items-center gap-10 sm:gap-16 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-4">
          Technical <span className="text-blue-500">Stack</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)] mb-8"></div>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Technologies and tools I use to build exceptional digital experiences
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Top Row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 sm:gap-6 lg:gap-8 perspective-[1600px] h-28 sm:h-36 items-center mb-8 sm:mb-12"
        >
          {topRow.map((skill, i) => (
            <motion.div
              key={`top-${skill.name}-${i}`}
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setActiveSkill(skill)}
              onHoverEnd={() => setActiveSkill(null)}
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border-2 flex items-center justify-center transition-all duration-500 ease-out group-hover:shadow-xl"
                style={{
                  transform: `translateZ(${-depths[i]}px) scale(${scales[i]}) rotateY(${rotations[i]}deg)`,
                  filter: `blur(${blurs[i]}px)`,
                  opacity: opacities[i],
                  borderImage: `linear-gradient(45deg, #3b82f6, #06b6d4) 1`,
                  boxShadow: activeSkill?.name === skill.name
                    ? "0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 15px rgba(59, 130, 246, 0.1)"
                    : "0 0 15px rgba(59, 130, 246, 0.2)"
                }}
              >
                <skill.Icon className="text-blue-400 text-3xl sm:text-4xl lg:text-5xl transition-transform duration-300 group-hover:scale-110" />
              </div>
              
              {/* Skill Label (shown on hover) */}
              <AnimatePresence>
                {activeSkill?.name === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  >
                    <div className="px-3 py-2 rounded-lg bg-gray-900/90 backdrop-blur-sm border border-gray-700 shadow-xl">
                      <div className="text-white font-semibold text-sm">{skill.name}</div>
                      <div className="text-blue-300 text-xs mt-1">{skill.level}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 sm:gap-6 lg:gap-8 perspective-[1600px] h-28 sm:h-36 items-center"
        >
          {bottomRow.map((skill, i) => (
            <motion.div
              key={`bottom-${skill.name}-${i}`}
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setActiveSkill(skill)}
              onHoverEnd={() => setActiveSkill(null)}
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border-2 flex items-center justify-center transition-all duration-500 ease-out group-hover:shadow-xl"
                style={{
                  transform: `translateZ(${-depths[i]}px) scale(${scales[i]}) rotateY(${-rotations[i]}deg)`,
                  filter: `blur(${blurs[i]}px)`,
                  opacity: opacities[i],
                  borderImage: `linear-gradient(45deg, #8b5cf6, #ec4899) 1`,
                  boxShadow: activeSkill?.name === skill.name
                    ? "0 0 30px rgba(139, 92, 246, 0.4), inset 0 0 15px rgba(139, 92, 246, 0.1)"
                    : "0 0 15px rgba(139, 92, 246, 0.2)"
                }}
              >
                <skill.Icon className="text-purple-400 text-3xl sm:text-4xl lg:text-5xl transition-transform duration-300 group-hover:scale-110" />
              </div>
              
              {/* Skill Label (shown on hover) */}
              <AnimatePresence>
                {activeSkill?.name === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  >
                    <div className="px-3 py-2 rounded-lg bg-gray-900/90 backdrop-blur-sm border border-gray-700 shadow-xl">
                      <div className="text-white font-semibold text-sm">{skill.name}</div>
                      <div className="text-purple-300 text-xs mt-1">{skill.level}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}