import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.redirect('https://jcoco.org/member?error=' + error)
  }

  if (code) {
    // Pass code to member page - client will exchange it
    return NextResponse.redirect('https://jcoco.org/member?code=' + code)
  }

  return NextResponse.redirect('https://jcoco.org/member')
}
