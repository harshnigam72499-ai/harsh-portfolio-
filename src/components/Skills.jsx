import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    color: "cyan",
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend & DevOps",
    color: "purple",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Linux", level: 80 },
      { name: "Docker", level: 65 },
      { name: "Jenkins / CI-CD", level: 60 },
    ],
  },
  {
    title: "Tools & Others",
    color: "pink",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Networking", level: 65 },
      { name: "Java", level: 55 },
      { name: "PostgreSQL", level: 60 },
    ],
  },
];

const colorMap = {
  cyan:   { from: "#00f5ff", to: "#0ea5e9", shadow: "rgba(0,245,255,0.4)", border: "border-cyan-400/30", text: "text-cyan-400" },
  purple: { from: "#a855f7", to: "#7c3aed", shadow: "rgba(168,85,247,0.4)", border: "border-purple-400/30", text: "text-purple-400" },
  pink:   { from: "#ec4899", to: "#db2777", shadow: "rgba(236,72,153,0.4)", border: "border-pink-400/30", text: "text-pink-400" },
};

function SkillBar({ name, level, color, delay }) {
  const barRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && barRef.current) barRef.current.classList.add("animated"); },
      { threshold: 0.5 }
    );
    if (barRef.current) obs.observe(barRef.current);
    return () => obs.disconnect();
  }, []);

  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color: c.from }}>{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{
            background: `linear-gradient(to right, ${c.from}, ${c.to})`,
            boxShadow: `0 0 10px ${c.shadow}`,
            "--target": `${level / 100}`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto w-full">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-center mb-3"
        style={{ fontFamily: "'Orbitron', monospace", background: 'linear-gradient(to right, #00f5ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
      >
        Skills
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-center text-gray-500 text-sm mb-12 font-mono tracking-widest"
      >// TECH STACK & EXPERTISE</motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, gi) => {
          const c = colorMap[group.color];
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15 }}
              className={`p-6 rounded-2xl bg-white/3 border ${c.border} backdrop-blur-sm holo-card scanline`}
            >
              <h3 className={`text-sm uppercase tracking-widest font-bold mb-5 ${c.text}`}
                style={{ fontFamily: "'Orbitron', monospace", textShadow: `0 0 10px ${c.from}60` }}
              >
                {group.title}
              </h3>
              {group.skills.map((s, i) => (
                <SkillBar key={s.name} {...s} color={group.color} delay={gi * 0.15 + i * 0.08} />
              ))}
            </motion.div>
          );
        })}
      </div>

      {/* Tech icon badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mt-10"
      >
        {["React", "JavaScript", "Linux", "Docker", "Jenkins", "Node.js", "Git", "CI/CD", "Networking", "Java", "PostgreSQL", "Tailwind"].map((s) => (
          <span
            key={s}
            className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-200"
          >
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
