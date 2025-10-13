// import React, { useState } from 'react';
// import './AskAQuestion.css';

// export default function AskAQuestion() {
//   const featuredQuestions = [
//     'How do I apply for scholarships?',
//     'What is the admission process?',
//     'Are there placement opportunities?',
//     'What are the hostel facilities like?',
//     'Can I change my course after admission?',
//   ];

//   const dropdownQuestions = [
//     'What documents are required for admission?',
//     'Is there a sports quota?',
//     'How do I get my student ID?',
//     'What is the fee structure?',
//     'Are there any student clubs?',
//     'How do I contact the admin office?',
//     'Can I defer my admission?',
//     'What is the refund policy?',
//     'Are internships mandatory?',
//     'How do I access the library?',
//     'Is there a dress code?',
//     'Can I apply for multiple courses?',
//     'What is the attendance policy?',
//     'Are there online classes?',
//     'How do I reset my portal password?',
//   ];

//   const [selectedQuestion, setSelectedQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [input, setInput] = useState('');

//   const handleDropdownSelect = (e) => {
//     const question = e.target.value;
//     setSelectedQuestion(question);
//     setAnswer(`Answer for: "${question}" — This is a helpful response from CollegeSurvey.`);
//   };

//   const handleAsk = () => {
//     if (!input.trim()) return;
//     setAnswer(`You asked: "${input}". Here's a helpful response.`);
//     setInput('');
//   };

//   return (
//     <div className="ask-page">
//       <h1><u><i>Featured Questions</i></u></h1>
//       <ul className="featured-list">
//         {featuredQuestions.map((q, idx) => (
//           <li key={idx} onClick={() => handleDropdownSelect({ target: { value: q } })}>
//             {q}
//           </li>
//         ))}
//       </ul>

//       <div className="dropdown-section">
//         <label htmlFor="question-select">Choose a question:</label>
//         <select id="question-select" onChange={handleDropdownSelect} value={selectedQuestion}>
//           <option value="">-- Select a question --</option>
//           {dropdownQuestions.map((q, idx) => (
//             <option key={idx} value={q}>{q}</option>
//           ))}
//         </select>
//       </div>

//       {answer && <div className="answer-box">{answer}</div>}

//       <div className="ask-input-section">
//         <h2><u><i>Any questions / queries still in mind ?? - drop em down</i></u></h2>
//         <input
//           type="textbox"
//           placeholder="Type your question..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={handleAsk}>Ask</button>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import './AskAQuestion.css';


// export default function AskAQuestion() {
//   const featuredQuestions = [
//     'How do I apply for scholarships?',
//     'What is the admission process?',
//     'Are there placement opportunities?',
//     'What are the hostel facilities like?',
//     'Can I change my course after admission?',
//   ];

//   const dropdownQuestions = [
//     'What documents are required for admission?',
//     'Is there a sports quota?',
//     'How do I get my student ID?',
//     'What is the fee structure?',
//     'Are there any student clubs?',
//     'How do I contact the admin office?',
//     'Can I defer my admission?',
//     'What is the refund policy?',
//     'Are internships mandatory?',
    
    
    
//     'What is the attendance policy?',
    
//     'How do I reset my portal password?',
//   ];

//   const [selectedQuestion, setSelectedQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [input, setInput] = useState('');

//   const handleDropdownSelect = (e) => {
//     const question = e.target.value;
//     setSelectedQuestion(question);
//     setAnswer(`Answer for: "${question}" - This is a helpful response from CollegeSurvey.`);
//   };

//   const handleAsk = () => {
//     if (!input.trim()) return;
//     setAnswer(`You asked: "${input}". Here's a helpful response.`);
//     setInput('');
//   };

//   return (
//     <div className="ask-page">
//       <h1><u>Featured Questions</u></h1>

//       <ul className="featured-list">
//         {featuredQuestions.map((q, idx) => (
//           <li key={idx} onClick={() => handleDropdownSelect({ target: { value: q } })}>
//             {q}
//           </li>
//         ))}
//       </ul>

//       <div className="dropdown-section">
//         <label htmlFor="question-select">Choose a question:</label>
//         <select id="question-select" onChange={handleDropdownSelect} value={selectedQuestion}>
//           <option value="">-- Select a question --</option>
//           {dropdownQuestions.map((q, idx) => (
//             <option key={idx} value={q}>{q}</option>
//           ))}
//         </select>
//       </div>

//       {answer && <div className="answer-box">{answer}</div>}

//       <div className="ask-query-section">
//   <h2><u><i>Any questions / queries still in mind ??</i></u> - drop'em</h2>
//   <div className="query-box">
//     <input
//       type="text"
//       placeholder="Type your question..."
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//     />
//     <button onClick={handleAsk}>Ask</button>
//   </div>
// </div>

//     </div>
//   );
// }
import React, { useState } from 'react';
import './AskAQuestion.css';

export default function AskAQuestion() {
  const featuredQuestions = [
    'How do I apply for scholarships?',
    'What is the admission process?',
    'Are there placement opportunities?',
    'What are the hostel facilities like?',
    'Can I change my course after admission?',
  ];

  const dropdownQuestions = [
    'What documents are required for admission?',
    'Is there a sports quota?',
    'How do I get my student ID?',
    'What is the fee structure?',
    'Are there any student clubs?',
    'How do I contact the admin office?',
    'Can I defer my admission?',
    'What is the refund policy?',
    'Are internships mandatory?',
    'What is the attendance policy?',
    'How do I reset my portal password?',
  ];

  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [input, setInput] = useState('');

  const handleDropdownSelect = (e) => {
    const question = e.target.value;
    setSelectedQuestion(question);
    setAnswer(`Answer for: "${question}" — This is a helpful response from CollegeSurvey.`);
  };

  const handleAsk = () => {
    const cleanInput = input.trim();
    if (!cleanInput) return;
    setAnswer(`You asked: "${cleanInput}". Here's a helpful response.`);
    setInput('');
    setSelectedQuestion('');
  };

  return (
    <div className="ask-page">
      <h1><u>Featured Questions</u></h1>

      <ul className="featured-list">
        {featuredQuestions.map((q, idx) => (
          <li
            key={idx}
            className="featured-item"
            onClick={() => handleDropdownSelect({ target: { value: q } })}
          >
            {q}
          </li>
        ))}
      </ul>

      <div className="dropdown-section">
        <label htmlFor="question-select">Choose a question:</label>
        <select
          id="question-select"
          onChange={handleDropdownSelect}
          value={selectedQuestion}
        >
          <option value="">-- Select a question --</option>
          {dropdownQuestions.map((q, idx) => (
            <option key={idx} value={q}>{q}</option>
          ))}
        </select>
      </div>

      {answer && <div className="answer-box">{answer}</div>}

      <div className="ask-query-section">
        <h2><u><i>Any questions still in mind?</i></u> — drop 'em below</h2>
        <div className="query-box">
          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAsk}>Ask</button>
        </div>
      </div>
    </div>
  );
}
