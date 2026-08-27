import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Smartphone, ArrowRight, ExternalLink, Zap, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { SERVICES } from '../../content/services';
import { PRODUCTS } from '../../content/products';

export default function Slide2_ProductBento() {
  return (
    <section className="snap-section bg-[#FAFAFC] flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.25em] g-text uppercase mb-4 text-center">
            Engineering Verticals & Products
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={25}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] text-center leading-tight mb-4">
            Four Verticals. <span className="shimmer-text">One Engineering Studio.</span>
          </h2>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-xl mx-auto mb-16 leading-relaxed">
            Bespoke software systems, high-converting websites, and flagship digital products engineered to perfection.
          </p>
        </FadeIn>

        {/* 4 CORE VERTICAL CARDS (2x2 GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {SERVICES.map((service, idx) => {
            const IconComp = service.icon;

            return (
              <FadeIn key={service.id} delay={idx * 0.1} y={30} className="w-full">
                <div className="rounded-3xl bg-white border border-slate-200/90 p-8 flex flex-col justify-between h-full shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  
                  {/* TOP ACCENT LINE */}
                  <div 
                    className="absolute top-0 inset-x-0 h-1.5"
                    style={{ backgroundColor: service.accentColor }}
                  />

                  <div>
                    {/* TOP BAR */}
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="w-13 h-13 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xs"
                        style={{ backgroundColor: `${service.accentColor}12`, color: service.accentColor, borderColor: `${service.accentColor}30` }}
                      >
                        <IconComp size={24} />
                      </div>
                      <span className="font-sans text-xs font-semibold tracking-wider uppercase border border-slate-200 px-3 py-1 rounded-full bg-slate-50 text-slate-700">
                        {service.badge}
                      </span>
                    </div>

                    {/* NAME & TAGLINE */}
                    <h3 className="font-clash font-bold text-2xl text-[#0A0F1E] group-hover:text-blue-600 transition-colors mb-1.5">
                      {service.title}
                    </h3>
                    <p className="font-sans font-medium text-xs text-slate-500 mb-4">{service.tagline}</p>
                    <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed mb-6">
                      {service.summary}
                    </p>

                    {/* FEATURES BULLETS */}
                    <div className="flex flex-col gap-3 mb-6 border-t border-slate-100 pt-5">
                      {service.howWeHelp.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LINK CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <Link
                      to={`/products#${service.slug}`}
                      className="font-sans font-semibold text-xs sm:text-sm py-2 px-1 text-[#0A0F1E] group-hover:text-blue-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Explore {service.shortTitle} & ROI</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to={`/contact?service=${service.slug}`}
                      className="rounded-full bg-[#0A0F1E] hover:bg-blue-600 text-white px-5 py-2 font-sans font-semibold text-xs transition-colors shadow-2xs"
                    >
                      Get Quote
                    </Link>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
