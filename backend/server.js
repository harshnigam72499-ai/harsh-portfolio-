import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ----------- MIDDLEWARE ----------- */
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
app.use(express.json());

/* ----------- MONGODB ----------- */
mongoose
  .connect("mongodb+srv://harshnigam72499-ai:W9ohrPN7Y2IQ9n7z@cluster0.opb65vu.mongodb.net/portfolio?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

/* ----------- SCHEMA + MODEL ----------- */
const ContactSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const Contact = mongoose.model("Contact", ContactSchema);

/* ----------- TEST ROUTE ----------- */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ----------- CONTACT ROUTE ----------- */
app.post("/contact", async (req, res) => {
  console.log("🔥 /contact HIT — BODY:", req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Saare fields bharo!" });
  }

  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    console.log("✅ MongoDB mein save ho gaya!");
    res.json({ success: true });
  } catch (err) {
    console.log("❌ Save Error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

/* ----------- ADMIN LOGIN ----------- */
// Credentials .env mein rakho — hardcode mat karo production mein
const ADMIN_EMAIL    = process.env.ADMIN_EMAIL    || "admin@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

app.post("/admin/login", (req, res) => {
  const { email, password } = req.body;
  console.log("🔐 Admin login attempt:", email);

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  }
  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

/* ----------- ADMIN MESSAGES (fetch all) ----------- */
app.get("/admin/messages", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, messages });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/* ----------- SERVER START ----------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`🔐 Admin: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`);
});
