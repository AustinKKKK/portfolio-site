import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() || 'Unknown IP'
  const ua = request.headers.get('user-agent') || 'Unknown Device'
  
  if (ua.includes('bot') || ua.includes('Amazon')) {
    return NextResponse.next();
  }

  console.log(`🕵️‍♂️ [VILLAIN TRACKER] IP: ${ip} | Device: ${ua}`)

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}