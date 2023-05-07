import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Connectwallet from "./Connectwallet";

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">SecureShareX</h3>
      <ul className={isMobile ? "nav-links-mobile active" : "nav-links"} onClick={() => isMobile(false)}>
        <Link to="/" className="item">
          <li>Home</li>
        </Link>
        <Link to="/working" className="item">
          <li>Working</li>
        </Link>
        <Link to="/accessList" className="item">
          <li>Allowlist</li>
          </Link>
        <Link className="about">
          <li><Connectwallet /></li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;


