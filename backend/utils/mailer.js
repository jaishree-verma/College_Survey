const nodemailer = require("nodemailer");
const User = require("../models/User");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send query to college survey email
async function notifyCollegeSurvey(userId, question) {
  const user = await User.findById(userId);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "collegesurvey@yourdomain.com", // fixed college survey email
    subject: `New Survey Query from ${user.email}`,
    text: `Student ${user.email} asked: ${question}`
  });
}

// Send response back to student
async function sendResponseToStudent(userId, question, answer) {
  const user = await User.findById(userId);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Your College Survey Response",
    text: `You asked: ${question}\n\nAnswer: ${answer}`
  });
}

module.exports = { notifyCollegeSurvey, sendResponseToStudent };
