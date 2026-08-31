import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Clock, 
  Smartphone, 
  Search, 
  Sparkles,
  Zap
} from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const PROBLEMS_AND_SOLUTIONS = [
  {
    id: 'websites',
    badge: 'Website & Growth',
    target: 'For businesses with outdated sites',
    problem: 'Your current website is slow, looks outdated, and visitors leave without contacting you or buying.',
    solutionTitle: 'High-Converting Modern Websites',
    solutionText: 'We build ultra-fast, modern websites with clear user journeys and sub-second load times that turn visitors into paying customers.',
    impact: '3x More Inquiries · Sub-Second Load',
    icon: TrendingUp,
    accentColor: '#3B82F6', // Blue
    link: '/products#websites',
    linkLabel: 'Explore Website Solutions',
  },
  {
    id: 'software',
    badge: 'Operations & Automation',
    target: 'For teams drowning in spreadsheets',
    problem: 'Hours wasted daily on manual paperwork, messy Excel sheets, WhatsApp follow-ups, and disconnected tools.',
    solutionTitle: 'Custom Software & Automation',
    solutionText: 'We build tailored internal portals and automated dashboards that run your orders, customer data, and daily operations automatically.',
    impact: 'Save 15+ Hours/Week · Zero Manual Errors',
    icon: Clock,
    accentColor: '#8B5CF6', // Purple
    link: '/products#software',
    linkLabel: 'Explore Software Systems',
  },
  {
    id: 'mobile-apps',
    badge: 'Mobile & Customer Reach',
    target: 'For brands needing a mobile presence',
    problem: 'Traditional software agencies quote massive 6-month timelines and huge budgets for basic mobile apps.',
    solutionTitle: 'Fast, Native Mobile Applications',
    solutionText: 'We design and code smooth, lightweight Android & iOS apps delivered in weeks with transparent pricing and full code ownership.',
    impact: 'Launch in 3-4 Weeks · 100% Code Ownership',
    icon: Smartphone,
    accentColor: '#F97316', // Orange
    link: '/products#mobile-apps',
    linkLabel: 'Explore Mobile Apps',
  },
  {
    id: 'seo-ai',
    badge: 'Visibility & Inbound Traffic',
    target: 'For sites invisible on Google & AI',
    problem: 'People are searching for your services on Google, ChatGPT, and Perplexity, but only finding your competitors.',
    solutionTitle: 'Technical SEO & AI Search Engine Ranking',
    solutionText: 'We architect your site with modern AEO and GEO structured schemas so your brand ranks at the top of Google and AI answer engines.',
    impact: 'Top Google Rank · Consistent Organic Leads',
    icon: Search,
    accentColor: '#10B981', // Emerald
    link: '/products#websites',
    linkLabel: 'Explore SEO & AI Ranking',
  },
];

export default function Slide2_ProductBento() {
  return (
    <section 
      className="snap-section bg-[#FAFAFC] flex flex-col justify-center items-center px-6 py-24 sm:py-28 select-none relative overflow-hidden"
      aria-label="Real Business Problems Solved by VOOO LABS"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* EYEBROW BADGE */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/[0.04] border border-slate-900/10 px-4 py-1.5 mb-4 text-slate-700 font-sans font-semibold text-xs tracking-wider uppercase">
            <Sparkles size={13} className="text-blue-600" />
            <span>Clear Solutions · Real Business Impact</span>
          </div>
        </FadeIn>

        {/* SECTION HEADING */}
        <FadeIn delay={0.1} y={20}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] text-center leading-tight mb-4">
            Real Business Problems. <br className="hidden sm:inline" />
            <span className="shimmer-text">Solved with Clean Code & Design.</span>
          </h2>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-2xl mx-auto mb-14 sm:mb-16 leading-relaxed">
            No technical jargon or complex agency talk. Here is exactly what challenges we solve for businesses, founders, and growing teams.
          </p>
        </FadeIn>

        {/* 4 PROBLEM-SOLUTION CARDS (2x2 GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full items-stretch">
          {PROBLEMS_AND_SOLUTIONS.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <FadeIn key={item.id} delay={idx * 0.1} y={25} className="w-full flex">
                <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between h-full w-full shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden text-left">
                  
                  {/* TOP ACCENT LINE */}
                  <div 
                    className="absolute top-0 inset-x-0 h-1.5"
                    style={{ backgroundColor: item.accentColor }}
                  />

                  <div>
                    {/* CARD HEADER */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div 
                        className="w-11 h-11 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xs"
                        style={{ backgroundColor: `${item.accentColor}12`, color: item.accentColor }}
                      >
                        <IconComp size={20} />
                      </div>
                      <span className="font-sans text-[11px] font-semibold tracking-wider uppercase border border-slate-200 px-3 py-1 rounded-full bg-slate-50 text-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    {/* THE PROBLEM BLOCK */}
                    <div className="rounded-2xl bg-slate-50/80 border border-slate-100 p-4 mb-5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 mb-1.5 uppercase tracking-wider">
                        <XCircle size={14} className="flex-shrink-0" />
                        <span>The Challenge</span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    {/* THE VOOO FIX BLOCK */}
                    <div className="mb-6">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mb-1.5 uppercase tracking-wider">
                        <CheckCircle2 size={14} className="flex-shrink-0" />
                        <span>How VOOO LABS Fixes It</span>
                      </div>
                      <h3 className="font-clash font-bold text-xl sm:text-2xl text-[#0A0F1E] group-hover:text-blue-600 transition-colors mb-2">
                        {item.solutionTitle}
                      </h3>
                      <p className="font-sans font-normal text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.solutionText}
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM IMPACT BAR & LINK */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-slate-100/70 px-3 py-1.5 rounded-xl mb-4">
                      <Zap size={13} className="text-amber-500 flex-shrink-0" />
                      <span>{item.impact}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={item.link}
                        className="font-sans font-semibold text-xs sm:text-sm text-slate-700 group-hover:text-blue-600 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        to={`/contact?service=${item.id}`}
                        className="rounded-full bg-[#0A0F1E] hover:bg-blue-600 text-white px-4 py-1.5 font-sans font-semibold text-xs transition-colors shadow-2xs"
                      >
                        Fix This
                      </Link>
                    </div>
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
