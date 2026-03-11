// import React from "react";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand"></div>
//       <div className="navbar-links">
//         <a href="/question"><button>Question</button></a>
//         <a href="/result"><button>Result</button></a>
//         <a href="/about"><button>About</button></a>
//       </div>
//     </nav>
//   );
// }
import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* <div className="navbar-brand">CollegeSurvey</div> */}

      <div className="navbar-links">
        <a href="/question"><button>Question</button></a>
        <a href="/result"><button>Result</button></a>
        <a href="/about"><button>About</button></a>
      </div>

      {/* Three-dot menu */}
      <div className="menu-container">
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#8942; {/* vertical ellipsis */}
        </button>
        {menuOpen && (
          <div className="dropdown">
            <a href="/">Home</a>
            <a href="/question">Query form</a>
            <a href="/result">Live result</a>
            <a href="/about">Contact us</a>
          </div>
        )}
      </div>
    </nav>
  );
}
