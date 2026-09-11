import React, { useState } from 'react';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  FileText, 
  Phone,
  Mail,
  ShieldCheck,
  Award
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
    <section id="overview" className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="space-y-7">
        {/* Top institutional badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 font-sans text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Kasas Aviation Ltd • Nairobi, Kenya
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-sans text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            KCAA & ICAO Doc 9625 Certified FSTDs
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-sans text-xs font-medium">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            BSc Aeronautical Engineering
          </span>
        </div>

        {/* Executive Headline in Outfit font */}
        <div className="space-y-3">
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Jenrick Kibet Kwambai
          </h1>
          <p className="font-sans text-lg sm:text-xl font-medium text-slate-700 max-w-3xl leading-relaxed">
            Aeronautical Systems Engineer & Project Manager specializing in Flight Simulation Training Devices (FSTD), Autonomous UAV Avionics, and Fleet Airworthiness.
          </p>
        </div>

        {/* Editorial bio in Lato font */}
        <div className="font-body text-base text-slate-700 max-w-3xl leading-relaxed space-y-3.5">
          <p>
            Directing Level D / FSTD maintenance lifecycles and Qualification Test Guide (QTG) validation for commercial aviation platforms at <strong className="font-bold text-slate-900">Kasas Aviation Ltd</strong> and <strong className="font-bold text-slate-900">Think Aviation Ltd</strong>, supporting Cessna Grand Caravan 208B, Cessna 172 Skyhawk, and Dornier 228 devices.
          </p>
          <p className="text-sm text-slate-600 leading-normal">
            Prior engineering track record includes military jet turbine overhauls with the <strong className="font-semibold text-slate-800">Kenya Defense Forces (DEFTEC)</strong>, aircraft maintenance with the <strong className="font-semibold text-slate-800">Kenya Police Airwing</strong> at Wilson Airport (AW139, AW119Kx, Bell 206), and autonomous UAV airframe and telemetry engineering (JFK Drone).
          </p>
        </div>

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

          <a
            id="hero-phone-pill"
            href={`tel:${PROFILE_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full font-mono text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-blue-400 hover:text-blue-800 transition-colors shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{PROFILE_INFO.phone}</span>
          </a>

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
