import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-xl shadow-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#1E90FF] tracking-wide drop-shadow-[0_0_10px_rgba(30,144,255,0.8)]">
          Issam BELKADA
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about">About Me</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#education">Education</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </nav>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#1E90FF] focus:outline-none drop-shadow-[0_0_10px_rgba(30,144,255,0.8)]"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/50 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col space-y-3">
              <MobileNavItem href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavItem>
              <MobileNavItem href="#about" onClick={() => setIsOpen(false)}>About Me</MobileNavItem>
              <MobileNavItem href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileNavItem>
              <MobileNavItem href="#education" onClick={() => setIsOpen(false)}>Education</MobileNavItem>
              <MobileNavItem href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavItem>
              <MobileNavItem href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileNavItem>
              <MobileNavItem href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavItem>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="text-white/80 hover:text-[#1E90FF] drop-shadow-[0_0_10px_rgba(30,144,255,0.8)] transition duration-300 tracking-wide"
  >
    {children}
  </a>
);

const MobileNavItem = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block w-full text-white/80 hover:text-[#1E90FF] hover:bg-white/5 px-3 py-2 rounded-md drop-shadow-[0_0_10px_rgba(30,144,255,0.8)] transition duration-300 tracking-wide"
  >
    {children}
  </a>
);
