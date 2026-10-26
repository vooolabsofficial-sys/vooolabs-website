import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Server, Search, Check, Layers, Code2, Database, Bot, Zap } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide4_TechStack() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const STACKS = [
    {
      id: 'web',
      name: 'Web Platforms',
      icon: Globe,
      color: '#3B82F6',
      desc: 'Modern web architecture engineered for sub-second loading speeds and maximum search discoverability.',
      tools: [
        { name: 'React 19', role: 'Latest Component Architecture', badge: 'Frontend' },
        { name: 'TypeScript', role: 'Strict Type-Safety & Zero Runtime Crashes', badge: 'Language' },
        { name: 'Next.js & Vite', role: 'Lightning-Fast Edge Bundling', badge: 'Tooling' },
        { name: 'Tailwind CSS', role: 'Ultra-Lightweight Atomic Styling', badge: 'Design' },
      ],
    },
    {
      id: 'mobile',
      name: 'Mobile Engineering',
      icon: Smartphone,
      color: '#F97316',
      desc: 'High-performance Android and iOS mobile applications with offline caching and native responsiveness.',
      tools: [
        { name: 'Android SDK & Kotlin', role: 'Native Android High Performance', badge: 'Core' },
        { name: 'Jetpack Compose', role: 'Modern Declarative Reactive UI', badge: 'UI Engine' },
        { name: 'Offline Storage', role: 'Local SQLite & Room Data Persistence', badge: 'Database' },
        { name: 'Biometric Auth', role: 'Hardware Fingerprint & FaceID', badge: 'Security' },
      ],
    },
    {
      id: 'cloud',
      name: 'Cloud & Database',
      icon: Server,
      color: '#8B5CF6',
      desc: 'Centralized cloud infrastructure with automated daily backups and zero-maintenance serverless hosting.',
      tools: [
        { name: 'Supabase / PostgreSQL', role: 'Relational Database with Row-Level Security', badge: 'Database' },
        { name: 'Cloud Edge CDN', role: 'Sub-40ms Global Content Distribution', badge: 'Hosting' },
        { name: 'Automated Webhooks', role: 'Instant WhatsApp & SMS Notification Triggers', badge: 'Alerts' },
        { name: 'Automated Daily Backups', role: 'Encrypted Cloud Storage Snapshots', badge: 'Reliability' },
      ],
    },
    {
      id: 'search',
      name: 'Search & AI Discovery',
      icon: Search,
      color: '#10B981',
      desc: 'Technical infrastructure to rank prominently on Google, Google Maps, and AI conversational search engines.',
      tools: [
        { name: 'Schema.org JSON-LD', role: 'Structured Google 5-Star Rich Snippets', badge: 'SEO' },
        { name: 'LLM Knowledge Graph', role: 'Entity Structuring for ChatGPT & Perplexity', badge: 'AEO' },
        { name: 'Google Search Console', role: 'Verified Domain Sitemaps & Indexing', badge: 'Analytics' },
        { name: 'Google Maps 3-Pack', role: 'Local Discovery & 1-Tap Lead Calling', badge: 'GEO' },
      ],
    },
  ];

  const current = STACKS[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="bg-[#F6F7FB] py-16 sm:py-20 px-4 sm:px-6 select-none antialiased border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-emerald-600 uppercase tracking-widest block mb-2">
              TECHNOLOGY MATRIX
            </span>
            <h2 className="font-clash font-semibold text-2xl sm:text-4xl text-slate-800 mb-2">
              Our Core Technology Stack
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-normal">
              We choose modern, rock-solid technologies designed for long-term scalability and zero ongoing maintenance headaches.
            </p>
          </FadeIn>
        </div>

        {/* INTERACTIVE STACK SWITCHER */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {STACKS.map((stack, idx) => {
            const SIcon = stack.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={stack.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full font-sans font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-sm scale-[1.01]'
                    : 'bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <SIcon size={14} className={isActive ? 'text-blue-400' : 'text-slate-400'} />
                <span>{stack.name}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STACK SHOWCASE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm text-left max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: current.color }}
              >
                <CurrentIcon size={20} />
              </div>
              <div>
                <h3 className="font-clash font-semibold text-xl sm:text-2xl text-slate-800">
                  {current.name} Stack
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 font-normal">
                  {current.desc}
                </p>
              </div>
            </div>

            {/* 4 TOOLS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.tools.map((tool, tIdx) => (
                <div key={tIdx} className="p-4 rounded-2xl bg-[#F8F9FD] border border-slate-100 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-sans font-semibold text-sm text-slate-800 block mb-1">
                      {tool.name}
                    </span>
                    <span className="font-sans text-xs text-slate-500 font-normal leading-relaxed block">
                      {tool.role}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-medium text-slate-600 flex-shrink-0">
                    {tool.badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
