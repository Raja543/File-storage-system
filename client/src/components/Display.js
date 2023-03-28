import { useState } from "react";

const Display = ({ contract, account }) => {
    const [data, setData] = useState("");
    const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
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
                    ></img></a>
             );
});
setData(images);
} else {
alert("No image to display");
}
};
return (
    <>
        <div className="detail-check">
        <p className="detail-description">
        After you upload the file Now you check whether the file is uploaded
        or not by putting the transaction address
        </p>
        <div className="address-check">
        <div className="address-fill">
            <input
            type="text"
            className="address"
            placeholder="enter-address"
            ></input>
            <span className="search-icon" onClick={getdata}>
            <i class="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>
        </div>
        <div className="image-show">{data}</div>
        </div>
    </>
);
};
export default Display;