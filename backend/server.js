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

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
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
