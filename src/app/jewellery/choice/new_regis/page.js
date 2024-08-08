"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Web3 from 'web3';

const contractAddress = "0x50147A7A062fF4762fed9b85428C114655b89717";
const abi = [
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "string",
              "name": "huid",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "oldAadhar",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "newAadhar",
              "type": "uint256"
          }
      ],
      "name": "AadharUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "aadhar",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "huid",
              "type": "string"
          }
      ],
      "name": "HUIDAdded",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "aadhar",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "huid",
              "type": "string"
          }
      ],
      "name": "HUIDRemoved",
      "type": "event"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "aadharToHUIDs",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "aadhar",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "huid",
              "type": "string"
          }
      ],
      "name": "addHUID",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "huid",
              "type": "string"
          }
      ],
      "name": "getAadhar",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "aadhar",
              "type": "uint256"
          }
      ],
      "name": "getHUIDs",
      "outputs": [
          {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "name": "huidToAadhar",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "aadhar",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "huid",
              "type": "string"
          }
      ],
      "name": "isHUIDCorresponding",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "aadhar",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "huid",
              "type": "string"
          }
      ],
      "name": "removeHUID",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "newAadhar",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "huid",
              "type": "string"
          }
      ],
      "name": "updateAadhar",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }
]

const NewRegister = () => {
  const [username, setUsername] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [huid, setHuid] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const contractInstance = new web3Instance.eth.Contract(abi, contractAddress);
          setContract(contractInstance);
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
    setOtpSent(true);
    alert('OTP sent successfully!');
    console.log('OTP sent successfully');
  };

  const addHUID = async () => {
    if (!web3 || !contract) {
      console.error("Web3 or contract not initialized");
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      const tx=contract.methods.addHUID(parseInt(aadhar), huid).send({ from: accounts[0] });
      console.log("account:",tx)
      console.log("HUID added successfully");
      alert("HUID added successfully");
    } catch (error) {
      console.error("Error adding HUID:", error);
      console.log("Detailed error information:", error);
      alert("Error adding HUID: " + error.message);
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
            <li><Link href="/jewellery/choice/new_regis" className="text-yellow-400 hover:text-yellow-300">Register</Link></li>
            <li><Link href="/jewellery/choice/owner_trans" className="text-yellow-400 hover:text-yellow-300">Ownership</Link></li>
            <li><Link href="/jewellery/choice/sales" className="text-yellow-400 hover:text-yellow-300">Sell</Link></li>
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
          {otpSent && (
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
          {!otpSent ? (
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
};

export default NewRegister;