import React from 'react';
import { Mail, Instagram, Dribbble, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-8 text-white backdrop-blur">
        <h2 className="text-2xl font-bold">Let’s create something great</h2>
        <p className="mt-2 text-white/75">
          For commissions, collaborations, or just to say hi — I’d love to hear from you.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="mailto:hello@yourstudio.com"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-white/20 hover:bg-white/10"
          >
            <Mail className="h-5 w-5" />
            <span>hello@yourstudio.com</span>
          </a>
          <a
            href="tel:+621234567890"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-white/20 hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            <span>+62 123 4567 890</span>
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-white/20 hover:bg-white/10"
          >
            <Instagram className="h-5 w-5" />
            <span>@yourhandle</span>
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-white/20 hover:bg-white/10"
          >
            <Dribbble className="h-5 w-5" />
            <span>Dribbble Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
