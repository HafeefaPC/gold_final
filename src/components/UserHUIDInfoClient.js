'use client';

import { useState } from 'react';

const Popup = ({ id, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        href={`#${id}`}
        className="user-box mb-6 bg-gray-400 text-white p-5 rounded-full"
        onClick={() => setIsOpen(true)}
      >
        {id}
      </a>
      {isOpen && (
        <div
          id={id}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-lg bg-white p-5 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-black text-xl cursor-pointer hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="popup-content">
              {content}
              <button
                className="bg-[#ffc107] text-white py-2 px-4 rounded-md hover:bg-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function UserHUIDInfo() {
  return (
    <>
      <header className="bg-[#30226111] mt-1 p-4 text-center relative">
        <h1 className="text-white m-0">WELCOME USER !</h1>
        <a
          href="../Homelogin/Homelogin.html"
          className="absolute top-8 right-2 bg-[#ffc107] text-white py-2 px-4 rounded-lg text-lg hover:bg-yellow-300 transition"
        >
          Home
        </a>
      </header>

      <div className="flex flex-col items-start justify-center h-screen p-5 text-black bg-[rgba(0,0,0,0.822)]">
        <Popup
          id="popup-HUHW98"
          content={
            <>
              <p><strong>Jewellery Registration No:</strong> 6409123487</p>
              <p><strong>Assaying and Hallmarking Centre:</strong> QUALITY ASSAY & HALLMARKING CENTRE PRIVATE LIMITED</p>
              <p><strong>AHC Number:</strong> SRO/RAHC/R-688493</p>
              <p><strong>Article Type:</strong> Necklace</p>
              <p><strong>Date of Hallmarking:</strong> 2023-04-15</p>
              <p><strong>Purity:</strong> 22K916</p>
            </>
          }
        />
        <Popup
          id="popup-HUQE12"
          content={
            <>
              <p className=''><strong>Jewellery Registration No:</strong> 7654387561</p>
              <p className=''><strong>Assaying and Hallmarking Centre:</strong> QUALITY ASSAY & HALLMARKING CENTRE PRIVATE LIMITED</p>
              <p className=''><strong>AHC Number:</strong> STO/FTRS/U-345687</p>
              <p><strong>Article Type:</strong> Bangles</p>
              <p><strong>Date of Hallmarking:</strong> 2023-09-11</p>
              <p><strong>Purity:</strong> 22K916</p>
            </>
          }
        />
        <Popup
          id="popup-HUMA23"
          content={
            <>
              <p><strong>Jewellery Registration No:</strong> 8067543245</p>
              <p><strong>Assaying and Hallmarking Centre:</strong> QUALITY ASSAY & HALLMARKING CENTRE PRIVATE LIMITED</p>
              <p><strong>AHC Number:</strong> STT/JYTG/P-875634</p>
              <p><strong>Article Type:</strong> Ring</p>
              <p><strong>Date of Hallmarking:</strong> 2023-01-14</p>
              <p><strong>Purity:</strong> 22K916</p>
              <p className="text-red-500"><strong>Currently pledged in: ABC Bank</strong></p>
            </>
          }
        />
      </div>
    </>
  );
}
