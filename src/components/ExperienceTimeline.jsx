import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="space-y-6">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          Industry Experience
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Professional Work Experience
        </h2>
      </div>

      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <div key={idx} className="bento-card rounded-3xl p-6 sm:p-8 space-y-4 border-l-4 border-l-emerald-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-emerald-400 font-medium text-sm">{exp.company}</p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 text-xs font-mono text-slate-300 w-fit">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>{exp.duration}</span>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
              {exp.bullets.map((b, i) => (
                <li key={i} className="leading-relaxed">{b}</li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-medium mr-2">Environment:</span>
              {exp.tags.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-dark-surface text-xs text-slate-300 font-mono border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
