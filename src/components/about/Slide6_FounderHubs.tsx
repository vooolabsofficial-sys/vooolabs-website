import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck, CheckCircle2, MapPin, Clock, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../shared/BrandIcons';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION, FOUNDER, whatsappLink } from '../../content/company';

export default function Slide6_FounderHubs() {
  const [imageError, setImageError] = useState(false);

  return (
    <section 
      id="founder" 
      className="bg-[#F8F9FC] py-20 lg:py-28 px-4 sm:px-6 select-none antialiased border-b border-zinc-200"
      aria-label="Founder Letter and Regional Hubs"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* EDITORIAL HEADER */}
        <div className="mb-14 pb-8 border-b border-zinc-200 text-left">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              FOUNDER COMMITMENT & GEOGRAPHY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 tracking-tight leading-tight mb-3">
              Direct Engineering Leadership
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl font-normal leading-relaxed">
              When you partner with VOOO LABS, you work directly with the software engineer who designs, codes, and maintains your systems. Zero salesmen, zero junior handoffs.
            </p>
          </FadeIn>
        </div>

        {/* TWO-COLUMN FOUNDER LETTER & HUBS SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* LEFT COLUMN: FOUNDER PROFILE (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-200 bg-white p-2 shadow-xs">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-100 relative">
                {!imageError ? (
                  <img
                    src="/founder.jpg"
                    alt={FOUNDER.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 font-bold text-5xl">
                    {FOUNDER.initials}
                  </div>
                )}
                
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-zinc-200 text-left shadow-2xs">
                  <div className="text-base font-bold text-zinc-950 tracking-tight">
                    {FOUNDER.name}
                  </div>
                  <div className="font-mono text-[11px] text-zinc-500">
                    {FOUNDER.role}
                  </div>
                </div>
              </div>
            </div>

            {/* DIRECT CONNECT ROW */}
            <div className="flex items-center gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-base btn-3d-emerald flex-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-medium py-3 px-4 inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <WhatsappIcon size={14} />
                <span>Direct WhatsApp</span>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="w-11 h-11 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-700 shadow-2xs"
                aria-label="Email Founder"
              >
                <Mail size={16} />
              </a>

              <a
                href={FOUNDER.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-700 shadow-2xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={15} />
              </a>

              <a
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-700 shadow-2xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: LETTER & REGIONAL HUBS (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* FOUNDER LETTER CARD */}
            <div className="rounded-3xl bg-white border border-zinc-200/90 p-7 sm:p-8 space-y-4 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-blue-600 font-semibold block">
                Open Letter to Business Owners
              </span>
              
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight leading-snug">
                "We don't resell templates. We engineer systems."
              </h3>

              <div className="space-y-3 text-sm text-zinc-600 leading-relaxed font-normal">
                <p>
                  "Small and growing businesses across India are constantly told they must either accept fragile ₹5,000 WordPress templates or pay corporate agencies lakhs with endless monthly retainers. Both models fail the client."
                </p>
                <p>
                  "At VOOO LABS, we took the third path: modern AI-era engineering discipline with sub-second page speeds, custom GST invoicing engines, and 100% intellectual property handover. You own your code, your hosting, and your future."
                </p>
              </div>

              <div className="pt-2 font-mono text-xs text-zinc-500">
                — Vrushabh Santosh Shinde, Founder & Lead Architect
              </div>
            </div>

            {/* REGIONAL HUBS STRIP */}
            <div className="rounded-3xl bg-white border border-zinc-200/90 p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">
                    Studio Origin & Regional Hubs
                  </span>
                  <div className="font-semibold text-sm text-zinc-900 mt-0.5">
                    {LOCATION.hubs.join(' • ')}, {LOCATION.region}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Operating in IST (UTC+05:30)</span>
              </div>
            </div>

            {/* CTA ACTION */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="btn-liquid-base btn-liquid-primary w-full rounded-full bg-[#0A0F1E] hover:bg-[#4285F4] text-white border-[#0A0F1E] hover:border-[#4285F4] font-medium text-sm py-4 px-8 inline-flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>See what your project will cost</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
