import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import QueryForm from "./Components/QueryForm.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/question" element={<QueryForm />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about-college-survey" element={<About />} />
      </Routes>
    </>
  );
}
