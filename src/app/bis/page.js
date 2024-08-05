'use client';
import { useState } from 'react';

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [stateInfo, setStateInfo] = useState(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const showState = (stateName) => {
    const stateInfoHTML = getStateInfoHTML(stateName);
    setStateInfo(stateInfoHTML);
    setDropdownOpen(false);
  };

  const getStateInfoHTML = (stateName) => {
    switch (stateName) {
      case 'Kerala':
        return (
          <div>
            <h1 className="text-yellow-400">Jewellery Information in {stateName}</h1>
            <table className="w-4/5 mx-auto mt-5 border-collapse border border-gray-700">
              <thead>
                <tr>
                  <th className="border border-gray-600 p-2 text-left text-gray-300">JEWELLERY ID</th>
                  <th className="border border-gray-600 p-2 text-left text-gray-300">JEWELLERY NAME</th>
                  <th className="border border-gray-600 p-2 text-left text-gray-300">DISTRICT</th>
                  <th className="border border-gray-600 p-2 text-left text-gray-300">INFO</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {[
                  { id: '4656459867', name: 'ABC JEWELLERY', district: 'THIRUVANANTHAPURAM' },
                  { id: '9856743234', name: 'XYZ JEWELLERY', district: 'ERNAKULAM' },
                  // Add more rows here
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-600 p-2">{item.id}</td>
                    <td className="border border-gray-600 p-2">{item.name}</td>
                    <td className="border border-gray-600 p-2">{item.district}</td>
                    <td className="border border-gray-600 p-2">
                      <a href="#" className="text-green-400">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return <h1 className="text-yellow-400">Jewellery Information in {stateName}</h1>;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 p-10">
        <h1 className="text-yellow-400 text-3xl">BUREAU OF INDIAN STANDARDS</h1>
       
        <a href="/../" className="ml-4 bg-yellow-500 text-white py-2 px-4 rounded">Home</a>
        
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <button onClick={toggleDropdown} className="w-[490px] h-10 bg-yellow-500 text-white rounded">SELECT STATE</button>
        {dropdownOpen && (
          <div className="absolute bg-white text-black min-w-[160px] shadow-lg z-10">
            {[
              'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
              'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
              'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
              'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
            ].map((state) => (
              <a href="#" key={state} onClick={() => showState(state)} className="block px-4 py-2 hover:bg-gray-100">
                {state}
              </a>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-4">
          <a href="owner.html"><button className="bg-yellow-500 text-white py-2 px-4 rounded mr-2">FIND OWNER</button></a>
          <a href="huidlisting.html"><button className="bg-yellow-500 text-white py-2 px-4 rounded">HUID LISTING</button></a>
        </div>
      </div>
      <div className="mt-6">
        {stateInfo}
      </div>
    </div>
  );
}
