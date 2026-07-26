import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand column */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <span className="brand-badge">PSIT</span>
            <span className="brand-text">Major Query Survey</span>
          </div>
          <p className="footer-desc">
            Empowering students of Pranveer Singh Institute of Technology to voice concerns, get automated email guidance, and view live campus survey analytics.
          </p>
          <div className="college-tag">@PSIT-AIML Student Initiative</div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home Portal</Link></li>
            <li><Link to="/question">Submit Query</Link></li>
            <li><Link to="/result">Live Results</Link></li>
            <li><Link to="/about">About & Contact</Link></li>
          </ul>
        </div>

        {/* Survey Categories */}
        <div className="footer-col">
          <h4 className="footer-heading">Survey Categories</h4>
          <ul className="footer-links">
            <li><Link to="/question?cat=academics">Academics & Examinations</Link></li>
            <li><Link to="/question?cat=canteen">Canteen & Food Safety</Link></li>
            <li><Link to="/question?cat=hostel">Hostel Accommodation</Link></li>
            <li><Link to="/question?cat=infrastructure">Campus Infrastructure</Link></li>
          </ul>
        </div>

        {/* Contact & Campus Info */}
        <div className="footer-col">
          <h4 className="footer-heading">Campus Address</h4>
          <p className="footer-info">
            PSIT Kanpur Campus<br />
            NH-19, Kanpur - Agra Highway, Bhauti, Kanpur, UP - 209305
          </p>
          <p className="footer-info">
            Official Website: <a href="https://www.psit.ac.in/" target="_blank" rel="noopener noreferrer" className="psit-link">psit.ac.in</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PSIT Major Query Survey Portal | Developed by AIML Student for Student Welfare & Guidance</p>
      </div>
    </footer>
  );
}
