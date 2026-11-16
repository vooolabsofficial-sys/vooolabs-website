import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Globe, Cpu, Search, CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const TABS = [
  {
    id: 'websites',
    label: '01 Websites',
    category: 'All-Inclusive Web',
    title: 'All-Inclusive Websites Built Fast.',
    summary: 'Custom visual design, domain registration, DNS, and 24/7 cloud hosting included.',
    timeline: '3 to 7 Days Delivery',
    accent: '#8B5CF6',
    icon: Laptop,
    deliverables: [
      'Sub-0.4s instant page load speed',
      '1-tap direct WhatsApp lead routing',
      '100% domain and code ownership',
    ],
    detailsLink: '/services#websites',
    contactScope: 'website',
  },
  {
    id: 'web-apps',
    label: '02 Web Apps',
    category: 'Client Portals',
    title: 'Custom Client Portals & Dashboards.',
    summary: 'Self-service dashboards, student portals, and booking tools with zero per-user fees.',
    timeline: '2 to 3 Weeks Delivery',
    accent: '#3B82F6',
    icon: Globe,
    deliverables: [
      'Role-based staff and client logins',
      'Centralized real-time cloud database',
      '₹0 monthly per-seat licensing fees',
    ],
    detailsLink: '/services#web-apps',
    contactScope: 'web-app',
  },
  {
    id: 'software',
    label: '03 Business Software',
    category: 'Operations & Billing',
    title: 'Custom Operations & GST Billing Systems.',
    summary: 'Replace chaotic spreadsheets with automated GST invoicing, pipelines, and inventory.',
    timeline: 'Fixed Milestone Plan',
    accent: '#10B981',
    icon: Cpu,
    deliverables: [
      '1-click automated GST tax invoicing',
      'Live order and payment tracking',
      'Automated daily cloud backups',
    ],
    detailsLink: '/services#custom-software',
    contactScope: 'software',
  },
  {
    id: 'seo-ai',
    label: '04 AI Search & Ads',
    category: 'Search & AI Discovery',
    title: 'ChatGPT & Google AI Recommendations.',
    summary: 'Get recommended when buyers search conversational AI engines and local Google Maps.',
    timeline: 'Organic AI Equity',
    accent: '#F59E0B',
    icon: Search,
    deliverables: [
      'Structured schema for ChatGPT & Perplexity',
      'Google Maps 3-Pack pin ranking',
      'High-intent AI ad campaigns',
    ],
    detailsLink: '/seo-ai',
    contactScope: 'seo-ai',
  },
];

export default function Slide3_SolutionExplorer() {
  const [activeTabId, setActiveTabId] = useState('websites');
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];
  const IconComp = activeTab.icon;

  return (
    <section 
      className="bg-white py-20 sm:py-24 px-4 sm:px-6 border-b border-slate-200/80 relative select-none"
      aria-label="Interactive Solution Explorer"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER: UNDER 8 WORDS */}
        <div className="text-center mb-10">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              INTERACTIVE SOLUTION EXPLORER
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 leading-snug">
              Explore What We Build.
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 font-normal leading-relaxed">
              Select your goal below to inspect deliverables, timelines, and technical architecture.
            </p>
          </FadeIn>
        </div>

        {/* 4 CLEAN TABS */}
        <FadeIn delay={0.1} y={15}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100/90 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* ACTIVE TAB DISPLAY CARD (SINGLE CLEAN FRAME - NO CLUTTERED SUB-BOXES) */}
        <FadeIn delay={0.18} y={20}>
          <div className="rounded-3xl bg-[#FAFAFD] border border-slate-200/90 p-7 sm:p-10 shadow-xs relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* LEFT DETAILS (7 COLS) */}
                <div className="md:col-span-7 text-left space-y-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${activeTab.accent}14`, color: activeTab.accent }}
                    >
                      <IconComp size={20} />
                    </div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {activeTab.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 leading-snug tracking-tight">
                    {activeTab.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activeTab.summary}
                  </p>

                  {/* 3 SHORT CHECKMARKS */}
                  <div className="pt-2 space-y-2.5">
                    {activeTab.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* ACTIONS ROW */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/contact?scope=${activeTab.contactScope}`}
                      className="btn-3d-base btn-3d-primary inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs sm:text-sm px-6 py-3 shadow-xs"
                    >
                      <span>See what your project will cost</span>
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      to={activeTab.detailsLink}
                      className="font-mono text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline px-2 py-1"
                    >
                      Inspect full scope →
                    </Link>
                  </div>
                </div>

                {/* RIGHT HIGHLIGHT SPEC (5 COLS) */}
                <div className="md:col-span-5 text-left">
                  <div className="rounded-2xl bg-white border border-slate-200/90 p-6 space-y-4 shadow-2xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="font-mono text-xs text-slate-500">Timeline</span>
                      <span className="font-mono text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                        <Clock size={12} className="text-blue-600" />
                        {activeTab.timeline}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="font-mono text-xs text-slate-500">Code Transfer</span>
                      <span className="font-mono text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                        <ShieldCheck size={12} />
                        100% Client Owned
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-slate-500">Platform Rent</span>
                      <span className="font-mono text-xs font-semibold text-slate-900">
                        ₹0 / Month
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
