export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Issam Belkada</h1>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
