import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className={isHomePage ? "homePage_footer" : "otherPage_footer"}>
      <div className="container about">
        <h4>RENTIFY</h4>
        <p>Build Your Dream<br/>
        Stay In Your Dream</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="container connect">
        <h4>Connect with us</h4>
        <p>Phone: +91 9496180153</p>
        <p>
          <a href="https://github.com/HashimAyamon" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>© All Rights Reserved Hashim</p>
      </div>
    </footer>
  );
};

export default Footer;
