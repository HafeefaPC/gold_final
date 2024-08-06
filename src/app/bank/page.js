"use client";
import React, { useState } from 'react';
import { Web3Provider } from '@ethersproject/providers'; // Correct import for provider
import { Contract } from 'ethers';

const Page = () => {
    const [bankID, setBankID] = useState('');
    const [password, setPassword] = useState('');
    const [action, setAction] = useState('');
    const [signer, setSigner] = useState(null);
    const [account, setAccount] = useState('');
    const [passwordSet, setPasswordSet] = useState(false); // Track if password has been set

    const contractAddress = "0xB51c031D69e40Bb7784B31604961A5203615A42C";
    const abi = [
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

    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                alert('MetaMask is required.');
                return;
            }

            const provider = new Web3Provider(window.ethereum);
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const newSigner = provider.getSigner();
            setSigner(newSigner);
            setAccount(accounts[0]);
            alert('Wallet connected: ' + accounts[0]);
        } catch (error) {
            console.error('Error connecting wallet:', error);
            alert('Failed to connect wallet');
        }
    };

    const handleAction = async (event) => {
        event.preventDefault();

        if (!signer) {
            alert('Please connect your wallet first.');
            return;
        }

        try {
            const contract = new Contract(contractAddress, abi, signer);

            if (action === 'setPassword') {
                console.log('Calling setPassword with:', bankID, password);
                const tx = await contract.setPassword(bankID, password);
                console.log('Transaction:', tx);
               
                alert('Password set successfully!');
                setPasswordSet(true); // Set password state to true
            } else if (action === 'validate') {
                console.log('Calling validateIDAndPassword with:', bankID, password);
                const result = await contract.validateIDAndPassword(bankID, password);
                console.log('Validation result:', result);
                if (result) {
                    alert('Login successful!');
                    window.location.href = '/bankhome';
                } else {
                    alert('Invalid ID or password. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-black bg-opacity-80">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl mb-4 text-black">Bank Login</h2>
                {!signer ? (
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="bg-blue-500 text-white p-2 rounded mb-4"
                    >
                        Connect Wallet
                    </button>
                ) : passwordSet ? (
                    <form onSubmit={handleAction}>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            placeholder="ID"
                            value={bankID}
                            onChange={(e) => setBankID(e.target.value)}
                            required
                            className="w-full p-2 mb-4 border text-black border-gray-300 rounded"
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
                        />
                        <button
                            type="submit"
                            onClick={() => setAction('validate')}
                            className="bg-yellow-400 text-white p-2 rounded w-full"
                        >
                            Login
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleAction}>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            placeholder="ID"
                            value={bankID}
                            onChange={(e) => setBankID(e.target.value)}
                            required
                            className="w-full p-2 mb-4 border text-black border-gray-300 rounded"
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
                        />
                        <button
                            type="submit"
                            onClick={() => setAction('setPassword')}
                            className="bg-yellow-400 text-white p-2 rounded w-full"
                        >
                            Set Password
                        </button>
                    </form>
                )}
                {signer && (
                    <div className="mt-4 text-black">
                        <p>Wallet Connected: {account}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
