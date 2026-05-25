import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const BACKEND_URL = "https://harsh-portfolio-4.onrender.com";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      navigate("/admin");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/admin/messages`);
        const data = await res.json();
        if (data.success) setMessages(data.messages);
      } catch (err) {
        console.error("Fetch error:", err);
      }
      setLoading(false);
    };
    fetchMessages();
  }, []);

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/60 backdrop-blur-md border-b border-white/10">
        <Link to="/" className="text-xl font-bold text-white">
          HARSH<span className="text-cyan-400">.dev</span>
        </Link>
        <div className="flex gap-6 text-sm font-medium items-center">
          <Link to="/#home" className="text-gray-400 hover:text-cyan-400 transition">Home</Link>
          <Link to="/#about" className="text-gray-400 hover:text-cyan-400 transition">About</Link>
          <Link to="/#skills" className="text-gray-400 hover:text-cyan-400 transition">Skills</Link>
          <Link to="/#projects" className="text-gray-400 hover:text-cyan-400 transition">Projects</Link>
          <Link to="/#contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</Link>
          <button
            onClick={logout}
            className="px-4 py-1.5 bg-red-500/20 border border-red-500/40 text-red-400 rounded-xl hover:bg-red-500/30 transition text-sm"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-10">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">📬 Admin Dashboard</h1>
        {loading ? (
          <p className="text-gray-400 text-center">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-400 text-center">Koi message nahi abhi tak 📭</p>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-gray-400 text-sm mb-2">Total: {messages.length} messages</p>
            {messages.map((msg, i) => (
              <div key={msg._id || i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-white font-bold text-lg">{msg.name}</p>
                    <p className="text-cyan-400 text-sm">{msg.email}</p>
                  </div>
                  <p className="text-gray-500 text-xs">
                    {msg.createdAt ? new Date(msg.createdAt).toLocaleString("en-IN") : ""}
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
