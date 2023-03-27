import React from "react";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/Secondpage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Secondpage" element={<Secondpage />} />   
      </Routes>
    </>
  );
};

export default App;
