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
          getAll() { return cookieStore.getAll() },
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
      const { access_token, refresh_token } = data.session

      // Return HTML that stores tokens in localStorage then redirects
      return new NextResponse(
        `<!DOCTYPE html>
<html>
<head><title>Signing in...</title></head>
<body>
<p>Signing in, please wait...</p>
<script>
  const SUPABASE_URL = '${SUPABASE_URL}';
  const SUPABASE_KEY = '${SUPABASE_ANON_KEY}';
  const ACCESS_TOKEN = '${access_token}';
  const REFRESH_TOKEN = '${refresh_token}';

  // Store session in localStorage for Supabase client to pick up
  const session = {
    access_token: ACCESS_TOKEN,
    refresh_token: REFRESH_TOKEN,
    token_type: 'bearer',
    expires_at: ${data.session.expires_at},
    expires_in: ${data.session.expires_in},
    user: ${JSON.stringify(data.session.user)}
  };

  const storageKey = 'sb-dfeccgfhbdtcydpjinaf-auth-token';
  localStorage.setItem(storageKey, JSON.stringify(session));

  // Redirect to member page
  window.location.href = '/member';
</script>
</body>
</html>`,
        {
          status: 200,
          headers: { 'Content-Type': 'text/html' },
        }
      )
    }
  }

  return NextResponse.redirect(`${origin}/member`)
}
