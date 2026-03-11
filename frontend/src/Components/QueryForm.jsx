// import "./QueryForm.css";

// export default function QueryForm() {
//   return (
//     <div className="query-wrapper">
//       {/* Left side image */}
//       <div className="query-image">
//   <img src="/SURVEY.png" alt="Survey Illustration" />
// </div>


//       {/* Right side form */}
//       <div className="query-container">
//         <h2 className="query-title">Ask a Question</h2>
//         <form className="query-form">
//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" required />

//           <label>Your Query</label>
//           <textarea placeholder="Type your query here..." required />

//           <button type="submit" style={{ color: "white" }}>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";
import "./QueryForm.css";

export default function QueryForm() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true); // show "processing" box immediately
    setMessage("");      // clear old message

    try {
      const res = await axios.post("http://localhost:5000/api/survey/send-query", {
        email,
        question
      });
      setMessage(res.data.message); // final backend response
    } catch (err) {
      setMessage("Error submitting query");
    } finally {
      setProcessing(false); // hide processing box once done
      setEmail("");
      setQuestion("");
    }
  };

  return (
    <div className="query-wrapper">
      {/* Left side image */}
      <div className="query-image">
        <img src="/SURVEY.png" alt="Survey Illustration" />
      </div>

      {/* Right side form */}
      <div className="query-container" style={{fontWeight:"bold"}}>
        <h2 className="query-title">Ask a Question</h2>
        <form className="query-form" onSubmit={handleSubmit}>
          <label >Email</label>
          <input
            type="email"
            style={{fontWeight:"bold"}}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Your Query</label>
          <textarea
          style={{fontWeight:"bold"}}
          
            placeholder="Type your query here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />

          <button type="submit" style={{ color: "white" }}>Submit</button>
        </form>

        {/* Show processing box while waiting */}
        {processing && (
          <div className="processing-box" style={{ marginTop: "18px", padding: "10px", backgroundColor: "#c1dcf5ff", borderRadius: "5px" }}>
            Queries processing might take time to respond.<br />
            Thank you for waiting - soon you will receive your response through mail.
          </div>
        )}

        {/* Show final backend message */}
        {message && <p className="query-message">{message}</p>}
      </div>
    </div>
  );
}
