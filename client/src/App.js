import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/Secondpage";
import AccessList from "./components/AccessList";
import "./App.css";
import Working from "./components/Working";

const App = () => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const connectToContract = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // await window.ethereum.enable();
        const signer = provider.getSigner();
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // replace with your contract address
        const abi = [{
          "inputs": [
            {
              "internalType": "address",
              "name": "_user",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            }
          ],
          "name": "add",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "allow",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "disallow",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_user",
              "type": "address"
            }
          ],
          "name": "display",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "shareAccess",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "access",
                  "type": "bool"
                }
              ],
              "internalType": "struct Upload.Access[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }]; // replace with your contract ABI
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
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Secondpage" element={<Secondpage />} />
        <Route
          path="/accesslist"
          element={<AccessList contract={contract} />}
        />
        <Route path="/Working" element={<Working/>} />
      </Routes>
    </>
  );
};

export default App;
