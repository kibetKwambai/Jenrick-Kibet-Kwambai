import React from 'react';

const terms = [
  ['VSR / VDR', 'Validation Data Roadmap', 'VSR is the label used in my documentation; EASA guidance uses VDR. The roadmap identifies the source and applicability of the data used for qualification tests, including aircraft, engine, and avionics configuration.'],
  ['VSD', 'Validation Data Source', 'The source evidence used to validate simulator behaviour. EASA describes this as Validation Source Data. The documentation identifies the dataset, its origin, and the aircraft configuration it represents.'],
  ['AESD', 'Approved Engineering Simulation Data', 'Engineering simulation data accepted for the applicable qualification purpose. Its supporting records explain its provenance, scope, and relationship to the represented aircraft and test.'],
  ['VDP', 'Validation Data Packs', 'The organised collection of validation evidence used for the device and its qualification work. A useful pack preserves the connection between each test, its source data, and any applicable engineering-simulation data.'],
  ['OSD', 'Operational Suitability Data', 'The operational-suitability context associated with an aircraft type. Relevant simulator data and training information help connect the represented aircraft configuration to its intended training use.']
];

export const ValidationDataSection: React.FC = () => (
  <div className="mt-12 rounded-2xl bg-slate-900 text-white p-6 sm:p-9">
    <p className="text-sm font-mono uppercase tracking-widest text-blue-300">Validation Evidence & Traceability</p>
    <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-2">From source data to qualification evidence</h3>
    <div className="mt-6 border-y border-white/15 py-6">
      <p className="font-mono text-2xl sm:text-4xl tracking-tight break-words">VDP = VSD + AESD</p>
      <p className="text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">My documentation model combines the identified validation source with approved engineering simulation data where applicable. The roadmap records how the evidence relates to the device configuration and qualification tests.</p>
    </div>
    <dl className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-7">
      {terms.map(([term,title,description])=><div key={term}><dt className="font-semibold text-lg"><span className="font-mono text-blue-300">{term}</span><span className="block mt-1">{title}</span></dt><dd className="text-base text-slate-300 leading-relaxed mt-3">{description}</dd></div>)}
    </dl>
    <div className="flex flex-wrap gap-4 text-sm mt-8 pt-5 border-t border-white/15">
      <a href="https://www.easa.europa.eu/en/downloads/135964/en" target="_blank" rel="noopener noreferrer" className="text-blue-200 underline underline-offset-4">EASA: validation source data and the roadmap</a>
      <a href="https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/suitability-data-osd-flight-crew-data-cs-fcd?page=3" target="_blank" rel="noopener noreferrer" className="text-blue-200 underline underline-offset-4">EASA: Operational Suitability Data</a>
    </div>
  </div>
);
