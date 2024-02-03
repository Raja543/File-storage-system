import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useTable } from "react-table";

const MyFiles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      <div
        className="bg-cover w-full min-h-screen  bg-[#121916] relative z-40 bg-center text-[#fff] p-28 flex flex-col items-center"
        style={{
          backgroundImage: `url('/images/eclipse.png')`,
          type: "image/svg+xml",
        }}
      >
        <h1 className="text-5xl font-bold">My Files</h1>
        <p className="text-xl py-4">View and manage your uploaded files</p>

        <div className="flex items-center gap-4 p-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border-0 pl-10 outline-none rounded-lg w-[650px] placeholder:text-[#dededed8] bg-[#121916]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#368a6e] text-white py-2 px-4 text-md rounded-lg hover:bg-[#397e67] transition duration-300 ease-in-out">
            Filter
          </button>
          <button className="bg-[#368a6e] text-white py-2 px-4 text-md rounded-lg hover:bg-[#397e67] transition duration-300 ease-in-out">
            Sort
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyFiles;
