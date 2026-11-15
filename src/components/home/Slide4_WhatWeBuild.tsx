import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const STUDIO_SYSTEMS = [
  {
    tag: 'All-Inclusive Launch Standard',
    title: 'Turnkey Websites With Zero Tech Headaches',
    description: 'Complete end-to-end delivery: domain acquisition assistance, full DNS routing, 24/7 fast cloud hosting, SSL certificates, and direct WhatsApp lead routing.',
    status: 'All-Inclusive Build',
    statusColor: 'text-sky-700 bg-sky-50 border-sky-200',
    icon: Globe,
    accent: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.08)',
    link: '/services#websites',
  },
  {
    tag: 'AI-Era Advantage',
    title: 'Affordable Client & Member Portals',
    description: 'Modern engineering workflows lower development costs so small and mid-sized businesses can launch custom customer accounts, booking systems, and dashboards.',
    status: '100% Client Owned',
    statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
    icon: Laptop,
    accent: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.08)',
    link: '/services#web-apps',
  },
  {
    tag: 'Internal Operations',
    title: 'Custom GST Billing & Workflow Tools',
    description: 'Replace fragile spreadsheets with structured task allocation, 1-click GST tax invoices, customer order pipelines, and daily WhatsApp reports—with ₹0 monthly software rent.',
    status: 'Zero Monthly Rent',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    icon: Cpu,
    accent: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.08)',
    link: '/services#custom-software',
  },
];

export default function Slide4_WhatWeBuild() {
  return (
    <section 
      className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 select-none relative border-b border-slate-200/80"
      aria-label="All-Inclusive Systems We Engineer"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <span className="font-mono text-xs font-semibold text-purple-600 uppercase tracking-widest block mb-2 text-center">
            ALL-INCLUSIVE LAUNCH STANDARD
          </span>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.08} y={20}>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center leading-tight mb-4">
            Engineered by VOOO LABS.
          </h2>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-2xl mx-auto mb-14 leading-relaxed">
            In the AI era, custom digital systems that once cost lakhs are now practical and affordable for growing businesses. We handle everything from custom design to domain, DNS, and 24/7 cloud hosting.
          </p>
        </FadeIn>

        {/* 3 CLIENT SYSTEMS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {STUDIO_SYSTEMS.map((prod, idx) => {
            const IconComp = prod.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1} y={20} className="w-full flex">
                <Link
                  to={prod.link}
                  className="w-full rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-8 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
                >
                  <div className="relative z-10">
                    {/* TOP BADGES */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div 
                        className="w-11 h-11 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-slate-200/60"
                        style={{ backgroundColor: `${prod.accent}14`, color: prod.accent }}
                      >
                        <IconComp size={20} />
                      </div>
                      <span className={`font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full border ${prod.statusColor}`}>
                        {prod.status}
                      </span>
                    </div>

                    <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-1.5">
                      {prod.tag}
                    </span>
                    <h3 className="font-clash font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                      {prod.title}
                    </h3>
                    <p className="font-sans font-normal text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {prod.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 group-hover:translate-x-1.5 transition-transform duration-200 pt-4 border-t border-slate-200/60 relative z-10">
                    <span>Inspect System Deliverables</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {/* BOTTOM CTA LINK */}
        <FadeIn delay={0.35} y={15}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-sans font-medium text-xs sm:text-sm text-slate-700 hover:text-blue-600 border border-slate-200/80 hover:border-blue-300 bg-white hover:bg-slate-50 px-6 py-3.5 rounded-full shadow-2xs transition-all hover:scale-105"
          >
            <span>See what your project will cost</span>
            <ArrowRight size={14} />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
