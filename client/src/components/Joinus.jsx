import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { HashLink } from "react-router-hash-link";

const Joinus = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="px-32 py-20 flex flex-col items-center justify-center text-[#fff] bg-[#121916]">
      <h1 className="text-7xl font-bold" data-aos="fade-up">
        Join Our Community!
      </h1>
      <p className="text-[#dcdcdc] text-2xl py-3" data-aos="fade-up">
        Help us on our quest to make this product even better.
      </p>
      <div className="use-btn landing-btn">
        <HashLink to="">
          <button className="bg-[#00ffa8] text-[#000] py-3 px-6 my-4 text-xl rounded-lg">
            Join Us
          </button>
        </HashLink>
      </div>
      <img
        className="w-3/4 h-full py-8"
        src="/specialimages/map.png"
        alt=""
        data-aos="zoom-in"
      />
    </div>
  );
};

export default Joinus;
