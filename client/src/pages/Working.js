import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Working = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="navbar-section">
        <Navbar />
      </div>
      <div
        className="bg-cover bg-center px-32 py-20 bg-[#000] text-[#ffff] "
        style={{
          backgroundImage: `url('/images/landing-center.png')`,
          type: "image/png",
        }}
      >
        <h1 className="text-center text-4xl font-bold">
          Working of File Storage System
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-16 py-10 ">
          <div className="flex flex-row items-center justify-center py-16">
            <p className="text-lg">
              The process of storing an image on IPFS through Pinata involves
              three main steps. The first step is to upload the image file to
              the Pinata platform.This can be done through the Pinata web
              interface, an API endpoint, or through aPinata SDK if the user is
              integrating Pinata into a software application. Once the image is
              uploaded to Pinata, the user &quot;pins&quot; the file to the IPFS
              network. Pinning a file ensures that it is stored permanently on
              the IPFS network, and is accessible to anyone who has the
              file&apos;s hash. After the image is pinned, Pinata generates a
              hash value for the file. This hash value is a unique identifier
              that can be used to access the file on the IPFS network.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center py-8">
            <img
              src="/images/third-image-min.png"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-row  justify-center py-16">
            <img
              src="/images/second-image-min.png"
              className="w-full h-auto object-cover"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div className="flex flex-row items-center justify-center py-16">
            <p className="text-lg" data-aos="fade-up">
              The second step is to store the hash on the blockchain, along with
              any other relevant metadata. This allows the user to associate the
              image with a specific blockchain transaction, making it easier to
              verify the authenticity and ownership of the image. The hash can
              be stored on a public blockchain, such as Ethereum, or on a
              private blockchain, depending on the user's needs.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center py-16">
            <p className="text-lg" data-aos="fade-up">
              The final step is to access the image on the IPFS network. To do
              this, the user simply needs to provide the hash value to an IPFS
              client. This client can be a web browser with IPFS support, a
              command-line tool, or a software application that integrates with
              IPFS. Once the client receives the hash, it can retrieve the image
              from any node on the IPFS network that has a copy of the file.
              Since the IPFS network is decentralized, there is no single point
              of failure, making it a reliable and secure way to store and
              access files. Overall, using Pinata to store images on IPFS
              provides a permanent, reliable, and secure way to store and access
              files, with the added benefits of decentralization and blockchain
              integration.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center py-16">
            <img
              src="/images/first-image-min.png"
              className="w-full h-auto object-cover"
              alt=""
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Working;
