import React from 'react';
import type { DossierSection } from '../data/roleDossiers';

export const DossierContent: React.FC<{ sections: DossierSection[] }> = ({ sections }) => (
  <div className="space-y-9">
    {sections.map((section, index) => (
      <section key={section.heading} className="border-t border-slate-200 pt-6">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-sm font-mono text-blue-600 mt-1" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="font-heading text-xl font-bold text-slate-900">{section.heading}</h3>
        </div>
        <div className="space-y-3 sm:pl-8">
          {section.paragraphs.map((paragraph, i) => <p key={i} className="font-body text-base leading-relaxed text-slate-700">{paragraph}</p>)}
          {section.points && <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed text-slate-700 marker:text-blue-600">{section.points.map(point => <li key={point}>{point}</li>)}</ul>}
        </div>
      </section>
    ))}
  </div>
);
