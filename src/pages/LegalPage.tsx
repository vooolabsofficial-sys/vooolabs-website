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
                  className={`rounded-full border px-4 py-1.5 font-sans font-medium text-xs transition-colors shadow-2xs ${
                    isActive
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 bg-slate-50'
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
          <header className="mb-10 pb-8 border-b border-slate-200/80">
            <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-3">
              {document.title}
            </h1>
            <p className="font-sans text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
              {document.summary}
            </p>
            <span className="font-mono text-xs text-slate-500">
              Last updated: {formatDate(document.updated)}
            </span>
          </header>
        </FadeIn>

        {/* SECTIONS */}
        <div className="space-y-10">
          {document.sections.map((section, idx) => (
            <FadeIn key={idx} delay={0.15 + idx * 0.05} y={20}>
              <section className="rounded-3xl border border-slate-200/80 bg-[#FAFAFD] p-6 sm:p-8 shadow-xs">
                <h2 className="font-clash text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc list-inside space-y-1.5 pl-2 pt-2 text-slate-600">
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
