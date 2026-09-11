import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Check, 
  Copy,
  Building,
  UserCheck
} from 'lucide-react';
import { REFERENCES } from '../data/profileData';
import { ReferenceItem } from '../types';

export const ReferencesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="references" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">
          Verified Institutional Endorsements
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
          Professional References
        </h2>
        <p className="font-body text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Direct institutional supervisors, university aerospace department chairs, and aerospace executives supporting Jenrick Kibet's engineering track record.
        </p>
      </div>

      {/* Grid of References */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REFERENCES.map((ref: ReferenceItem) => {
          const isCopied = copiedId === ref.id;
          return (
            <div
              key={ref.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {ref.name}
                    </h3>
                    <div className="font-sans text-xs font-bold text-blue-800 mt-0.5">
                      {ref.role}
                    </div>
                    <div className="font-sans text-xs text-slate-600 font-medium">
                      {ref.organization}
                    </div>
                  </div>

                  {ref.location && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 shrink-0">
                      {ref.location}
                    </span>
                  )}
                </div>

                <p className="font-body mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {ref.relationship}
                </p>
              </div>

              {/* Direct Contact details */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3 text-xs font-mono">
                  {ref.email && (
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-slate-700 hover:text-blue-700 flex items-center gap-1 font-medium transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>{ref.email}</span>
                    </a>
                  )}
                  {ref.phone && (
                    <a
                      href={`tel:${ref.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-slate-700 hover:text-emerald-700 flex items-center gap-1 font-medium transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{ref.phone}</span>
                    </a>
                  )}
                </div>

                {ref.email && (
                  <button
                    onClick={() => handleCopy(ref.id, ref.email)}
                    className="font-sans text-[11px] font-semibold text-slate-500 hover:text-blue-700 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
