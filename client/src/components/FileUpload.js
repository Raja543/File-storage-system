import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const [imageUrl, setImageUrl] = useState(null);
  const [currentButton, setCurrentButton] = useState("upload");
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
            pinata_api_key: `d8e75fd482b741579e0f`,
            pinata_secret_api_key: `e7d96f8eaaef222aa83f114eafdec35066da1f510484562a855ee2dda97414c8`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        //const signer = contract.connect(provider.getSigner());
        const signer = contract.connect(provider.getSigner());
        signer.add(account, ImgHash);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
    setImageUrl(null);
  };

  const retrieveFile = (e) => {
    const input = e.target;
    const label = document.getElementById("fileLabel");
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      setFile(file);
      const fileName = file.name;
      const extension = fileName.split(".").pop(); // get file extension
      let truncatedName = fileName.split(".").shift(); // get file name without extension
      truncatedName = truncatedName.substring(0, 10); // truncate file name to first 10 characters
      const truncatedFileName = truncatedName + "." + extension; // combine truncated name and extension
      label.textContent = truncatedFileName;
    } else {
      label.textContent = "Choose a file";
    }
  };

  const handleUploadClick = () => setCurrentButton("upload");
  const handleShareClick = () => {
    setCurrentButton("share");
    setModalOpen(true);
  };

  return (
    <>
      <button onClick={handleUploadClick}>Upload</button>
      <button onClick={handleShareClick}>Share</button>
      {currentButton === "upload" && (
          <div className="wrapper">
            <h3>Upload Your image</h3>
            <p className="first-desc">
              File supported type : PNG , JPEG , JPG , WEBP{" "}
            </p>
            <form
              className="form"
              onClick={() => document.getElementById("my-file").click()}
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="my-file"
                id="fileLabel"
                className="custom-file-upload"
              >
                <i class="fas fa-cloud-upload-alt"></i>
              </label>
              <input
                type="file"
                id="my-file"
                name="myfile"
                disabled={!account}
                onChange={retrieveFile}
                style={{ display: "none" }}
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
              <p>Browse or Drag here to upload</p>
            </form>
            <button
              type="submit"
              className="upload"
              disabled={!file}
              onClick={handleSubmit}
            >
              Upload
            </button>

            <section className="progress-area"></section>
            <section className="uploaded-area"></section>
          </div>
        
      )}
      {currentButton === "share" && (
        <div className="share-wrapper">
          <h3>Share Your image</h3>
          {modalOpen && (
            <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
          )}
        </div>
      )}
    </>
  );
};
export default FileUpload;
