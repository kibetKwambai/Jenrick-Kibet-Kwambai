import React, { useState, useEffect } from 'react';
import { DigitalPlatformsSection } from './components/DigitalPlatformsSection';
import { DIGITAL_PROJECTS } from './data/digitalPlatforms';
import { Navbar } from './components/Navbar';
import { ProfessionalSummary } from './components/ProfessionalSummary';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { PublicationsSection } from './components/PublicationsSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SoftwarePortfolio } from './components/SoftwarePortfolio';
import { SkillsMatrix } from './components/SkillsMatrix';
import { CertificationsEducation } from './components/CertificationsEducation';
import { ReferencesSection } from './components/ReferencesSection';
import { TechnicalManualsSection } from './components/TechnicalManualsSection';
import { Footer } from './components/Footer';
import { PublicationModal } from './components/PublicationModal';
import { ExperienceModal } from './components/ExperienceModal';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { PublicationItem, ExperienceItem, ProjectItem } from './types';
import { EXPERIENCES, PUBLICATIONS, PROJECTS } from './data/profileData';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState<PublicationItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setCommandPaletteOpen(prev => !prev); }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleSelectExperienceById = (id: string) => { const found = EXPERIENCES.find(e => e.id === id); if (found) setSelectedExperience(found); };
  const handleSelectPublicationById = (id: string) => { const found = PUBLICATIONS.find(p => p.id === id); if (found) setSelectedPublication(found); };
  const handleSelectProjectById = (id: string) => { const found = [...PROJECTS, ...DIGITAL_PROJECTS].find(p => p.id === id); if (found) setSelectedProject(found); };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-lime-100 selection:text-slate-950 relative font-body antialiased">
      <Navbar onOpenContact={() => setContactModalOpen(true)} onOpenResume={() => setResumeModalOpen(true)} onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <main className="relative">
        <Hero onOpenContact={() => setContactModalOpen(true)} onOpenResume={() => setResumeModalOpen(true)} onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        <ProfessionalSummary />
        <SkillsMatrix />
        <SoftwarePortfolio />
        <ExperienceTimeline onSelectExperience={setSelectedExperience} />
        <ProjectsShowcase onSelectProject={setSelectedProject} />
        <TechnicalManualsSection />
        <PublicationsSection onSelectPublication={setSelectedPublication} />
        <DigitalPlatformsSection onSelectProject={setSelectedProject} />
        <CertificationsEducation />
        <ReferencesSection onOpenContact={() => setContactModalOpen(true)} />
      </main>
      <Footer onOpenContact={() => setContactModalOpen(true)} />
      <PublicationModal publication={selectedPublication} onClose={() => setSelectedPublication(null)} />
      <ExperienceModal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} onSelectExperience={handleSelectExperienceById} onSelectPublication={handleSelectPublicationById} onSelectProject={handleSelectProjectById} onOpenContact={() => setContactModalOpen(true)} onOpenResume={() => setResumeModalOpen(true)} />
    </div>
  );
}