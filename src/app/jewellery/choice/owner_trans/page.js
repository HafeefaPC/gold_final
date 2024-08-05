"use client"
import { useState } from 'react';

const Page = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const sendOTP = () => {
    setOtpSent(true);
    openModal('OTP sent successfully!');
  };

  const openModal = (message) => {
    setModalMessage(message);
    document.getElementById("myModal").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };

  return (
    <div className="bg-black min-h-screen">
       <div className="container mx-auto">
        <header className="flex flex-wrap justify-between items-center py-3 border-b border-gray-200 m-3">
          <a
            href="/"
            className="items-center mb-2 mb-md-0 me-md-auto text-decoration-none"
          >
            <span className="text-2xl font-semibold text-yellow-400">Jewellery Name</span>
          </a>
          <ul className="flex space-x-4">
            <li className="nav-item">
              <a href="../Homelogin/Homelogin.html" className="nav-link text-yellow-400 hover:text-white">Home</a>
            </li>
            <li className="nav-item">
              <a href="./new_reg.html" className="nav-link text-yellow-400 hover:text-white">Register</a>
            </li>
            <li className="nav-item">
              <a href="./owner_trans.html" className="nav-link text-yellow-400 hover:text-white">Ownership</a>
            </li>
            <li className="nav-item">
              <a href="./sale.html" className="nav-link text-yellow-400 hover:text-white">Sell</a>
            </li>
          </ul>
        </header>
      </div>
      <br /><br />

      <div className="flex justify-center items-center">
        <div className="card bg-white p-6 rounded-lg shadow-lg mx-4 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Current Owner</h2>
          <form>
            <div className="form-group mb-4">
              <label htmlFor="currentOwnerName" className="block mb-2">Name</label>
              <input type="text" id="currentOwnerName" name="currentOwnerName" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="currentOwnerAadhaar" className="block mb-2">Aadhaar No</label>
              <input type="text" id="currentOwnerAadhaar" name="currentOwnerAadhaar" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="currentOwnerHUID" className="block mb-2">HUID</label>
              <input type="text" id="currentOwnerHUID" name="currentOwnerHUID" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            {otpSent && (
              <div className="form-group mb-4">
                <label htmlFor="otp" className="block mb-2">Enter OTP:</label>
                <input type="text" id="otp" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
            )}
          </form>
        </div>

        <div className="flex justify-center items-center mx-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#fff" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
          </svg>
        </div>

        <div className="card bg-white p-6 rounded-lg shadow-lg mx-4 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">New Owner</h2>
          <form>
            <div className="form-group mb-4">
              <label htmlFor="newOwnerName" className="block mb-2">Name</label>
              <input type="text" id="newOwnerName" name="newOwnerName" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="newAadhaar" className="block mb-2">Aadhaar No</label>
              <input type="text" id="newAadhaar" name="newAadhaar" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            {otpSent && (
              <div className="form-group mb-4">
                <label htmlFor="otp" className="block mb-2">Enter OTP:</label>
                <input type="text" id="otp" className="w-full p-2 border border-gray-300 rounded" required />
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <button id="sentotp" onClick={sendOTP} className="bg-yellow-500 text-white py-2 px-8 rounded hover:bg-white hover:text-yellow-500 border border-yellow-500 transition duration-300">Send OTP</button>
        {otpSent && (
          <button id="addhuidbtn" className="bg-yellow-500 text-white py-2 px-8 rounded hover:bg-white hover:text-yellow-500 border border-yellow-500 transition duration-300 ml-4">Transfer Ownership</button>
        )}
      </div>

      <div id="myModal" className="fixed z-10 inset-0 overflow-y-auto hidden">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Notification
                  </h3>
                  <div className="mt-2">
                    <p id="modalMessage" className="text-sm text-gray-500">
                      {modalMessage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" onClick={closeModal} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
