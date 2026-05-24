import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

const BACKEND_URL = "https://harsh-portfolio-4.onrender.com";

const projects = [
  {
    title: "Food Ordering App",
    desc: "Responsive full stack food ordering platform with clean React UI and backend integration.",
  },
  {
    title: "DevOps Monitoring Stack",
    desc: "Docker, Linux and monitoring workflow setup using Prometheus and Grafana.",
  },
  {
    title: "Cinematic Portfolio",
    desc: "Modern cinematic portfolio experience focused on smooth interactions and performance.",
  },
];

function Portfolio() {
  const [active, setActive] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%)]" />

      <Navbar active={active} />

      <main className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Hero />

        <section id="about" className="py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-xl"
          >
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">
                  About Me
                </p>
                <h2 className="max-w-2xl text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight">
                  Building modern full stack experiences with clean UI and practical backend systems.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                  I am a Full Stack Developer focused on React, Node.js, Linux and DevOps fundamentals. I enjoy creating responsive interfaces, scalable backend workflows and clean user experiences.
                </p>
              </div>

              <div className="grid gap-4 text-sm text-gray-300 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300">Location</p>
                  <p>Muradnagar, Ghaziabad, Uttar Pradesh, India</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300">Education</p>
                  <p>BCA • HRIT College • CCS University</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300">Learning</p>
                  <p>Linux, PostgreSQL, System Design and DevOps</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Skills />

        <section id="projects" className="py-20 md:py-28">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold">Selected Work</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <div className="mb-6 h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-gray-300">{project.desc}</p>
                <button className="mt-6 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:border-cyan-400/30 hover:bg-cyan-400/10">
                  View Project
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-12"
          >
            <div className="text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold">Let's work together</h2>
            </div>

            <div className="mt-10 grid gap-5">
              <input
                className="h-14 rounded-2xl border border-white/10 bg-black/30 px-5 outline-none transition focus:border-cyan-400/40"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                className="h-14 rounded-2xl border border-white/10 bg-black/30 px-5 outline-none transition focus:border-cyan-400/40"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <textarea
                rows="6"
                className="rounded-2xl border border-white/10 bg-black/30 p-5 outline-none transition focus:border-cyan-400/40"
                placeholder="Tell me about your project"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button
                onClick={handleSend}
                className="h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold text-black transition hover:scale-[1.01]"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-center text-green-400">Message sent successfully.</p>
              )}

              {status === "error" && (
                <p className="text-center text-red-400">Something went wrong.</p>
              )}
            </div>
          </motion.div>
        </section>
      </main>
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
