import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const BACKEND_URL = "https://harsh-portfolio-4.onrender.com";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("admin", "true");
        navigate("/admin/dashboard");
      } else {
        alert("❌ Invalid credentials");
      }
    } catch {
      alert("❌ Server se connect nahi ho pa raha");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/60 backdrop-blur-md border-b border-white/10">
        <Link to="/" className="text-xl font-bold text-white">
          HARSH<span className="text-cyan-400">.dev</span>
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/#home" className="text-gray-400 hover:text-cyan-400 transition">Home</Link>
          <Link to="/#about" className="text-gray-400 hover:text-cyan-400 transition">About</Link>
          <Link to="/#skills" className="text-gray-400 hover:text-cyan-400 transition">Skills</Link>
          <Link to="/#projects" className="text-gray-400 hover:text-cyan-400 transition">Projects</Link>
          <Link to="/#contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</Link>
        </div>
      </nav>

      {/* LOGIN FORM */}
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">🔐 Admin Login</h2>
          <form onSubmit={login} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Admin Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400 transition"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold rounded-xl hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
