import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "DevOps / Linux",
    skills: ["Docker", "Linux", "Apache", "Nginx", "GitHub", "Vercel"],
  },
  {
    title: "Tools",
    skills: ["VS Code"],
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
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold">{group.title}</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
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
