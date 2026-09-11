import React from 'react';
import { BookOpen } from 'lucide-react';
import { TECHNICAL_MANUALS } from '../data/technicalManuals';

export const TechnicalManualsSection: React.FC = () => (
  <section id="technical-manuals" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[102.4rem] mx-auto border-t border-slate-200 scroll-mt-28">
    <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">Technical Documentation & Engineer Training</span>
    <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">Engineering & Aviation Technical Manual Development</h2>
    <p className="font-body text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">I develop engineering and aviation technical documentation, including platform-specific QTGs and QAGs, FSTD guides, maintenance manuals, operating procedures, and training manuals for certified engineers.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
      {TECHNICAL_MANUALS.map(manual => (
        <article key={manual.title} className="min-w-0 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
          <BookOpen className="w-5 h-5 text-blue-700 mb-4" aria-hidden="true" />
          <h3 className="font-heading text-lg font-bold text-slate-900">{manual.title}</h3>
          <p className="font-body text-sm text-slate-600 mt-2 leading-relaxed">{manual.description}</p>
          <ul className="flex flex-wrap gap-2 mt-5" aria-label="Platforms and scope">
            {manual.platforms.map(platform => <li key={platform} className="text-xs font-mono bg-slate-100 text-slate-700 rounded-md px-2.5 py-1.5">{platform}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
