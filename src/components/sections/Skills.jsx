// src/components/SkillsCarousel.jsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript, SiPython, SiPhp, SiHtml5, SiCss3, SiTailwindcss, SiReact,
  SiOracle, SiLaravel, SiPostgresql, SiMysql, SiMongodb, SiDocker,
  SiGit, SiLinux, SiPostman, SiC
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// --- Custom Hook to get the window size ---
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: undefined });
  useEffect(() => {
    function handleResize() { setWindowSize({ width: window.innerWidth }); }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
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
  return { count, depths, scales, blurs, opacities };
};

export default function Skills() {
  const icons = [
    SiJavascript, SiPython, FaJava, SiC, SiPhp, SiHtml5, SiCss3, SiTailwindcss,
    SiReact, SiLaravel, SiPostgresql, SiMysql, SiMongodb, SiOracle, SiDocker,
    SiGit, SiLinux, SiPostman
  ];

  const { width } = useWindowSize();
  const [pause, setPause] = useState(false);
  const intervalRef = useRef(null);

  const getVisibleConfig = () => {
    if (width >= 1024) return getDynamicStyles(7);
    return getDynamicStyles(5);
  };

  const { count, depths, scales, blurs, opacities } = getVisibleConfig();

  const [top, setTop] = useState(icons.slice(0, count));
  const [bottom, setBottom] = useState(icons.slice(count, count * 2));

  useEffect(() => {
    setTop(icons.slice(0, count));
    setBottom(icons.slice(count, count * 2));
  }, [count]);

  useEffect(() => {
    if (pause) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setTop(prev => {
        const next = icons[(icons.indexOf(prev[0]) + 1) % icons.length];
        return [...prev.slice(1), next];
      });
      setBottom(prev => {
        const startIdx = icons.indexOf(prev[0]);
        const idx = (startIdx - 1 + icons.length) % icons.length;
        return [icons[idx], ...prev.slice(0, -1)];
      });
    }, 1200);
    return () => clearInterval(intervalRef.current);
  }, [pause, top, bottom]);

  return (
    <section
      id="skills"
      className="w-full py-24 flex flex-col items-center gap-12 sm:gap-20 overflow-hidden"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {/* --- Section Title --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(30,144,255,0.3)]">
          Technical <span className="text-blue-500">Stack</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
      </motion.div>

      <div className="flex flex-col gap-10 sm:gap-16 w-full items-center">
        {/* --- TOP ROW --- */}
        <div className="flex gap-4 sm:gap-8 lg:gap-10 perspective-[1600px] h-28 sm:h-36 items-center">
          {top.map((Icon, i) => (
            <div
              key={`top-${i}`}
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-neutral-900/50 border border-blue-500/20 shadow-[0_0_30px_rgba(30,144,255,0.1)] flex items-center justify-center transition-all duration-[900ms] ease-out hover:border-blue-500/60 hover:shadow-[0_0_40px_rgba(30,144,255,0.4)]"
              style={{
                transform: `translateZ(${-depths[i]}px) scale(${scales[i]})`,
                filter: `blur(${blurs[i]}px)`,
                opacity: opacities[i]
              }}
            >
              <Icon className="text-blue-400 text-3xl sm:text-5xl transition-transform duration-300 hover:scale-110" />
            </div>
          ))}
        </div>

        {/* --- BOTTOM ROW --- */}
        <div className="flex gap-4 sm:gap-8 lg:gap-10 perspective-[1600px] h-28 sm:h-36 items-center">
          {bottom.map((Icon, i) => (
            <div
              key={`bottom-${i}`}
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-neutral-900/50 border border-blue-500/20 shadow-[0_0_30px_rgba(30,144,255,0.1)] flex items-center justify-center transition-all duration-[900ms] ease-out hover:border-blue-500/60 hover:shadow-[0_0_40px_rgba(30,144,255,0.4)]"
              style={{
                transform: `translateZ(${-depths[i]}px) scale(${scales[i]})`,
                filter: `blur(${blurs[i]}px)`,
                opacity: opacities[i]
              }}
            >
              <Icon className="text-blue-400 text-3xl sm:text-5xl transition-transform duration-300 hover:scale-110" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
    </section>
  );
}