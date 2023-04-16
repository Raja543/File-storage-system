import React from "react";
import Lottie from "react-lottie";
import animationData from "./Animations/65396-secure-blockchain.json";

const Animation1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions}  />
    </div>
  );
};

export default Animation1;