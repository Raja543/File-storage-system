import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import React from "react";
import { ethers } from "ethers";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "./Secondfile.css";
import FileUpload from "./FileUpload";
import Modal from "./Modal";
import Display from "./Display";

const Secondpage = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <>
      {/* Navbar section */}
      <div className="navbar-section">
        <Navbar />
      </div>

      {/* Main service section */}
      <div className="account-container">
        <p className="account-">
          Account : {account ? account : "Not connected"}
        </p>
      </div>
      <div className="file-container">
        <h4 className="file-heading">Image</h4>
        <p className="image-description">
          File types supported : JPG,PNG,SVG,GIF,MP4. Max size : 10MB
        </p>
        <div className="image-container">
          <p className="image-description"> drop your images here or browse</p>
          <FileUpload
            account={account}
            provider={provider}
            contract={contract}
          ></FileUpload>
        </div>
        {/* share button */}
        {!modalOpen && (
          <button className="share-button" onClick={() => setModalOpen(true)}>
            Share
          </button>
        )}
        {modalOpen && (
          <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
        )}

        {/* upload button */}
        {/* <button type="submit" className="upload-button " disabled={!file}>
          Upload File
        </button> */}
      </div>

      {/* File Check Section */}
      <div className="">
        <Display account={account} contract={contract}></Display>
      </div>

      <div className="contact">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-description">
          This is a decentralized image storage where we can store the image
          inside blockchain which helps to improve security , transparency,etc.
        </p>
        <div className="social-profile">hello</div>
      </div>
    </>
  );
};

export default Secondpage;
