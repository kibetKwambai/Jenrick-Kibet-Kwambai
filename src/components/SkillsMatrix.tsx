import React, { useState } from 'react';
import { 
  Plane, 
  Compass, 
  Code2, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profileData';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Plane': return <Plane className="w-4 h-4 text-blue-700" />;
      case 'Compass': return <Compass className="w-4 h-4 text-blue-700" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-blue-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-blue-700" />;
      default: return <Cpu className="w-4 h-4 text-blue-700" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">
          Core Competencies & Stack
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
          Technical Domains & Engineering Stack
        </h2>
        <p className="font-body text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
          An interdisciplinary mastery uniting aerospace flight simulation protocols, unmanned robotics autopilots, modern cloud software, and engineering leadership.
        </p>
      </div>

      {/* Domain Selection Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(idx)}
            className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
              activeTab === idx
                ? 'bg-white border-blue-600 ring-2 ring-blue-600/20 shadow-xs'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-blue-50 border border-blue-100">
                {getIcon(cat.iconName)}
              </div>
              <span className="font-mono text-[10px] font-semibold text-slate-500">
                {cat.skills.length} Areas
              </span>
            </div>
            <div className="font-heading text-xs font-bold text-slate-900">
              {cat.title}
            </div>
          </button>
        ))}
      </div>

      {/* Active Tab Skills Grid */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)]">
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
          <div>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              {SKILL_CATEGORIES[activeTab].title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-slate-600 mt-1">
              {SKILL_CATEGORIES[activeTab].description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
            <div 
              key={sIdx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-sans font-semibold text-xs text-slate-900">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white text-blue-800 border border-slate-200 font-semibold">
                    {skill.level}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-600 mt-1 block">
                  {skill.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
