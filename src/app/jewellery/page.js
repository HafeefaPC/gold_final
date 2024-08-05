'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Login.module.css'; // Make sure to create and import a CSS module if you have custom styles

const contractAddress = "0xCB054d63fdCe323e9575603Bc9AA2F9D3191887F";
const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "jewelleryID",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "password",
        "type": "string"
      }
    ],
    "name": "JewelleryPasswordSet",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "jewelleryID",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "password",
        "type": "string"
      }
    ],
    "name": "setPassword",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "jewelleryToPassword",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "jewelleryID",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "password",
        "type": "string"
      }
    ],
    "name": "validateIDAndPassword",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const Page = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.web3 = new Web3(window.ethereum);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    
    try {
      const contract = new web3.eth.Contract(abi, contractAddress);
      const result = await contract.methods.validateIDAndPassword(username, password).call();
      if (result) {
        alert("Login successful!");
        window.location.href = "/choice";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>Jewellery Login</title>
      </Head>
      <div className={styles.login}>
        <div className={styles.card}>
          <h2>Jewellery Login</h2>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="username">Register Id</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit"><span>Login</span></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
