import React, { useRef, useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight, Shield, Database, Lock, Terminal, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const getProjectIcon = (slug: string) => {
  if (slug.includes('safe') || slug.includes('secure')) return Shield;
  if (slug.includes('cloud')) return Database;
  if (slug.includes('password')) return Lock;
  if (slug.includes('spam')) return Terminal;
  return Cpu; // Default
};

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay for smoother UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Recalculate center after data load
      setTimeout(() => handleScroll(), 100);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic center calculation based on scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    // Find the element closest to center
    const children = Array.from(container.children);
    let closestIndex = 0;
    let closestDist = Infinity;

    // Center of the container relative to viewport
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    children.forEach((child, index) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;

      const dist = Math.abs(containerCenter - childCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    // Initial calculation
    handleScroll();
    // Add listener
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [isLoading]); // Re-attach listener when loading state changes

  const handleCardClick = (index: number, project: Project) => {
    // If the clicked card is strictly the active one (focal point), navigate
    if (index === activeIndex) {
      onProjectClick(project);
    } else {
      // Otherwise, scroll it into view to make it the focal point
      if (scrollRef.current) {
        const child = scrollRef.current.children[index] as HTMLElement;
        if (child) {
          child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }
    }
  };

  // Use a fixed set of skeletons or the actual projects
  const items = isLoading ? Array(3).fill(null) : PROJECTS;

  return (
    <section id="projects" className="py-24 bg-slate-950 overflow-hidden relative min-h-[800px]">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .perspective-container {
            perspective: 1200px;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(to right, #1e293b 4%, #334155 25%, #1e293b 36%);
          background-size: 1000px 100%;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Case Studies</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          {isLoading ? "Loading projects..." : "Swipe or click a card to bring it into focus."}
        </p>
      </div>

      {/* 
        Scroll Container 
        - Perspective enabled via CSS class
        - Padding calculates center alignment
      */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-16 px-[10vw] sm:px-[calc(50%-160px)] md:px-[calc(50%-190px)] lg:px-[calc(50%-210px)] perspective-container"
      >
        {items.map((item, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          // Wheel Transformation Logic
          const rotateY = offset * 25;
          const clampedRotateY = Math.max(-60, Math.min(60, rotateY));

          const scale = 1 - Math.abs(offset) * 0.1;
          const opacity = isActive ? 1 : Math.max(0.5, 1 - Math.abs(offset) * 0.5);
          const zIndex = 50 - Math.abs(offset);

          if (isLoading) {
            return (
              <div
                key={`skeleton-${index}`}
                className="snap-center shrink-0 w-[80vw] sm:w-[320px] md:w-[380px] lg:w-[420px]"
                style={{
                  transform: `perspective(1200px) rotateY(${clampedRotateY}deg) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
              >
                <div className="w-full h-[420px] md:h-[480px] rounded-2xl bg-slate-900 overflow-hidden border border-slate-800 shadow-2xl relative">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-slate-900">
                    {/* Top Section Skeleton */}
                    <div className="h-[40%] w-full animate-shimmer opacity-20"></div>
                    {/* Content Skeleton */}
                    <div className="p-8 flex flex-col items-center space-y-6 mt-4">
                      <div className="h-6 w-3/4 rounded bg-slate-800 animate-pulse"></div>
                      <div className="space-y-3 w-full">
                        <div className="h-3 w-full rounded bg-slate-800 animate-pulse"></div>
                        <div className="h-3 w-5/6 mx-auto rounded bg-slate-800 animate-pulse"></div>
                        <div className="h-3 w-4/6 mx-auto rounded bg-slate-800 animate-pulse"></div>
                      </div>
                      <div className="h-10 w-40 rounded-lg bg-slate-800 animate-pulse mt-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          const project = item as Project;
          const Icon = getProjectIcon(project.slug);

          return (
            <div
              key={project.id}
              className={`snap-center shrink-0 transition-all duration-300 ease-out
                w-[80vw] sm:w-[320px] md:w-[380px] lg:w-[420px]
              `}
              style={{
                transform: `
                    perspective(1200px)
                    rotateY(${clampedRotateY}deg)
                    scale(${scale})
                `,
                zIndex: zIndex,
                opacity: opacity,
              }}
            >
              <div
                onClick={() => handleCardClick(index, project)}
                className={`
                  relative w-full h-[420px] md:h-[480px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 group transform-gpu
                  ${isActive
                    ? 'bg-slate-800 shadow-emerald-500/20 ring-1 ring-emerald-500/50 hover:shadow-emerald-500/60 hover:scale-[1.05] hover:-translate-y-4'
                    : 'bg-slate-900 shadow-black hover:bg-slate-800 hover:shadow-emerald-500/30 hover:scale-[1.03] hover:-translate-y-2'}
                `}
              >
                {/* Top Colored Section */}
                <div className={`
                    h-[40%] w-full flex flex-col items-center justify-center transition-colors duration-500
                    ${isActive ? 'bg-gradient-to-b from-emerald-600 to-emerald-500' : 'bg-slate-800 border-b border-slate-700'}
                 `}>
                  <div className={`p-4 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 ${isActive ? 'bg-emerald-950/30 text-emerald-100' : 'bg-slate-900 text-emerald-500'}`}>
                    <Icon size={48} className={isActive ? 'drop-shadow-md' : ''} />
                  </div>
                  <h3 className={`
                        mt-4 font-bold text-xl px-4 text-center tracking-tight
                        ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-emerald-400'}
                    `}>
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Content Section */}
                <div className="h-[60%] w-full p-6 flex flex-col items-center text-center bg-slate-800 group-hover:bg-slate-800/80 transition-colors">
                  <p className={`
                        text-sm leading-relaxed mb-6 text-slate-400 line-clamp-4 transition-opacity duration-300
                        ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}
                    `}>
                    {project.tagline}
                  </p>

                  <div className="mt-auto">
                    <span className={`
                            inline-flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-sm border-2 transition-all duration-300
                            ${isActive
                        ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500'
                        : 'border-slate-700 text-slate-500 group-hover:border-emerald-500/50 group-hover:text-emerald-400'}
                        `}>
                      {isActive ? 'Read Case Study' : 'View Project'}
                      {isActive && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                    </span>
                  </div>
                </div>

                {/* Overlay for inactive cards */}
                {/* Overlay removed to improve visibility based on user feedback */}

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;