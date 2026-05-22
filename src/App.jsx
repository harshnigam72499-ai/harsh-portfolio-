import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import Cube from "./components/Cube";
import CinematicSection from "./components/CinematicSection";
import MagneticButton from "./components/MagneticButton";
import CursorGlow from "./components/CursorGlow";
import PageSection from "./components/PageSection";
import TiltCard from "./components/TiltCard";
import Reveal from "./components/Reveal";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleBackground from "./components/ParticleBackground";

const BACKEND_URL = "https://harsh-portfolio-4.onrender.com";

function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [active, setActive] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Saare fields bharo!");
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
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CursorGlow />
      <div className="fixed top-0 left-0 w-full h-[3px] z-[999] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <ParticleBackground />
      <Navbar active={active} />
      <Hero />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <Cube />
      </div>

      {/* ABOUT */}
      <CinematicSection id="about">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-purple-400 mb-10">About Me</h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xl text-left space-y-6">
              <p className="text-gray-300 text-lg">
                📍 <span className="text-white font-semibold">Location:</span>{" "}
                Muradnagar, Ghaziabad, Uttar Pradesh, India
              </p>
              <div>
                <h3 className="text-cyan-400 text-xl font-bold mb-2">🎓 Education</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>10th (CBSE) - 2020 - 74%</li>
                  <li>12th (CBSE) - 2022 - 60%</li>
                  <li>BCA - CCS University | HRIT College (2022 - 2025) - 61%</li>
                </ul>
              </div>
              <div>
                <h3 className="text-pink-400 text-xl font-bold mb-2">🚀 Currently Learning</h3>
                <p className="text-gray-300">Linux, Java, PostgreSQL, System Design Basics</p>
              </div>
              <p className="text-gray-300">📧 Email: harshnigam72499@gmail.com</p>
              <p className="text-gray-300 leading-8">
                I am looking for an opportunity as a{" "}
                <span className="text-cyan-400 font-semibold">Full Stack Developer</span>{" "}
                where I can apply my skills and work on real-world projects.
              </p>
            </div>
          </div>
        </Reveal>
      </CinematicSection>

      {/* SKILLS */}
      <Reveal>
        <CinematicSection id="skills" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-cyan-400 mb-10">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {["React","JavaScript","Linux","Docker","Jenkins","Node.js","Git","CI/CD","Networking","Java"].map((skill) => (
                <div key={skill} className="p-4 bg-white/5 border border-cyan-400/20 rounded-xl hover:scale-110 transition">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </CinematicSection>
      </Reveal>

      {/* PROJECTS */}
      <Reveal>
        <PageSection id="projects" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center w-full max-w-6xl">
            <h2 className="text-5xl font-bold text-pink-400 mb-14">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Food Ordering App", desc: "Modern React UI with backend integration." },
                { title: "DevOps Pipeline", desc: "Jenkins + Linux automation system." },
                { title: "Portfolio UI", desc: "Animated futuristic portfolio design." },
              ].map((project, i) => (
                <TiltCard key={i}>
                  <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <div className="h-32 mb-6 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-xl font-black">
                      PROJECT
                    </div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400">{project.desc}</p>
                    <MagneticButton className="mt-5 px-5 py-2 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black">
                      View Project
                    </MagneticButton>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </PageSection>
      </Reveal>

      {/* CONTACT */}
      <Reveal>
        <PageSection id="contact" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-xl w-full">
            <h2 className="text-5xl font-bold text-cyan-400 mb-6">Contact</h2>
            <input
              className="w-full mb-4 p-3 rounded-xl bg-black/40 border border-white/10 text-white"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="w-full mb-4 p-3 rounded-xl bg-black/40 border border-white/10 text-white"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white"
              rows="5"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              onClick={handleSend}
              disabled={status === "sending"}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold rounded-xl hover:scale-105 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            {status === "success" && <p className="mt-4 text-green-400 font-semibold">✅ Message sent successfully!</p>}
            {status === "error" && <p className="mt-4 text-red-400 font-semibold">❌ Error sending message</p>}
          </div>
        </PageSection>
      </Reveal>
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
