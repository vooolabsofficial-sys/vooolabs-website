import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Package, 
  Users, 
  LayoutDashboard, 
  Clock 
} from 'lucide-react';

interface StageData {
  id: number;
  label: string;
  pillTitle: string;
  subtitle: string;
  inventoryState: string;
  inventoryBadgeColor: string;
  teamAlert: string;
  auditLog: string;
}

const STAGES: StageData[] = [
  {
    id: 0,
    label: '01 Intake',
    pillTitle: 'Intake & Assignment',
    subtitle: 'Inquiry verified & assigned to Operations Lead',
    inventoryState: 'Pending Check',
    inventoryBadgeColor: 'bg-amber-50 text-amber-700 border-amber-200/60',
    teamAlert: 'Assigned to Branch Desk',
    auditLog: '10:14 AM — Order captured from web app & auto-routed to Branch Lead',
  },
  {
    id: 1,
    label: '02 Execution',
    pillTitle: 'Stock & Allocation',
    subtitle: 'Stock allocated · Quality & packing in progress',
    inventoryState: 'Reserved in Godown B',
    inventoryBadgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
    teamAlert: 'Execution Active · Packing',
    auditLog: '11:30 AM — Stock verified in Godown B by Inventory Manager',
  },
  {
    id: 2,
    label: '03 Dispatched',
    pillTitle: 'Dispatch & Settlement',
    subtitle: 'Dispatched · Invoice & WhatsApp confirmation sent',
    inventoryState: 'Deducted & Logged',
    inventoryBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    teamAlert: 'Customer Notified via WhatsApp',
    auditLog: '02:45 PM — Packed, barcode scanned & dispatched via Logistics Partner',
  },
];

export default function OperationsPipelineVisualizer() {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const activeStage = STAGES[currentStageIndex];

  // GSAP animation on stage transition
  useEffect(() => {
    if (!stageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stageRef.current,
        { opacity: 0, x: 12 },
        { opacity: 1, x: 0, duration: 0.38, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.stagger-pipe-row',
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.05 }
      );
    }, stageRef);

    return () => ctx.revert();
  }, [currentStageIndex]);

  const handleAdvance = () => {
    setCurrentStageIndex((prev) => (prev < 2 ? prev + 1 : 0));
  };

  const handleReset = () => {
    setCurrentStageIndex(0);
  };

  return (
    <div 
      ref={containerRef}
      className="rounded-[20px] border border-slate-200/90 bg-white overflow-hidden text-left select-none shadow-none"
    >
      {/* ── TOP PIPELINE CONTROL BAR ─────────────────────── */}
      <div className="bg-[#F8F9FC] border-b border-slate-200/80 px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 font-bold">
          LIVE OPERATIONS PIPELINE
        </span>

        {/* 3 INTERACTIVE STAGE PILLS */}
        <div className="flex items-center gap-1.5">
          {STAGES.map((stage) => {
            const isActive = currentStageIndex === stage.id;
            const isCompleted = currentStageIndex > stage.id;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setCurrentStageIndex(stage.id)}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0A0F1E] text-white shadow-sm'
                    : isCompleted
                    ? 'text-blue-700 bg-blue-50/80 hover:bg-blue-100/80'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                {isCompleted && <Check size={11} className="text-blue-600" />}
                <span>{stage.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── INTERACTIVE STAGE BODY ───────────────────────── */}
      <div ref={stageRef} className="p-5 sm:p-6 min-h-[300px] flex flex-col justify-between">
        
        <div className="space-y-4">
          {/* ACTIVE WORK ITEM HEADER */}
          <div className="stagger-pipe-row flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-3.5">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <p className="text-sm font-bold text-slate-950">
                  Batch Order #4082 · North Branch
                </p>
                <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                  Commercial
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                {activeStage.subtitle}
              </p>
            </div>

            {/* ACTION BUTTON */}
            {currentStageIndex < 2 ? (
              <button
                type="button"
                onClick={handleAdvance}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0A0F1E] hover:bg-blue-600 text-white text-xs font-semibold shadow-xs cursor-pointer transition-colors shrink-0"
              >
                <span>Advance Stage</span>
                <ArrowRight size={12} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs cursor-pointer transition-colors shrink-0"
              >
                <CheckCircle2 size={13} />
                <span>Completed · Reset Flow</span>
              </button>
            )}
          </div>

          {/* 3-COLUMN LIVE SYSTEM STATE STRIP */}
          <div className="stagger-pipe-row grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 border border-slate-200/80 rounded-[14px] bg-[#F8F9FC] text-xs">
            {/* COLUMN 1 */}
            <div className="p-3.5 space-y-1">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                Owner View
              </span>
              <span className="font-bold text-slate-900 block truncate">
                Synced Across Branches
              </span>
              <span className="text-[11px] text-slate-500 block">
                Live multi-branch visibility
              </span>
            </div>

            {/* COLUMN 2 */}
            <div className="p-3.5 space-y-1">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                Inventory State
              </span>
              <div className="pt-0.5">
                <span className={`inline-block font-mono text-[10px] font-semibold border px-2 py-0.5 rounded ${activeStage.inventoryBadgeColor}`}>
                  {activeStage.inventoryState}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 block">
                Godown audit tracking
              </span>
            </div>

            {/* COLUMN 3 */}
            <div className="p-3.5 space-y-1">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                Team Alert
              </span>
              <span className="font-bold text-slate-900 block truncate">
                {activeStage.teamAlert}
              </span>
              <span className="text-[11px] text-slate-500 block">
                Auto-sent on milestone
              </span>
            </div>
          </div>

          {/* AUDIT LOG ROW */}
          <div className="stagger-pipe-row border border-slate-200/70 rounded-lg p-3 bg-slate-50/50 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                AUDIT LOG RECORDED
              </span>
              <span className="text-[10px] text-slate-400">
                User & Role Authenticated
              </span>
            </div>
            <p className="text-xs text-slate-700 font-medium">
              {activeStage.auditLog}
            </p>
          </div>
        </div>

        {/* EXPLANATORY CALLOUT */}
        <div className="stagger-pipe-row mt-4 pt-2 text-xs text-slate-500 flex items-start justify-between gap-2 border-t border-slate-100">
          <span>Every edit, stock change, and approval is logged without spreadsheet clutter.</span>
          <span className="text-[10px] text-blue-600 font-mono font-medium shrink-0">
            Step {currentStageIndex + 1} of 3
          </span>
        </div>

      </div>
    </div>
  );
}
