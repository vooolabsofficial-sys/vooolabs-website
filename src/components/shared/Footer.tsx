import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const WhatsappIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

export default function Footer() {
  return (
    <footer 
      className="w-full bg-[#0A0F1E] text-white px-6 sm:px-16 pt-16 pb-32 sm:pb-36 relative overflow-hidden select-none"
      role="contentinfo"
      aria-label="Footer"
    >
      
      {/* GHOST WATERMARK */}
      <div 
        className="absolute top-6 left-1/2 -translate-x-1/2 font-clash font-extrabold text-[8vw] sm:text-[10vw] text-white/[0.03] select-none pointer-events-none whitespace-nowrap leading-none z-0"
        aria-hidden="true"
      >
        VOOO LABS
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 z-10 mb-16">
        
        {/* COL 1: BRANDING (col-span-2) */}
        <div className="md:col-span-2 flex flex-col items-start gap-5">
          <Link to="/" className="flex items-baseline" aria-label="VOOO LABS Home">
            <span className="shimmer-text font-clash font-bold text-3xl">VOOO</span>
            <span className="font-kanit font-light text-3xl text-white/90 ml-1">LABS</span>
          </Link>
          <p className="font-kanit font-light text-sm text-white/60 max-w-[280px] leading-relaxed">
            Build Bold. Ship Smart. Live Different.
          </p>
          
          {/* LOCATION & MADE IN INDIA BADGES */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-full border border-white/15 px-3.5 py-1 font-kanit font-light text-xs text-white/70 bg-white/[0.02]">
              Built in India
            </div>
            <div className="rounded-full border border-white/15 px-3.5 py-1 font-kanit font-light text-xs text-white/70 bg-white/[0.02] flex items-center gap-1">
              <MapPin size={12} className="text-emerald-400" />
              <span>Pune · Nashik · Satara</span>
            </div>
          </div>

          <a 
            href="mailto:vooolabsofficial@gmail.com"
            className="font-kanit font-light text-sm text-white/60 hover:text-white transition-colors"
          >
            vooolabsofficial@gmail.com
          </a>

          {/* SOCIALS - 44px (w-11 h-11) Touch Targets */}
          <div className="flex items-center gap-2.5 mt-2">
            <a
              href="https://github.com/vooolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-400 hover:bg-white/[0.05] transition-all duration-200 hover:scale-105"
              aria-label="GitHub Repository"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/company/vooolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-400 hover:bg-white/[0.05] transition-all duration-200 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://twitter.com/vooolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-400 hover:bg-white/[0.05] transition-all duration-200 hover:scale-105"
              aria-label="Twitter Account"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="https://instagram.com/vrushyxx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-pink-400 hover:bg-white/[0.05] transition-all duration-200 hover:scale-105"
              aria-label="Instagram Profile"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://wa.me/917620236178"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-emerald-400 hover:bg-white/[0.05] transition-all duration-200 hover:scale-105"
              aria-label="WhatsApp Contact"
            >
              <WhatsappIcon size={18} />
            </a>
            <a
              href="mailto:vooolabsofficial@gmail.com"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-400 hover:bg-white/[0.05] transition-all duration-200 hover:scale-105"
              aria-label="Email Support"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* COL 2: PRODUCTS */}
        <div className="flex flex-col gap-4">
          <h4 className="font-clash font-semibold text-sm tracking-wider uppercase text-white/90">Products</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/products#vooo-files" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">VOOO Files</Link>
            <Link to="/products#smaran-ai" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">SMARAN AI</Link>
            <Link to="/products#callmind" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">CallMind</Link>
            <Link to="/products" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">VOOO Workspace</Link>
          </div>
        </div>

        {/* COL 3: COMPANY */}
        <div className="flex flex-col gap-4">
          <h4 className="font-clash font-semibold text-sm tracking-wider uppercase text-white/90">Company</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/about" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">About Studio</Link>
            <Link to="/about#founder" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">Founder Profile</Link>
            <Link to="/roadmap" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">Product Roadmap</Link>
            <Link to="/contact" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">Contact Us</Link>
          </div>
        </div>

        {/* COL 4: LEGAL */}
        <div className="flex flex-col gap-4">
          <h4 className="font-clash font-semibold text-sm tracking-wider uppercase text-white/90">Legal & Support</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/contact" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">Privacy Guarantee</Link>
            <Link to="/contact" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">Terms & Conditions</Link>
            <Link to="/contact" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">App Permissions</Link>
            <a href="mailto:vooolabsofficial@gmail.com" className="font-kanit font-light text-sm text-white/60 hover:text-white hover:pl-1 transition-all">Support Desk</a>
          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="relative max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left z-10">
        <p className="font-kanit font-light text-xs text-white/40">
          &copy; {new Date().getFullYear()} VOOO LABS. All rights reserved.
        </p>
        <p className="shimmer-text font-kanit font-semibold text-xs uppercase tracking-wide">
          Built with precision in India
        </p>
        <a 
          href="mailto:vooolabsofficial@gmail.com" 
          className="font-kanit font-light text-xs text-white/40 hover:text-white transition-colors"
        >
          vooolabsofficial@gmail.com
        </a>
      </div>
    </footer>
  );
}
