import React from "react";
import { useEffect } from "react";
import FeatureCard from "./FeatureCard";
import Aos from "aos";
import "aos/dist/aos.css";

const featureData = [
  {
    title: "File Upload",
    description:
      "Securely upload files to the blockchain, ensuring tamper-proof storage. This feature guarantees the integrity and security of user data, providing a robust foundation for file storage.",
    image: "",
  },
  {
    title: "File Sharing",
    description:
      "Facilitate collaboration by sharing files with other users through the allowlist. By adding specific addresses, users grant controlled access to shared content, fostering efficient and secure information exchange.",
    image: "",
  },
  {
    title: "Direct Browser Access",
    description:
      "Enjoy seamless file access and viewing directly through a web browser. When connected to the same wallet, this convenient feature enhances user accessibility and streamlines the file viewing experience.",
    image: "",
  },
  {
    title: "Allowlist Management",
    description:
      "Take charge of shared file accessibility with ease. Users can effortlessly manage the allowlist by adding or removing addresses, maintaining complete control over who can view their shared files.",
    image: "",
  },
  {
    title: "Privacy and Security",
    description:
      "Ensure utmost privacy and security. Users can disallow specific addresses from accessing their files, reinforcing control over shared content and safeguarding sensitive information.",
    image: "",
  },
  {
    title: "File Deletion",
    description:
      "Users can now delete their uploaded files, offering an additional layer of control and privacy. This feature empowers users to manage their stored content efficiently, ensuring a secure and customizable user experience.",
    image: "",
  },
];

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="bg-cover bg-center px-16 py-20 text-[#fff]"
      style={{ backgroundImage: `url('/Specialimages/landing-center.png')` }}
    >
      <h1
        className="text-xl md:text-2xl lg:text-4xl font-bold py-4"
        data-aos="zoom-in"
      >
        What we are offering
      </h1>
      <h2
        className="text-md md:text-lg text-gray-300 lg:text-xl "
        data-aos="zoom-in"
      >
        Discover the Power of SecureShareX: Unlocking Effortless Control and
        Privacy.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
