// import styles from '../styles/HowItWorks.module.css';

// export default function HowItWorks() {
//   return (
//     <section className={styles.how}>
//       <h2 className={styles.heading}><u>How It Works ?</u></h2>
      
//       <div className={styles.grid}>
//         <div className={styles.card}>
//           <h3> Step 1: Choose a Survey</h3>
//           <p>Select from templates or create your own for teams or departments.</p>
//         </div>
//         <div className={styles.card}>
//           <h3> Step 2: Answer Smart Questions</h3>
//           <p>Questions are styled based on science to keep respondents engaged and focused.</p>
//         </div>
//         <div className={styles.card}>
//           <h3> Step 3: Submit Instantly</h3>
//           <p>Users get immediate feedback - no delays, no confusion.</p>
//         </div>
//         <div className={styles.card}>
//           <h3> Step 4: View Results</h3>
//           <p>Admins see live dashboards with trends and sentiment analysis.</p>
//         </div>
//         <div className={styles.card}>
//           <h3> Step 5: Take Action</h3>
//           <p>Use insights to make informed decisions and improve team performance.</p>
//         </div>
//         <div className={styles.card}>
//           <h3> Step 6: Archive & Share</h3>
//           <p>Download reports or share results with stakeholders for transparency.</p>
//         </div>
//       </div>

//       <div className={styles.botBox}>
//         <h3>🤖 Need Help?</h3>
//         <p>Ask our friendly bot anything about surveys, results, or setup!</p>
//         <button className={styles.botButton} onClick={() => alert('Bot chat coming soon!')}>Ask the Bot</button>
//       </div>
//     </section>
//   );
// }
import styles from '../styles/HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={`container ${styles.how}`} id="how-it-works">
      <h2 className={styles.heading}><u>How It Works?</u></h2>

      <div className={styles.grid}>
        {[
          {
            step: 'Step 1: Choose a Survey',
            desc: 'Select from templates or create your own for teams or departments.'
          },
          {
            step: 'Step 2: Answer Smart Questions',
            desc: 'Questions are styled based on science to keep respondents engaged and focused.'
          },
          {
            step: 'Step 3: Submit Instantly',
            desc: 'Users get immediate feedback - no delays, no confusion.'
          },
          {
            step: 'Step 4: View Results',
            desc: 'Admins see live dashboards with trends and sentiment analysis.'
          },
          {
            step: 'Step 5: Take Action',
            desc: 'Use insights to make informed decisions and improve team performance.'
          },
          {
            step: 'Step 6: Archive & Share',
            desc: 'Download reports or share results with stakeholders for transparency.'
          }
        ].map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.step}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* <div className={styles.botBox}>
        <h3>🤖 Need Help?</h3>
        <p>Ask our friendly bot anything about surveys, results, or setup!</p>
        <button
          className={styles.botButton}
          onClick={() => alert('Bot chat coming soon!')}
          aria-label="Ask the Bot"
        >
          Ask the Bot
        </button>
      </div> */}
    </section>
  );
}
