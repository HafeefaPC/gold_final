"use client"
import { useState } from 'react';
import 'tailwindcss/tailwind.css';

const LoginWithAadharID = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpSentMessage, setOtpSentMessage] = useState('');

  const sendOTP = () => {
    setOtpSentMessage("OTP sent successfully!");
    setOtpSent(true);
  };

  const resendOTP = () => {
    alert('OTP resent successfully!');
  };

  const login = () => {
    alert('Login successful!');
    window.location.href = 'userhuidinfo.html';
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-black text-2xl mb-6">Login with Aadhar ID</h2>
        <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group mb-4">
            <label htmlFor="aadharNumber" className="block text-black mb-2">Aadhar Number:</label>
            <input type="text" id="aadharNumber" name="aadharNumber" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div id="verifyContainer" className={`${otpSent ? 'hidden' : 'flex justify-center items-center mb-4'}`}>
            <button type="button" onClick={sendOTP} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">Verify</button>
            <p id="otpSentMessage" className="text-green-500 mt-2">{otpSentMessage}</p>
          </div>
          <div id="otpContainer" className={`${otpSent ? 'block' : 'hidden'}`}>
            <div className="form-group mb-4">
              <label htmlFor="otp" className="block text-black mb-2">OTP:</label>
              <input type="text" id="otp" name="otp" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="form-group flex justify-between">
              <button type="button" onClick={login} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">Login</button>
              <button type="button" onClick={resendOTP} className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">Resend OTP</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginWithAadharID;
