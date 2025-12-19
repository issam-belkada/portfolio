export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-xl border-b border-neon-pink z-50">
      <div className="max-w-6xl mx-auto py-4 px-6 flex justify-between items-center text-neon-blue font-sans">
        <h1 className="text-xl font-bold neon-text">IB</h1>
        <ul className="flex gap-8 text-sm">
          <li className="cursor-pointer hover:text-neon-pink transition">Home</li>
          <li className="cursor-pointer hover:text-neon-pink transition">Skills</li>
          <li className="cursor-pointer hover:text-neon-pink transition">Projects</li>
          <li className="cursor-pointer hover:text-neon-pink transition">Contact</li>
        </ul>
      </div>
    </header>
  );
}
