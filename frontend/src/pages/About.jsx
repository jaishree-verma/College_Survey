import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";
import Footer from "./Footer";

// Hook for animated numbers
function useAnimatedNumber(target, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    let diff = target - start;
    let startTime = performance.now();
    const step = (now) => {
      let progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.floor(start + diff * progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return value;
}

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [status, setStatus] = useState("");
  const [processing, setProcessing] = useState(false);

  const surveyResponses = useAnimatedNumber(500);
  const siteVisits = useAnimatedNumber(3000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setStatus("");

    try {
      const API_BASE = window.location.hostname === "localhost" ? "http://localhost:5000" : "https://college-survey-backend.onrender.com";
      const res = await axios.post(`${API_BASE}/api/contact/send-contact`, {
        name,
        email,
        message: messageText
      });
      setStatus(res.data.message);
    } catch (err) {
      setStatus("Error submitting contact request. Please check backend connection.");
    } finally {
      setProcessing(false);
      setName("");
      setEmail("");
      setMessageText("");
    }
  };

  return (
    <div className="about-page-container">
      <div className="about-wrapper">
        {/* Header Hero Box */}
        <div className="about-header-box">
          <div className="about-badge">PSIT Student Portal</div>
          <h1 className="about-title">PSIT Major Query Survey</h1>
          <p className="about-subtitle">
            From physical surveys to an AI-assisted digital portal crafted by @PSIT-AIML students
          </p>
        </div>

        {/* Informational Cards */}
        <div className="about-grid">
          <div className="about-card">
            <h2>What is College Survey?</h2>
            <p>
              PSIT Major College Survey is a platform designed to collect and analyze feedback
              from students about campus life — ranging from canteen facilities to cultural activities,
              and from the admission process to placement queries. It empowers both students and administration to understand campus feedback in real-time.
            </p>
            <ul className="about-points">
              <li>• Resolve all types of major queries in a structured survey format</li>
              <li>• Provide clear visual analytics for canteen, hostel, academics, and placements</li>
              <li>• Enable students to voice concerns anonymously and safely</li>
              <li>• Help faculty identify key areas for campus infrastructure improvement</li>
              <li>• Offer real-time insights into trending queries via Socket.IO live feeds</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>How Can You Use It?</h2>
            <p>
              Simply navigate to the "Ask Question" page, submit your inquiry along with your email, and receive instant category guidance both on-screen and directly in your email inbox.
            </p>
            <ul className="about-points">
              <li>• Quick, anonymous, and built to make every student voice heard</li>
              <li>• Instant automated response delivered directly to your email</li>
              <li>• Survey results categorized by topic to monitor query trends</li>
              <li>• Helps bridge communication between students and faculty</li>
            </ul>
          </div>
        </div>

        {/* Live Counters */}
        <div className="about-stats">
          <div className="stat-box">
            <h3>{surveyResponses}+</h3>
            <p>Survey Responses Collected</p>
          </div>
          <div className="stat-box">
            <h3>{siteVisits}+</h3>
            <p>Unique Campus Visitors</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="about-contact-card">
          <h2 className="contact-title">Contact Administration & Support</h2>
          <p className="contact-desc">Have a specific request or feedback for the survey team? Send us a direct message below.</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Type your message or inquiry here..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          {processing && (
            <div className="processing-alert">
              Processing your contact request... Sending confirmation email.
            </div>
          )}

          {status && <div className="status-alert">{status}</div>}
        </div>

        {/* Help Banner */}
        <div className="help-box">
          <h3>Need Direct Campus Assistance?</h3>
          <p>
            For urgent campus administration inquiries, visit the official PSIT website at{" "}
            <a href="https://www.psit.ac.in/" target="_blank" rel="noopener noreferrer">
              www.psit.ac.in
            </a>{" "}
            or contact the campus desk.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
