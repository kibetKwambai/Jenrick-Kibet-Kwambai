import React from 'react';
import { ArrowUpRight, Globe2 } from 'lucide-react';
import { DIGITAL_PROJECTS } from '../data/digitalPlatforms';
import type { ProjectItem } from '../types';

export const DigitalPlatformsSection: React.FC<{onSelectProject:(project:ProjectItem)=>void}> = ({onSelectProject}) => (
  <section id="websites" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[102.4rem] mx-auto border-t border-slate-200 scroll-mt-28">
    <div className="max-w-4xl mb-9">
      <span className="font-mono text-sm uppercase tracking-widest text-blue-700">Selected Digital Work</span>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-2 text-slate-900">E-Learning, Websites & E-Commerce</h2>
      <p className="font-body text-base text-slate-600 leading-relaxed mt-4">I develop digital platforms for aviation training, online commerce, and professional organisations. These projects complement my engineering software, custom plugins, and research work.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {DIGITAL_PROJECTS.map((project,index)=>(
        <article key={project.id} className="min-w-0 bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white"><Globe2 className="h-5 w-5 text-blue-300" aria-hidden="true"/><span className="font-mono text-sm text-slate-300">{String(index+1).padStart(2,'0')}</span></div>
          <div className="p-6 flex flex-col flex-1">
            <p className="text-sm font-semibold text-blue-700">{project.subtitle}</p>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mt-2">{project.title}</h3>
            <p className="font-body text-base text-slate-600 leading-relaxed mt-3 flex-1">{project.description}</p>
            <p className="font-mono text-sm text-slate-500 break-all mt-5">{project.liveUrl?.replace('https://','')}</p>
            <div className="flex flex-wrap gap-4 items-center border-t border-slate-100 mt-5 pt-4">
              <button onClick={()=>onSelectProject(project)} className="font-sans text-sm font-semibold text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-blue-700">View Project Details</button>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-700">Visit Website<ArrowUpRight className="h-4 w-4" aria-hidden="true"/></a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
