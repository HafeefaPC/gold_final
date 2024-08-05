import Head from 'next/head';

export default function UserHUIDInfo() {
  return (
    <>
      <Head>
        <title>User HUID Information</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-[#30226111] mt-1 p-4 text-center relative">
        <h1 className="text-white m-0">WELCOME USER !</h1>
        <a
          href="../Homelogin/Homelogin.html"
          className="absolute top-8 right-2 bg-[#ffc107] text-white py-2 px-4 rounded-lg text-lg hover:bg-yellow-300 transition"
        >
          Home
        </a>
      </header>

      <div className="flex flex-col items-start justify-center h-screen p-5 bg-[rgba(0,0,0,0.822)]">
        <a href="#popup-HUHW98" className="user-box mb-6">HUHW98</a>
        <a href="#popup-HUQE12" className="user-box mb-6">HUQE12</a>
        <a href="#popup-HUMA23" className="user-box">HUMA23</a>
      </div>

      <div id="popup-HUHW98" className="popup fixed inset-0 flex items-center justify-center bg-white p-5 rounded-lg shadow-lg">
        <div className="relative w-full max-w-lg">
          <input type="checkbox" id="close-HUHW98" className="hidden" />
          <label htmlFor="close-HUHW98" className="absolute top-2 right-2 cursor-pointer text-white text-xl hover:text-black">&times;</label>
          <div className="popup-content">
            <p><strong>Jewellery Registration No:</strong> 6409123487</p>
            <p><strong>Assaying and Hallmarking Centre:</strong> QUALITY ASSAY & HALLMARKING CENTRE PRIVATE LIMITED</p>
            <p><strong>AHC Number:</strong> SRO/RAHC/R-688493</p>
            <p><strong>Article Type:</strong> Necklace</p>
            <p><strong>Date of Hallmarking:</strong> 2023-04-15</p>
            <p><strong>Purity:</strong> 22K916</p>
            <button
              className="bg-[#ffc107] text-white py-2 px-4 rounded-md hover:bg-yellow-300"
              onClick={() => document.getElementById('close-HUHW98').checked = false}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <div id="popup-HUQE12" className="popup fixed inset-0 flex items-center justify-center bg-white p-5 rounded-lg shadow-lg">
        <div className="relative w-full max-w-lg">
          <input type="checkbox" id="close-HUQE12" className="hidden" />
          <label htmlFor="close-HUQE12" className="absolute top-2 right-2 cursor-pointer text-white text-xl hover:text-black">&times;</label>
          <div className="popup-content">
            <p><strong>Jewellery Registration No:</strong> 7654387561</p>
            <p><strong>Assaying and Hallmarking Centre:</strong> QUALITY ASSAY & HALLMARKING CENTRE PRIVATE LIMITED</p>
            <p><strong>AHC Number:</strong> STO/FTRS/U-345687</p>
            <p><strong>Article Type:</strong> Bangles</p>
            <p><strong>Date of Hallmarking:</strong> 2023-09-11</p>
            <p><strong>Purity:</strong> 22K916</p>
            <button
              className="bg-[#ffc107] text-white py-2 px-4 rounded-md hover:bg-yellow-300"
              onClick={() => document.getElementById('close-HUQE12').checked = false}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <div id="popup-HUMA23" className="popup fixed inset-0 flex items-center justify-center bg-white p-5 rounded-lg shadow-lg">
        <div className="relative w-full max-w-lg">
          <input type="checkbox" id="close-HUMA23" className="hidden" />
          <label htmlFor="close-HUMA23" className="absolute top-2 right-2 cursor-pointer text-white text-xl hover:text-black">&times;</label>
          <div className="popup-content">
            <p><strong>Jewellery Registration No:</strong> 8067543245</p>
            <p><strong>Assaying and Hallmarking Centre:</strong> QUALITY ASSAY & HALLMARKING CENTRE PRIVATE LIMITED</p>
            <p><strong>AHC Number:</strong> STT/JYTG/P-875634</p>
            <p><strong>Article Type:</strong> Ring</p>
            <p><strong>Date of Hallmarking:</strong> 2023-01-14</p>
            <p><strong>Purity:</strong> 22K916</p>
            <p className="text-red-500"><strong>Currently pledged in: ABC Bank</strong></p>
            <button
              className="bg-[#ffc107] text-white py-2 px-4 rounded-md hover:bg-yellow-300"
              onClick={() => document.getElementById('close-HUMA23').checked = false}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
