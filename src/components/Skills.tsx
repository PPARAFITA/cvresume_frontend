import React from 'react';

const skills = {
  'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'],
  'Backend': ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  'Tools': ['Git', 'Docker', 'AWS', 'Jest', 'CI/CD'],
  'Soft Skills': ['Team Leadership', 'Problem Solving', 'Communication', 'Agile']
};

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}