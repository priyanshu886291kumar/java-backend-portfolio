import React from 'react';
import { Workflow, Shield, Cpu, CreditCard, Database, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SystemArchitecture() {
  const steps = [
    {
      step: "01. INGEST",
      title: "Security Filter Chain",
      icon: Shield,
      color: "emerald",
      desc: "Incoming request intercepted by JwtAuthenticationFilter. RBAC permissions resolved for Guest, Host, or Admin."
    },
    {
      step: "02. LOGIC",
      title: "Dynamic Rate Engine",
      icon: Cpu,
      color: "cyan",
      desc: "Evaluates seasonal multipliers, stay duration, and checks room availability locking rows in PostgreSQL to avoid race conditions."
    },
    {
      step: "03. PAYMENT",
      title: "Stripe Payment Intent",
      icon: CreditCard,
      color: "amber",
      desc: "Generates client secret and handles asynchronous webhook fulfillment with signature verification."
    },
    {
      step: "04. PERSIST",
      title: "PostgreSQL ACID Commit",
      icon: Database,
      color: "purple",
      desc: "Atomic database transaction finalizes booking state, generates confirmation token, and invalidates stale caches."
    }
  ];

  return (
    <section id="architecture" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Workflow className="w-3.5 h-3.5" />
            System Design Blueprint
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
            AirBnb Backend — Architectural Flow
          </h2>
        </div>
        <a 
          href={portfolioData.projects[0].repo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-mono"
        >
          <span>Explore Source Code</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="bento-card rounded-3xl p-6 sm:p-8 space-y-6 border-cyan-500/20">
        <div className="relative z-10 space-y-6">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Here is the end-to-end transaction and request flow designed for the <strong className="text-white">Airbnb Booking Engine</strong>, handling authentication, inventory state locks, dynamic rate computation, and webhook reconciliations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-dark-surface/90 border border-white/10 space-y-2 relative group hover:border-emerald-400 transition duration-300"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">{s.step}</span>
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-white font-bold text-sm">{s.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
