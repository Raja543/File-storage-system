// // import React from "react";
// // import { NavLink } from "react-router-dom";
// // import "./Navbar.css";
// // import Connectwallet from "./Connectwallet";

// // const Navbar = () => {
// //   const checkboxToggle = document.getElementById('checkbox_toggle');
// //   checkboxToggle.addEventListener('change', function() {
// //     if (this.checked) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = 'visible';
// //     }
// //   });
// //   return (
// //     <nav className="navbar">
// //       <ul className="nav-list">
// //       <input type="checkbox" id="checkbox_toggle" />
// //       <label for="checkbox_toggle" className="hamburger">
// //         &#9776;
// //       </label>
// //         <li className="nav-item">
// //           <NavLink className="nav-link" exact to="/">
// //             SecureShareX
// //           </NavLink>
// //         </li>
// //         <li className="nav-item">
// //           <NavLink className="nav-link space" to="/about">
// //             Working
// //           </NavLink>
// //         </li>
// //         <li className="nav-item">
// //           <NavLink className="nav-link space" to="/accesslist">
// //             Allowlist
// //           </NavLink>
// //         </li>
// //         <li className="nav-item">
// //           <NavLink className="nav-link space" to="/contact">
// //             Contact
// //           </NavLink>
// //         </li>
// //       </ul>
// //       <li className="wallet-display">
// //         <Connectwallet />
// //       </li>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Connectwallet from "./Connectwallet";

// import "./Navbar.css";

// function Navbar() {
//   const [toggle, setToggle] = useState(false);

//   const checkboxToggle = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <nav className="navbar">
//       <ul className={`nav-list ${toggle ? "menu" : ""}`}>
//       <li className="nav-item">
//         <input type="checkbox" id="checkbox_toggle" onChange={checkboxToggle} />
//         <label htmlFor="checkbox_toggle" className="hamburger">
//           &#9776;
//         </label>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" exact to="/">
//             SecureShareX
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link space" to="/about">
//             Working
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link space" to="/accesslist">
//             Allowlist
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link space" to="/contact">
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//       <li className="wallet-display">
//         <Connectwallet />
//       </li>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleMenuClick = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Logo</div>
//       <div className={`navbar-menu ${showMenu ? "show" : ""}`}>
//         <ul>
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Services</a>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-toggle" onClick={handleMenuClick}>
//         <div className="toggle-line"></div>
//         <div className="toggle-line"></div>
//         <div className="toggle-line"></div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className={`navbar-menu ${showMenu ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
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