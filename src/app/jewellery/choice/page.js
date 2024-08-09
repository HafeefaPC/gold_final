import Head from 'next/head';


const Page = () => {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Jewellery Choice</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="container mx-auto">
        <header className="flex flex-wrap justify-between items-center py-3 border-b border-gray-200">
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
              <a href="/jewellery/choice/new_regis" className="nav-link text-yellow-400 hover:text-white">Register</a>
            </li>
            <li className="nav-item">
              <a href="/jewellery/choice/owner_trans" className="nav-link text-yellow-400 hover:text-white">Ownership</a>
            </li>
            <li className="nav-item">
              <a href="/jewellery/choice/sales" className="nav-link text-yellow-400 hover:text-white">Sell</a>
            </li>
          </ul>
        </header>
      </div>
      <br /><br />

      <div className="flex flex-wrap justify-center items-center mt-48">
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="card bg-white shadow rounded-lg">
            <div className="card-body text-center p-4">
              <h4 className="text-xl font-semibold p-3 text-black">New Registration</h4>
              <a href="/jewellery/choice/new_regis">
                <button type="button" className="w-full py-2 px-4 bg-yellow-400 text-white text-lg rounded-lg">
                  <span>Get started</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="card bg-white shadow rounded-lg">
            <div className="card-body text-center p-4">
              <h4 className="text-xl font-semibold p-3 text-black">Ownership Transfer</h4>
              <a href="/jewellery/choice/owner_trans">
                <button type="button" className="w-full py-2 px-4 bg-yellow-400 text-white text-lg rounded-lg">
                  <span>Get started</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="card bg-white shadow rounded-lg">
            <div className="card-body text-center p-4">
              <h4 className="text-xl font-semibold p-3 text-black">Gold Selling</h4>
              <a href="/jewellery/choice/sales">
                <button type="button" className="w-full py-2 px-4 bg-yellow-400 text-white text-lg rounded-lg">
                  <span>Get started</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
