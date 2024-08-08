'use client';

import { useState } from 'react';
import Link from 'next/link';

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

export default function BISHome() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const showState = (stateName) => {
    setSelectedState(stateName);
    setDropdownOpen(false);
  };

  const getStateInfoHTML = (stateName) => {
    if (stateName === 'Kerala') {
      return (
        <div>
          <h1 className="text-2xl font-bold text-yellow-400 mb-4">Jewellery Information in {stateName}</h1>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2 text-left">JEWELLERY ID</th>
                <th className="border border-gray-400 p-2 text-left">JEWELLERY NAME</th>
                <th className="border border-gray-400 p-2 text-left">DISTRICT</th>
                <th className="border border-gray-400 p-2 text-left">INFO</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '4656459867', name: 'ABC JEWELLERY', district: 'THIRUVANANTHAPURAM' },
                { id: '9856743234', name: 'XYZ JEWELLERY', district: 'ERNAKULAM' },
                { id: '3567887655', name: 'JOHN JEWELLERY', district: 'PATHANAMTHITTA' },
                { id: '9988776655', name: 'BEN JEWELLERY', district: 'KOLLAM' },
                { id: '2765478967', name: 'JACK JEWELLERY', district: 'MALAPPURAM' },
                { id: '8897676545', name: 'KEVIN JEWELLERY', district: 'KOZHIKODE' },
                { id: '4567384756', name: 'DANY JEWELLERY', district: 'KOTTAYAM' },
                { id: '3289674586', name: 'DAVID JEWELLERY', district: 'KANNUR' },
              ].map((jewellery, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 p-2">{jewellery.id}</td>
                  <td className="border border-gray-400 p-2">{jewellery.name}</td>
                  <td className="border border-gray-400 p-2">{jewellery.district}</td>
                  <td className="border border-gray-400 p-2">
                    <Link href="./bis/view" className="text-green-500 hover:underline">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="text-2xl font-bold text-yellow-400 mb-4">Jewellery Information in {stateName}</h1>
          <p>No information available for {stateName}.</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white">
      <div className="container mx-auto flex items-center justify-center h-20 relative">
        <h1 className="text-3xl font-bold text-yellow-400">BUREAU OF INDIAN STANDARDS</h1>
        <Link href="../home" className="absolute top-16 right-4 bg-yellow-400 text-white px-5 py-2 rounded-full text-lg hover:bg-yellow-500 transition duration-300">
          Home
        </Link>
      </div>

      <div className="flex flex-col items-center mt-10">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="w-96 h-10 rounded bg-yellow-400 text-white text-lg font-normal"
          >
            SELECT STATE
          </button>
          {dropdownOpen && (
            <div className="absolute mt-1 w-96 bg-white rounded shadow-lg z-10">
              {states.map((state, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => showState(state)}
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  {state}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 space-x-4">
          <Link href="bis/owner" className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
            FIND OWNER
          </Link>
          <Link href="bis/huid" className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
            HUID LISTING
          </Link>
        </div>
      </div>

      <div className="mt-10">
        {selectedState && getStateInfoHTML(selectedState)}
      </div>
    </div>
  );
}
