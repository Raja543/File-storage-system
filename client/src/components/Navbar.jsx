import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, []);

  const navLinks = [
    { to: "/upload", text: "Upload" },
    { to: "/working", text: "Working" },
    { to: "/allowlist", text: "AllowList" },
    { to: "/myfiles", text: "MyFiles" },
  ];

  const connectWallet = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const addWalletListener = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flex justify-between bg-[#0e1310] text-[#fff] items-center w-full px-6 md:px-10 lg:px-20 py-5 mx-auto">
      <div className="flex items-center">
        <NavLink to="/">
          <img
            className="w-12 h-full cursor-pointer"
            src="/images/logo.jpg"
            alt="Logo"
          />
        </NavLink>
      </div>
      <div
        className={`md:flex md:items-center hidden list-none ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to}>
            <ul>
              <li className="text-lg pr-8">{link.text}</li>
            </ul>
          </NavLink>
        ))}
        <button
          onClick={connectWallet}
          className="cursor-pointer px-4 py-2 border border-[#727271] rounded-xl hover:bg-[aqua] hover:text-[#000]"
        >
          {walletAddress && walletAddress.length > 0 ? (
            <span className="text-lg pr-3">{`Connected: ${walletAddress.substring(
              0,
              4
            )}...${walletAddress.substring(38)}`}</span>
          ) : (
            <span className="text-lg pr-6">Connect Wallet</span>
          )}
        </button>
      </div>
      {/* Sidebar Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2">
          {menuOpen ? (
            <X className="hidden" size={30} />
          ) : (
            <Menu className="text-4xl" size={30} />
          )}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed md:hidden bg-[#000] text-[#ffff] top-0 right-0 h-full w-64 z-20 transform ease-in-out duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-4 flex items-center ">
          <ul className="space-y-4 mt-12 ml-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                <li className="text-xl p-2">{link.text}</li>
              </NavLink>
            ))}
            <button onClick={connectWallet} className="cursor-pointer">
              {walletAddress && walletAddress.length > 0 ? (
                <span className="text-lg p-2">{`Connected: ${walletAddress.substring(
                  0,
                  4
                )}...${walletAddress.substring(38)}`}</span>
              ) : (
                <span className="text-lg p-2">Connect Wallet</span>
              )}
            </button>
          </ul>
          {/* Close (X) icon inside the Sidebar Menu */}
          <button onClick={toggleMenu} className="absolute top-4 right-4 p-2">
            <X size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
