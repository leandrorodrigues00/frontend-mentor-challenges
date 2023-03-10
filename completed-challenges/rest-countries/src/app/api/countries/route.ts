import { NextRequest, NextResponse } from 'next/server'

let message: object | null = null

export async function POST(req: NextRequest) {
  const body = await req.json()
  message = body

  return new NextResponse(JSON.stringify(body))
}

export async function GET() {
  if (!message) {
    return new NextResponse(JSON.stringify({}))
  }
  return new NextResponse(JSON.stringify(message))
}
