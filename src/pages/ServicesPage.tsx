import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Cpu, Search, CheckCircle2, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import FadeIn from '../components/shared/FadeIn';

const SERVICES_LIST = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Custom Websites & Web Portals',
    tagline: 'High-speed, modern websites that convert visitors into paying customers.',
    description: 'We design and code bespoke websites tailored to your brand. No clunky WordPress templates or slow page builders — just clean, ultra-fast code that looks world-class and loads instantly on mobile networks.',
    accent: '#3B82F6',
    deliverables: [
      'Sub-second load times (100/100 Core Web Vitals)',
      '1-tap WhatsApp and direct phone inquiry buttons',
      'Modern, Apple-grade visual design and typography',
      'Full SSL security, custom domain setup & cloud hosting',
    ],
    cta: 'Start a Website Project',
  },
  {
    id: 'software',
    icon: Cpu,
    title: 'Custom Software & Business Automation',
    tagline: 'Internal systems and dashboards that eliminate paperwork and save hours daily.',
    description: 'If your business is struggling with scattered Excel files, manual billing, or lost customer follow-ups, we build custom web portals and automation software that run your operations smoothly.',
    accent: '#8B5CF6',
    deliverables: [
      'Tailored internal operations & customer management portals',
      'Automated WhatsApp/Email alerts & order status tracking',
      'Role-based access, secure login & database backups',
      'Zero monthly lock-in — you own 100% of the software',
    ],
    cta: 'Discuss Software Automation',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Applications (Android & iOS)',
    tagline: 'Intuitive, lightweight native apps built for your customers and staff.',
    description: 'We develop high-performance mobile applications engineered with smooth animations, offline-first reliability, and clean interfaces that your users will genuinely love opening every day.',
    accent: '#F97316',
    deliverables: [
      'Smooth performance on all Android & iOS devices',
      'Push notifications, offline data caching & biometric security',
      'Google Play Store and Apple App Store deployment',
      'Full source code transfer upon completion',
    ],
    cta: 'Build a Mobile App',
  },
  {
    id: 'seo-ai',
    icon: Search,
    title: 'Google SEO & AI Search Engine Ranking (AEO/GEO)',
    tagline: 'Rank at the top when customers search for your services on Google & AI engines.',
    description: 'Having a website is not enough if nobody can find it. We integrate technical SEO, structured JSON-LD schemas, and local map discovery so your business ranks at the top of Google and gets recommended by ChatGPT, Gemini, and Claude.',
    accent: '#10B981',
    deliverables: [
      'Google Page 1 search optimization for your primary keywords',
      'AEO (AI Engine Optimization) for ChatGPT & Perplexity discovery',
      'Google Business Profile & Google Maps local pin ranking',
      'Ongoing organic inbound customer leads without paid ad waste',
    ],
    cta: 'Explore SEO & AI Ranking',
  },
];

export default function ServicesPage() {
  return (
    <div className="page-wrap bg-[#FAFAFC] pt-32 sm:pt-36 pb-24 px-6 select-none">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FadeIn delay={0} y={15}>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 mb-4 text-blue-600 font-sans font-semibold text-xs tracking-wider uppercase">
              <Sparkles size={13} />
              <span>Our Studio Capabilities</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} y={20}>
            <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] leading-tight mb-4">
              Custom Digital Solutions. <br className="hidden sm:inline" />
              <span className="shimmer-text">Built with Precision.</span>
            </h1>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
              We help businesses build clean websites, custom operational software, and mobile apps that save time, attract customers, and drive real revenue.
            </p>
          </FadeIn>
        </div>

        {/* SERVICES CARDS STACK */}
        <div className="space-y-8">
          {SERVICES_LIST.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <FadeIn key={service.id} delay={idx * 0.1} y={25}>
                <div 
                  id={service.id}
                  className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-md transition-all text-left relative overflow-hidden"
                >
                  {/* ACCENT LINE */}
                  <div 
                    className="absolute top-0 inset-x-0 h-1.5"
                    style={{ backgroundColor: service.accent }}
                  />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3.5 mb-4">
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${service.accent}12`, color: service.accent }}
                        >
                          <IconComp size={24} />
                        </div>
                        <div>
                          <h2 className="font-clash font-bold text-2xl sm:text-3xl text-[#0A0F1E]">
                            {service.title}
                          </h2>
                          <p className="font-sans text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="font-sans font-normal text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* DELIVERABLES */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-slate-100">
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 font-sans text-xs sm:text-sm text-slate-700 font-medium">
                            <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ACTION BUTTON */}
                    <div className="md:w-56 flex-shrink-0 flex flex-col justify-center items-start md:items-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                      <Link
                        to={`/contact?service=${service.id}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0A0F1E] hover:bg-blue-600 text-white font-sans font-semibold text-xs sm:text-sm px-6 py-3 transition-colors shadow-sm"
                      >
                        <MessageSquare size={15} />
                        <span>{service.cta}</span>
                      </Link>
                      <span className="font-sans text-[11px] text-slate-600 text-center md:text-right">
                        Free technical consultation
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* BOTTOM CALLOUT */}
        <FadeIn delay={0.4} y={20}>
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 p-8 sm:p-10 text-white text-center flex flex-col items-center justify-center shadow-lg">
            <h3 className="font-clash font-bold text-2xl sm:text-3xl mb-3">
              Unsure what digital solution your business needs?
            </h3>
            <p className="font-sans font-normal text-sm sm:text-base text-white/90 max-w-xl mb-6">
              Let us have an honest 15-minute conversation. We will analyze your workflow and recommend the exact right tool without unnecessary complexity.
            </p>
            <Link
              to="/contact"
              className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-sans font-semibold text-sm px-8 py-3.5 shadow-md transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
