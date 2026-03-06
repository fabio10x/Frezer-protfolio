import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/#projects", label: "Projects" },
        { path: "/about", label: "About me" },
        { path: "/contact", label: "Contact me" },
    ];

    const activeStyle = "text-white border-b-2 border-amber-500 pb-1";
    const inactiveStyle = "text-slate-400 hover:text-blue-400 transition-colors duration-200 pb-1 border-b-2 border-transparent";

    return (
        <nav className="flex justify-between items-center px-6 sm:px-8 py-3 bg-slate-950/90 backdrop-blur-xl text-white sticky top-0 z-50 border-b border-white/10 shadow-2xl">
            <Link to="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-2 relative z-[60]">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-slate-900 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                    F
                </div>
                <h1 className="text-xl font-black tracking-tighter text-white">
                    Fabio<span className="text-amber-500">.dev</span>
                </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 items-center">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.label}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 ${isActive ? activeStyle : inactiveStyle}`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>

            {/* Mobile Menu Button - Persistent z-index */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-slate-400 hover:text-white transition-colors relative z-[60]"
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
            <div className={`fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-50 md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `text-2xl font-black tracking-tighter uppercase transition-all duration-300 ${isActive ? 'text-amber-500 scale-110' : 'text-white/90 hover:text-blue-400'}`
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
