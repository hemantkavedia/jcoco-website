import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  
  // Pass the code to the member page to handle client-side
  if (code) {
    return NextResponse.redirect(`${origin}/member?code=${code}`)
  }

  return NextResponse.redirect(`${origin}/member`)
}
