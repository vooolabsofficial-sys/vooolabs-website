import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { RefreshCw, ArrowRight, AlertTriangle, Terminal } from 'lucide-react';
import { COMPANY } from '../../content/company';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  isChunkError: boolean;
}

export default class AppErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      isChunkError: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    const message = error?.message || '';
    const isChunkError =
      message.includes('Failed to fetch dynamically imported module') ||
      message.includes('Importing a module script failed') ||
      message.includes('Loading chunk') ||
      message.includes('ChunkLoadError');

    return {
      hasError: true,
      error,
      isChunkError,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('AppErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });

    // Automatic 1-time auto-reload for stale deployment chunks
    const message = error?.message || '';
    const isChunk =
      message.includes('Failed to fetch dynamically imported module') ||
      message.includes('Importing a module script failed') ||
      message.includes('Loading chunk') ||
      message.includes('ChunkLoadError');

    if (isChunk) {
      const storageKey = 'vooolabs_chunk_reload_attempt';
      const lastAttempt = sessionStorage.getItem(storageKey);
      const now = Date.now();

      // If we haven't auto-reloaded in the last 15 seconds, perform 1 immediate reload
      if (!lastAttempt || now - parseInt(lastAttempt, 10) > 15000) {
        sessionStorage.setItem(storageKey, now.toString());
        window.location.reload();
      }
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      const { error, isChunkError } = this.state;

      return (
        <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between relative overflow-hidden select-none px-6 py-24 sm:py-32">
          
          {/* TOP 2PX AMBER ACCENT LINE */}
          <div 
            className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-blue-600 origin-left z-20"
            aria-hidden="true" 
          />

          {/* SUBTLE ARCHITECTURAL 1PX GRID */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.1) 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto my-auto w-full text-left">
            
            {/* EYEBROW */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-600 font-bold">
                SYSTEM VIEW INTERRUPTED · RUNTIME RECOVERY
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-slate-950 leading-tight mb-4">
              {isChunkError 
                ? 'New Build Deployed — Client Refresh Required.' 
                : 'Application View Experienced an Interruption.'}
            </h1>

            {/* SUBTEXT */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
              {isChunkError
                ? 'VOOO LABS just landed an updated production bundle. Reloading your session will fetch the fresh architectural assets immediately.'
                : 'A transient runtime exception occurred in the client browser thread. Your state is preserved, and a clean reload will re-initialize the environment.'}
            </p>

            {/* ACTIONS */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0F1E] hover:bg-[#4285F4] text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <RefreshCw size={15} />
                <span>Reload Clean Build</span>
              </button>

              <button
                type="button"
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F8F9FC] text-slate-900 border border-slate-200/90 font-medium text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
              >
                <span>Return to Studio Home</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* COLLAPSIBLE DIAGNOSTICS */}
            {error && (
              <details className="bg-[#F8F9FC] border border-slate-200/80 rounded-xl p-4 text-xs font-mono text-slate-600">
                <summary className="font-semibold text-slate-800 cursor-pointer flex items-center gap-2 select-none">
                  <Terminal size={13} className="text-blue-600" />
                  <span>Technical Diagnostics (Engineering Log)</span>
                </summary>
                <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-1.5 overflow-x-auto text-[11px] text-slate-700">
                  <p className="font-bold text-red-600">{error.name}: {error.message}</p>
                  {error.stack && (
                    <pre className="text-[10px] text-slate-500 whitespace-pre-wrap leading-relaxed mt-2 max-h-36 overflow-y-auto">
                      {error.stack.split('\n').slice(0, 5).join('\n')}
                    </pre>
                  )}
                </div>
              </details>
            )}

            {/* FOOTER STRIP */}
            <div className="mt-10 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>VOOO LABS Resilience Engine</span>
              <span>Direct Support: {COMPANY.email}</span>
            </div>

          </div>

        </div>
      );
    }

    return this.props.children;
  }
}
