import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Brain, Phone, Image, Music, FileText, ShieldCheck, Bell, Clock, Briefcase, GraduationCap, Heart, AlertCircle, Sparkles } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

export default function Slide2_LivePlayground() {
  const [activeApp, setActiveApp] = useState<'files' | 'smaran' | 'callmind'>('files');

  const apps = [
    { id: 'files', name: 'VOOO Files', icon: Folder, color: 'from-blue-500 to-[#1a73e8]', badge: 'Storage Ecosystem' },
    { id: 'smaran', name: 'SMARAN AI', icon: Brain, color: 'from-[#7C3AED] to-[#F97316]', badge: 'AI Memory Companion' },
    { id: 'callmind', name: 'CallMind CRM', icon: Phone, color: 'from-[#10B981] to-[#059669]', badge: 'Mobile Sales CRM' },
  ];

  return (
    <section className="snap-section bg-[#F8F9FC] flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="font-kanit font-semibold text-xs tracking-[0.3em] g-text uppercase mb-4 text-center">
            Interactive Product Demo
          </div>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.1} y={25}>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] text-center leading-tight mb-4">
            Test Drive The <span className="shimmer-text">Suite.</span>
          </h2>
          <p className="font-kanit font-light text-base sm:text-lg text-slate-500 text-center max-w-md mx-auto mb-10">
            Click an app below to test its live UI canvas right here.
          </p>
        </FadeIn>

        {/* INTERACTIVE TAB SWITCHER (3 APP PILLS) */}
        <FadeIn delay={0.2} y={20} className="w-full max-w-md mb-10">
          <div className="flex gap-2 bg-white p-2 rounded-2xl border border-black/5 shadow-xs">
            {apps.map((app) => {
              const IconComp = app.icon;
              const isActive = activeApp === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveApp(app.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-kanit font-medium text-xs sm:text-sm transition-all duration-300 relative ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-app-tab"
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${app.color} z-0`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <IconComp className="w-4 h-4 z-10" />
                  <span className="z-10">{app.name}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* LIVE APP CANVAS CONTAINER */}
        <FadeIn delay={0.3} y={30} className="w-full">
          <div className="w-full rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.25)] relative overflow-hidden">
            
            {/* WINDOW TOP BAR */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="font-kanit font-light text-xs text-slate-400 ml-2">
                  Live UI Simulator — {apps.find(a => a.id === activeApp)?.name}
                </span>
              </div>
              <span className="font-kanit text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                {apps.find(a => a.id === activeApp)?.badge}
              </span>
            </div>

            {/* DYNAMIC CANVAS CONTENT */}
            <AnimatePresence mode="wait">
              
              {/* TAB 1: VOOO FILES */}
              {activeApp === 'files' && (
                <motion.div
                  key="files-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-5 text-left"
                >
                  {/* Storage Progress */}
                  <div className="rounded-2xl bg-slate-800/80 border border-slate-700/60 p-5 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-kanit font-medium text-slate-300">
                      <span>Internal Storage</span>
                      <span className="text-blue-400 font-semibold">68% Used (87 GB / 128 GB)</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[68%] rounded-full" />
                    </div>
                  </div>

                  {/* 4 Category Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: 'Images', count: '1,420 files', icon: Image, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
                      { label: 'Audio', count: '380 tracks', icon: Music, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
                      { label: 'Documents', count: '94 docs', icon: FileText, color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
                      { label: 'Biometric Vault', count: '12 encrypted', icon: ShieldCheck, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
                    ].map((cat, idx) => {
                      const CatIcon = cat.icon;
                      return (
                        <div key={idx} className={`rounded-2xl border ${cat.color} p-4 flex flex-col justify-between`}>
                          <CatIcon className="w-5 h-5 mb-2" />
                          <div>
                            <span className="font-clash font-semibold text-sm text-white block">{cat.label}</span>
                            <span className="font-kanit font-light text-[10px] text-slate-400 block">{cat.count}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* TAB 2: SMARAN AI */}
              {activeApp === 'smaran' && (
                <motion.div
                  key="smaran-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
                >
                  {/* Mode 1 */}
                  <div className="rounded-2xl bg-purple-500/10 border border-purple-500/20 p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <span className="font-clash font-semibold text-sm text-white block">Student Mode</span>
                      <span className="font-kanit font-light text-xs text-slate-400 block mt-1">Engineering Exam • 9:00 AM</span>
                      <span className="font-kanit text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full inline-block mt-2">Exact Alarm On</span>
                    </div>
                  </div>

                  {/* Mode 2 */}
                  <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <span className="font-clash font-semibold text-sm text-white block">Professional Mode</span>
                      <span className="font-kanit font-light text-xs text-slate-400 block mt-1">Client Followup • 2:00 PM</span>
                      <span className="font-kanit text-[9px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full inline-block mt-2">WhatsApp Alert</span>
                    </div>
                  </div>

                  {/* Mode 3 */}
                  <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Heart size={20} />
                    </div>
                    <div>
                      <span className="font-clash font-semibold text-sm text-white block">Elder 60+ Mode</span>
                      <span className="font-kanit font-light text-xs text-slate-400 block mt-1">BP Medicine • 6:00 PM</span>
                      <span className="font-kanit text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full inline-block mt-2">High Volume Override</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: CALLMIND CRM */}
              {activeApp === 'callmind' && (
                <motion.div
                  key="callmind-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-5 text-left"
                >
                  {/* Pipeline Funnel */}
                  <div className="rounded-2xl bg-slate-800/80 border border-slate-700/60 p-5 flex flex-col gap-3">
                    <div className="flex justify-between items-center text-xs font-kanit font-semibold text-slate-200">
                      <span>Sales Lead Pipeline</span>
                      <span className="text-emerald-400 font-medium">24 Active Leads</span>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-center">
                      {[
                        { label: 'New', val: '10' },
                        { label: 'Contacted', val: '7' },
                        { label: 'Interested', val: '4' },
                        { label: 'Callback', val: '2' },
                        { label: 'Won', val: '1' },
                      ].map((stage, idx) => (
                        <div key={idx} className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                          <span className="font-clash font-bold text-sm text-emerald-400 block">{stage.val}</span>
                          <span className="font-kanit font-light text-[9px] text-slate-400 block mt-0.5">{stage.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Insights Card */}
                  <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <p className="font-kanit font-light text-xs text-slate-300">
                      <strong className="font-semibold text-white">AI Insight:</strong> Lead Rohit Patil requested a custom pricing proposal. Auto-scheduled WhatsApp reminder set for 3:30 PM.
                    </p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
