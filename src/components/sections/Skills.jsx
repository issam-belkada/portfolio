// src/components/SkillsCarousel.jsx
import { useState, useEffect, useRef } from "react";
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
  const depths = Array.from({ length: count }, (_, i) => Math.abs(center - i) * 60);
  const scales = Array.from({ length: count }, (_, i) => 1 - Math.abs(center - i) * 0.15);
  const blurs = Array.from({ length: count }, (_, i) => (i === 0 || i === count - 1) ? 2.5 : 0);
  return { count, depths, scales, blurs };
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

  // --- NEW: Responsive logic for at least 5 icons ---
  const getVisibleConfig = () => {
    if (width >= 1024) return getDynamicStyles(7); // 7 icons for large desktops
    return getDynamicStyles(5);                   // 5 icons for tablets and mobile
  };

  const { count, depths, scales, blurs } = getVisibleConfig();

  const [top, setTop] = useState(icons.slice(0, count));
  const [bottom, setBottom] = useState(icons.slice(count, count * 2));

  useEffect(() => {
    setTop(icons.slice(0, count));
    setBottom(icons.slice(count, count * 2));
  }, [count]);

  // Your original animation logic remains unchanged
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
    id = "skills"
      className="w-full py-24 flex flex-col items-center gap-12 sm:gap-16"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <h2 className="text-4xl font-bold text-white tracking-wider px-4 text-center">
        Technical Skills
      </h2>

      {/* --- TOP ROW --- */}
      <div className="flex gap-2 sm:gap-4 lg:gap-6 overflow-hidden perspective-[1400px]">
        {top.map((Icon, i) => (
          <div
            key={i}
            className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-[0_0_25px_rgba(30,144,255,0.35)] flex items-center justify-center transition-transform duration-[900ms] ease-linear hover:scale-125"
            style={{
              transform: `translateZ(${-depths[i]}px) scale(${scales[i]})`,
              filter: `blur(${blurs[i]}px)`
            }}
          >
            <Icon className="text-blue-400 text-2xl sm:text-3xl lg:text-4xl" />
          </div>
        ))}
      </div>

      {/* --- BOTTOM ROW --- */}
      <div className="flex gap-2 sm:gap-4 lg:gap-6 overflow-hidden perspective-[1400px]">
        {bottom.map((Icon, i) => (
          <div
            key={i}
            className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-[0_0_25px_rgba(30,144,255,0.35)] flex items-center justify-center transition-transform duration-[900ms] ease-linear hover:scale-125"
            style={{
              transform: `translateZ(${-depths[i]}px) scale(${scales[i]})`,
              filter: `blur(${blurs[i]}px)`
            }}
          >
            <Icon className="text-blue-400 text-2xl sm:text-3xl lg:text-4xl" />
          </div>
        ))}
      </div>

    </section>
  );
}
