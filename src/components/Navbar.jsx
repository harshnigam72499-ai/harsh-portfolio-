import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          Harsh<span className="text-cyan-300">.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm transition ${
                active === link.id ? "text-cyan-300" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/admin"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm transition hover:border-cyan-400/40"
          >
            Admin
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-4 rounded-2xl border border-white/10 bg-[#0a1020]/95 p-5 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="text-center text-sm text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
