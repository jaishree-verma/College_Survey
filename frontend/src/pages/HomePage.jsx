import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Footer from "../pages/Footer";

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="home-wrapper">
        {/* Main Hero Banner */}
        <section className="hero-banner animate-entrance">
          <div className="hero-badge-tag">
            <span className="live-pulse-dot"></span> PSIT Official Student Welfare Portal | Developed by AIML Student
          </div>
          <h1 className="home-title">
            PSIT <span className="title-highlight">Major Query</span> Survey
          </h1>
          <p className="hero-subtitle">
            An intelligent, student-driven feedback platform delivering instant inquiry resolution and real-time campus survey analytics.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-buttons">
            <Link to="/question" className="btn-primary-link">
              <button className="btn-primary">Ask a Question</button>
            </Link>
            <Link to="/result" className="btn-secondary-link">
              <button className="btn-secondary">View Live Results</button>
            </Link>
            <Link to="/about" className="btn-outline-link">
              <button className="btn-outline">Learn More</button>
            </Link>
          </div>

          {/* Quick Metrics Counter Row */}
          <div className="quick-metrics-row">
            <div className="metric-box-card delay-1">
              <span className="metric-number">500+</span>
              <span className="metric-label">Queries Resolved</span>
            </div>
            <div className="metric-box-card delay-2">
              <span className="metric-number">95%+</span>
              <span className="metric-label">Student Participation</span>
            </div>
            <div className="metric-box-card delay-3">
              <span className="metric-number">Instant</span>
              <span className="metric-label">Email Answers</span>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="vision-mission-section animate-entrance delay-1">
          <div className="vision-box">
            <div className="card-top-bar"></div>
            <h2>Vision</h2>
            <p>
              To create a transparent, student-driven platform that empowers voices,
              highlights concerns, and inspires meaningful improvements in campus life.
            </p>
          </div>
          <div className="mission-box">
            <div className="card-top-bar"></div>
            <h2>Mission</h2>
            <p>
              To collect, analyze, and share feedback in real-time, ensuring every student
              feels heard and every query contributes to building a better PSIT community.
            </p>
          </div>
        </section>

        {/* Key Highlights Grid */}
        <section className="highlights-section animate-entrance delay-2">
          <h2 className="section-title">Key Portal Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-item-card">
              <div className="highlight-bullet">01</div>
              <h4>All-In-One Campus Survey</h4>
              <p>Designed to answer major queries related to PSIT, including canteen, hostel, academics, placements, and infrastructure.</p>
            </div>

            <div className="highlight-item-card">
              <div className="highlight-bullet">02</div>
              <h4>Real-Time Voice & Insights</h4>
              <p>Provides a platform for students to voice concerns and track trending campus queries live.</p>
            </div>

            <div className="highlight-item-card">
              <div className="highlight-bullet">03</div>
              <h4>Strict Anonymity & Safety</h4>
              <p>Submit questions anonymously — every response is strictly confidential and student-focused.</p>
            </div>

            <div className="highlight-item-card">
              <div className="highlight-bullet">04</div>
              <h4>Direct Email Dispatch</h4>
              <p>Comprehensive resolutions and category guidance are sent directly to your college email inbox.</p>
            </div>

            <div className="highlight-item-card">
              <div className="highlight-bullet">05</div>
              <h4>Interactive Analytics</h4>
              <p>Explore dynamic pie charts and distribution metrics to see common concerns across campus.</p>
            </div>

            <div className="highlight-item-card">
              <div className="highlight-bullet">06</div>
              <h4>Continuous Support</h4>
              <p>Committed to improving student experience through transparent communication and continuous portal updates.</p>
            </div>
          </div>
        </section>

        {/* Enhanced Features Cards Section */}
        <section className="features-section animate-entrance delay-3">
          <div className="feature-card">
            <div className="feature-top-bar"></div>
            <span className="feature-tag">Analytics</span>
            <h3>Real-Time Results</h3>
            <p>Instant analytics into trending queries and feedback visualised dynamically via Chart.js.</p>
          </div>
          <div className="feature-card">
            <div className="feature-top-bar"></div>
            <span className="feature-tag">Privacy</span>
            <h3>Anonymous & Safe</h3>
            <p>Voice your concerns freely without revealing identity. Strict confidentiality guaranteed.</p>
          </div>
          <div className="feature-card">
            <div className="feature-top-bar"></div>
            <span className="feature-tag">Guidance</span>
            <h3>Campus Life Focus</h3>
            <p>Feedback and resolution on canteen, hostel, academics, placements, and laboratories.</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
