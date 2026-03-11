const express = require("express");
const { sendContactMail } = require("../utils/mailer");
const ContactHistory = require("../models/ContactHistory");

const router = express.Router();

router.post("/send-contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    await ContactHistory.create({ name, email, message });

    // Send emails
    await sendContactMail(name, email, message);

    res.json({ message: "Contact request processed. Check your email for details." });
  } catch (error) {
    console.error("Error processing contact:", error);
    res.status(500).json({ message: "Error processing contact request" });
  }
});

module.exports = router;
