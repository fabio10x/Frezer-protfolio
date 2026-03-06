import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Launchbox() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <header className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Premium Developer Gallery
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
            Fabio's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Lab.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
            A curated showcase of high-performance React components, experimental UI patterns, and modern frontend architecture.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Launchbox;
