import React from "react";
import { Link } from "react-router-dom";
import "./Herofirst.css";
import "./Secondpage";
import firstimage from "./images/firstimage.jpeg";
import Card from "./Profilecard";

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
        <div className="right">
          <img src={firstimage} height={350} width={420} alt="firstimage"></img>
        </div>
      </div>

      {/* Services section */}
      <div className="service">
        <h2 className="services-heading">Services</h2>
        <p className="services-mainbrief">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id Lorem ipsum odor amet, consectetuer
          adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
          elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi
          ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida
          porttitor eros feugiat. Mollis elit sodales taciti duis praesent id
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

      {/* Contact-section */}
      <div className="contact">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-description">
          This is a decentralized image storage where we can store the image
          inside blockchain which helps to improve security , transparency,etc.
        </p>
        <div className="social-profile">
          <p>MY name is raja</p>
        </div>
      </div>
    </>
  );
};

export default Herofirst;
