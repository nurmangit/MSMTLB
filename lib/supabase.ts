import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// Client-side Supabase client for use in Client Components

// Client-side Supabase client (for use in Client Components)
export const createClient = () => createClientComponentClient<Database>()

// Alternative client creation method
export const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

}