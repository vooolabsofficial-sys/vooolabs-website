#!/usr/bin/env node
/**
 * VOOO CHESS 3D — 15 Ultra-Clean Light / White App Icon Editions
 * - 100% Light-Themed: ZERO dark/black/onyx pieces! Pristine studio aesthetic.
 * - Hero clash: 3D Pawn knocking down / checkmating King with flying crown & dynamic starburst.
 * - Branded Typography: Official "CrazyBlocks" font embedded directly via Base64.
 * - Standard Store Formats: 1024x1024, 512x512, 192x192, 180x180, and standalone SVGs.
 * - 2 High-Res Light Splash Screens (Android 1080x1920 & iOS 1242x2688).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');

const fontPath = path.join(projectRoot, 'public', 'fonts', 'crazy-blocks', 'crazyblocks.otf');
const fontB64 = fs.readFileSync(fontPath).toString('base64');

const templatesDir = path.join(__dirname, 'templates', 'white');
const svgOutDir = path.join(__dirname, '..', 'exports', 'chess-app', 'white', 'svg');

fs.mkdirSync(templatesDir, { recursive: true });
fs.mkdirSync(svgOutDir, { recursive: true });

// 15 Distinct Pure Light / White Design Configurations (ZERO Dark / Black Colors)
const whiteDesigns = [
  {
    id: 1,
    name: "Pure 24K Gold & White Porcelain",
    style: "Luxury Champion",
    badge: "Champion Gold",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FDFBF7 65%, #F7F3EB 100%)",
    accent: "#F59E0B",
    titleColor: "#B45309",
    pawnGrad: "url(#goldGrad01)",
    kingGrad: "url(#porcelainWhite01)",
    kingTrimGrad: "url(#goldGrad01)",
    impactColor: "#F59E0B",
    floorTile: "rgba(245, 158, 11, 0.08)",
    floorGrid: "rgba(217, 119, 6, 0.15)",
    shadowColor: "rgba(180, 83, 9, 0.12)",
    desc: "Gleaming 24K polished gold pawn strikes down a radiant white porcelain king with golden crown filigree on a sunlit ivory marble board."
  },
  {
    id: 2,
    name: "Vooo Studio Cyan & Electric Blue",
    style: "Studio Flagship Modern",
    badge: "Studio Signature",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F0F9FF 65%, #E0F2FE 100%)",
    accent: "#38BDF8",
    titleColor: "#1D4ED8",
    pawnGrad: "url(#electricBlueGrad02)",
    kingGrad: "url(#iceWhiteGrad02)",
    kingTrimGrad: "url(#electricBlueGrad02)",
    impactColor: "#0284C7",
    floorTile: "rgba(56, 189, 248, 0.08)",
    floorGrid: "rgba(37, 99, 235, 0.14)",
    shadowColor: "rgba(29, 78, 216, 0.12)",
    desc: "High-velocity electric cyan & Vooo royal blue pawn delivers a shockwave strike to an ice-white ceramic king with azure trim."
  },
  {
    id: 3,
    name: "Royal Crown Ascendance (Pawn Crowned)",
    style: "Triumphant Kingmaker",
    badge: "Pawn Becomes King",
    bg: "radial-gradient(circle at 50% 30%, #FFFFFF 0%, #FEFCE8 65%, #FEF08A 100%)",
    accent: "#EAB308",
    titleColor: "#A16207",
    pawnGrad: "url(#pearlIvoryGrad03)",
    kingGrad: "url(#sapphireLightGrad03)",
    kingTrimGrad: "url(#goldGrad01)",
    impactColor: "#EAB308",
    floorTile: "rgba(234, 179, 8, 0.09)",
    floorGrid: "rgba(202, 138, 4, 0.15)",
    shadowColor: "rgba(161, 98, 7, 0.12)",
    desc: "Pure pearlescent ivory pawn checkmates the sky sapphire king, claiming the royal golden crown directly atop its head!"
  },
  {
    id: 4,
    name: "Coral Sunrise & Warm Amber",
    style: "Vibrant Warm Studio",
    badge: "Sunset Grandmaster",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FFF7ED 65%, #FFEDD5 100%)",
    accent: "#FB923C",
    titleColor: "#C2410C",
    pawnGrad: "url(#coralSunriseGrad04)",
    kingGrad: "url(#creamAlabaster04)",
    kingTrimGrad: "url(#coralSunriseGrad04)",
    impactColor: "#F97316",
    floorTile: "rgba(249, 115, 22, 0.08)",
    floorGrid: "rgba(234, 88, 12, 0.14)",
    shadowColor: "rgba(194, 65, 12, 0.12)",
    desc: "Radiant tangerine & coral sunrise pawn topples a polished cream alabaster king with amber shockwave sparks."
  },
  {
    id: 5,
    name: "Emerald Jade & Mint Porcelain",
    style: "Casino Prestige",
    badge: "High Roller Mint",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F0FDF4 65%, #DCFCE7 100%)",
    accent: "#34D399",
    titleColor: "#047857",
    pawnGrad: "url(#emeraldJadeGrad05)",
    kingGrad: "url(#mintPorcelain05)",
    kingTrimGrad: "url(#emeraldJadeGrad05)",
    impactColor: "#10B981",
    floorTile: "rgba(16, 185, 129, 0.08)",
    floorGrid: "rgba(5, 150, 105, 0.14)",
    shadowColor: "rgba(4, 120, 87, 0.12)",
    desc: "Brilliant emerald jade pawn delivers a decisive checkmate to a champagne white king, sending gold and mint facets flying."
  },
  {
    id: 6,
    name: "Diamond Frosted Glass & Prism Rainbow",
    style: "Apple Arcade Glassmorphism",
    badge: "Prism Crystal",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F8FAFC 65%, #EEF2F6 100%)",
    accent: "#818CF8",
    titleColor: "#4F46E5",
    pawnGrad: "url(#prismGlassGrad06)",
    kingGrad: "url(#frostedCrystal06)",
    kingTrimGrad: "url(#prismGlassGrad06)",
    impactColor: "#6366F1",
    floorTile: "rgba(99, 102, 241, 0.07)",
    floorGrid: "rgba(79, 70, 229, 0.12)",
    shadowColor: "rgba(67, 56, 202, 0.10)",
    desc: "Translucent frosted diamond glass pawn refracting vibrant spectrum colors, shattering an opalescent white crystal king."
  },
  {
    id: 7,
    name: "Royal Amethyst & Lilac Frost",
    style: "Mystical Grandmaster",
    badge: "Amethyst Violet",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FAF5FF 65%, #F3E8FF 100%)",
    accent: "#C084FC",
    titleColor: "#7E22CE",
    pawnGrad: "url(#amethystGrad07)",
    kingGrad: "url(#lilacPorcelain07)",
    kingTrimGrad: "url(#amethystGrad07)",
    impactColor: "#A855F7",
    floorTile: "rgba(168, 85, 247, 0.08)",
    floorGrid: "rgba(126, 34, 206, 0.14)",
    shadowColor: "rgba(107, 33, 168, 0.11)",
    desc: "Luminous royal purple amethyst pawn strikes a soft lilac porcelain king with shimmering stardust trails."
  },
  {
    id: 8,
    name: "Rose Gold & Powder Alabaster",
    style: "Haute Horlogerie Luxury",
    badge: "Rose Gold Edition",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FFF1F2 65%, #FFE4E6 100%)",
    accent: "#FB7185",
    titleColor: "#BE123C",
    pawnGrad: "url(#roseGoldGrad08)",
    kingGrad: "url(#powderAlabaster08)",
    kingTrimGrad: "url(#roseGoldGrad08)",
    impactColor: "#F43F5E",
    floorTile: "rgba(244, 63, 94, 0.07)",
    floorGrid: "rgba(225, 29, 72, 0.13)",
    shadowColor: "rgba(190, 18, 60, 0.11)",
    desc: "Lustrous rose gold & copper pawn knocks down a pure powder alabaster king on a silk-smooth light gallery board."
  },
  {
    id: 9,
    name: "Sky Turquoise & Platinum Silver",
    style: "Minimalist Aero Tech",
    badge: "Titanium Turquoise",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F0FDFA 65%, #CCFBF1 100%)",
    accent: "#2DD4BF",
    titleColor: "#0F766E",
    pawnGrad: "url(#skyTurquoiseGrad09)",
    kingGrad: "url(#platinumSilver09)",
    kingTrimGrad: "url(#skyTurquoiseGrad09)",
    impactColor: "#14B8A6",
    floorTile: "rgba(20, 184, 166, 0.08)",
    floorGrid: "rgba(13, 148, 136, 0.14)",
    shadowColor: "rgba(15, 118, 110, 0.11)",
    desc: "Radiant ocean turquoise pawn topples a brushed platinum silver and white ceramic king with crisp dynamic speed arcs."
  },
  {
    id: 10,
    name: "Esports Champion Shield (Tournament)",
    style: "Competitive Gaming Emblem",
    badge: "Tournament Plaque",
    bg: "radial-gradient(circle at 50% 30%, #FFFFFF 0%, #F8FAFC 65%, #EDF2F7 100%)",
    accent: "#F59E0B",
    titleColor: "#B45309",
    pawnGrad: "url(#goldGrad01)",
    kingGrad: "url(#porcelainWhite01)",
    kingTrimGrad: "url(#goldGrad01)",
    impactColor: "#F59E0B",
    floorTile: "rgba(245, 158, 11, 0.08)",
    floorGrid: "rgba(217, 119, 6, 0.14)",
    shadowColor: "rgba(180, 83, 9, 0.12)",
    desc: "Embossed white tournament shield plaque with 24K gold pawn delivering an uppercut strike to a champion white king."
  },
  {
    id: 11,
    name: "Classic Staunton Warm Ivory & Honey Amber",
    style: "Heritage Artisan Woodcraft",
    badge: "Artisan Staunton",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FFFBEB 65%, #FEF3C7 100%)",
    accent: "#FBBF24",
    titleColor: "#92400E",
    pawnGrad: "url(#honeyAmberGrad11)",
    kingGrad: "url(#warmBoneIvory11)",
    kingTrimGrad: "url(#honeyAmberGrad11)",
    impactColor: "#D97706",
    floorTile: "rgba(217, 119, 6, 0.08)",
    floorGrid: "rgba(180, 83, 9, 0.14)",
    shadowColor: "rgba(146, 64, 14, 0.12)",
    desc: "Hand-carved polished honey amber pawn strikes down a warm bone-white ivory king with subtle golden woodgrain sheen."
  },
  {
    id: 12,
    name: "Daylight Solar Flare & High Voltage",
    style: "Supercharged Solar Strike",
    badge: "Solar Voltage",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #FEFCE8 65%, #FEF9C3 100%)",
    accent: "#FACC15",
    titleColor: "#C2410C",
    pawnGrad: "url(#solarFlareGrad12)",
    kingGrad: "url(#porcelainWhite01)",
    kingTrimGrad: "url(#solarFlareGrad12)",
    impactColor: "#F59E0B",
    floorTile: "rgba(234, 179, 8, 0.08)",
    floorGrid: "rgba(202, 138, 4, 0.14)",
    shadowColor: "rgba(161, 98, 7, 0.12)",
    desc: "High-voltage solar gold pawn crackling with daylight electric plasma, snapping the king's crown and toppling it in radiant daylight."
  },
  {
    id: 13,
    name: "Architectural 3D 'V' Apex Strike",
    style: "Signature Monogram Studio",
    badge: "Signature 'V'",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F8FAFC 65%, #F1F5F9 100%)",
    accent: "#F59E0B",
    titleColor: "#1D4ED8",
    pawnGrad: "url(#goldGrad01)",
    kingGrad: "url(#porcelainWhite01)",
    kingTrimGrad: "url(#goldGrad01)",
    impactColor: "#F59E0B",
    floorTile: "rgba(66, 133, 244, 0.08)",
    floorGrid: "rgba(37, 99, 235, 0.14)",
    shadowColor: "rgba(29, 78, 216, 0.12)",
    desc: "Architectural white & gold 3D 'V' ramp on a pristine gallery floor, with the gold pawn launching off the apex to smash the white king."
  },
  {
    id: 14,
    name: "Tactical Precision CAD (Mint & Cyan)",
    style: "Precision Strategy Blueprint",
    badge: "CAD Blueprint",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F0FDF4 65%, #E6FBF0 100%)",
    accent: "#10B981",
    titleColor: "#047857",
    pawnGrad: "url(#emeraldJadeGrad05)",
    kingGrad: "url(#cadWhiteWireframe14)",
    kingTrimGrad: "url(#emeraldJadeGrad05)",
    impactColor: "#10B981",
    floorTile: "rgba(16, 185, 129, 0.07)",
    floorGrid: "rgba(5, 150, 105, 0.14)",
    shadowColor: "rgba(4, 120, 87, 0.11)",
    desc: "Clean white engineering drafting paper with tactical mint trajectory lines, checkmate coordinates (+E8#) and 3D precision shaded pieces."
  },
  {
    id: 15,
    name: "Vooo Studio Quad-Color Signature",
    style: "The Ultimate Brand Flagship",
    badge: "Studio Quad-Color",
    bg: "radial-gradient(circle at 50% 35%, #FFFFFF 0%, #F8F9FC 65%, #EEF2F6 100%)",
    accent: "#4285F4",
    titleColor: "#2563EB",
    pawnGrad: "url(#voooQuadGrad15)",
    kingGrad: "url(#porcelainWhite01)",
    kingTrimGrad: "url(#goldGrad01)",
    impactColor: "#F97316",
    floorTile: "rgba(66, 133, 244, 0.08)",
    floorGrid: "rgba(91, 91, 214, 0.14)",
    shadowColor: "rgba(66, 133, 244, 0.12)",
    desc: "The ultimate Vooo Labs icon: pawn sculptured in the iconic 4-color gradient (Blue, Indigo, Violet, Orange) blasting a white porcelain king."
  }
];

// Generates the full 1024x1024 Master SVG Scene with embedded CrazyBlocks font
function generateFullFrameAppIconSvg(d) {
  return `
  <svg viewBox="0 0 1024 1024" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Embedded Official CrazyBlocks Font -->
      <style>
        @font-face {
          font-family: 'CrazyBlocks';
          src: url('data:font/otf;base64,${fontB64}') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      </style>

      <!-- 1. Gold Gradient (24K Polished Gold) -->
      <linearGradient id="goldGrad01" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFDF0" />
        <stop offset="25%" stop-color="#FDE68A" />
        <stop offset="60%" stop-color="#F59E0B" />
        <stop offset="85%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#B45309" />
      </linearGradient>

      <!-- 2. Pure White Porcelain (Glossy Ceramic) -->
      <linearGradient id="porcelainWhite01" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#F8FAFC" />
        <stop offset="70%" stop-color="#E2E8F0" />
        <stop offset="100%" stop-color="#CBD5E1" />
      </linearGradient>

      <!-- 3. Electric Royal Blue Gradient -->
      <linearGradient id="electricBlueGrad02" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E0F2FE" />
        <stop offset="30%" stop-color="#38BDF8" />
        <stop offset="65%" stop-color="#2563EB" />
        <stop offset="100%" stop-color="#1D4ED8" />
      </linearGradient>

      <!-- 4. Ice White Ceramic Gradient -->
      <linearGradient id="iceWhiteGrad02" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#F0F9FF" />
        <stop offset="80%" stop-color="#E0F2FE" />
        <stop offset="100%" stop-color="#BAE6FD" />
      </linearGradient>

      <!-- 5. Pearl Ivory Gradient -->
      <linearGradient id="pearlIvoryGrad03" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#FEF9C3" />
        <stop offset="70%" stop-color="#FEF08A" />
        <stop offset="100%" stop-color="#FACC15" />
      </linearGradient>

      <!-- 6. Sapphire Light Gradient -->
      <linearGradient id="sapphireLightGrad03" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#DBEAFE" />
        <stop offset="75%" stop-color="#93C5FD" />
        <stop offset="100%" stop-color="#60A5FA" />
      </linearGradient>

      <!-- 7. Coral Sunrise Gradient -->
      <linearGradient id="coralSunriseGrad04" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF7ED" />
        <stop offset="30%" stop-color="#FED7AA" />
        <stop offset="70%" stop-color="#FB923C" />
        <stop offset="100%" stop-color="#EA580C" />
      </linearGradient>

      <!-- 8. Cream Alabaster Gradient -->
      <linearGradient id="creamAlabaster04" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#FFFBEB" />
        <stop offset="80%" stop-color="#FEF3C7" />
        <stop offset="100%" stop-color="#FDE68A" />
      </linearGradient>

      <!-- 9. Emerald Jade Gradient -->
      <linearGradient id="emeraldJadeGrad05" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ECFDF5" />
        <stop offset="30%" stop-color="#A7F3D0" />
        <stop offset="70%" stop-color="#34D399" />
        <stop offset="100%" stop-color="#059669" />
      </linearGradient>

      <!-- 10. Mint Porcelain Gradient -->
      <linearGradient id="mintPorcelain05" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#F0FDF4" />
        <stop offset="80%" stop-color="#DCFCE7" />
        <stop offset="100%" stop-color="#BBF7D0" />
      </linearGradient>

      <!-- 11. Prism Rainbow Glass Gradient -->
      <linearGradient id="prismGlassGrad06" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="25%" stop-color="#BFDBFE" />
        <stop offset="50%" stop-color="#DDD6FE" />
        <stop offset="75%" stop-color="#FBCFE8" />
        <stop offset="100%" stop-color="#FED7AA" />
      </linearGradient>

      <!-- 12. Frosted Crystal Gradient -->
      <linearGradient id="frostedCrystal06" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#F8FAFC" />
        <stop offset="75%" stop-color="#E2E8F0" />
        <stop offset="100%" stop-color="#CBD5E1" />
      </linearGradient>

      <!-- 13. Amethyst Violet Gradient -->
      <linearGradient id="amethystGrad07" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FAF5FF" />
        <stop offset="30%" stop-color="#E9D5FF" />
        <stop offset="70%" stop-color="#C084FC" />
        <stop offset="100%" stop-color="#9333EA" />
      </linearGradient>

      <!-- 14. Lilac Porcelain Gradient -->
      <linearGradient id="lilacPorcelain07" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#FAF5FF" />
        <stop offset="80%" stop-color="#F3E8FF" />
        <stop offset="100%" stop-color="#E9D5FF" />
      </linearGradient>

      <!-- 15. Rose Gold Gradient -->
      <linearGradient id="roseGoldGrad08" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF1F2" />
        <stop offset="30%" stop-color="#FECDD3" />
        <stop offset="70%" stop-color="#FB7185" />
        <stop offset="100%" stop-color="#E11D48" />
      </linearGradient>

      <!-- 16. Powder Alabaster Gradient -->
      <linearGradient id="powderAlabaster08" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#FFF1F2" />
        <stop offset="80%" stop-color="#FFE4E6" />
        <stop offset="100%" stop-color="#FECDD3" />
      </linearGradient>

      <!-- 17. Sky Turquoise Gradient -->
      <linearGradient id="skyTurquoiseGrad09" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F0FDFA" />
        <stop offset="30%" stop-color="#99F6E4" />
        <stop offset="70%" stop-color="#2DD4BF" />
        <stop offset="100%" stop-color="#0D9488" />
      </linearGradient>

      <!-- 18. Platinum Silver Gradient -->
      <linearGradient id="platinumSilver09" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="35%" stop-color="#F1F5F9" />
        <stop offset="70%" stop-color="#CBD5E1" />
        <stop offset="100%" stop-color="#94A3B8" />
      </linearGradient>

      <!-- 19. Honey Amber Gradient -->
      <linearGradient id="honeyAmberGrad11" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFBEB" />
        <stop offset="30%" stop-color="#FEF3C7" />
        <stop offset="70%" stop-color="#FBBF24" />
        <stop offset="100%" stop-color="#D97706" />
      </linearGradient>

      <!-- 20. Warm Bone Ivory Gradient -->
      <linearGradient id="warmBoneIvory11" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#FEFCE8" />
        <stop offset="80%" stop-color="#FEF9C3" />
        <stop offset="100%" stop-color="#FEF08A" />
      </linearGradient>

      <!-- 21. Solar Flare Gradient -->
      <linearGradient id="solarFlareGrad12" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF08A" />
        <stop offset="30%" stop-color="#FACC15" />
        <stop offset="70%" stop-color="#FB923C" />
        <stop offset="100%" stop-color="#EA580C" />
      </linearGradient>

      <!-- 22. CAD White Wireframe Gradient -->
      <linearGradient id="cadWhiteWireframe14" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#F0FDF4" />
        <stop offset="80%" stop-color="#DCFCE7" />
        <stop offset="100%" stop-color="#A7F3D0" />
      </linearGradient>

      <!-- 23. Vooo Brand 4-Color Signature Gradient -->
      <linearGradient id="voooQuadGrad15" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4285F4" />
        <stop offset="33%" stop-color="#5B5BD6" />
        <stop offset="66%" stop-color="#7C3AED" />
        <stop offset="100%" stop-color="#F97316" />
      </linearGradient>

      <!-- Soft Tinted Ambient Occlusion Filters (No harsh dark shadows) -->
      <filter id="softDiffuseShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="16" stdDeviation="22" flood-color="${d.shadowColor}" flood-opacity="1" />
      </filter>

      <filter id="pieceGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="${d.accent}" flood-opacity="0.18" />
      </filter>
    </defs>

    <!-- 1. Pure White / High-Key Studio Background -->
    <rect width="1024" height="1024" fill="#FFFFFF" />
    <rect width="1024" height="1024" fill="${d.bg}" />

    <!-- Special Feature: Tournament Shield Plaque for Design 10 -->
    ${d.id === 10 ? `
      <path d="M512 80 L860 160 C860 560 690 740 512 850 C334 740 164 560 164 160 Z" fill="#FFFFFF" stroke="url(#goldGrad01)" stroke-width="8" filter="url(#pieceGlow)"/>
      <path d="M512 110 L830 185 C830 540 670 710 512 815 C354 710 194 540 194 185 Z" fill="#FAFAFA" stroke="rgba(245, 158, 11, 0.2)" stroke-width="2"/>
    ` : ''}

    <!-- Special Feature: Architectural 3D 'V' for Design 13 -->
    ${d.id === 13 ? `
      <g opacity="0.45" filter="url(#pieceGlow)">
        <polygon points="120,220 512,820 904,220 760,220 512,610 264,220" fill="url(#goldGrad01)" />
        <polygon points="120,220 264,220 512,610 512,640 240,240" fill="#FFFFFF" opacity="0.6"/>
      </g>
    ` : ''}

    <!-- 2. Floating Isometric Chessboard Plate (Floor) -->
    <g opacity="0.95">
      <!-- Outer Base Plate -->
      <path d="M112 770 L512 620 L912 770 L512 920 Z" fill="#FFFFFF" stroke="${d.floorGrid}" stroke-width="2.5" filter="url(#softDiffuseShadow)"/>
      
      <!-- Isometric Checkered Tiles -->
      <path d="M212 732 L312 695 L412 732 L312 770 Z" fill="${d.floorTile}" />
      <path d="M412 808 L512 770 L612 808 L512 845 Z" fill="${d.floorTile}" />
      <path d="M412 658 L512 620 L612 658 L512 695 Z" fill="${d.floorTile}" />
      <path d="M612 732 L712 695 L812 732 L712 770 Z" fill="${d.floorTile}" />
      
      <!-- Subtle Grid Inset Lines -->
      <path d="M312 695 L712 845" stroke="${d.floorGrid}" stroke-width="1.5" opacity="0.6"/>
      <path d="M712 695 L312 845" stroke="${d.floorGrid}" stroke-width="1.5" opacity="0.6"/>
    </g>

    <!-- 3. Ambient Diffuse Ground Contact Shadows (Soft Tinted) -->
    <ellipse cx="380" cy="775" rx="120" ry="30" fill="${d.shadowColor}" />
    <ellipse cx="690" cy="710" rx="150" ry="34" fill="${d.shadowColor}" transform="rotate(18 690 710)" />

    <!-- 4. Dynamic Kinetic Motion Lines from Pawn -->
    <g stroke="${d.accent}" stroke-linecap="round" opacity="0.75">
      <line x1="160" y1="680" x2="350" y2="580" stroke-width="5" stroke-dasharray="12 14" />
      <line x1="110" y1="600" x2="330" y2="510" stroke-width="3.5" stroke-dasharray="16 12" />
      <line x1="190" y1="740" x2="370" y2="650" stroke-width="6" />
      <line x1="140" y1="530" x2="310" y2="460" stroke-width="2.5" />
    </g>

    <!-- 5. Central Impact Shockwave Burst -->
    <circle cx="505" cy="475" r="160" fill="${d.impactColor}" fill-opacity="0.08" />
    <circle cx="505" cy="475" r="110" stroke="${d.impactColor}" stroke-width="3" opacity="0.75" stroke-dasharray="14 10" />
    <circle cx="505" cy="475" r="55" stroke="#FFFFFF" stroke-width="5" opacity="0.95" />

    <!-- 6. Flying Facet Shards & Energy Sparks -->
    <g fill="${d.impactColor}" opacity="0.95">
      <circle cx="560" cy="365" r="7" />
      <circle cx="620" cy="305" r="6" />
      <circle cx="490" cy="325" r="6" />
      <circle cx="675" cy="395" r="8" />
      <polygon points="535,375 555,365 548,388" fill="${d.accent}" />
      <polygon points="630,325 648,312 642,338" fill="${d.impactColor}" />
      <polygon points="710,375 730,362 720,392" fill="${d.accent}" />
    </g>

    <!-- 7. THE TOPPLING KING (Knocked Over 52° in Defeat — Light & Luminous) -->
    <g transform="translate(505, 475) rotate(52) translate(-505, -475)" filter="url(#pieceGlow)">
      <!-- King Pedestal Base -->
      <ellipse cx="580" cy="720" rx="105" ry="26" fill="${d.kingGrad}" />
      <path d="M485 715 L500 645 L660 645 L675 715 Z" fill="${d.kingGrad}" />
      <ellipse cx="580" cy="645" rx="85" ry="18" fill="${d.kingGrad}" />
      
      <!-- King Gold/Trim Accent Ring -->
      <ellipse cx="580" cy="710" rx="98" ry="22" fill="none" stroke="${d.kingTrimGrad}" stroke-width="4" opacity="0.85" />
      <ellipse cx="580" cy="645" rx="82" ry="16" fill="none" stroke="${d.kingTrimGrad}" stroke-width="3" opacity="0.85" />

      <!-- King Robe / Fluted Body -->
      <path d="M505 640 C515 560 525 470 520 405 L640 405 C635 470 645 560 655 640 Z" fill="${d.kingGrad}" />
      <!-- Lustrous Specular Highlight Reflection -->
      <path d="M535 635 C542 565 548 480 546 420 L566 420 C566 480 560 565 552 635 Z" fill="#FFFFFF" opacity="0.75" />

      <!-- King Collar Tiers -->
      <ellipse cx="580" cy="400" rx="72" ry="15" fill="${d.kingGrad}" />
      <ellipse cx="580" cy="378" rx="60" ry="13" fill="${d.kingGrad}" />
      <ellipse cx="580" cy="400" rx="70" ry="14" fill="none" stroke="${d.kingTrimGrad}" stroke-width="2.5" opacity="0.8" />

      <!-- King Crown Crenellations -->
      <path d="M525 378 L515 270 L555 305 L580 260 L605 305 L645 270 L635 378 Z" fill="${d.kingGrad}" stroke="${d.kingTrimGrad}" stroke-width="2"/>
      <ellipse cx="580" cy="270" rx="16" ry="16" fill="${d.kingTrimGrad}" />
    </g>

    <!-- 8. THE FLYING KING CROWN IN MID-AIR -->
    <g transform="translate(735, 205) rotate(-35)" filter="url(#pieceGlow)">
      <!-- Trajectory Streak -->
      <path d="M-80 80 Q 0 -10 60 -60" stroke="${d.impactColor}" stroke-width="4" stroke-dasharray="6 8" fill="none" opacity="0.8"/>
      <!-- Gleaming 24K Gold Cross Finial -->
      <rect x="-10" y="-55" width="20" height="60" rx="4" fill="url(#goldGrad01)" />
      <rect x="-32" y="-40" width="64" height="18" rx="4" fill="url(#goldGrad01)" />
      <!-- Star Diamond Core -->
      <circle cx="0" cy="-31" r="9" fill="#FFFFFF" />
      <path d="M0 -72 L6 -57 L21 -57 L8 -47 L13 -32 L0 -42 L-13 -32 L-8 -47 L-21 -57 L-6 -57 Z" fill="#F59E0B" transform="scale(0.9) translate(40,-60)"/>
    </g>

    <!-- 9. THE TRIUMPHANT 3D PAWN (Surging, Powerful Champion Strike) -->
    <g filter="url(#softDiffuseShadow)">
      <!-- Pawn Base Pedestal -->
      <ellipse cx="370" cy="745" rx="104" ry="26" fill="${d.pawnGrad}" />
      <path d="M275 740 L295 665 L445 665 L465 740 Z" fill="${d.pawnGrad}" />
      <ellipse cx="370" cy="665" rx="84" ry="18" fill="${d.pawnGrad}" />
      <!-- Metallic / Specular Ring Lip -->
      <ellipse cx="370" cy="735" rx="98" ry="20" fill="none" stroke="#FFFFFF" stroke-width="3.5" opacity="0.75" />
      <ellipse cx="370" cy="665" rx="80" ry="16" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.6" />

      <!-- Pawn Waisted Torso -->
      <path d="M305 660 C320 575 330 505 330 450 L410 450 C410 505 420 575 435 660 Z" fill="${d.pawnGrad}" />
      <!-- Glossy 3D Highlight Curve -->
      <path d="M330 655 C340 580 346 515 346 460 L368 460 C368 515 362 580 350 655 Z" fill="#FFFFFF" opacity="0.65" />

      <!-- Pawn Torus Collar Rings -->
      <ellipse cx="370" cy="445" rx="70" ry="15" fill="${d.pawnGrad}" />
      <ellipse cx="370" cy="422" rx="54" ry="12" fill="${d.pawnGrad}" />
      <ellipse cx="370" cy="445" rx="66" ry="13" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.7" />

      <!-- Pawn Spherical Head (Gleaming 3D Sphere) -->
      <circle cx="370" cy="330" r="84" fill="${d.pawnGrad}" />
      <!-- Specular Light Reflection Bulb -->
      <ellipse cx="340" cy="294" rx="34" ry="24" fill="#FFFFFF" opacity="0.75" transform="rotate(-25 340 294)" />
      <circle cx="325" cy="280" r="10" fill="#FFFFFF" opacity="0.95" />
    </g>

    <!-- Special Feature: Crown Seized atop Pawn for Design 03 -->
    ${d.id === 3 ? `
      <g transform="translate(370, 225)" filter="url(#pieceGlow)">
        <path d="M-48 24 L-54 -20 L-24 0 L0 -30 L24 0 L54 -20 L48 24 Z" fill="url(#goldGrad01)" stroke="#B45309" stroke-width="3"/>
        <circle cx="0" cy="-30" r="6" fill="#FFFFFF"/>
        <circle cx="-54" cy="-20" r="5" fill="#FFFFFF"/>
        <circle cx="54" cy="-20" r="5" fill="#FFFFFF"/>
      </g>
    ` : ''}

    <!-- Special Feature: CAD Coordinates for Design 14 -->
    ${d.id === 14 ? `
      <g stroke="#059669" opacity="0.75" font-family="'JetBrains Mono', monospace">
        <circle cx="505" cy="475" r="210" stroke-width="2" stroke-dasharray="10 7" fill="none"/>
        <line x1="505" y1="240" x2="505" y2="720" stroke-width="1.5" stroke-dasharray="8 5"/>
        <line x1="260" y1="475" x2="750" y2="475" stroke-width="1.5" stroke-dasharray="8 5"/>
        <text x="300" y="270" fill="#047857" font-size="16" font-weight="700">TARGET: WHITE KING [E8]</text>
        <text x="300" y="295" fill="#059669" font-size="14">STRIKE: PAWN [D7->E8] #WIN</text>
        <text x="650" y="640" fill="#047857" font-size="16" font-weight="700">STATUS: CHECKMATE</text>
      </g>
    ` : ''}

    <!-- 10. Starburst Core Flash Point -->
    <path d="M505 475 L460 405 L500 435 L490 380 L525 430 L565 395 L535 450 L600 445 L540 480 L610 510 L540 510 L575 560 L525 525 L515 585 L495 530 L445 560 L475 505 L425 495 Z" fill="#FFFFFF" opacity="0.95" filter="drop-shadow(0 0 14px ${d.impactColor})" />

    <!-- 11. Official Brand Typography in CrazyBlocks -->
    <g transform="translate(512, 946)">
      <text x="0" y="0" text-anchor="middle" font-family="'CrazyBlocks', sans-serif" font-size="54" letter-spacing="2">
        <tspan fill="#4285F4">V</tspan><tspan fill="#5B5BD6">O</tspan><tspan fill="#7C3AED">O</tspan><tspan fill="#F97316">O</tspan>
        <tspan fill="${d.titleColor}" dx="16">CHESS</tspan>
        <tspan fill="${d.accent}" dx="12">3D</tspan>
      </text>
    </g>
  </svg>
  `;
}

// Generate the 15 HTML Templates & 15 Standalone SVGs
console.log('[build-white] Writing 15 full-frame responsive HTML templates & standalone SVGs...');
whiteDesigns.forEach(d => {
  const dayStr = String(d.id).padStart(2, '0');
  const svgContent = generateFullFrameAppIconSvg(d).trim();

  // 1. Write Standalone SVG File
  const svgFilePath = path.join(svgOutDir, `logo-${dayStr}.svg`);
  fs.writeFileSync(svgFilePath, svgContent, 'utf8');

  // 2. Write 100% Responsive HTML Template
  const htmlFilePath = path.join(templatesDir, `logo-${dayStr}.html`);
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — App Icon ${dayStr}: ${d.name}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>`;
  fs.writeFileSync(htmlFilePath, html, 'utf8');
});

// Generate 2 Light Mobile Splash Screen HTML Templates
console.log('[build-white] Generating 2 Light Mobile Splash Screens (Android 1080x1920 & iOS 1242x2688)...');

function generateSplashHtml(width, height, isAndroid) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — ${isAndroid ? 'Android' : 'iOS'} Light Splash Screen</title>
  <style>
    @font-face {
      font-family: 'CrazyBlocks';
      src: url('data:font/otf;base64,${fontB64}') format('opentype');
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: ${width}px;
      height: ${height}px;
      overflow: hidden;
      background: radial-gradient(circle at 50% 40%, #FFFFFF 0%, #F8FAFC 70%, #EDF2F7 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: ${isAndroid ? '120px 60px 80px' : '160px 80px 100px'};
    }
    .top-badge {
      font-size: ${isAndroid ? '18px' : '22px'};
      font-weight: 700;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #94A3B8;
    }
    .hero-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .icon-box {
      width: ${isAndroid ? '540px' : '640px'};
      height: ${isAndroid ? '540px' : '640px'};
      border-radius: ${isAndroid ? '120px' : '145px'};
      box-shadow: 0 30px 70px rgba(66, 133, 244, 0.15), 0 10px 25px rgba(0,0,0,0.06);
      overflow: hidden;
      background: #FFFFFF;
      margin-bottom: 48px;
    }
    .app-title {
      font-family: 'CrazyBlocks', sans-serif;
      font-size: ${isAndroid ? '68px' : '82px'};
      letter-spacing: 2px;
      line-height: 1;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .app-sub {
      font-size: ${isAndroid ? '20px' : '24px'};
      font-weight: 600;
      letter-spacing: 2px;
      color: #64748B;
      text-transform: uppercase;
    }
    .bottom-tag {
      font-size: ${isAndroid ? '16px' : '19px'};
      font-weight: 700;
      letter-spacing: 3px;
      color: #94A3B8;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <div class="top-badge">GRANDMASTER TACTICS</div>
  
  <div class="hero-center">
    <div class="icon-box">
      ${generateFullFrameAppIconSvg(whiteDesigns[0])}
    </div>
    <div class="app-title">
      <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
      <span style="color: #B45309; margin-left: 14px;">CHESS</span>
      <span style="color: #F59E0B; margin-left: 10px;">3D</span>
    </div>
    <div class="app-sub">Pure Tactical Mastery in Real-Time 3D</div>
  </div>

  <div class="bottom-tag">ENGINEERED BY VOOO LABS</div>
</body>
</html>`;
}

fs.writeFileSync(path.join(templatesDir, 'splash-light-android.html'), generateSplashHtml(1080, 1920, true), 'utf8');
fs.writeFileSync(path.join(templatesDir, 'splash-light-ios.html'), generateSplashHtml(1242, 2688, false), 'utf8');

console.log('[build-white] All 15 light designs with CrazyBlocks typography generated successfully!');
