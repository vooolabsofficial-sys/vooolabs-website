#!/usr/bin/env node
/**
 * VOOO CHESS 3D — Asset & Template Builder
 * Generates 15 App Icon Logo variations (1024x1024) and 2 Splash Screens (1080x1920)
 * featuring the signature concept: Pawn knocking down/blasting the King.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatesDir = path.join(__dirname, 'templates');

fs.mkdirSync(templatesDir, { recursive: true });

// Common SVG components
function getBrandLogoHtml(fontSize = 24) {
  return `
    <span style="font-family: 'CrazyBlocks', sans-serif; font-size: ${fontSize}px; letter-spacing: 1.5px; line-height: 1; display: inline-flex; align-items: baseline;">
      <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
    </span>
  `;
}

// 15 Distinct Design Definitions
const designs = [
  {
    id: 1,
    name: "Obsidian & Gold Luxury 3D",
    style: "Luxury 3D",
    badge: "Grandmaster Edition",
    bg: "radial-gradient(circle at 40% 35%, #1E293B 0%, #0A0F1E 60%, #030712 100%)",
    accent: "#F59E0B",
    pawnColor: "url(#goldGrad)",
    kingColor: "url(#darkMarbleGrad)",
    impactColor: "#FCD34D",
    desc: "Polished 24k gold pawn strikes down the obsidian black king. Gold cross flying in mid-air with radial spark blast."
  },
  {
    id: 2,
    name: "Cyber Neon Blast",
    style: "Cyberpunk / Synthwave",
    badge: "Arcade 3D",
    bg: "radial-gradient(circle at 50% 40%, #1E1B4B 0%, #0A0F1E 70%, #020617 100%)",
    accent: "#00F0FF",
    pawnColor: "url(#cyanNeonGrad)",
    kingColor: "url(#holoPurpleGrad)",
    impactColor: "#00F0FF",
    desc: "Laser cyan pawn strikes with shockwave trail. Holographic purple king shattering into polygon shards."
  },
  {
    id: 3,
    name: "Royal Crown Seized (Promotion Triumph)",
    style: "Triumphant Royal",
    badge: "Pawn Becomes King",
    bg: "radial-gradient(circle at 50% 30%, #1E3A8A 0%, #0A0F1E 70%, #000814 100%)",
    accent: "#EAB308",
    pawnColor: "url(#ivoryRoyalGrad)",
    kingColor: "url(#crimsonKingGrad)",
    impactColor: "#FEF08A",
    desc: "Pawn knocks king off the pedestal; golden king crown is blasted into the air and landing directly on the pawn's head!"
  },
  {
    id: 4,
    name: "Kinetic Shockwave / Impact Blast",
    style: "Kinetic Action",
    badge: "High Velocity",
    bg: "radial-gradient(circle at 45% 45%, #312E81 0%, #0A0F1E 65%, #050510 100%)",
    accent: "#F97316",
    pawnColor: "url(#amberPawnGrad)",
    kingColor: "url(#indigoKingGrad)",
    impactColor: "#FB923C",
    desc: "High-speed meteor pawn with motion blur lines creates a massive circular shockwave ring blasting the king backward."
  },
  {
    id: 5,
    name: "Minimalist Swiss Flat 3D",
    style: "Minimalist Editorial",
    badge: "Studio Clean",
    bg: "linear-gradient(145deg, #1E293B 0%, #0F172A 50%, #020617 100%)",
    accent: "#4285F4",
    pawnColor: "url(#voooBlueGrad)",
    kingColor: "url(#matteWhiteGrad)",
    impactColor: "#F97316",
    desc: "Clean Apple/Linear studio aesthetic. Geometric 3D blue pawn toppling a white king with crisp soft shadows."
  },
  {
    id: 6,
    name: "Crystal Glassmorphism / Prism",
    style: "Frosted Glass",
    badge: "Prism Edition",
    bg: "radial-gradient(circle at 50% 35%, #2E1065 0%, #0F172A 70%, #020617 100%)",
    accent: "#A855F7",
    pawnColor: "url(#glassPawnGrad)",
    kingColor: "url(#darkGlassGrad)",
    impactColor: "#C084FC",
    desc: "Translucent frosted glass pawn ramming the dark crystal king, sending prismatic crystal facets flying."
  },
  {
    id: 7,
    name: "Inferno / Magma Checkmate",
    style: "Molten Fire",
    badge: "Volcanic Clash",
    bg: "radial-gradient(circle at 45% 45%, #450A0A 0%, #180505 60%, #0A0F1E 100%)",
    accent: "#EF4444",
    pawnColor: "url(#firePawnGrad)",
    kingColor: "url(#obsidianCharGrad)",
    impactColor: "#F87171",
    desc: "Blazing fire pawn with solar corona slams the king into crumbling ash, glowing magma sparks and embers rising."
  },
  {
    id: 8,
    name: "Esports Shield Crest",
    style: "Esports Tournament",
    badge: "Pro League",
    bg: "radial-gradient(circle at 50% 30%, #1E293B 0%, #0A0F1E 70%, #020617 100%)",
    accent: "#38BDF8",
    pawnColor: "url(#chromePawnGrad)",
    kingColor: "url(#darkGoldGrad)",
    impactColor: "#38BDF8",
    desc: "Inscribed in a titanium hexagonal gaming shield, 3D embossed pawn delivering a knockout strike to the king."
  },
  {
    id: 9,
    name: "Vivid Vooo Quad-Color Signature",
    style: "Vooo Brand Identity",
    badge: "Vooo Quad Stack",
    bg: "radial-gradient(circle at 50% 40%, #172554 0%, #0A0F1E 70%, #020617 100%)",
    accent: "#10B981",
    pawnColor: "url(#voooRainbowGrad)",
    kingColor: "url(#monochromeDarkGrad)",
    impactColor: "#10B981",
    desc: "Pawn radiates Vooo Labs 4 colors in a neon shockwave ribbon, blasting a monochrome king into colored light beams."
  },
  {
    id: 10,
    name: "Emerald Grandmaster",
    style: "Casino / Luxury Velvet",
    badge: "High Roller 3D",
    bg: "radial-gradient(circle at 50% 35%, #064E3B 0%, #022C22 60%, #02120C 100%)",
    accent: "#10B981",
    pawnColor: "url(#goldPawnGrad2)",
    kingColor: "url(#emeraldKingGrad)",
    impactColor: "#34D399",
    desc: "Deep emerald green velvet arena. 24k gold pawn strikes down the deep green onyx king with radiant emerald sparks."
  },
  {
    id: 11,
    name: "Low-Poly 3D Faceted",
    style: "Geometric Low-Poly",
    badge: "Polygon Art",
    bg: "radial-gradient(circle at 50% 40%, #1E293B 0%, #0F172A 70%, #020617 100%)",
    accent: "#EC4899",
    pawnColor: "url(#polyPawnGrad)",
    kingColor: "url(#polyKingGrad)",
    impactColor: "#F472B6",
    desc: "Sharp faceted low-poly 3D pawn colliding with faceted king, exploding into floating geometric triangles."
  },
  {
    id: 12,
    name: "Lightning Arc / High Voltage",
    style: "Electric Thunder",
    badge: "Lightning Checkmate",
    bg: "radial-gradient(circle at 45% 40%, #0C4A6E 0%, #0A0F1E 70%, #020617 100%)",
    accent: "#0284C7",
    pawnColor: "url(#electroPawnGrad)",
    kingColor: "url(#stormKingGrad)",
    impactColor: "#38BDF8",
    desc: "Electric lightning branches from the pawn, cracking the king in mid-air and splitting the crown with electric sparks."
  },
  {
    id: 13,
    name: "Golden Monogram V-Clash",
    style: "Monogram Architecture",
    badge: "Signature 'V'",
    bg: "radial-gradient(circle at 50% 35%, #312E81 0%, #0A0F1E 70%, #020617 100%)",
    accent: "#F59E0B",
    pawnColor: "url(#goldGrad)",
    kingColor: "url(#darkMarbleGrad)",
    impactColor: "#FBBF24",
    desc: "A giant 3D chrome/gold 'V' creates the battlefield runway where the pawn launches forward to smash the king."
  },
  {
    id: 14,
    name: "Tactical HUD / Sci-Fi Matrix",
    style: "Tactical Telemetry",
    badge: "Holo Checkmate",
    bg: "radial-gradient(circle at 50% 40%, #022C22 0%, #0A0F1E 70%, #020617 100%)",
    accent: "#22C55E",
    pawnColor: "url(#matrixPawnGrad)",
    kingColor: "url(#matrixKingGrad)",
    impactColor: "#4ADE80",
    desc: "Holographic green coordinate telemetry (E4xKING, CHECKMATE CONFIRMED) with vector wireframe pawn striking down king."
  },
  {
    id: 15,
    name: "Cinematic Studio Spotlight",
    style: "Cinematic 3D",
    badge: "Masterpiece",
    bg: "radial-gradient(circle at 45% 25%, #334155 0%, #0A0F1E 60%, #000000 100%)",
    accent: "#FFFFFF",
    pawnColor: "url(#porcelainPawnGrad)",
    kingColor: "url(#pitchBlackKingGrad)",
    impactColor: "#FFFFFF",
    desc: "Single intense overhead studio spotlight. Gleaming white porcelain pawn stands triumphant as black king crashes down."
  }
];

// Helper to generate the core SVG scene for the Pawn striking King
function generateChessClashSvg(design, isSplash = false) {
  const width = isSplash ? 900 : 860;
  const height = isSplash ? 900 : 700;
  
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 900 750" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.6));">
    <defs>
      <!-- Gradients -->
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFBEB" />
        <stop offset="25%" stop-color="#FDE047" />
        <stop offset="60%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#78350F" />
      </linearGradient>

      <linearGradient id="goldPawnGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF08A" />
        <stop offset="50%" stop-color="#EAB308" />
        <stop offset="100%" stop-color="#854D0E" />
      </linearGradient>

      <linearGradient id="darkMarbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#334155" />
        <stop offset="40%" stop-color="#1E293B" />
        <stop offset="80%" stop-color="#0F172A" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>

      <linearGradient id="cyanNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E0F2FE" />
        <stop offset="40%" stop-color="#38BDF8" />
        <stop offset="80%" stop-color="#0284C7" />
        <stop offset="100%" stop-color="#0369A1" />
      </linearGradient>

      <linearGradient id="holoPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F3E8FF" />
        <stop offset="50%" stop-color="#A855F7" />
        <stop offset="100%" stop-color="#581C87" />
      </linearGradient>

      <linearGradient id="ivoryRoyalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="#E2E8F0" />
        <stop offset="100%" stop-color="#94A3B8" />
      </linearGradient>

      <linearGradient id="crimsonKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7F1D1D" />
        <stop offset="50%" stop-color="#450A0A" />
        <stop offset="100%" stop-color="#1C0505" />
      </linearGradient>

      <linearGradient id="amberPawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF7ED" />
        <stop offset="40%" stop-color="#FB923C" />
        <stop offset="80%" stop-color="#EA580C" />
        <stop offset="100%" stop-color="#7C2D12" />
      </linearGradient>

      <linearGradient id="indigoKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4338CA" />
        <stop offset="60%" stop-color="#312E81" />
        <stop offset="100%" stop-color="#1E1B4B" />
      </linearGradient>

      <linearGradient id="voooBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#93C5FD" />
        <stop offset="50%" stop-color="#4285F4" />
        <stop offset="100%" stop-color="#1D4ED8" />
      </linearGradient>

      <linearGradient id="matteWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F8FAFC" />
        <stop offset="50%" stop-color="#CBD5E1" />
        <stop offset="100%" stop-color="#64748B" />
      </linearGradient>

      <linearGradient id="glassPawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.9)" />
        <stop offset="40%" stop-color="rgba(192,132,252,0.6)" />
        <stop offset="80%" stop-color="rgba(126,34,206,0.4)" />
        <stop offset="100%" stop-color="rgba(88,28,135,0.7)" />
      </linearGradient>

      <linearGradient id="darkGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(71,85,105,0.8)" />
        <stop offset="50%" stop-color="rgba(30,41,59,0.7)" />
        <stop offset="100%" stop-color="rgba(2,6,23,0.9)" />
      </linearGradient>

      <linearGradient id="firePawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF08A" />
        <stop offset="30%" stop-color="#F97316" />
        <stop offset="70%" stop-color="#DC2626" />
        <stop offset="100%" stop-color="#7F1D1D" />
      </linearGradient>

      <linearGradient id="obsidianCharGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#262626" />
        <stop offset="50%" stop-color="#171717" />
        <stop offset="100%" stop-color="#0A0A0A" />
      </linearGradient>

      <linearGradient id="chromePawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#94A3B8" />
        <stop offset="70%" stop-color="#475569" />
        <stop offset="100%" stop-color="#1E293B" />
      </linearGradient>

      <linearGradient id="darkGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#CA8A04" />
        <stop offset="50%" stop-color="#854D0E" />
        <stop offset="100%" stop-color="#422006" />
      </linearGradient>

      <linearGradient id="voooRainbowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4285F4" />
        <stop offset="35%" stop-color="#5B5BD6" />
        <stop offset="70%" stop-color="#7C3AED" />
        <stop offset="100%" stop-color="#F97316" />
      </linearGradient>

      <linearGradient id="monochromeDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#475569" />
        <stop offset="50%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>

      <linearGradient id="emeraldKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#065F46" />
        <stop offset="50%" stop-color="#064E3B" />
        <stop offset="100%" stop-color="#022C22" />
      </linearGradient>

      <linearGradient id="polyPawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F472B6" />
        <stop offset="50%" stop-color="#DB2777" />
        <stop offset="100%" stop-color="#831843" />
      </linearGradient>

      <linearGradient id="polyKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#334155" />
        <stop offset="50%" stop-color="#1E293B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <linearGradient id="electroPawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F0F9FF" />
        <stop offset="40%" stop-color="#38BDF8" />
        <stop offset="80%" stop-color="#0284C7" />
        <stop offset="100%" stop-color="#075985" />
      </linearGradient>

      <linearGradient id="stormKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#312E81" />
        <stop offset="50%" stop-color="#1E1B4B" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>

      <linearGradient id="matrixPawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#86EFAC" />
        <stop offset="50%" stop-color="#22C55E" />
        <stop offset="100%" stop-color="#14532D" />
      </linearGradient>

      <linearGradient id="matrixKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#15803D" />
        <stop offset="50%" stop-color="#166534" />
        <stop offset="100%" stop-color="#052E16" />
      </linearGradient>

      <linearGradient id="porcelainPawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="60%" stop-color="#F1F5F9" />
        <stop offset="100%" stop-color="#CBD5E1" />
      </linearGradient>

      <linearGradient id="pitchBlackKingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B" />
        <stop offset="60%" stop-color="#0F172A" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>

      <!-- Radial glows & filters -->
      <filter id="glow-${design.id}" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="16" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      <radialGradient id="impactRadial-${design.id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${design.impactColor}" stop-opacity="0.9" />
        <stop offset="40%" stop-color="${design.accent}" stop-opacity="0.5" />
        <stop offset="80%" stop-color="${design.accent}" stop-opacity="0.1" />
        <stop offset="100%" stop-color="${design.accent}" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- 1. Isometric 3D Chessboard Floor Perspective -->
    <g opacity="0.35">
      <path d="M50 620 L450 480 L850 620 L450 740 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
      <!-- Grid Tiles -->
      <path d="M150 585 L450 480 L550 515 L250 620 Z" fill="rgba(255,255,255,0.04)" />
      <path d="M350 655 L650 550 L750 585 L450 690 Z" fill="rgba(255,255,255,0.04)" />
      <path d="M250 550 L450 480 L450 550 L250 620 Z" fill="${design.accent}" fill-opacity="0.08" />
    </g>

    <!-- 2. Dynamic Speed & Kinetic Lines from Pawn -->
    <g stroke="${design.accent}" stroke-linecap="round" opacity="0.6">
      <line x1="120" y1="520" x2="310" y2="430" stroke-width="4" stroke-dasharray="8 12" />
      <line x1="80" y1="460" x2="300" y2="380" stroke-width="3" stroke-dasharray="14 10" />
      <line x1="160" y1="580" x2="330" y2="500" stroke-width="5" />
      <line x1="100" y1="390" x2="280" y2="330" stroke-width="2" />
    </g>

    <!-- 3. Central Impact Shockwave Emitters -->
    <circle cx="430" cy="380" r="140" fill="url(#impactRadial-${design.id})" />
    <circle cx="430" cy="380" r="85" stroke="${design.impactColor}" stroke-width="3" opacity="0.8" stroke-dasharray="12 8" />
    <circle cx="430" cy="380" r="45" stroke="#FFFFFF" stroke-width="4" opacity="0.9" />

    <!-- 4. Blown-Away King Debris / Flying Sparks -->
    <g fill="${design.impactColor}" opacity="0.9">
      <circle cx="490" cy="270" r="6" />
      <circle cx="530" cy="220" r="4" />
      <circle cx="420" cy="240" r="5" />
      <circle cx="580" cy="310" r="7" />
      <circle cx="510" cy="360" r="5" />
      <polygon points="460,280 475,270 470,290" fill="${design.accent}" />
      <polygon points="540,240 555,230 550,250" fill="#FFFFFF" />
      <polygon points="520,180 535,175 528,195" fill="${design.impactColor}" />
      <polygon points="620,290 635,280 625,305" fill="${design.accent}" />
    </g>

    <!-- 5. THE FALLING / TOPPLING KING (Tilted 55 degrees to the right in defeat) -->
    <g transform="translate(430, 380) rotate(52) translate(-430, -380)" filter="url(#glow-${design.id})">
      <!-- Motion streak behind the King -->
      <path d="M420 300 Q 520 250 620 300" stroke="rgba(255,255,255,0.2)" stroke-width="6" stroke-linecap="round" fill="none"/>
      
      <!-- King Base Pedestal -->
      <ellipse cx="490" cy="610" rx="95" ry="24" fill="${design.kingColor}" />
      <path d="M400 605 L415 540 L565 540 L580 605 Z" fill="${design.kingColor}" />
      <ellipse cx="490" cy="540" rx="78" ry="16" fill="${design.kingColor}" opacity="0.9" />

      <!-- King Body / Regal Robe Fluting -->
      <path d="M420 535 C430 460 440 380 435 320 L545 320 C540 380 550 460 560 535 Z" fill="${design.kingColor}" />
      <!-- Specular Robe Highlight -->
      <path d="M450 530 C455 465 460 390 458 335 L475 335 C475 390 470 465 465 530 Z" fill="#FFFFFF" opacity="0.15" />

      <!-- King Neck Collar -->
      <ellipse cx="490" cy="315" rx="65" ry="14" fill="${design.kingColor}" />
      <ellipse cx="490" cy="295" rx="55" ry="12" fill="${design.kingColor}" />

      <!-- King Crown & Head Crenellations -->
      <path d="M440 295 L430 200 L465 230 L490 190 L515 230 L550 200 L540 295 Z" fill="${design.kingColor}" />
      <ellipse cx="490" cy="200" rx="14" ry="14" fill="${design.kingColor}" />
    </g>

    <!-- 6. THE KING'S CROWN / CROSS FINIAL BLASTED OFF INTO THE AIR -->
    <g transform="translate(620, 150) rotate(-35)">
      <!-- Motion arc of crown flying -->
      <path d="M-60 60 Q 0 -10 40 -40" stroke="${design.impactColor}" stroke-width="3" stroke-dasharray="4 6" fill="none" opacity="0.7"/>
      <!-- Glowing Cross Crown -->
      <rect x="-8" y="-45" width="16" height="50" rx="3" fill="url(#goldGrad)" />
      <rect x="-26" y="-32" width="52" height="15" rx="3" fill="url(#goldGrad)" />
      <circle cx="0" cy="-25" r="7" fill="#FFFFFF" />
      <!-- Sparkles around flying crown -->
      <path d="M0 -60 L4 -48 L16 -48 L6 -40 L10 -28 L0 -34 L-10 -28 L-6 -40 L-16 -48 L-4 -48 Z" fill="#FFE082" transform="scale(0.8) translate(30,-50)"/>
    </g>

    <!-- 7. THE TRIUMPHANT PAWN (Driving forward with unstoppable momentum) -->
    <g filter="url(#glow-${design.id})">
      <!-- Pawn Drop Shadow on 3D board -->
      <ellipse cx="320" cy="625" rx="85" ry="22" fill="#000000" opacity="0.6" />

      <!-- Pawn Tiered Weighted Base -->
      <ellipse cx="320" cy="600" rx="90" ry="24" fill="${design.pawnColor}" />
      <path d="M235 595 L255 530 L385 530 L405 595 Z" fill="${design.pawnColor}" />
      <ellipse cx="320" cy="530" rx="72" ry="16" fill="${design.pawnColor}" />
      <!-- Base 3D Highlight ring -->
      <ellipse cx="320" cy="590" rx="84" ry="18" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.3" />

      <!-- Pawn Torso / Waisted Stem -->
      <path d="M260 525 C275 450 285 390 285 340 L355 340 C355 390 365 450 380 525 Z" fill="${design.pawnColor}" />
      <!-- 3D Cylindrical Highlight -->
      <path d="M285 520 C295 455 300 400 300 350 L318 350 C318 400 312 455 302 520 Z" fill="#FFFFFF" opacity="0.25" />

      <!-- Pawn Neck Collar Tier -->
      <ellipse cx="320" cy="335" rx="60" ry="14" fill="${design.pawnColor}" />
      <ellipse cx="320" cy="315" rx="46" ry="11" fill="${design.pawnColor}" />
      <ellipse cx="320" cy="315" rx="42" ry="9" fill="#FFFFFF" opacity="0.3" />

      <!-- Pawn Spherical Head (Gleaming 3D Sphere) -->
      <circle cx="320" cy="235" r="72" fill="${design.pawnColor}" />
      <!-- 3D Specular Light Glint on Pawn Sphere -->
      <ellipse cx="295" cy="205" rx="28" ry="20" fill="#FFFFFF" opacity="0.5" transform="rotate(-25 295 205)" />
      <circle cx="282" cy="195" r="8" fill="#FFFFFF" opacity="0.8" />
    </g>

    <!-- Extra Customization for Design 03 (Royal Promotion Crown Landing on Pawn) -->
    ${design.id === 3 ? `
      <g transform="translate(320, 145)">
        <path d="M-40 20 L-45 -15 L-20 0 L0 -25 L20 0 L45 -15 L40 20 Z" fill="url(#goldGrad)" stroke="#FFE082" stroke-width="2"/>
        <circle cx="0" cy="-25" r="4" fill="#FFFFFF"/>
        <circle cx="-45" cy="-15" r="3" fill="#FFFFFF"/>
        <circle cx="45" cy="-15" r="3" fill="#FFFFFF"/>
      </g>
    ` : ''}

    <!-- Extra Customization for Design 13 (Monogram 'V' backdrop) -->
    ${design.id === 13 ? `
      <path d="M120 180 L430 680 L740 180 L620 180 L430 520 L240 180 Z" fill="url(#goldGrad)" opacity="0.25" stroke="#F59E0B" stroke-width="3"/>
    ` : ''}

    <!-- Extra Customization for Design 14 (Tactical HUD) -->
    ${design.id === 14 ? `
      <g stroke="#22C55E" opacity="0.7" font-family="'JetBrains Mono', monospace">
        <circle cx="430" cy="380" r="180" stroke-width="1.5" stroke-dasharray="10 6" fill="none"/>
        <line x1="430" y1="180" x2="430" y2="580" stroke-width="1" stroke-dasharray="6 4"/>
        <line x1="230" y1="380" x2="630" y2="380" stroke-width="1" stroke-dasharray="6 4"/>
        <text x="250" y="210" fill="#22C55E" font-size="14" font-weight="700">TARGET: BLACK KING [E8]</text>
        <text x="250" y="230" fill="#4ADE80" font-size="12">STRIKE: PAWN [D7->E8] #WIN</text>
        <text x="560" y="520" fill="#22C55E" font-size="14" font-weight="700">STATUS: CHECKMATE</text>
      </g>
    ` : ''}

    <!-- 8. Impact Blast Flash -->
    <path d="M430 380 L390 320 L425 345 L415 300 L445 340 L480 310 L455 360 L510 355 L460 385 L520 410 L460 410 L490 450 L445 420 L440 470 L420 425 L380 450 L405 405 L360 395 Z" fill="#FFFFFF" opacity="0.85" />
  </svg>
  `;
}

// Generate the 15 App Icon HTML Files
console.log('[build-chess] Generating 15 Chess App Logo Variations (1024x1024)...');

designs.forEach(d => {
  const dayStr = String(d.id).padStart(2, '0');
  const filePath = path.join(templatesDir, `logo-${dayStr}.html`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — Logo ${dayStr}: ${d.name}</title>
  <link rel="stylesheet" href="../../shared/brand.css">
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
        linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
    }
    .corner-spec {
      position: absolute;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: rgba(255,255,255,0.3);
      letter-spacing: 1.5px;
    }
  </style>
</head>
<body>
  <div class="grid-overlay"></div>

  <!-- Corner Specs -->
  <div class="corner-spec" style="top: 24px; left: 32px;">VOOO LABS // GAME STUDIO</div>
  <div class="corner-spec" style="top: 24px; right: 32px;">OPTION ${dayStr} / 15</div>

  <!-- Header Badge: Style Tag -->
  <div style="z-index: 10; display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); padding: 8px 20px; border-radius: 9999px; backdrop-filter: blur(8px);">
    <span style="width: 8px; height: 8px; border-radius: 50%; background: ${d.accent}; box-shadow: 0 0 10px ${d.accent};"></span>
    <span style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #FFFFFF; letter-spacing: 2px; text-transform: uppercase;">
      ${d.badge}
    </span>
  </div>

  <!-- Center Artwork: Pawn Blasting King -->
  <div style="z-index: 10; width: 100%; display: flex; justify-content: center; align-items: center; margin-top: -10px;">
    ${generateChessClashSvg(d)}
  </div>

  <!-- Bottom Branding Block: "Vooo Chess 3D" -->
  <div style="z-index: 10; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
    <div style="display: flex; align-items: center; gap: 14px;">
      <span style="font-family: 'CrazyBlocks', sans-serif; font-size: 46px; letter-spacing: 2px; line-height: 1;">
        <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
      </span>
      <span style="font-family: 'Inter', sans-serif; font-size: 40px; font-weight: 900; letter-spacing: -0.5px; color: #FFFFFF; text-transform: uppercase; line-height: 1;">
        CHESS <span style="color: ${d.accent}; text-shadow: 0 0 20px ${d.accent};">3D</span>
      </span>
    </div>

    <div style="display: flex; align-items: center; gap: 12px; margin-top: 4px;">
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.5); letter-spacing: 3px; text-transform: uppercase;">
        TACTICAL 3D CONQUEST &bull; GRANDMASTER AI
      </span>
    </div>
  </div>

</body>
</html>`;

  fs.writeFileSync(filePath, html, 'utf-8');
});

console.log('[build-chess] All 15 logo templates written.');

// 2. Generate 2 Mobile Splash Screens (1080x1920)
console.log('[build-chess] Generating 2 Mobile Splash Screens (1080x1920)...');

// Splash 01: Dark Luxury Edition
const splash01Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — Splash Screen: Obsidian & Gold</title>
  <link rel="stylesheet" href="../../shared/brand.css">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 1080px;
      height: 1920px;
      overflow: hidden;
      background: radial-gradient(circle at 50% 30%, #1E293B 0%, #0A0F1E 50%, #020617 100%);
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
        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
    }
    .spotlight {
      position: absolute;
      top: -150px;
      left: 50%;
      transform: translateX(-50%);
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%);
      pointer-events: none;
    }
    .loader-bar {
      width: 100%;
      max-width: 540px;
      height: 8px;
      background: rgba(255,255,255,0.1);
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
      width: 78%;
      background: linear-gradient(90deg, #4285F4, #7C3AED, #F59E0B);
      border-radius: 9999px;
      box-shadow: 0 0 16px #F59E0B;
    }
  </style>
</head>
<body>
  <div class="grid-bg"></div>
  <div class="spotlight"></div>

  <!-- Top Studio Attribution -->
  <div style="z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); padding: 10px 24px; border-radius: 9999px; backdrop-filter: blur(10px);">
      <span style="width: 8px; height: 8px; border-radius: 50%; background: #F59E0B; box-shadow: 0 0 10px #F59E0B;"></span>
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #FFFFFF; letter-spacing: 2px;">
        VOOO LABS STUDIOS &bull; V1.0.0
      </span>
    </div>
  </div>

  <!-- Monumental Center Clash: Pawn Blasting King -->
  <div style="z-index: 10; width: 100%; margin-top: -40px;">
    ${generateChessClashSvg(designs[0], true)}
  </div>

  <!-- Bottom Title, Loading Bar & Credits -->
  <div style="z-index: 10; width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 18px;">
    <!-- Game Title -->
    <div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
        <span style="font-family: 'CrazyBlocks', sans-serif; font-size: 64px; letter-spacing: 2px; line-height: 1;">
          <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        </span>
        <span style="font-family: 'Inter', sans-serif; font-size: 56px; font-weight: 900; letter-spacing: -1px; color: #FFFFFF; text-transform: uppercase; line-height: 1;">
          CHESS <span style="background: linear-gradient(90deg, #F59E0B, #FCD34D); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">3D</span>
        </span>
      </div>
      <p style="font-size: 18px; color: #94A3B8; margin-top: 10px; letter-spacing: 0.5px; font-weight: 500;">
        Next-Generation 3D Tactical Warfare &bull; Play vs Grandmaster AI
      </p>
    </div>

    <!-- Loading Bar -->
    <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
      <div style="display: flex; justify-content: space-between; width: 100%; max-width: 540px; margin-top: 10px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #94A3B8;">
        <span>LOADING 3D PHYSICS ENGINE...</span>
        <span style="color: #F59E0B; font-weight: 700;">78%</span>
      </div>
    </div>

    <!-- Studio Footer -->
    <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); width: 100%; max-width: 600px; display: flex; justify-content: space-between; align-items: center; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #64748B;">
      <span>VOOO LABS &bull; PRODUCT DIVISION</span>
      <span style="color: #4285F4;">vooolabs.in</span>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(templatesDir, 'splash-01-dark.html'), splash01Html, 'utf-8');

// Splash 02: Cyber Neon Edition
const splash02Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vooo Chess 3D — Splash Screen: Cyber Neon</title>
  <link rel="stylesheet" href="../../shared/brand.css">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 1080px;
      height: 1920px;
      overflow: hidden;
      background: radial-gradient(circle at 50% 30%, #1E1B4B 0%, #0A0F1E 60%, #020617 100%);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 120px 80px 100px;
      position: relative;
    }
    .cyber-grid {
      position: absolute;
      bottom: 0;
      left: -20%;
      right: -20%;
      height: 60%;
      background-image: 
        linear-gradient(to right, rgba(0, 240, 255, 0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(168, 85, 247, 0.08) 1px, transparent 1px);
      background-size: 50px 50px;
      transform: perspective(600px) rotateX(60deg);
      transform-origin: bottom center;
      pointer-events: none;
    }
    .neon-aura {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
      width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 70%);
      pointer-events: none;
    }
    .loader-bar {
      width: 100%;
      max-width: 540px;
      height: 8px;
      background: rgba(255,255,255,0.08);
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
      width: 92%;
      background: linear-gradient(90deg, #00F0FF, #A855F7, #EC4899);
      border-radius: 9999px;
      box-shadow: 0 0 16px #00F0FF;
    }
  </style>
</head>
<body>
  <div class="cyber-grid"></div>
  <div class="neon-aura"></div>

  <!-- Top Studio Attribution -->
  <div style="z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 10px; background: rgba(0, 240, 255, 0.06); border: 1px solid rgba(0, 240, 255, 0.25); padding: 10px 24px; border-radius: 9999px; backdrop-filter: blur(10px);">
      <span style="width: 8px; height: 8px; border-radius: 50%; background: #00F0FF; box-shadow: 0 0 12px #00F0FF;"></span>
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: #00F0FF; letter-spacing: 2px;">
        CYBER ESPORTS ARENA &bull; ONLINE
      </span>
    </div>
  </div>

  <!-- Center Artwork -->
  <div style="z-index: 10; width: 100%; margin-top: -40px;">
    ${generateChessClashSvg(designs[1], true)}
  </div>

  <!-- Bottom Title, Loading Bar & Credits -->
  <div style="z-index: 10; width: 100%; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 18px;">
    <!-- Game Title -->
    <div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
        <span style="font-family: 'CrazyBlocks', sans-serif; font-size: 64px; letter-spacing: 2px; line-height: 1;">
          <span style="color: #4285F4;">V</span><span style="color: #5B5BD6;">O</span><span style="color: #7C3AED;">O</span><span style="color: #F97316;">O</span>
        </span>
        <span style="font-family: 'Inter', sans-serif; font-size: 56px; font-weight: 900; letter-spacing: -1px; color: #FFFFFF; text-transform: uppercase; line-height: 1;">
          CHESS <span style="background: linear-gradient(90deg, #00F0FF, #A855F7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">3D</span>
        </span>
      </div>
      <p style="font-size: 18px; color: #94A3B8; margin-top: 10px; letter-spacing: 0.5px; font-weight: 500;">
        Real-Time Multiplayer &bull; 60FPS Raytraced Graphics &bull; Global Rank
      </p>
    </div>

    <!-- Loading Bar -->
    <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
      <div style="display: flex; justify-content: space-between; width: 100%; max-width: 540px; margin-top: 10px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #94A3B8;">
        <span>SYNCING GLOBAL MATCHMAKING LOBBIES...</span>
        <span style="color: #00F0FF; font-weight: 700;">92%</span>
      </div>
    </div>

    <!-- Studio Footer -->
    <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); width: 100%; max-width: 600px; display: flex; justify-content: space-between; align-items: center; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #64748B;">
      <span>POWERED BY VOOO LABS</span>
      <span style="color: #00F0FF;">PING: 18ms (AS-MUM-1)</span>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(templatesDir, 'splash-02-neon.html'), splash02Html, 'utf-8');

console.log('[build-chess] Splash screen templates generated successfully.');
