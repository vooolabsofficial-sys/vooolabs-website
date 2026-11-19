import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, RefreshCw, CheckCircle2, Mail, Globe, Phone } from 'lucide-react';
import { COMPANY } from '../../content/company';

const EASING = [0.22, 1, 0.36, 1] as const;

export default function NetworkStatusGuard() {
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });
  const [wasOffline, setWasOffline] = useState(false);
  const [showRestoredToast, setShowRestoredToast] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // Ping verification to ensure actual internet connectivity
  const checkConnection = useCallback(async () => {
    setIsChecking(true);
    try {
      // Use no-cache HEAD fetch to test real network throughput
      await fetch(`/favicon.svg?t=${Date.now()}`, {
        method: 'HEAD',
        cache: 'no-store',
      });
      setIsOnline(true);
      if (wasOffline) {
        setShowRestoredToast(true);
        setTimeout(() => setShowRestoredToast(false), 3000);
      }
    } catch {
      setIsOnline(false);
      setWasOffline(true);
    } finally {
      setIsChecking(false);
    }
  }, [wasOffline]);

  useEffect(() => {
    const handleOnline = () => {
      // Confirm with ping
      checkConnection();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setWasOffline(true);
      setShowRestoredToast(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check if navigator reports offline
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setIsOnline(false);
      setWasOffline(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [checkConnection]);

  // When connection transitions from offline to online
  useEffect(() => {
    if (isOnline && wasOffline) {
      setShowRestoredToast(true);
      const timer = setTimeout(() => {
        setShowRestoredToast(false);
        setWasOffline(false);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  return (
    <>
      {/* ──────────────────────────────────────────────────
          OFFLINE FULL RECOVERY MODAL (WHEN OFFLINE)
         ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASING }}
            className="fixed inset-0 z-[9999] bg-[#0A0F1E]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
            role="alertdialog"
            aria-live="assertive"
            aria-modal="true"
            aria-labelledby="offline-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.4, ease: EASING }}
              className="relative w-full max-w-lg bg-[#0A0F1E] text-white border border-white/[0.12] rounded-[22px] p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.65)] overflow-hidden text-left"
            >
              {/* TOP 2PX AMBER TELEMETRY ACCENT */}
              <div 
                className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400"
                aria-hidden="true" 
              />

              {/* AMBIENT RADIAL LIGHT */}
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" 
                aria-hidden="true" 
              />

              {/* HEADER BADGE */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-400 font-bold">
                    NETWORK SIGNAL INTERRUPTED
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <WifiOff size={15} />
                </div>
              </div>

              {/* HEADLINE & SUBTEXT */}
              <div className="space-y-2 mb-6">
                <h2 
                  id="offline-title"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight"
                >
                  You Are Currently Offline.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Your session is preserved. VOOO LABS will automatically restore your view the moment your internet connection returns.
                </p>
              </div>

              {/* OFFLINE RESILIENT STUDIO DETAILS */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 mb-6 space-y-2 text-xs font-mono">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold mb-1">
                  OFFLINE ARCHITECTURAL RECORD
                </span>
                <div className="flex items-center gap-2 text-slate-200">
                  <Globe size={13} className="text-blue-400 shrink-0" />
                  <span className="truncate">{COMPANY.domain}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Mail size={13} className="text-purple-400 shrink-0" />
                  <span className="truncate">{COMPANY.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Phone size={13} className="text-emerald-400 shrink-0" />
                  <span>+{COMPANY.whatsapp}</span>
                </div>
              </div>

              {/* ACTIONS ROW */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={checkConnection}
                  disabled={isChecking}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-70"
                >
                  <RefreshCw size={14} className={isChecking ? 'animate-spin' : ''} />
                  <span>{isChecking ? 'Checking Connection...' : 'Retry Connection'}</span>
                </button>
                <span className="text-[11px] font-mono text-slate-400 text-center">
                  Auto-sync active
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ──────────────────────────────────────────────────
          RESTORATION SUCCESS TOAST
         ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showRestoredToast && (
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: EASING }}
            className="fixed bottom-24 sm:bottom-8 right-6 z-[9999] bg-[#0A0F1E] border border-emerald-500/30 text-white px-4 py-3 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex items-center gap-3 font-mono text-xs select-none"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">Connection Restored</span>
              <span className="text-emerald-400 font-semibold">✓</span>
            </div>
            <span className="text-[10px] text-slate-400 border-l border-white/10 pl-2">
              Syncing live
            </span>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
