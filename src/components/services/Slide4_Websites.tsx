import { Check, ArrowRight, MessageSquare, ShieldCheck, Monitor, Smartphone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide4_Websites() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss an All-Inclusive Business Website for my company.")}`;

  return (
    <section 
      id="websites"
      className="snap-section min-h-screen bg-[#F8F9FC] flex flex-col justify-center relative overflow-hidden select-none py-20 lg:py-28 border-t border-slate-200/80"
      aria-label="All-Inclusive Business Websites — VOOO LABS"
    >
      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sky-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-mono text-xs font-medium text-sky-600 uppercase tracking-wider mb-2 text-left">
            01 / All-Inclusive Business Websites
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE (STRICT LEFT-ALIGNMENT & EQUAL-HEIGHT INTERNAL BASELINES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-5">
              <FadeIn delay={0.12} y={20}>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                  All-Inclusive Business Websites Built to <span className="shimmer-text">Turn Visitors into Inquiries</span>.
                </h2>
              </FadeIn>

              <FadeIn delay={0.18} y={20}>
                <p className="text-base leading-relaxed text-slate-600">
                  Your website is your primary digital storefront. We design clean, ultra-fast websites that establish instant credibility, look stunning on every mobile screen, and turn visits into direct customer calls and WhatsApp inquiries. We handle the entire technical setup end-to-end.
                </p>
              </FadeIn>

              {/* VALUE BULLETS: ALL-INCLUSIVE DELIVERABLES */}
              <FadeIn delay={0.25} y={20}>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">Custom Design & Full Functional Build</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Tailored layout and structure designed around your exact offerings—zero generic templates, zero bloated page-builder plugins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">Domain, DNS & 24/7 Cloud Hosting Included</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        We assist with domain selection, complete DNS routing, automated SSL security certificates, and reliable high-speed cloud hosting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">1-Tap WhatsApp Leads & AI Search Readiness</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Prominent 1-click WhatsApp and calling triggers paired with structured schema metadata so Google and conversational AI assistants understand your business.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ACTION TRIGGERS (PRESERVING 3D TACTILE HOVER & PRESS BEHAVIOR) */}
            <FadeIn delay={0.32} y={15}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-3d-base btn-3d-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-sky-600 text-white font-semibold text-sm cursor-pointer"
                >
                  <span>See what your project will cost</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-base btn-3d-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-sky-600" />
                  <span>See how it can help your business</span>
                </a>

                <div className="w-full inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Client Ownership · Zero Tech Lock-In</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: ALL-INCLUSIVE SHOWCASE (EQUAL-HEIGHT & GENEROUSLY PADDED) */}
          <div className="lg:col-span-6 flex">
            <FadeIn delay={0.25} y={20} className="w-full flex">
              <div className="rounded-3xl bg-white border border-slate-200/80 shadow-2xs p-7 sm:p-8 text-left w-full flex flex-col justify-between">
                
                <div>
                  {/* Browser Frame Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="text-xs font-mono text-slate-500 ml-2">https://yourbusiness.in</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                      SSL Active · 24/7 Up
                    </span>
                  </div>

                  {/* Speed & Responsive Badges */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="p-4 rounded-2xl bg-[#FAFAFD] border border-slate-200/80">
                      <div className="text-xs uppercase font-mono text-slate-500 tracking-wider">Mobile Performance</div>
                      <div className="text-lg font-bold text-slate-900 mt-1">Sub-0.4s Speed</div>
                      <div className="text-xs text-emerald-600 font-medium mt-0.5">Instant First Paint</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAFAFD] border border-slate-200/80">
                      <div className="text-xs uppercase font-mono text-slate-500 tracking-wider">Inquiry Conversion</div>
                      <div className="text-lg font-bold text-sky-600 mt-1">1-Tap Ingress</div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">Direct WhatsApp & Phone</div>
                    </div>
                  </div>

                  {/* Deliverables Spec Ledger */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
                          <Monitor size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Custom Domain & DNS Setup</div>
                          <div className="text-xs text-slate-500 mt-0.5">Assistance with selection, records & MX setup</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Included
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                          <Smartphone size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">24/7 Cloud Hosting & SSL</div>
                          <div className="text-xs text-slate-500 mt-0.5">Global edge servers with HTTPS certificates</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200">
                        Configured
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    100% Client Ownership
                  </span>
                  <span className="text-slate-900 font-semibold">Zero Ongoing Web Hostage Fees</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
