import React from 'react';
export const ComplianceArchitecture:React.FC=()=> <article className="mt-8 rounded-2xl bg-slate-900 text-white p-6 sm:p-8">
  <p className="text-xs uppercase tracking-widest font-semibold text-blue-300">Documentation Portfolio</p>
  <h3 className="font-heading text-2xl font-bold mt-2">Technical Manuals, QTGs & Compliance Architecture</h3>
  <p className="text-slate-300 leading-relaxed mt-3 max-w-4xl">I develop connected documentation for flight simulation: guides that explain the device, QTGs that organise test evidence, and maintenance and operating manuals that support its working life.</p>
  <details className="mt-5 border-t border-white/20 pt-4"><summary className="cursor-pointer font-semibold text-blue-200 py-2">View more specifications — documentation architecture</summary>
    <div className="grid md:grid-cols-2 gap-6 mt-5">{[
      ['Configuration & applicability','Identify the aircraft, engine, avionics and device versions represented by each document. My portfolio includes C172S, C208 G1000 NXi and Do228 TPE-331-05-252 documentation.'],
      ['Qualification & evidence','Connect the Qualification and Approval Guide (QAGs), applicable compliance checklists and QTG records. The QTG specification below explains the data roadmap and evidence relationships.'],
      ['Operation & technical support','Use FSTD guides for device orientation, SOPs for routine use, and maintenance manuals for technical support. Each document serves a distinct audience while referring to the same device configuration.'],
      ['Training & document control','Engineering EGR training manuals support structured learning for certified engineers in AOC and AMO environments. Clear revision histories, ownership and cross-references keep a documentation set navigable.']
    ].map(([title,body])=><div key={title}><h4 className="font-bold">{title}</h4><p className="text-sm leading-relaxed text-slate-300 mt-2">{body}</p></div>)}</div>
  </details>
</article>;
