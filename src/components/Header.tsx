import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Juan Developer</h1>
          <h2 className="text-2xl text-gray-300 mb-6">Full Stack Developer</h2>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <a href="mailto:juan@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={18} />
              <span>juan@example.com</span>
            </a>
            <a href="https://github.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Github size={18} />
              <span>github.com/juandev</span>
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Linkedin size={18} />
              <span>linkedin.com/in/juandev</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}