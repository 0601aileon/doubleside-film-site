import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      companyName,
      contactName,
      email,
      phone,
      country,
      quantity,
      specifications,
      message,
      productName,
    } = body;

    // Validate required fields
    if (!companyName || !contactName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For MVP: log the inquiry
    console.log('=== New Inquiry ===');
    console.log('Product:', productName || 'Not specified');
    console.log('Company:', companyName);
    console.log('Contact:', contactName);
    console.log('Email:', email);
    console.log('Phone:', phone || 'N/A');
    console.log('Country:', country || 'N/A');
    console.log('Quantity:', quantity || 'N/A');
    console.log('Specifications:', specifications || 'N/A');
    console.log('Message:', message || 'N/A');
    console.log('===================');

    // TODO: Store in database
    // TODO: Send email notification via Resend

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
