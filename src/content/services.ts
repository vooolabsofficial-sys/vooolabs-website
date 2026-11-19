import { Globe, Laptop, Cpu, Sparkles } from 'lucide-react';
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

  // 3. Direct Business Value (Honest value commitments, zero fake metrics)
  roiBenefits: {
    heading: string;
    metrics: {
      value: string;
      label: string;
      detail: string;
    }[];
    highlights: string[];
  };

  // 4. Featured Projects (Empty by default — real client projects added only when live)
  featuredProjects: ServiceProject[];

  // 5. Core Deliverables (Plain-English business deliverables — zero framework/tech jargon)
  techStack: string[];
}

export const SERVICES: ServiceVertical[] = [
  // VERTICAL 1: WEBSITES
  {
    id: 'websites',
    slug: 'websites',
    title: 'All-Inclusive Business Websites',
    shortTitle: 'Websites',
    tagline: 'Custom design, domain setup, 24/7 cloud hosting & direct WhatsApp lead integration.',
    icon: Globe,
    badge: 'All-Inclusive Web Platform',
    accentColor: '#0284C7',
    gradientClass: 'text-slate-900',
    glowShadow: '',
    bgGradient: 'from-sky-500/10 via-blue-500/5 to-transparent',
    summary: 'High-trust, ultra-fast websites designed for small, mid-sized, and growing businesses to turn visitors into direct WhatsApp and phone inquiries. We handle the entire technical setup end-to-end—complete with domain setup, DNS, 24/7 cloud hosting, and SSL security.',
    
    whyYouNeedThis: {
      heading: 'Why Most Small & Mid-Sized Business Websites Fail to Convert',
      subheading: 'Outdated templates, slow mobile load speeds, and missing contact channels lose high-intent clients to your competitors every single day.',
      points: [
        {
          title: 'First Impressions Decide Business Deals',
          description: 'When potential clients hear about your business, they inspect your website first. A generic or outdated page creates immediate doubt about your service quality.',
          impact: 'A grounded, authoritative digital presence that commands trust and justifies premium pricing.',
        },
        {
          title: 'Slow Mobile Load Times Cause High Visitor Bounce',
          description: 'If your website takes more than 3 seconds to load on mobile data, over half your visitors leave and contact the next competitor.',
          impact: 'Engineered for sub-second load times across 4G and 5G mobile connections in India.',
        },
        {
          title: 'Friction-Heavy Forms Discourage Immediate Contact',
          description: 'Complex multi-step contact forms create unnecessary barriers between interested customers and your team.',
          impact: '1-Tap WhatsApp chat and direct phone calling triggers for instant customer conversations.',
        },
      ],
    },

    howWeHelp: {
      heading: 'Everything Included In Your Website Build',
      subheading: 'We handle the complete technical lifecycle so you never have to deal with hosting companies, DNS records, or broken plugins.',
      features: [
        {
          title: 'Custom Design & Full Functional Build',
          description: 'Bespoke layout and structure designed specifically around your service offerings, products, and customer journey—zero generic templates.',
          tech: 'Custom Design',
        },
        {
          title: 'Domain Setup & Complete DNS Configuration',
          description: 'Assistance with domain selection and complete configuration of DNS, MX email records, and routing so your web address works seamlessly.',
          tech: 'Domain & DNS',
        },
        {
          title: '24/7 Fast Cloud Hosting & SSL Security',
          description: 'High-availability modern cloud hosting with automated HTTPS encryption, global CDN delivery, and 99.9% uptime reliability.',
          tech: '24/7 Cloud Host',
        },
        {
          title: '1-Tap WhatsApp & Social Media Integration',
          description: 'Prominent, attractive contact actions that route interested visitors straight to your WhatsApp chat, phone lines, and social channels.',
          tech: 'WhatsApp Leads',
        },
        {
          title: 'Foundational Google SEO & AI Search Readiness',
          description: 'Clean semantic structure, metadata, OpenGraph cards, and schema markup so Google and conversational AI engines understand your business.',
          tech: 'SEO & AI Ready',
        },
      ],
    },

    roiBenefits: {
      heading: 'Honest, Verifiable Value Commitments',
      metrics: [
        { value: '100%', label: 'Code & Data Ownership', detail: 'Full intellectual property handover with zero vendor lock-in' },
        { value: 'Zero', label: 'Recurring Seat Licensing Fees', detail: 'Custom-built once around your exact workflow with zero ongoing seat tax' },
        { value: 'All-In-One', label: 'Domain, DNS & 24/7 Hosting Included', detail: 'Complete technical setup handled end-to-end' },
        { value: 'Honest', label: 'Workflow-Based Timelines', detail: 'We review your exact requirements first before committing to a delivery date' },
      ],
      highlights: [
        'Turn organic visitors and ad traffic into direct WhatsApp inquiries and customer calls',
        'Complete asset handover: your domain, DNS, and hosting accounts belong entirely to you',
        'Crisp, responsive presentation optimized across mobile phones, tablets, and desktop computers',
      ],
    },

    featuredProjects: [],

    techStack: [
      'Custom Design & Build',
      'Domain Setup & DNS',
      '24/7 Fast Cloud Hosting',
      'SSL Security Included',
      '1-Tap WhatsApp Inquiries',
      'Google SEO & AI Search Ready',
    ],
  },

  // VERTICAL 2: CUSTOM WEB APPS & CLIENT PORTALS
  {
    id: 'web-apps',
    slug: 'web-apps',
    title: 'Custom Web Apps & Client Portals',
    shortTitle: 'Web Apps',
    tagline: 'Customer-facing portals, member dashboards & booking platforms — practical in the AI era.',
    icon: Laptop,
    badge: 'Client & Member Portals',
    accentColor: '#3B82F6',
    gradientClass: 'text-slate-900',
    glowShadow: '',
    bgGradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    summary: 'Customer-facing portals, student and member dashboards, appointment booking systems, and interactive web applications. In today’s AI era, custom web apps that previously cost lakhs are now practical and affordable for small and mid-sized businesses—engineered professionally without cutting corners.',
    
    whyYouNeedThis: {
      heading: 'Why Generic SaaS Subscriptions and Spreadsheets Hold Back Growth',
      subheading: 'Managing customer requests through WhatsApp chats and manual spreadsheets leads to miscommunication, delayed service, and wasted staff hours.',
      points: [
        {
          title: 'Manual Coordination Wastes Valuable Staff Hours',
          description: 'Team members spend hours answering repetitive questions, confirming appointments, and sending status updates manually over the phone.',
          impact: 'A self-service portal where customers can log in, check progress, and download documents 24/7.',
        },
        {
          title: 'Expensive Monthly Subscriptions Penalize Growth',
          description: 'Most commercial SaaS tools charge steep per-user monthly seat fees that escalate as your team and client base expand.',
          impact: 'A custom web application built once around your exact business model with zero per-user seat penalties.',
        },
        {
          title: 'Customer Data Fragmented Across Multiple Files',
          description: 'Client records, booking schedules, and transaction histories scattered across Excel sheets risk permanent data loss.',
          impact: 'One secure, centralized cloud database accessible from any smartphone, tablet, or laptop.',
        },
      ],
    },

    howWeHelp: {
      heading: 'Custom Web Applications Built for Practical Use',
      subheading: 'Clean, intuitive web applications with dedicated logins for your customers, team members, and management.',
      features: [
        {
          title: 'Customer & Member Account Portals',
          description: 'Dedicated client accounts where customers can log in, view order or project status, download invoices, and access services securely.',
          tech: 'Client Portals',
        },
        {
          title: 'Interactive Booking, Scheduling & Intake',
          description: 'Guided booking workflows with instant availability checks, intake forms, and automated confirmation routing.',
          tech: 'Booking Engine',
        },
        {
          title: 'Granular Role-Based Permissions',
          description: 'Separate access controls for customers, operational staff, and business owners ensuring data security and confidentiality.',
          tech: 'Secure Permissions',
        },
        {
          title: 'Automated WhatsApp & Email Notifications',
          description: 'Trigger instant status updates, booking receipts, and payment reminders directly to your clients’ WhatsApp.',
          tech: 'Auto Alerts',
        },
        {
          title: 'Full Cross-Device Mobile & Desktop Access',
          description: 'Runs smoothly in any mobile or desktop web browser with zero app store installation friction.',
          tech: 'Phone & PC Ready',
        },
      ],
    },

    roiBenefits: {
      heading: 'Honest, Verifiable Value Commitments',
      metrics: [
        { value: '100%', label: 'Code & Data Ownership', detail: 'Full intellectual property handover with zero vendor lock-in' },
        { value: 'Zero', label: 'Recurring Seat Licensing Fees', detail: 'Custom-built once around your exact workflow with zero ongoing seat tax' },
        { value: 'All-In-One', label: 'Domain, DNS & 24/7 Hosting Included', detail: 'Complete technical setup handled end-to-end' },
        { value: 'Honest', label: 'Workflow-Based Timelines', detail: 'We review your exact requirements first before committing to a delivery date' },
      ],
      highlights: [
        'Affordable custom web application engineering tailored for growing business budgets',
        '24/7 client self-service significantly reduces repetitive support phone calls',
        'Built on robust modern cloud foundations with 100% intellectual property ownership',
      ],
    },

    featuredProjects: [],

    techStack: [
      'Custom Client Portal',
      'Secure User Accounts',
      'Role-Based Permissions',
      'Automated WhatsApp Alerts',
      'Centralized Cloud Database',
      'Mobile & Desktop Responsive',
    ],
  },

  // VERTICAL 3: CUSTOM BUSINESS SOFTWARE & INTERNAL OPERATIONS
  {
    id: 'software',
    slug: 'software',
    title: 'Custom Business Software & Internal Operations',
    shortTitle: 'Business Software',
    tagline: 'Custom GST invoicing, inquiry pipelines, staff task tracking & operations dashboards.',
    icon: Cpu,
    badge: 'Operations & Workflow Systems',
    accentColor: '#10B981',
    gradientClass: 'text-slate-900',
    glowShadow: '',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    summary: 'Internal workflow systems that replace messy Excel sheets, scattered WhatsApp notes, and expensive per-user monthly SaaS tools. Includes custom GST invoicing, inquiry pipelines, staff task tracking, and automated WhatsApp alerts—built to fit small, mid-sized, or large teams with 100% source code and data ownership.',
    
    whyYouNeedThis: {
      heading: 'Why Spreadsheets & Scattered WhatsApp Notes Slow Down Operations',
      subheading: 'Managing daily customer orders, staff assignments, and billing manually leads to costly mistakes, delayed invoices, and lack of business visibility.',
      points: [
        {
          title: 'Fragile Spreadsheets Lead to Costly Human Errors',
          description: 'Team members accidentally overwrite formulas, delete critical rows, and work on mismatched file versions.',
          impact: 'A single, reliable source of truth with automated daily cloud backups and zero file corruption.',
        },
        {
          title: 'Manual Invoicing & Disorganized Payment Tracking',
          description: 'Creating invoices manually in Word or Excel causes billing delays, calculation errors, and lost revenue from untracked payments.',
          impact: '1-Click GST-compliant tax invoicing with automated tracking of paid, partial, and pending balances.',
        },
        {
          title: 'Disorganized Daily Task Allocation',
          description: 'Daily assignments given over phone calls or WhatsApp groups get forgotten without clear accountability.',
          impact: 'Visual task boards where managers assign tasks and track completion status in real-time.',
        },
      ],
    },

    howWeHelp: {
      heading: 'Tailored Operations Tools Engineered for Your Team',
      subheading: 'We engineer internal business software molded 100% around your daily operating routine and team habits.',
      features: [
        {
          title: 'Custom GST Invoicing & Payment Tracking',
          description: 'Generate clean, professional GST tax invoices in seconds with instant PDF export and automated payment status logs.',
          tech: 'GST Invoicing',
        },
        {
          title: 'Customer Inquiry & Order Pipeline',
          description: 'Incoming customer leads and orders automatically organize into a structured visual pipeline with clear stage progression.',
          tech: 'Order Pipeline',
        },
        {
          title: 'Staff Task Assignment & Accountability',
          description: 'Assign work to individual employees, set deadlines, and monitor daily progress without micromanagement.',
          tech: 'Task Management',
        },
        {
          title: 'Automated Daily Business Summaries',
          description: 'Receive automated daily end-of-day summaries of revenue, completed orders, and pending follow-ups via WhatsApp or email.',
          tech: 'Daily Reports',
        },
        {
          title: 'Dedicated Cloud Database & Automated Backups',
          description: 'Your business records reside in a private, encrypted cloud database with automated daily snapshots and zero third-party snooping.',
          tech: 'Encrypted Backups',
        },
      ],
    },

    roiBenefits: {
      heading: 'Honest, Verifiable Value Commitments',
      metrics: [
        { value: '100%', label: 'Code & Data Ownership', detail: 'Full intellectual property handover with zero vendor lock-in' },
        { value: 'Zero', label: 'Recurring Seat Licensing Fees', detail: 'Custom-built once around your exact workflow with zero ongoing seat tax' },
        { value: 'All-In-One', label: 'Domain, DNS & 24/7 Hosting Included', detail: 'Complete technical setup handled end-to-end' },
        { value: 'Honest', label: 'Workflow-Based Timelines', detail: 'We review your exact requirements first before committing to a delivery date' },
      ],
      highlights: [
        'Replace disconnected spreadsheets and WhatsApp notes with one unified business dashboard',
        'Eliminate recurring per-user monthly SaaS fees—you own the software completely',
        'Secure browser-based access from any smartphone, tablet, or office desktop computer',
      ],
    },

    featuredProjects: [],

    techStack: [
      'Custom GST Invoicing',
      'Inquiry & Order Pipeline',
      'Staff Task Boards',
      'Automated WhatsApp Reports',
      'Encrypted Cloud Backups',
      'Zero Monthly Seat Fees',
    ],
  },

  // VERTICAL 4: AI SEARCH VISIBILITY, AI ADS & GOOGLE PRESENCE
  {
    id: 'ai-growth',
    slug: 'ai-growth',
    title: 'AI Search Visibility, AI Ads & Google Presence',
    shortTitle: 'AI Growth & Search',
    tagline: 'Google SEO, ChatGPT & Gemini recommendations, Local Maps 3-Pack & AI ad campaigns.',
    icon: Sparkles,
    badge: 'Search & AI Discovery',
    accentColor: '#8B5CF6',
    gradientClass: 'text-slate-900',
    glowShadow: '',
    bgGradient: 'from-purple-500/10 via-indigo-500/5 to-transparent',
    summary: 'Helping businesses get discovered and recommended where modern customers actually search today: ranking on Google Search, getting cited on ChatGPT, Gemini & Perplexity (AEO), dominating local Google Maps (GEO), and setting up targeted ad campaigns on emerging AI search platforms with conversion tracking.',
    
    whyYouNeedThis: {
      heading: 'Where Your Customers Search Has Changed Forever',
      subheading: 'Customers no longer rely solely on traditional search links. They ask conversational AI assistants, check Google AI Overviews, and use Google Maps to find nearby businesses.',
      points: [
        {
          title: 'Invisible to AI Search Engines & Conversational Assistants',
          description: 'If your business information is not structured for machine readability, AI assistants like ChatGPT, Gemini, and Perplexity will cite your competitors instead.',
          impact: 'Structured Schema.org data and entity optimization so AI engines recommend your business.',
        },
        {
          title: 'Competitors Capturing High-Intent Local Searches',
          description: 'When potential clients search for nearby services on Google Maps, businesses with verified, optimized profiles get the phone calls and store visits.',
          impact: 'Google Business Profile optimization to capture top local map placement and high-intent calls.',
        },
        {
          title: 'Wasted Money on Poorly Targeted Generic Ad Campaigns',
          description: 'Running generic ads without understanding modern AI ad networks or without dedicated landing pages wastes substantial marketing budget.',
          impact: 'Targeted ad campaign setup on emerging AI search platforms paired with high-converting landing pages.',
        },
      ],
    },

    howWeHelp: {
      heading: '4 Core Pillars of Modern Search & AI Discovery',
      subheading: 'A grounded, end-to-end strategy engineered to capture high-intent customer inquiries from traditional and AI engines alike.',
      features: [
        {
          title: 'Google SEO (Search Engine Optimization)',
          description: 'Targeted high-intent keyword research, technical performance tuning, fast load times, and on-page optimization so Google indexes and surfaces your business for high-intent search queries.',
          tech: 'Google SEO',
        },
        {
          title: 'AEO (AI Engine Optimization)',
          description: 'Structuring your business knowledge, pricing, and services with machine-readable data so ChatGPT, Google Gemini, and Perplexity actively recommend your business.',
          tech: 'AEO Optimization',
        },
        {
          title: 'GEO (Local Map & Near-Me Optimization)',
          description: 'Google Business Profile verification, localized city keywords, accurate map pins, and review strategies so nearby customers find and call you first.',
          tech: 'Local Maps GEO',
        },
        {
          title: 'AI Platform Ads Setup & Lead Tracking',
          description: 'Setting up targeted ad campaigns on emerging AI search platforms (including Google AI Overviews and conversational ad channels) paired with dedicated conversion landing pages.',
          tech: 'AI Ads & Tracking',
        },
      ],
    },

    roiBenefits: {
      heading: 'Honest, Verifiable Value Commitments',
      metrics: [
        { value: '100%', label: 'Code & Data Ownership', detail: 'Full intellectual property handover with zero vendor lock-in' },
        { value: 'Zero', label: 'Recurring Seat Licensing Fees', detail: 'Custom-built once around your exact workflow with zero ongoing seat tax' },
        { value: 'All-In-One', label: 'Domain, DNS & 24/7 Hosting Included', detail: 'Complete technical setup handled end-to-end' },
        { value: 'Honest', label: 'Workflow-Based Timelines', detail: 'We review your exact requirements first before committing to a delivery date' },
      ],
      highlights: [
        'Be discovered and recommended when customers search on Google, ChatGPT, Google Gemini, or Google Maps',
        'Direct phone call and WhatsApp lead routing ensures zero inquiries slip through the cracks',
        'Targeted AI ad campaign setup configured professionally with conversion analytics',
      ],
    },

    featuredProjects: [],

    techStack: [
      'Google Search SEO',
      'ChatGPT & Gemini AEO',
      'Google Maps 3-Pack Optimization',
      'AI Platform Ads Setup',
      'Dedicated Landing Pages',
      'Direct Lead Call Tracking',
    ],
  },
];

export function getService(id: string): ServiceVertical | undefined {
  return SERVICES.find(
    (s) =>
      s.id === id ||
      s.slug === id ||
      (id === 'custom-software' && s.id === 'software') ||
      (id === 'google-presence' && s.id === 'ai-growth')
  );
}
