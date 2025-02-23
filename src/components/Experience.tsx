import React from 'react';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    period: '2021 - Present',
    description: 'Led development of enterprise web applications using React and Node.js. Managed team of 5 developers.',
  },
  {
    company: 'Digital Innovations',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple client projects. Implemented responsive designs and RESTful APIs.',
  },
  {
    company: 'StartUp Labs',
    position: 'Frontend Developer',
    period: '2018 - 2019',
    description: 'Built interactive user interfaces using React and modern JavaScript frameworks.',
  },
];

export default function Experience() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-gray-200 pl-6 py-2 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                <div className="text-gray-600 mb-2">{exp.company}</div>
                <div className="text-sm text-gray-500 mb-3">{exp.period}</div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}