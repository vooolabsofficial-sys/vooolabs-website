import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../components/shared/FadeIn';
import { LEGAL_DOCUMENTS, getLegalDocument } from '../content/legal';
import { COMPANY } from '../content/company';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export default function LegalPage() {
  const { doc } = useParams<{ doc: string }>();
  const document = doc ? getLegalDocument(doc) : undefined;

  // An unknown slug goes to the first document rather than a blank screen.
  if (!document) {
    return <Navigate to={`/legal/${LEGAL_DOCUMENTS[0].slug}`} replace />;
  }

  return (
    <div className="page-wrap bg-white min-h-screen text-slate-900 px-6 sm:px-16 pt-32 pb-32">
      <div className="w-full max-w-3xl mx-auto">
        <FadeIn delay={0} y={20}>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-sans font-medium text-xs text-slate-500 hover:text-blue-600 uppercase tracking-wider mb-8 transition-colors"
          >
            <ArrowLeft size={12} /> Back to {COMPANY.brandName}
          </Link>
        </FadeIn>

        {/* DOCUMENT SWITCHER */}
        <FadeIn delay={0.05} y={15}>
          <nav aria-label="Legal documents" className="flex flex-wrap gap-2 mb-10">
            {LEGAL_DOCUMENTS.map((item) => {
              const isActive = item.slug === document.slug;
              return (
                <Link
                  key={item.slug}
                  to={`/legal/${item.slug}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-xl border px-3.5 py-1.5 font-sans font-medium text-xs transition-colors shadow-2xs ${
                    isActive
                      ? 'border-zinc-950 bg-zinc-900 text-white font-semibold'
                      : 'border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 bg-zinc-50'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </FadeIn>

        {/* DOCUMENT HEADER */}
        <FadeIn delay={0.1} y={20}>
          <header className="mb-10 pb-8 border-b border-zinc-200">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950 mb-3 tracking-tight">
              {document.title}
            </h1>
            <p className="font-sans text-sm sm:text-base text-zinc-600 mb-4 leading-relaxed">
              {document.summary}
            </p>
            <span className="font-mono text-xs text-zinc-500">
              Last updated: {formatDate(document.updated)}
            </span>
          </header>
        </FadeIn>

        {/* SECTIONS */}
        <div className="space-y-8">
          {document.sections.map((section, idx) => (
            <FadeIn key={idx} delay={0.15 + idx * 0.05} y={20}>
              <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 shadow-2xs">
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-4 tracking-tight">
                  {section.heading}
                </h2>
                <div className="space-y-3 font-sans text-sm sm:text-base text-zinc-700 leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc list-inside space-y-1.5 pl-2 pt-2 text-zinc-600">
                      {section.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
