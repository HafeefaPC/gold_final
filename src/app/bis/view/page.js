// pages/ornaments.js

import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-black bg-opacity-80 text-white min-h-screen p-5">
      <Link href="./BIShome" className="text-white bg-yellow-400 px-4 py-2 rounded-lg text-lg hover:bg-yellow-300 transition duration-300 absolute top-5 right-5">
        Back
      </Link>

      <h2 className="text-yellow-400 text-3xl font-bold mb-6">ORNAMENTS LIST</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-white p-2 text-left text-gray-200">HUID</th>
            <th className="border border-white p-2 text-left text-gray-200">Ornament</th>
            <th className="border border-white p-2 text-left text-gray-200">Date of Hallmarking</th>
            <th className="border border-white p-2 text-left text-gray-200">Gram</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white p-2">123456</td>
            <td className="border border-white p-2">Gold Ring</td>
            <td className="border border-white p-2">2024-04-01</td>
            <td className="border border-white p-2">5.2</td>
          </tr>
          <tr>
            <td className="border border-white p-2">789012</td>
            <td className="border border-white p-2">Silver Necklace</td>
            <td className="border border-white p-2">2024-03-20</td>
            <td className="border border-white p-2">18.7</td>
          </tr>
          <tr>
            <td className="border border-white p-2">345678</td>
            <td className="border border-white p-2">Diamond Earrings</td>
            <td className="border border-white p-2">2024-04-05</td>
            <td className="border border-white p-2">3.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
