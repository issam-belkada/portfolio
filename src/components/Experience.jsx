import { useEffect, useState } from "react";

export default function Experience() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    fetch("/src/data/experience.json")
      .then((res) => res.json())
      .then((data) => setExp(data));
  }, []);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-6">
          {exp.map((item, i) => (
            <div key={i} className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold">{item.company}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
