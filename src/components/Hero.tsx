import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

interface HeroProps {
  onViewProjects: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewProjects }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm mb-6 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
          <span className="text-xs text-slate-300 font-mono tracking-wide">OPEN TO WORK</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Securing the Future. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Building the Web.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Security-focused developer building robust, privacy-first web applications using AI, ML, and modern system design.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <InteractiveHoverButton
            text="View Projects"
            onClick={onViewProjects}
            className="w-56"
          />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;