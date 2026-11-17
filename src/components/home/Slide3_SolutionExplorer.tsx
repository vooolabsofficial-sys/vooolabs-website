import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, 
  Layers, 
  Cpu, 
  Search, 
  Check, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';
import LiquidButton from '../shared/LiquidButton';

const EASING = [0.22, 1, 0.36, 1] as const;

interface ChapterData {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  serviceParam: string;
  icon: React.ElementType;
  accent: string;
  businessOutcome: string;
  deliverables: string[];
  checklistItems: string[];
}

const CHAPTERS: ChapterData[] = [
  {
    id: 'websites',
    index: '01',
    title: 'All-Inclusive Business Websites',
    subtitle: 'High-conversion marketing engines',
    serviceParam: 'websites',
    icon: Laptop,
    accent: '#4285F4',
    businessOutcome:
      'High-converting websites engineered to turn cold visitors into qualified business inquiries. Everything is managed from custom UI/UX design to automated domain configuration and sub-second edge hosting.',
    deliverables: [
      'Custom UI/UX & Conversion Architecture',
      'Domain, DNS routing & edge CDN hosting included',
      'Instant WhatsApp and direct lead routing',
    ],
    checklistItems: [
      'Custom UI/UX & Responsive Conversion Design',
      'Domain, DNS Routing & 24/7 Cloud Hosting',
      'Direct WhatsApp & Lead Routing Integration',
      'Search Engine & Google Business Profile Setup',
      'Interactive Pricing & Estimate Calculator',
      'Multi-Language / Regional Language Support',
    ],
  },
  {
    id: 'web-apps',
    index: '02',
    title: 'Custom Web Apps & Client Portals',
    subtitle: 'Role-based operations & SaaS',
    serviceParam: 'web-apps',
    icon: Layers,
    accent: '#7C3AED',
    businessOutcome:
      'Role-based web applications that streamline how your team and clients collaborate in real time. Engineered with secure authentication, scalable cloud databases, and zero recurring per-user software rent.',
    deliverables: [
      'Role-Based Access Control (Admin, Staff, Client Portals)',
      'Real-Time Data Sync & Cloud Database Architecture',
      'Automated Notifications & WhatsApp Status Alerts',
    ],
    checklistItems: [
      'Secure Staff & Client Login Portal',
      'Real-Time Admin Dashboard & Analytics',
      'Role-Based Permissions (RBAC)',
      'Document & File Vault with Cloud Storage',
      'Custom Payment Gateway & Subscription Engine',
      'Automated WhatsApp & Email Alert Triggers',
    ],
  },
  {
    id: 'software',
    index: '03',
    title: 'Custom Business & GST Software',
    subtitle: 'Internal ops, billing & zero rent',
    serviceParam: 'software',
    icon: Cpu,
    accent: '#10B981',
    businessOutcome:
      'Tailored operational software that replaces chaotic spreadsheets and expensive monthly ERP subscriptions. Generate 1-click GST invoices, track warehouse inventory, and reconcile balances effortlessly.',
    deliverables: [
      'Automated GST Invoicing & 1-Click PDF Generation',
      'Real-Time Inventory & Ledger Book Tracking',
      'Offline-First Capable & Fast Desktop/Mobile Sync',
    ],
    checklistItems: [
      'Custom GST Billing & 1-Click PDF Generation',
      'Client Ledger & Outstanding Payment Tracking',
      'Multi-User Staff Access & Audit Logs',
      'Real-Time Stock & Warehouse Inventory Sync',
      'Tally & Excel Data Export / Import',
      'Automated WhatsApp Payment Reminders',
    ],
  },
  {
    id: 'ai-growth',
    index: '04',
    title: 'ChatGPT, Google AI Search & Ads',
    subtitle: 'AEO & GEO search authority',
    serviceParam: 'ai-growth',
    icon: Search,
    accent: '#F97316',
    businessOutcome:
      'Position your company as the verified recommendation across generative search engines like ChatGPT, Perplexity, and Google AI Overviews. Capture high-intent buyers right when they seek solutions.',
    deliverables: [
      'AEO & GEO Structured Entity Optimization',
      'High-Intent Keyword & Search Engine Architecture',
      'AI Overviews Knowledge Graph Integration',
    ],
    checklistItems: [
      'Schema.org Knowledge Graph & Entity Architecture',
      'ChatGPT & Perplexity Recommendation Optimization',
      'Google AI Overviews & Local Map Pack Sync',
      'High-Intent Commercial Keyword Landing Pages',
      'Competitor Disruption & Search Footprint Audit',
      'Conversion Tracking & Search Console Integration',
    ],
  },
];

export default function Slide3_SolutionExplorer() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // Per-chapter selected checklist items: store by chapter id
  const [selectedScopesByChapter, setSelectedScopesByChapter] = useState<Record<string, string[]>>({
    websites: CHAPTERS[0].checklistItems.slice(0, 3),
    'web-apps': CHAPTERS[1].checklistItems.slice(0, 3),
    software: CHAPTERS[2].checklistItems.slice(0, 3),
    'ai-growth': CHAPTERS[3].checklistItems.slice(0, 3),
  });

  const activeChapter = CHAPTERS[activeChapterIndex];
  const activeSelectedScopes = selectedScopesByChapter[activeChapter.id] || [];

  const toggleScopeItem = (item: string) => {
    setSelectedScopesByChapter((prev) => {
      const current = prev[activeChapter.id] || [];
      const updated = current.includes(item)
        ? current.filter((i) => i !== item)
        : [...current, item];
      return {
        ...prev,
        [activeChapter.id]: updated,
      };
    });
  };

  const IconComponent = activeChapter.icon;

  return (
    <section 
      className="bg-[#FAFAFD] py-20 sm:py-28 px-4 sm:px-6 border-b border-slate-200/80 relative select-none"
      aria-label="Engineered Deliverables & Interactive Chapter Stage"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: EASING }}
          className="text-left sm:text-center mb-14 sm:mb-16"
        >
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2.5">
            ENGINEERED DELIVERABLES • ZERO AI SLOP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            We Don't Resell Templates. <br />
            <span className="shimmer-text">We Engineer Systems.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3 font-normal leading-relaxed">
            Every deliverable is crafted from scratch with clean code, sub-second speeds, zero monthly software rent, and 100% client code ownership.
          </p>
        </motion.div>

        {/* ASYMMETRIC INTERACTIVE CHAPTER STAGE (40% RAIL / 60% WORKSPACE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN (40% — CHAPTER RAIL, lg:col-span-5)
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {CHAPTERS.map((chapter, idx) => {
              const isActive = idx === activeChapterIndex;
              const ChapterIcon = chapter.icon;

              return (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`group relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-start gap-3.5 sm:gap-4 outline-none ${
                    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  {/* SHARED-ELEMENT SLIDING STUDIO BLUE VERTICAL BAR + BACKGROUND TINT */}
                  {isActive && (
                    <motion.div
                      layoutId="active-system-rail"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      className="absolute inset-0 bg-blue-50/70 border border-blue-200/90 rounded-2xl -z-10 shadow-2xs"
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="active-rail-bar"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      className="absolute left-0 top-3.5 bottom-3.5 w-1 bg-blue-600 rounded-r-full"
                    />
                  )}

                  {/* CHAPTER ICON CONTAINER */}
                  <div 
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isActive ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                    style={{ 
                      backgroundColor: isActive ? `${chapter.accent}18` : '#F1F5F9',
                      color: isActive ? chapter.accent : '#64748B'
                    }}
                  >
                    <ChapterIcon size={18} />
                  </div>

                  {/* CHAPTER TITLES */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                        {chapter.index}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider truncate">
                        {chapter.subtitle}
                      </span>
                    </div>
                    <h3 className={`text-sm sm:text-base font-bold tracking-tight leading-snug truncate ${
                      isActive ? 'text-slate-900' : 'text-slate-700'
                    }`}>
                      {chapter.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN (60% — MORPHING WORKSPACE, lg:col-span-7)
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASING }}
                className="space-y-6"
              >
                {/* 1. BUSINESS OUTCOME (2-SENTENCE PLAIN ENGLISH) */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${activeChapter.accent}14`, color: activeChapter.accent }}
                    >
                      <IconComponent size={16} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Business Outcome Standard
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                    {activeChapter.businessOutcome}
                  </p>

                  {/* 2. THREE REAL DELIVERABLES */}
                  <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                    {activeChapter.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. FLAT SCOPE CHECKLIST & DYNAMIC CTA */}
                <div className="rounded-2xl bg-[#F8F9FC] border border-slate-200/90 p-6 sm:p-7 text-left shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/70">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        Scope Checklist & Instant Estimate
                      </h4>
                      <p className="text-xs text-slate-500">
                        Select what your project requires to configure an upfront scope:
                      </p>
                    </div>
                    <span className="self-start sm:self-center font-mono text-[11px] font-semibold text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-full">
                      {activeSelectedScopes.length} selected
                    </span>
                  </div>

                  {/* CHECKLIST ITEMS WITH LIQUID 280MS TRANSITIONS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {activeChapter.checklistItems.map((item, itemIdx) => {
                      const isChecked = activeSelectedScopes.includes(item);
                      return (
                        <button
                          key={itemIdx}
                          type="button"
                          onClick={() => toggleScopeItem(item)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] active:scale-[0.985] ${
                            isChecked
                              ? 'bg-white border-blue-400 text-slate-900 shadow-xs'
                              : 'bg-white/60 border-slate-200/80 text-slate-600 hover:bg-white hover:border-slate-300'
                          }`}
                        >
                          <div 
                            className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isChecked ? 'bg-blue-600 text-white shadow-2xs' : 'border border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && (
                              <motion.span
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <Check size={12} strokeWidth={3} />
                              </motion.span>
                            )}
                          </div>
                          <span className="truncate">{item}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* DYNAMIC JUMP-TO-CONTACT LIQUID CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <LiquidButton
                      to={`/contact?service=${activeChapter.serviceParam}&scopes=${encodeURIComponent(
                        activeSelectedScopes.join(';')
                      )}`}
                      variant="gradient"
                      rounded="pill"
                      size="md"
                      magnetic={true}
                    >
                      <span>See what your project will cost ({activeSelectedScopes.length} selected)</span>
                      <ArrowRight size={16} />
                    </LiquidButton>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      <span>Zero setup fee · Day 1 handover</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
