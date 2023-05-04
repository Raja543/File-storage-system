import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const [imageUrl, setImageUrl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
  
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `4d9e2d5c3d861a75209c`,
            pinata_secret_api_key: `d6eb128460bddf184df549bd494ccb999a09f723ea14a53ca3c1d50ad5af7383`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        const signer = contract.connect(provider.getSigner());
        signer.add(account, ImgHash);
        setFileName("No image selected");
        setImageUrl(null);
        // Show the icon and paragraph
        const label = document.getElementById("fileLabel");
        label.innerHTML = '<i class="fas fa-cloud-upload-alt"></i>';
        document.getElementById("upload-para").style.display = "block";
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFile(null);
  };
  
  

  const retrieveFile = (e) => {
    const input = e.target;
    const label = document.getElementById("fileLabel");
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      setFile(file);
      label.textContent = "";
    } else {
      label.textContent = "";
    }
  };

  const [currentButton, setCurrentButton] = useState("upload");

  const handleUploadClick = () => {
    setCurrentButton("upload");
  };

  const handleShareClick = () => {
    setCurrentButton("share");
  };

  return (
    <>
      {/* Updated things */}
      <div className="upload-share-container">
        <div className="button-wrapper">
          <button
            className={`upload-button ${
              currentButton === "upload" ? "active" : ""
            }`}
            onClick={() => setCurrentButton("upload")}
          >
            Upload
          </button>
          <button
            className={`share-button ${
              currentButton === "share" ? "active" : ""
            }`}
            onClick={() => setCurrentButton("share")}
          >
            Share
          </button>
        </div>
        {currentButton === "upload" && (
          <div className="wrapper">
            <h3>Upload Your image</h3>
            <p className="first-desc">
              File supported type : PNG , JPEG , JPG , WEBP{" "}
            </p>
            <div
              className="form"
              onClick={() => document.getElementById("my-file").click()}
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="my-file"
                id="fileLabel"
                className="custom-file-upload"
              >
                <i className="fas fa-cloud-upload-alt"></i>
              </label>
              
              <input
                type="file"
                id="my-file"
                name="myfile"
                disabled={!account}
                onChange={(e) => {
                  retrieveFile(e);
                  document.getElementById("upload-para").style.display = "none";
                }}
              />

              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded file"
                  className="preview-image"
                  height={100}
                  width={100}
                />
              )}
              <p id="upload-para" className="upload-para">
                Browse or Drag here to upload
              </p>
            </div>
            <button
              type="submit"
              className="upload"
              disabled={!file}
              onClick={handleSubmit}
            >
              Upload
            </button>
          </div>
        )}

        {currentButton === "share" && (
          <div className="share-wrapper">
            <h3>Share Your image</h3>
            <Modal contract={contract} />
          </div>
        )}
      </div>
    </>
  );
};
export default FileUpload;
