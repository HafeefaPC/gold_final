'use client'

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import contractABI from './abi/function.json';
import { functionAddress } from '../../constants/adressess.js';

export default function FindOwner() {
  const [huid, setHUID] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const contractInstance = new web3.eth.Contract(contractABI, functionAddress);
          setContract(contractInstance);
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        const contractInstance = new web3.eth.Contract(contractABI, functionAddress);
        setContract(contractInstance);
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    };

    initWeb3();
  }, []);

  const getAadhar = async () => {
    if (!huid) {
      alert("Please enter HUID");
      return;
    }

    if (!contract) {
      alert("Contract not initialized. Please check your web3 connection.");
      return;
    }

    try {
      const result = await contract.methods.getAadhar(huid).call({ gas: 2000000 });
      setAadhar("Aadhar Number: " + result);
    } catch (error) {
      console.error("Error:", error);
      setAadhar("An error occurred while fetching Aadhar.");
    }
  };

  return (
    <>
      <Head>
        <title>Find Owner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col items-center justify-center gap-10 min-h-screen bg-gray-900">
        <div className="flex justify-center gap-80 ">
          <a href="/" className="border border-yellow-200 bg-yellow-600 rounded-3xl p-3">Home</a>
          <a href="./BIShome.html" className="border border-yellow-200 bg-yellow-600 rounded-3xl p-3">Back</a>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Fetch Aadhar</h1>
          <label className="block text-gray-700 mb-2" htmlFor="huidInput">Enter HUID:</label>
          <input
            type="text"
            id="huidInput"
            value={huid}
            onChange={(e) => setHUID(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={getAadhar}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            Get Aadhar
          </button>
          {aadhar && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <strong>Result:</strong>
              <p>{aadhar}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}