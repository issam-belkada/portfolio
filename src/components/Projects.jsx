import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/src/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="p-6 shadow bg-white rounded">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-gray-700">{p.desc}</p>
              <p className="mt-3 text-sm font-medium">{p.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
