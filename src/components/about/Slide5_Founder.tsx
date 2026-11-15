import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, MessageSquare, ArrowRight, ShieldCheck, Terminal, Award, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../shared/BrandIcons';
import {
  COMPANY,
  LOCATION,
  FOUNDER,
  whatsappLink,
} from '../../content/company';

export default function Slide5_Founder() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="founder" className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none antialiased border-b border-slate-200/80 relative overflow-hidden">
      {/* AMBIENT BACKLIGHT */}
      <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/[0.03] blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              FOUNDER & LEAD SOFTWARE ARCHITECT
            </span>
            <h2 className="font-clash font-semibold text-3xl sm:text-5xl text-slate-900 mb-3">
              Direct Technical <span className="shimmer-text font-bold">Leadership</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
              You collaborate directly with the software engineer designing and building your digital systems.
            </p>
          </FadeIn>
        </div>

        {/* FLAGSHIP EXECUTIVE FOUNDER SHOWCASE */}
        <FadeIn delay={0.1} y={20} className="w-full">
          <div className="rounded-3xl bg-[#FAFAFD] border border-slate-200/80 p-7 sm:p-12 shadow-sm text-left relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* LEFT COLUMN: DEDICATED EXECUTIVE PORTRAIT CONTAINER (ASPECT [4/5]) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] group mb-6">
                  
                  {/* AMBIENT PORTRAIT LIGHT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
                  <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

                  {/* PORTRAIT IMAGE OR ELEGANT MONOGRAM FALLBACK */}
                  {!imageError ? (
                    <img
                      src="/founder.jpg"
                      alt={FOUNDER.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-radial from-slate-100 to-white">
                      <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
                        <span className="font-clash font-bold text-3xl tracking-wider shimmer-text">
                          {FOUNDER.initials}
                        </span>
                      </div>
                      <span className="font-clash font-semibold text-lg text-slate-900 mb-1">
                        {FOUNDER.name}
                      </span>
                      <span className="font-mono text-xs text-blue-600">
                        {FOUNDER.role}
                      </span>
                    </div>
                  )}

                  {/* OVERLAY BADGE */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[11px] text-slate-800 font-medium">Available for Projects</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">{LOCATION.country}</span>
                  </div>
                </div>

                {/* SOCIAL PROFILES */}
                <div className="flex items-center gap-2.5">
                  <a
                    href={FOUNDER.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-slate-300 transition-colors shadow-2xs"
                  >
                    <GithubIcon size={15} />
                  </a>
                  <a
                    href={FOUNDER.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-slate-300 transition-colors shadow-2xs"
                  >
                    <LinkedinIcon size={15} />
                  </a>
                  <a
                    href={FOUNDER.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-slate-300 transition-colors shadow-2xs"
                  >
                    <InstagramIcon size={15} />
                  </a>
                  <a
                    href={FOUNDER.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-sans font-medium flex items-center gap-1.5 hover:border-slate-300 hover:text-blue-600 transition-colors shadow-2xs"
                  >
                    <span>Portfolio</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN: AUTHENTIC FOUNDER'S STATEMENT & CRAFTSMANSHIP */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-clash font-semibold text-2xl sm:text-3xl text-slate-900 mb-1">
                    {FOUNDER.name}
                  </h3>
                  <p className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                    {FOUNDER.role} · {LOCATION.region}, {LOCATION.country}
                  </p>
                </div>

                {/* STATEMENT CALLOUT */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs relative">
                  <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed italic font-normal">
                    "{FOUNDER.quote}"
                  </p>
                </div>

                <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  <p>
                    I started VOOO LABS with a simple conviction: businesses deserve custom software engineered with the same level of architectural discipline found at top global technology companies.
                  </p>
                  <p>
                    When you partner with VOOO LABS, there are no outsourced contractors or layers of account managers. Every architectural decision, database model, and interface interaction is built directly by me with transparent weekly milestone reviews.
                  </p>
                </div>

                {/* ARCHITECTURAL STANDARDS */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-2xs">
                    Custom Web Applications
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-2xs">
                    B2B Operations Portals
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-2xs">
                    High-Conversion Brand Web
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-2xs">
                    100% Client Code Ownership
                  </span>
                </div>
              </div>

            </div>

          </div>
        </FadeIn>

        {/* BOTTOM CONSULTATION CARD */}
        <FadeIn delay={0.2} y={15} className="w-full mt-16">
          <div className="rounded-3xl bg-slate-900 border border-slate-800 text-white p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-clash font-semibold text-2xl sm:text-3xl text-white mb-2">
                Have an ambitious web project in mind?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-normal">
                Skip the generic agency sales pitches. Speak directly with our lead software architect to scope your platform requirements and delivery timeline.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-white hover:bg-slate-100 text-slate-900 font-sans font-semibold text-xs sm:text-sm px-7 py-3.5 transition-all duration-200 shadow-lg inline-flex items-center gap-2 flex-shrink-0"
            >
              <MessageSquare size={15} />
              <span>Start Technical Consultation</span>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
