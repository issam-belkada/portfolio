import { useEffect, useState } from "react";

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("/src/data/education.json")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  return (
    <section id="education" className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Education</h2>

        {education.map((edu, i) => (
          <p key={i} className="text-lg mb-4">
            {edu.title}
          </p>
        ))}
      </div>
    </section>
  );
}
