import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/profileData';
import { ProjectItem } from '../types';

interface ProjectsShowcaseProps { onSelectProject: (item: ProjectItem) => void; }
const softwareIds = new Set(['skylink-xplane','jenlink-timetable','jenvibe-mcp','optipress','cockpit-recorder']);

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  const [filterCat, setFilterCat] = useState<string>('All');
  const categories = ['All', 'Aerospace & Robotics', 'Avionics Tooling'];
  const engineeringProjects = PROJECTS.filter(project => !softwareIds.has(project.id));
  const filteredProjects = engineeringProjects.filter(proj => filterCat === 'All' || proj.category === filterCat);
  return <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[102.4rem] mx-auto border-t border-slate-200">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4"><div><span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-700">Engineering Deployments & Architecture</span><h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mt-1">Featured Engineering Projects</h2><p className="font-body text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">Flight simulation infrastructure, autonomous UAV systems and integrated engineering deployments. Software products are catalogued separately below.</p></div>
    <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">{categories.map(cat=><button key={cat} onClick={()=>setFilterCat(cat)} className={'px-3 py-1.5 rounded-lg font-sans text-xs font-medium transition-all '+(filterCat===cat?'bg-slate-950 text-white shadow-xs font-semibold':'text-slate-600 hover:text-slate-950 hover:bg-white/70')}>{cat}</button>)}</div></div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">{filteredProjects.map(proj=><div key={proj.id} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onSelectProject(proj);}}} onClick={()=>onSelectProject(proj)} className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between">
      <div><div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2.5"><span className="truncate max-w-[200px] text-blue-700 font-medium">{proj.subtitle}</span><span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] text-slate-700 font-sans font-medium">{proj.status}</span></div><h3 className="font-heading text-lg font-bold text-slate-950 group-hover:text-blue-700 transition-colors flex items-center justify-between"><span>{proj.title}</span><ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700"/></h3><p className="text-sm text-slate-600 mt-2 leading-relaxed">{proj.description}</p><div className="mt-4 space-y-1.5">{proj.highlights.slice(0,2).map(hl=><div key={hl} className="text-xs text-slate-600 flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--j-lime)] mt-1.5 shrink-0"/><span>{hl}</span></div>)}</div></div>
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2"><div className="flex flex-wrap gap-1.5">{proj.technologies.slice(0,4).map(tech=><span key={tech} className="technology-chip">{tech}</span>)}</div><span className="text-xs font-semibold text-blue-700">View Project</span></div>
    </div>)}</div>
  </section>;
};