"use client";

import {
    LogInWithAnonAadhaar,
    useAnonAadhaar,
    AnonAadhaarProof,
} from '@anon-aadhaar/react';
import { useState } from 'react';

export default function anon({ address }) {
    const [anonAadhaar] = useAnonAadhaar();
    const [fields, setFields] = useState({
        revealAgeAbove18: false,
        revealGender: false,
        revealPinCode: false,
        revealState: false,
    });

    const fieldsToReveal = () => {
        const fieldsToReveal = [];
        if (fields.revealAgeAbove18) fieldsToReveal.push('revealAgeAbove18');
        if (fields.revealGender) fieldsToReveal.push('revealGender');
        if (fields.revealPinCode) fieldsToReveal.push('revealPinCode');
        if (fields.revealState) fieldsToReveal.push('revealState');
        return fieldsToReveal;
    };

    const dataMapping = {
        revealAgeAbove18: 'ageAbove18',
        revealGender: 'gender',
        revealPinCode: 'pinCode',
        revealState: 'state',
    };

    return (
        <div>
            <div>
                <div className='w-[90%] flex flex-col gap-y-3 rounded-xl backdrop-blur-sm p-6 border-yellow-500  border-dotted border-2  max-md:w-[95%] mx-auto mt-20'>
                    <h2 className='text-left text-2xl mb-2 text-yellow-500'>
                        Data you want to share with us?
                    </h2>
                    <label className='flex items-center gap-3 text-yellow-500'>
                        <input
                            type='checkbox'
                            className='toggle toggle-success'
                            onChange={() =>
                                setFields({
                                    ...fields,
                                    revealAgeAbove18: !fields.revealAgeAbove18,
                                })
                            }
                        />
                        Reveal Age above 18
                    </label>
                    <label className='flex items-center gap-3 text-yellow-500'>
                        <input
                            type='checkbox'
                            className='toggle toggle-warning'
                            onChange={() =>
                                setFields({
                                    ...fields,
                                    revealGender: !fields.revealGender,
                                })
                            }
                        />
                        Reveal Gender
                    </label>
                    <label className='flex items-center gap-3 text-yellow-500'>
                        <input
                            type='checkbox'
                            className='toggle toggle-info'
                            onChange={() =>
                                setFields({
                                    ...fields,
                                    revealPinCode: !fields.revealPinCode,
                                })
                            }
                        />
                        Reveal Pincode
                    </label>
                    <label className='flex items-center gap-3 text-yellow-500'>
                        <input
                            type='checkbox'
                            className='toggle toggle-error'
                            onChange={() =>
                                setFields({
                                    ...fields,
                                    revealState: !fields.revealState,
                                })
                            }
                        />
                        Reveal State
                    </label>
                </div>
                
                    <h2 className='text-md text-yellow-500 mb-3'>
                        Verify your identity using Anon Aadhaar, click login!
                    </h2>
                    <div className='flex justify-center items-center'>
                    <LogInWithAnonAadhaar
                        nullifierSeed={230146972112271092284151554347751902457}
                        fieldsToReveal={fieldsToReveal()}
                        _useTestAadhaar={false}
                        signal={address}
                        
                    />
                    </div>
                    <div className='flex gap-2 items-center text-lg'>
                        Status :{' '}
                        <p
                            className={`py-2 ${anonAadhaar?.status === 'logged-out'
                                    ? 'text-red-500'
                                    : 'text-green-300'
                                }`}
                        >
                            {anonAadhaar?.status}
                        </p>
                    </div>
            
            </div>
            <div className='w-[60%] max-md:w-[95%] mx-auto backdrop-blur-md px-6 py-2 border-yellow-500 border-dotted border-2 rounded-xl'>
                {anonAadhaar?.status === 'logged-in' && (
                    <div className='mx-auto text-md text-yellow-500'>
                        <h2 className='my-2 text-xl'>✅ Your Proof is valid</h2>
                        <AnonAadhaarProof
                            code={JSON.stringify(anonAadhaar.anonAadhaarProofs, null, 2)}
                            label='- Anon Aadhaar Proof'
                        />
                        <p className='my-2 text-xl'>Fetched Details from ZK proof</p>
                        {Object.keys(fields).map((item) => {
                            const key = item;
                            if (fields[key])
                                return (
                                    <p key={key}>
                                        {dataMapping[key]} :{' '}
                                        {
                                            JSON.parse(anonAadhaar.anonAadhaarProofs['0'].pcd)
                                                .proof?.[dataMapping[key]]
                                        }
                                    </p>
                                );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
