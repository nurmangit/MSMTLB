/*
  # Insert dummy data for testing

  1. Sample Data
    - Demo user profiles with different subscription tiers
    - Sample autoresponders with common business scenarios
    - Product catalog with various categories
    - Business hours for different business types
    - Sample conversations and messages

  Note: This creates test data for development purposes
*/

-- Insert sample profiles (these will be created when users sign up)
-- We'll create some autoresponders, products, and business hours for the demo

-- Sample autoresponders for common business scenarios
INSERT INTO autoresponders (user_id, name, trigger_keywords, response_message, is_active) VALUES
-- Note: user_id will be populated when actual users sign up
-- For now, we'll create a function to insert sample data for new users

-- Create function to setup sample data for new users
CREATE OR REPLACE FUNCTION setup_sample_data_for_user(user_uuid uuid)
RETURNS void AS $$
BEGIN
  -- Insert sample autoresponders
  INSERT INTO autoresponders (user_id, name, trigger_keywords, response_message, is_active) VALUES
  (user_uuid, 'Welcome Message', ARRAY['hello', 'hi', 'hey', 'good morning', 'good afternoon'], 
   'Hello! 👋 Welcome to our business. How can I help you today? You can ask about our products, prices, or business hours.', true),
  
  (user_uuid, 'Business Hours Inquiry', ARRAY['hours', 'open', 'close', 'time', 'when'], 
   'Our business hours are:\n📅 Monday-Friday: 9:00 AM - 6:00 PM\n📅 Saturday: 10:00 AM - 4:00 PM\n📅 Sunday: Closed\n\nFeel free to message us anytime and we''ll respond during business hours!', true),
  
  (user_uuid, 'Product Catalog', ARRAY['products', 'catalog', 'what do you sell', 'items', 'menu'], 
   'Here are our featured products! 🛍️\n\nWe offer a wide range of quality items. Would you like to see our full catalog or are you looking for something specific?', true),
  
  (user_uuid, 'Pricing Inquiry', ARRAY['price', 'cost', 'how much', 'expensive', 'cheap'], 
   'Thanks for your interest in our pricing! 💰\n\nOur prices are competitive and we offer great value. For specific pricing, please let me know which product you''re interested in, or I can send you our complete price list.', true),
  
  (user_uuid, 'Location & Contact', ARRAY['location', 'address', 'where', 'contact', 'phone'], 
   'You can find us at:\n📍 123 Business Street, City Center\n📞 Phone: +1 (555) 123-4567\n📧 Email: info@business.com\n\nWe''re easily accessible by public transport and have parking available!', true);

  -- Insert sample products
  INSERT INTO products (user_id, name, description, price, image_url, category, is_active) VALUES
  (user_uuid, 'Premium Coffee Beans', 'Freshly roasted arabica coffee beans from sustainable farms. Perfect for espresso and drip coffee.', 24.99, 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg', 'Food & Beverage', true),
  
  (user_uuid, 'Wireless Bluetooth Headphones', 'High-quality wireless headphones with noise cancellation and 30-hour battery life.', 89.99, 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg', 'Electronics', true),
  
  (user_uuid, 'Organic Cotton T-Shirt', 'Comfortable and sustainable organic cotton t-shirt available in multiple colors and sizes.', 29.99, 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg', 'Clothing', true),
  
  (user_uuid, 'Handcrafted Leather Wallet', 'Premium genuine leather wallet with RFID protection and multiple card slots.', 45.00, 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg', 'Accessories', true),
  
  (user_uuid, 'Smart Fitness Tracker', 'Advanced fitness tracker with heart rate monitoring, GPS, and smartphone integration.', 129.99, 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg', 'Electronics', true),
  
  (user_uuid, 'Artisan Chocolate Box', 'Luxury chocolate collection with 12 unique flavors, perfect for gifts or personal indulgence.', 34.99, 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg', 'Food & Beverage', true),
  
  (user_uuid, 'Yoga Mat Premium', 'Non-slip eco-friendly yoga mat with alignment guides and carrying strap included.', 39.99, 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg', 'Sports & Fitness', true),
  
  (user_uuid, 'Ceramic Plant Pot Set', 'Beautiful set of 3 ceramic plant pots with drainage holes, perfect for indoor plants.', 22.50, 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg', 'Home & Garden', true);

  -- Insert sample business hours (Monday to Sunday)
  INSERT INTO business_hours (user_id, day_of_week, open_time, close_time, is_closed) VALUES
  (user_uuid, 0, '10:00', '16:00', false), -- Sunday
  (user_uuid, 1, '09:00', '18:00', false), -- Monday
  (user_uuid, 2, '09:00', '18:00', false), -- Tuesday
  (user_uuid, 3, '09:00', '18:00', false), -- Wednesday
  (user_uuid, 4, '09:00', '18:00', false), -- Thursday
  (user_uuid, 5, '09:00', '18:00', false), -- Friday
  (user_uuid, 6, '10:00', '16:00', false); -- Saturday

END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically setup sample data for new users
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Setup sample data for the new user
  PERFORM setup_sample_data_for_user(NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger that fires after a new profile is inserted
CREATE TRIGGER setup_new_user_data
  AFTER INSERT ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();