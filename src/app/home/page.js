import Head from 'next/head';

export default function HomeLogin() {
  return (
    <>
      <Head>
        <title>GOLDERA</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="bg-aliceblue h-screen flex flex-col">
        <div className="flex ">
          <div className="w-1/2 h-full">
            <a href="../index.html">
              <img src="/assets/img/gold.jpg" alt="" className="w-10/12 h-full  object-cover" />
            </a>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="mb-8">
              <img src="/assets/img/logo.svg" alt="logo" className="h-72" />
            </div>
            <div className="flex flex-col  items-center">
              <a href="../users/user.html">
                <button className="w-[200px]  p-3 h-15 mb-5 border border-yellow-300  bg-goldenrod text-white rounded-lg hover:bg-whitesmoke hover:border hover:border-goldenrod">
                  <span className="text-lg ">CITIZEN</span>
                </button>
              </a>
              <a href="../Bank/banklogin.html">
                <button className="w-[200px]   p-3 h-15  border border-yellow-300 h-15 mb-5 bg-goldenrod text-white rounded-lg hover:bg-whitesmoke hover:border hover:border-goldenrod">
                  <span className="text-lg">BANK</span>
                </button>
              </a>
              <a href="../Jewellery/login.html">
                <button className="w-[200px] p-3 h-15  border border-yellow-300 h-15 mb-5 bg-goldenrod text-white rounded-lg hover:bg-whitesmoke hover:border hover:border-goldenrod">
                  <span className="text-lg">JEWELLERY</span>
                </button>
              </a>
              <a href="../bis/page">
                <button className="w-[200px] p-3 h-15  border border-yellow-300 h-15 mb-5 bg-goldenrod text-white rounded-lg hover:bg-whitesmoke hover:border hover:border-goldenrod">
                  <span className="text-lg">BIS</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
