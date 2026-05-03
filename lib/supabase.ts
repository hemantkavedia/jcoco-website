import { createBrowserClient } from '@supabase/ssr'

const SUPABASE_URL = 'https://dfeccgfhbdtcydpjinaf.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZWNjZ2ZoYmR0Y3lkcGppbmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MzA0NzgsImV4cCI6MjA5MzQwNjQ3OH0.a04d04KIq37nPoDsRLPusZiaMM0oFB_IEAL_osAHpVE'

export const supabase = createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
