'use client'
// pages/huidlisting.js



import Head from 'next/head';
import { useState } from 'react';

export default function HUIDListing() {
  const [aadhar, setAadhar] = useState('');
  const [result, setResult] = useState('');

  const getHUIDs = () => {
    // Replace with your logic to get HUIDs based on Aadhar number
    setResult('Sample HUID result for Aadhar: ' + aadhar);
  };

  return (
    <>
      <Head>
        <title>HUID Listing</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
        <a href="/../home" className="bg-yellow-400 text-white px-6 py-2 rounded-full text-lg mb-2">
          Home
        </a>
        <a href="../../bis" className="bg-yellow-400 text-white px-6 py-2 rounded-full text-lg mb-6">
          Back
        </a>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <label className="text-xl font-bold">HUID Listing</label><br />
          <label htmlFor="aadharInput" className="block text-gray-700">Enter Aadhar Number:</label>
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
            className="bg-yellow-400 text-white px-4 py-2 rounded mt-4 hover:bg-yellow-300"
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
