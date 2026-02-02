import React from 'react';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Object.values(SkillCategory);

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-emerald-400 font-mono mb-6 border-b border-slate-800 pb-2">
                {`// ${category}`}
              </h3>
              <ul className="space-y-3">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <li key={skill.name} className="flex items-start group">
                    <CheckCircle2 
                      size={18} 
                      className={`mr-3 mt-0.5 ${skill.highlight ? 'text-emerald-400' : 'text-slate-600 group-hover:text-slate-400'} transition-colors`} 
                    />
                    <span className={`${skill.highlight ? 'text-slate-200 font-medium' : 'text-slate-400'} group-hover:text-white transition-colors`}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;