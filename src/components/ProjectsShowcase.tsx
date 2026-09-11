import React, { useState } from 'react';
import { 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/profileData';
import { ProjectItem } from '../types';

interface ProjectsShowcaseProps {
  onSelectProject: (item: ProjectItem) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  const [filterCat, setFilterCat] = useState<string>('All');

  const categories = ['All', 'Aerospace & Robotics', 'Avionics Tooling', 'Software & Web'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filterCat === 'All') return true;
    return proj.category === filterCat;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">
            Engineering Deployments & Architecture
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Featured Projects & Systems
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Aviation software and X-Plane integrations, WordPress plugins, AI website connectivity, autonomous UAVs, and flight simulation systems.
          </p>
        </div>

        {/* Category Pills in Google Sans */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`proj-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setFilterCat(cat)}
              className={`px-3 py-1.5 rounded-lg font-sans text-xs font-medium transition-all cursor-pointer ${
                filterCat === cat
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            id={`project-card-${proj.id}`}
            onClick={() => onSelectProject(proj)}
            className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-blue-300 hover:shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2.5">
                <span className="truncate max-w-[200px] text-blue-700 font-medium">{proj.subtitle}</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] text-slate-700 font-sans font-medium">
                  {proj.status}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors flex items-center justify-between">
                <span>{proj.title}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </h3>

              <p className="font-body text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {proj.description}
              </p>

              {/* Highlights in Lato font */}
              <div className="mt-4 space-y-1.5">
                {proj.highlights.slice(0, 2).map((hl, hIdx) => (
                  <div key={hIdx} className="font-body text-xs text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {proj.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="font-sans text-xs font-semibold text-blue-700 group-hover:text-blue-900 transition-colors">
                View Project
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
