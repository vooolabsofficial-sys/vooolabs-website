import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EASING = [0.22, 1, 0.36, 1] as const;

interface ServiceSystemItem {
  number: string;
  anchorId: string;
  path: string;
  title: string;
  summary: string;
  highlights: string[];
}

const SYSTEMS: ServiceSystemItem[] = [
  {
    number: '01',
    anchorId: 'websites',
    path: '/services/websites',
    title: 'Business Websites',
    summary:
      'Custom, edge-fast business websites with built-in Google SEO & AI Search (AEO), form-free visitor intent tracking, complete domain/DNS/hosting setup, and direct WhatsApp lead routing.',
    highlights: ['Custom Web Architecture', 'Built-In SEO & AEO', 'Domain, DNS & 24/7 Cloud Setup'],
  },
  {
    number: '02',
    anchorId: 'web-apps',
    path: '/services/web-apps',
    title: 'Custom Web Apps & Portals',
    summary:
      'Dedicated client, student, and team login portals with self-service bookings, live status tracking, and unified administrative control.',
    highlights: ['Role-Based Secure Logins', 'Self-Service Bookings & Tracking', 'Automated WhatsApp & Email Updates'],
  },
  {
    number: '03',
    anchorId: 'custom-software',
    path: '/services/business-software',
    title: 'Custom Business Software',
    summary:
      'Tailored internal operations, order, inventory, and multi-branch workflow software shaped strictly around how your team actually works.',
    highlights: ['Workflow-Exact Engineering', 'Multi-Branch Owner Command', '100% GitHub & Code Ownership'],
  },
  {
    number: '04',
    anchorId: 'google-presence',
    path: '/seo-ai',
    title: 'Google SEO, AI Search & Ads',
    summary:
      'Get found and recommended where modern buyers search today—across Google Search, Google Maps, ChatGPT/Google AI, and high-intent ad campaigns.',
    highlights: ['Google SEO & Maps Authority', 'ChatGPT & AI Search Readiness', 'Targeted Search & AI Ads'],
  },
];

export default function ServicesDirectory() {
  return (
    <section 
      className="bg-white text-slate-900 py-12 sm:py-16 select-none"
      aria-label="Core Engineering Systems Directory"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* DIRECTORY HEADER */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              ARCHITECTURAL DIRECTORY
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
              Select a System to Explore Its Specifications.
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-500">
            Dedicated deep-dive architectures · Day-one code handover
          </span>
        </div>

        {/* 4 OPEN BORDERLESS HORIZONTAL ROWS (DIVIDE-Y SEPARATED STRICTLY BY 1PX HAIRLINES) */}
        <div className="border-t border-b border-slate-200/80 divide-y divide-slate-200/80">
          {SYSTEMS.map((system) => (
            <div key={system.number} id={system.anchorId} className="scroll-mt-28">
              <Link
                to={system.path}
                className="py-9 sm:py-11 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group transition-colors hover:bg-slate-50/70 px-3 sm:px-4 rounded-xl text-left block"
                aria-label={`Explore ${system.title}`}
              >
                {/* LEFT: NUMBER + TITLE */}
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-sm font-semibold text-blue-600 shrink-0 w-8">
                    {system.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                    {system.title}
                  </h3>
                </div>

                {/* MIDDLE: SUMMARY & HIGHLIGHTS */}
                <div className="lg:col-span-6">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {system.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono font-medium text-slate-500">
                    {system.highlights.map((highlight, hIdx) => (
                      <React.Fragment key={highlight}>
                        <span>{highlight}</span>
                        {hIdx < system.highlights.length - 1 && (
                          <span className="text-slate-300" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* RIGHT: ACTION CUE */}
                <div className="lg:col-span-2 lg:text-right flex lg:justify-end items-center">
                  <span className="text-sm font-semibold text-slate-950 group-hover:text-blue-600 inline-flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    <span>Explore</span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
