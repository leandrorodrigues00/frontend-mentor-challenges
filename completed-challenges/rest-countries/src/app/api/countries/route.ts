import { NextRequest, NextResponse } from 'next/server'

let message: object | null = null

export async function POST(req: NextRequest) {
  const body = await req.json()
  message = body

  return new NextResponse(JSON.stringify(body), {
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}

export async function GET() {
  if (!message) {
    return new NextResponse(JSON.stringify({}), {
      headers: {
        'Cache-Control': 'no-store',
      },
    })
  }
  return new NextResponse(JSON.stringify(message), {
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}
