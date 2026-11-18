import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { 
  Search, 
  MapPin, 
  Bot, 
  Sparkles, 
  Phone, 
  Navigation, 
  ExternalLink, 
  Globe, 
  CheckCircle2,
  MessageSquare
} from 'lucide-react';

type ModeType = 'ads' | 'seo' | 'maps' | 'ai';

interface TabConfig {
  id: ModeType;
  label: string;
  icon: React.ElementType;
}

const TABS: TabConfig[] = [
  { id: 'ads', label: 'Google Ads', icon: Sparkles },
  { id: 'seo', label: 'Google SEO', icon: Search },
  { id: 'maps', label: 'Google Maps', icon: MapPin },
  { id: 'ai', label: 'ChatGPT / AI', icon: Bot },
];

export default function SearchPlacementVisualizer() {
  const [activeMode, setActiveMode] = useState<ModeType>('ads');
  const stageRef = useRef<HTMLDivElement>(null);

  // GSAP animation on mode switch
  useEffect(() => {
    if (!stageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stageRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.stagger-row',
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.05 }
      );
    }, stageRef);

    return () => ctx.revert();
  }, [activeMode]);

  return (
    <div className="rounded-[20px] border border-slate-200/90 bg-white overflow-hidden text-left select-none shadow-none">
      
      {/* ── TOP MODE SWITCHER BAR ────────────────────────── */}
      <div className="bg-[#F8F9FC] border-b border-slate-200/80 px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 font-bold">
          LIVE PLACEMENT PREVIEW
        </span>

        {/* 4 INTERACTIVE PILL TABS */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {TABS.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeMode === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveMode(tab.id)}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0A0F1E] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                <IconComp size={12} className={isActive ? 'text-blue-400' : 'text-slate-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PREVIEW STAGE ────────────────────────────────── */}
      <div ref={stageRef} className="p-5 sm:p-6 min-h-[300px] flex flex-col justify-between">
        
        {/* VIEW 1: GOOGLE ADS */}
        {activeMode === 'ads' && (
          <div className="space-y-4">
            {/* SEARCH BAR */}
            <div className="stagger-row flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
              <Search size={14} className="text-slate-400 shrink-0" />
              <span className="truncate font-medium">"industrial packaging supplier near me"</span>
            </div>

            {/* SPONSORED AD BLOCK */}
            <div className="stagger-row border-l-2 border-[#4285F4] pl-4 py-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">
                  Sponsored
                </span>
                <span className="text-xs text-slate-500">yourdomain.in</span>
              </div>

              <h4 className="text-sm font-bold text-blue-600 hover:underline cursor-pointer leading-snug">
                Custom Industrial Packaging — Direct Manufacturer & Bulk Supply
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                ISO-certified packaging solutions, custom corrugated boxes & heavy-duty industrial containers. Direct factory pricing with dispatch within 48 hours.
              </p>

              {/* SITELINKS */}
              <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-medium text-blue-600">
                <span className="px-2 py-0.5 bg-blue-50/80 rounded hover:underline cursor-pointer">Request Bulk Quote</span>
                <span className="px-2 py-0.5 bg-blue-50/80 rounded hover:underline cursor-pointer">Download Catalog</span>
                <span className="px-2 py-0.5 bg-blue-50/80 rounded hover:underline cursor-pointer">Call Now</span>
                <span className="px-2 py-0.5 bg-blue-50/80 rounded hover:underline cursor-pointer">WhatsApp</span>
              </div>
            </div>

            {/* MUTED ORGANIC RESULTS BELOW */}
            <div className="stagger-row border-t border-slate-200/80 pt-3 opacity-40 space-y-1">
              <span className="text-[11px] text-slate-400 block truncate">competitor-directory.com › suppliers</span>
              <span className="text-xs text-slate-400 block truncate">Top 10 Industrial Packaging Suppliers in Region...</span>
            </div>

            {/* EXPLANATORY CALLOUT */}
            <div className="stagger-row mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
              <Sparkles size={14} className="text-blue-600 shrink-0 mt-0.5" />
              <span>High-intent commercial ads appear at the very top of Google above organic links—routing buyers directly to WhatsApp or phone calls.</span>
            </div>
          </div>
        )}

        {/* VIEW 2: GOOGLE SEO */}
        {activeMode === 'seo' && (
          <div className="space-y-4">
            {/* SEARCH BAR */}
            <div className="stagger-row flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
              <Search size={14} className="text-slate-400 shrink-0" />
              <span className="truncate font-medium">"commercial solar installation company"</span>
            </div>

            {/* MUTED SPONSORED RESULT */}
            <div className="stagger-row opacity-35 space-y-1 pb-1">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">Sponsored · external-solar-ad.com</span>
              <span className="text-xs text-slate-400 block truncate">Generic Commercial Solar Services</span>
            </div>

            {/* HIGHLIGHTED ORGANIC SEO RESULT */}
            <div className="stagger-row border-l-2 border-[#4285F4] pl-4 py-1 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Globe size={12} className="text-slate-400" />
                <span>yourdomain.in</span>
                <span>›</span>
                <span className="text-slate-700 font-medium">commercial-solar</span>
              </div>

              <h4 className="text-sm font-bold text-blue-600 hover:underline cursor-pointer leading-snug">
                Commercial Solar EPC & Rooftop Installation | Your Business Name
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                End-to-end industrial rooftop solar EPC services. Net metering, zero capex models & tier-1 panel systems engineered for commercial factories.
              </p>

              {/* STRUCTURED SITELINKS */}
              <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-medium text-blue-600">
                <span className="px-2 py-0.5 bg-slate-100 rounded hover:underline cursor-pointer">System Architecture</span>
                <span className="px-2 py-0.5 bg-slate-100 rounded hover:underline cursor-pointer">Past Installations</span>
                <span className="px-2 py-0.5 bg-slate-100 rounded hover:underline cursor-pointer">ROI Calculator</span>
              </div>
            </div>

            {/* EXPLANATORY CALLOUT */}
            <div className="stagger-row mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
              <Search size={14} className="text-blue-600 shrink-0 mt-0.5" />
              <span>Technical SEO and dedicated service pages build lasting organic visibility that earns qualified clicks without paying for every visit.</span>
            </div>
          </div>
        )}

        {/* VIEW 3: GOOGLE MAPS */}
        {activeMode === 'maps' && (
          <div className="space-y-4">
            {/* SPLIT LAYOUT */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              
              {/* LEFT: BUSINESS LISTING */}
              <div className="stagger-row sm:col-span-7 border-l-2 border-[#4285F4] pl-4 py-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    Open · Verified Profile
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-950 leading-snug">
                  Your Business Name
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Industrial Equipment & Engineering Services · Serving Mumbai, Pune & Western Region.
                </p>

                {/* ACTION PILLS */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-md cursor-pointer transition-colors">
                    <Phone size={11} className="text-blue-600" />
                    <span>Call</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-md cursor-pointer transition-colors">
                    <MessageSquare size={11} className="text-emerald-600" />
                    <span>WhatsApp</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-md cursor-pointer transition-colors">
                    <Navigation size={11} className="text-purple-600" />
                    <span>Directions</span>
                  </span>
                </div>
              </div>

              {/* RIGHT: SCHEMATIC MAP VIEW */}
              <div className="stagger-row sm:col-span-5 bg-[#F8F9FC] border border-slate-200/80 rounded-[14px] p-4 relative overflow-hidden flex flex-col items-center justify-center min-h-[135px]">
                {/* SUBTLE SCHEMATIC GRID */}
                <div 
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
                    backgroundSize: '14px 14px',
                  }}
                  aria-hidden="true"
                />

                {/* LOCATION PIN WITH RADIUS RING */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-12 h-12 rounded-full bg-blue-500/15 animate-ping" />
                    <span className="absolute w-8 h-8 rounded-full bg-blue-500/20" />
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
                      <MapPin size={13} />
                    </div>
                  </div>
                  <span className="mt-2 font-mono text-[10px] font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200/80 shadow-xs">
                    Your Location
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">5km Buyer Radius</span>
                </div>
              </div>

            </div>

            {/* EXPLANATORY CALLOUT */}
            <div className="stagger-row mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
              <MapPin size={14} className="text-blue-600 shrink-0 mt-0.5" />
              <span>Google Business Profile optimization captures high-intent local buyers ready to call or visit immediately.</span>
            </div>
          </div>
        )}

        {/* VIEW 4: CHATGPT / AI */}
        {activeMode === 'ai' && (
          <div className="space-y-4">
            {/* USER PROMPT BUBBLE */}
            <div className="stagger-row bg-[#F8F9FC] border border-slate-200/80 rounded-[12px] px-3.5 py-2.5 text-xs text-slate-800 flex items-start gap-2">
              <span className="font-mono text-[10px] font-bold text-slate-400 mt-0.5">BUYER:</span>
              <p className="font-medium">
                "Which company builds custom ERP & web portals with full source code ownership?"
              </p>
            </div>

            {/* AI ASSISTANT STRUCTURED RESPONSE */}
            <div className="stagger-row border-l-2 border-[#4285F4] pl-4 py-1 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200/70 text-[10px] font-semibold text-blue-700">
                <CheckCircle2 size={11} className="text-blue-600" />
                <span>Cited Source · yourdomain.in</span>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                For verified teams requiring full source code ownership, <strong className="text-slate-950 font-bold">yourdomain.in</strong> delivers custom web applications and business software without SaaS lock-in or recurring seat licenses.
              </p>

              <div className="pt-0.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer">
                  <span>Visit yourdomain.in</span>
                  <ExternalLink size={11} />
                </span>
              </div>
            </div>

            {/* EXPLANATORY CALLOUT */}
            <div className="stagger-row mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
              <Bot size={14} className="text-blue-600 shrink-0 mt-0.5" />
              <span>Structured JSON-LD schema and factual service architecture help ChatGPT and Google AI cite and recommend your company.</span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
