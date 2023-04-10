import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const AccessListPage = ({ contract }) => {
  const [accessList, setAccessList] = useState([]);

  useEffect(() => {
    const fetchAccessList = async () => {
      const list = await contract.shareAccess();
      setAccessList(list);
    };
    contract && fetchAccessList();
  }, [contract]);

  const handleAllow = async (address) => {
    await contract.allow(address);
    setAccessList([...accessList, { user: address, access: true }]);
  };

  const handleDisallow = async (address) => {
    await contract.disallow(address);
    setAccessList(
      accessList.map((item) => {
        if (item.user === address) {
          return { ...item, access: false };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {/* Navbar section */}
      <div className="navbar-section">
        <Navbar />
      </div>

      <h1>Access List</h1>
      {accessList.length > 0 ? (
        <ul>
          {accessList.map((item) => (
            <li key={item.user}>
              {item.user} - {item.access ? "allowed" : "not allowed"}
              {item.access ? (
                <button onClick={() => handleDisallow(item.user)}>
                  Disallow
                </button>
              ) : (
                <button onClick={() => handleAllow(item.user)}>Allow</button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No addresses with access.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const address = e.target.address.value;
          handleAllow(address);
          e.target.reset();
        }}
      >
        <input type="text" name="address" placeholder="Enter Address" />
        <button type="submit">Allow</button>
      </form>
    </div>
  );
};

export default AccessListPage;
