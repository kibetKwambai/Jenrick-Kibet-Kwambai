import React from 'react';
import { EXECUTIVE_SUMMARY, HYBRID_SUMMARY } from '../data/careerContent';

const deliveryEvidence = [
  { title: 'Project leadership & resources', source: 'Kasas Aviation · Project Manager', text: 'Coordinate 12+ engineers supporting simulator operations and training delivery. Manage a $500K+ annual vendor and parts budget, with 15% procurement savings.', href: '#experience' },
  { title: 'Data platforms & analytics', source: 'Zalego–STEPWISE · Data Engineer', text: 'Built AWS/Azure ETL workflows handling 10TB+ of data, reduced processing time by 40% and automated reporting that saved 20+ hours weekly.', href: '#experience' },
  { title: 'Requirements & software delivery', source: 'Jeneration Software · Software Engineer', text: 'Translate operational needs into scheduling tools, e-learning workflows, AI–website integrations and embedded telemetry interfaces.', href: '#websites' },
  { title: 'Quality, validation & handover', source: 'Think Aviation · Flight Simulator Engineer', text: 'Support QTG preparation and qualification activities with technical records, maintenance programmes, test evidence, manuals and instructor training.', href: '#technical-manuals' }
];

const roleAlignment = [
  {
    title: 'Project Management & Business Analysis',
    items: ['Roadmaps, scope, schedules & milestones', 'Cross-functional technical coordination', 'Requirements elicitation & traceability', 'KPI-driven delivery & process improvement']
  },
  {
    title: 'Risk, Governance & Compliance',
    items: ['Risk identification & mitigation', 'Quality and audit evidence', 'Change control & escalation paths', 'Regulated engineering compliance']
  },
  {
    title: 'Stakeholder & Change Management',
    items: ['Technical and executive communication', 'Vendor and partner coordination', 'Cross-team problem solving', 'Training and operational adoption']
  },
  {
    title: 'Reporting & Documentation',
    items: ['Technical specifications & manuals', 'Test evidence and validation records', 'Operational reporting & dashboards', 'Handover and training materials']
  },
  {
    title: 'Vendor, Budget & Delivery Oversight',
    items: ['$500K+ annual vendor/parts portfolio', '15% procurement savings', 'Resource prioritisation', 'Supplier deliverables & quality']
  },
  {
    title: 'Testing, UAT & Operational Readiness',
    items: ['Acceptance criteria & traceability', 'System integration testing', 'Defect and snag resolution', 'Qualification evidence & readiness']
  }
];

const deliveryApproach = [
  { title: 'Define & plan', text: 'Establish the charter, roadmap, scope, schedule, budget, resource owners and measurable KPIs. Capture business requirements and connect them to functional specifications, technical designs and acceptance criteria.' },
  { title: 'Govern & communicate', text: 'Maintain risks, assumptions, issues and dependencies; control changes; tailor reporting to working teams and leadership; and use agreed escalation paths for material delivery risks.' },
  { title: 'Validate & transition', text: 'Track vendor deliverables and service expectations, validate solutions against requirements, resolve defects before sign-off, and hand over runbooks, training, ownership and lessons learned.' }
];

export const ProfessionalSummary: React.FC = () => (
  <section id="summary" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[102.4rem] mx-auto border-t border-slate-200 scroll-mt-28">
    <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Project Leadership · Data & Technology · Systems Engineering</p>
    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Technical depth. Practical delivery.</h2>

    <div className="max-w-5xl space-y-4 mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
      <p>{EXECUTIVE_SUMMARY}</p>
      <p>{HYBRID_SUMMARY}</p>
    </div>

    <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Target Roles</p>
      <p className="font-heading text-base sm:text-lg font-semibold leading-relaxed text-slate-900 mt-2">
        Technical Project Manager, Data &amp; Technology Project Manager, Engineering Project Manager, Systems Engineer, Aircraft Maintenance Engineer, Flight Simulator Technician, Avionics Technician
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {deliveryEvidence.map(item => (
        <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <p className="text-xs font-semibold text-blue-700">{item.source}</p>
          <h3 className="font-heading text-lg font-bold text-slate-900 mt-2">{item.title}</h3>
          <p className="text-sm leading-relaxed text-slate-600 mt-3">{item.text}</p>
          <a href={item.href} className="inline-block mt-4 text-sm font-semibold text-blue-700 hover:underline">Explore related work <span aria-hidden="true">→</span></a>
        </article>
      ))}
    </div>

    <div className="mt-10">
      <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Data & Technology Project Delivery</p>
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-2">Role-aligned delivery capabilities</h3>
      <p className="max-w-4xl text-sm sm:text-base leading-relaxed text-slate-600 mt-3">
        My strongest evidence combines project leadership, enterprise data engineering, software implementation and regulated systems validation. The capabilities below map that experience to modern Data &amp; Technology delivery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {roleAlignment.map(group => (
          <article key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-heading font-bold text-base text-slate-900">{group.title}</h4>
            <ul className="mt-4 space-y-2">
              {group.items.map(item => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                  <span className="text-blue-700 font-bold" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>

    <details className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <summary className="cursor-pointer font-heading text-lg font-bold text-slate-900">Delivery framework for a Data & Technology assignment</summary>
      <p className="text-sm leading-relaxed text-slate-600 mt-4">A practical governance model built on my engineering, data and software-delivery background.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
        {deliveryApproach.map((item, index) => (
          <div key={item.title}>
            <p className="text-xs font-semibold text-blue-700">0{index + 1}</p>
            <h3 className="font-heading font-bold text-slate-900 mt-1">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-600 mt-5 border-t border-slate-200 pt-4">
        For BI/Power BI workstreams, I coordinate specialist developers around agreed data quality checks, requirements and acceptance criteria. For donor reporting, GDPR, HIPAA or local privacy obligations, I work with the appropriate governance and compliance specialists to confirm requirements and controls.
      </p>
    </details>
  </section>
);
