import "./QueryForm.css";

export default function QueryForm() {
  return (
    <div className="query-wrapper">
      {/* Left side image */}
      <div className="query-image">
  <img src="/SURVEY.png" alt="Survey Illustration" />
</div>


      {/* Right side form */}
      <div className="query-container">
        <h2 className="query-title">Ask a Question</h2>
        <form className="query-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Your Query</label>
          <textarea placeholder="Type your query here..." required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
