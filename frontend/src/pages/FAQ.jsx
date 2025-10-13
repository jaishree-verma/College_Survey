// import { useState } from 'react';
// import styles from '../styles/FAQ.module.css';

// const faqs = [
//   { question: "What is College Survey?", answer: "It's a feedback platform for houses, prefects, and departments." },
//   { question: "Is it free to use?", answer: "Yes, it's free for students and internal campus use." },
//   { question: "Can I create custom surveys?", answer: "Absolutely - build your own or use templates." },
//   { question: "Are responses anonymous?", answer: "Yes, unless you choose to collect names." },
//   { question: "How are results shown?", answer: "Live dashboards show trends and sentiment instantly." },
//   { question: "Can I export results?", answer: "Yes, you can download reports in multiple formats." },
//   { question: "Is it mobile-friendly?", answer: "Totally - works smoothly on phones and tablets." },
//   { question: "Can admins edit surveys?", answer: "Yes, admins can update questions anytime." },
//   { question: "Is there a limit to responses?", answer: "No limit - collect as many as you need." },
//   { question: "How do I get support?", answer: "Click 'Ask the Bot' or email the support team." },
// ];

// export default function FAQ() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAnswer = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <section className={styles.faq} >
//       <h2 className={styles.heading}><u>Frequently Asked Questions</u></h2>
//       <div className={styles.grid}>
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
//             onClick={() => toggleAnswer(index)}
//             role="button"
//             tabIndex={0}
//             onKeyDown={(e) => e.key === 'Enter' && toggleAnswer(index)}
//           >
//             <h3>{faq.question}</h3>
//             <p>{faq.answer}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// src/components/FAQ.jsx
import { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const faqs = [
  { question: "What is College Survey?", answer: "It's a feedback platform for houses, prefects, and departments." },
  { question: "Is it free to use?", answer: "Yes, it's free for students and internal campus use." },
  { question: "Can I create custom surveys?", answer: "Absolutely - build your own or use templates." },
  { question: "Are responses anonymous?", answer: "Yes, unless you choose to collect names." },
  { question: "How are results shown?", answer: "Live dashboards show trends and sentiment instantly." },
  { question: "Can I export results?", answer: "Yes, you can download reports in multiple formats." },
  { question: "Is it mobile-friendly?", answer: "Totally - works smoothly on phones and tablets." },
  { question: "Can admins edit surveys?", answer: "Yes, admins can update questions anytime." },
  { question: "Is there a limit to responses?", answer: "No limit - collect as many as you need." },
  { question: "How do I get support?", answer: "Click 'Ask the Bot' or email the support team." },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={`container ${styles.faq}`} id="faq-section">
      <h2 className={styles.heading}><u>Frequently Asked Questions</u></h2>
      <div className={styles.grid}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleAnswer(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleAnswer(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3>{faq.question}</h3>
            <p id={`faq-answer-${index}`}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
