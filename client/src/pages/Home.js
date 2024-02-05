import React from "react";
import "./Firstpage.css";
import "./Secondpage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Joinus from "../components/Joinus";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* hero section */}
      {/* <div className="relative w-full h-[100vh]">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/videos/first.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full px-20 flex flex-col items-center text-center justify-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold py-4 mt-[-50px]">
            Innovate Your File Storage with Decentralization
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-4xl py-3">
            Your Data, Your Control
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl py-4">
            Join the movement towards a more decentralized web, where users own
            and control their data, and where censorship and surveillance are a
            thing of the past.
          </p>
          <HashLink smooth to="/secondpage">
            <button className="py-4 px-6 button-bg my-4 text-xl text-[#000] rounded-xl">
              Click here to Upload the file
            </button>
          </HashLink>
        </div>
      </div> */}
    <div className="relative w-full h-screen">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/videos/first.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full px-20 flex flex-col items-center text-center justify-center text-white">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold py-4 mt-[-50px]">
          Innovate Your File Storage with Decentralization
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-4xl py-3">
          Your Data, Your Control
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl max-w-4xl py-4">
          Join the movement towards a more decentralized web, where users own
          and control their data, and where censorship and surveillance are a
          thing of the past.
        </p>
        <HashLink smooth to="/secondpage">
          <button className="py-4 px-6 button-bg my-4 text-xl text-[#000] rounded-xl">
            Click here to Upload the file
          </button>
        </HashLink>
      </div>
    </div>

      <Benefits />
      <Features />
      <Joinus />
      <Footer />
    </>
  );
};

export default Home;
