import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Globe, Cpu, Search, ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

const GOAL_PATHS = [
  {
    id: 'websites',
    title: 'All-Inclusive Website',
    subtitle: 'Launch fast with domain, DNS & 24/7 hosting.',
    icon: Laptop,
    accent: '#8B5CF6',
    borderHover: 'hover:border-purple-300',
    link: '/services#websites',
    badge: 'Turnkey Web',
  },
  {
    id: 'web-apps',
    title: 'Custom Web App / Portal',
    subtitle: 'Client dashboards, bookings & login portals.',
    icon: Globe,
    accent: '#3B82F6',
    borderHover: 'hover:border-blue-300',
    link: '/services#web-apps',
    badge: 'Interactive Portal',
  },
  {
    id: 'software',
    title: 'Billing & Business Software',
    subtitle: 'Replace Excel chaos with ₹0 monthly rent.',
    icon: Cpu,
    accent: '#10B981',
    borderHover: 'hover:border-emerald-300',
    link: '/services#custom-software',
    badge: 'Operations & GST',
  },
  {
    id: 'seo-ai',
    title: 'ChatGPT & Google AI Ads',
    subtitle: 'Get recommended by AI & local search.',
    icon: Search,
    accent: '#F59E0B',
    borderHover: 'hover:border-amber-300',
    link: '/seo-ai',
    badge: 'AI & Local Search',
  },
];

export default function Slide1_Hero() {
  return (
    <section 
      className="min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none border-b border-slate-200/80 pt-32 sm:pt-36 pb-12"
      aria-label="VOOO LABS Hero"
    >
      {/* VIBRANT AMBIENT GLOW BACKDROP */}
      <div className="absolute top-[-160px] left-[-160px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[-100px] right-[-160px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-[-150px] left-1/3 w-[600px] h-[600px] rounded-full bg-orange-500/8 blur-[100px] pointer-events-none z-0" aria-hidden="true" />

      {/* CENTER CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        {/* ORIGINAL TAGLINE BADGE */}
        <FadeIn delay={0.02} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/[0.03] border border-black/10 px-4 py-1.5 mb-6 text-slate-800 text-xs sm:text-sm font-medium shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>"पहले बनाते हैं कुछ, फिर उसे सुंदर बनाते हैं" · First make it work, then make it beautiful.</span>
          </div>
        </FadeIn>

        {/* HEADLINE: UNDER 8 WORDS & CLEAN INTER TYPE SCALE */}
        <FadeIn delay={0.08} y={20}>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-4 max-w-4xl mx-auto">
            Engineering Digital Products <br />
            <span className="shimmer-text">with Obsession & Scale.</span>
          </h1>
        </FadeIn>

        {/* SUBHEADLINE: 1 SHORT SENTENCE (MAX 15 WORDS) */}
        <FadeIn delay={0.15} y={15}>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto mb-8 font-normal">
            We build custom websites, client portals, and software systems with ₹0 monthly rent.
          </p>
        </FadeIn>

        {/* PRIMARY & SECONDARY ACTION CTAS */}
        <FadeIn delay={0.22} y={15}>
          <div className="flex flex-wrap gap-3.5 justify-center items-center mb-16">
            <Link
              to="/contact"
              className="btn-3d-base btn-3d-primary inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-medium text-sm sm:text-base px-7 py-3.5 shadow-md"
            >
              <span>See what your project will cost</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="btn-3d-base btn-3d-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm sm:text-base px-7 py-3.5 shadow-2xs"
            >
              <span>See how it can help your business</span>
            </Link>
          </div>
        </FadeIn>

        {/* "WHAT DO YOU NEED?" INTERACTIVE GOAL SELECTOR */}
        <FadeIn delay={0.3} y={20} className="w-full">
          <div className="w-full">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-slate-200" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-medium">
                What do you need to build?
              </span>
              <span className="h-[1px] w-8 bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
              {GOAL_PATHS.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link
                    key={item.id}
                    to={item.link}
                    className={`group rounded-2xl bg-[#FAFAFD] border border-slate-200/90 p-5 hover:bg-white ${item.borderHover} hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div 
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                          style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                        >
                          <IconComp size={18} />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 px-2 py-0.5 rounded-md bg-white border border-slate-200">
                          {item.badge}
                        </span>
                      </div>

                      <h2 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        {item.title}
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-blue-600">
                      <span>Select pathway</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeIn>

      </div>

      {/* FOOTER TICKER */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-10 border-t border-slate-100 mt-12 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Obsessive Craftsmanship • Pune • Nashik • Satara</span>
        </div>
        <div>
          © {COMPANY.foundedYear}–{new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </div>
      </div>

    </section>
  );
}
