import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteMetadata {
  title: string;
  description: string;
}

const SITE_URL = 'https://vooolabs.in';
const DEFAULT_IMAGE = `${SITE_URL}/og-preview.png`;

const ROUTE_SEO: Record<string, RouteMetadata> = {
  '/': {
    title: 'VOOO LABS — Custom Business Websites, Web Apps & Business Software',
    description:
      'Independent web and software engineering studio in Maharashtra, India. We engineer custom websites, web apps, business software, and AI search visibility with 100% client ownership.',
  },
  '/services': {
    title: 'Core Engineering Systems — VOOO LABS',
    description:
      'Explore VOOO LABS 4 core systems: Custom Business Websites, Web Apps & Portals, Custom Business Software, and Technical Google & AI Search Visibility.',
  },
  '/services/websites': {
    title: '01 Business Websites — Fast, Search-Ready & WhatsApp-Connected | VOOO LABS',
    description:
      'High-speed, conversion-focused business websites built with modern frameworks, structured metadata, and direct WhatsApp integration.',
  },
  '/services/web-apps': {
    title: '02 Custom Web Apps & Portals — Zero App Store Friction | VOOO LABS',
    description:
      'Progressive web applications, client portals, and booking systems that run in any browser with zero app store friction, 30% commission bypass, and instant updates.',
  },
  '/services/business-software': {
    title: '03 Custom Business Software — Replace Manual Spreadsheets | VOOO LABS',
    description:
      'Custom internal software, inventory engines, automated billing, and operational ERP systems engineered specifically around how your business works.',
  },
  '/seo-ai': {
    title: '04 Google SEO, AI Search & Ads — Four Discovery Channels | VOOO LABS',
    description:
      'Comprehensive four-channel organic discovery engine covering Technical Google SEO, ChatGPT & AI Search (AEO), Google Maps Local, and Targeted Google Search Ads.',
  },
  '/seo-ai/google-seo': {
    title: 'Technical Google SEO — Semantic Architecture & Fast Indexing | VOOO LABS',
    description:
      'Technical Google SEO engineered with clean URL structures, programmatic semantic schema, sub-second TTFB, and verified indexing for commercial queries.',
  },
  '/seo-ai/ai-search': {
    title: 'ChatGPT & AI Search Readiness (AEO) — JSON-LD & llms.txt | VOOO LABS',
    description:
      'Answer Engine Optimization (AEO) using JSON-LD @graph, llms.txt knowledge protocols, and machine-readable data so AI engines cite your company accurately.',
  },
  '/seo-ai/google-maps': {
    title: 'Google Maps & Local Authority — Profile & WhatsApp Reviews | VOOO LABS',
    description:
      'Dominate local search in Maharashtra and India with optimized Google Business Profile, localized schema, and automated 1-tap WhatsApp review funnels.',
  },
  '/seo-ai/google-ads': {
    title: 'Targeted Google Search Ads & High-Speed Landing Pages | VOOO LABS',
    description:
      'High-intent Google Search ad campaigns paired with sub-second, single-action landing pages with direct WhatsApp source tracking and zero wasted budget.',
  },
  '/about': {
    title: 'About VOOO LABS — Studio Manifesto & Vrushabh Shinde',
    description:
      'Meet VOOO LABS founder Vrushabh Shinde. Learn about our architectural software philosophy, zero-bloat engineering, and commitment to 100% client code ownership.',
  },
  '/contact': {
    title: 'Configure Project Blueprint & Estimate | VOOO LABS',
    description:
      'Generate your interactive project specification blueprint and discuss your requirements directly with lead architect Vrushabh Shinde.',
  },
  '/legal/terms': {
    title: 'Scope, Milestones & Delivery Terms (40-30-30) | VOOO LABS',
    description:
      'Commercial engagement terms: written scope lock, structured 40%-30%-30% milestone schedule, 2-round frontend revision policy, and client input timelines.',
  },
  '/legal/refunds': {
    title: 'Milestone Sign-Off & Refund Policy | VOOO LABS',
    description:
      'Fair milestone review protocol: 40% kickoff advance non-refundability, strict 5-business-day sign-off rule, and equitable studio cancellation protection.',
  },
  '/legal/ip-ownership': {
    title: '100% Source Code & IP Ownership Policy | VOOO LABS',
    description:
      'Complete intellectual property transfer upon final payment: private GitHub repository handover, database schemas, direct cloud billing, and zero vendor lock-in.',
  },
  '/legal/privacy': {
    title: 'Data Privacy, Business NDA & Jurisdiction | VOOO LABS',
    description:
      'Strict mutual business confidentiality, Indian DPDP Act compliance, minimal inquiry data collection, post-handover credential hygiene, and Maharashtra jurisdiction.',
  },
};

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export default function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    
    // Resolve exact match or fallback for subpaths
    let meta = ROUTE_SEO[pathname];
    if (!meta) {
      if (pathname.startsWith('/legal')) {
        meta = ROUTE_SEO['/legal/terms'];
      } else if (pathname.startsWith('/services')) {
        meta = ROUTE_SEO['/services'];
      } else if (pathname.startsWith('/seo-ai')) {
        meta = ROUTE_SEO['/seo-ai'];
      } else {
        meta = {
          title: 'Page Not Found — VOOO LABS',
          description: 'The requested page could not be found on VOOO LABS studio website.',
        };
      }
    }

    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    // 1. Update Document Title
    document.title = meta.title;

    // 2. Update Standard Meta Description & Robots
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'robots', 'index, follow');

    // 3. Update Canonical URL
    setCanonical(canonicalUrl);

    // 4. Update OpenGraph (WhatsApp, LinkedIn, Facebook)
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'VOOO LABS');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:image', DEFAULT_IMAGE);
    setMetaTag('property', 'og:image:secure_url', DEFAULT_IMAGE);
    setMetaTag('property', 'og:image:type', 'image/png');
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');

    // 5. Update Twitter / X Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@vooolabs');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', DEFAULT_IMAGE);
  }, [location.pathname]);

  return null;
}
