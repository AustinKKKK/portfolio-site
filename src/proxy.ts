import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const ua = request.headers.get('user-agent') ?? 'Unknown Device'
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() ?? 'Unknown IP'

  const pathname = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams

  const isIgnoredByCookie = request.cookies.get('skip_tracker')?.value === '1'
  const isBot =
    /bot|crawler|spider|curl|wget/i.test(ua) ||
    ua.includes('vercel-screenshot') ||
    ua.includes('Amazon')

  const isNoisePath =
    pathname === '/favicon.ico' ||
    pathname === '/favicon.png' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'

  // 내가 직접 들어가서 ?skipTracker=1 붙이면 쿠키 저장
  if (searchParams.get('skipTracker') === '1') {
    const cleanUrl = request.nextUrl.clone()
    cleanUrl.searchParams.delete('skipTracker')

    const response = NextResponse.redirect(cleanUrl)
    response.cookies.set('skip_tracker', '1', {
      path: '/',
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 30, // 30일
    })
    return response
  }

  // 다시 로그 보이게 하고 싶으면 ?skipTracker=0
  if (searchParams.get('skipTracker') === '0') {
    const cleanUrl = request.nextUrl.clone()
    cleanUrl.searchParams.delete('skipTracker')

    const response = NextResponse.redirect(cleanUrl)
    response.cookies.set('skip_tracker', '0', {
      path: '/',
      httpOnly: false,
      maxAge: 0,
    })
    return response
  }

  if (!isIgnoredByCookie && !isBot && !isNoisePath) {
    console.log(`🕵️‍♂️ [VILLAIN TRACKER] ${pathname} | IP: ${ip} | Device: ${ua}`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
}