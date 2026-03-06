import { Link, NavLink } from 'react-router-dom';

function Navbar() {
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

            <div className="flex gap-8 items-center">
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
        </nav>
    );
}

export default Navbar;