import React from "react";
import "./HomePage.css";
import Footer from "../pages/Footer";
export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <h1 className="home-title">Welcome to PSIT Major Query Survey</h1>
         <p className="about-subtitle">What we offer ? and What it is exactly about ? </p>
         {/* Vision & Mission Section */}
<div className="vision-mission">
  <div className="vision-box">
    <h2>🌟 Vision</h2>
    <p>
      To create a transparent, student-driven platform that empowers voices,
      highlights concerns, and inspires meaningful improvements in campus life.
    </p>
  </div>
  <div className="mission-box">
    <h2>🎯 Mission</h2>
    <p>
      To collect, analyze, and share feedback in real-time, ensuring every student
      feels heard and every query contributes to building a better PSIT community.
    </p>
  </div>
</div>

       <div className="home-subtitle">
  <ul>
    <li>
      Designed to answer all major queries related to PSIT (college), including canteen, hostel, academics, placements, and more.
    </li>
    <li>
      Provides a platform for students to voice their concerns and get real-time insights into trending queries and feedback.
    </li>
    <li>
      Allows you to submit questions anonymously - everything is strictly confidential.
    </li>
    <li>
      Responses are delivered directly to your email, ensuring a safe space for honest feedback.
    </li>
    <li>
      Explore results to see what others are asking, which queries are most common, and stay informed about campus life.
    </li>
      <li>
      Response may get delayed due to high traffic, but we are working hard to ensure timely delivery of all responses.
    </li>
    <li>
      We are committed to improving the college experience by providing a platform for open communication and feedback.
    </li>
  </ul>
</div>

        <div className="hero-buttons">
          <a href="/question"><button>Drop your query</button></a>
          <a href="/result"><button>View Results</button></a>
          <a href="/about"><button>Learn More</button></a>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-box">
          <h3>📊 Real-Time Results</h3>
          <p>Instant insights into trending queries and feedback.</p>
        </div>
        <div className="feature-box">
          <h3>🔒 Anonymous & Safe</h3>
          <p>Voice your concerns freely without revealing identity.</p>
        </div>
        <div className="feature-box">
          <h3>🎓 Campus Life</h3>
          <p>Feedback on canteen, hostel, academics, placements, and more.</p>
        </div>
      </div>
       
       <Footer />
    </div>
  );
}
