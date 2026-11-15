import { ShieldCheck, Check, ArrowRight, MessageSquare, Database, Layers, CheckCircle2, Lock, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';
import { COMPANY } from '../../content/company';

export default function Slide2_CustomSoftware() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello VOOO LABS, I want to discuss a Custom Business Software system tailored for my company.")}`;

  return (
    <section 
      id="custom-software"
      className="snap-section min-h-screen bg-[#F8F9FC] flex flex-col justify-center relative overflow-hidden select-none py-20 lg:py-28 border-t border-slate-200/80"
      aria-label="Custom Business Software & Operations — VOOO LABS"
    >
      {/* Anchor alias for #software */}
      <span id="software" className="sr-only" aria-hidden="true" />

      {/* REFINED AMBIENT ACCENTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION EYEBROW */}
        <FadeIn delay={0.05} y={15}>
          <div className="font-mono text-xs font-medium text-emerald-600 uppercase tracking-wider mb-2 text-left">
            03 / Operations & Internal Workflow Systems
          </div>
        </FadeIn>

        {/* TWO-COLUMN SHOWCASE (STRICT LEFT-ALIGNMENT & EQUAL-HEIGHT INTERNAL BASELINES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: THE PROPOSITION */}
          <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-5">
              <FadeIn delay={0.12} y={20}>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                  Custom Business Software Built Around <span className="shimmer-text">Your Workflow</span>.
                </h2>
              </FadeIn>

              <FadeIn delay={0.18} y={20}>
                <p className="text-base leading-relaxed text-slate-600">
                  Replace fragile Excel sheets, scattered WhatsApp notes, and expensive per-user monthly SaaS tools with one unified business operations platform. We engineer custom systems molded 100% to your daily routine—built for small, mid-sized, and growing teams with complete source code and data ownership.
                </p>
              </FadeIn>

              {/* VALUE BULLETS (STRICT 4-TIER TYPOGRAPHY SCALE) */}
              <FadeIn delay={0.25} y={20}>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">1-Click GST Invoicing & Order Pipelines</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Generate professional tax invoices in seconds, log customer payments, and track order stages in real time without spreadsheet errors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">₹0 Monthly Per-User Seat Rent</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Never pay escalating monthly fees per employee to generic software companies. Built once for your exact business and owned 100% forever.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200 mt-1">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug text-slate-900">Staff Task Tracking & WhatsApp Alerts</h3>
                      <p className="text-base leading-relaxed text-slate-600 mt-1">
                        Assign tasks to ground staff, track deadlines, and receive automated daily business summaries delivered straight to your WhatsApp.
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
                  className="btn-3d-base btn-3d-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-sm cursor-pointer"
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
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>See how it can help your business</span>
                </a>

                <div className="w-full inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Source Code & Data Handover</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: ENTERPRISE OPERATIONS MOCKUP (MINIMAL, GENEROUSLY PADDED & EQUAL HEIGHT) */}
          <div className="lg:col-span-6 flex">
            <FadeIn delay={0.25} y={20} className="w-full flex">
              <div className="rounded-3xl bg-white border border-slate-200/80 shadow-2xs p-7 sm:p-8 text-left w-full flex flex-col justify-between">
                
                <div>
                  {/* Window Chrome Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="text-xs font-mono text-slate-500 ml-2">internal.operations / dashboard</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Live System · 100% Owned
                    </span>
                  </div>

                  {/* Dashboard Metrics Row */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="p-4 rounded-2xl bg-[#FAFAFD] border border-slate-200/80">
                      <div className="text-xs uppercase font-mono text-slate-500 tracking-wider">License Model</div>
                      <div className="text-lg font-bold text-slate-900 mt-1">₹0 Monthly Rent</div>
                      <div className="text-xs text-emerald-600 font-medium mt-0.5">Perpetual Asset Ownership</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAFAFD] border border-slate-200/80">
                      <div className="text-xs uppercase font-mono text-slate-500 tracking-wider">Synchronization</div>
                      <div className="text-lg font-bold text-blue-600 mt-1">Real-Time</div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">Phone & Desktop Synced</div>
                    </div>
                  </div>

                  {/* Tailored Business Modules */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                          <Layers size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Daily Workflow & Task Module</div>
                          <div className="text-xs text-slate-500 mt-0.5">Molded 100% to your staff habits</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Active
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                          <RefreshCw size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">GST Invoicing & Payment Tracker</div>
                          <div className="text-xs text-slate-500 mt-0.5">1-Click PDF invoices & live balances</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200">
                        Synced
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-100 bg-[#FAFAFD] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                          <Lock size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Encrypted Cloud Database</div>
                          <div className="text-xs text-slate-500 mt-0.5">Automated daily secure snapshots</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-purple-50 text-purple-700 border border-purple-200">
                        Protected
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Database size={13} className="text-emerald-600" />
                    Encrypted Cloud Storage
                  </span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Zero Vendor Lock-In
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
