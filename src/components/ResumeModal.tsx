import React, {useEffect} from 'react';
import {createPortal} from 'react-dom';
import {X,Printer} from 'lucide-react';
import {PROFILE_INFO,EXPERIENCES,PUBLICATIONS,EDUCATION_LIST,CERTIFICATIONS} from '../data/profileData';
import {TECHNICAL_MANUALS} from '../data/technicalManuals';
import './resume.css';
import {EXECUTIVE_SUMMARY} from '../data/careerContent';
export const ResumeDocument:React.FC=()=> <div className="cv-document">
  <article className="cv-page"><header className="cv-heading"><h1>JENRICK KIBET KWAMBAI</h1><p className="cv-headline">{PROFILE_INFO.headline}</p><p>{PROFILE_INFO.email} · {PROFILE_INFO.location}</p><p><a href="https://kibetkwambai.github.io/Jenrick-Kibet-Kwambai/">kibetkwambai.github.io/Jenrick-Kibet-Kwambai</a> · linkedin.com/in/jenrickkibet</p></header>
    <section><h2>Professional Profile</h2><p>{EXECUTIVE_SUMMARY}</p></section>
    <section><h2>Professional Experience</h2>{EXPERIENCES.slice(0,5).map(e=><div className="cv-role" key={e.id}><div className="cv-role-title"><h3>{e.role}</h3><span>{e.period}</span></div><p className="cv-company">{e.company}</p><ul>{e.highlights.slice(0,3).map(b=><li key={b}>{b}</li>)}</ul></div>)}</section>
    <section><h2>Core Expertise</h2><p>Technical project coordination · Vendor & budget management · Requirements & solution design · AWS/Azure ETL · SQL & Python · Automated reporting · Systems testing · QTG & compliance documentation</p></section>
    <footer className="cv-page-footer">Jenrick Kibet Kwambai · Curriculum Vitae <span>1 / 2</span></footer>
  </article>
  <article className="cv-page"><header className="cv-continuation">JENRICK KIBET KWAMBAI <span>Technical Portfolio & Qualifications</span></header>
    <section><h2>Earlier Engineering Experience</h2>{EXPERIENCES.slice(5).map(e=><div className="cv-role" key={e.id}><div className="cv-role-title"><h3>{e.role} · {e.company}</h3><span>{e.period}</span></div><p>{e.highlights[0]} {e.id === "rotocop-drone" ? "98% reported mission-test reliability; $50K+ grant funding; four-engineer team." : ""}</p></div>)}</section><div className="cv-columns"><div>
      <section><h2>Technical Manuals & Qualification</h2><p>C172S · C208 G1000 NXi · Do228 TPE-331-05-252</p><ul>{TECHNICAL_MANUALS.map(m=><li key={m.title}>{m.title}</li>)}</ul><p>CS-FSTD(A)/(H) Issue 1 and Issue 2 checklists; VSD, VDR and validation-data pack documentation supporting QTG preparation and review.</p></section>
      <section><h2>Software & Digital Platforms</h2><p><strong>SkyLink:</strong> X-Plane connectivity with ForeFlight, Garmin and other pilot platforms.</p><p><strong>WordPress:</strong> Jenlink Timetable, JenVibe MCP for AI–website connectivity, and Optipress page and image optimisation.</p><p><strong>Web platforms:</strong> elearning.think.co.ke, think.co.ke, dragonflycrackers.com, dragonflykenya.com, istayhomes.co.ke and jenerationsoft.com.</p></section>
      <section><h2>Selected Research Papers</h2><ul>{PUBLICATIONS.filter(p=>p.kind === "Research paper").map(p=><li key={p.id}>{p.title}</li>)}</ul></section>
    </div><div>
      <section><h2>Education</h2>{EDUCATION_LIST.filter(e=>e.degree.startsWith("Bachelor") || e.degree.startsWith("Diploma")).sort((a,b)=>Number(b.degree.startsWith("Bachelor"))-Number(a.degree.startsWith("Bachelor"))).map(e=><div className="cv-qualification" key={e.degree}><h3>{e.degree}</h3><p>{e.institution} · {e.period}</p></div>)}</section>
      <section><h2>Training & Certifications</h2><ul>{CERTIFICATIONS.slice(0,3).map(c=><li key={c.title}><strong>{c.title}</strong><br/>{c.issuer} · {c.year}</li>)}</ul></section>
      <section><h2>References</h2><p>References available upon request.</p></section>
    </div></div>
    <footer className="cv-page-footer">{PROFILE_INFO.email}<span>2 / 2</span></footer>
  </article>
</div>;
export const ResumeModal:React.FC<{isOpen:boolean;onClose:()=>void}>=({isOpen,onClose})=>{
 useEffect(()=>{if(!isOpen)return;const prev=document.body.style.overflow;document.body.style.overflow='hidden';document.body.classList.add('cv-open');const key=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose();};window.addEventListener('keydown',key);return()=>{document.body.style.overflow=prev;document.body.classList.remove('cv-open');window.removeEventListener('keydown',key);};},[isOpen,onClose]);
 if(!isOpen)return null;
 return createPortal(<div className="cv-print-root" role="dialog" aria-modal="true" aria-label="Two-page curriculum vitae"><div className="cv-toolbar"><span>Curriculum Vitae · 2 pages</span><div><button onClick={()=>window.print()}><Printer size={16}/>Print / Save as PDF</button><button onClick={onClose} aria-label="Close CV preview"><X size={20}/></button></div></div><div className="cv-preview"><ResumeDocument/></div></div>,document.body);
};
