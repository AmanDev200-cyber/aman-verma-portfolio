import React from 'react';
import { User, X, Shield, Cpu, Terminal, Zap } from 'lucide-react';

interface AboutProps {
  isOpen: boolean;
  onClose: () => void;
}

const About: React.FC<AboutProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Card Container */}
      <div className="relative w-full max-w-2xl">
        <div
          className="relative bg-gradient-to-br from-slate-900 to-slate-950 w-full rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden group"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Cyber Grid Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Top Gradient Highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-20"
          >
            <X size={20} />
          </button>

          {/* Content Container */}
          <div className="p-5 sm:p-8 md:p-10">

            {/* Header */}
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="relative group/icon">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-lg group-hover/icon:bg-emerald-500/30 transition-all duration-500" />
                <div className="relative p-2.5 sm:p-3 bg-slate-900 border border-slate-700 rounded-xl text-emerald-400 shadow-xl">
                  <Terminal className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
                <p className="text-emerald-500/80 font-mono text-[10px] sm:text-xs tracking-wider uppercase mt-1">System Architecture & Security</p>
              </div>
            </div>

            {/* Body Text */}
            <div className="space-y-4 sm:space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                I’m a <span className="text-emerald-300 font-semibold border-b border-emerald-500/30 pb-0.5">cybersecurity-focused tech student</span> building security-first applications at the intersection of AI, machine learning, and system design.
              </p>

              <p>
                My work centers on detecting abuse, protecting data, and making complex systems transparent—from <span className="inline-block bg-slate-800/80 border border-slate-700 rounded px-1.5 py-0.5 text-slate-100 text-sm sm:text-base font-mono mx-1 shadow-sm">AI-driven forensics</span> to privacy-preserving client-side tools.
              </p>

              <p>
                I approach problems with a <span className="text-white font-semibold">threat-modeling mindset</span>, focusing on how systems fail before optimizing how they work. I enjoy balancing security with usability while continuously exploring offensive and defensive concepts.
              </p>
            </div>

            {/* Focus Areas / Footer */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-800/60 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: Shield, label: "Security" },
                { icon: Cpu, label: "AI/ML" },
                { icon: Zap, label: "Performance" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 group/item cursor-default">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 group-hover/item:text-emerald-400 group-hover/item:border-emerald-500/30 transition-all duration-300">
                    <item.icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-500 group-hover/item:text-emerald-500/80 transition-colors uppercase tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative Orbs inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;