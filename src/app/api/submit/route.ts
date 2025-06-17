import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  console.log("Form submission received:", body)

  return NextResponse.json({ message: "Submission received!" }, { status: 200 })
}
