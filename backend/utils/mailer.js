const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const User = require("../models/User");

async function sendSurveyEmail(userId, question, answer, surveyType) {
  const user = await User.findById(userId);

  // Generate PDF
  const doc = new PDFDocument();
  const filePath = `./survey_${Date.now()}.pdf`;
  doc.pipe(fs.createWriteStream(filePath));
  doc.fontSize(16).text("College Survey Report", { align: "center" });
  doc.moveDown();
  doc.fontSize(12).text(`Question: ${question}`);
  doc.text(`Answer: ${answer}`);
  doc.text(`Survey Type: ${surveyType}`);
  doc.text(`Time: ${new Date().toLocaleString()}`);
  doc.end();

  // Configure mail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Send email with PDF
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email, // ✅ any registered email
    subject: `Your College Survey Answer - ${surveyType}`,
    text: `Your query has been answered. Please find the attached PDF report.`,
    attachments: [{ filename: "survey_report.pdf", path: filePath }]
  });
}

module.exports = sendSurveyEmail;
