import React from 'react';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <WorkShowcase />
      <About />
      <Contact />
      <footer className="mx-auto max-w-7xl px-6 pb-12 pt-6 text-sm text-white/60">
        © {new Date().getFullYear()} Your Name — Graphic Designer
      </footer>
    </div>
  );
};

export default App;
