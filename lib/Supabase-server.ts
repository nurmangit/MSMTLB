import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types/database'

// Server-side Supabase client (for use in Server Components and API routes)
export const createServerClient = () => createServerComponentClient<Database>({ cookies })