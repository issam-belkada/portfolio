import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Experience from "./components/sections/Experience.jsx";
import Education from "./components/sections/Education.jsx";
import Contact from "./components/sections/Contact.jsx";
import DarkVeil from "./components/DarkVeil.jsx";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <DarkVeil className="opacity-40 fixed inset-0 -z-10" />
      <Navbar />
      
    </main>
  );
}
