const mongoose = require("mongoose");

const surveyHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  surveyType: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SurveyHistory", surveyHistorySchema);
