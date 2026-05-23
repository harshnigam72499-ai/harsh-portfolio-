import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaReact, FaLinux, FaDocker, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiPostgresql } from "react-icons/si";

const ROLES = ["Full Stack Developer", "Linux Enthusiast", "DevOps Learner", "React Developer", "Cyberpunk Coder"];

function TypewriterText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setSpeed(2000);
          setDeleting(true);
        } else { setSpeed(80); }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIdx((r) => (r + 1) % ROLES.length);
          setSpeed(300);
        } else { setSpeed(40); }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx, speed]);

  return (
    <span>
      {text}<span className="typewriter-cursor" />
    </span>
  );
}

const iconData = [
  { Icon: FaReact, color: "#00f5ff", label: "React", spin: true },
  { Icon: FaLinux, color: "#ffffff", label: "Linux" },
  { Icon: FaDocker, color: "#2496ed", label: "Docker" },
  { Icon: FaGithub, color: "#ffffff", label: "GitHub" },
  { Icon: FaNodeJs, color: "#68a063", label: "Node.js" },
  { Icon: SiJavascript, color: "#f7df1e", label: "JS" },
];

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 grid-bg"
    >
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[300, 500, 700].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-cyan-400/10"
            style={{
              width: size, height: size,
              animation: `spin ${12 + i * 6}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
            }}
          />
        ))}
      </div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
      >
        <span className="status-dot" />
        <span className="text-sm text-gray-300 font-mono">Available for opportunities</span>
      </motion.div>

      {/* Main name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <h1
          className="text-5xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent glitch"
          data-text="HARSH NIGAM"
          style={{ fontFamily: "'Orbitron', monospace", letterSpacing: '0.05em' }}
        >
          HARSH NIGAM
        </h1>
        {/* Underline beam */}
        <motion.div
          className="h-[3px] mt-2 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ boxShadow: '0 0 20px rgba(0,245,255,0.6)' }}
        />
      </motion.div>

      {/* Typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl md:text-3xl text-cyan-300 mt-6 font-semibold"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <TypewriterText />
      </motion.div>

      {/* Location + email */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-gray-500 mt-3 text-sm font-mono"
      >
        📍 Muradnagar, Ghaziabad, UP &nbsp;|&nbsp; ✉️ harshnigam72499@gmail.com
      </motion.p>

      {/* Tech icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="flex gap-6 mt-10 flex-wrap justify-center"
      >
        {iconData.map(({ Icon, color, label, spin }, i) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.3, y: -5 }}
            className="flex flex-col items-center gap-1 group"
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <div
              className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              style={{ boxShadow: `0 0 15px ${color}20` }}
            >
              <Icon
                size={28}
                style={{ color, filter: `drop-shadow(0 0 6px ${color})` }}
                className={spin ? "animate-spin" : ""}
              />
            </div>
            <span className="text-xs text-gray-500 group-hover:text-gray-300 transition">{label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex gap-4 mt-10 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="glow-btn px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold text-sm tracking-widest uppercase"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="glow-btn px-7 py-3 rounded-xl neon-border text-cyan-400 font-bold text-sm tracking-widest uppercase"
        >
          Download CV
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase font-mono">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-400 to-transparent" style={{ animation: 'float 2s ease-in-out infinite' }} />
      </motion.div>
    </section>
  );
}
