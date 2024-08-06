'use client'

import Head from 'next/head';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import contractABI from './abi/function.json';
import { functionAddress } from '../../constants/adressess.js';

export default function HUIDListing() {
  const [aadhar, setAadhar] = useState('');
  const [result, setResult] = useState('');
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

  async function getHUIDs() {
    if (!aadhar) {
      alert("Please enter Aadhar Number");
      return;
    }

    if (!contract) {
      alert("Contract not initialized. Please check your web3 connection.");
      return;
    }

    try {
      const result = await contract.methods.getHUIDs(aadhar).call({ gas: 2000000 });
      setResult("HUIDs: " + result.join(', '));
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while fetching HUIDs.");
    }
  }

  return (
    <>
      <Head>
        <title>HUID Listing</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
        <div className='flex justify-between gap-72 mb-6'>
          <a href="/../home" className="bg-yellow-400 text-white px-6 py-2 rounded-full text-lg">
            Home
          </a>
          <a href="../../bis" className="bg-yellow-400 text-white px-6 py-2 rounded-full text-lg">
            Back
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">HUID Listing</h2>
          <label htmlFor="aadharInput" className="block text-gray-700 mb-2">Enter Aadhar Number:</label>
          <input
            type="text"
            id="aadharInput"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            className="mt-2 p-2 w-full border rounded"
            required
          />
          <button
            onClick={getHUIDs}
            className="bg-yellow-400 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-300 w-full"
          >
            Get HUIDs
          </button>
          {result && (
            <div className="mt-4 p-4 bg-gray-100 border rounded">
              <strong>Result:</strong>
              <p>{result}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}