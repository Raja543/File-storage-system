import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ethers } from "ethers";
import Home from "./pages/Home";
import Secondpage from "./pages/Secondpage";
import AccessList from "./pages/AllowList";
import Working from "./components/Working";
import UploadFile from "./pages/UploadFile";
import MyFiles from "./pages/MyFiles";

const App = () => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const connectToContract = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x3d2aAecF743e62C202F0Ef1189B7A49C65d038ed";
        const abi = [
          {
            inputs: [
              {
                internalType: "address",
                name: "_user",
                type: "address",
              },
              {
                internalType: "string",
                name: "url",
                type: "string",
              },
            ],
            name: "add",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
            ],
            name: "allow",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "index",
                type: "uint256",
              },
            ],
            name: "deleteUrl",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
            ],
            name: "disallow",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_user",
                type: "address",
              },
            ],
            name: "display",
            outputs: [
              {
                internalType: "string[]",
                name: "",
                type: "string[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "shareAccess",
            outputs: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "user",
                    type: "address",
                  },
                  {
                    internalType: "bool",
                    name: "access",
                    type: "bool",
                  },
                ],
                internalType: "struct Upload.Access[]",
                name: "",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ];
        const contractInstance = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );
        setContract(contractInstance);
      } catch (error) {
        console.error(error);
      }
    };

    connectToContract();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadFile />} />
          <Route path="/Secondpage" element={<Secondpage />} />
          <Route
            path="/myfiles"
            element={<MyFiles contract={contract} account={account} />}
          />
          <Route
            path="/allowlist"
            element={<AccessList contract={contract} />}
          />
          <Route path="/Working" element={<Working />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
