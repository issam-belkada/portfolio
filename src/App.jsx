import Navbar from "./components/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import AboutMe from "./components/sections/AboutMe";
import DarkVeil from "./components/DarkVeil.jsx";
import Skills from "./components/sections/Skills.jsx";
import Education from './components/sections/Education'; 
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Contact from "./components/sections/Contact.jsx";

export default function App() {
  return (
    <main className="relative min-h-screen">
  <DarkVeil
        className="fixed inset-0 -z-50 pointer-events-none"
        noiseIntensity={0.05}
        scanlineIntensity={0.2}
        speed={0.5}
        scanlineFrequency={800}
        warpAmount={0.02}
      />

  <div className="relative z-10">
    <Navbar />
    <Hero />
    <AboutMe />
    <Skills />
    <Education />
    <Projects />
    <Experience />
    <Contact />
  </div>
</main>


  );
}
