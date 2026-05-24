import { motion } from "framer-motion";

export default function AIConsole() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl border border-cyan-400/20 bg-black/50 backdrop-blur-xl p-8"
      >
        <div className="text-green-400 font-mono space-y-2">
          <p>&gt; booting cinematic portfolio...</p>
          <p>&gt; loading futuristic UI modules...</p>
          <p>&gt; enabling smooth motion engine...</p>
          <p>&gt; system ready ⚡</p>
        </div>
      </motion.div>
    </section>
  );
}
