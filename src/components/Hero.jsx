import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaLinux, FaDocker, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>

      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        HARSH NIGAM
      </motion.h1>

      <div className="text-xl md:text-3xl text-cyan-300 mt-6 font-bold">
        <Typewriter
          words={[
            "React Developer",
            "Linux Enthusiast",
            "DevOps Learner",
            "Cyberpunk Coder",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </div>

      <div className="flex gap-8 text-5xl mt-10">
        <FaReact className="text-cyan-400 animate-spin" />
        <FaLinux className="hover:scale-125 transition" />
        <FaDocker className="text-blue-400 hover:scale-125 transition" />
        <FaGithub className="hover:scale-125 transition" />
      </div>
    </section>
  );
}
