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
    <div className="page-wrap bg-white min-h-screen px-6 sm:px-16 pt-32 pb-32">
      <div className="w-full max-w-3xl mx-auto">
        <FadeIn delay={0} y={20}>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-kanit font-medium text-xs text-slate-500 hover:text-slate-800 uppercase tracking-wider mb-8 transition-colors"
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
                  className={`rounded-full border px-4 py-1.5 font-kanit font-medium text-xs transition-colors ${
                    isActive
                      ? 'border-blue-500/30 bg-blue-500/10 text-blue-700'
                      : 'border-black/10 text-slate-600 hover:border-black/20 hover:text-slate-900'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </FadeIn>

        <FadeIn delay={0.1} y={25}>
          <h1 className="font-clash font-bold text-4xl sm:text-5xl text-[#0A0F1E] leading-tight mb-3">
            {document.title}
          </h1>
          <p className="font-kanit font-light text-base text-slate-600 leading-relaxed mb-2">
            {document.summary}
          </p>
          <p className="font-kanit font-light text-xs text-slate-400 mb-12">
            Last updated {formatDate(document.updated)}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-10">
          {document.sections.map((section, idx) => (
            <FadeIn key={section.heading} delay={0.05 * idx} y={20}>
              <section>
                <h2 className="font-clash font-semibold text-xl sm:text-2xl text-[#0A0F1E] mb-4">
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-kanit font-light text-sm sm:text-base text-slate-600 leading-relaxed mb-3"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="flex flex-col gap-2 mt-4 pl-1">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="font-kanit font-light text-sm sm:text-base text-slate-600 leading-relaxed flex gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} y={20}>
          <div className="mt-16 pt-8 border-t border-slate-100">
            <p className="font-kanit font-light text-sm text-slate-500">
              Questions about any of this? Write to{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
