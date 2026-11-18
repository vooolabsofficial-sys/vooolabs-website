import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { 
  Search, 
  MapPin, 
  Bot, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';

type ChannelType = 'search' | 'maps' | 'ai';

interface SourceOption {
  id: ChannelType;
  label: string;
  icon: React.ElementType;
  sourceTag: string;
  leadMessage: string;
}

const SOURCES: SourceOption[] = [
  {
    id: 'search',
    label: 'Google Search',
    icon: Search,
    sourceTag: 'Arrived via Google Search',
    leadMessage: 'Hello, I found your site on Google Search and want details on Industrial Solutions.',
  },
  {
    id: 'maps',
    label: 'Google Maps',
    icon: MapPin,
    sourceTag: 'Arrived via Google Maps',
    leadMessage: 'Hello, I found your location on Google Maps and would like to book a visit / consultation.',
  },
  {
    id: 'ai',
    label: 'ChatGPT / AI',
    icon: Bot,
    sourceTag: 'Arrived via AI Recommendation',
    leadMessage: 'Hello, ChatGPT recommended your company—please share your catalog and availability.',
  },
];

export default function WebsiteLeadSignalVisualizer() {
  const [activeChannel, setActiveChannel] = useState<ChannelType>('search');
  const [triggerPulse, setTriggerPulse] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const inboxRef = useRef<HTMLDivElement>(null);

  const activeSource = SOURCES.find((s) => s.id === activeChannel) || SOURCES[0];

  // GSAP animation when source changes or trigger button is clicked
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate beam pulse along connector
      if (beamRef.current) {
        gsap.fromTo(
          beamRef.current,
          { scaleX: 0, opacity: 0.2 },
          { scaleX: 1, opacity: 1, duration: 0.45, ease: 'power3.out' }
        );
      }

      // Animate WhatsApp inbox card
      if (inboxRef.current) {
        gsap.fromTo(
          inboxRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.1 }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeChannel, triggerPulse]);

  return (
    <div 
      ref={containerRef}
      className="rounded-[20px] border border-slate-200/90 bg-white overflow-hidden text-left select-none shadow-none"
    >
      {/* ── TOP DISCOVERY SOURCE BAR ─────────────────────── */}
      <div className="bg-[#F8F9FC] border-b border-slate-200/80 px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 font-bold">
          VISITOR INTENT FLOW
        </span>

        {/* 3 INTERACTIVE SOURCE PILLS */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {SOURCES.map((source) => {
            const IconComp = source.icon;
            const isActive = activeChannel === source.id;
            return (
              <button
                key={source.id}
                type="button"
                onClick={() => {
                  setActiveChannel(source.id);
                  setTriggerPulse((prev) => prev + 1);
                }}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0A0F1E] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                <IconComp size={12} className={isActive ? 'text-blue-400' : 'text-slate-400'} />
                <span>{source.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 2-STAGE LIVE VISUAL CONTAINER ────────────────── */}
      <div className="p-5 sm:p-6 space-y-4">
        
        {/* STAGE A: LIVE WEBSITE VIEW (WHAT THE BUYER SEES) */}
        <div className="border border-slate-200/80 rounded-[14px] bg-slate-50/50 p-4 space-y-3">
          {/* BROWSER ADDRESS BAR */}
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/80 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="font-mono text-[11px] text-slate-600 font-medium ml-1">
                yourdomain.in/solutions
              </span>
            </div>
            <span className="font-mono text-[10px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
              {activeSource.sourceTag}
            </span>
          </div>

          {/* PAGE CONTENT SNIPPET + INTERACTIVE ACTION */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div>
              <h4 className="text-sm font-bold text-slate-950">
                Industrial & Commercial Solutions
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Precision manufacturing, ISO credentials & direct bulk catalog.
              </p>
            </div>

            {/* TACTILE TRIGGER BUTTON */}
            <button
              type="button"
              onClick={() => setTriggerPulse((prev) => prev + 1)}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs cursor-pointer transition-colors shrink-0"
              title="Click to simulate buyer tapping WhatsApp"
            >
              <MessageSquare size={13} />
              <span>Ask on WhatsApp →</span>
            </button>
          </div>
        </div>

        {/* STAGE B: ANIMATED SIGNAL CONNECTOR */}
        <div className="flex items-center gap-3 py-1">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold text-blue-600 shrink-0">
            FORM-FREE ATTRIBUTION ATTACHED
          </span>
          <div className="flex-1 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
            <div 
              ref={beamRef}
              className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 origin-left"
            />
          </div>
        </div>

        {/* STAGE C: BUSINESS OWNER WHATSAPP INBOX (WHAT YOUR TEAM RECEIVES) */}
        <div 
          ref={inboxRef}
          className="bg-[#F8F9FC] border border-slate-200/80 rounded-[14px] p-4 space-y-3"
        >
          {/* INBOX HEADER */}
          <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>INCOMING WHATSAPP LEAD</span>
            </div>
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
              Zero Forms Filled
            </span>
          </div>

          {/* PRE-FILLED WHATSAPP MESSAGE BUBBLE */}
          <div className="bg-white border border-slate-200/80 rounded-[10px] p-3 text-xs shadow-xs space-y-1">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-semibold text-slate-700">+91 98230 ••••• (Verified Buyer)</span>
              <span>Just now</span>
            </div>
            <p className="text-slate-800 font-medium leading-relaxed">
              "{activeSource.leadMessage}"
            </p>
          </div>

          {/* METADATA ATTRIBUTION STRIP */}
          <div className="border-t border-slate-200/80 pt-2 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-blue-600 shrink-0" />
              <span>Source Channel: <strong className="text-slate-800 font-semibold">{activeSource.label}</strong></span>
              <span>·</span>
              <span>Landing Page: <strong className="text-slate-800 font-semibold">/solutions</strong></span>
            </div>
            <span className="text-slate-400 text-[10px]">
              Tap "Ask on WhatsApp" above to re-trigger
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
