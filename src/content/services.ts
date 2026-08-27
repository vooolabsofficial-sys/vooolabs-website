import { Globe, Laptop, Cpu, Smartphone } from 'lucide-react';
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
  
  // 1. The Business Problem (व्यवसायाची अडचण)
  whyYouNeedThis: {
    heading: string;
    subheading: string;
    points: {
      title: string;
      description: string;
      impact: string;
    }[];
  };

  // 2. How We Help (आम्ही काय बनवून देतो)
  howWeHelp: {
    heading: string;
    subheading: string;
    features: {
      title: string;
      description: string;
      tech: string;
    }[];
  };

  // 3. Direct Business Value (व्यवसायाचा प्रत्यक्ष फायदा)
  roiBenefits: {
    heading: string;
    metrics: {
      value: string;
      label: string;
      detail: string;
    }[];
    highlights: string[];
  };

  // 4. Featured Projects (प्रोजेक्ट्स व काम)
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
    summary: 'We build beautiful, ultra-fast websites designed to turn visitors into paying clients with compelling storytelling in Marathi and English.',
    
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
      subheading: 'Crafted with premium visual appeal, bilingual content (मराठी & English), and advanced SEO, AEO & GEO discovery ranking.',
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
          description: 'Google Business Profile, map pin optimization, and local Marathi & English geo-targeted keywords so nearby local clients discover your shop or company first.',
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
        'Professional business presence with bilingual Marathi & English storytelling that commands trust',
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
    title: 'Custom Software & Sales CRM Systems',
    shortTitle: 'Software Systems',
    tagline: 'SIM calling automation, lead management & business workflow tools.',
    icon: Cpu,
    badge: 'Sales & Lead Automation',
    accentColor: '#10B981',
    gradientClass: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent',
    glowShadow: 'hover:shadow-[0_16px_40px_rgba(16,185,129,0.18)]',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    summary: 'We build custom software suites and sales tools (like our flagship CallMind CRM) that help Indian businesses capture leads from ads and call directly from their mobile SIM.',
    
    whyYouNeedThis: {
      heading: 'Why Manual Calling & Ad Leads Get Wasted',
      subheading: 'Inquiries from Facebook and Google sit uncalled in spreadsheets for hours, while telecallers waste 3+ hours every day typing numbers manually.',
      points: [
        {
          title: 'Manual Dialing Wastes Hours Every Day',
          description: 'Callers typing numbers by hand make typing mistakes, dial wrong numbers, and get tired quickly.',
          impact: '1-tap instant dialing directly from your Android phone SIM card.',
        },
        {
          title: 'Delayed Calling Kills Sales',
          description: 'When a customer fills a Facebook or Instagram ad form, calling them after 2 hours reduces conversion by 80%.',
          impact: 'Auto-delivers the lead to your telecaller\'s phone in under 2 seconds.',
        },
        {
          title: 'Cloud Telephony is Overpriced in India',
          description: 'Third-party calling platforms charge high per-minute fees and store private customer conversations on unknown servers.',
          impact: 'Uses your existing mobile recharge plan with zero audio stored on cloud.',
        },
      ],
    },

    howWeHelp: {
      heading: 'How Our Software Helps Your Sales Team',
      subheading: 'Engineered specifically for Indian sales agencies, real estate builders, consultants, and service businesses.',
      features: [
        {
          title: 'Instant Ad Lead Ingress (Facebook, Insta & Sheets)',
          description: 'New leads from ad campaigns immediately pop up on your callers\' screens ready to dial.',
          tech: 'Instant Lead Push',
        },
        {
          title: 'Marathi, Hindi & English Telecaller Interface',
          description: 'Your callers can use the app in Marathi or Hindi, so you can hire good sales talent without English constraints.',
          tech: 'Multilingual UI',
        },
        {
          title: 'Automated GST Invoices for Subscriptions',
          description: 'Generates proper GST tax invoices with CGST and SGST split ready for Input Tax Credit (ITC).',
          tech: 'GST Compliant',
        },
      ],
    },

    roiBenefits: {
      heading: 'Direct Benefits to Your Business',
      metrics: [
        { value: '2 sec', label: 'Lead Ingress Speed', detail: 'From Facebook/Google ad directly to the telecaller screen.' },
        { value: '3+ hrs', label: 'Saved Per Caller Daily', detail: '1-tap SIM dialing eliminates manual number typing.' },
        { value: '₹0', label: 'Extra Calling Platform Charges', detail: 'Calls route through your existing mobile SIM unlimited plan.' },
      ],
      highlights: [
        'Double or triple the daily connected calls made by your sales team',
        'Track daily call targets, connected talk-time, and customer follow-up notes',
        'Keep working even when mobile data drops; auto-syncs when connection returns',
      ],
    },

    featuredProjects: [
      {
        title: 'CallMind CRM — SIM Telecalling & Lead Platform',
        subtitle: 'Flagship Sales Suite',
        description: 'India\'s premier SIM telecalling CRM. Auto-captures ad leads in 2 seconds, 1-click mobile SIM dialing, WhatsApp follow-ups, and automated GST invoices.',
        tags: ['Sales CRM', 'SIM Telecalling', 'Lead Management', 'Live App'],
        liveUrl: 'https://callmind-crm-app.onrender.com/',
        badge: 'Live Flagship Product',
        accentColor: '#10B981',
      },
    ],

    techStack: ['SIM Calling Integration', 'Lead Management CRM', 'Offline Sync', 'WhatsApp Follow-ups', 'GST Invoicing'],
  },

  {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    title: 'Native Android & Mobile Applications',
    shortTitle: 'Mobile Apps',
    tagline: 'Fast, smooth Android apps built with local security and offline reliability.',
    icon: Smartphone,
    badge: 'Native Mobile Apps',
    accentColor: '#F97316',
    gradientClass: 'bg-gradient-to-r from-orange-500 via-amber-500 to-purple-600 bg-clip-text text-transparent',
    glowShadow: 'hover:shadow-[0_16px_40px_rgba(249,115,22,0.18)]',
    bgGradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
    summary: 'We build native Android applications that feel fluid and fast — with fingerprint vault protection, offline storage, and clean Material Design.',
    
    whyYouNeedThis: {
      heading: 'Why Your Business or Product Needs a Native Mobile App',
      subheading: 'Over 85% of internet screen time in India happens on smartphones. A dedicated mobile app keeps your business one tap away from your customers.',
      points: [
        {
          title: 'Direct Presence on Customer\'s Phone',
          description: 'An app icon on the home screen keeps your brand top of mind, driving repeat orders and long-term customer loyalty.',
          impact: '3x higher customer retention compared to mobile browsers.',
        },
        {
          title: 'Uses Phone Hardware (Fingerprint, Camera, Alarms)',
          description: 'Regular websites cannot reliably access biometric security, silent alarms, or background notifications.',
          impact: 'High-security biometric vaults and instant push notifications.',
        },
        {
          title: 'Works Perfectly Without Continuous Internet',
          description: 'Native mobile apps store critical records locally, so your team or customers can use the app even in low-network areas.',
          impact: 'Zero downtime during field work or travel.',
        },
      ],
    },

    howWeHelp: {
      heading: 'How We Build Mobile Applications',
      subheading: 'Engineered for smooth 60fps performance, quick responsiveness, and battery efficiency.',
      features: [
        {
          title: 'Smooth & Intuitive Touch Interface',
          description: 'Modern, clean screen designs with big touch targets and instant response to every swipe and tap.',
          tech: 'Native Android UI',
        },
        {
          title: 'Fingerprint & PIN Security Vaults',
          description: 'Lock sensitive customer records, financial documents, and personal files behind biometric security.',
          tech: 'Biometric Lock',
        },
        {
          title: 'Offline Database & Auto Cloud Sync',
          description: 'Data is saved on the phone immediately and synchronizes with your cloud server whenever internet is active.',
          tech: 'Offline-First',
        },
      ],
    },

    roiBenefits: {
      heading: 'Direct Benefits to Your Business',
      metrics: [
        { value: '60 fps', label: 'Smooth Animation Speed', detail: 'Zero lag or stuttering on all modern Android devices.' },
        { value: '100%', label: 'Offline Usability', detail: 'Access critical files and forms without active network.' },
        { value: '1-Tap', label: 'Instant Biometric Login', detail: 'Fingerprint and face unlock for effortless security.' },
      ],
      highlights: [
        'Send direct push notifications to announce offers, updates, and reminders',
        'Protect sensitive client or business documents with fingerprint encryption',
        'Ready for deployment to the Google Play Store with full support',
      ],
    },

    featuredProjects: [
      {
        title: 'VOOO Files — Storage & Biometric Vault',
        subtitle: 'Android File Ecosystem',
        description: 'Complete Android storage manager with fingerprint secret vault, duplicate photo cleaner, and built-in music player.',
        tags: ['Android App', 'Biometric Vault', 'Storage Cleaner'],
        badge: 'In Development',
        accentColor: '#3B82F6',
      },
      {
        title: 'SMARAN AI — Smart Memory & Reminders',
        subtitle: 'Contextual Reminder App',
        description: 'Smart reminder app with visual strobe alarms that break through silent mode, with specialized presets for Students, Professionals, and Elders.',
        tags: ['Smart Alarms', 'Student Mode', 'Elder Mode'],
        badge: 'Architecture Phase',
        accentColor: '#8B5CF6',
      },
    ],

    techStack: ['Native Android App', 'Fingerprint Vault', 'Offline Storage', 'Push Notifications', 'Google Play Ready'],
  },
];

export function getService(id: string): ServiceVertical | undefined {
  return SERVICES.find((s) => s.id === id || s.slug === id);
}
