import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  console.log('[callback] code present:', !!code, 'error:', error)
  console.log('[callback] all cookies:', request.cookies.getAll().map(c => c.name))

  if (error) {
    return NextResponse.redirect(`${origin}/member?error=${error}`)
  }

  if (code) {
    const cookieStore = await cookies()
    
    console.log('[callback] cookieStore cookies:', cookieStore.getAll().map(c => c.name))

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          },
        },
      }
    )

    const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
    console.log('[callback] exchange result:', data?.session?.user?.email, 'error:', exchangeError?.message)

    if (!exchangeError && data?.session) {
      const response = NextResponse.redirect(`${origin}/member`)
      cookieStore.getAll().forEach((cookie) => {
        response.cookies.set(cookie.name, cookie.value, { path: '/', sameSite: 'lax' })
      })
      return response
    }
  }

  return NextResponse.redirect(`${origin}/member`)
}
