import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// CONTACT ROUTE
app.post("/send", async (req, res) => {
  console.log("🔥 REQUEST HIT");
  console.log("BODY:", req.body);

  const { email, message } = req.body;

  if (!email || !message) {
    console.log("❌ Missing fields");
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    console.log("📧 Sending email...");

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: "New Portfolio Message",
      text: `From: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully");

    res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    res.status(500).json({ error: "Email sending failed" });
  }
});

// SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
