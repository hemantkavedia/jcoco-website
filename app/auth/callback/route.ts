import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  // Redirect to member page with debug info visible in URL
  if (error) {
    return NextResponse.redirect(`${origin}/member?debug=error:${error}`)
  }

  if (!code) {
    return NextResponse.redirect(`${origin}/member?debug=no_code`)
  }

  // Exchange code for session via Supabase REST API directly
  const tokenRes = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/token?grant_type=pkce`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    },
    body: JSON.stringify({
      auth_code: code,
      code_verifier: searchParams.get('code_verifier') ?? '',
    }),
  })

  const tokenData = await tokenRes.json()
  
  if (!tokenRes.ok || !tokenData.access_token) {
    // Can't exchange server-side — pass code to client to handle
    return NextResponse.redirect(`${origin}/member?code=${code}&debug=server_exchange_failed`)
  }

  // Pass tokens in hash for client to pick up
  const redirectUrl = `${origin}/member#access_token=${tokenData.access_token}&refresh_token=${tokenData.refresh_token}&token_type=bearer&type=login`
  return NextResponse.redirect(redirectUrl)
}
