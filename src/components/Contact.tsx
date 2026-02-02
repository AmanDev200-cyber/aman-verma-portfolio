import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Collaborate?
        </h2>

        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Currently open to internships and junior developer roles.
          <br />
          Let’s discuss how I can contribute to your team’s security and success.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          {/* Email */}
          <a
            href="mailto:Aman%20Verma <amanwork2204@gmail.com>"
            className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          >
            <Mail size={20} />
            Send an Email
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aman-verma-268087297/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 w-full sm:w-auto border border-slate-700 hover:border-slate-600"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        {/* GitHub */}
        <div className="flex justify-center gap-8 text-slate-500">
          <a
            href="https://github.com/AmanDev200-cyber"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;