const mongoose = require("mongoose");

const surveyHistorySchema = new mongoose.Schema({
  email: { type: String, required: true },
  category: { type: String, default: "General" },
  question: { type: String, required: true },
  answer: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SurveyHistory", surveyHistorySchema);

