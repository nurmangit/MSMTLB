'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Users, ShoppingBag, Clock, BarChart3, Plus, Settings } from 'lucide-react'
import { createClient } from '@/lib/supabase'
import type { Database } from '@/types/database'

type Profile = Database['public']['Tables']['profiles']['Row']

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push('/auth/signin')
        return
      }

      setUser(session.user)

      // Get or create profile
      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (error && error.code === 'PGRST116') {
        // Profile doesn't exist, create one
        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .insert({
            id: session.user.id,
            email: session.user.email!,
            full_name: session.user.user_metadata.full_name || null,
            subscription_tier: 'free',
            subscription_status: 'trial',
            trial_ends_at: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
          })
          .select()
          .single()

        if (createError) {
          console.error('Error creating profile:', createError)
        } else {
          setProfile(newProfile)
        }
      } else if (!error) {
        setProfile(profileData)
      }

      setLoading(false)
    }

    getUser()
  }, [router, supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const stats = [
    {
      title: "Total Messages",
      value: "1,247",
      change: "+12%",
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Active Autoresponders",
      value: "8",
      change: "+2",
      icon: <Settings className="h-6 w-6 text-green-600" />
    },
    {
      title: "Products in Catalog",
      value: "23",
      change: "+5",
      icon: <ShoppingBag className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Response Rate",
      value: "94%",
      change: "+3%",
      icon: <BarChart3 className="h-6 w-6 text-orange-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AutoChat Pro</h1>
                <p className="text-sm text-gray-600">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={profile?.subscription_status === 'trial' ? 'secondary' : 'default'}>
                {profile?.subscription_tier} • {profile?.subscription_status}
              </Badge>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {profile?.full_name || user?.email}!
          </h2>
          <p className="text-gray-600">
            Here's what's happening with your WhatsApp automation today.
          </p>
        </div>

        {/* Trial Banner */}
        {profile?.subscription_status === 'trial' && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-blue-900">Free Trial Active</h3>
                <p className="text-blue-700">
                  {profile.trial_ends_at && 
                    `${Math.ceil((new Date(profile.trial_ends_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days remaining`
                  }
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Upgrade Now
              </Button>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} from last month</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Get started with these common tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4">
                  <Plus className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Create Autoresponder</div>
                    <div className="text-sm text-gray-500">Set up automated replies</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <ShoppingBag className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Add Products</div>
                    <div className="text-sm text-gray-500">Expand your catalog</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <Clock className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Set Business Hours</div>
                    <div className="text-sm text-gray-500">Configure availability</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <BarChart3 className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">View Analytics</div>
                    <div className="text-sm text-gray-500">Track performance</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New message received</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Autoresponder triggered</p>
                    <p className="text-xs text-gray-500">5 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Product catalog updated</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started */}
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Complete these steps to maximize your WhatsApp automation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Account Created</p>
                  <p className="text-sm text-gray-500">Welcome to AutoChat Pro!</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Connect WhatsApp Business</p>
                  <p className="text-sm text-gray-500">Link your WhatsApp Business account</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Create Your First Autoresponder</p>
                  <p className="text-sm text-gray-500">Set up automated responses for common questions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}