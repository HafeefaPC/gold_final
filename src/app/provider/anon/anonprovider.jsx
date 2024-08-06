"use client";


import { AnonAadhaarProvider } from "@anon-aadhaar/react";

const activeChain = "ethereum";

export default function AnonProvider({ children }) {
    return (
        <AnonAadhaarProvider >
            {children}
        </AnonAadhaarProvider>
    );
}
