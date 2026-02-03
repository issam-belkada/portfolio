"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-xl shadow-lg border-b border-white/10 z-[100]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo avec lueur Néon */}
        <h1 className="text-xl md:text-2xl font-black text-[#1E90FF] tracking-tighter uppercase italic drop-shadow-[0_0_12px_rgba(30,144,255,0.8)]">
          Issam <span className="text-white">BELKADA</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavItem key={link.name} href={link.href}>{link.name}</NavItem>
          ))}
        </nav>

        {/* Mobile button - Stylisé Néon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#1E90FF] focus:outline-none drop-shadow-[0_0_8px_rgba(30,144,255,0.8)] p-2 transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Opacité réduite et Flou augmenté */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            /* bg-black/40 pour moins d'opacité et backdrop-blur-3xl pour un flou intense */
            className="lg:hidden bg-black/40 backdrop-blur-3xl border-t border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="px-8 py-10 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <MobileNavItem 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </MobileNavItem>
              ))}
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
    className="relative text-sm font-bold text-white/80 hover:text-[#1E90FF] uppercase tracking-widest italic transition duration-300 drop-shadow-[0_0_5px_rgba(30,144,255,0)] hover:drop-shadow-[0_0_10px_rgba(30,144,255,0.7)] group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1E90FF] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(30,144,255,0.8)]"></span>
  </a>
);

const MobileNavItem = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    /* text-2xl et font-black pour le style, drop-shadow pour l'effet néon */
    className="block w-full text-2xl font-black text-white/90 hover:text-[#1E90FF] uppercase italic tracking-tighter transition-all duration-300 drop-shadow-[0_0_15px_rgba(30,144,255,0.6)] active:text-[#1E90FF]"
  >
    {children}
  </a>
);