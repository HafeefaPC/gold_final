'use client';
import { useState } from 'react';
import { ethers } from 'ethers'; // Import ethers for MetaMask interaction
import 'tailwindcss/tailwind.css';
import Anon from '../../components/anon';

const LoginWithAadharID = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpSentMessage, setOtpSentMessage] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [walletAddress, setWalletAddress] = useState(''); // State to hold wallet address

  const sendOTP = async () => {
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ aadharNumber }),
      });

      const result = await response.json();

      if (response.ok) {
        setOtpSentMessage(result.message || "OTP sent successfully!");
        setOtpSent(true);
      } else {
        setOtpSentMessage(result.error || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setOtpSentMessage("An error occurred. Please try again.");
    }
  };

  const resendOTP = () => {
    alert('OTP resent successfully!');
  };

  const login = () => {
    alert('Login successful!');
    window.location.href = 'users/userhuid';
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []); // Request account access
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address); // Set the wallet address
      } else {
        alert('MetaMask not detected');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-black text-2xl mb-6">Login with Aadhar ID</h2>
        <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group mb-4">
            <label htmlFor="aadharNumber" className="block text-black mb-2">Aadhar Number:</label>
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 text-black rounded"
              required
            />
          </div>
          <div id="verifyContainer" className={`${otpSent ? 'hidden' : 'flex justify-center items-center mb-4'}`}>
            <button
              type="button"
              onClick={sendOTP}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
            >
              Verify
            </button>
            <p id="otpSentMessage" className="text-green-500 mt-2">{otpSentMessage}</p>
          </div>
          <p className='px-44 text-yellow-400'>OR</p>
          <div>
            <button
              type="button"
              onClick={connectWallet}
              className="bg-yellow-500 text-white p-3 ml-20 rounded  transition duration-300"
            >
              Connect MetaMask Wallet
            </button>
            {walletAddress && <p className="text-green-500 mt-2">Wallet Address: {walletAddress}</p>}
            <Anon address='0xC403AaEb043ca22C9d9C61a7d8F74346474C517f' /> {/* Pass the wallet address to Anon */}
          </div>
          <div id="otpContainer" className={`${otpSent ? 'block' : 'hidden'}`}>
            <div className="form-group mb-4">
              <label htmlFor="otp" className="block text-black mb-2">OTP:</label>
              <input
                type="text"
                id="otp"
                name="otp"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="form-group flex justify-between">
              <button
                type="button"
                onClick={login}
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
              >
                Login
              </button>
              <button
                type="button"
                onClick={resendOTP}
                className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
              >
                Resend OTP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginWithAadharID;
