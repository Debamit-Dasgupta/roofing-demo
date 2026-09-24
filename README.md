# Lone Star Roofing Co. | Austin & Travis County Roofing Contractor

Professional, responsive residential roofing website designed for Central Texas homeowners. Built with React 19, Vite, TypeScript, and Tailwind CSS.

## 🚀 Deploying to Vercel via GitHub

This project is pre-configured for seamless, zero-config deployment on [Vercel](https://vercel.com).

### Step-by-Step Deployment:

1. **Push to GitHub**:
   - Push this codebase to your GitHub repository (e.g. `main` or `master` branch).

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** → **"Project"**.
   - Select and import your GitHub repository.

3. **Deploy**:
   - Vercel will automatically detect **Vite** via the included `vercel.json` configuration:
     - **Framework Preset**: `Vite`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **"Deploy"**.

Your website will be live in seconds with automatic SSL, global CDN edge caching, and full responsive support.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📋 Features Included

- **Vercel SPA Routing**: `vercel.json` rewrite rules ensure deep links, modal states, and refreshes work without 404 errors.
- **Fast Build**: Standardized Vite 8 + React 19 production build pipeline with optimized bundle size.
- **Responsive Layout**: Designed for mobile (320px+), tablet, and high-resolution desktop viewports.
- **Brand Assets**: Custom SVG favicon and SEO OpenGraph tags included.
