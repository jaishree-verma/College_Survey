// Load environment variables from .env
require("dotenv").config({ path: __dirname + "/.env" });


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

// 🔹 Stats route
app.get("/api/stats", async (req, res) => {
  try {
    const Survey = mongoose.model("Survey"); // make sure Survey model is defined
    let Visit;
    try {
      Visit = mongoose.model("Visit"); // optional if you track visits
    } catch (e) {
      Visit = null;
    }

    // Category breakdown
    const categoryStats = await Survey.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]);
    const formattedCategories = {};
    categoryStats.forEach((s) => {
      formattedCategories[s._id] = s.count;
    });

    // Totals
    const surveyResponses = await Survey.countDocuments();
    const siteVisits = Visit ? await Visit.countDocuments() : 0;

    res.json({
      ...formattedCategories,
      surveyResponses,
      siteVisits
    });
  } catch (err) {
    console.error("❌ Error fetching stats:", err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

// 🔹 MongoDB Connection
console.log("MONGO_URI:", process.env.MONGO_URI); // debug log

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173" } // allow frontend dev server
});

// 🔹 Socket.IO connection
io.on("connection", (socket) => {
  console.log("🟢 New client connected");

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected");
  });
});

// Export io so routes can emit events
app.set("io", io);

// Start Server
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
