import Head from 'next/head';



const ApprovalPage = () => {
  return (
    <div className="bg-black min-h-screen text-center text-white">
      <Head>
        <title>Approval Page</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <a href="../Homelogin/Homelogin.html" className="absolute top-8 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
        Home
      </a>
      <div className="container mx-auto pt-16">
        <h1 className="text-4xl mb-6">HUID Details</h1>
        <img src="/assets/img/demohuiddetails.jpg" alt="HUID Details" className="max-w-lg mx-auto mb-8" />
      </div>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form>
          <label htmlFor="loanAmount" className="block text-gray-700 mb-2">Loan Amount:</label>
          <input type="text" id="loanAmount" name="loanAmount" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black" />

          <label htmlFor="interestRate" className="block text-gray-700 mb-2">Interest Rate:</label>
          <input type="text" id="interestRate" name="interestRate" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black" />

          <label htmlFor="loanTerm" className="block text-gray-700 mb-2">Loan Term:</label>
          <input type="text" id="loanTerm" name="loanTerm" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black" />

          <label htmlFor="repaymentAmount" className="block text-gray-700 mb-2">Repayment Amount per Month:</label>
          <input type="text" id="repaymentAmount" name="repaymentAmount" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black" />

          <label htmlFor="lateFee" className="block text-gray-700 mb-2">Late Fee:</label>
          <input type="text" id="lateFee" name="lateFee" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black" />

          <div id="Agreement" className="text-left mt-6">
            <h3 className="text-gray-700 text-xl mb-4">Agreement Policy</h3>
            <ol className="list-decimal pl-6 text-gray-700">
              <li className="mb-2">If the Borrower defaults on its payments and fails to cure said default within a reasonable amount of time, the Lender will have the option to declare the entire remaining amount of principal and any accrued interest immediately due and payable.</li>
              <li className="mb-2">Prepayment. The Borrower will not be penalized for early payment.</li>
              <li className="mb-2">Severability. In the event any provision of this Agreement is deemed invalid or unenforceable, in whole or in part, that part shall be severed from the remainder of the Agreement and all other provisions shall continue in full force and effect as valid and enforceable.</li>
            </ol>
          </div>

          <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-lg mt-6 hover:bg-yellow-400 transition duration-300">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default ApprovalPage;
