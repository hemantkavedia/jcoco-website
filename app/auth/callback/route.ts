import { NextRequest, NextResponse } from 'next/server'

// Just redirect to member page - let client handle everything
export async function GET(request: NextRequest) {
  const { origin } = new URL(request.url)
  return NextResponse.redirect(`${origin}/member`)
}
