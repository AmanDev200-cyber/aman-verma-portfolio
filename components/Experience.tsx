import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Briefcase, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'trophy': return <Trophy size={20} className="text-yellow-400" />;
      case 'briefcase': return <Briefcase size={20} className="text-blue-400" />;
      case 'certificate': return <Award size={20} className="text-emerald-400" />;
      default: return <Award size={20} />;
    }
  };

  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Achievements</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded mx-auto"></div>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800 md:left-1/2 -ml-px z-0 hidden md:block"></div>

          {ACHIEVEMENTS.map((item, index) => (
            <div key={item.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-slate-900 bg-emerald-500 z-10 hidden md:block shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

              {/* Card */}
              <div className="w-full md:w-[calc(50%-2rem)] bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors duration-300 relative z-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-700">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono text-emerald-400/80 bg-emerald-900/10 px-2 py-1 rounded">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-emerald-400 text-sm font-medium mb-3">{item.organization}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;