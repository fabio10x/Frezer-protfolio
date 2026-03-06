import React from "react";

function Contact() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Touch.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Interested in collaborating or just want to say hi? I'm always open to
                        discussing new projects and creative ideas.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: "Email", value: "fabio@example.com", icon: "📧" },
                        { label: "GitHub", value: "fabio10x", icon: "💻" },
                        { label: "Telegram", value: "@fabwrld10", icon: "📱" },
                    ].map(contact => (
                        <div key={contact.label} className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-xl hover:border-blue-500/40 transition-colors">
                            <div className="text-2xl mb-3">{contact.icon}</div>
                            <h3 className="text-white font-bold mb-1">{contact.label}</h3>
                            <p className="text-slate-400 text-sm">{contact.value}</p>
                        </div>
                    ))}
                </div>

                <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                    Send a Message
                </button>
            </div>
        </div>
    );
}

export default Contact;
