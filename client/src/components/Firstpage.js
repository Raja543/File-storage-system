import React from "react";
import Herofirst from "./Herofirst";
import Navbar from "./Navbar";

const Firstpage = () => {
  return (
    <>
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="hero-section">
        <Herofirst />
      </div>
    </>
  );
};

export default Firstpage;
