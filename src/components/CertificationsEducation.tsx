import React from 'react';
import { 
  GraduationCap, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS } from '../data/profileData';

export const CertificationsEducation: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[102.4rem] mx-auto border-t border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
          <div className="mb-6">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">
              Academic Background
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-1">
              Education & Academic Training
            </h2>
          </div>

          <div className="space-y-6">
            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-base font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <div className="font-sans text-xs font-bold text-blue-800 mt-0.5">
                      {edu.institution}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-medium shrink-0 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                    {edu.period}
                  </span>
                </div>

                <p className="font-body mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {edu.details}
                </p>

                <div className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                  {edu.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 font-body text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="mb-6">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">
              Accreditations & Licenses
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-1">
              Certifications & Audits
            </h2>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900">
                      {cert.title}
                    </h3>
                    <div className="font-sans text-xs text-slate-600 mt-0.5 font-medium">
                      {cert.issuer}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-500 shrink-0 font-medium">
                    {cert.year}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span className="font-sans text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    {cert.badge}
                  </span>
                  {cert.credentialId && (
                    <span className="font-mono text-[11px] text-slate-500">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
