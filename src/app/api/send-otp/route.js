import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { aadharNumber } = data;

    if (!aadharNumber) {
      return new NextResponse(JSON.stringify({ error: 'Aadhar number is required' }), { status: 400 });
    }


    const otp = Math.floor(100000 + Math.random() * 900000);

    console.log(`Generated OTP for ${aadharNumber}: ${otp}`);


    return new NextResponse(JSON.stringify({ success: true, message: 'OTP sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
