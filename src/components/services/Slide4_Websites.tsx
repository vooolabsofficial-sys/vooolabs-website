import { Check, ArrowRight, MessageSquare, ShieldCheck, Monitor, Smartphone, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide4_Websites() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss an All-Inclusive Business Website for my company.")}`;

  return (
    <section 
      id="websites"
      className="snap-section min-h-screen bg-[#F8F9FC] flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="All-Inclusive Business Websites — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sky-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-sky-600 uppercase mb-3 text-left">
            01 / All-Inclusive Business Websites
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                All-Inclusive Business Websites Built to <span className="text-sky-600">Turn Visitors into Inquiries</span>.
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Your website is your primary digital storefront. We design clean, ultra-fast websites that establish instant credibility, look stunning on every mobile screen, and turn visits into direct customer calls and WhatsApp inquiries. We handle the entire technical setup end-to-end.
              </p>
            </FadeIn>

            {/* VALUE BULLETS: ALL-INCLUSIVE DELIVERABLES */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Custom Design & Full Functional Build</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Tailored layout and structure designed around your exact offerings—zero generic templates, zero bloated page-builder plugins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Domain, DNS & 24/7 Cloud Hosting Included</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      We assist with domain selection, complete DNS routing, automated SSL security certificates, and reliable high-speed cloud hosting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">1-Tap WhatsApp Leads & AI Search Readiness</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Prominent 1-click WhatsApp and calling triggers paired with structured schema metadata so Google and conversational AI assistants understand your business.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ACTION TRIGGERS */}
            <FadeIn delay={0.32} y={15}>
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="btn-3d-base btn-3d-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-sm cursor-pointer"
                >
                  <span>See what your project will cost</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-base btn-3d-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-sky-600" />
                  <span>See how it can help your business</span>
                </a>

                <div className="w-full sm:w-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Client Ownership · Zero Tech Lock-In</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: ALL-INCLUSIVE SHOWCASE */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-white border border-slate-200/80 shadow-xs p-6 sm:p-7 text-left relative overflow-hidden">
                
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-[11px] font-mono text-slate-500 ml-2">https://yourbusiness.in</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-sky-50 text-sky-700 border border-sky-200">
                    All-Inclusive Build
                  </span>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-[#FAFAFD] border border-slate-200/80">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Technical Setup</div>
                    <div className="text-lg font-clash font-bold text-sky-600 mt-0.5">All-In-One</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">Domain, DNS & 24/7 Hosting</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAFAFD] border border-slate-200/80">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Inquiry Conversion</div>
                    <div className="text-lg font-clash font-bold text-emerald-600 mt-0.5">1-Tap WhatsApp</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">Friction-Free Direct Inquiries</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2.5 mb-5">
                  <div className="p-3 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
                        <Monitor size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Custom Visual Design & Copywriting</div>
                        <div className="text-[11px] text-slate-500">High-contrast, professional studio aesthetic</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                      Bespoke
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Sparkles size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Google SEO & AI Search Readiness</div>
                        <div className="text-[11px] text-slate-500">Machine-readable data for AI & search bots</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Indexed
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-200">
                        <Smartphone size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Responsive Mobile & Desktop Optimization</div>
                        <div className="text-[11px] text-slate-500">Fast rendering on all 4G & 5G networks</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      Fast
                    </span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Lock size={13} className="text-emerald-600" />
                    Automated Free SSL / HTTPS
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    100% Client Owned
                  </span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
