# Discovering Anson

A modern personal discovery website built with Next.js, TailwindCSS, and TypeScript. Explore categories of personal inquiry including food, travel, transit, and more.

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Top navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── CategoryGrid.tsx # Category cards grid
│   └── Footer.tsx      # Footer component
└── ...
```

## Technology Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Development:** ESLint, PostCSS

## Customization

### Add More Categories

Edit [src/components/CategoryGrid.tsx](src/components/CategoryGrid.tsx) and add items to the `categories` array:

```typescript
{
  id: 'your-category',
  title: 'Your Category',
  description: 'Your description',
  icon: '🎯',
  color: 'from-color-400 to-color-400',
}
```

### Customize Styling

- Modify [tailwind.config.ts](tailwind.config.ts) for theme customization
- Update [src/app/globals.css](src/app/globals.css) for global styles
- Edit component classes directly in component files

## Building for Production

```bash
npm run build
npm run start
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to connect your GitHub repository

### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically detect the Next.js project and configure it correctly.

## Git Workflow

### First Time Setup

```bash
# Initialize git if not already done
git init

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/discovering-anson.git

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Set up Discovering Anson website"

# Push to GitHub
git push -u origin main
```

### Regular Updates

```bash
# Stage changes
git add .

# Commit with a message
git commit -m "Your commit message"

# Push to GitHub
git push
```

## Environment Variables

Create a `.env.local` file for local environment variables (optional for this project):

```
# .env.local
# Add your environment variables here
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## License

This project is open source and available under the MIT License.
