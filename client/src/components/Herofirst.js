import React from "react";
import { Link } from "react-router-dom";
import "./Herofirst.css";
import "./Secondpage";
import Card from "./Profilecard";
import Discordsvg from "./Discordsvg";
import Twittersvg from "./Twittersvg";
import Instagramsvg from "./Instagramsvg";
import Animation1 from "./Animation1";

const Herofirst = () => {
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
        <h2 className="animate-heading">What is SecureShareX ?</h2>
        <p className="animate-para">
          SecureShareX is building the next generation of infrastructure for
          Web3 interoperability, scalability, and privacy through advanced
          Zero-knowledge proof (ZKP) technology. Polyhedra Network provides
          trust-minimized and highly-efficient interoperability solutions for
          asset transfers, message passing, and data sharing between various
          Web2 and Web3 systems.
        </p>
      </div>

      {/* Product section */}
      <div className="product-section">
        <div className="right-image">
          <Animation1 />
        </div>
        <h2 className="product-head">ZK Full Stack for web3</h2>
        <div className="product-detail">
          <div className="Para-1">
            <h3 className="para1-heading">Interoperability</h3>
            <p className="para1-detail">
              Polyhedra Network implements infrastructures for Web3
              interoperability across heterogeneous systems which guarantee
              strong security without extra trust assumptions.
            </p>
          </div>
          <hr className="my-hr" />
          <div className="Para-2">
            <h3 className="para2-heading">Scalability</h3>
            <p className="para2-detail">
              Polyhedra Network designs and develops scalable and efficient
              zero-knowledge proof protocols for large-scale ZKP systems with
              distributed computing networks.
            </p>
          </div>
          <hr className="my-hr" />
          <div className="Para-3">
            <h3 className="para3-heading">Fine-grained Privacy</h3>
            <p className="para3-detail">
              Polyhedra Network provides fine-grained privacy extensions for
              Web3 with stealth address models, meeting both privacy-preserving
              needs and compliance policies.
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
};

export default Herofirst;
