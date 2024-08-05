"use client"
import React, { useState } from 'react';

const Page = () => {
    const [otpSent, setOtpSent] = useState(false);

    const sendOTP = () => {
        setOtpSent(true);
        alert('OTP sent successfully!');
    };

    const resendOTP = () => {
        alert('OTP resent successfully!');
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-4/5 md:w-1/2 lg:w-1/3">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Bank Dashboard</h1>
                <form>
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">New Gold Loan Application</h3>
                    <label htmlFor="huidInput" className="block text-left mb-1">Enter HUID:</label>
                    <input type="text" id="huidInput" name="huidInput" className="w-full p-2 mb-3 border border-gray-300 rounded" required />
                    <label htmlFor="aadharcheck" className="block text-left mb-1">Enter Aadhaar No:</label>
                    <input type="text" id="aadharcheck" name="aadharcheck" className="w-full p-2 mb-3 border border-gray-300 rounded" required />
                    
                    <div id="verifyContainer" className={!otpSent ? "block" : "hidden"}>
                        <button type="button" onClick={sendOTP} className="bg-yellow-500 text-white p-2 rounded hover:bg-white hover:text-yellow-500 hover:border hover:border-yellow-500 transition duration-300">Verify with OTP</button>
                        <p id="otpSentMessage"></p>
                    </div>
                    
                    <div id="otpContainer" className={otpSent ? "block" : "hidden"}>
                        <div className="form-group mb-3">
                            <label htmlFor="otp" className="block text-left mb-1">OTP:</label>
                            <input type="text" id="otp" name="otp" className="w-full p-2 mb-3 border border-gray-300 rounded" required />
                        </div>
                        <div className="form-group flex flex-col items-center">
                            <button type="button" onClick={sendOTP} className="bg-yellow-500 text-white p-2 rounded hover:bg-white hover:text-yellow-500 hover:border hover:border-yellow-500 transition duration-300 mb-2">Verify</button>
                            <a href="#" onClick={resendOTP} className="text-blue-500 hover:underline">Resend OTP</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
