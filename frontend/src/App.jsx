// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import AboutCollegeSurvey from './pages/AboutCollegeSurvey.jsx';
// import Features from './pages/Features.jsx';
// import HowItWorks from './pages/HowItWorks.jsx';
// import FAQ from './pages/FAQ.jsx';
// import Footer from './pages/Footer.jsx';
// import Signup from './Components/Signup.jsx';
// import Login from './Components/Login.jsx';
// import VerifyOtp from './Components/VerifyOtp.jsx';
// import ForgotPassword from './Components/ForgotPassword.jsx';
// import ResetPassword from './Components/ResetPassword.jsx';
// import Dashboard from './Components/Dashboard.jsx';
// import AskAQuestion from './Components/AskAQuestion.jsx';
// import MySurveys from './Components/MySurveys.jsx';
// import Navbar from './Components/Navbar.jsx';
// import VisitAgain from './Components/VisitAgain.jsx';
// import Chatbot from './Chatbot'; // ✅ Floating chatbot

// export default function App() {
//   const location = useLocation();
//   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//   const hideNavbarRoutes = [
//     '/', // Landing page
//     '/login',
//     '/signup',
//     '/verify-otp',
//     '/forgot-password',
//     '/reset-password',
//     '/goodbye'
//   ];

//   const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

//   return (
//     <>
//       {/* ✅ Show navbar only when logged in and not on hidden routes */}
//       {!shouldHideNavbar && isLoggedIn && <Navbar />}

//       <Routes>
//         {/* Public Pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about-college-survey" element={<AboutCollegeSurvey />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/how-it-works" element={<HowItWorks />} />
//         <Route path="/faq" element={<FAQ />} />
//         <Route path="/footer" element={<Footer />} />

//         {/* Auth Pages */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/verify-otp" element={<VerifyOtp />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route path="/goodbye" element={<VisitAgain />} />

//         {/* Protected Pages */}
//         <Route
//           path="/dashboard"
//           element={
//             isLoggedIn ? (
//               <div style={{
//                 backgroundColor: '#ffffff',
//                 height: 'calc(100vh - 64px)',
//                 overflow: 'hidden',
//                 padding: '2rem',
//                 boxSizing: 'border-box'
//               }}>
//                 <Dashboard />
//               </div>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />

//         <Route
//           path="/ask"
//           element={
//             isLoggedIn ? (
//               <AskAQuestion />
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />

//         <Route
//           path="/my-surveys"
//           element={
//             isLoggedIn ? (
//               <MySurveys />
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Routes>

//       {/* ✅ Floating chatbot on landing page and when logged in */}
//       {(isLoggedIn || location.pathname === '/') && <Chatbot />}
//     </>
//   );
// }
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutCollegeSurvey from './pages/AboutCollegeSurvey.jsx';
import Features from './pages/Features.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import FAQ from './pages/FAQ.jsx';
import Footer from './pages/Footer.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import VerifyOtp from './Components/VerifyOtp.jsx';
import ForgotPassword from './Components/ForgotPassword.jsx';
import ResetPassword from './Components/ResetPassword.jsx';
import Dashboard from './Components/Dashboard.jsx';
import AskAQuestion from './Components/AskAQuestion.jsx';
import MySurveys from './Components/MySurveys.jsx';
import Navbar from './Components/Navbar.jsx';
import VisitAgain from './Components/VisitAgain.jsx';

export default function App() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const hideNavbarRoutes = [
    '/', // Landing page
    '/login',
    '/signup',
    '/verify-otp',
    '/forgot-password',
    '/reset-password',
    '/goodbye'
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* ✅ Show navbar only when logged in and not on hidden routes */}
      {!shouldHideNavbar && isLoggedIn && <Navbar />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-college-survey" element={<AboutCollegeSurvey />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/footer" element={<Footer />} />

        {/* Auth Pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/goodbye" element={<VisitAgain />} />

        {/* Protected Pages */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <div style={{
                backgroundColor: '#ffffff',
                height: 'calc(100vh - 64px)',
                overflow: 'hidden',
                padding: '2rem',
                boxSizing: 'border-box'
              }}>
                <Dashboard />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/ask"
          element={
            isLoggedIn ? (
              <AskAQuestion />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/my-surveys"
          element={
            isLoggedIn ? (
              <MySurveys />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
}
