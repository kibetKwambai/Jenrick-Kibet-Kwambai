import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  Phone
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const Footer: React.FC = () => {
  const [nairobiTime, setNairobiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Nairobi',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        setNairobiTime(timeStr);
      } catch {
        setNairobiTime('EAT (UTC+3)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[102.4rem] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left identity */}
        <div className="space-y-1.5 max-w-md">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-heading font-bold text-[11px] shadow-xs">
              JK
            </div>
            <span className="font-heading font-bold text-sm text-slate-900">
              Jenrick Kibet Kwambai
            </span>
          </div>
          <p className="font-body text-xs text-slate-600">
            Aeronautical & Flight Simulation Systems Engineer • Nairobi, Kenya
          </p>
          <div className="text-xs font-mono text-slate-500 flex items-center gap-3 pt-1">
            <span>Local Time: {nairobiTime || 'UTC+3'}</span>
            <span>•</span>
            <a href={`tel:${PROFILE_INFO.phoneRaw}`} className="text-blue-700 hover:text-blue-900 font-semibold">
              {PROFILE_INFO.phone}
            </a>
          </div>
        </div>

        {/* Quick Links in Google Sans */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs font-medium text-slate-600">
          <a href="#overview" className="hover:text-slate-950 transition-colors">
            Overview
          </a>
          <a href="#experience" className="hover:text-slate-950 transition-colors">
            Experience
          </a>
          <a href="#publications" className="hover:text-slate-950 transition-colors">
            Publications
          </a>
          <a href="#projects" className="hover:text-slate-950 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-slate-950 transition-colors">
            Skills
          </a>
          <a href="#technical-manuals" className="hover:text-slate-950 transition-colors">
            Technical Manuals
          </a>
        </div>

        {/* Right tools: Social & Scroll To Top */}
        <div className="flex items-center gap-2">
          <a
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2.5 rounded-full text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors border border-slate-200"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PROFILE_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repositories"
            className="p-2.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PROFILE_INFO.email}`}
            title="Send Email"
            className="p-2.5 rounded-full text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors border border-slate-200"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer ml-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[102.4rem] mx-auto mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 font-sans">
        <div>
          © {new Date().getFullYear()} Jenrick Kibet Kwambai. All rights reserved.
        </div>
        <div className="font-mono text-[10px] text-slate-400">
          ICAO Doc 9625 • KCAA Certified Standards • Wilson Airport (HKNW)
        </div>
      </div>
    </footer>
  );
};
