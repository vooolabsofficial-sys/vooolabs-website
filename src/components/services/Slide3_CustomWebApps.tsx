import { Check, ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, Server, Globe } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import LiquidButton from '../shared/LiquidButton';
import { COMPANY } from '../../content/company';

export default function Slide3_CustomWebApps() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss a Custom Web App / Client Portal project for my business.")}`;

  return (
    <section 
      id="web-apps"
      className="snap-section min-h-screen bg-white flex flex-col justify-center relative overflow-hidden select-none py-20 lg:py-28 border-t border-slate-200/80"
      aria-label="Custom Web Applications & Portals — VOOO LABS"
    >
      {/* REFINED AMBIENT GLOWS */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-mono text-xs font-bold text-purple-600 uppercase tracking-widest mb-2.5 text-left">
            02 / Customer Portals & Web Platforms
          </div>
        </FadeIn>

        {/* TWO-COLUMN EDITORIAL SHOWCASE (STRICT LEFT-ALIGNMENT & EQUAL-HEIGHT INTERNAL BASELINES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-5">
              <FadeIn delay={0.12} y={20}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                  Custom Web Apps & Portals — <span className="shimmer-text">Practical in the AI Era</span>.
                </h2>
              </FadeIn>

              <FadeIn delay={0.18} y={20}>
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                  Customer-facing portals, student and member dashboards, appointment booking systems, and interactive web applications. In today’s AI era, custom web apps that previously cost lakhs are now practical and affordable for small and mid-sized businesses—engineered professionally without cutting corners.
                </p>
              </FadeIn>

              {/* VALUE BULLETS (STRICT 4-TIER TYPOGRAPHY SCALE) */}
              <FadeIn delay={0.25} y={20}>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">Affordable Custom Engineering</h3>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 mt-1">
                        Leverage modern digital engineering workflows to build tailored web applications at a fraction of legacy agency costs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">Secure Client Logins & Role Controls</h3>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 mt-1">
                        Give customers dedicated accounts to track orders or services, while your managers maintain complete administrative oversight.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">100% Cross-Device Responsiveness</h3>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 mt-1">
                        Flawlessly rendered across desktop monitors, tablets, and smartphone browsers with zero app store download hurdles.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ACTION TRIGGERS (MATCHING HOME PAGE LIQUID BUTTONS) */}
            <FadeIn delay={0.32} y={15}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <LiquidButton
                  to="/contact"
                  variant="gradient"
                  rounded="pill"
                  size="md"
                  magnetic={true}
                >
                  <span>See what your project will cost</span>
                  <ArrowRight size={15} />
                </LiquidButton>

                <LiquidButton
                  href={whatsappUrl}
                  variant="secondary"
                  rounded="pill"
                  size="md"
                  magnetic={true}
                >
                  <MessageSquare size={15} className="text-purple-600" />
                  <span>See how it can help your business</span>
                </LiquidButton>

                <div className="w-full inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Source Code & Asset Ownership</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: WEB APP INTERFACE PREVIEW (EQUAL-HEIGHT & GENEROUSLY PADDED) */}
          <div className="lg:col-span-6 flex">
            <FadeIn delay={0.25} y={20} className="w-full flex">
              <div className="rounded-[24px] bg-[#F8F9FC] border border-slate-200/80 shadow-2xs p-7 sm:p-8 text-left w-full flex flex-col justify-between">
                
                <div>
                  {/* Browser Window Header */}
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="text-xs font-mono text-slate-500 ml-2">portal.client-platform.internal</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium uppercase bg-purple-50 text-purple-700 border border-purple-200">
                      Live Portal Session
                    </span>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                      <div className="text-xs uppercase font-mono text-slate-500 tracking-wider">Cloud Performance</div>
                      <div className="text-lg font-bold text-slate-900 mt-1">Fast Cloud Load</div>
                      <div className="text-xs text-emerald-600 font-medium mt-0.5">High Reliability</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                      <div className="text-xs uppercase font-mono text-slate-500 tracking-wider">Seat Licensing</div>
                      <div className="text-lg font-bold text-purple-600 mt-1">₹0 / month</div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">No Per-User Rent</div>
                    </div>
                  </div>

                  {/* Portal Features Ledger */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-xl border border-slate-200/70 bg-white flex items-center justify-between shadow-2xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                          <Globe size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Dedicated Customer Accounts</div>
                          <div className="text-xs text-slate-500 mt-0.5">Self-service orders, bookings & history</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Included
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200/70 bg-white flex items-center justify-between shadow-2xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                          <Server size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Managed Cloud Database</div>
                          <div className="text-xs text-slate-500 mt-0.5">Scalable server architecture included</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-purple-50 text-purple-700 border border-purple-200">
                        Standard
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-purple-600" />
                    Built for Growing Teams
                  </span>
                  <span className="text-slate-900 font-semibold">100% Owned · Zero Software Rent</span>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
