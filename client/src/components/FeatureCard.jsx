import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FeatureCard = ({ image, title, description }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="flex flex-col p-6 bg-[#121916] text-[#fff] rounded-lg"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <img className="h-14 w-14 p-2" src={image} alt={title} />
      <h3 className="text-lg font-bold py-1 text-[#e3e3e3e3]">{title}</h3>
      <p className="text-left text-sm py-1 text-gray-400">{description}</p>
    </div>
  );
};
export default FeatureCard;
