// import styles from '../styles/Footer.module.css';

// export default function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.columns}>
//         <div className={styles.column}>
//           <h4><u>About</u></h4>
//           <ul>
//             <li><a href="/about">Intro</a></li>
//             <li><a href="/team">Vision</a></li>
//             <li><a href="/mission">Mission</a></li>
//             <li><a href="/careers">Careers</a></li>
//             <li><a href="/contact">Contact Us</a></li>
//           </ul>
//         </div>
//         <div className={styles.column}>
//           <h4><u>Info</u></h4>
//           <ul>
//             <li><a href="/faq">FAQs</a></li>
//             <li><a href="/privacy">Privacy Policy</a></li>
//             <li><a href="/terms">Terms of Use</a></li>
//             <li><a href="/support">Support</a></li>
//             <li><a href="/feedback">Give Feedback</a></li>
//           </ul>
//         </div>
//       </div>
//       <div className={styles.reserved}>
//         © 2025 College Survey. All rights reserved.
//       </div>
//     </footer>
//   );
// }
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.columns}>
          <div className={styles.column}>
            <h4><u>About</u></h4>
            <ul>
              <li><a href="/about">Intro</a></li>
              <li><a href="/team">Vision</a></li>
              <li><a href="/mission">Mission</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4><u>Info</u></h4>
            <ul>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Use</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/feedback">Give Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.reserved}>
          © 2025 College Survey. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
