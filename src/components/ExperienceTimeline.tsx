import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Plane, 
  CheckCircle2,
  Building2,
  Sparkles
} from 'lucide-react';
import { EXPERIENCES } from '../data/profileData';
import { ExperienceItem } from '../types';

interface ExperienceTimelineProps {
  onSelectExperience: (item: ExperienceItem) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ onSelectExperience }) => {
  const [filterType, setFilterType] = useState<string>('All (10)');

  const categories = [
    'All (10)',
    'Aviation & FSTD',
    'Defense & Airwing',
    'UAV & Robotics',
    'Software & Systems'
  ];

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filterType === 'All (10)') return true;
    if (filterType === 'Aviation & FSTD') {
      return exp.id === 'kasas-aviation' || exp.id === 'think-aviation';
    }
    if (filterType === 'Defense & Airwing') {
      return exp.id === 'deftec-kdf' || exp.id === 'police-airwing';
    }
    if (filterType === 'UAV & Robotics') {
      return exp.id === 'rotocop-drone' || exp.id === 'ku-jfk-drone';
    }
    if (filterType === 'Software & Systems') {
      return exp.id === 'jeneration-software' || exp.id === 'zalego-stepwise' || exp.id === 'ku-attachment' || exp.id === 'deltar-properties';
    }
    return true;
  });

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[102.4rem] mx-auto border-t border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">
            Professional Track Record
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Work Experience & Systems Leadership
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Spanning commercial aviation flight simulation training devices (FSTD), Kenya Defense Forces (DEFTEC) jet turbine engines, police airwing fleet maintenance, and autonomous UAV flight controllers.
          </p>
        </div>

        {/* Filter Tabs in Google Sans */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-3 py-1.5 rounded-lg font-sans text-xs font-medium transition-all cursor-pointer ${
                filterType === cat
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Cards Stack */}
      <div className="space-y-6">
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            id={`experience-card-${exp.id}`}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-300 transition-all"
          >
            {/* Top row: Role, company, status and period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  {exp.status === 'Current' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-sans text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Active Role
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-slate-100 text-slate-600 border border-slate-200">
                    {exp.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1 font-sans text-xs font-semibold text-slate-700">
                  <Building2 className="w-3.5 h-3.5 text-blue-700" />
                  <span>{exp.company}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-normal flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="font-mono text-xs font-medium text-slate-500 flex items-center gap-1.5 shrink-0 sm:self-start">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Overview paragraph */}
            <p className="font-body text-xs sm:text-sm text-slate-700 mt-4 leading-relaxed">
              {exp.summary}
            </p>

            {/* Platforms / Aircraft Supported */}
            {exp.aircraftPlatforms && exp.aircraftPlatforms.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="font-sans text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                  <Plane className="w-3 h-3 text-blue-700" />
                  Platforms:
                </span>
                {exp.aircraftPlatforms.map((plat) => (
                  <span
                    key={plat}
                    className="font-sans text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200"
                  >
                    {plat}
                  </span>
                ))}
              </div>
            )}

            {/* Bullet achievements in Lato font */}
            <div className="mt-4 space-y-2 pt-3 border-t border-slate-100">
              {exp.highlights.slice(0, 3).map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Bottom action: View Full Role Dossier */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-1.5">
                {exp.technologies.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectExperience(exp)}
                className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                <span>Full Role Dossier</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
