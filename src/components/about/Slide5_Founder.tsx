import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, PhoneCall } from 'lucide-react';
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
    <section id="founder" className="snap-section bg-white flex flex-col justify-center items-center px-6 py-24 select-none">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* HEADING */}
        <div className="mb-16">
          <FadeIn delay={0} y={25}>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A0F1E]">
              The Person <span className="shimmer-text">Behind VOOO LABS</span>
            </h2>
          </FadeIn>
        </div>

        {/* FOUNDER DEEP DIVE SHOWCASE */}
        <div className="flex flex-col items-center w-full mt-2">
          
          {/* FOUNDER AVATAR */}
          <FadeIn delay={0.1} y={30}>
            <div 
              className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-600 to-orange-500 flex items-center justify-center shadow-[0_16px_40px_rgba(124,58,237,0.25)] mb-6 select-none relative overflow-hidden border-4 border-white"
            >
              {/* TODO(founder): swap these initials for a real photograph. */}
              <span className="font-clash font-extrabold text-5xl sm:text-6xl text-white tracking-widest">
                {FOUNDER.initials}
              </span>
            </div>
          </FadeIn>

          {/* NAME & INFO */}
          <FadeIn delay={0.2} y={20}>
            <h3 className="font-clash font-bold text-3xl sm:text-4xl g-text mb-1">
              {FOUNDER.name}
            </h3>
            <p className="font-kanit font-normal text-base sm:text-lg text-slate-600">
              {FOUNDER.role}, {COMPANY.brandName}
            </p>
            <p className="font-kanit font-light text-sm text-slate-500 mt-1 flex items-center justify-center gap-1">
              {LOCATION.region}, {LOCATION.country}
            </p>

            {/* PORTFOLIO LINK */}
            <a
              href={FOUNDER.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-kanit font-medium text-xs text-blue-600 hover:text-blue-700 mt-2 py-1 px-3.5 rounded-full bg-blue-50 border border-blue-100 hover:bg-blue-100/60 transition-colors"
            >
              <span>View Founder Portfolio</span>
              <ExternalLink size={12} />
            </a>
          </FadeIn>

          {/* QUOTE CARD */}
          <FadeIn delay={0.3} y={25} className="w-full max-w-xl">
            <div 
              className="rounded-[28px] bg-[#F8F9FC] border border-black/5 p-8 mt-8 shadow-xs relative text-center"
            >
              <p className="font-kanit font-medium text-base sm:text-lg text-[#0A0F1E] leading-relaxed italic">
                "{FOUNDER.quote}"
              </p>
            </div>
          </FadeIn>

          {/*
            The "11+ Projects Shipped / 5+ Yrs Engineering / ∞ Ideas in Motion"
            row that stood here is gone. None of the three could be checked
            against anything, and a founder page is the worst place on a site
            to put a number nobody can verify.
          */}
          <FadeIn delay={0.4} y={20} className="w-full max-w-xl">
            <p className="font-kanit font-light text-sm sm:text-base text-slate-600 leading-relaxed mt-8 mb-8 border-t border-b border-slate-100 py-6">
              {FOUNDER.bio}
            </p>
          </FadeIn>

          {/* CONTACT & SOCIAL LINKS */}
          <FadeIn delay={0.5} y={15} className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 px-7 py-3 font-kanit font-semibold text-sm text-white hover:scale-[1.04] transition-all duration-300 shadow-md"
            >
              Get in Touch
            </Link>

            {[
              { icon: <GithubIcon size={18} />, href: FOUNDER.github, label: "Founder's GitHub", hover: 'hover:text-slate-900' },
              { icon: <LinkedinIcon size={18} />, href: FOUNDER.linkedin, label: "Founder's LinkedIn", hover: 'hover:text-blue-600' },
              { icon: <InstagramIcon size={18} />, href: FOUNDER.instagram, label: "Founder's Instagram", hover: 'hover:text-pink-600' },
              { icon: <PhoneCall size={18} />, href: whatsappLink, label: 'WhatsApp', hover: 'hover:text-emerald-600' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors ${link.hover}`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
