# Discovering Anson - Project Setup Instructions

## Project Overview
A modern personal discovery website with sections for Food, Travel, Transit, and More categories. Built with Next.js, TypeScript, TailwindCSS, and ready for Vercel deployment.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Then open http://localhost:3000 in your browser.

### 3. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/discovering-anson.git

# Add files and commit
git add .
git commit -m "Initial commit: Discovering Anson website"

# Push to GitHub
git push -u origin main
```

### 4. Deploy to Vercel

**Option A: Using GitHub Integration (Recommended)**
1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Vercel will auto-detect and deploy your Next.js app

**Option B: Using Vercel CLI**
1. Install: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Customization

### Add/Edit Categories
- Edit `src/components/CategoryGrid.tsx`
- Add items to the `categories` array with title, description, icon, and color

### Customize Styling
- `tailwind.config.ts` - Theme and colors
- `src/app/globals.css` - Global styles
- Component files - Individual component styles

### Add New Pages
Create new files in `src/app/` directory:
- `src/app/food/page.tsx` - Food category page
- `src/app/travel/page.tsx` - Travel category page
- etc.

## Important Files

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - TailwindCSS configuration
- `next.config.js` - Next.js configuration
- `vercel.json` - Vercel deployment config
- `.gitignore` - Git ignore rules
- `src/app/layout.tsx` - Root layout
- `src/app/page.tsx` - Home page
- `src/components/` - React components

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Git Push Failed
Make sure you've:
1. Created repository on GitHub
2. Set the correct remote: `git remote -v`
3. Have proper GitHub credentials

## Environment Setup

Ensure you have:
- Node.js 18+ installed
- Git installed and configured
- GitHub account (for repository)
- Vercel account (for deployment)

## Next Steps

1. Customize your categories in `CategoryGrid.tsx`
2. Add content to each category section
3. Push code to GitHub
4. Deploy to Vercel for live domain
5. Share your website!

## Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Docs](https://docs.github.com)
