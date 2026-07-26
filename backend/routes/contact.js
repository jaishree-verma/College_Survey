const express = require("express");
const { sendContactMail } = require("../utils/mailer");
const ContactHistory = require("../models/ContactHistory");

const router = express.Router();

router.post("/send-contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  try {
    // Try saving to MongoDB if connected
    try {
      await ContactHistory.create({ name, email, message });
    } catch (dbErr) {
      console.warn("⚠️ Contact MongoDB notice (dispatching mail directly):", dbErr.message);
    }

    // Trigger email notification to collegesurvey2025@gmail.com and acknowledgement to user
    sendContactMail(name, email, message).catch((mailErr) => {
      console.warn("⚠️ Contact email notice:", mailErr.message);
    });

    return res.json({ message: "Contact request received! Your message has been dispatched to administration at collegesurvey2025@gmail.com." });
  } catch (error) {
    console.error("❌ Error processing contact:", error.message);
    return res.status(500).json({ message: "Error processing contact request. Please try again." });
  }
});

module.exports = router;
