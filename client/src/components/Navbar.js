import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Connectwallet from "./Connectwallet";

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">SecureShareX</h3>
      <ul className={isMobile ? "nav-links-mobile active" : "nav-links"} onClick={() => setIsMobile(false)}>
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/working" className="working">
          <li>Working</li>
        </Link>
        <Link to="/accessList" className="allowlist">
          <li>Allowlist</li>
          </Link>
        <Link className="about">
          <li><Connectwallet /></li>
        </Link>
      </ul>
      {/* <li className="wallet-display"><Connectwallet /></li> */}
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
