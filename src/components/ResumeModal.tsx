import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  MapPin, 
  Linkedin, 
  FileText, 
  Phone
} from 'lucide-react';
import { PROFILE_INFO, EXPERIENCES, PUBLICATIONS, EDUCATION_LIST, CERTIFICATIONS } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl max-h-[94vh] rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-resume-title"
      >
        {/* Modal Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-700" />
            <span className="font-sans text-xs font-bold text-slate-800">
              CURRICULUM VITAE • JENRICK KIBET KWAMBAI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold bg-slate-900 text-white hover:bg-blue-700 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Container */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 print:p-0 print:m-0 print:overflow-visible font-body bg-white text-slate-900">
          {/* CV Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 id="modal-resume-title" className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  JENRICK KIBET KWAMBAI
                </h1>
                <p className="font-sans text-sm font-bold text-blue-800 mt-1 uppercase tracking-wider">
                  {PROFILE_INFO.headline}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {PROFILE_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PROFILE_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PROFILE_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                linkedin.com/in/jenrickkibet
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="font-sans text-xs uppercase tracking-wider font-bold text-blue-800">
              Executive Profile & Summary
            </h2>
            <p className="font-body text-sm leading-relaxed text-slate-700">
              {PROFILE_INFO.about}
            </p>
            <p className="font-body text-sm leading-relaxed text-slate-700">{PROFILE_INFO.softwareBio}</p>
            <p className="font-body text-sm leading-relaxed text-slate-700">{PROFILE_INFO.researcherBio}</p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-100">
            {PROFILE_INFO.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="font-heading text-xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="font-sans text-[11px] text-slate-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="font-sans text-xs uppercase tracking-wider font-bold text-blue-800">
              Work Experience ({EXPERIENCES.length} Roles)
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-heading text-base font-bold text-slate-900">
                        {exp.role}
                      </span>
                      <span className="font-sans text-xs font-bold text-blue-800 ml-2">
                        @ {exp.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <p className="font-body text-xs text-slate-600 leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-1 mt-2">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs font-body text-slate-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {exp.aircraftPlatforms && (
                    <div className="text-[11px] text-slate-600 font-sans mt-1">
                      <span className="font-bold">Platforms / Aircraft:</span> {exp.aircraftPlatforms.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="space-y-3">
            <h2 className="font-sans text-xs uppercase tracking-wider font-bold text-blue-800">
              Selected Technical Publications & Research Briefs
            </h2>

            <div className="space-y-3">
              {PUBLICATIONS.map((pub) => (
                <div key={pub.id} className="text-xs space-y-0.5">
                  <div className="font-heading font-bold text-slate-900">
                    "{pub.title}"{pub.date ? ` (${pub.date})` : ''}
                  </div>
                  <div className="font-body text-slate-600">
                    {pub.summary}
                  </div>
                  {pub.doiOrRef && <div className="text-[11px] font-mono text-slate-500">Ref: {pub.doiOrRef}</div>}
                  {pub.externalLink && <a href={pub.externalLink} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">View on Google Scholar</a>}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div>
              <h2 className="font-sans text-xs uppercase tracking-wider font-bold text-blue-800 mb-2">
                Education History
              </h2>
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="mb-3 text-xs">
                  <div className="font-heading font-bold text-slate-900">{edu.degree}</div>
                  <div className="font-sans text-slate-600">{edu.institution} ({edu.period})</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-sans text-xs uppercase tracking-wider font-bold text-blue-800 mb-2">
                Licence & Certification
              </h2>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="mb-2 text-xs">
                  <div className="font-heading font-bold text-slate-900">{cert.title}</div>
                  <div className="font-sans text-slate-600">{cert.issuer} • {cert.year}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <p className="font-body text-xs text-slate-600">References available upon request.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
