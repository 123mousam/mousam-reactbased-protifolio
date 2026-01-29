import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-logo">
        <Link to="/" onClick={() => setOpen(false)}>
          K<span>Mousam</span>
        </Link>
      </div>

      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
        <Link to="/qualification" onClick={() => setOpen(false)}>Qualification</Link>
        <Link to="/project" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
