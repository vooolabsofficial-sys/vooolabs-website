import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Cpu, Search, ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const SERVICES = [
  {
    icon: Globe,
    title: 'Websites & Web Apps',
    description: 'High-speed, modern websites and custom web portals designed to look stunning and convert visitors into clients.',
    accent: '#3B82F6',
    link: '/services#websites',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Smooth, lightweight Android and iOS apps engineered for high performance, intuitive design, and happy users.',
    accent: '#8B5CF6',
    link: '/services#mobile-apps',
  },
  {
    icon: Cpu,
    title: 'Custom Software & Automation',
    description: 'Tailored business software and dashboards that eliminate manual spreadsheets and automate your daily operations.',
    accent: '#10B981',
    link: '/services#custom-software',
  },
  {
    icon: Search,
    title: 'Google & AI Search Ranking',
    description: 'Modern SEO and AI answer engine optimization (AEO) so customers find your business first on Google and ChatGPT.',
    accent: '#F59E0B',
    link: '/seo-ai',
  },
];

export default function Slide2_ProductBento() {
  return (
    <section 
      className="snap-section bg-[#FAFAFC] flex flex-col justify-center items-center px-6 py-20 sm:py-24 select-none relative"
      aria-label="Our Core Services"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-blue-600 uppercase mb-3 text-center">
            What We Do
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.08} y={20}>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0F1E] text-center leading-tight mb-4">
            Software, Websites & <span className="shimmer-text">Digital Products.</span>
          </h2>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-xl mx-auto mb-12 sm:mb-14 leading-relaxed">
            We help founders and businesses build modern software that saves time, looks world-class, and drives growth.
          </p>
        </FadeIn>

        {/* 4 CLEAN SERVICES (AIRY & MINIMALIST 2x2 GRID - NO INNER BOXES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
          {SERVICES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full flex">
                <Link
                  to={item.link}
                  className="w-full rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-7 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group text-left"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: `${item.accent}12`, color: item.accent }}
                    >
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h3 className="font-clash font-bold text-xl text-[#0A0F1E] group-hover:text-blue-600 transition-colors mb-1.5">
                        {item.title}
                      </h3>
                      <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform mt-2 pt-3 border-t border-slate-100/80">
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
