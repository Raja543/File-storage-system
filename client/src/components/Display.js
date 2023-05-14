import { useState } from "react";
import "./Secondfile.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const [showData, setShowData] = useState(false);

  const getdata = async () => {
    let dataArray;
    const addressInput = document.querySelector(".address");
    const Otheraddress = addressInput ? addressInput.value : "";
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      console.log(str);
      console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <div key={i} className="image-container">
            <button
              className="delete-button"
              onClick={() => deleteImage(i)}
            >
              <i className="fa-solid fa-trash fa-beat"></i>
            </button>
            {/* <a href={item} target="_blank" rel="noreferrer">
              <img
                src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                alt="new"
                className="image-list"
                width={100}
                height={100}
              />
              <video width="320" height="240" controls>
                <source src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} type="video/mp4" />
              </video>
              <audio controls>
                <source src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} type="audio/mpeg" />
              </audio>
              <embed src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} type="application/pdf" width="100%" height="px" />
            </a> */}
            <a href={item} target="_blank" rel="noreferrer">
              {item.endsWith('.jpg') || item.endsWith('.png') ? (
                <img
                  src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                  alt="new"
                  className="image-list"
                  width={100}
                  height={100}
                />
              ) : item.endsWith('.mp4') ? (
                <video width="320" height="240" controls>
                  <source src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} type="video/mp4" />
                </video>
              ) : item.endsWith('.mp3') ? (
                <audio controls>
                  <source src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} type="audio/mpeg" />
                </audio>
              ) : item.endsWith('.pdf') ? (
                <embed src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} type="application/pdf" width="100%" height="px" />
              ) : (
                <p>Unsupported file type</p>
              )}
            </a>

          </div>
        );
      });

      setData(images);
      setShowData(true);


    } else {
      alert("No image to display");
    }
  };

  const deleteImage = async (index) => {
    try {
      await contract.deleteUrl(index);
      alert("Image deleted successfully");
      getdata();
    } catch (e) {
      alert("Error deleting image");
    }
  };

  const toggleData = () => {
    setShowData(!showData);
  };

  const closeContainer = () => {
    setShowData(false);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="address"
          placeholder="Enter the Account address"
        />
        <button
          className="search-button"
          onClick={() => {
            getdata();
            toggleData(true);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {showData && data.length > 0 && (
        <div className="blank-container">

          <div className="image-grid">{data}
            <button className="close-container" onClick={closeContainer}>
              <i className="fa-sharp fa-solid fa-circle-xmark fa-2xl"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
