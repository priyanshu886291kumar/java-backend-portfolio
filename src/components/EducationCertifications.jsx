import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationCertifications() {
  const { education, certifications } = portfolioData;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Education */}
      <div className="bento-card rounded-3xl p-6 sm:p-7 space-y-4">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC BACKGROUND</span>
          </div>

          <div className="space-y-3">
            {education.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1 ${idx === 0 ? 'border-l-2 border-l-cyan-400' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-bold text-sm">{item.school}</h4>
                  <span className="text-xs font-mono text-cyan-400">{item.year}</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">{item.degree}</p>
                <p className="text-xs text-slate-400 font-mono">{item.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bento-card rounded-3xl p-6 sm:p-7 space-y-4">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>VERIFIED CERTIFICATIONS</span>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                <p className="text-xs text-slate-400 font-mono text-emerald-400">{cert.issuer}</p>
                <p className="text-xs text-slate-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
