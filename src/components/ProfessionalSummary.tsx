import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { EXECUTIVE_SUMMARY, HYBRID_SUMMARY } from '../data/careerContent';

const evidence = [
  {
    title: 'Project leadership',
    source: 'Kasas Aviation',
    value: '50+ engineers · 108+ projects',
    text: 'Cross-functional coordination across simulator operations, engineering delivery, systems integration and technical programmes.'
  },
  {
    title: 'Vendor & technical support',
    source: 'Engineering portfolio',
    value: '$600M+ portfolio',
    text: 'Vendor-supported systems, services and technical delivery managed through quality, schedule, escalation and operational-readiness controls.'
  },
  {
    title: 'Data engineering',
    source: 'Zalego–STEPWISE',
    value: '10TB+ data · 40% faster processing',
    text: 'AWS/Azure ETL workflows, SQL/Python automation and reporting improvements that reduced processing time and repetitive work.'
  },
  {
    title: 'Aviation training & reliability',
    source: 'Think Aviation / Kasas Aviation',
    value: '200+ pilots · 99%+ uptime',
    text: 'FSTD operations, qualification evidence, technical documentation, troubleshooting and simulator training support.'
  }
];

const capabilities = [
  ['Project delivery', 'Roadmaps, scope, schedules, milestones, dependencies and resource coordination'],
  ['Business analysis', 'Requirements, solution shaping, traceability, functional and technical specifications'],
  ['Governance & risk', 'RAID-style controls, change management, escalations, compliance evidence and audit readiness'],
  ['Testing & readiness', 'Validation, defect resolution, acceptance criteria, qualification evidence and handover'],
  ['Stakeholder leadership', 'Technical teams, senior stakeholders, vendors, regulators and training operations'],
  ['Reporting & documentation', 'Dashboards, technical records, manuals, test evidence, briefing material and runbooks']
];

const delivery = [
  ['Define', 'Clarify the business outcome, scope, owners, constraints, success measures and delivery path.'],
  ['Control', 'Track risks, dependencies, changes, vendors, quality and decisions against the agreed baseline.'],
  ['Validate', 'Test against requirements, close defects, prepare users and transfer ownership with evidence.']
];

export const ProfessionalSummary: React.FC = () => (
  <section id="summary" className="profile-section border-t border-slate-200">
    <div className="profile-section__inner grid lg:grid-cols-[0.78fr_1.22fr] gap-10 xl:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="section-kicker">Project leadership, data and systems engineering</p>
        <h2 className="section-title mt-3">A technical project leader who can still go deep.</h2>
        <div className="mt-5 space-y-4 text-slate-600 leading-relaxed max-w-xl">
          <p>{EXECUTIVE_SUMMARY}</p>
          <p>{HYBRID_SUMMARY}</p>
        </div>

        <div className="role-fit mt-7">
          <span>Best-fit roles</span>
          <p>Technical Project Manager · Data &amp; Technology Project Manager · Engineering Project Manager · Systems Engineer · Flight Simulator Engineer</p>
        </div>

        <a href="#experience" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-blue-700 hover:underline">
          Review career evidence <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div>
        <div className="evidence-ledger">
          {evidence.map(item => (
            <article key={item.title} className="evidence-row">
              <div className="evidence-row__meta">
                <span>{item.source}</span>
                <strong>{item.value}</strong>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-2xl font-bold text-slate-950">How I deliver technology programmes</h3>
          <div className="capability-ledger mt-5">
            {capabilities.map(([title, text]) => (
              <div key={title} className="capability-row">
                <div className="flex items-center gap-2 font-heading font-bold text-slate-950">
                  <CheckCircle2 className="h-4 w-4 text-blue-700 shrink-0" />
                  {title}
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <details className="delivery-framework mt-8">
          <summary>Delivery framework for a Data &amp; Technology assignment</summary>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {delivery.map(([title, text], index) => (
              <div key={title} className="delivery-step">
                <span>0{index + 1}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-relaxed text-slate-600">
            For specialist BI/Power BI, donor-reporting or privacy workstreams, I coordinate the appropriate subject-matter experts while keeping requirements, controls, quality and acceptance criteria within the delivery baseline.
          </p>
        </details>
      </div>
    </div>
  </section>
);