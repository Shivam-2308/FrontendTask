import React from "react";
import logo from "../images/logo.jpeg";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "15px",
        backgroundColor: "rgb(241, 242, 244)",
      }}
    >
      <div className="footer-section" style={{ width: "20%" }}>
        <h3>Milton</h3>
        <p>A short text explaining why my startup is so cool</p>
        <p>&copy; My super start-up</p>
      </div>

      <div className="footer-section" style={{ width: "10%" }}>
        <h3>Products</h3>
        <p>Features</p>
        <p>Testimonials</p>
        <p>Pricing</p>
        <p>FAQs</p>
      </div>

      <div className="footer-section" style={{ width: "10%" }}>
        <h3>Resources</h3>
        <p>Change log</p>
        <p>Help center</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>

      <div className="footer-section" style={{ width: "10%" }}>
        <h3>Other</h3>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Affiliation</p>
        <p>Press</p>
      </div>

      <div className="footer-section" style={{ width: "30%" }}>
        <h3>From the Blog</h3>
        <p>
          Mastering Your Schedule: Top Time Management Techniques for Balancing
          Work and Life
        </p>
        <p>Organizing Your Calendar for Enhanced Productivity and Focus</p>
        <p>
          The Power of Prioritization: Effective Strategies for Managing Your
          Time and Tasks
        </p>
        <p>
          Maximizing Your Minutes: Essential Tips for Streamlining Your Daily
          Routine and Calendar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
