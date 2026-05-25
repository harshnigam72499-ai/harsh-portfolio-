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
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#050816]/92 px-5 py-4 shadow-2xl shadow-black/10 supports-[backdrop-filter]:bg-[#050816]/72 supports-[backdrop-filter]:backdrop-blur-md">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          Harsh<span className="text-cyan-300">.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm transition ${
                active === link.id ? "text-cyan-300" : "text-slate-300 hover:text-white"
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
          <span className="sr-only">Toggle navigation</span>
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-4 rounded-2xl border border-white/10 bg-[#0a1020]/95 p-5 shadow-2xl shadow-black/20 md:hidden">
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
