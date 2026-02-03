// src/components/Education.jsx
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaBookOpen } from "react-icons/fa";

const educationData = [
  {
    degree: 'Master\'s in Information Systems Engineering',
    institution: 'National Polytechnic School of Oran Maurice-Audin',
    period: '2025 - Present',
    description: 'Deepening expertise in Advanced System Architecture, Business Intelligence, Software Engineering and Modeling, Project Management, Database Administration and Architecture.',
    icon: FaGraduationCap,
    current: true,
  },
  {
    degree: 'Information Systems Engineering Cycle (Year 1)',
    institution: 'National Polytechnic School of Oran Maurice-Audin',
    period: '2024 - 2025',
    description: 'Focusing on core information systems, software engineering principles, and complex algorithmic structures.',
    icon: FaGraduationCap,
  },
  {
    degree: 'Preparatory Class in Science & Technology',
    institution: 'National Polytechnic School of Oran Maurice-Audin',
    period: '2022 - 2024',
    description: 'Intensive two-year program covering advanced mathematics, physics, and foundational engineering concepts.',
    icon: FaBookOpen,
  },
  {
    degree: 'Technical Baccalaureate - Electrical Engineering',
    institution: 'El Chahida Ankri Aicha High School, Chlef - Algeria',
    period: '2021',
    description: 'Graduated with high honors (16.31 average), establishing a strong analytical and technical foundation.',
    icon: FaAward,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic"
          >
            Education & <span className="text-blue-500">Path</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"
          />
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center justify-between w-full md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full shadow-[0_0_15px_rgba(30,144,255,1)] ${edu.current ? "bg-blue-500 animate-ping" : "bg-blue-600"}`} />
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-[45%]">
                  <div className="group bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:bg-neutral-900/60 shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <edu.icon className="text-blue-500 text-xl" />
                      <span className="text-xs font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h4>
                    
                    <p className="text-sm font-bold text-white/60 mb-3 italic">
                      {edu.institution}
                    </p>
                    
                    <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
}