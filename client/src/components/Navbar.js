import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Connectwallet from "./Connectwallet"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <li className="wallet-display">
        <Connectwallet />
      </li>
    </nav>
  );
};

export default Navbar;
