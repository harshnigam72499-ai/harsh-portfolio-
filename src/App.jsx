import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import TiltCard from "./components/TiltCard";
import MagneticButton from "./components/MagneticButton";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const BACKEND_URL = "https://harsh-portfolio-4.onrender.com";

// ─── CINEMATIC SECTION ───
function Section({ id, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false, amount: 0.15 }}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="w-full">{children}</div>
    </motion.section>
  );
}

// ─── STAT COUNTER ───
function StatCounter({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const inc = value / 40;
        const timer = setInterval(() => {
          start += inc;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 40);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-black text-cyan-400" style={{ fontFamily: "'Orbitron', monospace", textShadow: 'var(--glow-cyan)' }}>
        {count}+
      </div>
      <div className="text-xs text-gray-500 mt-1 tracking-widest uppercase font-mono">{label}</div>
    </div>
  );
}

// ─── PROJECT CARD ───
const projects = [
  {
    title: "Food Ordering App",
    desc: "Full-stack food ordering platform with React frontend, Node.js backend, real-time order tracking, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    color: "cyan",
    gradient: "from-cyan-500/30 to-blue-600/30",
    border: "border-cyan-400/20",
  },
  {
    title: "DevOps Pipeline",
    desc: "Automated CI/CD pipeline using Jenkins, Docker, and Linux shell scripting with multi-stage builds and auto-deployment.",
    tags: ["Jenkins", "Docker", "Linux", "Shell"],
    color: "purple",
    gradient: "from-purple-500/30 to-pink-600/30",
    border: "border-purple-400/20",
  },
  {
    title: "Portfolio Website",
    desc: "This very website — a futuristic animated portfolio with 3D effects, particle system, magnetic buttons, and cinematic scroll.",
    tags: ["React", "Framer Motion", "Tailwind", "Three.js"],
    color: "pink",
    gradient: "from-pink-500/30 to-orange-500/30",
    border: "border-pink-400/20",
  },
];

const colorMap = {
  cyan: { text: "text-cyan-400", glow: "rgba(0,245,255,0.15)", badge: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" },
  purple: { text: "text-purple-400", glow: "rgba(168,85,247,0.15)", badge: "bg-purple-400/10 text-purple-400 border-purple-400/20" },
  pink: { text: "text-pink-400", glow: "rgba(236,72,153,0.15)", badge: "bg-pink-400/10 text-pink-400 border-pink-400/20" },
};

// ─── MAIN PORTFOLIO ───
function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [active, setActive] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) { alert("Saare fields bharo!"); return; }
    setStatus("sending");
    try {
      const res = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); setForm({ name: "", email: "", message: "" }); setTimeout(() => setStatus(""), 3000); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.4 });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const t = window.scrollY, d = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(d > 0 ? (t / d) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[9990] bg-transparent">
        <div
          className="h-full transition-all duration-100"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(to right, #00f5ff, #a855f7, #ec4899)",
            boxShadow: "0 0 8px rgba(0,245,255,0.8)",
          }}
        />
      </div>

      <ParticleBackground />
      <Navbar active={active} />
      <Hero />

      {/* Floating Cube */}
      <div className="flex justify-center items-center py-10">
        <motion.div
          className="float"
          whileHover={{ scale: 1.1 }}
        >
          <div className="scene">
            <div className="cube">
              {["Dev Skills", "Full Stack", "Backend", "Frontend", "Database", "DevOps"].map((face, i) => (
                <div key={i} className={`face ${["front","back","right","left","top","bottom"][i]}`}>{face}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── ABOUT ─── */}
      <Section id="about">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-3"
            style={{ fontFamily: "'Orbitron', monospace", background: 'linear-gradient(to right, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >About Me</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mb-10 font-mono tracking-widest"
          >// WHO AM I</motion.p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-10 p-6 rounded-2xl bg-white/3 border border-white/8 neon-border">
            <StatCounter value={3} label="Years Learning" />
            <StatCounter value={5} label="Projects Built" />
            <StatCounter value={10} label="Tech Stack" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Info card */}
            <TiltCard glowColor="rgba(168,85,247,0.15)">
              <div className="p-6 rounded-2xl bg-white/3 border border-purple-400/20 backdrop-blur-sm holo-card h-full">
                <h3 className="text-purple-400 text-sm uppercase tracking-widest font-bold mb-4" style={{ fontFamily: "'Orbitron', monospace" }}>
                  Personal Info
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { icon: "📍", label: "Location", val: "Muradnagar, Ghaziabad, UP" },
                    { icon: "✉️", label: "Email", val: "harshnigam72499@gmail.com" },
                    { icon: "🎓", label: "Degree", val: "BCA — HRIT College, CCS University" },
                    { icon: "📅", label: "Graduation", val: "2022 – 2025" },
                    { icon: "📊", label: "GPA", val: "61% (CGPA 6.1)" },
                  ].map(({ icon, label, val }) => (
                    <div key={label} className="flex gap-3">
                      <span className="text-base">{icon}</span>
                      <div>
                        <span className="text-gray-500 text-xs uppercase tracking-wider">{label}:</span>
                        <span className="text-gray-200 ml-1">{val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>

            {/* Bio + education card */}
            <div className="space-y-4">
              <TiltCard glowColor="rgba(0,245,255,0.1)">
                <div className="p-5 rounded-2xl bg-white/3 border border-cyan-400/20 holo-card">
                  <h3 className="text-cyan-400 text-xs uppercase tracking-widest font-bold mb-3" style={{ fontFamily: "'Orbitron', monospace" }}>Bio</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Aspiring <span className="text-cyan-400 font-semibold">Full Stack Developer</span> passionate about building real-world applications. 
                    Experienced in React, Node.js, Linux, and DevOps pipelines. Currently exploring Java, PostgreSQL & System Design.
                  </p>
                </div>
              </TiltCard>
              <TiltCard glowColor="rgba(236,72,153,0.1)">
                <div className="p-5 rounded-2xl bg-white/3 border border-pink-400/20 holo-card">
                  <h3 className="text-pink-400 text-xs uppercase tracking-widest font-bold mb-3" style={{ fontFamily: "'Orbitron', monospace" }}>🚀 Currently Learning</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Linux Advanced", "Java OOP", "PostgreSQL", "System Design", "AWS Basics"].map((t) => (
                      <span key={t} className="px-2 py-1 text-xs rounded bg-pink-400/10 text-pink-300 border border-pink-400/20 font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── SKILLS ─── */}
      <Section id="skills">
        <Skills />
      </Section>

      {/* ─── PROJECTS ─── */}
      <Section id="projects">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-3"
            style={{ fontFamily: "'Orbitron', monospace", background: 'linear-gradient(to right, #ec4899, #00f5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >Projects</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mb-12 font-mono tracking-widest"
          >// WHAT I'VE BUILT</motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, i) => {
              const c = colorMap[proj.color];
              return (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <TiltCard glowColor={c.glow}>
                    <div className={`p-6 rounded-2xl bg-white/3 border ${proj.border} backdrop-blur-sm holo-card h-full flex flex-col`}>
                      {/* Project header visual */}
                      <div className={`h-36 mb-5 rounded-xl bg-gradient-to-br ${proj.gradient} flex items-center justify-center relative overflow-hidden scanline`}>
                        <span className="text-4xl font-black opacity-20 absolute" style={{ fontFamily: "'Orbitron', monospace" }}>0{i + 1}</span>
                        <div className="relative z-10 text-center">
                          <div className={`text-xs uppercase tracking-widest font-bold mb-1 ${c.text}`} style={{ fontFamily: "'Orbitron', monospace" }}>Project</div>
                          <div className="text-white font-bold text-sm">{proj.title}</div>
                        </div>
                      </div>

                      <h3 className={`text-lg font-bold mb-2 ${c.text}`}>{proj.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">{proj.desc}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {proj.tags.map((t) => (
                          <span key={t} className={`px-2 py-0.5 text-xs rounded border font-mono ${c.badge}`}>{t}</span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-5">
                        <MagneticButton className={`flex-1 py-2 rounded-lg text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 bg-white/5 border ${proj.border} hover:bg-white/10 ${c.text} transition`}>
                          <FaGithub size={12} /> Code
                        </MagneticButton>
                        <MagneticButton className={`flex-1 py-2 rounded-lg text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 bg-gradient-to-r ${proj.gradient} text-white border border-transparent transition`}>
                          <FaExternalLinkAlt size={10} /> Live
                        </MagneticButton>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ─── CONTACT ─── */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-3"
            style={{ fontFamily: "'Orbitron', monospace", background: 'linear-gradient(to right, #00f5ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >Get In Touch</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mb-10 font-mono tracking-widest"
          >// LET'S WORK TOGETHER</motion.p>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Info column */}
            <div className="md:col-span-2 space-y-4">
              {[
                { Icon: FaEnvelope, label: "Email", val: "harshnigam72499@gmail.com", color: "cyan" },
                { Icon: FaMapMarkerAlt, label: "Location", val: "Ghaziabad, UP, India", color: "purple" },
                { Icon: FaLinkedin, label: "LinkedIn", val: "Connect with me", color: "pink" },
              ].map(({ Icon, label, val, color }) => {
                const c = colorMap[color];
                return (
                  <TiltCard key={label} glowColor={c.glow}>
                    <div className={`p-4 rounded-xl bg-white/3 border border-white/8 flex items-center gap-3`}>
                      <div className={`p-2 rounded-lg bg-white/5 ${c.text}`}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                        <div className="text-sm text-gray-200 mt-0.5">{val}</div>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 p-6 rounded-2xl bg-white/3 border border-white/8 neon-border backdrop-blur-sm"
            >
              {[
                { key: "name", placeholder: "Your Name", type: "input" },
                { key: "email", placeholder: "Your Email", type: "input" },
              ].map(({ key, placeholder }) => (
                <div key={key} className="mb-4 relative group">
                  <input
                    type={key}
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 focus:bg-black/60 transition-all duration-200"
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  />
                </div>
              ))}
              <div className="mb-5">
                <textarea
                  className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-all duration-200 resize-none"
                  rows="4"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                onClick={handleSend}
                disabled={status === "sending"}
                className="glow-btn w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold text-sm uppercase tracking-widest disabled:opacity-60 transition"
              >
                {status === "sending" ? "⏳ Sending..." : "Send Message →"}
              </button>
              {status === "success" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-center text-green-400 text-sm font-semibold"
                >✅ Message sent! I'll reply soon.</motion.p>
              )}
              {status === "error" && (
                <p className="mt-3 text-center text-red-400 text-sm font-semibold">❌ Error sending. Try again.</p>
              )}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-gray-600 text-xs font-mono tracking-widest">
          DESIGNED & BUILT BY <span className="text-cyan-400">HARSH NIGAM</span> · {new Date().getFullYear()}
        </p>
        <div className="flex justify-center gap-2 mt-3">
          {["React", "Framer Motion", "Tailwind CSS", "Vite"].map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs rounded bg-white/3 text-gray-600 border border-white/5 font-mono">{t}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
