import React from 'react';
import { motion, type Variants } from 'framer-motion';

/**
 * Architectural Panoramic SVG Schematic for 01 Business Websites.
 * Displays the 4-phase technical pipeline from discovery to intent capture and contextual lead ingress.
 * Designed with Apple/Linear caliber precision: 1.5px crisp geometry, zero outer card box,
 * Studio Blue active signal vectors, and fluid motion.
 */
export function WebsitePanoramaSvg() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.12,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const nodeVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="w-full max-w-[920px] mx-auto overflow-x-auto no-scrollbar py-4 select-none">
      <motion.svg
        viewBox="0 0 920 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[760px] h-auto overflow-visible"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        aria-label="Technical Website Architecture Pipeline: Discovery, Edge Runtime, Intent Attribution, and Contextual Lead Routing"
      >
        <defs>
          {/* Subtle linear gradients for active signal pipelines */}
          <linearGradient id="blueGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4285F4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
            <stop offset="100%" stopColor="#4285F4" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="nodeBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ══════════════════════════════════════════════════════
            BACKGROUND ARCHITECTURAL HAIRLINE GRID (VERY SUBTLE)
           ══════════════════════════════════════════════════════ */}
        <line x1="20" y1="115" x2="900" y2="115" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="230" y1="20" x2="230" y2="210" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="460" y1="20" x2="460" y2="210" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="690" y1="20" x2="690" y2="210" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />

        {/* ══════════════════════════════════════════════════════
            ACTIVE INTER-CONNECTING SIGNAL PIPELINES
           ══════════════════════════════════════════════════════ */}
        {/* Pipeline 1 -> 2 */}
        <motion.path
          d="M 205 115 L 255 115"
          stroke="#4285F4"
          strokeWidth="2"
          strokeLinecap="round"
          variants={lineVariants}
        />
        <circle cx="230" cy="115" r="3" fill="#4285F4" />
        <text x="230" y="103" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="500">
          SCHEMA INGEST
        </text>

        {/* Pipeline 2 -> 3 */}
        <motion.path
          d="M 435 115 L 485 115"
          stroke="#4285F4"
          strokeWidth="2"
          strokeLinecap="round"
          variants={lineVariants}
        />
        <circle cx="460" cy="115" r="3" fill="#4285F4" />
        <text x="460" y="103" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="500">
          EVENT ATTRIBUTION
        </text>

        {/* Pipeline 3 -> 4 */}
        <motion.path
          d="M 665 115 L 715 115"
          stroke="#4285F4"
          strokeWidth="2"
          strokeLinecap="round"
          variants={lineVariants}
        />
        <circle cx="690" cy="115" r="3.5" fill="#4285F4" filter="url(#softGlow)" />
        <text x="690" y="103" textAnchor="middle" fill="#2563EB" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">
          CONTEXT ATTACH
        </text>

        {/* ══════════════════════════════════════════════════════
            NODE 01: SEO + AEO SEMANTIC CORE
           ══════════════════════════════════════════════════════ */}
        <motion.g variants={nodeVariants}>
          <rect
            x="25"
            y="35"
            width="180"
            height="160"
            rx="16"
            fill="url(#nodeBgGrad)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />
          {/* Eyebrow Tag */}
          <rect x="37" y="47" width="94" height="18" rx="9" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="1" />
          <text x="84" y="59.5" textAnchor="middle" fill="#1D4ED8" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            01 / INDEXATION
          </text>

          {/* Schematic Graphic: Semantic Entity & AI Node */}
          <g transform="translate(40, 76)">
            <circle cx="16" cy="16" r="14" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="5" fill="#2563EB" />
            <line x1="16" y1="2" x2="16" y2="7" stroke="#3B82F6" strokeWidth="1.5" />
            <line x1="16" y1="25" x2="16" y2="30" stroke="#3B82F6" strokeWidth="1.5" />
            <line x1="2" y1="16" x2="7" y2="16" stroke="#3B82F6" strokeWidth="1.5" />
            <line x1="25" y1="16" x2="30" y2="16" stroke="#3B82F6" strokeWidth="1.5" />

            {/* Sub-signals */}
            <circle cx="50" cy="9" r="3" fill="#10B981" />
            <text x="58" y="12" fill="#0A0F1E" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">Google SERP</text>
            <circle cx="50" cy="23" r="3" fill="#8B5CF6" />
            <text x="58" y="26" fill="#0A0F1E" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">AI Assistants</text>
          </g>

          {/* Node Text */}
          <text x="37" y="142" fill="#0A0F1E" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="700">
            SEO + AEO Core
          </text>
          <text x="37" y="160" fill="#64748B" fontSize="10.5" fontFamily="Inter, sans-serif" fontWeight="400">
            JSON-LD Structured Schema
          </text>
          <text x="37" y="176" fill="#94A3B8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Multi-Engine Discovery
          </text>
        </motion.g>

        {/* ══════════════════════════════════════════════════════
            NODE 02: MOBILE-FIRST EDGE ARCHITECTURE
           ══════════════════════════════════════════════════════ */}
        <motion.g variants={nodeVariants}>
          <rect
            x="255"
            y="35"
            width="180"
            height="160"
            rx="16"
            fill="url(#nodeBgGrad)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />
          {/* Eyebrow Tag */}
          <rect x="267" y="47" width="80" height="18" rx="9" fill="#F0FDF4" stroke="#DCFCE7" strokeWidth="1" />
          <text x="307" y="59.5" textAnchor="middle" fill="#15803D" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            02 / RUNTIME
          </text>

          {/* Schematic Graphic: Responsive Viewport with SSL Lock */}
          <g transform="translate(270, 76)">
            {/* Desktop Frame */}
            <rect x="0" y="0" width="34" height="24" rx="3" fill="#0A0F1E" fillOpacity="0.04" stroke="#0A0F1E" strokeWidth="1.4" />
            <line x1="0" y1="6" x2="34" y2="6" stroke="#0A0F1E" strokeWidth="1" />
            <line x1="12" y1="24" x2="22" y2="24" stroke="#0A0F1E" strokeWidth="1.5" />
            {/* Phone Frame */}
            <rect x="26" y="8" width="14" height="24" rx="2.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.4" />
            <circle cx="33" cy="28" r="1" fill="#0284C7" />
            {/* Lock Pill */}
            <circle cx="58" cy="16" r="7" fill="#10B981" fillOpacity="0.12" stroke="#10B981" strokeWidth="1.2" />
            <path d="M56 16V14.5C56 13.7 56.8 13 58 13C59.2 13 60 13.7 60 14.5V16" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="55" y="16" width="6" height="4.5" rx="1" fill="#10B981" />
          </g>

          {/* Node Text */}
          <text x="267" y="142" fill="#0A0F1E" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="700">
            Edge Architecture
          </text>
          <text x="267" y="160" fill="#64748B" fontSize="10.5" fontFamily="Inter, sans-serif" fontWeight="400">
            Instant Mobile First Paint
          </text>
          <text x="267" y="176" fill="#94A3B8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Cloud CDN · SSL Hardened
          </text>
        </motion.g>

        {/* ══════════════════════════════════════════════════════
            NODE 03: VISITOR INTENT & ATTRIBUTION
           ══════════════════════════════════════════════════════ */}
        <motion.g variants={nodeVariants}>
          <rect
            x="485"
            y="35"
            width="180"
            height="160"
            rx="16"
            fill="url(#nodeBgGrad)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />
          {/* Eyebrow Tag */}
          <rect x="497" y="47" width="98" height="18" rx="9" fill="#FAF5FF" stroke="#F3E8FF" strokeWidth="1" />
          <text x="546" y="59.5" textAnchor="middle" fill="#7E22CE" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            03 / ATTRIBUTION
          </text>

          {/* Schematic Graphic: Source Beacon & Context Tracer */}
          <g transform="translate(500, 76)">
            {/* Concentric Radar Rings */}
            <circle cx="16" cy="16" r="14" fill="#8B5CF6" fillOpacity="0.06" stroke="#C084FC" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="16" cy="16" r="8" fill="#8B5CF6" fillOpacity="0.14" stroke="#8B5CF6" strokeWidth="1.4" />
            <circle cx="16" cy="2" r="0" />
            {/* Page Context Badge */}
            <rect x="42" y="5" width="60" height="22" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <text x="47" y="15" fill="#0A0F1E" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">ref=organic</text>
            <text x="47" y="23" fill="#64748B" fontSize="7.5" fontFamily="JetBrains Mono, monospace">page=/services</text>
          </g>

          {/* Node Text */}
          <text x="497" y="142" fill="#0A0F1E" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="700">
            Visitor Intelligence
          </text>
          <text x="497" y="160" fill="#64748B" fontSize="10.5" fontFamily="Inter, sans-serif" fontWeight="400">
            Form-Free Source Tracking
          </text>
          <text x="497" y="176" fill="#94A3B8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Privacy-First · Zero Friction
          </text>
        </motion.g>

        {/* ══════════════════════════════════════════════════════
            NODE 04: CONTEXT-RICH WHATSAPP & CALL LEAD
           ══════════════════════════════════════════════════════ */}
        <motion.g variants={nodeVariants}>
          <rect
            x="715"
            y="35"
            width="180"
            height="160"
            rx="16"
            fill="#FFFFFF"
            stroke="#4285F4"
            strokeWidth="2"
          />
          {/* Eyebrow Tag */}
          <rect x="727" y="47" width="94" height="18" rx="9" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
          <text x="774" y="59.5" textAnchor="middle" fill="#1D4ED8" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            04 / CONVERSION
          </text>

          {/* Schematic Graphic: Lead Message Preview with WhatsApp Badge */}
          <g transform="translate(730, 76)">
            {/* Ingress Card */}
            <rect x="0" y="0" width="85" height="30" rx="5" fill="#F8FAFC" stroke="#93C5FD" strokeWidth="1.2" />
            {/* WhatsApp Chat Dot */}
            <circle cx="12" cy="15" r="5" fill="#25D366" />
            <path d="M10.5 15L11.5 16L13.5 14" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Lead Message Lines */}
            <rect x="22" y="9" width="55" height="3.5" rx="1.5" fill="#1E293B" />
            <rect x="22" y="16" width="40" height="3" rx="1.5" fill="#60A5FA" />
          </g>

          {/* Node Text */}
          <text x="727" y="142" fill="#0A0F1E" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="700">
            Contextual Leads
          </text>
          <text x="727" y="160" fill="#2563EB" fontSize="10.5" fontFamily="Inter, sans-serif" fontWeight="600">
            Pre-Filled Inquiry Routing
          </text>
          <text x="727" y="176" fill="#64748B" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Direct WhatsApp & Phone
          </text>
        </motion.g>

      </motion.svg>
    </div>
  );
}
