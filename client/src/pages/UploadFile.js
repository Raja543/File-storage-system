import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UploadFile = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover w-full min-h-screen  bg-[#121916] relative z-40 bg-center text-[#fff] p-28 flex flex-col items-center text-center"
        style={{
          backgroundImage: `url('/images/eclipse.png')`,
          type: "image/svg+xml",
        }}
      >
        <img
          src="/images/right-gradient-triangle.png"
          alt="symbol1"
          className="absolute top-8 right-12 "
          type="image/png"
        />
        <img
          src="/images/right-glass-triangle.svg"
          alt="symbol2"
          className="absolute top-40 right-40 "
          type="image/svg"
        />
        <img
          src="/images/gradient-triangle.svg"
          alt="symbol3"
          className="absolute bottom-32 left-20"
          type="image/svg"
        />
        <img
          src="/images/glass-triangle.svg"
          alt="symbol4"
          className="absolute bottom-40 left-32"
          type="image/svg"
        />
        <h1 className="text-5xl font-bold">Welcome</h1>
        <p className="text-xl py-4">
          Upload your files securely to our IPFS network
        </p>
        <div
          class="flex relative flex-col items-center justify-center cursor-pointer text-[#fff] m-4 bg-[#344d4d] border-4 border-dashed border-[#58d994] rounded-md w-[360px] h-[220px] p-4"
          onClick={() => document.getElementById("my-file").click()}
        >
          
          <img className="w-16" src="/icons/upload.png" alt="upload" />
          <label htmlFor="my-file" id="fileLabel" className="text-xl font-bold">
            Drop you files here
          </label>
          <input type="file" id="my-file" name="myfile" class="p-4 bg-[#fff]" />
        </div>

        <button className="bg-[#2e705a] text-white py-3 px-8 text-lg rounded-lg hover:bg-[#42997c] transition duration-300 ease-in-out ">
          Upload
        </button>
      </div>
      <Footer />
    </>
  );
};

export default UploadFile;

// bg-[#397e67]
