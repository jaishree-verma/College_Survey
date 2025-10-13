// import React, { useState } from 'react';
// import './Dashboard.css';

// export default function Dashboard() {
//   const [question, setQuestion] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted question:', question);
//   };

//   return (
//     <div className="dashboard-wrapper">
//       <h1><u>Welcome to Your Account</u></h1>
//       <p><i>Ask your query below.</i></p>

//       <form className="dashboard-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Type your query here ...."
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <button type="submit">Submit your query.</button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [question, setQuestion] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanQuestion = (question || '').trim();

    if (!cleanQuestion) {
      setMessage('Please enter a valid query.');
      return;
    }

    console.log('Submitted question:', cleanQuestion);
    setMessage('Your query has been submitted!');
    setQuestion('');
  };

  return (
    <div className="dashboard-wrapper">
      <h1><u>Welcome to Your Account</u></h1>
      <p><i>Ask your query below.</i></p>

      <form className="dashboard-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your query here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Submit your query</button>
      </form>

      {message && <p className="dashboard-message">{message}</p>}
    </div>
  );
}
