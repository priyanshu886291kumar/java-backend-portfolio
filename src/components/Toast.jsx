import React from 'react';
import { Check } from 'lucide-react';

export default function Toast({ message, show }) {
  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-2xl shadow-emerald-500/40 transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Check className="w-4 h-4" />
      <span>{message || 'Copied to clipboard!'}</span>
    </div>
  );
}
