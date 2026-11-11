import React, { useState } from 'react';
import {
  ArrowRight, Copy, Check, Linkedin, Github, FileText, Phone, MapPin, Mail,
  UsersRound, Database, Gauge, WalletCards, Activity, GraduationCap, Cpu, Radio, Route
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

const HeroVisual: React.FC = () => (
  <div className="hero-visual" aria-label="Flight simulator and data engineering visual">
    <div className="hero-visual__sky">
      <div className="hero-visual__cloud hero-visual__cloud--one" />
      <div className="hero-visual__cloud hero-visual__cloud--two" />
      <div className="hero-visual__horizon" />
      <div className="hero-visual__runway">
        <span /><span /><span /><span />
      </div>
    </div>
    <div className="hero-visual__cockpit">
      <div className="hero-visual__glare" />
      <div className="hero-visual__panel">
        <div className="hero-screen"><Route className="h-5 w-5"/><strong>FSTD</strong><small>SIM DATA</small></div>
        <div className="hero-screen"><Gauge className="h-5 w-5"/><strong>99%+</strong><small>UPTIME</small></div>
        <div className="hero-screen"><Activity className="h-5 w-5"/><strong>LIVE</strong><small>TELEMETRY</small></div>
      </div>
      <div className="hero-visual__console">
        <span><Radio className="h-4 w-4"/> DATA LINK</span>
        <span><Cpu className="h-4 w-4"/> SYSTEMS</span>
      </div>
    </div>
    <div className="hero-visual__label">ENGINEERING · DATA · AVIATION</div>
  </div>
);

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenCommandPalette?: () => void;
}

const impact = [
  {icon: UsersRound, value:'50+', label:'Engineers coordinated'},
  {icon: GraduationCap, value:'200+', label:'Pilots trained'},
  {icon: Cpu, value:'108+', label:'Engineering projects'},
  {icon: WalletCards, value:'$600M+', label:'Vendor & support portfolio'},
  {icon: Database, value:'10TB+', label:'Data engineered'},
  {icon: Activity, value:'99%+', label:'FSTD uptime'}
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="overview" className="hero-shell pt-28 sm:pt-36 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[102.4rem] mx-auto">
        <div className="grid lg:grid-cols-[1.08fr_.92fr] gap-8 xl:gap-12 items-center">
          <div className="space-y-6">
            <span className="availability-pill"><MapPin className="h-4 w-4" aria-hidden="true" />Nairobi, Kenya <i/> Open to New Roles</span>
            <div className="space-y-3">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-blue-700">Engineering · Technology · Project Delivery</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.04]">Jenrick Kibet <span className="hero-name-accent">Kwambai</span></h1>
              <p className="font-sans text-lg sm:text-xl font-semibold text-slate-700 max-w-5xl leading-relaxed">{PROFILE_INFO.headline}</p>
            </div>
            <p className="font-body text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">I deliver complex technology and engineering work at the intersection of aviation, data and software—from project planning and business analysis to systems integration, validation and operational readiness.</p>
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={onOpenContact} className="primary-cta"><span>Get in Touch</span><ArrowRight className="w-4 h-4" /></button>
              <button onClick={onOpenResume} className="secondary-cta"><FileText className="w-4 h-4"/><span>Curriculum Vitae</span></button>
              <a href={PROFILE_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="secondary-cta"><Github className="w-4 h-4"/><span>GitHub</span></a>
              <a href={PROFILE_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="secondary-cta"><Linkedin className="w-4 h-4 text-blue-700"/><span>LinkedIn</span></a>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
              <button onClick={handleCopyEmail} className="inline-flex items-center gap-1.5 hover:text-blue-700"><Mail className="h-3.5 w-3.5"/>{copiedEmail ? <><Check className="h-3.5 w-3.5 text-blue-700"/>Copied</> : <><span>{PROFILE_INFO.email}</span><Copy className="h-3.5 w-3.5"/></>}</button>
              <button onClick={onOpenContact} className="inline-flex items-center gap-1.5 hover:text-blue-700"><Phone className="h-3.5 w-3.5"/>Request a call</button>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="impact-strip mt-8 sm:mt-10">
          {impact.map(({icon:Icon,value,label}) => <div key={label} className="impact-item"><span className="impact-icon"><Icon className="h-5 w-5"/></span><span><strong>{value}</strong><small>{label}</small></span></div>)}
        </div>
      </div>
    </section>
  );
};