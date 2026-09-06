import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBento from './components/HeroBento';
import SystemArchitecture from './components/SystemArchitecture';
import ProjectsSection from './components/ProjectsSection';
import InteractiveTerminal from './components/InteractiveTerminal';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationCertifications from './components/EducationCertifications';
import ContactFooter from './components/ContactFooter';
import Toast from './components/Toast';

export default function App() {
  const [toastInfo, setToastInfo] = useState({ show: false, message: '' });

  const triggerToast = (text, message = 'Copied to clipboard!') => {
    navigator.clipboard.writeText(text);
    setToastInfo({ show: true, message });
    setTimeout(() => {
      setToastInfo({ show: false, message: '' });
    }, 2500);
  };

  return (
    <div className="bg-grid-pattern min-h-screen text-slate-400 relative selection:bg-emerald-500 selection:text-slate-950">
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Floating Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 space-y-12">
        <HeroBento onCopy={triggerToast} />
        <SystemArchitecture />
        <ProjectsSection />
        <InteractiveTerminal />
        <ExperienceTimeline />
        <EducationCertifications />
        <ContactFooter />
      </main>

      {/* Toast Notification */}
      <Toast show={toastInfo.show} message={toastInfo.message} />
    </div>
  );
}
