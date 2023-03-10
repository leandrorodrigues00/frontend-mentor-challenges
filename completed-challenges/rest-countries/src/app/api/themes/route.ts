import { NextRequest, NextResponse } from 'next/server'

let message: boolean | null = null

export async function POST(req: NextRequest) {
  const body = await req.json()
  message = body

  return new NextResponse(String(body))
}

export async function GET() {
  const headers = {
    'Cache-Control': 'no-store, must-revalidate',
  }
  return new NextResponse(String(message ?? false), { headers })
}
