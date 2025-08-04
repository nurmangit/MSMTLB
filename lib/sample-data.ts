// Sample data for testing and development
export const sampleAutoresponders = [
  {
    name: 'Welcome Message',
    trigger_keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
    response_message: 'Hello! 👋 Welcome to our business. How can I help you today? You can ask about our products, prices, or business hours.',
    is_active: true
  },
  {
    name: 'Business Hours Inquiry',
    trigger_keywords: ['hours', 'open', 'close', 'time', 'when'],
    response_message: 'Our business hours are:\n📅 Monday-Friday: 9:00 AM - 6:00 PM\n📅 Saturday: 10:00 AM - 4:00 PM\n📅 Sunday: Closed\n\nFeel free to message us anytime and we\'ll respond during business hours!',
    is_active: true
  },
  {
    name: 'Product Catalog',
    trigger_keywords: ['products', 'catalog', 'what do you sell', 'items', 'menu'],
    response_message: 'Here are our featured products! 🛍️\n\nWe offer a wide range of quality items. Would you like to see our full catalog or are you looking for something specific?',
    is_active: true
  },
  {
    name: 'Pricing Inquiry',
    trigger_keywords: ['price', 'cost', 'how much', 'expensive', 'cheap'],
    response_message: 'Thanks for your interest in our pricing! 💰\n\nOur prices are competitive and we offer great value. For specific pricing, please let me know which product you\'re interested in, or I can send you our complete price list.',
    is_active: true
  },
  {
    name: 'Location & Contact',
    trigger_keywords: ['location', 'address', 'where', 'contact', 'phone'],
    response_message: 'You can find us at:\n📍 123 Business Street, City Center\n📞 Phone: +1 (555) 123-4567\n📧 Email: info@business.com\n\nWe\'re easily accessible by public transport and have parking available!',
    is_active: true
  }
]

export const sampleProducts = [
  {
    name: 'Premium Coffee Beans',
    description: 'Freshly roasted arabica coffee beans from sustainable farms. Perfect for espresso and drip coffee.',
    price: 24.99,
    image_url: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
    category: 'Food & Beverage',
    is_active: true
  },
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 89.99,
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    category: 'Electronics',
    is_active: true
  },
  {
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt available in multiple colors and sizes.',
    price: 29.99,
    image_url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    category: 'Clothing',
    is_active: true
  },
  {
    name: 'Handcrafted Leather Wallet',
    description: 'Premium genuine leather wallet with RFID protection and multiple card slots.',
    price: 45.00,
    image_url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    category: 'Accessories',
    is_active: true
  },
  {
    name: 'Smart Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and smartphone integration.',
    price: 129.99,
    image_url: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'Electronics',
    is_active: true
  },
  {
    name: 'Artisan Chocolate Box',
    description: 'Luxury chocolate collection with 12 unique flavors, perfect for gifts or personal indulgence.',
    price: 34.99,
    image_url: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
    category: 'Food & Beverage',
    is_active: true
  },
  {
    name: 'Yoga Mat Premium',
    description: 'Non-slip eco-friendly yoga mat with alignment guides and carrying strap included.',
    price: 39.99,
    image_url: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    category: 'Sports & Fitness',
    is_active: true
  },
  {
    name: 'Ceramic Plant Pot Set',
    description: 'Beautiful set of 3 ceramic plant pots with drainage holes, perfect for indoor plants.',
    price: 22.50,
    image_url: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    category: 'Home & Garden',
    is_active: true
  }
]

export const sampleBusinessHours = [
  { day_of_week: 0, open_time: '10:00', close_time: '16:00', is_closed: false }, // Sunday
  { day_of_week: 1, open_time: '09:00', close_time: '18:00', is_closed: false }, // Monday
  { day_of_week: 2, open_time: '09:00', close_time: '18:00', is_closed: false }, // Tuesday
  { day_of_week: 3, open_time: '09:00', close_time: '18:00', is_closed: false }, // Wednesday
  { day_of_week: 4, open_time: '09:00', close_time: '18:00', is_closed: false }, // Thursday
  { day_of_week: 5, open_time: '09:00', close_time: '18:00', is_closed: false }, // Friday
  { day_of_week: 6, open_time: '10:00', close_time: '16:00', is_closed: false }, // Saturday
]

export const dayNames = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]