import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
    const navigate = useNavigate();

    const handleLaunch = () => {
        if (project.isExternal) {
            window.open(project.url, "_blank");
        } else {
            navigate(project.path);
        }
    };

    return (
        <article className="group relative flex flex-col h-full rounded-3xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl p-8 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] hover:-translate-y-2">
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
                onClick={handleLaunch}
                className="group/btn relative w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white text-slate-950 font-bold text-sm transition-all duration-300 hover:bg-blue-500 hover:text-white overflow-hidden"
            >
                Launch Tool
                <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
            </button>
        </article>
    );
}

export default ProjectCard;
