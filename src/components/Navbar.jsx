import React from 'react';
import { Github, Linkedin, ArrowUpRight, Coffee } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const { personal } = portfolioData;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
      <div className="backdrop-blur-xl bg-dark-surface/85 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/80">
        
        {/* Logo & Role indicator */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-emerald-400 to-cyan-400 p-[1px]">
            <div className="w-full h-full bg-dark-bg rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-white group-hover:bg-transparent group-hover:text-slate-950 transition-all duration-300">
              PK
            </div>
          </div>
          <div>
            <span className="font-bold text-sm text-white tracking-tight block">{personal.name}</span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Java Backend Engineer
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/5 text-xs font-medium text-slate-300">
          <a href="#overview" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">Overview</a>
          <a href="#projects" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">Projects</a>
          <a href="#architecture" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">Architecture</a>
          <a href="#experience" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">Experience</a>
          <a href="#terminal" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">Terminal</a>
          <a href="#contact" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">Contact</a>
        </nav>

        {/* Quick Socials & CTA */}
        <div className="flex items-center gap-2">
          <a 
            href={personal.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition border border-white/5" 
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href={personal.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition border border-white/5" 
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition shadow-lg shadow-emerald-500/20"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
}
