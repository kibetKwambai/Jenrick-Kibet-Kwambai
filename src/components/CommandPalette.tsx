import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  Briefcase, 
  BookOpen, 
  Compass, 
  Phone, 
  Mail, 
  FileText, 
  ArrowRight
} from 'lucide-react';
import { DIGITAL_PROJECTS } from '../data/digitalPlatforms';
import { EXPERIENCES, PUBLICATIONS, PROJECTS, SKILL_CATEGORIES, PROFILE_INFO } from '../data/profileData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExperience: (id: string) => void;
  onSelectPublication: (id: string) => void;
  onSelectProject: (id: string) => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectExperience,
  onSelectPublication,
  onSelectProject,
  onOpenContact,
  onOpenResume
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search experiences
  const matchedExperiences = EXPERIENCES.filter(exp => 
    exp.role.toLowerCase().includes(normalizedQuery) ||
    exp.company.toLowerCase().includes(normalizedQuery) ||
    exp.technologies.some(t => t.toLowerCase().includes(normalizedQuery)) ||
    exp.aircraftPlatforms?.some(a => a.toLowerCase().includes(normalizedQuery))
  );

  // Search publications
  const matchedPublications = PUBLICATIONS.filter(pub => 
    pub.title.toLowerCase().includes(normalizedQuery) ||
    pub.category.toLowerCase().includes(normalizedQuery) ||
    pub.tags.some(t => t.toLowerCase().includes(normalizedQuery))
  );

  // Search projects
  const matchedProjects = [...PROJECTS, ...DIGITAL_PROJECTS].filter(proj => 
    proj.title.toLowerCase().includes(normalizedQuery) ||
    proj.subtitle.toLowerCase().includes(normalizedQuery) ||
    proj.technologies.some(t => t.toLowerCase().includes(normalizedQuery))
  );

  // Search skills
  const matchedSkills: { name: string; category: string }[] = [];
  SKILL_CATEGORIES.forEach(cat => {
    cat.skills.forEach(s => {
      if (s.name.toLowerCase().includes(normalizedQuery) || s.tag.toLowerCase().includes(normalizedQuery)) {
        matchedSkills.push({ name: s.name, category: cat.title });
      }
    });
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[80vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Search input bar */}
        <div className="flex items-center px-5 py-4 border-b border-slate-200 bg-slate-50/70 gap-3 shrink-0">
          <Search className="w-5 h-5 text-blue-700 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search roles, C208B, publications, skills, references..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent font-sans text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-4 text-xs font-body">
          {/* Quick Actions */}
          {!query && (
            <div className="space-y-1.5">
              <div className="font-sans text-[10px] uppercase tracking-wider text-slate-400 px-3 font-bold">
                Quick Shortcuts
              </div>
              <button
                onClick={() => { onClose(); onOpenResume(); }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors text-left cursor-pointer border border-transparent hover:border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-blue-700" />
                  <span className="font-sans font-semibold text-slate-900 text-xs sm:text-sm">Open Curriculum Vitae (Print / PDF)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => { onClose(); onOpenContact(); }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors text-left cursor-pointer border border-transparent hover:border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-700" />
                  <span className="font-sans font-semibold text-slate-900 text-xs sm:text-sm">Direct Message ({PROFILE_INFO.email})</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button onClick={() => { onClose(); onOpenContact(); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 text-left"><Phone className="w-4 h-4 text-blue-700" /><span className="font-semibold text-sm">Request a Call</span></button>
            </div>
          )}

          {/* Experiences */}
          {matchedExperiences.length > 0 && (
            <div className="space-y-1">
              <div className="font-sans text-[10px] uppercase tracking-wider text-slate-400 px-3 font-bold">
                Experience & Roles ({matchedExperiences.length})
              </div>
              {matchedExperiences.slice(0, 4).map(exp => (
                <button
                  key={exp.id}
                  onClick={() => { onClose(); onSelectExperience(exp.id); }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="w-4 h-4 text-blue-700 shrink-0" />
                    <div>
                      <div className="font-heading font-bold text-slate-900 text-xs sm:text-sm">{exp.role}</div>
                      <div className="font-sans text-[11px] text-slate-500">{exp.company} • {exp.period}</div>
                    </div>
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-blue-700">View Dossier</span>
                </button>
              ))}
            </div>
          )}

          {/* Publications */}
          {matchedPublications.length > 0 && (
            <div className="space-y-1">
              <div className="font-sans text-[10px] uppercase tracking-wider text-slate-400 px-3 font-bold">
                Publications ({matchedPublications.length})
              </div>
              {matchedPublications.slice(0, 3).map(pub => (
                <button
                  key={pub.id}
                  onClick={() => { onClose(); onSelectPublication(pub.id); }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-blue-700 shrink-0" />
                    <div>
                      <div className="font-heading font-bold text-slate-900 line-clamp-1 text-xs sm:text-sm">{pub.title}</div>
                      <div className="font-sans text-[11px] text-slate-500">{pub.category} • {pub.readTime}</div>
                    </div>
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-blue-700">Read</span>
                </button>
              ))}
            </div>
          )}

          {/* Projects */}
          {matchedProjects.length > 0 && (
            <div className="space-y-1">
              <div className="font-sans text-[10px] uppercase tracking-wider text-slate-400 px-3 font-bold">
                Projects & Engineering ({matchedProjects.length})
              </div>
              {matchedProjects.slice(0, 3).map(proj => (
                <button
                  key={proj.id}
                  onClick={() => { onClose(); onSelectProject(proj.id); }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-blue-700 shrink-0" />
                    <div>
                      <div className="font-heading font-bold text-slate-900 text-xs sm:text-sm">{proj.title}</div>
                      <div className="font-sans text-[11px] text-slate-500">{proj.subtitle}</div>
                    </div>
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-blue-700">Inspect</span>
                </button>
              ))}
            </div>
          )}

          {/* Skills */}
          {matchedSkills.length > 0 && (
            <div className="space-y-1">
              <div className="font-sans text-[10px] uppercase tracking-wider text-slate-400 px-3 font-bold">
                Technical Competencies
              </div>
              <div className="flex flex-wrap gap-1.5 p-2">
                {matchedSkills.slice(0, 10).map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md font-mono text-xs bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500 shrink-0 font-sans">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-700 font-mono text-[10px]">ESC</kbd> to exit</span>
          <span className="font-medium text-slate-600">Jenrick Kibet Kwambai • Systems Portfolio</span>
        </div>
      </div>
    </div>
  );
};
