import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center py-28"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-cyan-300">
            Full Stack Developer
          </p>

          <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.92] tracking-tight">
            Harsh
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {" "}Nigam
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 md:text-lg lg:mx-0">
            Creating premium responsive interfaces with React, backend integrations and modern DevOps workflows.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="flex h-14 items-center justify-center rounded-2xl bg-white px-8 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 text-sm font-medium transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-6 rounded-full border border-cyan-400/20" />
          <div className="absolute inset-14 rounded-full border border-purple-400/20" />

          <div className="relative flex h-[78%] w-[78%] items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
                React • Node • Linux
              </p>
              <p className="mt-5 text-5xl font-semibold">2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
