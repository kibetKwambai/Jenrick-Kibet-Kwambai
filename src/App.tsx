import React, { useState, useEffect } from 'react';
import { DigitalPlatformsSection } from './components/DigitalPlatformsSection';
import { DIGITAL_PROJECTS } from './data/digitalPlatforms';
import { Navbar } from './components/Navbar';
import { ProfessionalSummary } from './components/ProfessionalSummary';
import { Hero } from './components/Hero';
import { MetricsBento } from './components/MetricsBento';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { PublicationsSection } from './components/PublicationsSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
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

  // Global shortcut: ⌘K or Ctrl+K opens Command Palette
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleSelectExperienceById = (id: string) => {
    const found = EXPERIENCES.find((e) => e.id === id);
    if (found) setSelectedExperience(found);
  };

  const handleSelectPublicationById = (id: string) => {
    const found = PUBLICATIONS.find((p) => p.id === id);
    if (found) setSelectedPublication(found);
  };

  const handleSelectProjectById = (id: string) => {
    const found = [...PROJECTS, ...DIGITAL_PROJECTS].find((p) => p.id === id);
    if (found) setSelectedProject(found);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 transition-colors duration-150 relative font-body antialiased">
      {/* Top Professional Header */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero
          onOpenContact={() => setContactModalOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        <ProfessionalSummary />

        {/* Operational Performance & Domains */}
        <MetricsBento />

        {/* Career Dossier & Leadership */}
        <ExperienceTimeline
          onSelectExperience={(exp) => setSelectedExperience(exp)}
        />

        <TechnicalManualsSection />

        {/* Publications & Research Case Studies */}
        <PublicationsSection
          onSelectPublication={(pub) => setSelectedPublication(pub)}
        />

        {/* Systems Deployments & Projects */}
        <ProjectsShowcase
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Engineering Domains & Competencies */}
        <DigitalPlatformsSection onSelectProject={setSelectedProject} />
        <SkillsMatrix />

        {/* Academic Degrees & Certifications */}
        <CertificationsEducation />

        {/* References available upon request */}
        <ReferencesSection onOpenContact={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Interactive Modals */}
      <PublicationModal
        publication={selectedPublication}
        onClose={() => setSelectedPublication(null)}
      />

      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Spotlight Command Search Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectExperience={handleSelectExperienceById}
        onSelectPublication={handleSelectPublicationById}
        onSelectProject={handleSelectProjectById}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />
    </div>
  );
}
