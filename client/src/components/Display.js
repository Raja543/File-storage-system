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
            <button onClick={() => deleteImage(i)}>Delete</button>
            <a href={item} target="_blank" rel="noreferrer">
              <img
                src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
                alt="new"
                className="image-list"
                width={100}
                height={100}
              />
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
          placeholder="Enter the Account address "
        />
        <button
          onClick={() => {
            getdata();
            toggleData(true);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {showData && (
        <div className="blank-container">
          <button onClick={closeContainer}>
            <i class="fa-sharp fa-solid fa-circle-xmark fa-2xl"></i>
          </button>
          <div className="image-grid">{data}</div>
        </div>
      )}
    </>
  );
};

export default Display;
