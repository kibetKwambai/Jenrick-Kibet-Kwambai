import React, { useState } from 'react';
import { Plane, Compass, Code2, ShieldCheck, Cpu, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profileData';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const iconFor = (name: string) => {
    switch (name) {
      case 'Plane': return Plane;
      case 'Compass': return Compass;
      case 'Code2': return Code2;
      case 'ShieldCheck': return ShieldCheck;
      default: return Cpu;
    }
  };

  const active = SKILL_CATEGORIES[activeTab];

  return (
    <section id="skills" className="profile-section border-t border-slate-200">
      <div className="profile-section__inner">
        <div className="max-w-3xl">
          <p className="section-kicker">Core expertise</p>
          <h2 className="section-title mt-3">Project judgement backed by hands-on engineering.</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Select a domain to see the technical depth behind the project-management profile.
          </p>
        </div>

        <div className="expertise-console mt-9">
          <div className="expertise-console__nav" role="tablist" aria-label="Expertise domains">
            {SKILL_CATEGORIES.map((category, index) => {
              const Icon = iconFor(category.iconName);
              const selected = activeTab === index;
              return (
                <button
                  key={category.title}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="expertise-panel"
                  onClick={() => setActiveTab(index)}
                  className={selected ? 'expertise-tab expertise-tab--active' : 'expertise-tab'}
                >
                  <Icon className="h-5 w-5" />
                  <span>
                    <strong>{category.title}</strong>
                    <small>{category.skills.length} capability areas</small>
                  </span>
                </button>
              );
            })}
          </div>

          <div id="expertise-panel" role="tabpanel" className="expertise-console__panel">
            <div className="border-b border-slate-200 pb-5">
              <h3 className="font-heading text-2xl font-bold text-slate-950">{active.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">{active.description}</p>
            </div>

            <div className="expertise-list mt-2">
              {active.skills.map(skill => (
                <div key={skill.name} className="expertise-skill">
                  <Check className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <strong>{skill.name}</strong>
                      <span>{skill.level}</span>
                    </div>
                    <p>{skill.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};