import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    accent: "from-cyan-300/20 to-sky-500/10",
  },
  {
    title: "Backend",
    skills: ["Node.js"],
    accent: "from-emerald-300/20 to-teal-500/10",
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    accent: "from-lime-300/20 to-emerald-500/10",
  },
  {
    title: "DevOps / Linux",
    skills: ["Docker", "Linux", "Apache", "Nginx", "GitHub", "Vercel"],
    accent: "from-violet-300/20 to-cyan-500/10",
  },
  {
    title: "Tools",
    skills: ["VS Code"],
    accent: "from-amber-300/20 to-cyan-500/10",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">Skills</p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold">
          Technologies I Work With
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="rounded-[24px] border border-white/10 bg-white/[0.055] p-7 shadow-xl shadow-black/10 transition-colors will-change-transform hover:border-cyan-300/25"
          >
            <div className={`mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r ${group.accent}`} />
            <h3 className="text-2xl font-semibold">{group.title}</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-200 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
