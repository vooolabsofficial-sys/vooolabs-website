import React from 'react';
import FadeIn from '../shared/FadeIn';

export default function Slide5_Location() {
  return (
    <section className="snap-section animated-gradient-bg noise flex flex-col justify-center items-center px-6 py-24 text-center rounded-t-[40px] sm:rounded-t-[60px] relative overflow-hidden select-none">
      
      {/* SHADOW OVERLAY */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
        
        {/* BIG LOCAL HEADINGS */}
        <FadeIn delay={0} y={45}>
          <h2 
            className="font-clash text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-none tracking-tight mb-8"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.1)' }}
          >
            Made in <br />
            Maharashtra, <br />
            India. 🇮🇳
          </h2>
        </FadeIn>

        {/* MOTTO DESCRIPTIONS */}
        <FadeIn delay={0.15} y={20}>
          <p className="font-kanit font-light text-xl sm:text-2xl text-white/95 mb-3">
            Rural roots. Global ambitions.
          </p>
          <p className="font-kanit font-light text-base sm:text-lg text-white/70 max-w-md mx-auto leading-relaxed mb-12">
            Building world-class software from the heart of India.
          </p>
        </FadeIn>

        {/* LARGE INDIA BADGE */}
        <FadeIn delay={0.3} y={25} className="mb-12">
          <div 
            className="rounded-[24px] bg-white/12 border border-white/20 px-8 sm:px-10 py-5 sm:py-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 backdrop-blur-md shadow-lg select-none"
          >
            <span className="font-kanit font-semibold text-lg sm:text-xl text-white">
              📍 Maharashtra, India
            </span>
            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-6 bg-white/25" />
            <span className="font-kanit font-light text-sm sm:text-base text-white/75">
              🌍 Serving Worldwide
            </span>
          </div>
        </FadeIn>

        {/* BACK TO TOP OF CONTACT PAGE ACTION */}
        <FadeIn delay={0.4} y={15}>
          <a
            href="#contact-form-section"
            className="rounded-full bg-white text-blue-600 hover:scale-[1.04] active:scale-[0.98] px-8 py-3.5 font-kanit font-semibold text-sm sm:text-base transition-all duration-300 shadow-md inline-block select-none"
          >
            Write Message ↑
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
