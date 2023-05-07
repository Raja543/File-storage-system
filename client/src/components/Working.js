import React from "react";
import Navbar from "./Navbar";
import "./Working.css";
import image1 from "./images/first-image-min.png";
import image2 from "./images/second-image-min.png";
import image3 from "./images/third-image-min.png";


const Working = () => {
    return (
        <div>
            <div className="navbar-section">
                <Navbar />
            </div>
            <div className="first-section">
                <h1 className="Work-heading">Working of File Storage System</h1>
                <p className="first-para">
                    The process of storing an image on IPFS through Pinata involves three main steps.
                    The first step is to upload the image file to the Pinata platform.This can be done
                    through the Pinata web interface, an API endpoint, or through aPinata SDK if the user
                    is integrating Pinata into a software application. Once the image is uploaded to Pinata,
                    the user "pins" the file to the IPFS network. Pinning a file ensures that it is stored
                    permanently on the IPFS network, and is accessible to anyone who has the file's hash.
                    After the image is pinned, Pinata generates a hash value for the file. This hash value
                    is a unique identifier that can be used to access the file on the IPFS network.
                </p>
                <div className="right-image">
                    <img src={image1} alt="first-image" />
                </div>
            </div>
            <div className="second-section"></div>
            <p className="first-para">
                The second step is to store the hash on the blockchain, along with any other relevant
                metadata. This allows the user to associate the image with a specific blockchain
                transaction, making it easier to verify the authenticity and ownership of the image.
                The hash can be stored on a public blockchain, such as Ethereum, or on a private
                blockchain, depending on the user's needs.
            </p>
            <div className="right-image">
                <img src={image2} alt="first-image" />
            </div>
            <div className="third-section"></div>
            <p className="first-para">
                The final step is to access the image on the IPFS network. To do this, the user simply needs to
                provide the hash value to an IPFS client. This client can be a web browser with IPFS support, a
                command-line tool, or a software application that integrates with IPFS. Once the client receives
                the hash, it can retrieve the image from any node on the IPFS network that has a copy of the file.
                Since the IPFS network is decentralized, there is no single point of failure, making it a reliable
                and secure way to store and access files. Overall, using Pinata to store images on IPFS provides
                a permanent, reliable, and secure way to store and access files, with the added benefits of
                decentralization and blockchain integration.
            </p>
            <div className="right-image">
                <img src={image3} alt="first-image"></img>
            </div>
        </div>
    )
}

export default Working;