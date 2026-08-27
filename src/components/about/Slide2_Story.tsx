import React from 'react';
import { ArrowUp, Mail, Smartphone, Palette, Atom, Flame, FileCode2, Sparkles, MapPin } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import AnimatedText from '../shared/AnimatedText';
import { GithubIcon, LinkedinIcon } from '../shared/BrandIcons';
import { COMPANY, LOCATION, FOUNDER } from '../../content/company';

export default function Slide2_Story() {
  const techPills = [
    { name: 'Android', icon: Smartphone, color: 'text-blue-500' },
    { name: 'Jetpack Compose', icon: Palette, color: 'text-purple-500' },
    { name: 'React 19', icon: Atom, color: 'text-cyan-500' },
    { name: 'Supabase', icon: Flame, color: 'text-emerald-500' },
    { name: 'TypeScript', icon: FileCode2, color: 'text-blue-600' },
    { name: 'Material 3', icon: Sparkles, color: 'text-amber-500' },
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
              className="inline-flex items-center gap-1 font-sans font-medium text-xs text-slate-500 uppercase tracking-wider mb-5 hover:text-slate-700"
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
          <div className="font-sans font-medium text-base sm:text-lg md:text-xl text-[#0A0F1E] leading-relaxed max-w-[520px] text-left">
            <AnimatedText 
              text="VOOO LABS was founded by Vrushabh Santosh Shinde — a software developer & digital architect from Maharashtra, India. Our mission is simple: build high-performance software, websites, and native apps that solve real operational bottlenecks for Indian businesses."
            />
          </div>

          {/* CORE SPECIALTIES */}
          <FadeIn delay={0.3} y={20} className="w-full mt-8">
            <div className="flex flex-wrap gap-2">
              {techPills.map((pill, idx) => {
                const IconComp = pill.icon;
                return (
                  <div 
                    key={idx}
                    className="rounded-full bg-white border border-slate-200/90 px-4 py-2 font-sans text-xs sm:text-sm text-slate-700 inline-flex items-center gap-2 shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <IconComp size={14} className={pill.color} />
                    <span className="font-medium">{pill.name}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN: FOUNDER PRO CARD */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
          <FadeIn delay={0.25} x={40} className="w-full max-w-[380px]">
            <div 
              className="rounded-[36px] bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 sm:p-10 relative overflow-hidden flex flex-col items-center text-center w-full"
            >
              
              {/* GRADIENT TOP ACCENT BAR */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />

              {/* PHOTO PLACEHOLDER */}
              <div 
                className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-orange-500 flex items-center justify-center shadow-[0_4px_16px_rgba(66,133,244,0.15)] mb-6 select-none overflow-hidden"
              >
                <span className="font-clash font-bold text-3xl text-white">{FOUNDER.initials}</span>
              </div>

              {/* FOUNDER METADATA */}
              <h3 className="font-clash font-semibold text-xl text-[#0A0F1E]">
                {FOUNDER.name}
              </h3>
              <p className="font-kanit font-normal text-xs sm:text-sm text-slate-500 mt-0.5">
                {FOUNDER.role}
              </p>
              <p className="shimmer-text font-kanit font-medium text-xs mt-1 uppercase tracking-wider">
                {COMPANY.brandName}
              </p>
              <p className="font-kanit font-light text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                <MapPin size={12} className="text-emerald-500" />
                <span>{LOCATION.region}, {LOCATION.country}</span>
              </p>

              {/* DIVIDER */}
              <div className="w-full h-[1px] bg-slate-100 my-5" />

              {/* BIO */}
              <p className="font-kanit font-light text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {FOUNDER.bio}
              </p>

              {/* EMAIL */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-kanit font-medium text-xs sm:text-sm g-text hover:opacity-80 transition-opacity mb-5 block"
              >
                {COMPANY.email}
              </a>

              {/* SOCIAL BUTTONS */}
              <div className="flex items-center gap-3">
                <a
                  href={FOUNDER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 active:scale-95 transition-all"
                  aria-label="Founder's GitHub"
                >
                  <GithubIcon size={15} />
                </a>
                <a
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-slate-50 active:scale-95 transition-all"
                  aria-label="Founder's LinkedIn"
                >
                  <LinkedinIcon size={15} />
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-slate-50 active:scale-95 transition-all"
                  aria-label="Email"
                >
                  <Mail size={15} />
                </a>
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
