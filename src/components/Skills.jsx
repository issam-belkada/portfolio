import { useEffect, useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/src/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="p-6 shadow bg-white rounded">
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <ul className="list-disc ml-6 space-y-2">
                {skill.items.map((e, j) => (
                  <li key={j}>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
