import React from 'react';
import { Phone, ArrowUp, BarChart2, MessageSquare, AlertCircle, PhoneCall, Sparkles, CreditCard, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';

export default function Slide4_CallMind() {
  const features = [
    { name: 'Call Tracking', icon: PhoneCall, color: 'text-emerald-600' },
    { name: 'Lead Pipeline', icon: BarChart2, color: 'text-blue-500' },
    { name: 'Followups', icon: Clock, color: 'text-purple-500' },
    { name: 'WhatsApp API', icon: MessageSquare, color: 'text-emerald-500' },
    { name: 'AI Insights', icon: Sparkles, color: 'text-amber-500' },
    { name: '₹499 pricing', icon: CreditCard, color: 'text-blue-600' },
  ];

  return (
    <section 
      id="callmind" 
      className="snap-section bg-gradient-to-br from-[#10B981]/[0.03] via-white to-[#10B981]/[0.02] flex items-center px-6 sm:px-16 py-20 relative select-none"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: CONTENT */}
        <div className="flex flex-col items-start order-2 lg:order-1">
          
          {/* BACK TO TOP ANCHOR */}
          <FadeIn delay={0} y={15}>
            <a 
              href="#" 
              className="inline-flex items-center gap-1 font-kanit font-medium text-xs text-[#10B981] uppercase tracking-wider mb-5 hover:text-[#10B981]/90"
            >
              <ArrowUp size={10} /> Back to Products
            </a>
          </FadeIn>

          {/* APP ICON */}
          <FadeIn delay={0.05} y={20}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#10B981] to-[#059669] flex items-center justify-center shadow-[0_12px_32px_rgba(16,185,129,0.3)] mb-6">
              <Phone size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
          </FadeIn>

          {/* BADGES ROW */}
          <FadeIn delay={0.1} y={15}>
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-kanit font-medium text-xs text-emerald-600">
                Native Android
              </span>
              <span className="rounded-full bg-[#10B981]/10 border border-[#10B981]/20 px-3 py-1 font-kanit font-medium text-xs text-[#059669]">
                Public Beta
              </span>
            </div>
          </FadeIn>

          {/* APP HEADINGS */}
          <FadeIn delay={0.15} y={25}>
            <h3 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] leading-none mb-2">
              CallMind
            </h3>
            <h4 className="font-clash text-lg sm:text-xl md:text-2xl font-semibold g-callmind mb-6">
              Simplifying CRM for sales.
            </h4>
          </FadeIn>

          {/* DESCRIPTION */}
          <FadeIn delay={0.25} y={20}>
            <p className="font-kanit font-light text-sm sm:text-base text-slate-600 leading-relaxed max-w-[500px] mb-8">
              A lightweight mobile CRM built specifically for Indian solo business owners, sales agents, and freelancers. Features automatic call tracking, lead pipeline management, smart WhatsApp integrations, follow-up alarms, and AI caller insights.
            </p>
          </FadeIn>

          {/* FEATURE CHIPS GRID */}
          <FadeIn delay={0.35} y={15} className="w-full">
            <div className="grid grid-cols-2 gap-3 max-w-[480px] mb-10">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={idx}
                    className="rounded-xl bg-[#10B981]/[0.06] border border-[#10B981]/15 px-4 py-3 font-kanit text-xs sm:text-sm text-slate-800 flex items-center gap-2.5 hover:bg-[#10B981]/10 transition-colors"
                  >
                    <IconComponent className={`w-4 h-4 ${feature.color}`} />
                    <span className="font-medium">{feature.name}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* CTA ROW */}
          <FadeIn delay={0.45} y={15}>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#waitlist"
                className="rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] px-7 py-3 font-kanit font-medium text-sm text-white transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_14px_rgba(16,185,129,0.25)]"
              >
                Request Access
              </a>
              <Link
                to="/roadmap"
                className="rounded-full border-2 border-[#10B981] px-7 py-2.5 font-kanit font-medium text-sm g-callmind hover:bg-[#10B981]/5 transition-all duration-300"
              >
                Learn More ↓
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN: CSS DASHBOARD MOCKUP */}
        <div className="order-1 lg:order-2 flex justify-center">
          <FadeIn delay={0.3} x={40}>
            {/* Dashboard Shell */}
            <div 
              className="w-[280px] sm:w-[300px] rounded-3xl bg-[#F0FDF8] border border-emerald-500/15 shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden relative group hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 cursor-default select-none"
            >
              {/* HEADER */}
              <div className="h-14 bg-gradient-to-r from-[#10B981] to-[#059669] px-4 flex items-center justify-between flex-shrink-0 shadow-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-white" />
                  <span className="font-kanit font-medium text-sm text-white">CallMind CRM</span>
                </div>
                <span className="font-kanit text-[9px] bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">Pro Live</span>
              </div>

              {/* STATS ROW (3 mini cards) */}
              <div className="grid grid-cols-3 gap-2 p-3 flex-shrink-0">
                {[
                  { num: '24', label: 'Leads' },
                  { num: '8', label: 'Calls Today' },
                  { num: '3', label: 'Done' },
                ].map((stat, idx) => (
                  <div key={idx} className="rounded-xl bg-white border border-emerald-500/5 p-2 text-center shadow-[0_2px_6px_rgba(16,185,129,0.03)]">
                    <span className="font-clash font-bold text-sm sm:text-base g-callmind leading-none block">{stat.num}</span>
                    <span className="font-kanit font-light text-[8px] sm:text-[9px] text-slate-400 mt-1 block leading-none">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* PIPELINE BARS */}
              <div className="px-3 py-1 flex-1">
                <span className="font-kanit font-semibold text-[10px] text-slate-400 px-1 mb-2 block">Sales Pipeline</span>
                <div className="flex flex-col gap-2 bg-white rounded-xl p-3 border border-emerald-500/5">
                  {[
                    { label: 'New', percent: '90%', val: '10' },
                    { label: 'Contacted', percent: '70%', val: '7' },
                    { label: 'Interested', percent: '45%', val: '4' },
                    { label: 'Callback', percent: '20%', val: '2' },
                    { label: 'Won', percent: '10%', val: '1' },
                  ].map((bar, idx) => (
                    <div key={idx} className="flex flex-col gap-0.5">
                      <div className="flex justify-between items-center text-[8px] sm:text-[9px] font-medium text-slate-600">
                        <span>{bar.label}</span>
                        <span>{bar.val}</span>
                      </div>
                      <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"
                          style={{ width: bar.percent }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI INSIGHT CARD */}
              <div className="p-3 mt-1.5 flex-shrink-0">
                <div className="rounded-xl bg-emerald-500/8 border border-emerald-500/15 p-3 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Sparkles size={11} className="text-[#059669]" />
                    <span className="font-kanit font-semibold text-[9px] sm:text-[10px] g-callmind">AI Caller Insight</span>
                  </div>
                  <p className="font-kanit font-light text-[8px] sm:text-[9px] text-slate-500 leading-normal">
                    "Lead Rohit Patil is highly interested in custom pricing. Scheduled follow-up in 10 mins."
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
