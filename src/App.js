import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Redirect root to /about */}
        <Route path="/" element={<Navigate to="/about" />} />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;