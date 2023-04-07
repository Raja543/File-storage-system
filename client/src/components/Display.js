import { useState } from "react";
import "./Secondfile.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const [showData, setShowData] = useState(false); // added state variable

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
          <a href={item} key={i} target="_blank" rel="noreferrer">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
              width={100}
              height={100}
            ></img>
          </a>
        );
      });
      setData(images);
      setShowData(true); // set showData to true when data is fetched
    } else {
      alert("No image to display");
    }
  };

  const toggleData = () => {
    setShowData(!showData); // toggle showData on button click
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
        <button onClick={() => { getdata(); toggleData(true); }}> {/* added onClick for toggleData */}
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {showData && ( /* conditionally render blank-container based on showData */
        <div className="blank-container">
          <button onClick={closeContainer}><i class="fa-sharp fa-solid fa-circle-xmark fa-2xl"></i></button>
          <div className="image-grid">{data}</div>
        </div>
      )}
    </>
  );
};

export default Display;
