import React from 'react';
import { Brain, ArrowUp, Bell, Clock, Lock, Users, MapPin, Sparkles, GraduationCap, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { getProduct, STATUS_META } from '../../content/products';

export default function Slide3_SmaranAI() {
  const product = getProduct('smaran-ai')!;
  const status = STATUS_META[product.status];

  const featureIcons = [Clock, Lock, Users, MapPin, Sparkles, Brain];
  const featureColors = [
    'text-[#7C3AED]',
    'text-emerald-500',
    'text-blue-500',
    'text-[#F97316]',
    'text-amber-500',
    'text-purple-600',
  ];

  return (
    <section 
      id="smaran-ai" 
      className="snap-section bg-gradient-to-br from-[#7C3AED]/[0.03] via-white to-[#F97316]/[0.02] flex items-center px-6 sm:px-16 py-20 relative select-none"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: CSS MOCKUPS (order-2 on mobile, order-1 on desktop) */}
        <div className="order-2 lg:order-1 flex justify-center w-full">
          <FadeIn delay={0.3} x={-40} className="w-full max-w-[340px]">
            <div className="flex flex-col gap-4 w-full">
              
              {/* CARD 1: STUDENT */}
              <div 
                className="rounded-2xl bg-[#7C3AED]/[0.08] border border-[#7C3AED]/15 p-4 sm:p-5 flex gap-4 items-center justify-between shadow-xs transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex gap-3 items-center min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-clash font-semibold text-sm sm:text-base text-[#0A0F1E]">Student Mode</span>
                    <span className="font-kanit font-light text-[10px] sm:text-xs text-slate-500 truncate">Engineering Math II • 9:00 AM</span>
                  </div>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Bell size={12} className="sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* CARD 2: PROFESSIONAL */}
              <div 
                className="rounded-2xl bg-[#F97316]/[0.08] border border-[#F97316]/15 p-4 sm:p-5 flex gap-4 items-center justify-between shadow-xs transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex gap-3 items-center min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-clash font-semibold text-sm sm:text-base text-[#0A0F1E]">Professional Mode</span>
                    <span className="font-kanit font-light text-[10px] sm:text-xs text-slate-500 truncate">Client Followup Call • 2:00 PM</span>
                  </div>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Bell size={12} className="sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* CARD 3: ELDER (ACCESSIBLE) */}
              <div 
                className="rounded-2xl bg-[#10B981]/[0.08] border border-[#10B981]/15 p-5 sm:p-6 flex gap-4 items-center justify-between shadow-xs transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex gap-4 items-center min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-clash font-bold text-lg sm:text-xl text-[#0A0F1E]">Elder Mode</span>
                    <span className="font-kanit font-normal text-xs sm:text-sm text-slate-600 mt-0.5 truncate">Blood Pressure Pill • 6:00 PM</span>
                  </div>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Bell size={16} className="sm:w-5 sm:h-5 animate-bounce" />
                </div>
              </div>

              {/* CENTER ALARM PULSING BUTTON */}
              <div className="flex justify-center mt-2 relative">
                <div className="absolute inset-0 rounded-full bg-[#7C3AED]/20 animate-ping pointer-events-none max-w-[64px] mx-auto" />
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#F97316] flex items-center justify-center text-white text-xl sm:text-2xl shadow-[0_12px_32px_rgba(124,58,237,0.35)] pulse-dot cursor-default relative z-10"
                >
                  <Clock className="w-7 h-7 text-white" />
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN: CONTENT (order-1 on mobile, order-2 on desktop) */}
        <div className="flex flex-col items-start order-1 lg:order-2">
          
          {/* BACK TO TOP ANCHOR */}
          <FadeIn delay={0} y={15}>
            <a 
              href="#products-top" 
              className="inline-flex items-center gap-1 font-kanit font-medium text-xs text-[#7C3AED] uppercase tracking-wider mb-5 hover:text-[#7C3AED]/90"
            >
              <ArrowUp size={10} /> Back to Products
            </a>
          </FadeIn>

          {/* APP ICON */}
          <FadeIn delay={0.05} y={20}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#7C3AED] to-[#F97316] flex items-center justify-center shadow-[0_12px_32px_rgba(124,58,237,0.3)] mb-6">
              <Brain size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
          </FadeIn>

          {/* BADGES ROW */}
          <FadeIn delay={0.1} y={15}>
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 font-kanit font-medium text-xs text-purple-600">
                {product.platforms}
              </span>
              <span className={`rounded-full border px-3 py-1 font-kanit font-medium text-xs ${status.badge}`}>
                {status.label}
              </span>
            </div>
          </FadeIn>

          {/* APP HEADINGS */}
          <FadeIn delay={0.15} y={25}>
            <h3 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0F1E] leading-none mb-2">
              SMARAN AI
            </h3>
            <h4 className="font-clash text-lg sm:text-xl md:text-2xl font-semibold g-smaran mb-6">
              {product.tagline}
            </h4>
          </FadeIn>

          {/* DESCRIPTION */}
          <FadeIn delay={0.25} y={20}>
            {/*
              "100% guaranteed alarms" is gone: Android's own doze and OEM
              battery managers mean no app can guarantee that, and promising it
              for software that is not built yet is a claim with nothing behind
              it at all.
            */}
            <p className="font-kanit font-light text-sm sm:text-base text-slate-600 leading-relaxed max-w-[500px] mb-8">
              {product.description}
            </p>
          </FadeIn>

          {/* FEATURE CHIPS GRID */}
          <FadeIn delay={0.35} y={15} className="w-full">
            <div className="grid grid-cols-2 gap-3 max-w-[480px] mb-10">
              {product.features.map((feature, idx) => {
                const IconComponent = featureIcons[idx % featureIcons.length];
                return (
                  <div
                    key={feature}
                    className="rounded-xl bg-[#7C3AED]/[0.06] border border-[#7C3AED]/15 px-4 py-3 font-kanit text-xs sm:text-sm text-slate-800 flex items-center gap-2.5 hover:bg-[#7C3AED]/10 transition-colors"
                  >
                    <IconComponent className={`w-4 h-4 ${featureColors[idx % featureColors.length]}`} />
                    <span className="font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* CTA ROW */}
          <FadeIn delay={0.45} y={15}>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/contact#waitlist"
                className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#F97316] px-7 py-3 font-kanit font-medium text-sm text-white transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_14px_rgba(124,58,237,0.25)]"
              >
                Join Waitlist
              </Link>
              <Link
                to="/roadmap"
                className="rounded-full border-2 border-[#7C3AED] px-7 py-2.5 font-kanit font-medium text-sm g-smaran hover:bg-[#7C3AED]/5 transition-all duration-300"
              >
                See the roadmap
              </Link>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
