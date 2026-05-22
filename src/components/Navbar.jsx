import { useState, useRef } from "react";

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const btnRef = useRef(null);
  
const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "admin", label: "Admin" },
];

  // 🧲 Magnetic effect
  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;

    btn.style.transform = "translate(0px, 0px)";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* Glass Navbar */}
      <div className="backdrop-blur-2xl bg-black/40 border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between shadow-[0_0_20px_rgba(0,255,255,0.05)]">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-widest text-white">
          HARSH<span className="text-cyan-400">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <a
                key={link.id}
href={link.id === "admin" ? "/admin" : `#${link.id}`}                
                className="relative text-sm uppercase tracking-widest transition duration-300"
              >
                {/* Text */}
                <span
                  className={`transition duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {link.label}
                </span>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />

                {/* Glow dot */}
                {isActive && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]" />
                )}
              </a>
            );
          })}

          {/* 🧲 Magnetic Resume Button */}
          <a
            ref={btnRef}
            href="/resume.pdf"
            download
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="ml-4 px-4 py-2 text-sm uppercase tracking-widest rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold shadow-lg transition-transform duration-150"
          >
            Resume
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-4">

          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <a
                key={link.id}
href={link.id === "admin" ? "/admin" : `#${link.id}`}                
                onClick={() => setMenuOpen(false)}
                className={`text-sm uppercase tracking-widest transition ${
                  isActive ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center text-sm uppercase tracking-widest text-cyan-400 border border-cyan-400/40 rounded-lg px-3 py-2 hover:bg-cyan-400/10 transition"
          >
            Download Resume
          </a>

        </div>
      )}
    </nav>
  );
}
