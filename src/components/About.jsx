import React from 'react';

const skills = [
  'Brand Identity',
  'Art Direction',
  'Poster Design',
  'UI/UX',
  'Illustration',
  'Iconography',
  'Motion Concepts',
  'Figma',
  'Adobe Suite',
];

const About = () => {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white">About</h2>
            <p className="mt-2 text-white/70">
              Hi, I’m a graphic designer focused on playful, modern visuals. I help brands tell clear stories with strong typographic systems, expressive color, and delightful motion.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((s) => (
                <div
                  key={s}
                  className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 px-4 py-3 text-sm text-white/85"
                >
                  {s}
                </div>
              ))}
            </div>
            <p className="mt-6 text-white/70">
              Currently open for freelance and collaboration. Available for brand systems, poster series, and product UI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
