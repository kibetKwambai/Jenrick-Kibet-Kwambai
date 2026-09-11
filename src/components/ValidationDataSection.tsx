import React from 'react';
const terms = [
  ['VSD — Validation Source Data','Aircraft reference evidence, including ground tests, flight tests and engineering data. Identify its origin, revision and represented configuration before selecting reference data for a QTG test.'],
  ['VDR — Validation Data Roadmap','Maps each test to suitable data and explains configuration applicability and gaps. VSR is the label used in my earlier documentation for this roadmap.'],
  ['AESD — Approved Engineering Simulation Data','My documentation label for engineering simulation evidence accepted for the relevant purpose. Record the supporting validation and acceptance scope; simulated results alone do not establish approval.'],
  ['VDP — Validation Data Packs','My organised evidence package: source records, applicable engineering evidence, the roadmap and revision references. VDP = VSD + AESD is my packaging shorthand; engineering data can already form part of VSD, so this is not a regulatory equation.'],
  ['OSD — Operational Suitability Data','Where applicable, the aircraft OSD establishes validation-data context for the QTG. Keep the data applicable to the represented aircraft and intended qualification basis.']
];
export const ValidationDataSection:React.FC=()=> <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
  <h4 className="font-heading text-xl font-bold text-slate-900">QTG development, validation data & qualification review</h4>
  <p className="text-sm text-slate-600 leading-relaxed mt-3">My documentation work covers C172S, C208 G1000 NXi and Do228 TPE-331-05-252 devices. Each package connects the represented configuration with test procedures, evidence and review records.</p>
  <dl className="space-y-5 mt-5">{terms.map(([title,body])=><div key={title}><dt className="font-semibold text-slate-900">{title}</dt><dd className="text-sm leading-relaxed text-slate-600 mt-1">{body}</dd></div>)}</dl>
  <h5 className="font-bold text-slate-900 mt-6">How the evidence becomes a qualification record</h5>
  <ol className="list-decimal pl-5 space-y-3 text-sm leading-relaxed text-slate-600 mt-3">
    <li>Define the device configuration and applicable qualification basis; select the relevant source data through the VDR.</li>
    <li>Prepare QTG conditions, procedures and comparisons between FSTD results and reference data, using the applicable tolerances.</li>
    <li>Present the QTG and supporting evidence for evaluation, alongside functions and subjective tests. Resolve findings and preserve the reviewed revisions.</li>
    <li>Following successful evaluation and qualification, the QTG becomes the Master QTG (MQTG), providing a reference for continuing qualification work.</li>
  </ol>
  <p className="mt-5 text-sm leading-relaxed text-slate-600">I participate in documentation preparation and qualification activities. The competent authority determines qualification; a data pack or completed checklist does not itself grant approval. The applicable basis must be confirmed for each device.</p>
  <div className="mt-5 space-y-2 text-sm"><a className="block text-blue-700 underline" href="https://www.easa.europa.eu/en/downloads/135963/en" target="_blank" rel="noopener noreferrer">EASA CS-SIMD Issue 2: source data to MQTG</a><a className="block text-blue-700 underline" href="https://www.easa.europa.eu/sites/default/files/dfu/CS-FSTD%28A%29%20%E2%80%94%20Issue%202.pdf" target="_blank" rel="noopener noreferrer">EASA CS-FSTD(A) Issue 2: QTG and validation guidance</a></div>
</div>;
