import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onNavigate: (view: 'home' | 'projects' | 'skills' | 'experience') => void;
  onOpenAbout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenAbout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, label: string) => {
    setIsOpen(false);
    
    if (label === 'Projects') {
      e.preventDefault();
      onNavigate('projects');
      window.scrollTo(0, 0);
    } else if (label === 'Skills') {
      e.preventDefault();
      onNavigate('skills');
      window.scrollTo(0, 0);
    } else if (label === 'Experience') {
      e.preventDefault();
      onNavigate('experience');
      window.scrollTo(0, 0);
    } else if (label === 'About Me') {
      e.preventDefault();
      onOpenAbout();
    } else if (label === 'Home') {
      e.preventDefault();
      onNavigate('home');
      window.scrollTo(0, 0);
    } else {
      onNavigate('home');
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Placeholder to maintain layout alignment */}
          <div></div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.label)}
                  className="text-slate-400 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none focus:bg-white/5 focus:ring-1 focus:ring-emerald-500/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.label)}
                className="text-slate-300 hover:text-emerald-400 focus:text-emerald-400 focus:bg-slate-800 focus:outline-none focus:pl-5 focus:border-l-4 focus:border-emerald-500 block px-3 py-3 rounded-r-md text-base font-medium transition-all duration-200 border-l-4 border-transparent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;