import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Compass, 
  Code2, 
  Rocket,
  Sparkles,
  Layers,
  Zap,
  Lock,
  Server
} from 'lucide-react';
import FadeIn from '../components/shared/FadeIn';

const CAPABILITIES = [
  {
    num: '01',
    category: 'Web Platforms & Portals',
    title: 'Bespoke Websites & Digital Portals',
    tagline: 'High-speed, custom-coded web platforms engineered to convert visitors into customers.',
    problem: 'Most commercial websites rely on bloated templates, slow page builders, and unnecessary plugins. This results in sluggish mobile loading, poor Google rankings, and lost customer inquiries.',
    approach: 'We engineer custom web platforms from the source code up using modern frameworks. Every page is optimized for sub-second loading, intuitive mobile navigation, and seamless 1-tap WhatsApp and phone lead routing.',
    specs: [
      {
        title: 'Modern Architecture',
        detail: 'React, Vite, and modern standards with zero bloated plugins or slow builders.',
      },
      {
        title: 'Frictionless Inquiries',
        detail: 'Direct WhatsApp integration, phone routing, and clean contact channels.',
      },
      {
        title: 'Performance & Speed',
        detail: 'Optimized for sub-1s load times and 100/100 Google Core Web Vitals.',
      },
      {
        title: 'Hosting & Security',
        detail: 'Global CDN distribution, automated SSL encryption, and custom domain setup.',
      },
    ],
    accent: '#3B82F6',
    icon: Globe,
    linkId: 'websites',
  },
  {
    num: '02',
    category: 'Operations & Automation',
    title: 'Custom Business Software & Tools',
    tagline: 'Tailored internal dashboards and web tools designed to automate daily operations.',
    problem: 'Growing businesses often struggle with scattered Excel spreadsheets, manual WhatsApp follow-ups, and repetitive paperwork that cause human errors and waste hours every day.',
    approach: 'We build secure, private internal software systems and dashboards designed around your exact business workflow. Everything is engineered to automate status updates, centralize records, and keep operations running smoothly.',
    specs: [
      {
        title: 'Workflow Automation',
        detail: 'Automated client notifications, order management, and recurring task triggers.',
      },
      {
        title: 'Centralized Database',
        detail: 'Secure database architecture with automated backups and role-based permissions.',
      },
      {
        title: 'Team & Staff Access',
        detail: 'Individual logins for admin, staff, and clients with custom access levels.',
      },
      {
        title: 'Full Code Ownership',
        detail: '100% intellectual property transfer with complete documentation and zero lock-in.',
      },
    ],
    accent: '#8B5CF6',
    icon: Cpu,
    linkId: 'software',
  },
  {
    num: '03',
    category: 'Mobile Engineering',
    title: 'Native & Cross-Platform Mobile Applications',
    tagline: 'Lightweight, intuitive mobile apps engineered for reliability and smooth daily use.',
    problem: 'Generic hybrid app builders often produce heavy, buggy apps that drain battery, freeze on slower networks, and lead to poor user ratings.',
    approach: 'We develop clean native and cross-platform mobile applications for Android and iOS. Focused on responsive touch interactions, offline data reliability, biometric security, and clean user interfaces.',
    specs: [
      {
        title: 'Native Performance',
        detail: 'Engineered for smooth 60fps animations and low battery consumption.',
      },
      {
        title: 'Offline-First Reliability',
        detail: 'Local data caching so your team or customers can work even without active internet.',
      },
      {
        title: 'Security & Push Alerts',
        detail: 'Biometric login (Fingerprint/FaceID) and automated push notification pipelines.',
      },
      {
        title: 'Store Deployment',
        detail: 'Full management of Google Play Console and Apple App Store verification.',
      },
    ],
    accent: '#F97316',
    icon: Smartphone,
    linkId: 'mobile-apps',
  },
  {
    num: '04',
    category: 'Search & AI Discovery',
    title: 'Technical SEO, AEO & Local Search Presence',
    tagline: 'Get your business discovered across Google, Google Maps, and AI search engines.',
    problem: 'A website is useless if potential clients cannot find it. Relying solely on paid advertising leads to high customer acquisition costs that vanish the moment ad spend stops.',
    approach: 'We implement structured data schemas, technical search optimization, and AI engine optimization (AEO) so your business ranks at the top of Google and gets recommended by conversational AI engines like ChatGPT and Perplexity.',
    specs: [
      {
        title: 'Google Page 1 (SEO)',
        detail: 'On-page keyword mapping, structured JSON-LD schemas, and fast mobile indexing.',
      },
      {
        title: 'AI Discovery (AEO)',
        detail: 'Brand entity optimization so ChatGPT, Gemini, and Claude cite your business.',
      },
      {
        title: 'Local Google Maps (GEO)',
        detail: 'Google Business Profile and map pin optimization for high-intent local clients.',
      },
      {
        title: 'Sustainable Growth',
        detail: 'Long-term organic inbound customer inquiries with zero ongoing ad spend.',
      },
    ],
    accent: '#10B981',
    icon: Search,
    linkId: 'seo-ai',
  },
];

const ENGAGEMENT_STEPS = [
  {
    step: '01',
    title: 'Technical Discovery',
    desc: 'We assess your current operational bottlenecks, business goals, and requirements to design the exact right digital architecture.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Clear Roadmap & Sprint Build',
    desc: 'You receive a transparent scope of work and fixed timeline. We design interfaces and write clean code with weekly live demos.',
    icon: Code2,
  },
  {
    step: '03',
    title: 'Live Launch & Full Handover',
    desc: 'Deployment to production on your domain, staff walkthrough session, 100% source code transfer, and ongoing direct engineering support.',
    icon: Rocket,
  },
];

export default function ServicesPage() {
  return (
    <div className="page-wrap bg-[#FAFAFC] pt-32 sm:pt-36 pb-24 px-6 select-none">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FadeIn delay={0} y={15}>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/[0.04] border border-slate-900/10 px-4 py-1.5 mb-4 text-slate-700 font-sans font-semibold text-xs tracking-wider uppercase">
              <Sparkles size={13} className="text-blue-600" />
              <span>Engineering Capabilities</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} y={20}>
            <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] leading-tight mb-4">
              Software & Digital Systems. <br className="hidden sm:inline" />
              <span className="shimmer-text">Built for Growing Businesses.</span>
            </h1>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We partner with founders and business owners to build high-performance web platforms, custom operational tools, and mobile applications with clean code, transparent pricing, and zero unnecessary fluff.
            </p>
          </FadeIn>
        </div>

        {/* 4 DEDICATED EDITORIAL CHAPTERS */}
        <div className="space-y-12 sm:space-y-16 mb-24">
          {CAPABILITIES.map((cap, idx) => {
            const IconComp = cap.icon;
            return (
              <FadeIn key={cap.num} delay={idx * 0.08} y={25}>
                <div 
                  id={cap.linkId}
                  className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] text-left relative overflow-hidden"
                >
                  {/* TOP ACCENT LINE */}
                  <div 
                    className="absolute top-0 inset-x-0 h-1.5"
                    style={{ backgroundColor: cap.accent }}
                  />

                  {/* CHAPTER HEADER */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center shadow-2xs"
                        style={{ backgroundColor: `${cap.accent}12`, color: cap.accent }}
                      >
                        <IconComp size={22} />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          SECTION {cap.num} · {cap.category}
                        </span>
                        <h2 className="font-clash font-bold text-2xl sm:text-3xl text-[#0A0F1E]">
                          {cap.title}
                        </h2>
                      </div>
                    </div>

                    <Link
                      to={`/contact?service=${cap.linkId}`}
                      className="self-start sm:self-auto rounded-full bg-slate-900 hover:bg-blue-600 text-white font-sans font-semibold text-xs px-5 py-2 transition-colors shadow-2xs inline-flex items-center gap-1.5"
                    >
                      <span>Inquire for Project</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* SUMMARY & CONTEXT GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="font-sans text-xs font-bold text-rose-600 uppercase tracking-wider block mb-2">
                        The Common Industry Problem
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cap.problem}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="font-sans text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-2">
                        Our Engineering Approach
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cap.approach}
                      </p>
                    </div>
                  </div>

                  {/* SPECIFICATIONS BREAKDOWN */}
                  <div>
                    <h3 className="font-clash font-bold text-base text-[#0A0F1E] mb-4">
                      Technical Scope & Deliverables:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cap.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="p-4 rounded-xl border border-slate-100 bg-white">
                          <div className="flex items-center gap-2 font-sans font-semibold text-xs text-[#0A0F1E] mb-1">
                            <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                            <span>{sp.title}</span>
                          </div>
                          <p className="font-sans text-xs text-slate-500 leading-relaxed pl-5">
                            {sp.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* HOW WE WORK / ENGAGEMENT MODEL */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <FadeIn delay={0} y={15}>
              <div className="font-sans font-bold text-xs tracking-[0.2em] text-slate-400 uppercase mb-2">
                Our Process
              </div>
              <h3 className="font-clash font-bold text-2xl sm:text-3xl text-[#0A0F1E]">
                How We Partner With You
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500 mt-1">
                Transparent milestones with direct engineer communication from day one.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_STEPS.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <FadeIn key={step.step} delay={sIdx * 0.1} y={20} className="w-full flex">
                  <div className="w-full rounded-2xl bg-white border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                          <StepIcon size={18} />
                        </div>
                        <span className="font-mono font-bold text-xs text-slate-400">
                          STEP {step.step}
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

        {/* BOTTOM ACTION CARD */}
        <FadeIn delay={0.25} y={20}>
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-clash font-bold text-2xl text-[#0A0F1E]">
                Have a project or problem in mind?
              </h3>
              <p className="font-sans text-sm text-slate-600 mt-1 max-w-xl">
                Let's discuss your requirements and design the simplest, most cost-effective digital system for your business.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-[#0A0F1E] hover:bg-blue-600 text-white font-sans font-semibold text-sm px-8 py-3.5 transition-colors shadow-sm flex-shrink-0 inline-flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Start Free Consultation</span>
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
