const express = require("express");
const SurveyHistory = require("../models/SurveyHistory");
const sendSurveyEmail = require("../utils/mailer");

const router = express.Router();

// Submit a query
router.post("/", async (req, res) => {
  const { userId, question } = req.body;

  // Generate answer (replace with Rasa or backend logic later)
  const answer = "Sample answer from backend"; 
  const surveyType = "General"; 

  // Save history
  const entry = await SurveyHistory.create({ userId, question, answer, surveyType });

  // Send email with PDF
  await sendSurveyEmail(userId, question, answer, surveyType);

  res.json({ message: "Answer sent to your registered mail ID", entry });
});

// Fetch history
router.get("/history/:userId", async (req, res) => {
  const history = await SurveyHistory.find({ userId: req.params.userId }).sort({ timestamp: -1 });
  res.json(history);
});

module.exports = router;
