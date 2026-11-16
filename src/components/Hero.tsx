import React, { useState } from 'react';
import {
  ArrowRight, Copy, Check, Linkedin, Github, FileText, Phone, MapPin, Mail,
  UsersRound, Database, WalletCards, Activity, GraduationCap, Cpu, Radio, Route, Gauge
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

const HeroVisual: React.FC = () => (
  <div className="hero-visual" role="img" aria-label="Abstract flight simulator runway, telemetry and systems interface">
    <div className="hero-visual__sky">
      <div className="hero-visual__cloud hero-visual__cloud--one" />
      <div className="hero-visual__cloud hero-visual__cloud--two" />
      <div className="hero-visual__horizon" />
      <div className="hero-visual__runway"><span/><span/><span/><span/></div>
    </div>
    <div className="hero-visual__cockpit">
      <div className="hero-visual__glare" />
      <div className="hero-visual__panel">
        <div className="hero-screen"><Route className="h-5 w-5"/><strong>FSTD</strong><small>sim data</small></div>
        <div className="hero-screen"><Gauge className="h-5 w-5"/><strong>99%+</strong><small>uptime</small></div>
        <div className="hero-screen"><Activity className="h-5 w-5"/><strong>LIVE</strong><small>telemetry</small></div>
      </div>
      <div className="hero-visual__console">
        <span><Radio className="h-4 w-4"/> data link</span>
        <span><Cpu className="h-4 w-4"/> systems</span>
      </div>
    </div>
    <div className="hero-visual__label">Flight simulation + systems data</div>
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
    window.setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="overview" className="hero-shell pt-28 sm:pt-36 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[102.4rem] mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-8 xl:gap-14 items-center">
          <div className="space-y-6">
            <span className="availability-pill"><MapPin className="h-4 w-4" aria-hidden="true"/>Nairobi, Kenya <i/> Open to New Roles</span>

            <div>
              <p className="hero-context">Engineering, technology and project delivery</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.03] mt-3">Jenrick Kibet Kwambai</h1>
              <p className="font-sans text-lg sm:text-xl font-semibold text-slate-700 max-w-4xl leading-relaxed mt-4">{PROFILE_INFO.headline}</p>
            </div>

            <p className="font-body text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              I connect project leadership with hands-on engineering across aviation, data and software—moving complex systems from requirements and risk through integration, validation and operational use.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button onClick={onOpenContact} className="primary-cta"><span>Discuss a role</span><ArrowRight className="w-4 h-4"/></button>
              <button onClick={onOpenResume} className="secondary-cta"><FileText className="w-4 h-4"/><span>View CV</span></button>
              <a href={PROFILE_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="secondary-cta"><Github className="w-4 h-4"/><span>GitHub</span></a>
              <a href={PROFILE_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="secondary-cta"><Linkedin className="w-4 h-4 text-blue-700"/><span>LinkedIn</span></a>
            </div>

            <div className="hero-contact-line">
              <button onClick={handleCopyEmail}><Mail className="h-3.5 w-3.5"/>{copiedEmail ? <><Check className="h-3.5 w-3.5 text-blue-700"/>Copied</> : <><span>{PROFILE_INFO.email}</span><Copy className="h-3.5 w-3.5"/></>}</button>
              <button onClick={onOpenContact}><Phone className="h-3.5 w-3.5"/>Request a call</button>
            </div>
          </div>

          <HeroVisual />
        </div>

        <div className="impact-strip mt-8 sm:mt-10" aria-label="Career impact">
          {impact.map(({icon: Icon, value, label}) => (
            <div key={label} className="impact-item">
              <span className="impact-icon"><Icon className="h-5 w-5"/></span>
              <span><strong>{value}</strong><small>{label}</small></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};