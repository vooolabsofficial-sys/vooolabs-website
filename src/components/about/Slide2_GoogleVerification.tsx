import React, { useState } from 'react';
import { Search, Globe, ShieldCheck, CheckCircle2, Lock, ExternalLink, Sparkles, Building, MapPin } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION } from '../../content/company';

export default function Slide2_GoogleVerification() {
  const [activeTab, setActiveTab] = useState<'source' | 'security' | 'ownership'>('source');

  return (
    <section 
      className="bg-[#F8F9FC] py-20 sm:py-28 px-4 sm:px-6 select-none border-b border-zinc-200 relative overflow-hidden"
      aria-label="Google Verified Entity Profile"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              VERIFIED SEARCH ENTITY
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-zinc-950 tracking-wide leading-tight uppercase">
              Google-Standard Trust & Verification
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto mt-3 font-normal leading-relaxed">
              Every website, portal, and software system we engineer is structured to meet Google's rigorous knowledge graph and entity validation criteria.
            </p>
          </FadeIn>
        </div>

        {/* INTERACTIVE GOOGLE "ABOUT THIS RESULT" CARD CONTAINER */}
        <FadeIn delay={0.12} y={20}>
          <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-zinc-200/90 shadow-md overflow-hidden text-left">
            
            {/* GOOGLE SIMULATION TOP HEADER BAR */}
            <div className="px-6 py-4 bg-zinc-50 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {/* Google 4-Color Dots Icon */}
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                </div>
                <span className="font-mono text-xs font-semibold text-zinc-800">
                  Google Search • About this result
                </span>
              </div>
              <span className="font-mono text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                <ShieldCheck size={12} />
                Verified Source
              </span>
            </div>

            {/* TAB SELECTOR */}
            <div className="flex border-b border-zinc-100 bg-zinc-50/50 px-6 pt-3 gap-2">
              {[
                { id: 'source', label: '01 Entity Overview' },
                { id: 'security', label: '02 Cloud & SSL Security' },
                { id: 'ownership', label: '03 Ownership Handover' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as any)}
                  className={`pb-3 px-3 font-mono text-xs transition-all border-b-2 cursor-pointer font-medium ${
                    activeTab === t.id
                      ? 'border-blue-600 text-blue-600 font-semibold'
                      : 'border-transparent text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT BODY */}
            <div className="p-6 sm:p-8 space-y-6">
              {activeTab === 'source' && (
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                      <Globe size={22} />
                    </div>
                    <div>
                      <h3 className="font-anton text-xl text-zinc-950 uppercase tracking-wide">
                        {COMPANY.brandName}
                      </h3>
                      <a
                        href={COMPANY.domain}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-blue-600 hover:underline flex items-center gap-1 mt-0.5"
                      >
                        <span>{COMPANY.domain}</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {COMPANY.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                      <span className="font-mono text-[10px] text-zinc-400 uppercase block mb-1">
                        First Registered & Built
                      </span>
                      <span className="font-semibold text-xs text-zinc-900">
                        {COMPANY.foundedYear} • Maharashtra, India
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                      <span className="font-mono text-[10px] text-zinc-400 uppercase block mb-1">
                        Regional Engineering Hubs
                      </span>
                      <span className="font-semibold text-xs text-zinc-900">
                        {LOCATION.hubs.join(' • ')}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Lock size={18} />
                    </div>
                    <div>
                      <h3 className="font-anton text-lg text-zinc-950 uppercase tracking-wide">
                        256-Bit SSL & Edge Cloud Security
                      </h3>
                      <span className="font-mono text-xs text-emerald-600 font-medium">
                        Automated TLS 1.3 Encryption Active
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    Every production deployment is hosted on low-latency global edge networks with automated SSL certificate renewal, DDoS mitigation, and daily database backups.
                  </p>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2 text-xs font-mono text-emerald-900">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span>Security: Connection to this studio domain is private and encrypted.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span>Zero tracking cookies: Pure privacy-first architecture.</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ownership' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h3 className="font-anton text-lg text-zinc-950 uppercase tracking-wide">
                        100% Client Code Ownership Guarantee
                      </h3>
                      <span className="font-mono text-xs text-purple-600 font-medium">
                        Zero Vendor Lock-In Standard
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    Unlike agencies that lock clients into proprietary systems or monthly maintenance traps, VOOO LABS transfers 100% of your source code, GitHub repository, and hosting DNS accounts upon completion.
                  </p>

                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 space-y-1.5">
                    <div>• Full IP & intellectual property assignment.</div>
                    <div>• Complete documentation and setup manual included.</div>
                    <div>• Zero monthly recurring software license rent.</div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
