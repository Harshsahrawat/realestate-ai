import { NextRequest, NextResponse } from 'next/server';
import { appendRow } from '../../../lib/googleSheets';


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Send to Google Sheets
    await appendRow([name, email, phone || ""]);

    return NextResponse.json({ message: "Lead stored successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Google Sheets Error:", error);
    return NextResponse.json({ message: "Failed to save lead" }, { status: 500 });
  }
}

