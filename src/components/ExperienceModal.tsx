import React, { useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Plane, 
  CheckCircle2, 
  ShieldCheck, 
  Building2
} from 'lucide-react';
import { DossierContent } from './DossierContent';
import { ROLE_DOSSIERS } from '../data/roleDossiers';
import { ExperienceItem } from '../types';

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (experience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-experience-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full font-sans text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
              Role Dossier
            </span>
            <span className="font-sans text-xs font-medium text-slate-500">
              {experience.company}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
            aria-label="Close dossier modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h2 id="modal-experience-title" className="font-heading text-2xl font-bold tracking-tight text-slate-900">
                {experience.role}
              </h2>
              {experience.status === 'Current' && (
                <span className="px-2.5 py-0.5 rounded-full font-sans text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Active Role
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600 font-sans">
              <span className="font-bold text-slate-900 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-blue-700" />
                {experience.company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {experience.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-mono text-slate-500">
                <Calendar className="w-3 h-3 text-slate-400" />
                {experience.period}
              </span>
            </div>
          </div>

          {/* Overview in Lato font */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="font-sans text-xs uppercase tracking-wider text-blue-800 font-bold mb-1.5">
              Mission Scope & Mandate
            </h4>
            <p className="font-body text-sm text-slate-700 leading-relaxed">
              {experience.summary}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h3 className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">
              Key Responsibilities & Operational Milestones
            </h3>
            <div className="space-y-2.5">
              {experience.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          <DossierContent sections={ROLE_DOSSIERS[experience.id] ?? []} />

          {/* Aircraft Platforms if any */}
          {experience.aircraftPlatforms && (
            <div className="space-y-2">
              <h3 className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">
                Supported Fleet Platforms & Devices
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.aircraftPlatforms.map((ac) => (
                  <span
                    key={ac}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-sans text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200"
                  >
                    <Plane className="w-3.5 h-3.5 text-blue-700" />
                    {ac}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Regulatory Standards */}
          {experience.regulatoryBodies && (
            <div className="space-y-2">
              <h3 className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">
                Regulatory Standards & Audit Bodies
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.regulatoryBodies.map((reg) => (
                  <span
                    key={reg}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-sans text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    {reg}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <h3 className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">
              Tooling & Technology Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md font-mono text-xs bg-slate-100 border border-slate-200 text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full font-sans text-xs font-semibold bg-slate-900 text-white hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
