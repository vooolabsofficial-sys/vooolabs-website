import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { 
  UserCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowRight, 
  RotateCcw, 
  MessageSquare,
  Lock 
} from 'lucide-react';

type PerspectiveType = 'user' | 'owner';
type RequestStatus = 'pending' | 'approved';

export default function WebAppPortalVisualizer() {
  const [activePerspective, setActivePerspective] = useState<PerspectiveType>('user');
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('pending');

  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // GSAP animation when perspective changes or action button is triggered
  useEffect(() => {
    if (!stageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stageRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.stagger-portal-row',
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.05 }
      );
    }, stageRef);

    return () => ctx.revert();
  }, [activePerspective, requestStatus]);

  const handleApprove = () => {
    setRequestStatus('approved');
  };

  const handleReset = () => {
    setRequestStatus('pending');
  };

  return (
    <div 
      ref={containerRef}
      className="rounded-[20px] border border-slate-200/90 bg-white overflow-hidden text-left select-none shadow-none"
    >
      {/* ── TOP BROWSER & ROLE SWITCHER BAR ──────────────── */}
      <div className="bg-[#F8F9FC] border-b border-slate-200/80 px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 font-medium">
          <span className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="text-slate-700 font-semibold">app.yourdomain.in</span>
          <span>·</span>
          <span className="text-[#4285F4] font-semibold">No Play Store Download</span>
        </div>

        {/* 2 PERSPECTIVE PILLS */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActivePerspective('user')}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 transition-all cursor-pointer ${
              activePerspective === 'user'
                ? 'bg-[#0A0F1E] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
            }`}
          >
            <UserCheck size={12} className={activePerspective === 'user' ? 'text-blue-400' : 'text-slate-400'} />
            <span>End-User View</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePerspective('owner')}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 transition-all cursor-pointer ${
              activePerspective === 'owner'
                ? 'bg-[#0A0F1E] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
            }`}
          >
            <ShieldCheck size={12} className={activePerspective === 'owner' ? 'text-blue-400' : 'text-slate-400'} />
            <span>Owner Admin View</span>
          </button>
        </div>
      </div>

      {/* ── PREVIEW STAGE ────────────────────────────────── */}
      <div ref={stageRef} className="p-5 sm:p-6 min-h-[300px] flex flex-col justify-between">
        
        {/* VIEW 1: END-USER PERSPECTIVE */}
        {activePerspective === 'user' && (
          <div className="space-y-4">
            
            {/* USER HEADER */}
            <div className="stagger-portal-row flex items-center justify-between border-b border-slate-200/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[11px] font-semibold text-slate-800">
                  Logged in via 1-Tap OTP · Personal Dashboard
                </span>
              </div>

              {requestStatus === 'pending' ? (
                <span className="font-mono text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded">
                  Awaiting Approval
                </span>
              ) : (
                <span className="font-mono text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle2 size={11} className="text-blue-600" />
                  <span>Confirmed · Alert Sent</span>
                </span>
              )}
            </div>

            {/* 3 SELF-SERVICE ROWS */}
            <div className="divide-y divide-slate-200/80 border-b border-slate-200/80 text-xs">
              
              {/* ROW 1: ACTIVE REQUEST */}
              <div className="stagger-portal-row py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-blue-600">01</span>
                    <span className="font-bold text-slate-900">Active Session / Slot Request</span>
                  </div>
                  <p className="text-slate-600 text-[11px] mt-0.5">
                    {requestStatus === 'pending'
                      ? 'Slot request submitted. Waiting for branch coordinator confirmation.'
                      : 'Confirmed for 10:00 AM Batch. WhatsApp confirmation received.'}
                  </p>
                </div>

                {requestStatus === 'pending' ? (
                  <button
                    type="button"
                    onClick={() => setActivePerspective('owner')}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer shrink-0"
                  >
                    <span>Switch to Owner View to Approve</span>
                    <ArrowRight size={11} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-400 hover:text-slate-700 cursor-pointer shrink-0"
                  >
                    <RotateCcw size={10} />
                    <span>Reset Demo</span>
                  </button>
                )}
              </div>

              {/* ROW 2: RECEIPTS & DOCUMENTS VAULT */}
              <div className="stagger-portal-row py-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-blue-600">02</span>
                  <FileText size={13} className="text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-900">Receipts & Documents Vault</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Invoice & Enrollment Receipt · Ready
                </span>
              </div>

              {/* ROW 3: SCHEDULE */}
              <div className="stagger-portal-row py-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-blue-600">03</span>
                  <Clock size={13} className="text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-900">Live Schedule & Updates</span>
                </div>
                <span className="text-[11px] text-slate-500">
                  Synced automatically—zero WhatsApp PDF hunting
                </span>
              </div>

            </div>

            {/* EXPLANATORY CALLOUT */}
            <div className="stagger-portal-row mt-4 pt-2 text-xs text-slate-500 flex items-start gap-2">
              <UserCheck size={14} className="text-blue-600 shrink-0 mt-0.5" />
              <span>Opens in 1 tap on Android, iPhone, or desktop—users never install a heavy mobile app.</span>
            </div>
          </div>
        )}

        {/* VIEW 2: OWNER ADMIN PERSPECTIVE */}
        {activePerspective === 'owner' && (
          <div className="space-y-4">
            
            {/* ADMIN HEADER */}
            <div className="stagger-portal-row flex items-center justify-between border-b border-slate-200/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="font-mono text-[11px] font-semibold text-slate-800">
                  Role-Based Admin Queue · Live Sync
                </span>
              </div>

              <span className="font-mono text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                {requestStatus === 'pending' ? '1 Pending Approval' : 'All Caught Up (1 Approved)'}
              </span>
            </div>

            {/* INTERACTIVE ACTION ROW */}
            <div className="stagger-portal-row bg-[#F8F9FC] border border-slate-200/80 rounded-[14px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-950">
                    Slot & Onboarding Request
                  </span>
                  <span className="font-mono text-[10px] text-slate-500 bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                    Verified OTP User
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  User: <strong className="text-slate-800">+91 98230 •••••</strong> · Intake & Batch Assignment Queue
                </p>
              </div>

              {requestStatus === 'pending' ? (
                <button
                  type="button"
                  onClick={handleApprove}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs cursor-pointer transition-colors shrink-0"
                >
                  <MessageSquare size={13} />
                  <span>Approve & Send WhatsApp Alert</span>
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
                    <CheckCircle2 size={13} className="text-blue-600" />
                    <span>Approved · WhatsApp Sent ✓</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded cursor-pointer transition-colors"
                    title="Reset to Pending"
                  >
                    <RotateCcw size={13} />
                  </button>
                </div>
              )}
            </div>

            {/* BOTTOM 2-COLUMN ROLE SUMMARY */}
            <div className="stagger-portal-row grid grid-cols-2 gap-4 pt-1 text-xs text-slate-600">
              <div className="border border-slate-200/70 rounded-lg p-2.5 bg-slate-50/50">
                <span className="font-bold text-slate-900 block mb-0.5">Staff Permissions</span>
                <span className="text-[11px] text-slate-500">Branch-level view & edit controls</span>
              </div>
              <div className="border border-slate-200/70 rounded-lg p-2.5 bg-slate-50/50">
                <span className="font-bold text-slate-900 block mb-0.5">Audit Trail</span>
                <span className="text-[11px] text-slate-500">Every approval logged with timestamp</span>
              </div>
            </div>

            {/* EXPLANATORY CALLOUT */}
            <div className="stagger-portal-row mt-4 pt-2 text-xs text-slate-500 flex items-start gap-2">
              <ShieldCheck size={14} className="text-blue-600 shrink-0 mt-0.5" />
              <span>Team members manage bookings and approvals from one dashboard with granular role permissions.</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
