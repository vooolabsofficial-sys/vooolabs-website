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
    <section className="bg-[#F8F9FC] py-12 overflow-hidden relative select-none border-b border-slate-200/80">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-8 px-6">
        <FadeIn delay={0} y={15}>
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-1">
            CLIENT VALUE ASSURANCE
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Engineering Standards <span className="shimmer-text">Delivered</span>
          </h2>
        </FadeIn>
      </div>

      {/* CONTINUOUS MARQUEE TRACKS */}
      <div className="relative w-full overflow-hidden mask-fade-edges space-y-2.5">
        <div className="animate-marquee-left flex gap-3 whitespace-nowrap">
          {row1Items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700"
              >
                <IconComp size={13} className="text-blue-600" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>

        <div className="animate-marquee-right flex gap-3 whitespace-nowrap">
          {row2Items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700"
              >
                <IconComp size={13} className="text-purple-600" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
