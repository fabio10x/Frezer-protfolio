import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "1",
    path: "/todo",
    title: "To-Do List",
    description: "A sleek task management tool with dynamic state handling and completion toggling.",
    category: "Productivity",
    tech: ["React", "useState", "Tailwind"],
  },
  {
    id: "2",
    path: "/digital-clock",
    title: "Digital Clock",
    description: "Real-time precision clock with live updates using high-frequency effect hooks.",
    category: "Utility",
    tech: ["useEffect", "Timers", "Intl API"],
  },
  {
    id: "3",
    path: "/color-flipper",
    title: "Color Flipper",
    description: "Interactive UI engine for generating and visualizing dynamic color schemes.",
    category: "Design",
    tech: ["Logic", "Dynamic CSS", "UX"],
  },
  {
    id: "4",
    path: "/quote-generator",
    title: "Quote Generator",
    description: "Infinite inspiration engine fetching data from external REST APIs.",
    category: "Data App",
    tech: ["API Fetch", "Async/Await", "JSON"],
  },
  {
    id: "5",
    path: "/expense-tracker",
    title: "Expense Tracker",
    description: "Fintech dashboard for managing budgets with real-time balance calculations.",
    category: "Finance",
    tech: ["React State", "Array Math", "Fintech"],
  },
  {
    id: "6",
    path: "/aura-car",
    title: "Quote Generator",
    description: "Infinite inspiration engine fetching data from external REST APIs.",
    category: "Data App",
    tech: ["API Fetch", "Async/Await", "JSON"],
  },
];

function Launchbox() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Premium Developer Gallery
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Lab.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Exploring the boundaries of React through experimental architecture and high-performance UI patterns.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col h-full rounded-3xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl p-8 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {project.category}
                </span>
                <div className="h-2 w-2 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors duration-300" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded bg-blue-500/5 border border-blue-500/10 text-blue-400/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate(project.path)}
                className="group/btn relative w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white text-slate-950 font-bold text-sm transition-all duration-300 hover:bg-blue-500 hover:text-white overflow-hidden"
              >
                Launch Tool
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Launchbox;
