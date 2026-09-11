import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  CheckCircle2
} from 'lucide-react';
import { DossierContent } from './DossierContent';
import { PROJECT_DOSSIERS } from '../data/projectDossiers';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full font-sans text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
              {project.category}
            </span>
            <span className="font-mono text-xs text-emerald-700 font-medium">
              ● {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 id="modal-project-title" className="font-heading text-2xl font-bold tracking-tight text-slate-900">
              {project.title}
            </h2>
            <p className="font-sans text-sm font-semibold text-blue-800 mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="font-sans text-xs uppercase tracking-wider text-blue-800 font-bold mb-1.5">
              Project Overview & Scope
            </h4>
            <p className="font-body text-sm text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Specs */}
          <div className="space-y-2">
            <h3 className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">
              Project Facts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.specs.map((spec, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1 text-sm min-w-0">
                  <span className="font-sans text-slate-500 font-medium">{spec.label}</span>
                  <span className="font-semibold font-mono text-slate-900 break-words">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5">
            <h3 className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">
              Scope & Capabilities
            </h3>
            <div className="space-y-2">
              {project.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          <DossierContent sections={PROJECT_DOSSIERS[project.id] ?? []} />

          {/* Tech stack */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <h3 className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
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
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-sans text-sm font-semibold text-blue-700 hover:underline">Visit Website ↗</a>}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-slate-700 hover:text-blue-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full font-sans text-xs font-semibold bg-slate-900 text-white hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
