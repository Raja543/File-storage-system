import { useState } from "react";
import axios from "axios";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const [imageUrl, setImageUrl] = useState(null);

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
            pinata_api_key: `6ad940fc59b65ae76c6c`,
            pinata_secret_api_key: `ae08b726d1bb8f8a20b599fe041f65105fc3def5ac14069e20ee93d047432833`,
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
    const input = document.getElementById("myfile");
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

  return (
    <>
      <div className="top">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <div className="button-container">
              <label htmlFor="file-upload" className="choose"></label>
              <input
                type="file"
                id="myfile"
                name="myfile"
                disabled={!account}
                onChange={retrieveFile}
              />
              <label
                htmlFor="myfile"
                id="fileLabel"
                className="custom-file-upload"
              >
                Choose a file
              </label>
              <span id="fileName"></span>
              <div className="button-wrapper">
                <button type="submit" className="upload" hidden={!file}>
                  Upload File
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
