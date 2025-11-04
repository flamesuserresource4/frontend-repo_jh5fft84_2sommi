import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette so text stays readable but Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
          Graphic Designer • Branding • UI Art
        </span>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          Visual stories that
          <span className="relative ml-2 inline-block">
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">move people</span>
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          I craft playful, modern brand identities, posters, and interfaces powered by bold color and clear ideas.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-900 shadow/20 shadow-black/20 transition hover:bg-cyan-100"
          >
            Explore Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
