"use client";

import { useState, useEffect, useRef } from "react";
import {
  SiJavascript, SiPython, SiPhp, SiHtml5, SiCss3,
  SiTailwindcss, SiReact, SiOracle , SiLaravel, SiPostgresql,
  SiMysql, SiMongodb, SiDocker, SiGit, SiLinux, SiPostman
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiC } from "react-icons/si";

export default function SkillsCarousel() {

  const icons = [
    SiJavascript, SiPython, FaJava, SiC, SiPhp,
    SiHtml5, SiCss3, SiTailwindcss, SiReact, SiLaravel,
    SiPostgresql, SiMysql, SiMongodb, SiOracle, SiDocker,
    SiGit, SiLinux, SiPostman
  ];

  const [pause, setPause] = useState(false);
  const intervalRef = useRef(null);

  const [top, setTop] = useState(icons.slice(0, 7));
  const [bottom, setBottom] = useState(icons.slice(7, 14));

  useEffect(() => {

    if (pause) return;

    intervalRef.current = setInterval(() => {

      // TOP ROW FORWARD
      setTop(prev => {
        const next = icons[(icons.indexOf(prev[0]) + 1) % icons.length];
        const clone = [...prev];
        clone.shift();
        clone.push(next);
        return clone;
      });

      // BOTTOM ROW BACKWARD
      setBottom(prev => {
        const startIdx = icons.indexOf(prev[0]);
        const idx = (startIdx - 1 + icons.length) % icons.length;
        const next = icons[idx];
        const clone = [...prev];
        clone.pop();
        clone.unshift(next);
        return clone;
      });

    }, 1200); // constant speed

    return () => clearInterval(intervalRef.current);

  }, [pause, top, bottom]);


  return (
    <section className="w-full py-24 bg-black flex flex-col items-center gap-16"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >

      <h2 className="text-4xl font-bold text-white tracking-wider">
        Technical Skills
      </h2>

      {/* TOP ROW */}
      <div className="flex gap-6 overflow-hidden perspective-[1400px]">
        {top.map((Icon, i) => {
          const depth = [160, 100, 40, 0, 40, 100, 160][i];      // stronger 3D
          const scale = 1 - Math.abs(3 - i) * 0.1;               // center bigger
          const blur = (i === 0 || i === top.length - 1) ? 2.5 : 0; // blur only on first/last

          return (
            <div
              key={i}
              className="
                w-20 h-20 md:w-24 md:h-24
                rounded-xl
                bg-blue-500/10 border border-blue-500/20
                shadow-[0_0_25px_rgba(30,144,255,0.35)]
                flex items-center justify-center
                transition-transform duration-[900ms] ease-linear
                hover:scale-125
              "
              style={{
                transform: `translateZ(${-depth}px) scale(${scale})`,
                filter: `blur(${blur}px)`
              }}
            >
              <Icon className="text-blue-400 text-4xl" />
            </div>
          );
        })}
      </div>

      {/* BOTTOM ROW */}
      <div className="flex gap-6 overflow-hidden perspective-[1400px]">
        {bottom.map((Icon, i) => {
          const depth = [160, 100, 40, 0, 40, 100, 160][i];
          const scale = 1 - Math.abs(3 - i) * 0.1;
          const blur = (i === 0 || i === bottom.length - 1) ? 2.5 : 0;

          return (
            <div
              key={i}
              className="
                w-20 h-20 md:w-24 md:h-24
                rounded-xl
                bg-blue-500/10 border border-blue-500/20
                shadow-[0_0_25px_rgba(30,144,255,0.35)]
                flex items-center justify-center
                transition-transform duration-[900ms] ease-linear
                hover:scale-125
              "
              style={{
                transform: `translateZ(${-depth}px) scale(${scale})`,
                filter: `blur(${blur}px)`
              }}
            >
              <Icon className="text-blue-400 text-4xl" />
            </div>
          );
        })}
      </div>

      <p className="text-neutral-500 text-xs mt-2">
        Hover to pause • 3D depth • blur on edges • smooth constant motion
      </p>

    </section>
  );
}
