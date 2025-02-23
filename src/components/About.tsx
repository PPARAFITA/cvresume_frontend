import React from 'react';

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-[2fr,1fr] gap-8">
            <div className="prose lg:prose-lg">
              <p className="text-gray-600">
                Passionate full-stack developer with 5+ years of experience building web applications.
                Specialized in React, Node.js, and modern web technologies. Strong focus on writing
                clean, maintainable code and creating exceptional user experiences.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                alt="Profile"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}