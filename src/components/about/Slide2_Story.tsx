import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import AnimatedText from '../shared/AnimatedText';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Slide2_Story() {
  const techPills = [
    { name: 'Android', icon: '📱' },
    { name: 'Jetpack Compose', icon: '🎨' },
    { name: 'React 19', icon: '⚛️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Material 3', icon: '✨' },
  ];

  return (
    <section className="snap-section bg-[#F8F9FC] flex items-center px-6 sm:px-16 py-20 relative select-none">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: THE STORY TEXT */}
        <div className="flex flex-col items-start order-2 lg:order-1">
          
          {/* BACK TO TOP */}
          <FadeIn delay={0} y={15}>
            <a 
              href="#" 
              className="inline-flex items-center gap-1 font-kanit font-medium text-xs text-slate-500 uppercase tracking-wider mb-5 hover:text-slate-700"
            >
              <ArrowUp size={10} /> Back to Top
            </a>
          </FadeIn>

          {/* HEADINGS */}
          <FadeIn delay={0.1} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E] leading-none mb-6">
              Our <span className="g-text">Story</span>
            </h2>
          </FadeIn>

          {/* SCROLL-REVEAL TEXT */}
          <div className="font-kanit font-medium text-base sm:text-lg md:text-xl text-[#0A0F1E] leading-relaxed max-w-[520px] text-left">
            <AnimatedText 
              text="VOOO LABS was founded by Vrushabh Santosh Shinde — a B.Tech graduate and Android developer from rural Maharashtra, India. The vision is simple: build premium apps that compete globally, from the heart of India. Every product is crafted with obsessive attention to detail, privacy-first architecture, and genuine care for the people who will use it."
            />
          </div>

          {/* TECH PILLS */}
          <FadeIn delay={0.3} y={20} className="w-full mt-8">
            <div className="flex flex-wrap gap-2">
              {techPills.map((pill, idx) => (
                <div 
                  key={idx}
                  className="rounded-full bg-white border border-black/5 px-4 py-2 font-kanit text-xs sm:text-sm text-slate-700 inline-flex items-center gap-2 shadow-xs hover:border-slate-300 transition-colors"
                >
                  <span>{pill.icon}</span>
                  <span className="font-medium">{pill.name}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN: FOUNDER PRO CARD */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
          <FadeIn delay={0.25} x={40} className="w-full max-w-[380px]">
            <div 
              className="rounded-[36px] bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 sm:p-10 relative overflow-hidden flex flex-col items-center text-center w-full"
            >
              
              {/* GRADIENT TOP ACCENT BAR */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />

              {/* PHOTO 1 PLACEHOLDER */}
              <div 
                className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-orange-500 flex items-center justify-center shadow-[0_4px_16px_rgba(66,133,244,0.15)] mb-6 select-none overflow-hidden"
              >
                <span className="font-clash font-bold text-3xl text-white">VS</span>
                {/* Replace above with: <img src="PHOTO_URL_1" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'50%'}} /> */}
              </div>

              {/* FOUNDER METADATA */}
              <h3 className="font-clash font-semibold text-xl text-[#0A0F1E]">
                Vrushabh Santosh Shinde
              </h3>
              <p className="font-kanit font-normal text-xs sm:text-sm text-slate-400 mt-0.5">
                Founder & Solo Builder
              </p>
              <p className="shimmer-text font-kanit font-medium text-xs mt-1 uppercase tracking-wider">
                VOOO LABS
              </p>
              <p className="font-kanit font-light text-xs text-slate-500 mt-2 flex items-center gap-1">
                📍 Maharashtra, India
              </p>

              {/* DIVIDER */}
              <div className="w-full h-[1px] bg-slate-100 my-5" />

              {/* BIO */}
              <p className="font-kanit font-light text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                B.Tech graduate, Android developer, and indie builder. Building apps millions will love — one commit at a time.
              </p>

              {/* EMAIL */}
              <a 
                href="mailto:vooolabsofficial@gmail.com"
                className="font-kanit font-medium text-xs sm:text-sm g-text hover:opacity-80 transition-opacity mb-5 block"
              >
                vooolabsofficial@gmail.com
              </a>

              {/* SOCIAL BUTTONS */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/vooolabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://linkedin.com/company/vooolabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={14} />
                </a>
                <a
                  href="mailto:vooolabsofficial@gmail.com"
                  className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-slate-50 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={14} />
                </a>
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
