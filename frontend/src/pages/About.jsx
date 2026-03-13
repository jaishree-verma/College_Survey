import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";

// 🔹 Hook for animated numbers
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
  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [status, setStatus] = useState("");
  const [processing, setProcessing] = useState(false);

  // 🔹 Animated counters (fixed target 1000)
  const surveyResponses = useAnimatedNumber(500);
  const siteVisits = useAnimatedNumber(3000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setStatus("");

    try {
      const res = await axios.post("http://localhost:5000/api/contact/send-contact", {
        name,
        email,
        message: messageText
      });
      setStatus(res.data.message);
    } catch (err) {
      setStatus("Error submitting contact request");
    } finally {
      setProcessing(false);
      setName("");
      setEmail("");
      setMessageText("");
    }
  };

  return (
    <div className="about-wrapper">
      {/* Project name in a box */}
      <div className="about-header-box">
        <h1 className="about-title">PSIT Major Query Survey</h1>
        <p className="about-subtitle">
          From handmade surveys to online surveys made by fellow @PSIT-AIML students
        </p>
      </div>

      {/* About section */}
      <div className="about-section">
        <h2 style={{ color: "black" }}>What is College Survey?</h2>
        <p>
          PSIT Major College Survey is a platform designed to collect and analyze feedback
          from students about campus life - from canteen facilities to cultural activities,
          from admission process to placement queries. It helps both students and faculty
          understand opinions and improve the college environment.
        </p>
        <ul className="about-points">
          <li>Resolve all types of major queries in a structured survey format</li>
          <li>Provide clear results for each topic (canteen, hostel, academics, placements)</li>
          <li>Enable students to voice concerns anonymously and safely</li>
          <li>Help faculty and administration identify areas for improvement</li>
          <li>Offer real-time insights into trending issues and feedback</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 style={{ color: "black" }}>How can you use it?</h2>
        <p>
          Simply navigate to the "Question" page, submit your feedback, and view
          real-time results on the "Result" page.
        </p>
        <ul className="about-points">
          <li>It’s quick, anonymous, and designed to make your voice heard.</li>
          <li>You will get your response in the email.</li>
          <li>Survey results are displayed by topic, so you can see how major queries are trending.</li>
          <li>Helps identify common concerns across students and faculty.</li>
        </ul>
      </div>

      {/* 🔹 Animated Stats */}
      <div className="about-stats">
        <div className="stat-box">
          <img src="/up-arrow-icon.png" alt="Survey Responses Icon" className="stat-icon" />
          <h3><u>Total Survey Responses</u></h3>
          <p className="stat-number">{surveyResponses}+</p>
          <span className="stat-subtext">Responses Collected</span>
        </div>

        <div className="stat-box">
          <img src="/users-icon.png" alt="Site Visitors Icon" className="stat-icon" />
          <h3><u>Total Site Visits</u></h3>
          <p className="stat-number">{siteVisits}+</p>
          <span className="stat-subtext">Unique Visitors</span>
        </div>
      </div>

      {/* Contact form */}
      <div className="about-contact">
        <h2 style={{ color: '#000000ff' }}>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Message</label>
          <textarea
            placeholder="Your message here..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            required
          />

          <button type="submit" style={{ color: "white" }}>Send Message</button>
        </form>

        {/* Processing box */}
        {processing && (
          <div className="processing-box" style={{ fontWeight:"bold",marginTop: "20px", padding: "10px", backgroundColor: "#c0c1c1ff", borderRadius: "5px" }}>
            Your message is being processed. Thank you for waiting - you will soon receive a response through email.
          </div>
        )}

        {/* Final backend response */}
        {status && <p className="contact-message">{status}</p>}
      </div>

      <div className="update-box">
  <h3>Need Help?</h3>
  <p>
    For live updates or queries, please contact the college management or visit{" "}
    <a href="https://www.psit.ac.in/" target="_blank" rel="noopener noreferrer">
      https://www.psit.ac.in/
    </a>
    
    <br />
    📞 Phone: +91-XXXXXXXXXX
  </p>
</div>

    </div>
  );
}
