import React, { useState } from 'react';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  FileText, 
  Phone,
  MapPin,
  Mail
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenCommandPalette?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="overview" className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-[102.4rem] mx-auto">
      <div className="space-y-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-800"><MapPin className="h-4 w-4" aria-hidden="true" />World Wide</span>

        {/* Executive Headline in Outfit font */}
        <div className="space-y-3">
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Jenrick Kibet Kwambai
          </h1>
          <p className="font-sans text-lg sm:text-xl font-medium text-slate-700 max-w-5xl leading-relaxed">
            {PROFILE_INFO.headline}
          </p>
        </div>

        <p className="font-body text-base text-slate-600 max-w-3xl leading-relaxed">Flight simulation, aviation technical documentation, autonomous UAVs, and software systems.</p>

        {/* Action Group */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            id="hero-contact-btn"
            onClick={onOpenContact}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-blue-700 transition-all shadow-xs cursor-pointer"
          >
            <span>Direct Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs cursor-pointer"
          >
            <FileText className="w-4 h-4 text-blue-700" />
            <span>Curriculum Vitae</span>
          </button>

          <button onClick={onOpenContact} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:border-blue-400"><Phone className="w-4 h-4 text-blue-700" />Request a Call</button>

          <button
            id="hero-copy-email-pill"
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full font-mono text-xs text-slate-700 bg-white border border-slate-200 hover:border-blue-400 transition-colors shadow-2xs cursor-pointer"
            title="Click to copy email address"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold text-emerald-700">Copied</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>{PROFILE_INFO.email}</span>
                <Copy className="w-3 h-3 text-slate-400 ml-0.5" />
              </>
            )}
          </button>

          <a
            id="hero-linkedin-link"
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full font-sans text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-700 transition-colors shadow-2xs"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          <a
            id="hero-github-link"
            href={PROFILE_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full font-sans text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-400 hover:text-slate-900 transition-colors shadow-2xs"
          >
            <Github className="w-3.5 h-3.5 text-slate-800" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
