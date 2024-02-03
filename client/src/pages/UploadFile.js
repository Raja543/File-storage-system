import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Implement your file upload logic here
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      // Add your file upload logic here
    } else {
      console.log("No file selected");
    }
  };
  return (
    <>
      <Navbar />
      <div
        className="bg-cover w-full min-h-screen  bg-[#121916] relative z-40 bg-center text-[#fff] p-28 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url('/images/eclipse.png')`,
          type: "image/svg+xml",
        }}
      >
        <img src = "/images/right-gradient-triangle.png" alt="symbol1" className="absolute top-20 right-20 " type = "image/png" />
        <img src = "/images/right-glass-triangle.svg" alt="symbol2" className="absolute top-20 right-20 " type = "image/svg" />
        <img src = "/images/gradient-triangle.svg" alt="symbol3" className="absolute top-20 left-20 " type = "image/svg" />
        <img src = "/images/glass-triangle.svg" alt="symbol4" className="absolute top-20 left-20 " type = "image/svg" />
        <h1 className="text-5xl font-bold">Welcome</h1>
        <p className="text-xl py-4">
          Upload your files securely to our IPFS network
        </p>
        <div className="flex flex-col items-center mt-8 p-36 max-w-2xl">
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4 p-2 border-4 border-dashed border-[#ad356d] rounded-md"
          />
          <button
            onClick={handleUpload}
            className="bg-[#368a6e] text-white py-3 px-8 text-lg rounded-lg hover:bg-[#397e67] transition duration-300 ease-in-out "
          >
            Upload
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadFile;

// bg-[#397e67]
