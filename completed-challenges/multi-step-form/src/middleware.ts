import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  url.pathname = '/personal-info'

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(url)
  }
}

export const config = {
  match: '/',
}
