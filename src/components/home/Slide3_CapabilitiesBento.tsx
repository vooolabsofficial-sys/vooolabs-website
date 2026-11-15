import { Link } from 'react-router-dom';
import { Globe, Laptop, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const SERVICES = [
  {
    icon: Globe,
    title: 'All-Inclusive Business Websites',
    tag: 'Domain, 24/7 Hosting & Leads',
    description: 'Custom design, domain setup, 24/7 cloud hosting, and SSL security included. Engineered to turn mobile visitors into direct WhatsApp and phone inquiries.',
    accent: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.08)',
    link: '/services#websites',
  },
  {
    icon: Laptop,
    title: 'Custom Web Apps & Client Portals',
    tag: 'Customer & Member Portals',
    description: 'Customer accounts, member dashboards, and appointment booking workflows. Practical and affordable for small and mid-sized businesses in the AI era.',
    accent: '#3B82F6',
    glowColor: 'rgba(59, 130, 246, 0.08)',
    link: '/services#web-apps',
  },
  {
    icon: Cpu,
    title: 'Custom Business Software',
    tag: 'GST Billing & Operations',
    description: 'Replace messy spreadsheets and per-user SaaS fees with custom GST invoicing, customer inquiry pipelines, staff task tracking, and automated WhatsApp alerts.',
    accent: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.08)',
    link: '/services#custom-software',
  },
  {
    icon: Sparkles,
    title: 'AI Search Visibility & AI Ads',
    tag: 'Google SEO · AEO · Maps 3-Pack',
    description: 'Get recommended where customers search today: Google Search, ChatGPT, Gemini, Perplexity, and Google Maps—plus full setup for AI search ad campaigns.',
    accent: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.08)',
    link: '/services#google-presence',
  },
];

export default function Slide3_CapabilitiesBento() {
  return (
    <section 
      className="bg-white py-20 sm:py-28 px-4 sm:px-6 select-none relative border-b border-slate-200/80"
      aria-label="Studio Core Capabilities"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* EYEBROW */}
        <FadeIn delay={0} y={15}>
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2 text-center">
            CORE CAPABILITIES
          </span>
        </FadeIn>

        {/* HEADING */}
        <FadeIn delay={0.08} y={20}>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center leading-tight mb-4">
            Web Applications, Business Software & Search Visibility.
          </h2>
          <p className="font-sans font-normal text-base sm:text-lg text-slate-600 text-center max-w-2xl mx-auto mb-14 leading-relaxed">
            We engineer tailored digital systems that save your team hours of manual work every week and convert modern searchers into confirmed clients.
          </p>
        </FadeIn>

        {/* 4 CORE SERVICES IN CLEAN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {SERVICES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.08} y={20} className="w-full flex">
                <Link
                  to={item.link}
                  className="w-full rounded-3xl bg-[#FAFAFD] border border-slate-200/80 p-7 sm:p-8 hover:bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 border border-slate-200/60"
                        style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
                      >
                        <IconComp size={22} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-clash font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                      {item.title}
                    </h3>
                    <p className="font-sans font-normal text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 group-hover:translate-x-1.5 transition-transform duration-200 pt-4 border-t border-slate-200/60 relative z-10">
                    <span>Explore Deliverables & Scope</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
