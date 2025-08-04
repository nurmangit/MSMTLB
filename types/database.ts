export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          subscription_tier: 'free' | 'starter' | 'professional' | 'enterprise'
          subscription_status: 'active' | 'inactive' | 'trial'
          trial_ends_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          subscription_tier?: 'free' | 'starter' | 'professional' | 'enterprise'
          subscription_status?: 'active' | 'inactive' | 'trial'
          trial_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          subscription_tier?: 'free' | 'starter' | 'professional' | 'enterprise'
          subscription_status?: 'active' | 'inactive' | 'trial'
          trial_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      autoresponders: {
        Row: {
          id: string
          user_id: string
          name: string
          trigger_keywords: string[]
          response_message: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          trigger_keywords: string[]
          response_message: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          trigger_keywords?: string[]
          response_message?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string
          price: number
          image_url: string | null
          category: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description: string
          price: number
          image_url?: string | null
          category: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string
          price?: number
          image_url?: string | null
          category?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      business_hours: {
        Row: {
          id: string
          user_id: string
          day_of_week: number
          open_time: string
          close_time: string
          is_closed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          day_of_week: number
          open_time: string
          close_time: string
          is_closed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          day_of_week?: number
          open_time?: string
          close_time?: string
          is_closed?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}