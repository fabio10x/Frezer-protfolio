import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Me.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                        I'm Fabio, a passionate Frontend Engineer specializing in creating high-performance,
                        visually stunning React applications with sleek animations and modern architecture.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">My Philosophy</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            I believe that great software is built at the intersection of powerful
                            logic and beautiful design. My focus is on creating developer experiences
                            that are as clean as the user interfaces they produce.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["React", "Vite", "Tailwind", "Framer Motion", "Supabase"].map(skill => (
                                <span key={skill} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 backdrop-blur-xl">
                        <h2 className="text-xl font-bold text-white mb-4">Professional Lab</h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            "Fabio's Lab" is my personal playground where I experiment with custom hooks,
                            complex state management, and the latest frontend technologies.
                        </p>
                        <Link to="/" className="text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors">
                            Explore the Lab →
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;
