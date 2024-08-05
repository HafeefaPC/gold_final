'use client'
import Head from 'next/head';
import { useState } from 'react';

export default function FindOwner() {
  const [aadhar, setAadhar] = useState('');

  const getAadhar = async () => {
    // Implement your logic to fetch Aadhar here
    setAadhar('Sample Aadhar Result'); // Example result
  };

  return (
    <>
      <Head>
        <title>Find Owner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col items-center justify-center gap-10 min-h-screen bg-gray-900">
        <div className="  flex justify-center gap-80 ">
          <a href="/"  className="border border-yellow-200 bg-yellow-600 rounded-3xl p-3">Home</a>
          <a href="./BIShome.html" className="border border-yellow-200 bg-yellow-600 rounded-3xl p-3">Back</a>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Fetch Aadhar</h1>
          <label className="block text-gray-700 mb-2" htmlFor="huidInput">Enter HUID:</label>
          <input
            type="text"
            id="huidInput"
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
