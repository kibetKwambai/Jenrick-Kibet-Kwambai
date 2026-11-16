import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
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
import { PublicationItem, ExperienceItem, ProjectItem } from './types';
import { EXPERIENCES, PUBLICATIONS, PROJECTS } from './data/profileData';

const PublicationModal = lazy(() => import('./components/PublicationModal').then(module => ({default: module.PublicationModal})));
const ExperienceModal = lazy(() => import('./components/ExperienceModal').then(module => ({default: module.ExperienceModal})));
const ProjectModal = lazy(() => import('./components/ProjectModal').then(module => ({default: module.ProjectModal})));
const ContactModal = lazy(() => import('./components/ContactModal').then(module => ({default: module.ContactModal})));
const ResumeModal = lazy(() => import('./components/ResumeModal').then(module => ({default: module.ResumeModal})));
const CommandPalette = lazy(() => import('./components/CommandPalette').then(module => ({default: module.CommandPalette})));

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState<PublicationItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const allProjects = useMemo(() => [...PROJECTS, ...DIGITAL_PROJECTS], []);

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setCommandPaletteOpen(previous => !previous);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleSelectExperienceById = (id: string) => {
    const found = EXPERIENCES.find(item => item.id === id);
    if (found) setSelectedExperience(found);
  };

  const handleSelectPublicationById = (id: string) => {
    const found = PUBLICATIONS.find(item => item.id === id);
    if (found) setSelectedPublication(found);
  };

  const handleSelectProjectById = (id: string) => {
    const found = allProjects.find(item => item.id === id);
    if (found) setSelectedProject(found);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-slate-950 relative font-body antialiased">
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

      <Suspense fallback={null}>
        {selectedPublication && <PublicationModal publication={selectedPublication} onClose={() => setSelectedPublication(null)} />}
        {selectedExperience && <ExperienceModal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />}
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        {contactModalOpen && <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />}
        {resumeModalOpen && <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />}
        {commandPaletteOpen && (
          <CommandPalette
            isOpen={commandPaletteOpen}
            onClose={() => setCommandPaletteOpen(false)}
            onSelectExperience={handleSelectExperienceById}
            onSelectPublication={handleSelectPublicationById}
            onSelectProject={handleSelectProjectById}
            onOpenContact={() => setContactModalOpen(true)}
            onOpenResume={() => setResumeModalOpen(true)}
          />
        )}
      </Suspense>
    </div>
  );
}