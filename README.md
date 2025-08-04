# WhatsApp Autoresponder SaaS Platform

A comprehensive SaaS platform for automating WhatsApp business communications with features like autoresponders, product catalogs, and business hours management.

## 🚀 Quick Start

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd whatsapp-autoresponder-saas
npm install
```

### 2. Set Up Supabase

1. **Create a Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose your organization and create a project

2. **Get Your API Keys:**
   - Go to Settings → API in your Supabase dashboard
   - Copy your Project URL and anon/public key

3. **Configure Environment Variables:**
   - Copy `.env.local.example` to `.env.local`
   - Replace the placeholder values with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Set Up Database Schema

1. **Run Migrations:**
   - Go to SQL Editor in your Supabase dashboard
   - Copy and run each migration file from `supabase/migrations/` in order:
     - `create_profiles_table.sql`
     - `create_autoresponders_table.sql` 
     - `create_products_table.sql`
     - `create_business_hours_table.sql`
     - `create_conversations_table.sql`
     - `insert_dummy_data.sql`

2. **Enable Authentication:**
   - Go to Authentication → Settings in Supabase
   - Enable Email authentication
   - Disable email confirmation for development (optional)

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application!

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

### Supabase Setup Checklist

- [ ] Create Supabase project
- [ ] Copy API credentials to `.env.local`
- [ ] Run database migrations
- [ ] Enable email authentication
- [ ] Test user registration and login

## 📊 Features

- **User Authentication** - Secure signup/signin with Supabase Auth
- **Dashboard** - Comprehensive analytics and quick actions
- **Autoresponders** - Smart keyword-based automated responses
- **Product Catalog** - Manage products with images and pricing
- **Business Hours** - Configure operating hours and availability
- **Subscription Management** - Tiered pricing with free trials
- **Responsive Design** - Works on desktop and mobile devices

## 🛠 Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui components
- **Backend:** Supabase (PostgreSQL, Auth, Real-time)
- **Deployment:** Vercel (recommended)

## 📝 Database Schema

The application uses the following main tables:

- `profiles` - User profiles and subscription data
- `autoresponders` - Automated message configurations
- `products` - Product catalog items
- `business_hours` - Operating hours configuration
- `conversations` - Customer conversation tracking
- `messages` - Individual messages within conversations

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to add these in your Vercel dashboard:

```
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.