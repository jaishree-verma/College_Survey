const express = require("express");
const { notifyCollegeSurvey, sendResponseToStudent } = require("../utils/mailer");

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, question } = req.body;

  let answer;

  // Step 1: Try to find answer in FAQ (optional)
  const faqAnswer = null; // replace with DB lookup if you want

  if (faqAnswer) {
    answer = faqAnswer;
  } else {
    // Step 2: Unknown query → forward to college survey inbox
    await notifyCollegeSurvey(userId, question);

    // Step 3: Acknowledge student
    answer = "Your query has been forwarded to the College Survey team. You will receive a response soon.";
  }

  // Step 4: Send response to student
  await sendResponseToStudent(userId, question, answer);

  res.json({ message: "Query processed. Check your email for details." });
});

module.exports = router;
