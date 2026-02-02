import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, Github, ExternalLink, ShieldAlert, Cpu, Lightbulb, CheckCircle2 } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-24">
      {/* Navigation Bar for Detail View */}
      <div className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50 h-16 flex items-center">
        <div className="max-w-4xl mx-auto w-full px-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm font-bold">Back to Projects</span>
          </button>
          <span className="text-slate-500 font-mono text-xs hidden sm:block">CASE STUDY: {project.slug.toUpperCase()}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 animate-fade-in-up">
        
        {/* Header */}
        <header className="mb-12 border-b border-slate-800 pb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-900/50 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">{project.tagline}</p>
          
          <div className="flex gap-4 mt-8">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
                <Github size={18} /> View Code
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold transition-colors shadow-lg shadow-emerald-900/20">
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </header>

        {/* Problem & Failure Analysis */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4 text-white">
              <ShieldAlert className="text-red-400" size={24} />
              <h2 className="text-xl font-bold">The Problem</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">{project.problem}</p>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4 text-white">
              <h2 className="text-xl font-bold text-slate-200">Why Existing Solutions Fail</h2>
            </div>
            <ul className="space-y-3">
              {project.whyFails.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400">
                  <span className="text-red-400/60 mt-1.5 text-xs">✖</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution & System Approach */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-yellow-400" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Solution</h2>
          </div>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed border-l-4 border-emerald-500 pl-6">
            {project.solution}
          </p>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
             <h3 className="text-lg font-mono font-bold text-emerald-400 mb-6 uppercase tracking-wider">System Architecture & Approach</h3>
             <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
               <div>
                 <h4 className="text-white font-bold mb-4">Core Workflow</h4>
                 <ul className="space-y-4">
                  {project.systemApproach.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-mono font-bold">{idx + 1}</span>
                      <span className="text-slate-300">{step}</span>
                    </li>
                  ))}
                 </ul>
               </div>
               <div>
                 <h4 className="text-white font-bold mb-4">Key Technical Decisions</h4>
                 <ul className="space-y-4">
                  {project.technicalDecisions.map((desc, idx) => (
                    <li key={idx} className="flex gap-4">
                      <Cpu size={18} className="text-emerald-500/80 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{desc}</span>
                    </li>
                  ))}
                 </ul>
               </div>
             </div>
          </div>
        </section>

        {/* Special Section (Security / ML) */}
        {project.specialSection && (
          <section className="mb-16">
             <h3 className="text-xl font-bold text-white mb-6">{project.specialSection.title}</h3>
             <div className="grid sm:grid-cols-2 gap-4">
                {project.specialSection.items.map((feat, idx) => (
                  <div key={idx} className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feat}</span>
                  </div>
                ))}
             </div>
          </section>
        )}

        {/* Outcome & Learnings */}
        <section className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-800">
           <div>
             <h3 className="text-xl font-bold text-white mb-4">Project Outcome</h3>
             <ul className="space-y-3">
               {project.outcome.map((out, idx) => (
                 <li key={idx} className="text-slate-400 pl-4 border-l-2 border-emerald-500/30">
                   {out}
                 </li>
               ))}
             </ul>
           </div>
           <div>
             <h3 className="text-xl font-bold text-white mb-4">Key Learnings</h3>
             <div className="bg-emerald-950/20 p-6 rounded-xl border border-emerald-900/30">
               <ul className="space-y-3">
                 {project.learnings.map((learn, idx) => (
                   <li key={idx} className="text-emerald-100/80 italic text-sm">
                     "{learn}"
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default ProjectDetail;