import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { Project } from './types';

type ViewState = 'home' | 'projects' | 'detail' | 'skills' | 'experience';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  // Handle scrolling to sections when switching back to home view with a hash
  useEffect(() => {
    if (view === 'home' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      if (id === 'about') return; // About is now a modal
      if (id === 'skills') return; // Skills is now a page
      if (id === 'experience') return; // Experience is now a page
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is rendered
    }
  }, [view]);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    setView('detail');
  };

  const handleBackToProjects = () => {
    setActiveProject(null);
    setView('projects');
  };

  const handleNavigate = (targetView: 'home' | 'projects' | 'skills' | 'experience') => {
    setView(targetView);
    if (targetView === 'home') {
      setActiveProject(null);
    }
  };

  const handleOpenAbout = () => {
    setShowAbout(true);
  };

  // 1. Detail View
  if (view === 'detail' && activeProject) {
    return (
      <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-200">
        <ProjectDetail 
          project={activeProject} 
          onBack={handleBackToProjects} 
        />
        <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
      </div>
    );
  }

  // 2. Projects List View (Dedicated Page)
  if (view === 'projects') {
    return (
      <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar onNavigate={handleNavigate} onOpenAbout={handleOpenAbout} />
        <main className="pt-16">
          <Projects onProjectClick={handleProjectClick} />
        </main>
        <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
      </div>
    );
  }

  // 3. Skills View (Dedicated Page)
  if (view === 'skills') {
    return (
      <div className="bg-slate-900 min-h-screen text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar onNavigate={handleNavigate} onOpenAbout={handleOpenAbout} />
        <main className="pt-16">
          <Skills />
        </main>
        <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
      </div>
    );
  }

  // 4. Experience View (Dedicated Page)
  if (view === 'experience') {
    return (
      <div className="bg-slate-900 min-h-screen text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-200">
        <Navbar onNavigate={handleNavigate} onOpenAbout={handleOpenAbout} />
        <main className="pt-16">
          <Experience />
        </main>
        <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
      </div>
    );
  }

  // 5. Home View (Hero + Sections)
  return (
    <div className="bg-slate-900 min-h-screen text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar onNavigate={handleNavigate} onOpenAbout={handleOpenAbout} />
      <main>
        <Hero onViewProjects={() => setView('projects')} />
        {/* About is now an overlay, removed from flow */}
        {/* Skills is now a separate page, removed from flow */}
        {/* Projects section removed from Home flow to isolate it as requested previously */}
        {/* Experience section removed from Home flow */}
        <Contact />
      </main>
      
      <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
};

export default App;