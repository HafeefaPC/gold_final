"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Web3 from 'web3';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const router = useRouter();

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setUserAddress(accounts[0]);
        setIsConnected(true);
        alert("Wallet connected successfully!");
		console.log("Wallet connected successfully!");
        // Redirect to choice page after successful connection
        router.push("/choice");
      } catch (error) {
        console.error("Failed to connect wallet:", error);
        alert("Failed to connect wallet. Please try again.");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  useEffect(() => {
    // Check if wallet is already connected
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts.length > 0) {
            setUserAddress(accounts[0]);
            setIsConnected(true);
          }
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black bg-opacity-90 flex items-center justify-center">
      <Head>
        <title>Jewellery Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Jewellery Login
        </h2>
        {!isConnected ? (
          <button
            onClick={connectWallet}
            className="w-full bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-white hover:text-yellow-400 hover:border hover:border-yellow-400 transition-colors"
          >
            Connect with MetaMask
          </button>
        ) : (
			<div className="text-center text-black">
            <p>Connected with address:</p>
            <p className="font-mono break-all">{userAddress}</p>
            <button
              onClick={() => router.push("/jewellery/choice")}
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition-colors"
            >
              Go to Choice
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
