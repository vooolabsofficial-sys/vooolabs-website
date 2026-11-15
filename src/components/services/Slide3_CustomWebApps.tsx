import { Layout, Check, ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide3_CustomWebApps() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss a Custom Web App / Client Portal project for my business.")}`;

  return (
    <section 
      id="web-apps"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 sm:py-24 border-t border-slate-200/80"
      aria-label="Custom Web Applications & Portals — VOOO LABS"
    >
      {/* REFINED AMBIENT GLOWS */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-sans font-bold text-xs tracking-[0.2em] text-blue-600 uppercase mb-3 text-left">
            02 / Customer Portals & Web Platforms
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <FadeIn delay={0.12} y={20}>
              <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                Custom Web Apps & Portals — <span className="text-blue-600">Practical in the AI Era</span>.
              </h2>
            </FadeIn>

            <FadeIn delay={0.18} y={20}>
              <p className="font-sans font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
                Customer-facing portals, student and member dashboards, appointment booking systems, and interactive web applications. In today’s AI era, custom web apps that previously cost lakhs are now practical and affordable for small and mid-sized businesses—engineered professionally without cutting corners.
              </p>
            </FadeIn>

            {/* VALUE BULLETS */}
            <FadeIn delay={0.25} y={20}>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Affordable Custom Engineering</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Leverage modern digital engineering workflows to build tailored web applications at a fraction of legacy agency costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">Secure Client Logins & Role Controls</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Give customers dedicated accounts to track orders or services, while your managers maintain complete administrative oversight.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-base text-slate-900">100% Cross-Device Responsiveness</h3>
                    <p className="font-sans text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Flawlessly rendered across desktop monitors, tablets, and smartphone browsers with zero app store download hurdles.
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <span>See what your project will cost</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span>See how it can help your business</span>
                </a>

                <div className="w-full sm:w-auto inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Code & Asset Ownership</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: WEB APP INTERFACE PREVIEW */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.25} y={20}>
              <div className="rounded-3xl bg-[#FAFAFD] border border-slate-200/80 p-6 sm:p-7 shadow-xs text-left relative overflow-hidden">
                
                {/* Browser Window Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-[11px] font-mono text-slate-500 ml-2">portal.client-platform.internal</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200">
                    Live Portal Session
                  </span>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Cloud Performance</div>
                    <div className="text-lg font-clash font-bold text-slate-900 mt-0.5">Fast Cloud Load</div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-0.5">High-Speed CDN Delivery</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Access Control</div>
                    <div className="text-lg font-clash font-bold text-blue-600 mt-0.5">Protected Logins</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">Role-Based Security</div>
                  </div>
                </div>

                {/* Application Modules */}
                <div className="space-y-2.5 mb-5">
                  <div className="p-3 rounded-xl border border-slate-100 bg-white shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                        <Layout size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Interactive Customer Portal</div>
                        <div className="text-[11px] text-slate-500">Self-service booking & order status</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                      24/7 Access
                    </span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-100 bg-white shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Server size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Automated Data Synchronization</div>
                        <div className="text-[11px] text-slate-500">Encrypted daily backups & instant sync</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Synchronized
                    </span>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Globe size={13} className="text-blue-600" />
                    Responsive Desktop & Mobile Web
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Production Ready
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
