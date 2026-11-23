#!/usr/bin/env node
/**
 * VOOO CHESS 3D — White / Light Background Suite Builder
 * Generates 15 White Background App Icons (1024x1024)
 * Generates 15 Pure Standalone Vector SVGs
 * Generates 2 Light Mobile Splash Screens (1080x1920 & 1242x2688)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatesDir = path.join(__dirname, 'templates', 'white');
const svgOutDir = path.join(__dirname, '..', 'exports', 'chess-app', 'white', 'svg');

fs.mkdirSync(templatesDir, { recursive: true });
fs.mkdirSync(svgOutDir, { recursive: true });

// 15 Distinct White / Light Background Design Configurations
const whiteDesigns = [
  {
    id: 1,
    name: "Pure Gold & Royal Onyx",
    style: "Luxury High-Key",
    badge: "Executive Edition",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F8FAFC 70%, #F1F5F9 100%)",
    accent: "#D97706",
    titleColor: "#0F172A",
    pawnGrad: "url(#goldGradWhite)",
    kingGrad: "url(#onyxGradWhite)",
    impactColor: "#F59E0B",
    floorGrid: "rgba(15, 23, 42, 0.06)",
    desc: "Polished 24k gold pawn strikes down a deep obsidian onyx king against an ultra-clean white gallery background with subtle gold shockwave sparks."
  },
  {
    id: 2,
    name: "Vooo Studio Blue & Amber",
    style: "Vooo Brand Flagship",
    badge: "Studio Signature",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F8F9FC 70%, #EEF2F6 100%)",
    accent: "#4285F4",
    titleColor: "#0F172A",
    pawnGrad: "url(#voooBlueGradWhite)",
    kingGrad: "url(#amberKingGradWhite)",
    impactColor: "#F97316",
    floorGrid: "rgba(66, 133, 244, 0.08)",
    desc: "Vooo Studio Blue pawn delivering a high-velocity strike to an Industrial Amber & Slate king with crisp dynamic shadows."
  },
  {
    id: 3,
    name: "Royal Crown Seized (Porcelain & Sapphire)",
    style: "Triumphant Royal",
    badge: "Pawn Becomes King",
    bg: "radial-gradient(circle at 50% 30%, #FFFFFF 0%, #F8FAFC 65%, #E2E8F0 100%)",
    accent: "#2563EB",
    titleColor: "#0F172A",
    pawnGrad: "url(#porcelainWhiteGrad)",
    kingGrad: "url(#sapphireKingGrad)",
    impactColor: "#EAB308",
    floorGrid: "rgba(37, 99, 235, 0.06)",
    desc: "Gleaming white porcelain pawn knocks down the midnight sapphire king; the royal golden crown is blasted into the air and landing squarely on the pawn!"
  },
  {
    id: 4,
    name: "Titanium Silver & Imperial Ruby",
    style: "Metallic High-Contrast",
    badge: "Grandmaster 3D",
    bg: "radial-gradient(circle at 50% 40%, #FFFFFF 0%, #F8FAFC 70%, #E2E8F0 100%)",
    accent: "#DC2626",
    titleColor: "#0F172A",
    pawnGrad: "url(#titaniumGradWhite)",
    kingGrad: "url(#rubyKingGradWhite)",
    impactColor: "#EF4444",
    floorGrid: "rgba(220, 38, 38, 0.05)",
    desc: "Brushed titanium silver pawn topples an imperial ruby-red glass king with flying crimson facet sparks on crisp white marble."
  },
  {
    id: 5,
    name: "Swiss Minimalist Precision",
    style: "Minimalist Editorial",
    badge: "Apple Design Style",
    bg: "#FFFFFF",
    accent: "#2563EB",
    titleColor: "#000000",
    pawnGrad: "url(#swissCobaltGrad)",
    kingGrad: "url(#swissCharcoalGrad)",
    impactColor: "#F97316",
    floorGrid: "rgba(0, 0, 0, 0.04)",
    desc: "Ultra-clean pure white canvas. Pure geometric 3D shapes with soft diffuse drop shadows and a sharp single orange impact accent."
  },
  {
    id: 6,
    name: "Emerald Green & Champagne Gold",
    style: "Casino Velvet & Marble",
    badge: "High Roller 3D",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F0FDF4 60%, #DCFCE7 100%)",
    accent: "#10B981",
    titleColor: "#064E3B",
    pawnGrad: "url(#champagneGoldGrad)",
    kingGrad: "url(#emeraldDarkGradWhite)",
    impactColor: "#10B981",
    floorGrid: "rgba(16, 185, 129, 0.08)",
    desc: "Champagne gold pawn with mirror reflections toppling a rich British racing green emerald king with brilliant green sparks."
  },
  {
    id: 7,
    name: "Kinetic Prismatic Blast",
    style: "Vivid Prismatic",
    badge: "Prism Dispersion",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FAFAFA 70%, #F3F4F6 100%)",
    accent: "#7C3AED",
    titleColor: "#0F172A",
    pawnGrad: "url(#voooRainbowGradWhite)",
    kingGrad: "url(#onyxGradWhite)",
    impactColor: "#7C3AED",
    floorGrid: "rgba(124, 58, 237, 0.07)",
    desc: "A rainbow spectrum prism shockwave radiating from the pawn as it shatters the black king into floating crystalline facets."
  },
  {
    id: 8,
    name: "Frosted Glass & Platinum",
    style: "Neumorphic Glass",
    badge: "Vision Glass",
    bg: "radial-gradient(circle at 50% 40%, #FFFFFF 0%, #F8FAFC 60%, #E2E8F0 100%)",
    accent: "#6366F1",
    titleColor: "#0F172A",
    pawnGrad: "url(#frostedGlassLightGrad)",
    kingGrad: "url(#platinumDarkGrad)",
    impactColor: "#818CF8",
    floorGrid: "rgba(99, 102, 241, 0.06)",
    desc: "Translucent frosted glass pawn with iridescent specular highlights knocking over a heavy platinum dark king."
  },
  {
    id: 9,
    name: "Daylight Cyber Cobalt",
    style: "High-Key Cyber",
    badge: "Arcade Pro",
    bg: "radial-gradient(circle at 50% 40%, #FFFFFF 0%, #F0F9FF 65%, #E0F2FE 100%)",
    accent: "#0284C7",
    titleColor: "#0C4A6E",
    pawnGrad: "url(#cyanCobaltGrad)",
    kingGrad: "url(#violetKingLightGrad)",
    impactColor: "#0284C7",
    floorGrid: "rgba(2, 132, 199, 0.1)",
    desc: "Electric sky-blue and cobalt 3D pawn delivering a high-energy kinetic shockwave to a deep purple king on a light blueprint grid."
  },
  {
    id: 10,
    name: "Esports Shield Crest (Silver Edition)",
    style: "Tournament Emblem",
    badge: "Pro Shield",
    bg: "radial-gradient(circle at 50% 30%, #FFFFFF 0%, #F8FAFC 70%, #E2E8F0 100%)",
    accent: "#2563EB",
    titleColor: "#0F172A",
    pawnGrad: "url(#silverCrestPawnGrad)",
    kingGrad: "url(#darkGoldCrestKing)",
    impactColor: "#3B82F6",
    floorGrid: "rgba(37, 99, 235, 0.06)",
    desc: "Embossed gaming crest on a white ceramic plaque, featuring a dynamic 3D pawn delivering an uppercut smash to the king."
  },
  {
    id: 11,
    name: "Classic Staunton Ivory & Mahogany",
    style: "Heritage Artisan",
    badge: "Master Artisan",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FDFBF7 60%, #F5EFEB 100%)",
    accent: "#9A3412",
    titleColor: "#451A03",
    pawnGrad: "url(#warmIvoryGrad)",
    kingGrad: "url(#mahoganyWoodGrad)",
    impactColor: "#D97706",
    floorGrid: "rgba(154, 52, 18, 0.07)",
    desc: "Hand-polished warm ivory pawn striking down a dark Brazilian mahogany king with warm wooden reflections on an ivory board."
  },
  {
    id: 12,
    name: "Daylight Lightning Strike",
    style: "High-Voltage Electric",
    badge: "Voltage Checkmate",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F0F9FF 70%, #E0F2FE 100%)",
    accent: "#0284C7",
    titleColor: "#0369A1",
    pawnGrad: "url(#daylightLightningGrad)",
    kingGrad: "url(#stormSlateKingGrad)",
    impactColor: "#38BDF8",
    floorGrid: "rgba(56, 189, 248, 0.08)",
    desc: "Electric sky-blue plasma arcs crackling from the pawn, snapping the king's crown and toppling it in high-contrast daylight."
  },
  {
    id: 13,
    name: "Sculptural Gold 'V' Monogram",
    style: "Architectural Monogram",
    badge: "Signature 'V'",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F8FAFC 70%, #F1F5F9 100%)",
    accent: "#D97706",
    titleColor: "#0F172A",
    pawnGrad: "url(#goldGradWhite)",
    kingGrad: "url(#onyxGradWhite)",
    impactColor: "#F59E0B",
    floorGrid: "rgba(15, 23, 42, 0.05)",
    desc: "A bold sculptural chrome & gold 'V' runway casting a 3D shadow on white canvas, with the pawn blasting the king at the apex."
  },
  {
    id: 14,
    name: "Tactical Telemetry Blueprint",
    style: "Architectural Blueprint",
    badge: "Clean CAD / Vector",
    bg: "#FFFFFF",
    accent: "#059669",
    titleColor: "#065F46",
    pawnGrad: "url(#cadPawnGrad)",
    kingGrad: "url(#cadKingGrad)",
    impactColor: "#10B981",
    floorGrid: "rgba(5, 150, 105, 0.08)",
    desc: "Precision engineering blueprint on white drafting paper with subtle green coordinates (CHECKMATE CONFIRMED // E8) and crisp pieces."
  },
  {
    id: 15,
    name: "High-Key Studio Monochrome (Pure Black & White)",
    style: "Minimalist Masterpiece",
    badge: "Studio High-Key",
    bg: "#FFFFFF",
    accent: "#000000",
    titleColor: "#000000",
    pawnGrad: "url(#pureWhitePawnGrad)",
    kingGrad: "url(#pureBlackKingGrad)",
    impactColor: "#F59E0B",
    floorGrid: "rgba(0, 0, 0, 0.05)",
    desc: "Maximum visual contrast: pure porcelain white pawn with golden ring toppling a midnight charcoal king with sharp drop shadows."
  }
];

// Generates the SVG clash graphic optimized for White/Light backgrounds
function generateWhiteChessSvg(design, isSplash = false) {
  const width = isSplash ? 920 : 860;
  const height = isSplash ? 920 : 700;

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 900 750" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto; filter: drop-shadow(0 20px 35px rgba(0,0,0,0.12));">
    <defs>
      <!-- White Theme Piece Gradients -->
      <linearGradient id="goldGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFBEB" />
        <stop offset="30%" stop-color="#FCD34D" />
        <stop offset="70%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#92400E" />
      </linearGradient>

      <linearGradient id="onyxGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#475569" />
        <stop offset="30%" stop-color="#1E293B" />
        <stop offset="70%" stop-color="#0F172A" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>

      <linearGradient id="voooBlueGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#BFDBFE" />
        <stop offset="35%" stop-color="#60A5FA" />
        <stop offset="70%" stop-color="#2563EB" />
        <stop offset="100%" stop-color="#1E40AF" />
      </linearGradient>

      <linearGradient id="amberKingGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDBA74" />
        <stop offset="40%" stop-color="#EA580C" />
        <stop offset="80%" stop-color="#9A3412" />
        <stop offset="100%" stop-color="#431407" />
      </linearGradient>

      <linearGradient id="porcelainWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#F8FAFC" />
        <stop offset="80%" stop-color="#E2E8F0" />
        <stop offset="100%" stop-color="#CBD5E1" />
      </linearGradient>

      <linearGradient id="sapphireKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3B82F6" />
        <stop offset="40%" stop-color="#1D4ED8" />
        <stop offset="80%" stop-color="#1E3A8A" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <linearGradient id="titaniumGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="30%" stop-color="#E2E8F0" />
        <stop offset="70%" stop-color="#94A3B8" />
        <stop offset="100%" stop-color="#475569" />
      </linearGradient>

      <linearGradient id="rubyKingGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F87171" />
        <stop offset="40%" stop-color="#DC2626" />
        <stop offset="80%" stop-color="#991B1B" />
        <stop offset="100%" stop-color="#450A0A" />
      </linearGradient>

      <linearGradient id="swissCobaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#60A5FA" />
        <stop offset="50%" stop-color="#2563EB" />
        <stop offset="100%" stop-color="#1D4ED8" />
      </linearGradient>

      <linearGradient id="swissCharcoalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#475569" />
        <stop offset="50%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <linearGradient id="champagneGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFBEB" />
        <stop offset="35%" stop-color="#FDE68A" />
        <stop offset="75%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#78350F" />
      </linearGradient>

      <linearGradient id="emeraldDarkGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#059669" />
        <stop offset="40%" stop-color="#065F46" />
        <stop offset="80%" stop-color="#064E3B" />
        <stop offset="100%" stop-color="#022C22" />
      </linearGradient>

      <linearGradient id="voooRainbowGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4285F4" />
        <stop offset="33%" stop-color="#5B5BD6" />
        <stop offset="66%" stop-color="#7C3AED" />
        <stop offset="100%" stop-color="#F97316" />
      </linearGradient>

      <linearGradient id="frostedGlassLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.95)" />
        <stop offset="40%" stop-color="rgba(199,210,254,0.7)" />
        <stop offset="80%" stop-color="rgba(165,180,252,0.5)" />
        <stop offset="100%" stop-color="rgba(99,102,241,0.6)" />
      </linearGradient>

      <linearGradient id="platinumDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#94A3B8" />
        <stop offset="50%" stop-color="#475569" />
        <stop offset="100%" stop-color="#1E293B" />
      </linearGradient>

      <linearGradient id="cyanCobaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7DD3FC" />
        <stop offset="40%" stop-color="#0284C7" />
        <stop offset="80%" stop-color="#0369A1" />
        <stop offset="100%" stop-color="#075985" />
      </linearGradient>

      <linearGradient id="violetKingLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C084FC" />
        <stop offset="50%" stop-color="#7E22CE" />
        <stop offset="100%" stop-color="#3B0764" />
      </linearGradient>

      <linearGradient id="silverCrestPawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#CBD5E1" />
        <stop offset="80%" stop-color="#64748B" />
        <stop offset="100%" stop-color="#334155" />
      </linearGradient>

      <linearGradient id="darkGoldCrestKing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EAB308" />
        <stop offset="50%" stop-color="#A16207" />
        <stop offset="100%" stop-color="#422006" />
      </linearGradient>

      <linearGradient id="warmIvoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#FEF3C7" />
        <stop offset="75%" stop-color="#FDE68A" />
        <stop offset="100%" stop-color="#D97706" />
      </linearGradient>

      <linearGradient id="mahoganyWoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#78350F" />
        <stop offset="45%" stop-color="#451A03" />
        <stop offset="85%" stop-color="#290E02" />
        <stop offset="100%" stop-color="#1A0701" />
      </linearGradient>

      <linearGradient id="daylightLightningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E0F2FE" />
        <stop offset="35%" stop-color="#38BDF8" />
        <stop offset="75%" stop-color="#0284C7" />
        <stop offset="100%" stop-color="#075985" />
      </linearGradient>

      <linearGradient id="stormSlateKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#475569" />
        <stop offset="50%" stop-color="#334155" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <linearGradient id="cadPawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#A7F3D0" />
        <stop offset="40%" stop-color="#10B981" />
        <stop offset="80%" stop-color="#047857" />
        <stop offset="100%" stop-color="#064E3B" />
      </linearGradient>

      <linearGradient id="cadKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#334155" />
        <stop offset="50%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <linearGradient id="pureWhitePawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="#F8FAFC" />
        <stop offset="100%" stop-color="#E2E8F0" />
      </linearGradient>

      <linearGradient id="pureBlackKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#334155" />
        <stop offset="40%" stop-color="#1E293B" />
        <stop offset="80%" stop-color="#0F172A" />
        <stop offset="100%" stop-color="#000000" />
      </linearGradient>

      <!-- Soft White Ground Shadow Filter -->
      <filter id="shadowWhite" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#0F172A" flood-opacity="0.18" />
      </filter>
      
      <filter id="pieceHighlight" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.15" />
      </filter>
    </defs>

    <!-- 1. Isometric Board Grid (Subtle Light Floor) -->
    <g opacity="0.8">
      <path d="M50 620 L450 480 L850 620 L450 740 Z" fill="#F8FAFC" stroke="${design.floorGrid}" stroke-width="2"/>
      <path d="M150 585 L450 480 L550 515 L250 620 Z" fill="rgba(0,0,0,0.02)" />
      <path d="M350 655 L650 550 L750 585 L450 690 Z" fill="rgba(0,0,0,0.02)" />
      <path d="M250 550 L450 480 L450 550 L250 620 Z" fill="${design.accent}" fill-opacity="0.08" />
    </g>

    <!-- 2. Diffuse Ground Ambient Occlusion Shadows -->
    <ellipse cx="320" cy="625" rx="100" ry="24" fill="#0F172A" opacity="0.16" />
    <ellipse cx="580" cy="560" rx="130" ry="28" fill="#0F172A" opacity="0.12" transform="rotate(15 580 560)" />

    <!-- 3. Dynamic Kinetic Speed Lines -->
    <g stroke="${design.accent}" stroke-linecap="round" opacity="0.6">
      <line x1="120" y1="520" x2="310" y2="430" stroke-width="4" stroke-dasharray="8 12" />
      <line x1="80" y1="460" x2="300" y2="380" stroke-width="3" stroke-dasharray="14 10" />
      <line x1="160" y1="580" x2="330" y2="500" stroke-width="5" />
      <line x1="100" y1="390" x2="280" y2="330" stroke-width="2" />
    </g>

    <!-- 4. Central Impact Waves -->
    <circle cx="430" cy="380" r="130" fill="${design.impactColor}" fill-opacity="0.12" />
    <circle cx="430" cy="380" r="85" stroke="${design.impactColor}" stroke-width="3" opacity="0.7" stroke-dasharray="12 8" />
    <circle cx="430" cy="380" r="45" stroke="#FFFFFF" stroke-width="4" opacity="0.95" />

    <!-- 5. Blown-Away Sparks and Particles -->
    <g fill="${design.impactColor}" opacity="0.95">
      <circle cx="490" cy="270" r="6" />
      <circle cx="530" cy="220" r="4" />
      <circle cx="420" cy="240" r="5" />
      <circle cx="580" cy="310" r="7" />
      <polygon points="460,280 475,270 470,290" fill="${design.accent}" />
      <polygon points="540,240 555,230 550,250" fill="${design.impactColor}" />
      <polygon points="620,290 635,280 625,305" fill="${design.accent}" />
    </g>

    <!-- 6. THE FALLING KING (Toppling 52 degrees right in defeat) -->
    <g transform="translate(430, 380) rotate(52) translate(-430, -380)" filter="url(#pieceHighlight)">
      <!-- King Base -->
      <ellipse cx="490" cy="610" rx="95" ry="24" fill="${design.kingGrad}" />
      <path d="M400 605 L415 540 L565 540 L580 605 Z" fill="${design.kingGrad}" />
      <ellipse cx="490" cy="540" rx="78" ry="16" fill="${design.kingGrad}" opacity="0.9" />

      <!-- King Body / Robe -->
      <path d="M420 535 C430 460 440 380 435 320 L545 320 C540 380 550 460 560 535 Z" fill="${design.kingGrad}" />
      <path d="M450 530 C455 465 460 390 458 335 L475 335 C475 390 470 465 465 530 Z" fill="#FFFFFF" opacity="0.25" />

      <!-- King Neck Collar -->
      <ellipse cx="490" cy="315" rx="65" ry="14" fill="${design.kingGrad}" />
      <ellipse cx="490" cy="295" rx="55" ry="12" fill="${design.kingGrad}" />

      <!-- King Crown & Crenellations -->
      <path d="M440 295 L430 200 L465 230 L490 190 L515 230 L550 200 L540 295 Z" fill="${design.kingGrad}" />
      <ellipse cx="490" cy="200" rx="14" ry="14" fill="${design.kingGrad}" />
    </g>

    <!-- 7. FLYING KING CROWN / CROSS FINIAL IN MID-AIR -->
    <g transform="translate(620, 150) rotate(-35)" filter="url(#pieceHighlight)">
      <path d="M-60 60 Q 0 -10 40 -40" stroke="${design.impactColor}" stroke-width="3" stroke-dasharray="4 6" fill="none" opacity="0.6"/>
      <!-- Gold Cross Crown -->
      <rect x="-8" y="-45" width="16" height="50" rx="3" fill="url(#goldGradWhite)" />
      <rect x="-26" y="-32" width="52" height="15" rx="3" fill="url(#goldGradWhite)" />
      <circle cx="0" cy="-25" r="7" fill="#FFFFFF" />
      <path d="M0 -60 L4 -48 L16 -48 L6 -40 L10 -28 L0 -34 L-10 -28 L-6 -40 L-16 -48 L-4 -48 Z" fill="#F59E0B" transform="scale(0.8) translate(30,-50)"/>
    </g>

    <!-- 8. THE TRIUMPHANT PAWN (Driving forward with power) -->
    <g filter="url(#shadowWhite)">
      <!-- Base Pedestal -->
      <ellipse cx="320" cy="600" rx="90" ry="24" fill="${design.pawnGrad}" />
      <path d="M235 595 L255 530 L385 530 L405 595 Z" fill="${design.pawnGrad}" />
      <ellipse cx="320" cy="530" rx="72" ry="16" fill="${design.pawnGrad}" />
      <ellipse cx="320" cy="590" rx="84" ry="18" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.5" />

      <!-- Stem -->
      <path d="M260 525 C275 450 285 390 285 340 L355 340 C355 390 365 450 380 525 Z" fill="${design.pawnGrad}" />
      <path d="M285 520 C295 455 300 400 300 350 L318 350 C318 400 312 455 302 520 Z" fill="#FFFFFF" opacity="0.4" />

      <!-- Neck Collar -->
      <ellipse cx="320" cy="335" rx="60" ry="14" fill="${design.pawnGrad}" />
      <ellipse cx="320" cy="315" rx="46" ry="11" fill="${design.pawnGrad}" />

      <!-- Spherical Head -->
      <circle cx="320" cy="235" r="72" fill="${design.pawnGrad}" />
      <ellipse cx="295" cy="205" rx="28" ry="20" fill="#FFFFFF" opacity="0.6" transform="rotate(-25 295 205)" />
      <circle cx="282" cy="195" r="8" fill="#FFFFFF" opacity="0.9" />
    </g>

    <!-- Custom Crown on Pawn Head for Design 03 (Triumph) -->
    ${design.id === 3 ? `
      <g transform="translate(320, 145)" filter="url(#pieceHighlight)">
        <path d="M-40 20 L-45 -15 L-20 0 L0 -25 L20 0 L45 -15 L40 20 Z" fill="url(#goldGradWhite)" stroke="#D97706" stroke-width="2"/>
        <circle cx="0" cy="-25" r="4" fill="#FFFFFF"/>
        <circle cx="-45" cy="-15" r="3" fill="#FFFFFF"/>
        <circle cx="45" cy="-15" r="3" fill="#FFFFFF"/>
      </g>
    ` : ''}

    <!-- Custom 'V' for Design 13 -->
    ${design.id === 13 ? `
      <path d="M120 180 L430 680 L740 180 L620 180 L430 520 L240 180 Z" fill="url(#goldGradWhite)" opacity="0.18" stroke="#D97706" stroke-width="3"/>
    ` : ''}

    <!-- Custom CAD Overlay for Design 14 -->
    ${design.id === 14 ? `
      <g stroke="#059669" opacity="0.6" font-family="'JetBrains Mono', monospace">
        <circle cx="430" cy="380" r="180" stroke-width="1.5" stroke-dasharray="8 6" fill="none"/>
        <line x1="430" y1="180" x2="430" y2="580" stroke-width="1" stroke-dasharray="6 4"/>
        <line x1="230" y1="380" x2="630" y2="380" stroke-width="1" stroke-dasharray="6 4"/>
        <text x="250" y="210" fill="#059669" font-size="14" font-weight="700">TARGET: BLACK KING [E8]</text>
        <text x="250" y="230" fill="#10B981" font-size="12">STRIKE: PAWN [D7->E8] #WIN</text>
        <text x="560" y="520" fill="#059669" font-size="14" font-weight="700">STATUS: CHECKMATE</text>
      </g>
    ` : ''}

    <!-- 9. Flash Point Burst -->
    <path d="M430 380 L390 320 L425 345 L415 300 L445 340 L480 310 L455 360 L510 355 L460 385 L520 410 L460 410 L490 450 L445 420 L440 470 L420 425 L380 450 L405 405 L360 395 Z" fill="#FFFFFF" opacity="0.9" filter="drop-shadow(0 0 10px ${design.impactColor})" />
  </svg>
  `;
}

// 1. Generate 15 HTML Templates (1024x1024)
console.log('[build-white] Writing 15 White App Icon HTML Templates...');
whiteDesigns.forEach(d => {
  const dayStr = String(d.id).padStart(2, '0');
  const filePath = path.join(templatesDir, `logo-${dayStr}.html`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — White Logo ${dayStr}: ${d.name}</title>
  <link rel="stylesheet" href="../../../shared/brand.css">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 1024px;
      height: 1024px;
      overflow: hidden;
      background: ${d.bg};
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 60px 40px 50px;
      position: relative;
    }
    .grid-overlay {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
    }
    .corner-spec {
      position: absolute;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: rgba(15, 23, 42, 0.4);
      letter-spacing: 1.5px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="grid-overlay"></div>

  <!-- Corner Specs -->
  <div class="corner-spec" style="top: 24px; left: 32px;">VOOO LABS // GAME STUDIO</div>
  <div class="corner-spec" style="top: 24px; right: 32px;">WHITE EDITION ${dayStr} / 15</div>

  <!-- Header Badge: Style Tag -->
  <div style="z-index: 10; display: flex; align-items: center; gap: 10px; background: rgba(15, 23, 42, 0.04); border: 1px solid rgba(15, 23, 42, 0.1); padding: 8px 20px; border-radius: 9999px; backdrop-filter: blur(8px);">
    <span style="width: 8px; height: 8px; border-radius: 50%; background: ${d.accent}; box-shadow: 0 0 8px ${d.accent};"></span>
    <span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #0F172A; letter-spacing: 2px; text-transform: uppercase;">
      ${d.badge}
    </span>
  </div>

  <!-- Center Artwork: Pawn Blasting King -->
  <div style="z-index: 10; width: 100%; display: flex; justify-content: center; align-items: center; margin-top: -10px;">
    ${generateWhiteChessSvg(d)}
  </div>

  <!-- Bottom Branding Block: "Vooo Chess 3D" -->
  <div style="z-index: 10; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
    <div style="display: flex; align-items: center; gap: 14px;">
      <span style="font-family: 'CrazyBlocks', sans-serif; font-size: 46px; letter-spacing: 2px; line-height: 1;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
      </span>
      <span style="font-family: 'Inter', sans-serif; font-size: 40px; font-weight: 900; letter-spacing: -0.5px; color: ${d.titleColor}; text-transform: uppercase; line-height: 1;">
        CHESS <span style="color: ${d.accent};">3D</span>
      </span>
    </div>

    <div style="display: flex; align-items: center; gap: 12px; margin-top: 4px;">
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: rgba(15, 23, 42, 0.5); letter-spacing: 3px; text-transform: uppercase;">
        TACTICAL 3D CONQUEST &bull; GRANDMASTER AI
      </span>
    </div>
  </div>

</body>
</html>`;

  fs.writeFileSync(filePath, html, 'utf-8');

  // Also write the standalone vector .svg file directly!
  const svgStandalone = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1024" height="1024" fill="#FFFFFF"/>
  <g transform="translate(62, 100)">
    ${generateWhiteChessSvg(d)}
  </g>
</svg>`;

  fs.writeFileSync(path.join(svgOutDir, `logo-${dayStr}.svg`), svgStandalone, 'utf-8');
});

console.log('[build-white] 15 HTML templates and 15 standalone .svg files generated.');

// 2. Generate Light Mobile Splash Screens
console.log('[build-white] Generating Light Mobile Splash Screens (1080x1920 & 1242x2688)...');

// Android Light Splash (1080x1920)
const splashAndroidHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — Splash Screen: Studio White (Android 1080x1920)</title>
  <link rel="stylesheet" href="../../../shared/brand.css">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 1080px;
      height: 1920px;
      overflow: hidden;
      background: radial-gradient(circle at 50% 30%, #FFFFFF 0%, #F8FAFC 55%, #F1F5F9 100%);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 120px 80px 100px;
      position: relative;
    }
    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
    }
    .loader-bar {
      width: 100%;
      max-width: 540px;
      height: 8px;
      background: rgba(15, 23, 42, 0.08);
      border-radius: 9999px;
      overflow: hidden;
      position: relative;
      margin-top: 20px;
    }
    .loader-progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 82%;
      background: linear-gradient(90deg, #4285F4, #7C3AED, #F59E0B);
      border-radius: 9999px;
      box-shadow: 0 0 16px rgba(66, 133, 244, 0.5);
    }
  </style>
</head>
<body>
  <div class="grid-bg"></div>

  <!-- Top Studio Attribution -->
  <div style="z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 10px; background: rgba(15, 23, 42, 0.04); border: 1px solid rgba(15, 23, 42, 0.1); padding: 10px 24px; border-radius: 9999px; backdrop-filter: blur(10px);">
      <span style="width: 8px; height: 8px; border-radius: 50%; background: #4285F4; box-shadow: 0 0 10px #4285F4;"></span>
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #0F172A; letter-spacing: 2px;">
        VOOO LABS STUDIOS &bull; OFFICIAL RELEASE
      </span>
    </div>
  </div>

  <!-- Monumental Center Clash: Pawn Blasting King -->
  <div style="z-index: 10; width: 100%; margin-top: -40px;">
    ${generateWhiteChessSvg(whiteDesigns[0], true)}
  </div>

  <!-- Bottom Title, Loading Bar & Credits -->
  <div style="z-index: 10; width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 18px;">
    <div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
        <span style="font-family: 'CrazyBlocks', sans-serif; font-size: 64px; letter-spacing: 2px; line-height: 1;">
          <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        </span>
        <span style="font-family: 'Inter', sans-serif; font-size: 56px; font-weight: 900; letter-spacing: -1px; color: #0F172A; text-transform: uppercase; line-height: 1;">
          CHESS <span style="background: linear-gradient(90deg, #D97706, #F59E0B); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">3D</span>
        </span>
      </div>
      <p style="font-size: 18px; color: #64748B; margin-top: 10px; letter-spacing: 0.5px; font-weight: 600;">
        Next-Generation 3D Tactical Warfare &bull; Play vs Grandmaster AI
      </p>
    </div>

    <!-- Loading Bar -->
    <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
      <div style="display: flex; justify-content: space-between; width: 100%; max-width: 540px; margin-top: 10px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #64748B;">
        <span>LOADING 3D GAME ASSETS...</span>
        <span style="color: #4285F4; font-weight: 700;">82%</span>
      </div>
    </div>

    <!-- Studio Footer -->
    <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(15, 23, 42, 0.08); width: 100%; max-width: 600px; display: flex; justify-content: space-between; align-items: center; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #64748B;">
      <span>VOOO LABS &bull; PRODUCT DIVISION</span>
      <span style="color: #4285F4; font-weight: 700;">vooolabs.in</span>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(templatesDir, 'splash-light-android.html'), splashAndroidHtml, 'utf-8');

// iOS Light Splash (1242x2688)
const splashIosHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — Splash Screen: Studio White (iOS 1242x2688)</title>
  <link rel="stylesheet" href="../../../shared/brand.css">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 1242px;
      height: 2688px;
      overflow: hidden;
      background: radial-gradient(circle at 50% 30%, #FFFFFF 0%, #F8FAFC 55%, #F1F5F9 100%);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 180px 100px 140px;
      position: relative;
    }
    .grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
    }
    .loader-bar {
      width: 100%;
      max-width: 620px;
      height: 10px;
      background: rgba(15, 23, 42, 0.08);
      border-radius: 9999px;
      overflow: hidden;
      position: relative;
      margin-top: 24px;
    }
    .loader-progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 82%;
      background: linear-gradient(90deg, #4285F4, #7C3AED, #F59E0B);
      border-radius: 9999px;
      box-shadow: 0 0 16px rgba(66, 133, 244, 0.5);
    }
  </style>
</head>
<body>
  <div class="grid-bg"></div>

  <!-- Top Studio Attribution -->
  <div style="z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 14px;">
    <div style="display: flex; align-items: center; gap: 12px; background: rgba(15, 23, 42, 0.04); border: 1px solid rgba(15, 23, 42, 0.1); padding: 12px 30px; border-radius: 9999px; backdrop-filter: blur(10px);">
      <span style="width: 10px; height: 10px; border-radius: 50%; background: #4285F4; box-shadow: 0 0 12px #4285F4;"></span>
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 700; color: #0F172A; letter-spacing: 2px;">
        VOOO LABS STUDIOS &bull; APPLE APP STORE EDITION
      </span>
    </div>
  </div>

  <!-- Monumental Center Clash -->
  <div style="z-index: 10; width: 100%; margin-top: -60px;">
    ${generateWhiteChessSvg(whiteDesigns[0], true)}
  </div>

  <!-- Bottom Title, Loading Bar & Credits -->
  <div style="z-index: 10; width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px;">
    <div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 18px;">
        <span style="font-family: 'CrazyBlocks', sans-serif; font-size: 76px; letter-spacing: 2.5px; line-height: 1;">
          <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        </span>
        <span style="font-family: 'Inter', sans-serif; font-size: 68px; font-weight: 900; letter-spacing: -1.5px; color: #0F172A; text-transform: uppercase; line-height: 1;">
          CHESS <span style="background: linear-gradient(90deg, #D97706, #F59E0B); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">3D</span>
        </span>
      </div>
      <p style="font-size: 22px; color: #64748B; margin-top: 14px; letter-spacing: 0.5px; font-weight: 600;">
        Next-Generation 3D Tactical Warfare &bull; Optimized for iOS Metal
      </p>
    </div>

    <!-- Loading Bar -->
    <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
      <div style="display: flex; justify-content: space-between; width: 100%; max-width: 620px; margin-top: 12px; font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #64748B;">
        <span>LOADING HIGH-RES METAL TEXTURES...</span>
        <span style="color: #4285F4; font-weight: 700;">82%</span>
      </div>
    </div>

    <!-- Studio Footer -->
    <div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid rgba(15, 23, 42, 0.08); width: 100%; max-width: 700px; display: flex; justify-content: space-between; align-items: center; font-family: 'JetBrains Mono', monospace; font-size: 15px; color: #64748B;">
      <span>VOOO LABS &bull; PRODUCT DIVISION</span>
      <span style="color: #4285F4; font-weight: 700;">vooolabs.in</span>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(templatesDir, 'splash-light-ios.html'), splashIosHtml, 'utf-8');

console.log('[build-white] Complete! 15 White HTML templates, 15 SVGs, and 2 Splash screens written.');
