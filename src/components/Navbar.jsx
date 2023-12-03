import React, { useState } from "react";
import "../styles/Navbar.css"; // CSS file for styling
import logo from "../images/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        &nbsp;
        <span className="logo-name">Milton</span>
      </div>
      <div className={`links-container ${menuOpen ? "open" : ""}`}>
        <a href="#" className="nav-link">
          Features
        </a>
        <a href="#" className="nav-link">
          Testimonial
        </a>
        <a href="#" className="nav-link">
          Pricing
        </a>
        <a href="#" className="nav-link">
          FAQs
        </a>
        <a href="#" className="nav-link">
          Blog
        </a>
      </div>
      <div className={`buttons-container ${menuOpen ? "open" : ""}`}>
        <button className="login-button">Login</button>
        <button className="get-started-button">Get Started</button>
      </div>
      <div className="toggle-button" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
