"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Web3 from 'web3';
import contractABI from '../../../abi/function.json';
import { functionAddress } from '../../../constants/adressess.js';

export default function NewRegister() {
  const [username, setUsername] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [huid, setHuid] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
        try {
          // Request account access
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(window.ethereum);
          setWeb3(web3);

          const contract = new web3.eth.Contract(contractABI , functionAddress);
          setContract(contract);
        } catch (error) {
          console.error("Error initializing Web3:", error);
        }
      } else {
        console.log("Please install MetaMask!");
      }
    };

    initWeb3();
  }, []);

  const sendOtp = () => {
    setShowOtp(true);
  };

  const addHUID = async () => {
    if (!web3 || !contract) {
      console.error("Web3 or contract not initialized");
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      await contract.methods.addHUID(huid, aadhar).send({ from: accounts[0] });
      console.log("HUID added successfully");
      // You can add more logic here, like showing a success message or redirecting
    } catch (error) {
      console.error("Error adding HUID:", error);
      // Handle the error, maybe show an error message to the user
    }
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90">
      <div className="container mx-auto">
        <header className="flex flex-wrap justify-between items-center py-3 mb-1 border-b">
          <Link href="/" className="flex items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
            <span className="text-xl text-yellow-400">Jewellery Name</span>
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/home" className="text-yellow-400 hover:text-yellow-300">Home</Link></li>
            <li><Link href="/register" className="text-yellow-400 hover:text-yellow-300">Register</Link></li>
            <li><Link href="/ownership" className="text-yellow-400 hover:text-yellow-300">Ownership</Link></li>
            <li><Link href="/sell" className="text-yellow-400 hover:text-yellow-300">Sell</Link></li>
          </ul>
        </header>
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-black">New User Registration</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-black">Name:</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="aadharIn" className="block mb-2 text-black">Aadhaar No:</label>
            <input
              type="text"
              id="aadharIn"
              className="w-full p-2 border border-gray-300 rounded"
              required
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="huidIn" className="block mb-2 text-black">HUID:</label>
            <input
              type="text"
              id="huidIn"
              className="w-full p-2 border border-gray-300 rounded"
              required
              value={huid}
              onChange={(e) => setHuid(e.target.value)}
            />
          </div>
          {showOtp && (
            <div className="mb-4 text-black">
              <label htmlFor="otp" className="block mb-2">Enter OTP:</label>
              <input
                type="text"
                id="otp"
                className="w-full p-2 border text-black border-gray-300 rounded"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}
          {!showOtp ? (
            <button
              onClick={sendOtp}
              className="w-full p-2 bg-yellow-400 text-white rounded hover:bg-white hover:text-yellow-400 hover:border hover:border-yellow-400"
            >
              Send OTP
            </button>
          ) : (
            <button
              onClick={addHUID}
              className="w-full p-2 bg-yellow-400 text-white rounded hover:bg-white hover:text-yellow-400 hover:border hover:border-yellow-400"
            >
              Add HUID
            </button>
          )}
        </div>
      </div>
    </div>
  );
}