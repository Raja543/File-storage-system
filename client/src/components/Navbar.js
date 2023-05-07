import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";
import Connectwallet from "./Connectwallet";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
        setIsMobile(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <h3 className="logo">SecureShareX</h3>
      <ul className={isMobile ? "nav-links-mobile active" : "nav-links"} onClick={() => setIsMobile(false)}>
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


