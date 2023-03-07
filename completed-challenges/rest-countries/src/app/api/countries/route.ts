import { NextRequest, NextResponse } from 'next/server'

let message: string | null = null

export async function POST(req: NextRequest) {
  const body = await req.text()
  message = body

  return new NextResponse(body)
}

export async function GET() {
  if (!message) {
    return new NextResponse(null)
  }
  return new NextResponse(message)
}
