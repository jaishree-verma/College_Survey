const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const nodemailer = require("nodemailer");

const COLLEGE_SURVEY_EMAIL = "collegesurvey2025@gmail.com";
const EMAIL_USER = process.env.EMAIL_USER || COLLEGE_SURVEY_EMAIL;
const EMAIL_PASS = (process.env.EMAIL_PASS || "tcxmeqhsjlxpmcpd").replace(/\s+/g, "");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Nodemailer SMTP Connection Warning:", error.message);
  } else {
    console.log("✅ Nodemailer SMTP Server Ready to dispatch emails from:", EMAIL_USER);
  }
});

async function sendSurveyMail(studentEmail, question, category, answer) {
  if (!studentEmail || !studentEmail.includes("@")) {
    console.warn("⚠️ Invalid recipient email address provided:", studentEmail);
    return;
  }

  try {
    // 1. Direct email to the student
    const studentMailOptions = {
      from: `"PSIT College Survey Support" <${EMAIL_USER}>`,
      to: studentEmail,
      replyTo: COLLEGE_SURVEY_EMAIL,
      subject: `Your Query Answered - PSIT College Survey [${category || "General"}]`,
      text: `Dear Student,\n\nThank you for submitting your query through the PSIT College Survey portal.\n\n----------------------------------------\nCategory: ${category || "General"}\nStudent Email: ${studentEmail}\nYour Question:\n"${question}"\n----------------------------------------\n\n${answer}\n\nIf you have further questions, simply reply directly to this email.\n\nBest regards,\nPSIT College Survey & Support Team\nOfficial Portal: https://www.psit.ac.in/`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #cbd5e1; border-radius: 10px;">
          <h2 style="color: #1d4ed8; margin-top: 0;">PSIT College Survey Resolution</h2>
          <p>Dear Student,</p>
          <p>Thank you for submitting your query through the PSIT College Survey portal.</p>
          <div style="background-color: #f1f5f9; padding: 15px; border-left: 4px solid #2563eb; border-radius: 5px; margin: 15px 0;">
            <p style="margin: 0; font-weight: bold; color: #1e3a8a;">Category: ${category || "General"}</p>
            <p style="margin: 5px 0 0 0;"><strong>Your Question:</strong> "${question}"</p>
          </div>
          <div style="background-color: #f0f9ff; padding: 15px; border: 1px solid #bfdbfe; border-radius: 8px; margin-bottom: 20px;">
            <h4 style="color: #1d4ed8; margin-top: 0;">Guidance & Solution:</h4>
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.5;">${answer}</p>
          </div>
          <p style="font-size: 0.9em; color: #64748b;">If you have further questions, simply reply directly to this email.</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 0.85em; color: #94a3b8; margin: 0;">PSIT College Survey Team | <a href="https://www.psit.ac.in/" style="color: #2563eb;">www.psit.ac.in</a></p>
        </div>
      `
    };

    const studentInfo = await transporter.sendMail(studentMailOptions);
    console.log(`✅ Direct Email dispatched to ${studentEmail} (Response: ${studentInfo.response})`);

    // 2. Log notification email to collegesurvey2025@gmail.com
    const adminMailOptions = {
      from: `"PSIT Survey Portal" <${EMAIL_USER}>`,
      to: COLLEGE_SURVEY_EMAIL,
      replyTo: studentEmail,
      subject: `New Student Query [${category || "General"}] from ${studentEmail}`,
      text: `Query Submitted by Student: ${studentEmail}\nCategory: ${category || "General"}\nQuestion:\n"${question}"\n\nAutomated Resolution Delivered:\n${answer}`
    };

    await transporter.sendMail(adminMailOptions);
    console.log(`✅ Copy logged to ${COLLEGE_SURVEY_EMAIL}`);
  } catch (err) {
    console.error("❌ Nodemailer sendSurveyMail error:", err.message);
  }
}

async function sendContactMail(name, email, message) {
  if (!email || !email.includes("@")) return;

  try {
    await transporter.sendMail({
      from: `"PSIT Support" <${EMAIL_USER}>`,
      to: email,
      replyTo: COLLEGE_SURVEY_EMAIL,
      subject: "Contact Request Received - PSIT College Survey",
      text: `Dear ${name},\n\nWe have received your message:\n"${message}"\n\nOur administration team will review your query and reply shortly.\n\nRegards,\nPSIT College Survey Team`
    });

    await transporter.sendMail({
      from: `"PSIT Survey Portal" <${EMAIL_USER}>`,
      to: COLLEGE_SURVEY_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name} (${email})`,
      text: `Name: ${name}\nStudent Email: ${email}\n\nMessage:\n${message}`
    });
  } catch (err) {
    console.error("❌ Nodemailer sendContactMail error:", err.message);
  }
}

module.exports = { sendSurveyMail, sendContactMail };
