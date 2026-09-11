import React, { useState, useEffect } from 'react';
import { 
  X, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Radio, 
  Phone, 
  ArrowUpRight
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subjectTopic, setSubjectTopic] = useState('Flight Simulator / Aviation Systems');
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const topics = [
    'Flight Simulator (FSTD) Operations / KCAA Compliance',
    'Autonomous Drone & UAV Architecture (JFK Drone)',
    'Full-Stack Software, Big Data & Telemetry (AWS/Azure)',
    'Permanent Leadership / Executive Systems Role',
    'Consulting & General Inquiry'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${subjectTopic}] Inquiry from ${senderName || 'Colleague'}`);
    const body = encodeURIComponent(
      `Hello Jenrick,\n\n${senderMessage || 'I would like to connect regarding an opportunity or engineering project.'}\n\nBest regards,\n${senderName || 'A Partner'}`
    );
    window.location.href = `mailto:${PROFILE_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl max-h-[92vh] rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-contact-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-sans text-xs font-semibold text-slate-800">
              Direct Connection • Jenrick Kibet Kwambai
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
            aria-label="Close contact modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 id="modal-contact-title" className="font-heading text-2xl font-bold tracking-tight text-slate-900">
              Contact Jenrick Kibet Kwambai
            </h2>
            <p className="font-body text-sm text-slate-600 mt-1 leading-relaxed">
              Reach out directly for flight simulation engineering, autonomous UAV architectures, or executive technical leadership.
            </p>
          </div>

          {/* Quick Direct Actions Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Direct Phone / Call Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  Mobile / Direct Telephone
                </span>
                <div className="text-sm font-bold text-slate-900 font-mono mt-1">
                  {PROFILE_INFO.phone}
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={`tel:${PROFILE_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 font-sans text-xs text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Email Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  Primary Email
                </span>
                <div className="text-xs font-semibold text-slate-900 font-mono mt-1 break-all">
                  {PROFILE_INFO.email}
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-blue-700 hover:underline self-start cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copiedEmail ? 'Copied' : 'Copy address'}</span>
              </button>
            </div>
          </div>

          {/* Social & Professional Links */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PROFILE_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span className="font-sans text-xs font-semibold text-slate-800">LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-slate-800" />
                <span className="font-sans text-xs font-semibold text-slate-800">GitHub Repos</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Location & Timezone info */}
          <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200 flex items-center justify-between text-xs text-slate-600 font-sans">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Nairobi, Kenya • East Africa Time (UTC+3)
            </span>
            <span className="font-semibold text-emerald-700 flex items-center gap-1">
              <Radio className="w-3 h-3" /> Ready to Engage
            </span>
          </div>

          {/* Form / Direct Mailto Composer */}
          <form onSubmit={handleSendEmail} className="space-y-4 pt-2">
            <h3 className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">
              Draft Message to {PROFILE_INFO.email}
            </h3>

            {/* Topic Select */}
            <div>
              <label className="block font-sans text-xs font-semibold text-slate-700 mb-1">
                Engineering Domain
              </label>
              <select
                value={subjectTopic}
                onChange={(e) => setSubjectTopic(e.target.value)}
                className="w-full px-3 py-2 rounded-xl font-sans text-xs bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-2xs"
              >
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block font-sans text-xs font-semibold text-slate-700 mb-1">
                Your Name & Organization
              </label>
              <input
                type="text"
                placeholder="e.g. Chief Flight Instructor / Airline Operations"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl font-sans text-xs bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-2xs"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-sans text-xs font-semibold text-slate-700 mb-1">
                Inquiry Brief
              </label>
              <textarea
                rows={3}
                placeholder="Details on flight simulation maintenance, UAV development specs, or interview schedule..."
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl font-body text-xs bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-2xs"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full font-sans text-xs font-semibold bg-slate-900 text-white hover:bg-blue-700 shadow-xs transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch Mail Client ({PROFILE_INFO.email})</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
