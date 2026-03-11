const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendSurveyMail(studentEmail, question) {
  // Forward query to survey inbox
  await transporter.sendMail({
    from: studentEmail,
    to: process.env.EMAIL_USER,
    subject: "New Student Query",
    text: `Query from: ${studentEmail}\n\n${question}`
  });

  // Send acknowledgment back to student
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: studentEmail,
    subject: "Query Received - College Survey",
    text: `Dear Student,\n\nWe have received your query:\n"${question}"\n\nOur team will respond soon.\n\nRegards,\nCollege Survey Team`
  });
}

module.exports = { sendSurveyMail };
async function sendContactMail(name, email, message) {
  // Forward contact message to survey inbox
  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  });

  // Send acknowledgment back to sender
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Contact Request Received - College Survey",
    text: `Dear ${name},\n\nWe have received your message:\n"${message}"\n\nOur team will respond soon.\n\nRegards,\nCollege Survey Team`
  });
}

module.exports = { sendSurveyMail, sendContactMail };
