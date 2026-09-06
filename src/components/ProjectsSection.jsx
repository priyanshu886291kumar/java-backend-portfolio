import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, ShieldCheck, Database, CreditCard } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const { projects } = portfolioData;

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'backend') return p.category === 'backend';
    if (filter === 'realtime') return p.category === 'realtime';
    return true;
  });

  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            Code & Deployments
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
            Engineered Projects
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/5 text-xs font-mono">
          <button 
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${filter === 'all' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('backend')}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${filter === 'backend' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'}`}
          >
            Java/Backend
          </button>
          <button 
            onClick={() => setFilter('realtime')}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${filter === 'realtime' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:text-white'}`}
          >
            Real-Time & AI
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          if (project.featured) {
            return (
              <div 
                key={project.id}
                className="bento-card md:col-span-2 rounded-3xl p-6 sm:p-8 space-y-6 border-emerald-500/30"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          FEATURED BACKEND SYSTEM
                        </span>
                        <span className="text-xs font-mono text-slate-400">{project.date}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-white mt-1">{project.title}</h3>
                    </div>
                    
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/10 transition"
                    >
                      <Github className="w-3.5 h-3.5 text-emerald-400" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="p-3 rounded-xl bg-dark-bg/60 border border-white/5 space-y-1">
                        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{h.label}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">{h.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-xs font-mono text-emerald-300 border border-emerald-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={project.id} className="bento-card rounded-3xl p-6 sm:p-7 space-y-4">
              <div className="relative z-10 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-cyan-400">{project.date}</span>
                    <h3 className="text-xl font-bold text-white mt-0.5">{project.title}</h3>
                  </div>
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span><strong className="text-slate-300">{h.label}:</strong> {h.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-xs font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
