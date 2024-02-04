import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllowList = ({ contract }) => {
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
    const addressObj = { user: address, access: true };
    if (accessList.some((item) => item.user === address)) {
      setAccessList(
        accessList.map((item) => {
          if (item.user === address) {
            return { ...item, access: true };
          }
          return item;
        })
      );
    } else {
      setAccessList([...accessList, addressObj]);
    }
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
    <>
      <Navbar />
      <div
        className="bg-cover w-full min-h-screen  bg-[#121916] relative z-40 bg-center text-[#fff] p-28 flex flex-col items-center"
        style={{
          backgroundImage: `url('/images/eclipse.png')`,
          type: "image/svg+xml",
        }}
      >
        <h1 className="text-5xl font-bold">Access List</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const address = e.target.address.value;
            handleAllow(address);
            e.target.reset();
          }}
          className="flex items-center gap-4 p-4"
        >
          <input
            className="p-2 border-0 pl-10 outline-none rounded-lg w-[650px] placeholder:text-[#dededed8] bg-[#121916]"
            type="text"
            name="address"
            placeholder="Enter Address"
          />
          <button
            type="submit"
            className="bg-[#368a6e] text-[#fff] py-2 px-4 text-md rounded-lg hover:bg-[#397e67] transition duration-300 ease-in-out"
          >
            Allow
          </button>
        </form>

        {accessList.length > 0 ? (
          <ul>
            {accessList.map((item) => (
              <li
                key={item.user}
                className="flex items-center justify-evenly p-4 border-2 border-dashed border-[#58d994] "
              >
                <div className="text-xl">{item.user}</div>
                <div className="font-bold text-[#fff]">
                  {item.access ? "Allowed" : "Disallowed"}
                </div>
                {item.access ? (
                  <button
                    className="bg-[#368a6e] text-[#fff] py-2 px-4 text-md rounded-lg hover:bg-[#397e67] transition duration-300 ease-in-out"
                    onClick={() => handleDisallow(item.user)}
                  >
                    Disallow
                  </button>
                ) : (
                  <button
                    className="bg-[#368a6e] text-[#fff] py-2 px-4 text-md rounded-lg hover:bg-[#397e67] transition duration-300 ease-in-out"
                    onClick={() => handleAllow(item.user)}
                  >
                    Allow
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-2xl">No addresses with access.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

AllowList.propTypes = {
  contract: PropTypes.shape({
    shareAccess: PropTypes.any,
    allow: PropTypes.any,
    disallow: PropTypes.any,
  }),
};

export default AllowList;
