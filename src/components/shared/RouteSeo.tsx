import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_SEO_MAP, type RouteMetadata } from '../../content/routesMetadata';

interface BreadcrumbItem {
  name: string;
  url: string;
}

const SITE_URL = 'https://vooolabs.in';
const DEFAULT_IMAGE = `${SITE_URL}/og-preview.png`;

const ROUTE_SEO: Record<string, RouteMetadata> = ROUTE_SEO_MAP;

const ROUTE_BREADCRUMBS: Record<string, BreadcrumbItem[]> = {
  '/services': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Services', url: `${SITE_URL}/services` },
  ],
  '/services/websites': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Services', url: `${SITE_URL}/services` },
    { name: 'Business Websites', url: `${SITE_URL}/services/websites` },
  ],
  '/services/web-apps': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Services', url: `${SITE_URL}/services` },
    { name: 'Custom Web Apps & Portals', url: `${SITE_URL}/services/web-apps` },
  ],
  '/services/business-software': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Services', url: `${SITE_URL}/services` },
    { name: 'Custom Business Software', url: `${SITE_URL}/services/business-software` },
  ],
  '/seo-ai': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'AI & Search Growth', url: `${SITE_URL}/seo-ai` },
  ],
  '/seo-ai/google-seo': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'AI & Search Growth', url: `${SITE_URL}/seo-ai` },
    { name: 'Technical Google SEO', url: `${SITE_URL}/seo-ai/google-seo` },
  ],
  '/seo-ai/ai-search': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'AI & Search Growth', url: `${SITE_URL}/seo-ai` },
    { name: 'ChatGPT & AI Search (AEO)', url: `${SITE_URL}/seo-ai/ai-search` },
  ],
  '/seo-ai/google-maps': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'AI & Search Growth', url: `${SITE_URL}/seo-ai` },
    { name: 'Google Maps Local Authority', url: `${SITE_URL}/seo-ai/google-maps` },
  ],
  '/seo-ai/google-ads': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'AI & Search Growth', url: `${SITE_URL}/seo-ai` },
    { name: 'Targeted Google Search Ads', url: `${SITE_URL}/seo-ai/google-ads` },
  ],
  '/about': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'About VOOO LABS', url: `${SITE_URL}/about` },
  ],
  '/contact': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Contact Studio', url: `${SITE_URL}/contact` },
  ],
  '/legal/terms': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Legal Policies', url: `${SITE_URL}/legal/terms` },
    { name: 'Scope & Delivery Terms', url: `${SITE_URL}/legal/terms` },
  ],
  '/legal/refunds': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Legal Policies', url: `${SITE_URL}/legal/terms` },
    { name: 'Milestone Refund Policy', url: `${SITE_URL}/legal/refunds` },
  ],
  '/legal/ip-ownership': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Legal Policies', url: `${SITE_URL}/legal/terms` },
    { name: '100% IP & Code Ownership', url: `${SITE_URL}/legal/ip-ownership` },
  ],
  '/legal/privacy': [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Legal Policies', url: `${SITE_URL}/legal/terms` },
    { name: 'Data Privacy & NDA', url: `${SITE_URL}/legal/privacy` },
  ],
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

function setBreadcrumbJsonLd(breadcrumbs: BreadcrumbItem[] | undefined) {
  const SCRIPT_ID = 'route-breadcrumb-schema';
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    if (script) script.remove();
    return;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
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
          path: pathname,
          title: 'Page Not Found (404) | Architectural Router | VOOO LABS',
          description: 'The requested page could not be found on VOOO LABS studio website.',
          h1: 'This Route Does Not Exist in Our Architecture.',
          summary: 'The link may have moved, expired, or been mistyped. Navigate directly to one of our core engineering destinations below.',
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

    // 6. Dynamic BreadcrumbList JSON-LD Schema
    setBreadcrumbJsonLd(ROUTE_BREADCRUMBS[pathname]);

    return () => {
      // Clean up breadcrumb script when unmounting
      const script = document.getElementById('route-breadcrumb-schema');
      if (script) script.remove();
    };
  }, [location.pathname]);

  return null;
}
