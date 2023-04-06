import React from "react";
import { Link } from "react-router-dom";
import "./Herofirst.css";
import "./Secondpage";
import Card from "./Profilecard";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";
import Animation1 from "./Animation1";

function Herofirst() {
  return (
    <>
      <div className="hero">
        <div className="bg-animate">
          <h1 className="hero-heading">
            Revolutionize Your File Storage with Decentralization
          </h1>
          <h1 className="hero-subheading"> Your Data, Your Control</h1>
          <p className="hero__description">
            Join the movement towards a more decentralized web, where users own
            and control their data, and where censorship and surveillance are a
            thing of the past.
          </p>
          <button className="hero-button">
            <Link className="hero-button-text" to="/secondpage">
              Click here to Upload the file
            </Link>
          </button>
        </div>
      </div>
      {/* aninate section */}
      <div className="animate-section">
        <div className="lineUp">
          <h2 className="animate-heading">What is SecureShareX ?</h2>
        </div>

        <p className="animate-para">
          SecureShareX is a decentralized file storage system that uses
          blockchain technology to ensure secure and transparent data storage
          and retrieval. Users have complete control over their data and can
          share it with others using advanced encryption and access control
          mechanisms. It provides a secure and reliable platform for users to
          store and share files without compromising privacy or security. With
          SecureShareX, data management becomes decentralized and transparent, a
          revolutionary alternative to traditional centralized file storage
          systems.
        </p>
      </div>

      {/* Product section */}
      <div className="product-section">
        <h2 className="product-head">
          Benefits of Blockchain-based File Storage
        </h2>
        <div className="right-image">
          <Animation1 />
        </div>
        <div className="product-detail">
          <div className="Para-1">
            <h3 className="para1-heading">Immutability</h3>
            <p className="para1-detail">
              The blockchain provides a tamper-proof and immutable record of the
              file. Once a file is stored on the blockchain, it cannot be
              altered or deleted, ensuring the integrity of the data.
            </p>
          </div>
          <hr className="my-hr" />
          <div className="Para-2">
            <h3 className="para2-heading">Decentralization</h3>
            <p className="para2-detail">
              The file is stored on a decentralized network of computers,
              meaning that there is no single point of failure or control. This
              ensures that the file remains accessible and secure even if one or
              more nodes fail.
            </p>
          </div>
          <hr className="my-hr" />
          <div className="Para-3">
            <h3 className="para3-heading">Transparency</h3>
            <p className="para3-detail">
              All transactions on the blockchain are transparent and publicly
              visible. This means that anyone can view the transaction history
              of the file and verify its authenticity, providing a high level of
              trust and accountability.
            </p>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="about">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          At SecureShareX, we believe that data ownership and privacy are
          fundamental rights that should be protected in the digital age. That's
          why we've created a decentralized file storage system that puts you in
          control of your data. Our team of experienced developers and
          blockchain experts have designed a secure, decentralized network that
          allows you to store and access your files from anywhere, without
          relying on a central authority. By using blockchain technology, we
          ensure that your data is encrypted, tamper-proof, and always
          available, even in the face of network outages or attacks.
        </p>
        <div className="profile-card">
          <Card /> <Card /> <Card />
        </div>
      </div>

      <div className="footer-section">
        <div className="columns">
          <div className="column">
            <h2 className="column1-heading">SecureShareX</h2>
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
}

export default Herofirst;
