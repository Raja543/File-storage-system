import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Connectwallet from "./Connectwallet";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">SecureShareX</div>
      <div className={`navbar-menu ${showMenu ? "show" : ""}`}>
        <ul>
          <li className="nav-item">
            <NavLink className="nav-link space" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link space" to="/about">
              Working
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link space" to="/accesslist">
              Allowlist
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link space" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <li className="wallet-display">
          <Connectwallet />
        </li>
      </div>
      <div className="navbar-toggle" onClick={handleMenuClick}>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
