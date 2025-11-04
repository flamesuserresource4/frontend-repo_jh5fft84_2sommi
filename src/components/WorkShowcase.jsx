import React from 'react';

const projects = [
  {
    title: 'Neon Pulse — Brand System',
    tags: ['Branding', 'Identity', 'Guidelines'],
    color: 'from-fuchsia-500 to-cyan-400',
  },
  {
    title: 'Mono Studio — Portfolio UI',
    tags: ['UI Design', 'Web', 'Prototype'],
    color: 'from-amber-400 to-rose-500',
  },
  {
    title: 'Kinetic Poster Series',
    tags: ['Poster', 'Motion Concepts'],
    color: 'from-cyan-400 to-violet-500',
  },
  {
    title: 'Wave App — Icon Set',
    tags: ['Icons', 'System'],
    color: 'from-lime-300 to-emerald-500',
  },
  {
    title: 'Playground Illustrations',
    tags: ['Illustration', 'Styleframes'],
    color: 'from-sky-400 to-indigo-500',
  },
  {
    title: 'Rogue Agency Collab',
    tags: ['Art Direction', 'Campaign'],
    color: 'from-rose-400 to-orange-400',
  },
];

const WorkCard = ({ title, tags, color }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:scale-[1.01] hover:border-white/20 hover:bg-white/10">
      <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />
      <div className="relative z-10">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900/60 ring-1 ring-white/10">
          <div className={`h-full w-full bg-gradient-to-br ${color} opacity-70`} />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkShowcase = () => {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Selected Work</h2>
          <p className="mt-1 text-white/70">A mix of brand, poster, and interface experiments.</p>
        </div>
        <a href="#contact" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:bg-white/5 sm:inline-block">
          Commission Project
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <WorkCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default WorkShowcase;
