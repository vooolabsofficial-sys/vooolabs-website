import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Layers, Cpu, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EASING = [0.22, 1, 0.36, 1] as const;

interface ServiceSystemItem {
  id: string;
  index: string;
  title: string;
  href: string;
  icon: React.ElementType;
  accent: string;
  summary: string;
  capabilities: string[];
}

const SYSTEMS: ServiceSystemItem[] = [
  {
    id: 'websites',
    index: '01',
    title: 'Business Websites',
    href: '/services/websites',
    icon: Laptop,
    accent: '#4285F4',
    summary:
      'Custom, edge-fast business websites engineered with built-in Google SEO & AI Search (AEO), form-free visitor intent tracking, complete domain/DNS/hosting setup, and direct WhatsApp lead routing.',
    capabilities: [
      'Custom Web Architecture',
      'Built-In SEO & AEO',
      'Domain, DNS & 24/7 Cloud Setup',
    ],
  },
  {
    id: 'web-apps',
    index: '02',
    title: 'Custom Web Apps & Portals',
    href: '/services/web-apps',
    icon: Layers,
    accent: '#7C3AED',
    summary:
      'Dedicated client, student, and team login portals with self-service bookings, live status tracking, and unified administrative control.',
    capabilities: [
      'Role-Based Secure Logins',
      'Self-Service Bookings & Tracking',
      'Automated WhatsApp & Email Updates',
    ],
  },
  {
    id: 'business-software',
    index: '03',
    title: 'Custom Business Software',
    href: '/services/business-software',
    icon: Cpu,
    accent: '#10B981',
    summary:
      'Tailored internal operations, order, inventory, and multi-branch workflow software shaped strictly around how your team actually works.',
    capabilities: [
      'Workflow-Exact Engineering',
      'Multi-Branch Owner Command',
      '100% GitHub & Code Ownership',
    ],
  },
  {
    id: 'google-presence',
    index: '04',
    title: 'Google SEO, AI Search & Ads',
    href: '/seo-ai',
    icon: Search,
    accent: '#F97316',
    summary:
      'Get found and recommended where modern buyers search today—across Google Search, Google Maps, ChatGPT/Google AI, and high-intent ad campaigns.',
    capabilities: [
      'Google SEO & Maps Authority',
      'ChatGPT & AI Search Readiness',
      'Targeted Search & AI Ads',
    ],
  },
];

export default function ServicesDirectory() {
  return (
    <section 
      className="bg-white pb-20 select-none text-left"
      aria-label="Core Engineering Disciplines Directory"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* HAIRLINE-ALIGNED DIRECTORY ROWS (ZERO BOX CARDS) */}
        <div className="divide-y divide-slate-200/80 border-b border-slate-200/80">
          {SYSTEMS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASING }}
              >
                <Link
                  to={item.href}
                  id={item.id}
                  className="py-7 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center group transition-colors hover:bg-slate-50/70 -mx-4 px-4 sm:mx-0 sm:px-0 block"
                  aria-label={`Inspect ${item.index} ${item.title}`}
                >
                  {/* LEFT (lg:col-span-4): INDEX TAG + ICON CONTAINER + BOLD SYSTEM TITLE */}
                  <div className="lg:col-span-4 flex items-center gap-3.5 min-w-0">
                    <span className="font-mono text-xs sm:text-sm font-bold text-blue-600 shrink-0 w-6 sm:w-7">
                      {item.index}
                    </span>

                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                      style={{ 
                        backgroundColor: `${item.accent}14`, 
                        color: item.accent 
                      }}
                    >
                      <IconComp size={18} />
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {item.title}
                    </h2>
                  </div>

                  {/* MIDDLE (lg:col-span-6): CONCISE DESCRIPTION & INLINE CAPABILITIES */}
                  <div className="lg:col-span-6 min-w-0">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.summary}
                    </p>

                    <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500 font-mono">
                      {item.capabilities.map((cap, cIdx) => (
                        <span key={cIdx} className="inline-flex items-center gap-2">
                          {cIdx > 0 && <span className="text-slate-300 font-sans" aria-hidden="true">·</span>}
                          <span>{cap}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT (lg:col-span-2): EXPLORE LINK CUE WITH FLUID GLIDE */}
                  <div className="lg:col-span-2 lg:text-right flex items-center lg:justify-end pt-2 lg:pt-0">
                    <span className="text-sm font-bold text-blue-600 inline-flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-x-1">
                      <span>Explore</span>
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
