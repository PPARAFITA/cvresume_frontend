import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;