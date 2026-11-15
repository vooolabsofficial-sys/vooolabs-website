import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Search, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const SERVICES = [
  {
    icon: Globe,
    title: 'Custom Web Applications',
    tag: 'Web Software & Portals',
    description: 'Bespoke web applications designed around how your business operates — client portals, multi-tier staff access, and automated workflow tracking.',
    accent: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.12)',
    link: '/services#web-apps',
  },
  {
    icon: Laptop,
    title: 'High-Conversion Business Websites',
    tag: 'Fast Brand Platforms',
    description: 'Sub-0.4s instant page loads on all mobile devices with persuasive storytelling, verified trust design, and 1-tap WhatsApp lead conversion.',
    accent: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.12)',
    link: '/services#websites',
  },
  {
    icon: Cpu,
    title: 'Custom Business Software & Portals',
    tag: 'Operations & Billing Tools',
    description: 'Tailored management platforms that eliminate chaotic Excel sheets with automated GST invoicing, order pipelines, and real-time revenue visibility.',
    accent: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.12)',
    link: '/services#software',
  },
  {
    icon: Search,
    title: 'Google & AI Search Discoverability',
    tag: 'SEO · AEO · Local Ranking',
    description: 'Advanced technical schema and entity structuring so prospective clients find your business first on Google Maps, Google Search, and AI search engines.',
    accent: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.12)',
    link: '/seo-ai',
  },
];

export default function Slide3_CapabilitiesBento() {
  return (
    <section 
      className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none relative border-b border-slate-200/80"
      aria-label="Studio Web Capabilities"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2 text-center">
            CORE CAPABILITIES
          </span>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.08} y={20}>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center leading-tight mb-4">
            Web Applications, Portals & <span className="shimmer-text">Digital Systems.</span>
          </h2>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-xl mx-auto mb-14 leading-relaxed">
            We engineer tailored web solutions that save your team dozens of manual hours every week and convert visitors into clients.
          </p>
        </FadeIn>

        {/* 4 CLEAN SERVICES IN LUXURY GLASS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {SERVICES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full flex">
                <Link
                  to={item.link}
                  style={{ '--card-glow': item.glowColor } as React.CSSProperties}
                  className="w-full rounded-3xl bg-[#FAFAFD] border border-slate-200/80 p-7 sm:p-8 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
                >
                  {/* CORNER AMBIENT ACCENT */}
                  <div 
                    className="absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ backgroundColor: item.glowColor }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 border border-slate-200/60"
                        style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                      >
                        <IconComp size={22} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-clash font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                      {item.title}
                    </h3>
                    <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 group-hover:translate-x-1.5 transition-transform duration-200 pt-4 border-t border-slate-200/60 relative z-10">
                    <span>Explore Deliverables & Scope</span>
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
