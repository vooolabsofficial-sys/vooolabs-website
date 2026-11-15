import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, ShieldCheck, Database, Search, MessageSquare, Laptop, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

type StandardCategory = 'all' | 'speed' | 'operations' | 'security';

interface StudioStandard {
  id: string;
  category: 'speed' | 'operations' | 'security';
  title: string;
  categoryBadge: string;
  role: string;
  outcome: string;
  benchmark: string;
  icon: typeof Zap;
  iconColor: string;
  iconBg: string;
}

export default function Slide4_TechStack() {
  const [activeCategory, setActiveCategory] = useState<StandardCategory>('all');

  const STANDARDS: StudioStandard[] = [
    {
      id: 'speed-arch',
      category: 'speed',
      categoryBadge: 'Speed & Conversion',
      title: 'High-Speed Web Architecture',
      role: 'Instant Page Loads & Zero Bounce',
      outcome: 'Pages load in under 0.4 seconds on mobile. Visitors stay on your site, read your offering, and convert instead of abandoning a sluggish page.',
      benchmark: '<0.4s Instant First Paint',
      icon: Zap,
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-50 border-blue-200',
    },
    {
      id: 'admin-portal',
      category: 'operations',
      categoryBadge: 'Internal Systems',
      title: 'Custom Admin & Operations Portals',
      role: 'Bespoke Management & Task Routing',
      outcome: 'Replaces messy Excel sheets with a dedicated web portal for managing staff assignments, tracking orders, and monitoring daily revenue in real-time.',
      benchmark: '100% Custom Workflows',
      icon: Laptop,
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-50 border-purple-200',
    },
    {
      id: 'lead-routing',
      category: 'speed',
      categoryBadge: 'Lead Generation',
      title: 'Automated WhatsApp & Lead Funnels',
      role: 'Sub-2s Ingestion & Direct Alerts',
      outcome: 'Inquiries from website visitors and ad campaigns route directly to your team’s WhatsApp and email with zero delay, ensuring fast customer follow-ups.',
      benchmark: 'Sub-2s Direct Ingress',
      icon: MessageSquare,
      iconColor: 'text-emerald-700',
      iconBg: 'bg-emerald-50 border-emerald-200',
    },
    {
      id: 'data-security',
      category: 'security',
      categoryBadge: 'Confidentiality',
      title: 'Enterprise Data Security & Backups',
      role: 'Role-Based Access & Encrypted Storage',
      outcome: 'Staff only access the records they need, while executives maintain full financial control. Customer databases are encrypted and backed up automatically every day.',
      benchmark: 'Automated Daily Snapshots',
      icon: ShieldCheck,
      iconColor: 'text-cyan-700',
      iconBg: 'bg-cyan-50 border-cyan-200',
    },
    {
      id: 'code-ownership',
      category: 'security',
      categoryBadge: 'Client Independence',
      title: '100% Source Code & IP Ownership',
      role: 'Complete Handover & Zero Vendor Lock-in',
      outcome: 'You own every line of code, database schema, and design asset upon delivery. Full GitHub transfer with zero recurring per-seat monthly hostage fees.',
      benchmark: '100% Client IP Rights',
      icon: Database,
      iconColor: 'text-amber-700',
      iconBg: 'bg-amber-50 border-amber-200',
    },
    {
      id: 'search-aeo',
      category: 'operations',
      categoryBadge: 'Discovery & SEO',
      title: 'Search & AI Discoverability (SEO & AEO)',
      role: 'Google Ranking & AI Recommendation',
      outcome: 'Engineered with clean metadata and structured schemas so your company ranks prominently on Google Maps, Google Search, and gets cited by AI engines like ChatGPT.',
      benchmark: 'Top Search & AI Citations',
      icon: Search,
      iconColor: 'text-indigo-700',
      iconBg: 'bg-indigo-50 border-indigo-200',
    },
  ];

  const CATEGORIES = [
    { key: 'all' as StandardCategory, label: 'All Standards', icon: Layers },
    { key: 'speed' as StandardCategory, label: 'Speed & Conversion', icon: Zap },
    { key: 'operations' as StandardCategory, label: 'Business Portals', icon: Laptop },
    { key: 'security' as StandardCategory, label: 'Security & Ownership', icon: ShieldCheck },
  ];

  const filtered = activeCategory === 'all'
    ? STANDARDS
    : STANDARDS.filter((s) => s.category === activeCategory);

  return (
    <section className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-widest block mb-2">
              CLIENT ASSURANCE MATRIX
            </span>
            <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 mb-3">
              Studio Capabilities & Standards
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
              How our web systems are engineered for speed, operational clarity, and total client independence without confusing technical jargon.
            </p>
          </FadeIn>
        </div>

        {/* CATEGORY TABS FILTER */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-full font-sans font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-2xs ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md scale-[1.02]'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <IconComp size={14} className={isActive ? 'text-blue-400' : 'text-slate-500'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* STANDARDS CARDS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filtered.map((std) => {
              const StandardIcon = std.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={std.id}
                  className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div>
                    {/* TOP BADGES */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${std.iconBg} ${std.iconColor} group-hover:scale-105 transition-transform duration-200`}>
                        <StandardIcon size={20} />
                      </div>
                      <span className="font-mono text-[10px] font-semibold text-slate-600 uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200/80">
                        {std.categoryBadge}
                      </span>
                    </div>

                    {/* TITLE & ROLE */}
                    <h3 className="font-clash font-semibold text-xl text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                      {std.title}
                    </h3>
                    <p className="font-sans text-xs font-medium text-slate-500 mb-3">
                      {std.role}
                    </p>

                    {/* BUSINESS OUTCOME */}
                    <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal mb-6">
                      {std.outcome}
                    </p>
                  </div>

                  {/* BOTTOM BENCHMARK */}
                  <div className="pt-3.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">Benchmark Spec</span>
                    <span className="text-blue-600 font-semibold">{std.benchmark}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
