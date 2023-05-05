import { useEffect } from "react";

const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
  };
  const removeallow = async () => {
    const address = document.querySelector(".address").value;
    await contract.disallow(address);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div id="myForm" className="myform">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>

            <div className="footer">
              <button onClick={() => sharing()}>Share</button>
              <button onClick={() => removeallow()}>Disallow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
