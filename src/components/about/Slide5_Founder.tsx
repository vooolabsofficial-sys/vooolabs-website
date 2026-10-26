import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../shared/BrandIcons';
import {
  COMPANY,
  LOCATION,
  FOUNDER,
  whatsappLink,
} from '../../content/company';

export default function Slide5_Founder() {
  return (
    <section id="founder" className="bg-[#F6F7FB] py-16 sm:py-24 px-4 sm:px-6 select-none antialiased border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* HEADING */}
        <div className="mb-12">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              LEADERSHIP & CRAFTSMANSHIP
            </span>
            <h2 className="font-clash font-semibold text-2xl sm:text-4xl text-slate-800 mb-2">
              The Mind Behind <span className="shimmer-text font-bold">VOOO LABS</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-normal">
              Direct communication with the software architect building your digital product.
            </p>
          </FadeIn>
        </div>

        {/* FOUNDER CARD */}
        <FadeIn delay={0.1} y={20} className="w-full">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm text-left relative overflow-hidden">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* LEFT: FOUNDER AVATAR & SOCIALS */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-500 flex items-center justify-center shadow-[0_12px_32px_rgba(59,130,246,0.2)] mb-4 border-4 border-white">
                  <span className="font-clash font-bold text-4xl text-white tracking-wider">
                    {FOUNDER.initials}
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-xl text-slate-800 mb-0.5">
                  {FOUNDER.name}
                </h3>
                <p className="font-sans text-xs font-medium text-blue-600 mb-2">
                  {FOUNDER.role}
                </p>

                <p className="font-sans text-xs text-slate-400 flex items-center gap-1 mb-5">
                  <MapPin size={12} className="text-emerald-500" />
                  <span>{LOCATION.region}, {LOCATION.country}</span>
                </p>

                {/* SOCIAL LINKS */}
                <div className="flex items-center gap-2">
                  <a
                    href={FOUNDER.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white transition-colors"
                  >
                    <GithubIcon size={14} />
                  </a>
                  <a
                    href={FOUNDER.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-white transition-colors"
                  >
                    <LinkedinIcon size={14} />
                  </a>
                  <a
                    href={FOUNDER.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-medium flex items-center gap-1 hover:bg-blue-100/60 transition-colors"
                  >
                    <span>Portfolio</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* RIGHT: PHILOSOPHY & QUOTE */}
              <div className="md:col-span-7 space-y-4">
                <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-slate-100">
                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal">
                    "{FOUNDER.quote}"
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {FOUNDER.bio}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600">
                    Full-Stack TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600">
                    Native Android
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600">
                    Technical SEO & AEO
                  </span>
                </div>
              </div>

            </div>

          </div>
        </FadeIn>

        {/* BOTTOM ACTION CARD */}
        <FadeIn delay={0.2} y={15} className="w-full mt-16">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-clash font-semibold text-2xl sm:text-3xl text-white mb-1.5">
                Ready to build something great together?
              </h2>
              <p className="font-sans text-xs sm:text-sm text-blue-100 max-w-lg leading-relaxed font-normal">
                Speak directly with our engineering team and get a clear, predictable milestone plan for your software product.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-white hover:bg-blue-50 text-blue-700 font-sans font-medium text-xs sm:text-sm px-7 py-3 transition-all duration-200 shadow-md inline-flex items-center gap-2 flex-shrink-0"
            >
              <MessageSquare size={15} />
              <span>Start Free Consultation</span>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
