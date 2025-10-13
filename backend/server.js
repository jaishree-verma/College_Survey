require("dotenv").config({ path: __dirname + "/.env" });

console.log("✅ ENV Loaded:", process.env);

console.log("✅ MONGO_URI:", process.env.MONGO_URI);
console.log("✅ GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);

// 🔐 Configure Google OAuth strategy
const configureGoogleStrategy = require("./utils/googleStrategy");
configureGoogleStrategy();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 Middleware
app.use(cors());
app.use(express.json());

// 🛡️ Session & Passport setup
app.use(session({
  secret: process.env.SESSION_SECRET || "defaultSecret",
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// 🛠 Optional: Log incoming requests
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// 📦 Routes
const userRoutes = require("./routes/api");
app.use("/api", userRoutes);
const chatbotRoutes = require("./routes/chatbot");
app.use("/api", chatbotRoutes);



// 🗃 MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err));

// 🚫 Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" });
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
