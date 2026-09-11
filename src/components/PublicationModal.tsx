import React, { useEffect, useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Copy, 
  Check
} from 'lucide-react';
import { PublicationItem } from '../types';

interface PublicationModalProps {
  publication: PublicationItem | null;
  onClose: () => void;
}

export const PublicationModal: React.FC<PublicationModalProps> = ({ publication, onClose }) => {
  const [copiedCitation, setCopiedCitation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (publication) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [publication, onClose]);

  if (!publication) return null;

  const citationText = `Kibet, J. (${publication.date}). "${publication.title}". Technical Brief & Case Study [Ref: ${publication.doiOrRef || 'KASAS-TECH'}]. Kasas Aviation Ltd / Nairobi, Kenya.`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-publication-title"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full font-sans text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
              {publication.category}
            </span>
            <span className="font-mono text-xs text-slate-500">
              Ref: {publication.doiOrRef}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
            aria-label="Close publication modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Header Metadata */}
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {publication.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {publication.readTime}
              </span>
              <span>•</span>
              <span>Author: Jenrick Kibet</span>
            </div>

            <h2 id="modal-publication-title" className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              {publication.title}
            </h2>
          </div>

          {/* Abstract callout */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="font-sans text-xs uppercase tracking-wider text-blue-800 font-bold mb-2">
              Executive Abstract
            </h4>
            <p className="font-body text-sm text-slate-700 leading-relaxed font-normal">
              {publication.abstract}
            </p>
          </div>

          {/* Formatted Sections in Lato */}
          <div className="space-y-6 pt-2">
            {publication.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2.5">
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                  {sec.heading}
                </h3>
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx} className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-wider text-emerald-900 font-bold">
              Key Engineering Insights & Takeaways
            </h4>
            <div className="space-y-2">
              {publication.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
            {publication.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md font-mono text-xs bg-slate-100 border border-slate-200 text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleCopyCitation}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full font-sans text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {copiedCitation ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Citation Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy APA Citation</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full font-sans text-xs font-semibold bg-slate-900 text-white hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
