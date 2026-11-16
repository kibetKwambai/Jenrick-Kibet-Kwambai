import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Printer, X } from 'lucide-react';
import {
  PROFILE_INFO,
  EXPERIENCES,
  EDUCATION_LIST,
  CERTIFICATIONS,
  PUBLICATIONS
} from '../data/profileData';
import { EXECUTIVE_SUMMARY } from '../data/careerContent';
import './resume.css';

const PRIMARY_EXPERIENCE_IDS = ['kasas-aviation', 'think-aviation', 'zalego-stepwise', 'jeneration-software'];
const SECONDARY_EXPERIENCE_IDS = ['deltar-properties', 'rotocop-drone', 'police-airwing'];
const EARLY_EXPERIENCE_IDS = ['ku-jfk-drone', 'deftec-kdf', 'ku-attachment'];

const primaryExperience = PRIMARY_EXPERIENCE_IDS
  .map(id => EXPERIENCES.find(item => item.id === id))
  .filter(Boolean);

const secondaryExperience = SECONDARY_EXPERIENCE_IDS
  .map(id => EXPERIENCES.find(item => item.id === id))
  .filter(Boolean);

const earlyExperience = EARLY_EXPERIENCE_IDS
  .map(id => EXPERIENCES.find(item => item.id === id))
  .filter(Boolean);

const selectedEducation = EDUCATION_LIST.filter(item =>
  item.degree.startsWith('Bachelor') ||
  item.degree.startsWith('Diploma') ||
  item.degree.includes('Project Management')
);

const selectedCertifications = CERTIFICATIONS.filter(item =>
  [
    'Flight Simulator Maintenance Engineer Training',
    'Certificate, Safety Management Systems (SMS)',
    'Certificate, Quality Management Systems (QMS)',
    'Certificate in Project Management'
  ].includes(item.title)
);

const selectedResearch = PUBLICATIONS.filter(item => item.kind === 'Research paper').slice(0, 3);

const coreCompetencies = [
  'Technical Project Management',
  'Data & Technology Delivery',
  'Business Analysis',
  'Requirements & Traceability',
  'Scope / Schedule / Resource Planning',
  'Risk, Issues & Change Control',
  'Vendor & Technical Support Management',
  'Testing, UAT & Acceptance Readiness',
  'Systems Integration',
  'Quality & Compliance',
  'AWS / Azure',
  'SQL / Python / ETL',
  'FSTD / QTG',
  'Technical Documentation & Handover'
];

const impactMetrics = [
  '50+ engineers coordinated',
  '108+ engineering & technical projects',
  '$600M+ vendor & technical-support portfolio',
  '200+ pilots trained',
  '10TB+ data engineered',
  '99%+ FSTD uptime'
];

const softwarePortfolio = [
  {
    name: 'Jicheki Cockpit Recorder',
    description: 'Flight-training telemetry capture, playback diagnostics and embedded sensor acquisition.'
  },
  {
    name: 'SimQTG Studio & EchoMorans',
    description: 'FSTD qualification-test workflow, telemetry bridge, evidence capture and engineering validation tooling.'
  },
  {
    name: 'SkyLink X-Plane Plugin',
    description: 'X-Plane connectivity with ForeFlight, Garmin and other pilot platforms.'
  },
  {
    name: 'JenVibe MCP, Jenlink Timetable, Testimonial Bridge & Educore LMS',
    description: 'WordPress, AI-connectivity, scheduling, quality-feedback and learning-management products.'
  }
];

const ResumeRole: React.FC<{
  item: NonNullable<(typeof EXPERIENCES)[number] | undefined>;
  bullets?: number;
  compact?: boolean;
}> = ({ item, bullets = 4, compact = false }) => (
  <div className={compact ? 'cv-role cv-role--compact' : 'cv-role'}>
    <div className="cv-role-heading">
      <div>
        <h3>{item.role}</h3>
        <p className="cv-company">{item.company} · {item.location}</p>
      </div>
      <span className="cv-period">{item.period}</span>
    </div>
    <ul>
      {item.highlights.slice(0, bullets).map(bullet => <li key={bullet}>{bullet}</li>)}
    </ul>
  </div>
);

export const ResumeDocument: React.FC = () => (
  <div className="cv-document">
    <article className="cv-page">
      <header className="cv-header">
        <div>
          <h1>Jenrick Kibet Kwambai</h1>
          <p className="cv-positioning">Technical Project Manager | Data & Technology | Engineering Systems</p>
        </div>
        <div className="cv-contact" aria-label="Contact information">
          <span>{PROFILE_INFO.location}</span>
          <a href={'mailto:' + PROFILE_INFO.email}>{PROFILE_INFO.email}</a>
          <a href={PROFILE_INFO.linkedinUrl}>linkedin.com/in/jenrickkibet</a>
          <a href="https://kibetkwambai.github.io/Jenrick-Kibet-Kwambai/">kibetkwambai.github.io/Jenrick-Kibet-Kwambai</a>
        </div>
      </header>

      <section className="cv-section">
        <h2>Executive Profile</h2>
        <p className="cv-summary">
          {EXECUTIVE_SUMMARY} At Zalego–STEPWISE, I built AWS/Azure ETL workflows handling 10TB+ of data, reduced processing time by 40%, and automated reporting that saved 20+ hours of manual work per week. My strongest delivery areas are requirements, governance, risk, vendor coordination, systems integration, testing, quality documentation and operational handover.
        </p>
      </section>

      <section className="cv-section">
        <h2>Career Impact</h2>
        <p className="cv-impact-line">{impactMetrics.join('  |  ')}</p>
      </section>

      <section className="cv-section">
        <h2>Core Competencies</h2>
        <p className="cv-keywords">{coreCompetencies.join(' · ')}</p>
      </section>

      <section className="cv-section cv-experience-section">
        <h2>Professional Experience</h2>
        {primaryExperience.map(item => item && <ResumeRole key={item.id} item={item} bullets={item.id === 'jeneration-software' ? 3 : 4} />)}
      </section>

      <footer className="cv-footer">
        <span>Jenrick Kibet Kwambai · Executive Curriculum Vitae</span>
        <span>Page 1 of 2</span>
      </footer>
    </article>

    <article className="cv-page">
      <header className="cv-page-header">
        <span>Jenrick Kibet Kwambai</span>
        <strong>Technical Project Management · Data · Engineering Systems</strong>
      </header>

      <section className="cv-section">
        <h2>Additional Engineering & Commercial Experience</h2>
        {secondaryExperience.map(item => item && <ResumeRole key={item.id} item={item} bullets={item.id === 'deltar-properties' ? 2 : 3} compact />)}
      </section>

      <section className="cv-section">
        <h2>Earlier Technical Training & R&D</h2>
        <div className="cv-early-list">
          {earlyExperience.map(item => item && (
            <div key={item.id} className="cv-early-item">
              <div>
                <strong>{item.role}</strong>
                <span>{item.company}</span>
              </div>
              <span>{item.period}</span>
              <p>{item.highlights[0]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>Selected Software & Technical Products</h2>
        <ul className="cv-product-list">
          {softwarePortfolio.map(product => (
            <li key={product.name}><strong>{product.name}:</strong> {product.description}</li>
          ))}
        </ul>
      </section>

      <section className="cv-section">
        <h2>Technical Stack & Methods</h2>
        <p className="cv-keywords">
          Project planning · Business analysis · Agile/Scrum · Vendor coordination · Testing & validation · FSTD qualification · QTG evidence · KCAA compliance · AWS · Azure · SQL · Python · ETL · C++ · C#/.NET · JavaScript/React · WordPress · X-Plane · Garmin G1000 NXi · Raspberry Pi · Arduino · MATLAB/Simulink · SOLIDWORKS
        </p>
      </section>

      <section className="cv-section">
        <h2>Education & Professional Development</h2>
        <div className="cv-qualification-list">
          {selectedEducation.map(item => (
            <div className="cv-qualification" key={item.degree}>
              <div>
                <strong>{item.degree}</strong>
                <span>{item.institution}</span>
              </div>
              <span>{item.period}</span>
            </div>
          ))}
        </div>
        <p className="cv-certifications">
          <strong>Selected certifications:</strong> {selectedCertifications.map(item => item.title + ' — ' + item.issuer + ' (' + item.year + ')').join(' · ')}
        </p>
      </section>

      <section className="cv-section">
        <h2>Selected Research</h2>
        <ul className="cv-research-list">
          {selectedResearch.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
      </section>

      <footer className="cv-footer">
        <span>{PROFILE_INFO.email} · linkedin.com/in/jenrickkibet</span>
        <span>Page 2 of 2</span>
      </footer>
    </article>
  </div>
);

export const ResumeModal: React.FC<{isOpen: boolean; onClose: () => void}> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('cv-open');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove('cv-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="cv-print-root" role="dialog" aria-modal="true" aria-label="Executive two-page curriculum vitae">
      <div className="cv-toolbar">
        <div>
          <strong>Executive CV</strong>
          <span>ATS-safe reading order · 2 pages · A4</span>
        </div>
        <div className="cv-toolbar-actions">
          <button className="cv-print-button" onClick={() => window.print()}>
            <Printer size={16}/>
            Print / Save PDF
          </button>
          <button className="cv-close-button" onClick={onClose} aria-label="Close CV preview">
            <X size={20}/>
          </button>
        </div>
      </div>
      <div className="cv-preview">
        <ResumeDocument/>
      </div>
    </div>,
    document.body
  );
};
