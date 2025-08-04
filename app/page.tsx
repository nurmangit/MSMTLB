import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, MessageSquare, Clock, ShoppingBag, BarChart3, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AutoChat Pro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/auth/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
            🚀 Now Available for Small Businesses
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Automate Your <span className="text-blue-600">WhatsApp</span> Business
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your customer service with intelligent autoresponders, product catalogs, 
            and business hour management. Perfect for UMKM and growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Start 14-Day Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <BarChart3 className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 mx-auto max-w-4xl">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="text-left">
                    <CardHeader className="pb-3">
                      <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle className="text-lg">Auto Responses</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">Instant replies to customer inquiries</p>
                    </CardContent>
                  </Card>
                  <Card className="text-left">
                    <CardHeader className="pb-3">
                      <ShoppingBag className="h-8 w-8 text-green-600 mb-2" />
                      <CardTitle className="text-lg">Product Catalog</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">Showcase your products beautifully</p>
                    </CardContent>
                  </Card>
                  <Card className="text-left">
                    <CardHeader className="pb-3">
                      <Clock className="h-8 w-8 text-purple-600 mb-2" />
                      <CardTitle className="text-lg">Business Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">Smart scheduling and availability</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600">Powerful features designed for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
                title: "Smart Auto-Replies",
                description: "Create intelligent responses based on keywords and customer intent"
              },
              {
                icon: <ShoppingBag className="h-12 w-12 text-green-600" />,
                title: "Product Catalog",
                description: "Beautiful product displays with images, prices, and descriptions"
              },
              {
                icon: <Clock className="h-12 w-12 text-purple-600" />,
                title: "Business Hours",
                description: "Automated responses based on your operating schedule"
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-orange-600" />,
                title: "Analytics Dashboard",
                description: "Track conversations, response rates, and customer engagement"
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-600" />,
                title: "Instant Setup",
                description: "Get up and running in minutes with our easy setup wizard"
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-teal-600" />,
                title: "Reliable Delivery",
                description: "99.9% uptime with enterprise-grade infrastructure"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$19",
                period: "per month",
                description: "Perfect for small businesses getting started",
                features: [
                  "Up to 1,000 messages/month",
                  "5 auto-responders",
                  "Basic catalog (20 products)",
                  "Business hours scheduling",
                  "Email support"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "$49",
                period: "per month",
                description: "Ideal for growing businesses",
                features: [
                  "Up to 10,000 messages/month",
                  "Unlimited auto-responders",
                  "Advanced catalog (200 products)",
                  "Analytics dashboard",
                  "Priority support",
                  "Custom branding"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$99",
                period: "per month",
                description: "For large businesses and agencies",
                features: [
                  "Unlimited messages",
                  "Advanced AI responses",
                  "Unlimited products",
                  "Advanced analytics",
                  "24/7 phone support",
                  "Custom integrations",
                  "Dedicated account manager"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-600 shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/auth/signup">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AutoChat Pro to automate 
            their customer communications and boost sales.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              Start Your 14-Day Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="h-6 w-6" />
                <span className="text-xl font-bold">AutoChat Pro</span>
              </div>
              <p className="text-gray-400">
                Professional WhatsApp automation for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AutoChat Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}