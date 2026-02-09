// // src/components/About.jsx
// import styles from '../styles/AboutCollegeSurvey.module.css';

// export default function About() {
//   return (
//     <section  id="about-section" className={styles.about} >
//       <h2><u><strong>About College Survey</strong></u></h2>
//       <p className={styles.intro}>
//         College Survey is a modern, AI-powered feedback platform designed to help institutions truly understand their students. Here's what makes it stand out:
//       </p>
//       <ul className={styles.points}>
//         <li><strong><u>AI-Driven Insights:</u></strong> Instantly analyzes student feedback to uncover trends and actionable data.</li>
//         <li><strong><u>Student-Centered Design:</u></strong> Built with empathy and ease-of-use to make surveys feel engaging, not exhausting.</li>
//         <li><strong><u>Fast & Responsive:</u></strong> Mobile-first, lightning-fast forms that adapt to any device.</li>
//         <li><strong><u>Customizable Surveys:</u></strong> Tailor questions to fit departments, events, or branding needs.</li>
//         <li><strong><u>Real-Time Dashboards:</u></strong> Visualize feedback instantly with charts, sentiment scores, and trends.</li>
//         <li><strong><u>Anonymous & Secure:</u></strong> Prioritizes privacy with encrypted responses and optional anonymity.</li>
        
//         <li><strong><u>Inclusive & Accessible:</u></strong> Designed for all users - screen reader support, keyboard navigation, and high contrast modes.</li>
//         <li><strong><u>Feedback Loop Ready:</u></strong> Encourages continuous improvement based on real student needs.</li>
//         <li><strong><u>Built for Action:</u></strong> Goes beyond data collection - helps colleges take meaningful steps forward.</li>
//       </ul>
//     </section>
//   );
// }
import styles from '../styles/AboutCollegeSurvey.module.css';

export default function AboutCollegeSurvey() {
  return (
    <section className={`container ${styles.about}`} id="about-college-survey">
      <h2><u><strong>About College Survey</strong></u></h2>
      <p className={styles.intro}>
        College Survey is a modern, feedback platform designed to help institutions truly understand their students. Here's what makes it stand out:
      </p>
      <ul className={styles.points}>
        <li><strong><u>AI-Driven Insights:</u></strong> Instantly analyzes student feedback to uncover trends and actionable data.</li>
        <li><strong><u>Student-Centered Design:</u></strong> Built with empathy and ease-of-use to make surveys feel engaging, not exhausting.</li>
        <li><strong><u>Fast & Responsive:</u></strong> Mobile-first, lightning-fast forms that adapt to any device.</li>
        <li><strong><u>Customizable Surveys:</u></strong> Tailor questions to fit departments, events, or branding needs.</li>
        <li><strong><u>Real-Time Dashboards:</u></strong> Visualize feedback instantly with charts, sentiment scores, and trends.</li>
        <li><strong><u>Anonymous & Secure:</u></strong> Prioritizes privacy with encrypted responses and optional anonymity.</li>
        <li><strong><u>Inclusive & Accessible:</u></strong> Designed for all users - screen reader support, keyboard navigation, and high contrast modes.</li>
        <li><strong><u>Feedback Loop Ready:</u></strong> Encourages continuous improvement based on real student needs.</li>
        <li><strong><u>Built for Action:</u></strong> Goes beyond data collection - helps colleges take meaningful steps forward.</li>
      </ul>
    </section>
  );
}
