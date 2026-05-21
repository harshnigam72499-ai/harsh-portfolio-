import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaLinux, FaDocker, FaGithub } from "react-icons/fa";

export default function UltimatePortfolio() {

  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

const particles = useMemo(
  () =>
    Array.from({ length: 25 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 4,
    })),
  []
);

const skills = [
  "React",
  "JavaScript",
  "Linux",
  "Docker",
  "Jenkins",
  "Java",
  "Networking",
  "Git & GitHub",
  "Node.js",
  "CI/CD"
];


  const projects = [
    {
      title: "Food Ordering Website",
      desc: "Modern food ordering platform with responsive UI and backend integration.",
    },
    {
      title: "DevOps Automation",
      desc: "Jenkins pipelines, cron jobs, Linux automation and deployment setup.",
    },
    {
      title: "Portfolio Website",
      desc: "Creative animated portfolio made using React and Tailwind CSS.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white overflow-hidden relative">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_30%)]" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse" />

        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full opacity-70 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}



<nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 backdrop-blur-md z-50 border-b border-white/10 bg-black/40">
  <h1 className="text-2xl font-bold tracking-widest text-white">
    HARSH.dev
  </h1>

  <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">


<a
  href="#home"
  className={active === "home" ? "text-cyan-400" : "hover:text-cyan-400"}
>
  Home
</a>

<a
  href="#about"
  className={active === "about" ? "text-cyan-400" : "hover:text-cyan-400"}
>
  About
</a>

<a
  href="#skills"
  className={active === "skills" ? "text-cyan-400" : "hover:text-cyan-400"}
>
  Skills
</a>

<a
  href="#projects"
  className={active === "projects" ? "text-cyan-400" : "hover:text-cyan-400"}
>
  Projects
</a>

<a
  href="#contact"
  className={active === "contact" ? "text-cyan-400" : "hover:text-cyan-400"}
>
  Contact
</a>

  </div>
</nav>



      {/* Hero */}

  <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse blur-3xl"></div>

  <motion.h1
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
  >
    HARSH NIGAM
  </motion.h1>

  <div className="text-xl md:text-3xl text-cyan-300 mt-8 font-bold">
    <Typewriter
      words={[
        "React Developer",
        "Linux Enthusiast",
        "DevOps Learner",
        "Creative Designer",
        "Cyberpunk Coder"
      ]}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={80}
      deleteSpeed={40}
      delaySpeed={1500}
    />
  </div>

  <div className="flex gap-8 text-5xl mt-12">
    <FaReact className="animate-spin text-cyan-400" />
    <FaLinux className="hover:scale-125 transition duration-300" />
    <FaDocker className="hover:scale-125 transition duration-300 text-blue-400" />
    <FaGithub className="hover:scale-125 transition duration-300" />
  </div>

</section>





      {/* About */}

      <section id="about" className="px-6 md:px-20 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              About <span className="text-purple-400">Me</span>
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              I am a passionate developer who loves building modern websites,
              automation systems, and creative user experiences. I work with
              React, Linux, DevOps tools, and backend technologies to create
              smooth and powerful digital products.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/20 rounded-3xl p-8 backdrop-blur-lg shadow-[0_0_40px_rgba(0,255,255,0.15)] hover:scale-105 transition duration-500">
            <div className="space-y-6">
              <div>
                <h3 className="text-cyan-400 text-xl font-bold">Experience</h3>
                <p className="text-gray-300 mt-2">Frontend + DevOps Projects</p>
              </div>

              <div>
                <h3 className="text-purple-400 text-xl font-bold">Education</h3>
                <p className="text-gray-300 mt-2">MCA Student</p>
              </div>

              <div>
                <h3 className="text-pink-400 text-xl font-bold">Focus</h3>
                <p className="text-gray-300 mt-2">
                  React • Linux • Docker • Jenkins • Networking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-20 py-24">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900 to-slate-800 hover:from-cyan-400 hover:to-purple-500 hover:text-black transition duration-500 border border-cyan-400/20 rounded-3xl p-6 text-center font-semibold backdrop-blur-lg hover:scale-110 shadow-[0_0_20px_rgba(0,255,255,0.15)]"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-20 py-24">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-900/90 to-black/80 border border-cyan-400/20 rounded-3xl p-8 hover:-translate-y-5 transition duration-500 backdrop-blur-lg hover:border-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_50px_rgba(0,255,255,0.3)]"
            >
              <div className="h-44 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 mb-6 flex items-center justify-center text-2xl font-black tracking-widest">
                PROJECT
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7">{project.desc}</p>

              <button className="mt-6 px-6 py-3 rounded-xl bg-white/10 hover:bg-cyan-400 hover:text-black transition font-semibold">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-20 py-24">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-lg text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Contact <span className="text-pink-400">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-8 max-w-2xl mx-auto">
            Want to collaborate, build projects, or discuss ideas? Feel free to
            connect with me anytime.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />
          </div>

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full mt-6 bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
          />

          <button className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-bold text-black hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-400/40">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        © 2026 Harsh Nigam • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
