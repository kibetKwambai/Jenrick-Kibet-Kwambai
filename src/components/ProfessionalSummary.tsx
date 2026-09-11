import React from 'react';
import { PROFILE_INFO } from '../data/profileData';

export const ProfessionalSummary: React.FC = () => (
  <section id="summary" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[102.4rem] mx-auto border-t border-slate-200 scroll-mt-28">
    <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">Engineering, Software & Research</span>
    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Professional Summary</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
      <article>
        <h3 className="font-heading text-lg font-bold text-slate-900">Aerospace & Flight Simulation</h3>
        <p className="font-body text-sm text-slate-600 mt-2 leading-relaxed">{PROFILE_INFO.about}</p>
      </article>
      <article>
        <h3 className="font-heading text-lg font-bold text-slate-900">Aviation Software & Website Plugins</h3>
        <p className="font-body text-sm text-slate-600 mt-2 leading-relaxed">{PROFILE_INFO.softwareBio}</p>
      </article>
      <article>
        <h3 className="font-heading text-lg font-bold text-slate-900">Academic & Professional Researcher</h3>
        <p className="font-body text-sm text-slate-600 mt-2 leading-relaxed">{PROFILE_INFO.researcherBio}</p>
      </article>
      <article>
        <h3 className="font-heading text-lg font-bold text-slate-900">FSTD Qualification & Approval Participation</h3>
        <p className="font-body text-sm text-slate-600 mt-2 leading-relaxed">{PROFILE_INFO.qualificationBio}</p>
        <a href="#technical-manuals" className="inline-block mt-3 text-sm font-semibold text-blue-700 hover:underline">Explore technical documentation →</a>
      </article>
    </div>
  </section>
);
