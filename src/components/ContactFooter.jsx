import React from 'react';
import { Mail, Phone, Linkedin, Github, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactFooter() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="bento-card rounded-3xl p-8 sm:p-12 text-center space-y-6 border-emerald-500/30">
      <div className="max-w-xl mx-auto space-y-3 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
          <Mail className="w-3.5 h-3.5" />
          Direct Communication
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Build Something Exceptional
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Available for Java Backend Engineer, Software Engineer, and Full-Stack roles. Reach out directly via email or call.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
        <a 
          href={`mailto:${personal.email}`} 
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition shadow-xl shadow-emerald-500/20"
        >
          <Mail className="w-4 h-4" />
          <span>{personal.email}</span>
        </a>
        <a 
          href={`tel:${personal.phone}`} 
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-dark-surface hover:bg-dark-surfaceHover text-white font-bold text-sm border border-white/10 transition"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
          <span>{personal.phone}</span>
        </a>
      </div>

      <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/5 relative z-10 text-xs font-mono">
        <a 
          href={personal.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-white flex items-center gap-1.5 transition"
        >
          <Linkedin className="w-4 h-4 text-blue-400" />
          <span>LinkedIn</span>
        </a>
        <a 
          href={personal.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-white flex items-center gap-1.5 transition"
        >
          <Github className="w-4 h-4 text-slate-300" />
          <span>GitHub</span>
        </a>
        <a 
          href={personal.codolio} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-white flex items-center gap-1.5 transition"
        >
          <Code className="w-4 h-4 text-amber-400" />
          <span>Codolio (LeetCode & GFG)</span>
        </a>
      </div>

      <p className="text-[11px] text-slate-500 font-mono relative z-10">
        © 2026 {personal.name} • Engineered with Java & Spring Boot Standards
      </p>
    </section>
  );
}
