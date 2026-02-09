import styles from '../styles/Home.module.css';
import surveyImage from '../assets/SurveyImage.png';
import AboutCollegeSurvey from '../pages/AboutCollegeSurvey.jsx'; // Correct import
import Features from '../pages/Features.jsx';
import HowItWorks from '../pages/HowItWorks.jsx';
import FAQ from '../pages/FAQ.jsx';
import Footer from '../pages/Footer.jsx';
export default function Home() {
  return (
    <main className="container">
      {/* Full-width header */}
      <header className={styles.header}>
        <h1 style={{color:'#006efe',fontSize: '50px'}}>College Survey</h1>

        <p>College Based Survey designed for students by a student to answer major queries faced during admission process. </p>
        <p>Ready to experience Smarter Surveys?</p>
      </header>

      {/* <hr className={styles.fulldivider} /> */}

      {/* Image section */}
      <div className={styles.imageWrap}>
        <img src={surveyImage} alt="AI Powered Survey" className={styles.surveyImage} />
      </div>
      <p className={styles.introText}>
        Please login or signup to continue .
      </p>
      {/* Auth section with dark background */}
      <section className={styles.authSection}>
        <div className={styles.buttons}>
          <button onClick={() => window.location.href = '/login'}>Login</button>
          <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
        </div>
      </section>

      {/* Scrollable About Section */}
      <AboutCollegeSurvey />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
