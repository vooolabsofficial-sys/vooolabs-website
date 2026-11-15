import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const DELIVERABLES_SPEC = [
  { item: 'Custom Visual Design & Full Functional Build', status: 'INCLUDED', note: 'Bespoke layout, zero generic templates' },
  { item: 'Domain Registration & Complete DNS Routing', status: 'INCLUDED', note: 'Email records, MX, and domain setup' },
  { item: '24/7 Fast Cloud Hosting & SSL Security', status: 'INCLUDED', note: 'High-speed cloud servers with HTTPS' },
  { item: '1-Tap WhatsApp & Phone Lead Routing', status: 'INCLUDED', note: 'Direct mobile inquiry conversion' },
  { item: 'Google SEO & ChatGPT AEO Discovery Readiness', status: 'INCLUDED', note: 'Structured business data for search & AI' },
  { item: 'Monthly Per-User Software Seat Fees', status: '₹0 FOREVER', note: 'Custom software built once, owned forever' },
  { item: 'Source Code & Client Data Handover', status: '100% OWNED', note: 'Full intellectual property transfer' },
];

const CORE_SERVICES = [
  {
    number: '01',
    title: 'All-Inclusive Business Websites',
    tag: 'Web Platform & Leads',
    description: 'Custom design, domain, DNS, 24/7 hosting, and 1-tap WhatsApp lead triggers handled end-to-end.',
    accent: '#0284C7',
    icon: Globe,
    link: '/services#websites',
  },
  {
    number: '02',
    title: 'Custom Web Apps & Portals',
    tag: 'Customer & Member Accounts',
    description: 'Self-service customer portals, appointment booking systems, and dashboards—affordable in the AI era.',
    accent: '#3B82F6',
    icon: Laptop,
    link: '/services#web-apps',
  },
  {
    number: '03',
    title: 'Custom Business Software',
    tag: 'GST Billing & Operations',
    description: 'Replaces messy spreadsheets with 1-click GST invoices, order pipelines, and staff task tracking.',
    accent: '#10B981',
    icon: Cpu,
    link: '/services#custom-software',
  },
  {
    number: '04',
    title: 'AI Search Visibility & AI Ads',
    tag: 'Google SEO, AEO & Maps',
    description: 'Recommended on ChatGPT, Gemini, Perplexity, and Google Maps—plus targeted AI search ad campaigns.',
    accent: '#8B5CF6',
    icon: Sparkles,
    link: '/seo-ai',
  },
];

export default function Slide3_CapabilitiesBento() {
  return (
    <section 
      className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none relative border-b border-slate-200/80"
      aria-label="Studio Core Capabilities & All-Inclusive Deliverables"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <FadeIn delay={0} y={15}>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2 text-center">
              CORE CAPABILITIES & ALL-INCLUSIVE STANDARDS
            </span>
          </FadeIn>
          <FadeIn delay={0.08} y={20}>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center leading-tight mb-4">
              Bespoke Systems. <span className="text-blue-600">Zero Technical Headaches.</span>
            </h2>
            <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
              We design and engineer grounded digital platforms tailored around how your business actually operates—delivering every technical component all-inclusive.
            </p>
          </FadeIn>
        </div>

        {/* ASYMMETRIC SPLIT: LEFT = 4 EDITORIAL SERVICES ROWS, RIGHT = ARCHITECTURAL SPEC SHEET */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT 60%: NUMBERED EDITORIAL SERVICE ROWS */}
          <div className="lg:col-span-7 space-y-3 text-left">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 px-1">
              Core Engineering Verticals
            </div>

            {CORE_SERVICES.map((serv, idx) => {
              const IconComp = serv.icon;
              return (
                <FadeIn key={serv.number} delay={idx * 0.08} y={15}>
                  <Link
                    to={serv.link}
                    className="block p-5 sm:p-6 rounded-2xl bg-[#FAFAFD] border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-slate-200/60 mt-0.5 group-hover:scale-105 transition-transform"
                          style={{ backgroundColor: `${serv.accent}14`, color: serv.accent }}
                        >
                          <IconComp size={18} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-xs font-bold text-slate-500">{serv.number}</span>
                            <span className="text-slate-300">/</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/60">
                              {serv.tag}
                            </span>
                          </div>
                          <h3 className="font-clash font-bold text-lg sm:text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                            {serv.title}
                          </h3>
                          <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                            {serv.description}
                          </p>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center shrink-0 text-slate-400 group-hover:text-blue-600 group-hover:border-blue-300 transition-colors shadow-2xs">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          {/* RIGHT 40%: ALL-INCLUSIVE DELIVERABLES ARCHITECTURAL SPEC SHEET */}
          <div className="lg:col-span-5 text-left">
            <FadeIn delay={0.2} y={20}>
              <div className="rounded-3xl border border-slate-200/80 bg-[#FAFAFD] p-6 sm:p-7 shadow-xs relative overflow-hidden">
                
                {/* SPEC SHEET HEADER */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
                      All-Inclusive Spec Sheet
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-white text-emerald-700 border border-slate-200">
                    Standard Scope
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-600 leading-relaxed mb-5">
                  Every project delivered by VOOO LABS includes full operational setup so the business owner never has to navigate domain settings or server consoles.
                </p>

                {/* ARCHITECTURAL RECEIPT / SPEC SHEET WITH DOTTED LEADER LINES */}
                <div className="space-y-3 font-mono text-xs">
                  {DELIVERABLES_SPEC.map((spec, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-slate-800 font-medium truncate shrink-0">
                          {spec.item}
                        </span>
                        <div className="flex-1 border-b border-dotted border-slate-300 mx-1" aria-hidden="true" />
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 border ${
                          spec.status === '₹0 FOREVER' 
                            ? 'bg-purple-50 text-purple-700 border-purple-200'
                            : spec.status === '100% OWNED'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}>
                          {spec.status}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-600 font-sans pl-0.5">
                        {spec.note}
                      </div>
                    </div>
                  ))}
                </div>

                {/* SPEC FOOTER SUMMARY */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    Zero Agency Lock-In
                  </span>
                  <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-bold font-sans">
                    Get custom scope →
                  </Link>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
