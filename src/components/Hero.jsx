import { motion, useReducedMotion } from "framer-motion";
import heroImage from "../assets/hero.png";

const stats = [
  { value: "React", label: "Frontend" },
  { value: "Node", label: "Backend" },
  { value: "Linux", label: "DevOps" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center py-28 md:py-32"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300 sm:text-sm">
            Full Stack Developer
          </p>

          <h1 className="text-[clamp(3.1rem,9vw,7.7rem)] font-semibold leading-[0.92]">
            Harsh
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {" "}Nigam
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg lg:mx-0">
            Creating fast, polished web experiences with React, backend integrations, Linux fundamentals and practical DevOps workflows.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="flex h-14 min-w-40 items-center justify-center rounded-2xl bg-white px-8 text-sm font-semibold text-black shadow-2xl shadow-cyan-500/10 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="flex h-14 min-w-40 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
            >
              Contact Me
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-3 lg:mx-0">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-4 text-center"
              >
                <p className="text-lg font-semibold text-white sm:text-xl">{item.value}</p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
          className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-cyan-300/15 bg-cyan-300/5 shadow-[0_0_80px_rgba(34,211,238,0.12)]" />
          <div className="absolute inset-7 rounded-full border border-purple-300/15" />
          <div className="absolute -right-3 top-12 rounded-2xl border border-emerald-300/20 bg-[#06251f]/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200 shadow-lg shadow-black/20">
            Available
          </div>

          <div className="relative flex h-[78%] w-[78%] items-end justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-white/12 to-white/5 shadow-2xl shadow-black/30">
            <img
              src={heroImage}
              alt="Harsh Nigam portfolio avatar"
              className="h-[94%] w-auto object-contain"
              loading="eager"
            />
          </div>

          <div className="absolute bottom-6 left-0 rounded-2xl border border-white/10 bg-[#06101d]/95 px-5 py-4 text-left shadow-xl shadow-black/20">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Focus</p>
            <p className="mt-1 text-sm text-slate-200">Smooth UI + Backend</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
