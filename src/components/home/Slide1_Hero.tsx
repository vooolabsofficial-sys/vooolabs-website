import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import { COMPANY, LOCATION } from '../../content/company';

export default function Slide1_Hero() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to see how custom software and web development can help my business.")}`;

  return (
    <section 
      className="snap-section min-h-screen bg-white flex flex-col justify-between relative overflow-hidden select-none border-b border-slate-200/80"
      aria-label="Hero — VOOO LABS Introduction"
    >
      {/* REFINED AMBIENT GLOW BACKDROP */}
      <div className="absolute top-[-160px] left-[-160px] w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute top-[20%] right-[-160px] w-[500px] h-[500px] rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-[-100px] left-1/3 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none z-0" aria-hidden="true" />

      {/* NAVBAR SPACER */}
      <div className="h-[95px] sm:h-[110px]" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto py-4">
        
        {/* EYEBROW BADGE */}
        <FadeIn delay={0.02} y={15}>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200/90 px-4 py-1.5 mb-6 text-slate-700 font-mono text-xs tracking-wider uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>SOFTWARE & DIGITAL ENGINEERING STUDIO • {LOCATION.hubs.join(' • ').toUpperCase()}</span>
          </div>
        </FadeIn>

        {/* HEADLINE */}
        <FadeIn delay={0.08} y={25}>
          <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-slate-900 leading-[1.12] tracking-tight mb-6 max-w-4xl">
            Enterprise-Grade Websites, Web Apps & Business Software—<span className="text-slate-900">Now Practical for Every Business.</span>
          </h1>
        </FadeIn>

        {/* SUBHEADLINE */}
        <FadeIn delay={0.18} y={18}>
          <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            What used to cost lakhs is now within reach. In the AI era, we build custom websites, client portals, and internal business software for small, mid-sized, and growing companies—complete with domain, 24/7 hosting, and 100% ownership.
          </p>
        </FadeIn>

        {/* CTA ROW */}
        <FadeIn delay={0.28} y={15}>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 font-sans font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] shadow-xs active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>See what your project will cost</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 px-8 py-4 font-sans font-medium text-sm sm:text-base text-slate-700 hover:text-slate-900 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xs inline-flex items-center gap-2"
            >
              <MessageSquare size={16} className="text-blue-600" />
              <span>See how it can help your business</span>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* CAPABILITIES BAR */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end select-none mt-8 mb-4">
        <div className="w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl bg-slate-50/90 backdrop-blur-xl border border-slate-200/80 p-2.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center shadow-xs">
            
            <Link to="/services#websites" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-2xs transition-all text-left group">
              <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 border border-sky-200/70 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Globe size={16} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-semibold text-xs text-slate-900 block truncate group-hover:text-sky-600 transition-colors">Business Websites</span>
                <span className="font-sans text-[11px] text-slate-500 block truncate">Domain, 24/7 Hosting & Leads</span>
              </div>
            </Link>

            <Link to="/services#web-apps" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-2xs transition-all text-left group">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Laptop size={16} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-semibold text-xs text-slate-900 block truncate group-hover:text-blue-600 transition-colors">Custom Web Apps</span>
                <span className="font-sans text-[11px] text-slate-500 block truncate">Portals & Booking Systems</span>
              </div>
            </Link>

            <Link to="/services#custom-software" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-2xs transition-all text-left group">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/70 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Cpu size={16} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-semibold text-xs text-slate-900 block truncate group-hover:text-emerald-600 transition-colors">Business Software</span>
                <span className="font-sans text-[11px] text-slate-500 block truncate">GST Billing & Operations</span>
              </div>
            </Link>

            <Link to="/seo-ai" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-2xs transition-all text-left group">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/70 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Sparkles size={16} />
              </div>
              <div className="min-w-0">
                <span className="font-clash font-semibold text-xs text-slate-900 block truncate group-hover:text-purple-600 transition-colors">AI Search & Growth</span>
                <span className="font-sans text-[11px] text-slate-500 block truncate">Google SEO, AEO & Maps</span>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* FOOTER TICKER */}
      <div className="relative z-20 px-6 sm:px-12 pb-5 flex justify-between items-end gap-6 w-full max-w-7xl mx-auto border-t border-slate-100 pt-4">
        <FadeIn delay={0.35} y={10}>
          <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest leading-relaxed">
            GROUNDED ENGINEERING • 100% CODE & DATA OWNERSHIP
          </div>
        </FadeIn>
        <FadeIn delay={0.35} y={10}>
          <div className="font-mono text-[11px] text-slate-500 text-right">
            © {COMPANY.foundedYear}–{new Date().getFullYear()} {COMPANY.legalName}.
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
