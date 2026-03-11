require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const surveyRoutes = require("./routes/survey");
app.use("/api/survey", surveyRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
