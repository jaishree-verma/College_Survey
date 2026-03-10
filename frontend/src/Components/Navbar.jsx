import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>CollegeSurvey</h2>
      <div style={styles.links}>
        <Link to="/question" style={styles.link}>Question</Link>
        <Link to="/result" style={styles.link}>Result</Link>
        <Link to="/about-college-survey" style={styles.link}>About</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#007bff",
    color: "white"
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "1.5rem" },
  link: { color: "white", textDecoration: "none", fontWeight: "bold" }
};
