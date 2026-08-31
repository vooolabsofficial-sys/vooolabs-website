import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MessageSquare,
  ShieldCheck,
  Compass,
  Code2,
  Rocket
} from 'lucide-react';
import FadeIn from '../components/shared/FadeIn';

const SERVICES = [
  {
    id: 'websites',
    icon: Globe,
    tag: 'Web Development',
    title: 'Custom Websites & Web Portals',
    description: 'Fast, modern websites engineered to look world-class, load in sub-seconds, and route customer inquiries directly to your WhatsApp or phone.',
    features: [
      'Sub-1s mobile page speed (100/100 Core Web Vitals)',
      '1-tap WhatsApp and direct phone calling buttons',
      'Modern, custom design tailored to your brand identity',
      'Full SSL security, custom domain & cloud deployment',
    ],
    accent: '#3B82F6',
    cta: 'Start Website Project',
  },
  {
    id: 'software',
    icon: Cpu,
    tag: 'Operations & Automation',
    title: 'Custom Business Software & Tools',
    description: 'Internal dashboards and automated web portals that eliminate messy Excel sheets, track your orders, and manage daily operations without errors.',
    features: [
      'Eliminate manual spreadsheets and scattered paperwork',
      'Automated client alerts and real-time order tracking',
      'Secure role-based staff logins and database backups',
      'Zero monthly lock-in — you own 100% of the software',
    ],
    accent: '#8B5CF6',
    cta: 'Discuss Software Solution',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    tag: 'iOS & Android',
    title: 'Fast Native Mobile Applications',
    description: 'Lightweight, reliable mobile apps crafted with smooth animations, offline-first reliability, and intuitive UX that your customers love opening.',
    features: [
      'Smooth performance across all Android & iOS devices',
      'Biometric authentication, offline mode & push notifications',
      'Google Play Store and Apple App Store deployment',
      'Complete source code handover upon completion',
    ],
    accent: '#F97316',
    cta: 'Build a Mobile App',
  },
  {
    id: 'seo-ai',
    icon: Search,
    tag: 'Search & AI Discovery',
    title: 'Search Engine & AI Discovery (AEO/GEO)',
    description: 'Complete search optimization so your business ranks #1 on Google Search, Google Maps, ChatGPT, and Perplexity when customers look for your services.',
    features: [
      'Google Page 1 organic ranking for high-intent keywords',
      'ChatGPT, Gemini & Perplexity AI recommendation schema',
      'Google Maps local pin optimization for nearby clients',
      'Sustainable organic customer leads without ad waste',
    ],
    accent: '#10B981',
    cta: 'Explore Search Ranking',
    link: '/seo-ai',
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    icon: Compass,
    title: 'Honest Consultation',
    desc: 'We analyze your business goals and recommend the simplest, most cost-effective digital solution.',
  },
  {
    num: '02',
    icon: Code2,
    title: 'Design & Sprint Build',
    desc: 'We design Apple-grade interfaces and write clean, scalable code with transparent progress updates.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Launch & Handover',
    desc: 'Live rollout on your domain with 100% source code transfer and ongoing direct technical support.',
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
              <span>Our Core Capabilities</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} y={20}>
            <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] leading-tight mb-4">
              Software & Digital Solutions. <br className="hidden sm:inline" />
              <span className="shimmer-text">Crafted for Real Business Growth.</span>
            </h1>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
              We help founders and businesses build modern websites, operational software, and mobile apps that save time, attract customers, and operate smoothly.
            </p>
          </FadeIn>
        </div>

        {/* 4 REFINED SERVICES CARDS (CLEAN 2x2 GRID - NO CLUTTER) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mb-20">
          {SERVICES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={item.id} delay={idx * 0.1} y={25} className="w-full flex">
                <div 
                  id={item.id}
                  className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full w-full text-left relative overflow-hidden group"
                >
                  {/* ACCENT LINE */}
                  <div 
                    className="absolute top-0 inset-x-0 h-1.5"
                    style={{ backgroundColor: item.accent }}
                  />

                  <div>
                    {/* TOP BADGE */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div 
                        className="w-11 h-11 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xs"
                        style={{ backgroundColor: `${item.accent}12`, color: item.accent }}
                      >
                        <IconComp size={20} />
                      </div>
                      <span className="font-sans text-[11px] font-semibold tracking-wider uppercase border border-slate-200 px-3 py-1 rounded-full bg-slate-50 text-slate-700">
                        {item.tag}
                      </span>
                    </div>

                    <h2 className="font-clash font-bold text-2xl text-[#0A0F1E] group-hover:text-blue-600 transition-colors mb-2.5">
                      {item.title}
                    </h2>
                    <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* FEATURES BULLETS */}
                    <div className="space-y-2.5 pt-5 border-t border-slate-100 mb-6">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM ACTION */}
                  <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                    <Link
                      to={item.link || `/contact?service=${item.id}`}
                      className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs sm:text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/contact"
                      className="rounded-full bg-[#0A0F1E] hover:bg-blue-600 text-white font-sans font-semibold text-xs px-4 py-1.5 transition-colors shadow-2xs"
                    >
                      Inquire
                    </Link>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* 3-STEP PROCESS (CLEAN & AIRY) */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <FadeIn delay={0} y={15}>
              <div className="font-sans font-bold text-xs tracking-[0.2em] text-slate-400 uppercase mb-2">
                Simple Execution
              </div>
              <h3 className="font-clash font-bold text-2xl sm:text-3xl text-[#0A0F1E]">
                How We Deliver Your Project
              </h3>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <FadeIn key={step.num} delay={sIdx * 0.1} y={20} className="w-full flex">
                  <div className="w-full rounded-2xl bg-white border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                          <StepIcon size={18} />
                        </div>
                        <span className="font-mono font-bold text-xs text-slate-400">
                          STEP {step.num}
                        </span>
                      </div>
                      <h4 className="font-clash font-bold text-lg text-[#0A0F1E] mb-2">
                        {step.title}
                      </h4>
                      <p className="font-sans font-normal text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CALLOUT */}
        <FadeIn delay={0.3} y={20}>
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 p-8 sm:p-10 text-white text-center flex flex-col items-center justify-center shadow-lg">
            <h3 className="font-clash font-bold text-2xl sm:text-3xl mb-3">
              Ready to start your digital project?
            </h3>
            <p className="font-sans font-normal text-sm sm:text-base text-white/90 max-w-xl mb-6">
              Get an honest technical consultation, transparent pricing, and a clear timeline for your business.
            </p>
            <Link
              to="/contact"
              className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-sans font-semibold text-sm px-8 py-3.5 shadow-md transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Start Consultation</span>
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
