// src/components/Education.jsx
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaBookOpen } from "react-icons/fa";

const educationData = [
    // ... (Your education data remains the same)
    {
        degree: '2nd Year, Master\'s in Information Systems Engineering',
        institution: 'National Polytechnic School of Oran-Maurice Audin, Algeria',
        period: '2025 - Present',
        description: 'Deepening expertise in advanced system architecture, data management, and strategic IT planning.',
        icon: FaGraduationCap,
      },
      {
        degree: '1st Year, Master\'s in Information Systems Engineering',
        institution: 'National Polytechnic School of Oran-Maurice Audin, Algeria',
        period: '2024 - 2025',
        description: 'Completed with honors (14.63 average), focusing on core information systems and software engineering principles.',
        icon: FaGraduationCap,
      },
      {
        degree: 'Preparatory Class in Science & Technology',
        institution: 'National Polytechnic School of Oran-Maurice Audin, Algeria',
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

const certificationsData = [
  { name: 'Oracle Certified Foundations Associate, Java', issuer: 'Oracle', year: '2025' },
  { name: 'Introduction to Critical Infrastructure Protection', issuer: 'OPSWAT Academy', year: '2025' },
  { name: 'Web Development', issuer: 'Self-taught & Online Courses', year: '2023' },
];

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold text-light-text dark:text-white mb-3"
          >
            Education & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"
          />
        </div>

        {/* Education Timeline */}
        <div className="relative">
          <div className="absolute left-6 sm:left-9 top-0 h-full w-0.5 bg-gray-300/50 dark:bg-blue-900/50" aria-hidden="true"></div>
          <div className="space-y-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-18 sm:h-18 bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm rounded-full border-4 border-light-background dark:border-dark-background flex items-center justify-center shadow-md dark:shadow-blue-500/20">
                  <edu.icon className="w-5 h-5 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                </div>
                {/* Card */}
                <div className="flex-1 ml-4 sm:ml-6 bg-white/60 dark:bg-blue-900/20 backdrop-blur-sm border border-gray-300/50 dark:border-blue-500/20 rounded-xl p-4 sm:p-6 shadow-lg dark:shadow-[0_0_30px_rgba(30,144,255,0.1)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg sm:text-xl font-bold text-light-text dark:text-white">{edu.degree}</h4>
                    <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium mt-1 sm:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-sm sm:text-md font-semibold text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-light-text dark:text-white mb-12">Professional Certifications</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white/60 dark:bg-blue-900/20 backdrop-blur-sm border border-gray-300/50 dark:border-blue-500/20 rounded-xl p-4 text-center shadow-lg dark:shadow-[0_0_30px_rgba(30,144,255,0.1)]"
              >
                <div className="inline-block bg-blue-100/80 dark:bg-blue-500/10 p-3 rounded-full mb-3">
                  <FaAward className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-light-text dark:text-white mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
