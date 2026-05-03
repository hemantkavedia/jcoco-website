import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { cookies } from 'next/headers'

const SUPABASE_URL = 'https://dfeccgfhbdtcydpjinaf.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZWNjZ2ZoYmR0Y3lkcGppbmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MzA0NzgsImV4cCI6MjA5MzQwNjQ3OH0.a04d04KIq37nPoDsRLPusZiaMM0oFB_IEAL_osAHpVE'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.redirect(`${origin}/member?error=${error}`)
  }

  if (code) {
    const cookieStore = await cookies()

    const supabase = createServerClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY,
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
