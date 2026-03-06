import React from "react";

function AuraCars() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* Top nav */}
      <header className="border-b border-slate-900/60 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-xs font-extrabold tracking-widest">
              AC
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Aura<span className="text-blue-400">Cars</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <button className="hover:text-white transition-colors">Models</button>
            <button className="hover:text-white transition-colors">Electric</button>
            <button className="hover:text-white transition-colors">Services</button>
            <button className="hover:text-white transition-colors">Contact</button>
          </nav>
          <button className="text-sm font-medium px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 transition-colors">
            Book a Test Drive
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: text */}
          <section className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400/80">
              Next‑Gen Electric Performance
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Drive the future.
              <span className="block text-blue-400">Today.</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
              AuraCars blends precision engineering, sustainable power, and intelligent
              software into every model. Experience instant torque, silent cabins,
              and a cockpit designed around the driver.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform active:scale-[0.97]">
                Explore Models
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-600 text-sm font-semibold text-slate-100 hover:border-blue-400 hover:text-blue-200 transition-colors">
                Download Brochure
              </button>
            </div>

            <div className="flex gap-8 pt-6 text-xs md:text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">0–100 km/h</p>
                <p className="text-blue-400 font-bold text-lg">3.2s</p>
              </div>
              <div>
                <p className="font-semibold text-white">Range</p>
                <p className="text-blue-400 font-bold text-lg">620 km</p>
              </div>
              <div>
                <p className="font-semibold text-white">Fast Charge</p>
                <p className="text-blue-400 font-bold text-lg">15 min</p>
              </div>
            </div>
          </section>

          {/* Right: visual card */}
          <section className="relative">
            <div className="absolute -top-10 -right-6 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/80 shadow-2xl shadow-black/60 overflow-hidden p-6 md:p-8">
              <div className="flex items-center justify-between mb-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Aura EV‑01
                </span>
                <span>Concept Studio</span>
              </div>

              <div className="h-40 md:h-52 lg:h-64 rounded-2xl bg-gradient-to-tr from-blue-500/40 via-slate-900 to-slate-950 relative overflow-hidden">
                <div className="absolute inset-x-6 bottom-6 h-16 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur flex items-center justify-between px-4 md:px-6 text-xs text-slate-200">
                  <div>
                    <p className="uppercase tracking-[0.2em] text-slate-400 text-[0.6rem]">
                      Drive Mode
                    </p>
                    <p className="font-semibold">Performance+</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.2em] text-slate-400 text-[0.6rem]">
                      Battery
                    </p>
                    <p className="font-semibold text-emerald-400">87%</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.2em] text-slate-400 text-[0.6rem]">
                      ETA
                    </p>
                    <p className="font-semibold">Home · 24 min</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-400 leading-relaxed">
                Real‑time telemetry, adaptive suspension, and over‑the‑air updates keep
                your AuraCar learning long after it leaves the showroom.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AuraCars;