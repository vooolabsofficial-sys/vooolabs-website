import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { COMPANY } from '../../content/company';

export default function Slide6_CTA() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discover what my business is missing in websites, custom software, and AI search visibility.")}`;

  return (
    <section className="bg-[#F8F9FC] py-20 lg:py-28 px-6 sm:px-8 text-center relative overflow-hidden select-none border-b border-slate-200/80">
      {/* ORIGINAL VIBRANT RADIAL BACKDROP */}
      <div className="absolute inset-0 bg-radial from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/80 px-4 py-1.5 mb-6 text-slate-700 font-mono text-xs font-medium tracking-wider uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>BUILT FOR THE AI ERA • ALL-INCLUSIVE EXECUTION</span>
          </div>
        </FadeIn>

        {/* HEADLINE (STRICT 4-TIER H2 SCALE) */}
        <FadeIn delay={0.1} y={20}>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-slate-900 mb-6 max-w-2xl">
            Professional Software & Websites. <br />
            Built Around Your Budget and Workflow with <span className="shimmer-text">VOOO LABS.</span>
          </h2>
        </FadeIn>

        {/* BODY COPY (STRICT 16PX BODY SCALE) */}
        <FadeIn delay={0.18} y={15}>
          <p className="text-base leading-relaxed text-slate-600 max-w-2xl mx-auto mb-10">
            Whether you are launching a growing local business or upgrading company operations, we handle everything—custom build, domain, DNS, 24/7 cloud hosting, social media integration, and AI search visibility. Share your requirements and get an honest plan and timeline.
          </p>
        </FadeIn>

        {/* ACTION BUTTONS (PRESERVING 3D TACTILE HOVER & PRESS BEHAVIOR) */}
        <FadeIn delay={0.25} y={15}>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="btn-3d-base btn-3d-primary rounded-full bg-slate-900 hover:bg-blue-600 text-white px-8 py-3.5 font-sans font-semibold text-sm sm:text-base inline-flex items-center gap-2"
            >
              <span>See what your project will cost</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-base btn-3d-secondary rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 px-8 py-3.5 font-sans font-medium text-sm sm:text-base text-slate-700 hover:text-slate-900 hover:border-slate-300 inline-flex items-center gap-2"
            >
              <MessageSquare size={16} className="text-emerald-600" />
              <span>Discover what you're missing</span>
            </a>
          </div>
        </FadeIn>

        {/* MICRO-COPY */}
        <FadeIn delay={0.3} y={10}>
          <p className="text-xs font-mono text-slate-500 mt-5 max-w-md mx-auto leading-relaxed">
            No fixed templates or false timelines. We review your exact requirements first and share a clear cost estimate and realistic delivery schedule.
          </p>
        </FadeIn>

        {/* TRUST BADGES */}
        <FadeIn delay={0.35} y={10}>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-slate-600 font-mono text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-600" /> 100% Code & Data Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-blue-600" /> All-In-One Domain & 24/7 Hosting
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-purple-600" /> ₹0 Monthly Per-Seat Rent
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
