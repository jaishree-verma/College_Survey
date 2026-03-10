import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">CollegeSurvey</div>
      <div className="navbar-links">
        <a href="/question">Question</a>
        <a href="/result">Result</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
