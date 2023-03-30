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
        <h1 className="hero-heading">Empowering File sharing</h1>
        <h1 className="hero-subheading">The Decentralized Approach</h1>
        <p className="hero__description">
          Decentralized file sharing projects utilize peer-to-peer networks and
          blockchain technology to enable users to share files without the need
          for a central authority. This approach represents a significant shift
          in the way we distribute information online, providing a more secure
          and equitable alternative to traditional file sharing systems.
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
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc
        </p>
        <div className="profile-card">
          <Card /> <Card /> <Card />
        </div>
      </div>

      <div className="footer-section">
        <div className="columns">
          <div className="column">
            <h2 className="column1-heading">ShareX</h2>
            <p className="column1-para">
              © 2023 Polyhedra Network. All rights reserved
            </p>
          </div>

          <div className="column">
            <h2>2nd Content Area</h2>
            <div className="social-icons">
              <Discordsvg />
              <Twittersvg />
              <Instagramsvg />
            </div>
          </div>

          <div className="column">
            <h2>3rd Content Area</h2>
            <p>Illo quod nemo ratione itaque dolores laudantium error vero</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herofirst;
