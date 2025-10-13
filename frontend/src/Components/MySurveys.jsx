// import React, { useState } from 'react';
// import './MySurveys.css';

// export default function MySurveys() {
//   const surveys = [
//     { title: 'Campus Facilities Feedback', status: 'Completed', date: 'Sep 10, 2025' },
//     { title: 'Course Satisfaction Survey', status: 'Pending', date: 'Sep 12, 2025' },
//     { title: 'Hostel Experience Review', status: 'In Progress', date: 'Sep 13, 2025' },
//     { title: 'Library Usage Survey', status: 'Completed', date: 'Sep 14, 2025' },
//     { title: 'Placement Feedback', status: 'Pending', date: 'Sep 15, 2025' },
//     { title: 'Cafeteria Review', status: 'Completed', date: 'Sep 16, 2025' },
//     { title: 'Transport Services Survey', status: 'In Progress', date: 'Sep 17, 2025' },
//     { title: 'Faculty Evaluation', status: 'Pending', date: 'Sep 18, 2025' },
//     { title: 'Admission Process Review', status: 'Completed', date: 'Sep 19, 2025' },
//     { title: 'Scholarship Awareness Survey', status: 'Pending', date: 'Sep 20, 2025' },
//     { title: 'Student Clubs Feedback', status: 'In Progress', date: 'Sep 21, 2025' },
//     { title: 'Exam Experience Survey', status: 'Completed', date: 'Sep 22, 2025' },
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="survey-page">
//       <h1><u>My Surveys</u></h1>
//       <div className="survey-grid">
//         {surveys.map((survey, idx) => (
//           <div
//             key={idx}
//             className="survey-box"
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             onClick={() => setHoveredIndex(idx)}
//           >
//             <h3>{survey.title}</h3>
//             {hoveredIndex === idx && (
//               <div className="survey-info">
//                 <p>Status: <strong>{survey.status}</strong></p>
//                 <p>Date: {survey.date}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import './MySurveys.css';

// export default function MySurveys() {
//   const surveys = [
//     { title: 'Campus Facilities Feedback', status: 'Completed', date: 'Sep 10, 2025' },
//     { title: 'Course Satisfaction Survey', status: 'Pending', date: 'Sep 12, 2025' },
//     { title: 'Hostel Experience Review', status: 'In Progress', date: 'Sep 13, 2025' },
//     { title: 'Library Usage Survey', status: 'Completed', date: 'Sep 14, 2025' },
//     { title: 'Placement Feedback', status: 'Pending', date: 'Sep 15, 2025' },
//     { title: 'Cafeteria Review', status: 'Completed', date: 'Sep 16, 2025' },
//     { title: 'Transport Services Survey', status: 'In Progress', date: 'Sep 17, 2025' },
//     { title: 'Faculty Evaluation', status: 'Pending', date: 'Sep 18, 2025' },
//     { title: 'Admission Process Review', status: 'Completed', date: 'Sep 19, 2025' },
//     { title: 'Scholarship Awareness Survey', status: 'Pending', date: 'Sep 20, 2025' },
//     { title: 'Student Clubs Feedback', status: 'In Progress', date: 'Sep 21, 2025' },
//     { title: 'Exam Experience Survey', status: 'Completed', date: 'Sep 22, 2025' },
//     { title: 'Login to College Survey', status: 'Completed', date: 'Sep 23, 2025' },
//     { title: 'Fill Your Question', status: 'Completed', date: 'Sep 24, 2025' },
//     { title: 'Ask Bot', status: 'Completed', date: 'Sep 25, 2025' },
//     { title: 'Completed College Survey', status: 'Completed', date: 'Sep 27, 2025' },
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="survey-page">
//       <h1><u>My Surveys</u></h1>
//       <div className="survey-grid">
//         {surveys.map((survey, idx) => (
//           <div
//             key={idx}
//             className="survey-box"
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             onClick={() => setHoveredIndex(idx)}
//           >
//             <h3>{survey.title}</h3>
//             {hoveredIndex === idx && (
//               <div className="survey-info">
//                 <p>Status: <strong>{survey.status}</strong></p>
//                 <p>Date: {survey.date}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import './MySurveys.css';

// export default function MySurveys() {
//   const surveys = [
//     { title: 'Campus Facilities Feedback', status: 'Completed', date: 'Sep 10, 2025' },
//     { title: 'Course Satisfaction Survey', status: 'Pending', date: 'Sep 12, 2025' },
//     { title: 'Hostel Experience Review', status: 'In Progress', date: 'Sep 13, 2025' },
//     { title: 'Library Usage Survey', status: 'Completed', date: 'Sep 14, 2025' },
//     { title: 'Placement Feedback', status: 'Pending', date: 'Sep 15, 2025' },
//     { title: 'Cafeteria Review', status: 'Completed', date: 'Sep 16, 2025' },
//     { title: 'Transport Services Survey', status: 'In Progress', date: 'Sep 17, 2025' },
//     { title: 'Faculty Evaluation', status: 'Pending', date: 'Sep 18, 2025' },
//     { title: 'Admission Process Review', status: 'Completed', date: 'Sep 19, 2025' },
//     { title: 'Scholarship Awareness Survey', status: 'Pending', date: 'Sep 20, 2025' },
//     { title: 'Student Clubs Feedback', status: 'In Progress', date: 'Sep 21, 2025' },
//     { title: 'Exam Experience Survey', status: 'Completed', date: 'Sep 22, 2025' },
//     { title: 'Login to College Survey', status: 'Completed', date: 'Sep 23, 2025' },
//     { title: 'Fill Your Question', status: 'Completed', date: 'Sep 24, 2025' },
//     { title: 'Ask Bot', status: 'Completed', date: 'Sep 25, 2025' },
//     { title: 'Completed College Survey', status: 'Completed', date: 'Sep 27, 2025' },
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [filter, setFilter] = useState('All');

//   const filteredSurveys = filter === 'All'
//     ? surveys
//     : surveys.filter(s => s.status === filter);

//   return (
//     <div className="survey-page">
//       <h1><u>My Surveys</u></h1>

//       {/* ✅ Filter Bar */}
//       <div className="filter-bar">
//         {['All', 'Completed', 'Pending', 'In Progress'].map((status) => (
//           <button
//             key={status}
//             className={`filter-btn ${filter === status ? 'active' : ''}`}
//             onClick={() => setFilter(status)}
//           >
//             {status}
//           </button>
//         ))}
//       </div>

//       {/* ✅ Survey Grid */}
//       <div className="survey-grid">
//         {filteredSurveys.map((survey, idx) => (
//           <div
//             key={idx}
//             className="survey-box"
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             onClick={() => setHoveredIndex(idx)}
//           >
//             <h3>{survey.title}</h3>
//             {hoveredIndex === idx && (
//               <div className="survey-info">
//                 <p>Status: <strong>{survey.status}</strong></p>
//                 <p>Date: {survey.date}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import './MySurveys.css';

export default function MySurveys() {
  const surveys = [
    { title: 'Campus Facilities Feedback', status: 'Completed', date: 'Sep 10, 2025' },
    { title: 'Course Satisfaction Survey', status: 'Pending', date: 'Sep 12, 2025' },
    { title: 'Hostel Experience Review', status: 'In Progress', date: 'Sep 13, 2025' },
    { title: 'Library Usage Survey', status: 'Completed', date: 'Sep 14, 2025' },
    { title: 'Placement Feedback', status: 'Pending', date: 'Sep 15, 2025' },
    { title: 'Cafeteria Review', status: 'Completed', date: 'Sep 16, 2025' },
    { title: 'Transport Services Survey', status: 'In Progress', date: 'Sep 17, 2025' },
    { title: 'Faculty Evaluation', status: 'Pending', date: 'Sep 18, 2025' },
    { title: 'Admission Process Review', status: 'Completed', date: 'Sep 19, 2025' },
    { title: 'Scholarship Awareness Survey', status: 'Pending', date: 'Sep 20, 2025' },
    { title: 'Student Clubs Feedback', status: 'In Progress', date: 'Sep 21, 2025' },
    { title: 'Exam Experience Survey', status: 'Completed', date: 'Sep 22, 2025' },
    { title: 'Login to College Survey', status: 'Completed', date: 'Sep 23, 2025' },
    { title: 'Fill Your Question', status: 'Completed', date: 'Sep 24, 2025' },
    { title: 'Ask Bot', status: 'Completed', date: 'Sep 25, 2025' },
    { title: 'Completed College Survey', status: 'Completed', date: 'Sep 27, 2025' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredSurveys = filter === 'All'
    ? surveys
    : surveys.filter(s => s.status === filter);

  return (
    <div className="survey-page">
      <h1 className="survey-heading"><u>My Surveys</u></h1>

      {/* ✅ Filter Bar */}
      <div className="filter-bar">
        {['All', 'Completed', 'Pending', 'In Progress'].map((status) => (
          <button
            key={status}
            className={`filter-btn ${filter === status ? 'active' : ''}`}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* ✅ Survey Grid */}
      <div className="survey-grid">
        {filteredSurveys.map((survey, idx) => (
          <div
            key={idx}
            className={`survey-box ${hoveredIndex === idx ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(idx)}
          >
            <h3>{survey.title}</h3>
            {hoveredIndex === idx && (
              <div className="survey-info">
                <p>Status: <strong>{survey.status}</strong></p>
                <p>Date: {survey.date}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
