import React from "react";
import { Link } from "react-router-dom";
import "./Herofirst.css";
import "./Secondpage";
import Card from "./Profilecard";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";

const Herofirst = () => {
  return (
    <>
      <div className="hero">
        <h1 className="hero-heading">
          Revolutionize Your File Storage with Decentralization
        </h1>
        <h1 className="hero-subheading"> Your Data, Your Control</h1>
        <p className="hero__description">
          Join the movement towards a more decentralized web, where users own
          and control their data, and where censorship and surveillance are a
          thing of the past.
        </p>
        <button className="service-button">
          <Link className="service-button-text" to="/secondpage">
            Click here to Upload the file
          </Link>
        </button>
      </div>

      {/* About section */}
      <div className="about">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          At SecureShareX, we believe that data ownership and privacy are
          fundamental rights that should be protected in the digital age. That's
          why we've created a decentralized file storage system that puts you in
          control of your data.<br></br>
          Our team of experienced developers and blockchain experts have
          designed a secure, decentralized network that allows you to store and
          access your files from anywhere, without relying on a central
          authority. By using blockchain technology, we ensure that your data is
          encrypted, tamper-proof, and always available, even in the face of
          network outages or attacks.
        </p>
        <div className="profile-card">
          <Card /> <Card /> <Card />
        </div>
      </div>

      <div className="footer-section">
        <div className="columns">
          <div className="column">
            <h2 className="column1-heading">Secure ShareX</h2>
            <p className="column1-para">
              © 2023 Secure ShareX. All rights reserved
            </p>
          </div>

          <div className="column">
            <h2 className="column2-text">Get involved</h2>
            <div className="social-icons">
              <Discordsvg />
              <Twittersvg />
              <Instagramsvg />
            </div>
          </div>

          <div className="column">
            <h2 className="Colum3-heading">Contact Us</h2>
            <p className="Column3-text">SecureShareX@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herofirst;
