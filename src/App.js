import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import Qualification from "./pages/Qualification/Qualification.jsx"
import Contact from "./pages/Contact/Contact.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
