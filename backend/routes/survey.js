const express = require("express");
const { sendSurveyMail } = require("../utils/mailer");
const SurveyHistory = require("../models/SurveyHistory");

const router = express.Router();

router.post("/send-query", async (req, res) => {
  const { email, question } = req.body;

  try {
    // Save query in MongoDB
    await SurveyHistory.create({ email, question });

    // Send emails
    await sendSurveyMail(email, question);

    res.json({ message: "Query processed. Check your email for details." });
  } catch (error) {
    console.error("Error processing query:", error);
    res.status(500).json({ message: "Error processing query" });
  }
});

module.exports = router;
