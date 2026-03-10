import "./About.css";

export default function About() {
  return (
    <div className="about-wrapper">
      {/* Project name in a box */}
      <div className="about-header-box">
        <h1 className="about-title">PSIT Major Query Survey 
        </h1>
        <p className="about-subtitle">From handmade surveys to online surveys</p>
      </div>

      {/* About section */}
      <div className="about-section">
  <h2>What is College Survey?</h2>
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
  <h2>How can you use it?</h2>
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


      <div className="about-stats">
  <div className="stat-box">
    <img src="/up-arrow-icon.png" alt="Survey Responses Icon" className="stat-icon" />
    <h3><u>Total Survey Responses</u></h3>
    <p className="stat-number">0</p>
    <span className="stat-subtext">Responses Collected</span>
  </div>

  <div className="stat-box">
    <img src="/users-icon.png" alt="Site Visitors Icon" className="stat-icon" />
    <h3><u>Total Site Visits</u></h3>
    <p className="stat-number">0</p>
    <span className="stat-subtext">Unique Visitors</span>
  </div>
</div>


      {/* Contact form */}
      <div className="about-contact">
        <h2 style={{ color: '#007bff' }}>Contact Us</h2>
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="your.email@example.com" required />

          <label>Message</label>
          <textarea placeholder="Your message here..." required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
