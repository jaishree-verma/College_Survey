// const express = require("express");
// const { sendSurveyMail } = require("../utils/mailer");
// const SurveyHistory = require("../models/SurveyHistory");

// const router = express.Router();

// // Submit a new survey query
// router.post("/send-query", async (req, res) => {
//   const { email, question } = req.body;

//   try {
//     // Save query in MongoDB
//     const newSurvey = await SurveyHistory.create({ email, question });

//     // Send emails
//     await sendSurveyMail(email, question);

//     // 🔹 Emit event to all connected clients (for live updates)
//     req.app.get("io").emit("newSurvey", newSurvey);

//     res.json({ message: "Query processed. Check your email for details." });
//   } catch (error) {
//     console.error("Error processing query:", error);
//     res.status(500).json({ message: "Error processing query" });
//   }
// });

// // Fetch all survey results
// router.get("/results", async (req, res) => {
//   try {
//     const results = await SurveyHistory.find();
//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching results:", error);
//     res.status(500).json({ message: "Error fetching results" });
//   }
// });

// module.exports = router;
const express = require("express");
const { sendSurveyMail } = require("../utils/mailer");
const SurveyHistory = require("../models/SurveyHistory");

const router = express.Router();

// Submit a new survey query
router.post("/send-query", async (req, res) => {
  const { email, category, question } = req.body;  // ✅ include category

  try {
    // Save query in MongoDB
    const newSurvey = await SurveyHistory.create({ email, category, question });

    // Send confirmation email
    await sendSurveyMail(email, question, category);

    // Emit event to all connected clients (for live updates)
    req.app.get("io").emit("newSurvey", newSurvey);

    res.json({ message: "Query processed. Check your email for details." });
  } catch (error) {
    console.error("Error processing query:", error);
    res.status(500).json({ message: "Error processing query" });
  }
});

// Fetch all survey results
router.get("/results", async (req, res) => {
  try {
    const results = await SurveyHistory.find();
    res.json(results);
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ message: "Error fetching results" });
  }
});

module.exports = router;
