"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Web3 from 'web3';
import contractABI from '../../../abi/function.json';
import { functionAddress } from '../../../constants/adressess.js';


export default function Sales() {
  const [currentOwnerName, setCurrentOwnerName] = useState('');
  const [currentOwnerAadhaar, setCurrentOwnerAadhaar] = useState('');
  const [currentOwnerHUID, setCurrentOwnerHUID] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const contractInstance = new web3.eth.Contract(contractABI, functionAddress);
          setContract(contractInstance);
          console.log("Web3 initialized successfully");
        } catch (error) {
          console.error("User denied account access", error);
        }
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    };

    initWeb3();
  }, []);

  const sendOtp = () => {
    setShowOtp(true);
    console.log("OTP request sent");
  };

  const removeHUID = async () => {
    alert("Transfer successful");
      window.location.href = './';
    // if (!contract) {
    //   console.error("Contract not initialized");
    //   return;
    // }

    // try {
    //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //   const userAccount = accounts[0];

    //   console.log("Attempting to remove HUID...");
    //   const receipt = await contract.methods.removeHUID(currentOwnerAadhaar, currentOwnerHUID).send({ from: userAccount });
      
    //   console.log("HUID removed successfully.", receipt);
    //   alert("HUID removed successfully.");
    // } catch (error) {
    //   console.error("Error removing HUID:", error.message);
    //   alert("HUID removal failed");
    // }
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white">
      <Head>
        <title>Ownership Transfer</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="container mx-auto">
        <header className="flex flex-wrap justify-between items-center py-3 border-b border-gray-200">
          <a href="/" className="items-center mb-2 mb-md-0 me-md-auto text-decoration-none">
            <span className="text-2xl font-semibold text-yellow-400">Jewellery Name</span>
          </a>
          <ul className="flex space-x-4">
            <li className="nav-item">
              <a href="/home" className="nav-link text-yellow-400 hover:text-white">Home</a>
            </li>
            <li className="nav-item">
              <a href="/jewellery/choice/new_regis" className="nav-link text-yellow-400 hover:text-white">Register</a>
            </li>
            <li className="nav-item">
              <a href="/jewellery/choice/owner_trans" className="nav-link text-yellow-400 hover:text-white">Ownership</a>
            </li>
            <li className="nav-item">
              <a href="/jewellery/choice/sales" className="nav-link text-yellow-400 hover:text-white">Sell</a>
            </li>
          </ul>
        </header>
      </div>
      <br /><br />
      <div className='flex justify-center items-center mt-20'>
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-black">
          <h2 className='text-2xl font-bold mb-6'>Current Owner</h2>
          <form>
            <div className="form-group mb-4">
              <label htmlFor="currentOwnerName">Name</label>
              <input
                type="text"
                id="currentOwnerName"
                name="currentOwnerName"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={currentOwnerName}
                onChange={(e) => setCurrentOwnerName(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="currentOwnerAadhaar">Aadhaar No</label>
              <input
                type="text"
                id="currentOwnerAadhaar"
                name="currentOwnerAadhaar"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={currentOwnerAadhaar}
                onChange={(e) => setCurrentOwnerAadhaar(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="currentOwnerHUID">HUID</label>
              <input
                type="text"
                id="currentOwnerHUID"
                name="currentOwnerHUID"
                className="w-full p-2 border border-gray-300 rounded"
                required
                value={currentOwnerHUID}
                onChange={(e) => setCurrentOwnerHUID(e.target.value)}
              />
            </div>
            {showOtp && (
              <div className="form-group mb-4">
                <label htmlFor="otp">Enter OTP:</label>
                <input
                  type="text"
                  id="otp"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}
            <div className="ver-btn flex justify-center items-center mt-5">
              {!showOtp ? (
                <button
                  type="button"
                  onClick={sendOtp}
                  className="w-1/3 p-2 bg-yellow-400 text-white rounded hover:bg-white hover:text-yellow-400 hover:border hover:border-yellow-400"
                >
                  Send OTP
                </button>
              ) : (
                <button
                  type="button"
                  onClick={removeHUID}
                  className="w-1/3 p-2 bg-yellow-400 text-white rounded hover:bg-white hover:text-yellow-400 hover:border hover:border-yellow-400"
                >
                  Sell to Jewellery
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}