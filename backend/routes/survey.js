const express = require("express");
const fs = require("fs");
const path = require("path");
const { sendSurveyMail } = require("../utils/mailer");
const { generateAnswer } = require("../utils/answerEngine");
const SurveyHistory = require("../models/SurveyHistory");

const router = express.Router();

const DATA_FILE = path.join(__dirname, "../data/surveys.json");

// Helper to ensure data directory & file exist
function getLocalSurveys() {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify([]));
    const content = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(content || "[]");
  } catch (e) {
    return [];
  }
}

function saveLocalSurvey(surveyData) {
  try {
    const surveys = getLocalSurveys();
    surveys.unshift(surveyData);
    fs.writeFileSync(DATA_FILE, JSON.stringify(surveys, null, 2));
  } catch (e) {
    console.warn("Local storage notice:", e.message);
  }
}

// Submit a new survey query
router.post("/send-query", async (req, res) => {
  const { email, category, question } = req.body;

  if (!email || !question) {
    return res.status(400).json({ message: "Email and question are required." });
  }

  try {
    // Generate intelligent answer
    const answer = generateAnswer(category, question);

    let newSurvey = {
      _id: Date.now().toString(),
      email,
      category: category || "General",
      question,
      answer,
      createdAt: new Date().toISOString()
    };

    // 1. Store in MongoDB database
    try {
      const savedDoc = await SurveyHistory.create({
        email,
        category: category || "General",
        question,
        answer
      });
      if (savedDoc) newSurvey = savedDoc;
      console.log(`💾 Stored query in MongoDB database for ${email}`);
    } catch (dbErr) {
      console.warn("ℹ️ MongoDB Atlas storage notice (storing in local database):", dbErr.message);
    }

    // 2. Store in local persistent database file
    saveLocalSurvey(newSurvey);

    // 3. Dispatch email notification to collegesurvey2025@gmail.com and student
    sendSurveyMail(email, question, category, answer).catch((mailErr) => {
      console.warn("⚠️ Email dispatch notice:", mailErr.message);
    });

    // 4. Emit live Socket.IO event to all clients
    try {
      if (req.app.get("io")) {
        req.app.get("io").emit("newSurvey", newSurvey);
      }
    } catch (socketErr) {
      console.warn("⚠️ Socket event notice:", socketErr.message);
    }

    // Return success response to client
    return res.json({
      message: "Query processed and stored! Your answer has been generated and sent to your email (Please check your Inbox and Spam/Junk folder).",
      answer: answer
    });
  } catch (error) {
    console.error("❌ Error processing query:", error);
    return res.status(500).json({ message: "Error processing query. Please try again." });
  }
});

// Fetch all survey results (combines MongoDB + Local Database)
router.get("/results", async (req, res) => {
  try {
    const localQueries = getLocalSurveys();
    let dbQueries = [];
    try {
      dbQueries = await SurveyHistory.find().lean();
    } catch (e) {}

    const combined = [...dbQueries, ...localQueries];
    // Deduplicate by _id or email+question
    const uniqueMap = new Map();
    combined.forEach(q => {
      const key = q._id ? q._id.toString() : `${q.email}-${q.question}`;
      if (!uniqueMap.has(key)) uniqueMap.set(key, q);
    });

    return res.json(Array.from(uniqueMap.values()));
  } catch (error) {
    console.error("Error fetching results:", error.message);
    return res.json(getLocalSurveys());
  }
});

module.exports = router;
