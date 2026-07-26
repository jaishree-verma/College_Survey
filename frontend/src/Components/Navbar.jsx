import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-badge">PSIT</div>
          <span className="brand-text">Major Query Survey</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-nav desktop-only">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/question" className={`nav-link ${isActive("/question") ? "active" : ""}`}>
            Ask Question
          </Link>
          <Link to="/result" className={`nav-link ${isActive("/result") ? "active" : ""}`}>
            Survey Results
          </Link>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About & Contact
          </Link>
        </div>

        {/* Right Actions: Dropdown & Mobile Hamburger */}
        <div className="navbar-actions">
          {/* Dropdown 3-dot menu */}
          <div className="menu-container">
            <button
              className="menu-button"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setMobileMenuOpen(false);
              }}
              aria-label="Toggle options menu"
            >
              &#8942;
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                <Link to="/" onClick={() => setMenuOpen(false)}>Home Portal</Link>
                <Link to="/question" onClick={() => setMenuOpen(false)}>Submit Query</Link>
                <Link to="/result" onClick={() => setMenuOpen(false)}>Live Analytics</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About & Contact</Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="hamburger-btn mobile-only"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setMenuOpen(false);
            }}
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-slide-down">
          <Link
            to="/"
            className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home Portal
          </Link>
          <Link
            to="/question"
            className={`mobile-nav-link ${isActive("/question") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Ask a Question
          </Link>
          <Link
            to="/result"
            className={`mobile-nav-link ${isActive("/result") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Live Survey Results
          </Link>
          <Link
            to="/about"
            className={`mobile-nav-link ${isActive("/about") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About & Contact
          </Link>
        </div>
      )}
    </header>
  );
}
