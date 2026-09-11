import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  FileText,
  Search,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenResume,
  onOpenCommandPalette
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'References', href: '#references' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div 
        className={`max-w-5xl mx-auto rounded-full transition-all duration-200 border ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-sm py-2.5 px-4 sm:px-6' 
            : 'bg-white/90 backdrop-blur-sm border-slate-200/80 py-3 px-5 sm:px-7 shadow-[0_2px_8px_rgba(15,23,42,0.03)]'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Profile identity */}
          <a 
            href="#overview" 
            onClick={() => handleNavClick('#overview')}
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-brand-link"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-heading font-bold text-xs tracking-wider shadow-xs">
              JK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm text-slate-900 tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                Jenrick Kibet
              </span>
              <span className="font-sans text-[11px] text-slate-500 font-medium mt-0.5 hidden sm:inline-block">
                Aeronautical & FSTD Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 px-2 py-1 rounded-full border border-slate-200/70">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1 rounded-full font-sans text-xs font-medium text-slate-600 hover:text-slate-950 hover:bg-white transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Spotlight / Command Search */}
            <button
              id="nav-search-btn"
              onClick={onOpenCommandPalette}
              title="Search Profile (⌘K)"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors cursor-pointer border border-slate-200/60"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="font-mono text-[10px] text-slate-500 px-1 py-0.2 bg-white rounded border border-slate-200">⌘K</span>
            </button>

            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/90 border border-slate-200 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>CV</span>
            </button>

            {/* Contact Button */}
            <button
              id="nav-contact-btn"
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full font-sans text-xs font-semibold text-white bg-slate-900 hover:bg-blue-700 transition-all shadow-xs cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-2 mt-2 border-t border-slate-200 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2 rounded-xl font-sans text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2 px-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenCommandPalette(); }}
                className="flex items-center gap-2 font-sans text-xs font-medium text-slate-700 py-1 cursor-pointer"
              >
                <Search className="w-4 h-4 text-slate-500" />
                Spotlight Search (⌘K)
              </button>

              <button
                id="mobile-resume-trigger"
                onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                className="flex items-center gap-2 font-sans text-xs font-medium text-slate-700 py-1 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                Curriculum Vitae (PDF)
              </button>

              <div className="flex items-center justify-between pt-1 text-xs">
                <a 
                  href={`tel:${PROFILE_INFO.phoneRaw}`}
                  className="flex items-center gap-1.5 text-slate-700 font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" /> {PROFILE_INFO.phone}
                </a>
                <a 
                  href={PROFILE_INFO.linkedinUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-700 font-medium"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
