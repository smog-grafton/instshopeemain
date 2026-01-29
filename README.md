# InstShopee

**InstShopee** is an e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. This repository is the main frontend application: it handles country-specific domains and will be powered by a **Laravel 12.0** backend in later implementation stages, with **Filament 3.3** for the admin panel.

## 🏗️ Architecture

This project follows a **multi-country marketplace architecture**:

- **One Next.js codebase** → handles multiple country domains
- **Domain-based country resolution** → via Host header in middleware
- **Laravel backend integration** → country context passed via headers
- **Country-first data model** → all data filtered by `country_id`

### Domain Structure

- `instshopee.my` → Malaysia
- `instshopee.co.th` → Thailand
- `instshopee.co.id` → Indonesia
- etc.

All domains point to the same Next.js deployment, which resolves country from the domain.

## 📋 Prerequisites

- Node.js 18+ and npm
- Laravel backend API running (for full functionality)

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

Update the following variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_LARAVEL_API_URL=http://localhost:8000/api
```

### 3. Run Development Server

```bash
npm run dev
```

The app will run on [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
instshopee-main/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── lib/                   # Utility libraries
│   ├── api/              # Laravel API integration
│   │   └── client.ts     # API client with country context
│   └── utils.ts          # Utility functions
├── middleware.ts         # Country-aware middleware
└── next.config.ts        # Next.js configuration
```

## 🌍 Country-Aware Routing

The middleware (`middleware.ts`) automatically:

1. Reads the `Host` header from incoming requests
2. Maps domain to country code
3. Sets country context in headers for API calls
4. Passes context to Laravel backend via `X-Country-Code` and `X-Frontend-Domain` headers

### How It Works

```typescript
// Middleware reads domain
const host = request.headers.get("host"); // e.g., "instshopee.my"

// Maps to country
const countryCode = domainCountryMap[host]; // "MY"

// Laravel backend receives:
// X-Country-Code: MY
// X-Frontend-Domain: instshopee.my
```

## 🔧 Backend Implementation (Planned)

The frontend is designed to integrate with a Laravel backend. In its **backend implementation stages**, InstShopee will be powered by:

- **Laravel 12.0** – API, authentication, business logic, and data layer
- **Filament 3.3** – Admin panel for managing products, orders, users, and content

The API client in this repo (`lib/api/client`) already sends country context via `X-Country-Code` and `X-Frontend-Domain` headers so the Laravel backend can serve country-aware data.

## 🔌 Laravel API Integration

The API client automatically includes country context in all requests:

```typescript
import { apiClient } from "@/lib/api/client";
import { headers } from "next/headers";

// In server components
const countryCode = headers().get("x-country-code");
const frontendDomain = headers().get("x-frontend-domain");

// API call with country context
const response = await apiClient.get(
  "/products",
  {},
  countryCode || undefined,
  frontendDomain || undefined
);
```

## 📝 Available Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses Tailwind CSS v4 for styling.

## 🚀 Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Import your GitHub repository to Vercel
3. Configure environment variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL` - Your production domain
   - `NEXT_PUBLIC_LARAVEL_API_URL` - Your Laravel API URL

### Domain Configuration

For multi-country domains:

1. Add all country domains to your Vercel project
2. All domains will point to the same Next.js deployment
3. Update `domainCountryMap` in `middleware.ts` with your production domains

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
