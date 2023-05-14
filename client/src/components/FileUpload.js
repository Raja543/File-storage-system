import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const [imageUrl, setImageUrl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

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
            pinata_api_key: `996ee8126ec53a025cbd`,
            pinata_secret_api_key: `935eff391b1b32a710f77dbba4deaad302f39569d3ac7f127f1b92f42c9d53f7`,
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progressPercentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progressPercentage);
          },
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        const signer = contract.connect(provider.getSigner());
        signer.add(account, ImgHash);

        setFileName("No image selected");
        setImageUrl(null);

        // Show the icon and paragraph
        const label = document.getElementById("fileLabel");
        label.innerHTML =
          '<i class="fa-solid fa-cloud-arrow-up fa-bounce"></i>';
        document.getElementById("upload-para").style.display = "block";
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFile(null);
    setUploadProgress(0);
  };

  const retrieveFile = (e) => {
    const input = e.target;
    const label = document.getElementById("fileLabel");
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      setFile(file);
      setFileName(file.name);
      label.textContent = "";
    } else if (!file) {
      label.innerHTML = '<i class="fa-solid fa-cloud-arrow-up fa-bounce"></i>';
      document.getElementById("upload-para").style.display = "block";
    }
  };

  const renderPreview = () => {
    if (file) {
      const fileType = file.type.split("/")[0];
  
      switch (fileType) {
        case "image":
          return (
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded file"
              className="preview-image"
            />
          );
        case "video":
          return (
            <video
              src={URL.createObjectURL(file)}
              className="preview-video"
              controls
              height={150}
              width={320}
            />
          );
        case "audio":
          return (
            <audio
              src={URL.createObjectURL(file)}
              className="preview-audio"
              controls
            />
          );
        case "application":
          if (file.type === "application/pdf") {
            return (
              <div className="preview-file">
                <i className="fa-solid fa-file-pdf"></i>
                <p>PDF FILE</p>
              </div>
            );
          } else {
            return (
              <div className="preview-file">
                <i className="fa-solid fa-file"></i>
                <p>{fileType.toUpperCase()} FILE</p>
              </div>
            );
          }
        default:
          return (
            <div className="preview-file">
              <i className="fa-solid fa-file"></i>
              <p>{fileType.toUpperCase()} FILE</p>
            </div>
          );
      }
    }
  
    return null;
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
      <div className="upload-share-container">
        <div className="toggleWrapper">
          <input type="checkbox" className="dn" id="dn" />
          <label
            htmlFor="dn"
            className="toggle"
            onClick={() =>
              setCurrentButton(currentButton === "share" ? "upload" : "share")
            }
          >
            <span className="toggle__handler"></span>
          </label>
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
                <i className="fa-solid fa-cloud-arrow-up fa-bounce"></i>
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
              {file && renderPreview()}

              <p id="upload-para" className="upload-para">
                Browse or Drag here to upload
              </p>
              {uploadProgress > 0 && (
                <progress value={uploadProgress} max={100} />
              )}
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
            <h3>Share Your Files</h3>
            <Modal contract={contract} />
          </div>
        )}
      </div>
    </>
  );
};
export default FileUpload;