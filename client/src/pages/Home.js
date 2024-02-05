import React from "react";
import "./Firstpage.css";
import "./Secondpage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Joinus from "../components/Joinus";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
      <Joinus />
      <Footer />
    </>
  );
};

export default Home;
