import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { path: "/", label: "Lab" },
        { path: "/todo", label: "To-Do" },
        { path: "/digital-clock", label: "Clock" },
        { path: "/expense-tracker", label: "Finance" },
        { path: "/aura-cars", label: "Cars" },
    ];

    const activeStyle = "text-white border-b-2 border-amber-500 pb-1";
    const inactiveStyle = "text-slate-400 hover:text-blue-400 transition-colors duration-200 pb-1 border-b-2 border-transparent";

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-slate-900/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/5">
            <Link to="/" className="group flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-slate-900 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                    F
                </div>
                <h1 className="text-xl font-black tracking-tighter text-white">
                    Fabio<span className="text-amber-500">.dev</span>
                </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-sm font-bold tracking-wide uppercase transition-all duration-300 ${isActive ? activeStyle : inactiveStyle}`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-50 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-8 text-slate-400 hover:text-white"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `text-2xl font-black tracking-tighter uppercase transition-all duration-300 ${isActive ? 'text-amber-500' : 'text-white'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;