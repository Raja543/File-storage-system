import React from "react";
import "./Profilecard.css";

const Card = () => {
  return (
    <>
      <div className="card-container">
        <img
          className="round"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="user"
        />
        <h3>Raja Kumar</h3>
        <h6>India</h6>
        <p>
          User interface designer and <br /> front-end developer
        </p>
      </div>
    </>
  );
};

export default Card;
