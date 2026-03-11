import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import QueryForm from "./Components/QueryForm.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/HomePage.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<QueryForm />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
