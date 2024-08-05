"use client";
import { useState } from 'react';
import Head from 'next/head';
import Web3 from 'web3';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const contractAddress = "0x50335cB59861b915d6b3A4f4c129fadb3c81EcFe";
  const abi =  [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "jewelleryID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "JewelleryPasswordSet",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jewelleryToPassword",
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
				"name": "jewelleryID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "setPassword",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "jewelleryID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
            }
		],
		"name": "validateIDAndPassword",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const contract = new web3.eth.Contract(abi, contractAddress);
        
        const result = await contract.methods.validateIDAndPassword(username, password).call();
        if (result) {
          alert("Login successful!");
          window.location.href = "choice.html";
        } else {
          alert("Invalid username or password. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 flex items-center justify-center">
      <Head>
        <title>Jewellery Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Jewellery Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium">
              Register Id
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-white hover:text-yellow-400 hover:border hover:border-yellow-400 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}