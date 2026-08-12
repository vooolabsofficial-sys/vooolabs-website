import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, PhoneCall, Mail } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Slide5_Founder() {
  const stats = [
    { num: '11+', label: 'Projects Shipped' },
    { num: '5+ Yrs', label: 'Engineering' },
    { num: '∞', label: 'Ideas in Motion' },
  ];

  return (
    <section id="founder" className="snap-section bg-white flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* HEADING */}
        <div className="mb-16">
          <FadeIn delay={0} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E]">
              The Person <span className="shimmer-text">Behind VOOO LABS</span>
            </h2>
          </FadeIn>
        </div>

        {/* FOUNDER DEEP DIVE SHOWCASE */}
        <div className="flex flex-col items-center w-full mt-2">
          
          {/* FOUNDER AVATAR */}
          <FadeIn delay={0.1} y={30}>
            <div 
              className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-600 to-orange-500 flex items-center justify-center shadow-[0_16px_40px_rgba(124,58,237,0.25)] mb-6 select-none relative overflow-hidden border-4 border-white"
            >
              <span className="font-clash font-extrabold text-5xl sm:text-6xl text-white tracking-widest">VS</span>
            </div>
          </FadeIn>

          {/* NAME & INFO */}
          <FadeIn delay={0.2} y={20}>
            <h3 className="font-clash font-bold text-3xl sm:text-4xl g-text mb-1">
              Vrushabh Santosh Shinde
            </h3>
            <p className="font-kanit font-normal text-base sm:text-lg text-slate-600">
              Founder & Software Architect, VOOO LABS
            </p>
            <p className="font-kanit font-light text-sm text-slate-500 mt-1 flex items-center justify-center gap-1">
              Maharashtra, India — Crafting for Global Scale
            </p>

            {/* PORTFOLIO LINK */}
            <a 
              href="https://vrushabhshinde-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-kanit font-medium text-xs text-blue-600 hover:text-blue-700 mt-2 py-1 px-3.5 rounded-full bg-blue-50 border border-blue-100 hover:bg-blue-100/60 transition-colors"
            >
              <span>View Founder Portfolio</span>
              <ExternalLink size={12} />
            </a>
          </FadeIn>

          {/* QUOTE CARD */}
          <FadeIn delay={0.3} y={25} className="w-full max-w-xl">
            <div 
              className="rounded-[28px] bg-[#F8F9FC] border border-black/5 p-8 mt-8 shadow-xs relative text-center"
            >
              <p className="font-kanit font-medium text-base sm:text-lg text-[#0A0F1E] leading-relaxed italic">
                "I build products that don't just work — they feel alive. VOOO LABS is built on raw obsession, liquid glass UI, clean architecture, and relentless execution."
              </p>
            </div>
          </FadeIn>

          {/* STATS ROW */}
          <FadeIn delay={0.4} y={20} className="w-full max-w-md">
            <div className="grid grid-cols-3 gap-4 mt-8 mb-8 border-t border-b border-slate-100 py-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="font-clash font-semibold text-xl sm:text-2xl g-text leading-none">{stat.num}</span>
                  <span className="font-kanit font-light text-xs text-slate-500 mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CONTACT & SOCIAL LINKS */}
          <FadeIn delay={0.5} y={15} className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-7 py-3 font-kanit font-semibold text-sm text-white hover:scale-[1.04] transition-all duration-300 shadow-md"
            >
              Get in Touch
            </Link>

            <a
              href="https://github.com/vrushabh-shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/vrushabh-shinde-43338125b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href="https://www.instagram.com/vrushyxx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:bg-slate-50 transition-colors"
              aria-label="Instagram Profile"
            >
              <InstagramIcon size={18} />
            </a>

            <a
              href="https://wa.me/917620236178"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:bg-slate-50 transition-colors"
              aria-label="WhatsApp Contact"
            >
              <PhoneCall size={18} />
            </a>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
