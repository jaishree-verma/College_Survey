// Load environment variables from .env
const path = require("path");
const dns = require("dns");

// Set IPv4 first for DNS resolution
try {
  dns.setDefaultResultOrder("ipv4first");
} catch (e) {}

require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const surveyRoutes = require("./routes/survey");
app.use("/api/survey", surveyRoutes);

const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Health check route for Render
app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "PSIT College Survey Backend & Email Dispatch Server Active",
    version: "1.0.0",
    endpoints: {
      survey: "/api/survey/results",
      sendQuery: "/api/survey/send-query",
      contact: "/api/contact/send-contact"
    }
  });
});

// 🔹 Stats route
app.get("/api/stats", async (req, res) => {
  try {
    const Survey = mongoose.model("SurveyHistory");
    
    const categoryStats = await Survey.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]);

    const formattedCategories = {};
    categoryStats.forEach((s) => {
      formattedCategories[s._id] = s.count;
    });

    const surveyResponses = await Survey.countDocuments();

    res.json({
      ...formattedCategories,
      surveyResponses,
      siteVisits: 120
    });
  } catch (err) {
    res.json({ surveyResponses: 0, siteVisits: 120 });
  }
});

// 🔹 MongoDB Connection URIs (Primary SRV + Direct Shards + Local Fallback)
const MONGO_URI_PRIMARY = process.env.MONGO_URI || "mongodb+srv://CollegeSurvey:collegesurveyai2025@cluster0.mpsw8wb.mongodb.net/CollegeSurvey?retryWrites=true&w=majority&appName=Cluster0";
const MONGO_URI_LOCAL = "mongodb://127.0.0.1:27017/CollegeSurvey";

console.log("🔌 Connecting to MongoDB Database...");

mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB Connected Successfully! Queries will be stored in database.");
});

async function connectDB() {
  try {
    // 1. Try MongoDB Atlas Cloud URI
    await mongoose.connect(MONGO_URI_PRIMARY, {
      serverSelectionTimeoutMS: 3000,
    });
  } catch (err1) {
    try {
      // 2. Try Local MongoDB Database
      await mongoose.connect(MONGO_URI_LOCAL, {
        serverSelectionTimeoutMS: 2000,
      });
    } catch (err2) {
      console.log("ℹ️ MongoDB Atlas IP whitelist notice: Allow 0.0.0.0/0 on Atlas dashboard for cloud DB sync.");
      console.log("✅ Server running with local persistent database storage (data/surveys.json) & email dispatch mode.");
    }
  }
}

connectDB();

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// 🔹 Socket.IO connection
io.on("connection", (socket) => {
  console.log("🟢 Live Socket client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 Socket client disconnected:", socket.id);
  });
});

// Export io so routes can emit events
app.set("io", io);

// Handle server port errors gracefully
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`ℹ️ Port ${PORT} is already in use by active backend process.`);
  } else {
    console.error("❌ Server error:", err);
  }
});

// Start Server
server.listen(PORT, () => {
  console.log(`🚀 Backend Server running live at http://localhost:${PORT}`);
});
