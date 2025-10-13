const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.post("/chatbot", async (req, res) => {
  const { message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ reply: "Please enter a valid question." });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are CollegeSurvey AI, a smart and friendly assistant for college-bound students. You answer questions clearly and helpfully about hostel facilities, admissions, scholarships, placements, and campus life. Always respond in a warm, student-friendly tone. If the question is unclear, ask for clarification instead of saying you don't know.`,
          },
          { role: "user", content: message }
        ],
        temperature: 0.3
      }),
    });

    const data = await response.json();
    console.log("🔍 OpenAI raw response:", JSON.stringify(data, null, 2));

    const reply = data.choices?.[0]?.message?.content?.trim();
    res.json({
      reply: reply || "Our hostels offer clean rooms, shared accommodations, Wi-Fi, nutritious meals, and 24/7 security. Each room includes study desks, wardrobes, and attached bathrooms."
    });
  } catch (err) {
    console.error("❌ Chatbot error:", err);
    res.status(500).json({ reply: "Error connecting to AI." });
  }
});

module.exports = router;
