import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./QueryForm.css";
import Footer from "../pages/Footer";

export default function QueryForm() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [studentName, setStudentName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [inquiryType, setInquiryType] = useState("General Inquiry");
  const [category, setCategory] = useState("canteen");
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const [receivedAnswer, setReceivedAnswer] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get("cat");
    if (catParam) {
      setCategory(catParam.toLowerCase());
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setMessage("");
    setReceivedAnswer("");

    try {
      const displayName = isAnonymous ? "Anonymous Student" : (studentName || "Student");
      const fullQuestionText = `[Inquiry Type: ${inquiryType}] [From: ${displayName}] ${question}`;
      
      const API_BASE = window.location.hostname === "localhost" ? "http://localhost:5000" : "https://college-survey-backend.onrender.com";
      const res = await axios.post(`${API_BASE}/api/survey/send-query`, {
        email,
        question: fullQuestionText,
        category
      });

      setMessage(res.data.message);
      if (res.data.answer) {
        setReceivedAnswer(res.data.answer);
      }
    } catch (err) {
      setMessage("Error submitting query. Please check your backend connection.");
    } finally {
      setProcessing(false);
      setEmail("");
      setStudentName("");
      setQuestion("");
    }
  };

  return (
    <div className="query-page-container">
      <div className="query-wrapper">
        {/* Left side card combining illustration + Guidelines */}
        <div className="query-left-card">
          <div className="query-image-wrapper">
            <img src="/SURVEY.png" alt="PSIT Survey Illustration" />
          </div>

          <div className="portal-guidelines-box">
            <h3>Submission Guidelines</h3>
            <ul className="guidelines-list">
              <li>
                <span className="guide-bullet">•</span>
                <span>Use your college email address for direct inbox delivery.</span>
              </li>
              <li>
                <span className="guide-bullet">•</span>
                <span>Select the most relevant survey category for instant resolution.</span>
              </li>
              <li>
                <span className="guide-bullet">•</span>
                <span>Check the anonymous checkbox if you prefer strict identity protection.</span>
              </li>
              <li>
                <span className="guide-bullet">•</span>
                <span>Resolutions are dispatched instantly from collegesurvey2025@gmail.com. <strong>Please check your Inbox and Spam/Junk folder.</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side form */}
        <div className="query-container">
          <div className="form-header">
            <span className="portal-tag">PSIT Student Welfare Portal</span>
            <h2 className="query-title">Submit a Campus Query</h2>
            <p className="query-subtitle">Get instant guidance dispatched directly to your email and rendered on the live survey feed.</p>
          </div>

          <form className="query-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field-group flex-1">
                <label htmlFor="student-name">Student Name (Optional)</label>
                <input
                  id="student-name"
                  type="text"
                  placeholder="Enter your name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  disabled={isAnonymous}
                />
              </div>

              <div className="field-group flex-1">
                <label htmlFor="inquiry-type">Inquiry Type</label>
                <select
                  id="inquiry-type"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Urgent Concern">Urgent Concern</option>
                  <option value="Suggestion / Feedback">Suggestion / Feedback</option>
                </select>
              </div>
            </div>

            <div className="checkbox-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                />
                <span>Submit Anonymously (Hide Name)</span>
              </label>
            </div>

            <div className="field-group">
              <label htmlFor="student-email">College Email Address</label>
              <input
                id="student-email"
                type="email"
                placeholder="student@psit.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="category">Select Survey Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="academics">Academics & Coursework</option>
                <option value="canteen">Canteen & Food Quality</option>
                <option value="hostel">Hostel & Accommodation</option>
                <option value="infrastructure">Campus Infrastructure & Labs</option>
                <option value="admission">Admission & Administrative Fees</option>
                <option value="sports">Sports & Gymnasium</option>
                <option value="extracurricular">Clubs & Cultural Events</option>
                <option value="coordination">Teacher-Student Coordination</option>
                <option value="environment">Campus Environment & Safety</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="student-question">Detailed Query / Question</label>
              <textarea
                id="student-question"
                placeholder="Type your detailed question or concern here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-query-btn">
              Submit Query & Send to Email
            </button>
          </form>

          {processing && (
            <div className="processing-box">
              Processing inquiry... Generating category resolution and dispatching to email.
            </div>
          )}

          {message && <div className="success-message">{message}</div>}

          {receivedAnswer && (
            <div className="answer-preview-card">
              <div className="answer-card-header">
                <span className="dispatch-badge">Dispatched to Email (Check Inbox & Spam/Junk)</span>
                <strong>Resolution Answer Preview</strong>
              </div>
              <pre className="answer-text">
                {receivedAnswer}
              </pre>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
