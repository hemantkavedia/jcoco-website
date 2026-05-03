import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.redirect(`${origin}/member?error=${error}`)
  }

  // Pass code back to member page — client has the verifier in localStorage
  if (code) {
    return NextResponse.redirect(`${origin}/member?code=${code}`)
  }

  return NextResponse.redirect(`${origin}/member`)
}
