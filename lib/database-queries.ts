import { createClient } from '@/lib/supabase'
import type { Database } from '@/types/database'

type Profile = Database['public']['Tables']['profiles']['Row']
type Autoresponder = Database['public']['Tables']['autoresponders']['Row']
type Product = Database['public']['Tables']['products']['Row']
type BusinessHour = Database['public']['Tables']['business_hours']['Row']

export class DatabaseQueries {
  private supabase = createClient()

  // Profile queries
  async getProfile(userId: string): Promise<Profile | null> {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Error fetching profile:', error)
      return null
    }

    return data
  }

  async updateProfile(userId: string, updates: Partial<Profile>): Promise<Profile | null> {
    const { data, error } = await this.supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()

    if (error) {
      console.error('Error updating profile:', error)
      return null
    }

    return data
  }

  // Autoresponder queries
  async getAutoresponders(userId: string): Promise<Autoresponder[]> {
    const { data, error } = await this.supabase
      .from('autoresponders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching autoresponders:', error)
      return []
    }

    return data || []
  }

  async createAutoresponder(autoresponder: Omit<Autoresponder, 'id' | 'created_at' | 'updated_at'>): Promise<Autoresponder | null> {
    const { data, error } = await this.supabase
      .from('autoresponders')
      .insert(autoresponder)
      .select()
      .single()

    if (error) {
      console.error('Error creating autoresponder:', error)
      return null
    }

    return data
  }

  async updateAutoresponder(id: string, updates: Partial<Autoresponder>): Promise<Autoresponder | null> {
    const { data, error } = await this.supabase
      .from('autoresponders')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating autoresponder:', error)
      return null
    }

    return data
  }

  async deleteAutoresponder(id: string): Promise<boolean> {
    const { error } = await this.supabase
      .from('autoresponders')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting autoresponder:', error)
      return false
    }

    return true
  }

  // Product queries
  async getProducts(userId: string): Promise<Product[]> {
    const { data, error } = await this.supabase
      .from('products')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching products:', error)
      return []
    }

    return data || []
  }

  async getProductsByCategory(userId: string, category: string): Promise<Product[]> {
    const { data, error } = await this.supabase
      .from('products')
      .select('*')
      .eq('user_id', userId)
      .eq('category', category)
      .eq('is_active', true)
      .order('name')

    if (error) {
      console.error('Error fetching products by category:', error)
      return []
    }

    return data || []
  }

  async createProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product | null> {
    const { data, error } = await this.supabase
      .from('products')
      .insert(product)
      .select()
      .single()

    if (error) {
      console.error('Error creating product:', error)
      return null
    }

    return data
  }

  async updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
    const { data, error } = await this.supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating product:', error)
      return null
    }

    return data
  }

  async deleteProduct(id: string): Promise<boolean> {
    const { error } = await this.supabase
      .from('products')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting product:', error)
      return false
    }

    return true
  }

  // Business hours queries
  async getBusinessHours(userId: string): Promise<BusinessHour[]> {
    const { data, error } = await this.supabase
      .from('business_hours')
      .select('*')
      .eq('user_id', userId)
      .order('day_of_week')

    if (error) {
      console.error('Error fetching business hours:', error)
      return []
    }

    return data || []
  }

  async updateBusinessHours(userId: string, businessHours: Omit<BusinessHour, 'id' | 'user_id' | 'created_at' | 'updated_at'>[]): Promise<BusinessHour[]> {
    // Delete existing business hours
    await this.supabase
      .from('business_hours')
      .delete()
      .eq('user_id', userId)

    // Insert new business hours
    const hoursWithUserId = businessHours.map(hour => ({
      ...hour,
      user_id: userId
    }))

    const { data, error } = await this.supabase
      .from('business_hours')
      .insert(hoursWithUserId)
      .select()

    if (error) {
      console.error('Error updating business hours:', error)
      return []
    }

    return data || []
  }

  // Analytics queries
  async getAnalytics(userId: string) {
    // Get total autoresponders
    const { count: totalAutoresponders } = await this.supabase
      .from('autoresponders')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)

    // Get active autoresponders
    const { count: activeAutoresponders } = await this.supabase
      .from('autoresponders')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('is_active', true)

    // Get total products
    const { count: totalProducts } = await this.supabase
      .from('products')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)

    // Get active products
    const { count: activeProducts } = await this.supabase
      .from('products')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('is_active', true)

    return {
      totalAutoresponders: totalAutoresponders || 0,
      activeAutoresponders: activeAutoresponders || 0,
      totalProducts: totalProducts || 0,
      activeProducts: activeProducts || 0,
    }
  }

  // Search queries
  async searchProducts(userId: string, query: string): Promise<Product[]> {
    const { data, error } = await this.supabase
      .from('products')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .or(`name.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
      .order('name')

    if (error) {
      console.error('Error searching products:', error)
      return []
    }

    return data || []
  }

  async getProductCategories(userId: string): Promise<string[]> {
    const { data, error } = await this.supabase
      .from('products')
      .select('category')
      .eq('user_id', userId)
      .eq('is_active', true)

    if (error) {
      console.error('Error fetching categories:', error)
      return []
    }

    // Get unique categories
    const categories = [...new Set(data?.map(item => item.category) || [])]
    return categories.sort()
  }
}