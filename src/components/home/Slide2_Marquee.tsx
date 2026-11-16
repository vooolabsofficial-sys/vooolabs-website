import React from 'react';
import FadeIn from '../shared/FadeIn';
import { 
  Laptop, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  Database, 
  Search, 
  Lock, 
  CheckCircle2, 
  BarChart3, 
  Clock, 
  FileCheck, 
  Layers, 
  Sparkles,
  Users
} from 'lucide-react';

export default function Slide2_Marquee() {
  const row1Standards = [
    { name: 'Custom Admin Portals', icon: Laptop },
    { name: 'Sub-0.4s Web Architecture', icon: Zap },
    { name: 'Automated WhatsApp Ingress', icon: MessageSquare },
    { name: '100% Client Code Ownership', icon: Database },
    { name: 'Enterprise Data Security', icon: ShieldCheck },
    { name: 'Zero Monthly Platform Fees', icon: Lock },
    { name: 'Seamless Screen Responsiveness', icon: Layers },
    { name: 'Bespoke Business Workflows', icon: CheckCircle2 },
    { name: 'Automated GST Invoicing', icon: FileCheck },
  ];

  const row2Outcomes = [
    { name: 'Instant 1-Tap Lead Routing', icon: MessageSquare },
    { name: 'Role-Based Staff Access', icon: Users },
    { name: 'Google #1 & AI Search Optimization', icon: Search },
    { name: 'Zero Bloated Templates', icon: Zap },
    { name: 'Real-Time Revenue Telemetry', icon: BarChart3 },
    { name: 'Direct Lead Architect Access', icon: Sparkles },
    { name: 'Automated Daily Cloud Backups', icon: Lock },
    { name: 'Full GitHub Handover on Day 1', icon: Database },
    { name: 'Guaranteed Uptime Standards', icon: Clock },
  ];

  // Triple items for continuous smooth looping
  const row1Items = [...row1Standards, ...row1Standards, ...row1Standards];
  const row2Items = [...row2Outcomes, ...row2Outcomes, ...row2Outcomes];

  return (
    <section className="bg-[#F8F9FC] py-20 overflow-hidden relative select-none border-b border-slate-200/80">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-16 px-6">
        <FadeIn delay={0} y={20}>
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            CLIENT VALUE ASSURANCE
          </span>
          <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-semibold text-slate-900">
            Engineering Standards <span className="shimmer-text">Delivered</span>
          </h2>
        </FadeIn>
      </div>

      {/* MARQUEE CAROUSELS WITH PRECISE CSS EDGE FADE-OUT MASKS */}
      <div 
        className="w-full flex flex-col gap-5"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'
        }}
      >
        
        {/* ROW 1: CORE STANDARDS (SCROLL LEFT) */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap py-1">
          <div className="animate-marquee-left flex gap-3 sm:gap-4 pl-4">
            {row1Items.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`r1-${idx}`}
                  className="h-[46px] sm:h-[50px] rounded-full bg-white border border-slate-200/90 px-5 sm:px-6 inline-flex items-center gap-2.5 font-sans font-medium text-xs sm:text-sm text-slate-800 flex-shrink-0 hover:border-blue-300 hover:shadow-xs transition-all duration-200 shadow-2xs"
                >
                  <IconComp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROW 2: BUSINESS OUTCOMES (SCROLL RIGHT) */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap py-1">
          <div className="animate-marquee-right flex gap-3 sm:gap-4 pl-4">
            {row2Items.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`r2-${idx}`}
                  className="h-[46px] sm:h-[50px] rounded-full bg-white border border-slate-200/90 px-5 sm:px-6 inline-flex items-center gap-2.5 font-sans font-medium text-xs sm:text-sm text-slate-800 flex-shrink-0 hover:border-purple-300 hover:shadow-xs transition-all duration-200 shadow-2xs"
                >
                  <IconComp className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
