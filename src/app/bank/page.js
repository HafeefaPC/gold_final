// pages/page.js
"use client"
import React, { useState } from 'react';
import Web3 from 'web3';

const Page = () => {
    const [bankID, setBankID] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async (event) => {
        event.preventDefault();
        
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const contractAddress = "0xB51c031D69e40Bb7784B31604961A5203615A42C";
const abi =[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "bankID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "BankPasswordSet",
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
		"name": "bankToPassword",
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
				"name": "bankID",
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
				"name": "bankID",
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
		"type": "function"
	}
];

        const contract = new web3.eth.Contract(abi, contractAddress);
        
        try {
            const result = await contract.methods.validateIDAndPassword(bankID, password).call();
            if (result) {
                alert('Login successful!');
                window.location.href = '/bankhome';
            } else {
                alert('Invalid ID or password. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-black bg-opacity-80">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl mb-4">Bank Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="ID"
            value={bankID}
            onChange={(e) => setBankID(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button type="submit" className="bg-yellow-400 text-white p-2 rounded w-full">
            Login
          </button>
        </form>
      </div>
    </div>
    );
};

export default Page;
