import { Globe, Laptop, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceProject {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  badge?: string;
  accentColor: string;
}

export interface ServiceVertical {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  icon: LucideIcon;
  badge: string;
  accentColor: string;
  gradientClass: string;
  glowShadow: string;
  bgGradient: string;
  summary: string;
  
  // 1. The Business Problem
  whyYouNeedThis: {
    heading: string;
    subheading: string;
    points: {
      title: string;
      description: string;
      impact: string;
    }[];
  };

  // 2. How We Help
  howWeHelp: {
    heading: string;
    subheading: string;
    features: {
      title: string;
      description: string;
      tech: string;
    }[];
  };

  // 3. Direct Business Value
  roiBenefits: {
    heading: string;
    metrics: {
      value: string;
      label: string;
      detail: string;
    }[];
    highlights: string[];
  };

  // 4. Featured Projects
  featuredProjects: ServiceProject[];

  // 5. Core Deliverables
  techStack: string[];
}

export const SERVICES: ServiceVertical[] = [
  {
    id: 'web-apps',
    slug: 'web-apps',
    title: 'Custom Web Apps & Business Portals',
    shortTitle: 'Web Apps',
    tagline: 'Custom management portals, billing systems & client dashboards.',
    icon: Globe,
    badge: 'Custom Business Software',
    accentColor: '#3B82F6',
    gradientClass: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent',
    glowShadow: 'hover:shadow-[0_16px_40px_rgba(59,130,246,0.18)]',
    bgGradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    summary: 'We build custom web software designed around how your business actually operates — from staff management and billing to client tracking and automated reports.',
    
    whyYouNeedThis: {
      heading: 'Why Spreadsheets & Generic Software Hurt Your Growth',
      subheading: 'Managing a growing business through WhatsApp groups and Excel sheets causes lost customer data, billing confusion, and wasted hours every week.',
      points: [
        {
          title: 'Excel Sheets Cause Human Errors',
          description: 'Team members accidentally delete rows, formulas break, and managers never know which record is updated.',
          impact: 'Centralized database accessible securely from any phone or laptop.',
        },
        {
          title: 'Ready-Made Software Doesn\'t Fit Your Needs',
          description: 'Most monthly subscription tools force you to pay per user and contain hundreds of confusing buttons you will never use.',
          impact: 'Simple, tailored system with only the features your business needs.',
        },
        {
          title: 'No Real-Time Visibility on Business',
          description: 'Founders must ask staff at the end of the day to know daily sales, pending orders, or open client requests.',
          impact: 'Live dashboard showing daily sales and tasks at a glance.',
        },
      ],
    },

    howWeHelp: {
      heading: 'What We Build Specifically For Your Business',
      subheading: 'Clean, fast, and easy-to-use web applications with simple logins for your staff, managers, and clients.',
      features: [
        {
          title: 'Role-Based Access for Staff & Managers',
          description: 'Each staff member sees only their assigned tasks, while the owner has full control over revenue, reports, and settings.',
          tech: 'Secure Permissions',
        },
        {
          title: 'Automated WhatsApp & Email Notifications',
          description: 'Send instant invoice receipts, payment reminders, and order updates directly to your customers\' WhatsApp.',
          tech: 'Auto Alerts',
        },
        {
          title: 'Works Smoothly on Mobile & Desktop',
          description: 'Open your business portal from your phone anytime, anywhere without needing a complex setup.',
          tech: 'Phone & PC Ready',
        },
      ],
    },

    roiBenefits: {
      heading: 'Direct Benefits to Your Business',
      metrics: [
        { value: '3+ hrs', label: 'Saved Daily Per Person', detail: 'Automates manual bookkeeping and report generation.' },
        { value: '100%', label: 'Data Security & Ownership', detail: 'You own your system and customer database completely.' },
        { value: '0₹', label: 'Hidden Per-User Monthly Fees', detail: 'One-time custom build without recurring per-seat penalties.' },
      ],
      highlights: [
        'Eliminate 80% of repetitive daily paperwork and manual entries',
        'Check pending payments, orders, and team progress in seconds',
        'Full customer records safely stored in one secure location',
      ],
    },

    featuredProjects: [
      {
        title: 'Custom Business Management & Billing Portal',
        subtitle: 'Tailored Client Portal',
        description: 'Complete web system for managing customer accounts, generating instant PDF tax invoices, tracking staff tasks, and automated WhatsApp payment reminders.',
        tags: ['Client Portal', 'Invoicing', 'WhatsApp Alerts', 'Admin Dashboard'],
        badge: 'Custom Solution',
        accentColor: '#3B82F6',
      },
    ],

    techStack: ['Custom Web Portal', 'Admin Dashboard', 'WhatsApp Integration', 'Secure Database', 'PDF Invoicing'],
  },

  {
    id: 'websites',
    slug: 'websites',
    title: 'High-Converting Business Websites',
    shortTitle: 'Websites',
    tagline: 'Modern, fast corporate websites that bring in real client inquiries.',
    icon: Laptop,
    badge: 'Sales & Lead Generation',
    accentColor: '#8B5CF6',
    gradientClass: 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent',
    glowShadow: 'hover:shadow-[0_16px_40px_rgba(139,92,246,0.18)]',
    bgGradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
    summary: 'We build beautiful, ultra-fast websites designed to turn visitors into paying clients with compelling storytelling and high-converting layouts.',
    
    whyYouNeedThis: {
      heading: 'Why an Outdated Website Loses You Clients',
      subheading: 'When potential clients hear about your business, they search online. A slow, outdated, or confusing website makes them choose your competitor.',
      points: [
        {
          title: 'First Impressions Decide the Deal',
          description: 'High-value clients judge your trustworthiness and professionalism within seconds of opening your website.',
          impact: 'Creates instant credibility and brand authority in your market.',
        },
        {
          title: 'Slow Websites Lose Inquiries',
          description: 'If a website takes more than 3 seconds to load on mobile, 50% of visitors leave immediately.',
          impact: 'Opens instantly on all 4G and 5G mobile connections.',
        },
        {
          title: 'No Direct Contact Channel',
          description: 'Websites with complicated forms make customers leave without contacting you.',
          impact: '1-click WhatsApp and direct calling buttons for instant customer inquiries.',
        },
      ],
    },

    howWeHelp: {
      heading: 'How We Build Your High-Ranking Online Presence',
      subheading: 'Crafted with premium visual appeal, persuasive conversion copy, and advanced SEO, AEO & GEO discovery ranking.',
      features: [
        {
          title: 'Google SEO (Search Engine Optimization)',
          description: 'Keyword research, meta tags, schema.org markup, and sub-1s load speeds so Google ranks you on Page #1 for customer searches.',
          tech: 'Google #1 SEO',
        },
        {
          title: 'AEO (AI Engine Optimization)',
          description: 'We structure your content so conversational AI engines like ChatGPT, Google Gemini, Perplexity & Claude cite and recommend your business when potential clients ask questions.',
          tech: 'AI Recommendation (AEO)',
        },
        {
          title: 'GEO (Generative & Local Map Optimization)',
          description: 'Google Business Profile, map pin optimization, and localized geo-targeted keywords so nearby local clients discover your shop or company first.',
          tech: 'Local Map Ranking (GEO)',
        },
        {
          title: '1-Click Direct WhatsApp & Calling Lead Routing',
          description: 'Prominent, attractive 1-tap WhatsApp and calling buttons so customers reach you within seconds with 0 friction.',
          tech: 'Instant WhatsApp Leads',
        },
      ],
    },

    roiBenefits: {
      heading: 'Direct Benefits to Your Business',
      metrics: [
        { value: '< 1s', label: 'Instant Mobile Page Load', detail: 'Smooth experience even on slow mobile networks.' },
        { value: '3x', label: 'More Customer Inquiries', detail: 'Prominent 1-click WhatsApp and call action buttons.' },
        { value: 'Top', label: 'Google, AI & Local Maps Visibility', detail: 'Optimized for Google SEO, ChatGPT AEO, and local GEO maps.' },
      ],
      highlights: [
        'Turn social media visitors and ad traffic into direct WhatsApp inquiries',
        'Be discovered when customers search on Google, ChatGPT, Perplexity, or Google Maps',
        'Professional business presence with authoritative brand storytelling that commands trust',
      ],
    },

    featuredProjects: [
      {
        title: 'VOOO LABS Studio Platform',
        subtitle: 'Official Software Studio',
        description: 'Ultra-fast modern platform with bilingual messaging, responsive layout, and direct client inquiry workflows.',
        tags: ['Corporate Site', 'SEO Optimized', 'Mobile Friendly', 'Bilingual'],
        badge: 'Live Platform',
        accentColor: '#8B5CF6',
      },
      {
        title: 'Vrushabh Shinde — Founder Portfolio',
        subtitle: 'Creative Technologist Showcase',
        description: 'Personal portfolio highlighting software architecture, client projects, and product engineering.',
        tags: ['Portfolio', 'Case Studies', 'Interactive'],
        liveUrl: 'https://share.google/CA0DOimc3VLYNbEwl',
        badge: 'Live Portfolio',
        accentColor: '#EC4899',
      },
    ],

    techStack: ['Mobile Responsive', 'Google SEO Ready', 'WhatsApp Integration', 'Ultra-Fast Load', 'Bilingual Support'],
  },

  {
    id: 'software',
    slug: 'software',
    title: 'Custom Business Software & Management Portals',
    shortTitle: 'Business Software',
    tagline: 'Internal workflow tools, automated invoicing, and operations dashboards.',
    icon: Cpu,
    badge: 'Operations & Workflow Systems',
    accentColor: '#10B981',
    gradientClass: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 bg-clip-text text-transparent',
    glowShadow: 'hover:shadow-[0_16px_40px_rgba(16,185,129,0.18)]',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    summary: 'We engineer tailor-made business management systems, automated invoicing tools, and custom workflow dashboards that replace chaotic spreadsheets and generic SaaS retainers.',
    
    whyYouNeedThis: {
      heading: 'Why Spreadsheets & Generic SaaS Slow Down Operations',
      subheading: 'Scattered customer inquiries, missing follow-ups, and disconnected billing tools cost businesses dozens of productive hours every week.',
      points: [
        {
          title: 'Fragmented Tools Cause Bottlenecks',
          description: 'Using separate tools for notes, billing, and customer records leads to miscommunication and delayed fulfillment.',
          impact: 'One unified custom system designed specifically for your company workflow.',
        },
        {
          title: 'Recurring Per-User Licensing Adds Up Fast',
          description: 'Most SaaS tools penalize business growth with escalating monthly seat charges for features you do not use.',
          impact: 'A bespoke platform you own 100% with zero recurring seat fees.',
        },
        {
          title: 'Lack of Automated Invoicing & Tracking',
          description: 'Manual invoice generation and payment tracking waste management time and cause accounting discrepancies.',
          impact: 'Automated GST-compliant billing and real-time revenue visibility.',
        },
      ],
    },

    howWeHelp: {
      heading: 'How We Build Custom Operations Software',
      subheading: 'Bespoke web tools engineered to centralize operations, automate routine tasks, and provide crystal-clear business oversight.',
      features: [
        {
          title: 'Automated Customer & Order Pipelines',
          description: 'Incoming inquiries and client orders automatically route into an organized Kanban pipeline with instant notifications.',
          tech: 'Live Order Pipeline',
        },
        {
          title: 'Role-Based Team Access & Security',
          description: 'Granular permissions ensure employees only access their assigned tasks, while management maintains complete financial control.',
          tech: 'Role-Based Security',
        },
        {
          title: 'Automated GST Invoicing & Payment Tracking',
          description: 'Generate professional, compliant tax invoices in one click with automated tracking of paid and pending amounts.',
          tech: 'Automated Billing',
        },
      ],
    },

    roiBenefits: {
      heading: 'Direct Benefits to Your Business',
      metrics: [
        { value: '4+ hrs', label: 'Saved Daily Across Staff', detail: 'Automates manual data entry and routine status reporting.' },
        { value: '100%', label: 'Source Code & Data Ownership', detail: 'Full intellectual property rights with zero vendor lock-in.' },
        { value: '₹0', label: 'Monthly Per-Seat Licensing', detail: 'Bespoke software built once and owned forever.' },
      ],
      highlights: [
        'Centralize orders, staff tasks, and client records in one secure portal',
        'Eliminate manual mistakes in invoicing and customer tracking',
        'Live dashboard accessible securely from any desktop, tablet, or phone browser',
      ],
    },

    featuredProjects: [
      {
        title: 'B2B Operations & Billing Management Portal',
        subtitle: 'Custom Business Software',
        description: 'Comprehensive operational portal featuring automated inquiry intake, staff assignment routing, GST tax invoice generation, and financial reporting.',
        tags: ['Business Portal', 'Invoicing Engine', 'Workflow Automation', 'Admin Dashboard'],
        badge: 'Custom Client System',
        accentColor: '#10B981',
      },
    ],

    techStack: ['Custom Web Portal', 'Admin Dashboard', 'Workflow Engine', 'GST Invoicing', 'Secure Database'],
  },
];

export function getService(id: string): ServiceVertical | undefined {
  return SERVICES.find((s) => s.id === id || s.slug === id);
}
