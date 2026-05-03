import { NextResponse, type NextRequest } from 'next/server'

// Minimal middleware - no Supabase auth here to avoid lock conflicts
export async function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: []
}
