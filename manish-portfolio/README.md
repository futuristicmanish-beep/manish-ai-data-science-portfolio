# Manish Vidhya Narayanan | AI & Data Science Portfolio

A modern, performant portfolio website built with Next.js 16, React 19, and TypeScript. Showcases AI/ML projects, skills, experience, and professional journey.

## 🚀 Tech Stack

- **Framework**: Next.js 16.3.3 (App Router)
- **UI Library**: React 19.2.8
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 13
- **Icons**: Lucide React
- **Build**: Turbopack

## 📋 Prerequisites

- Node.js 20+ (LTS recommended)
- npm, yarn, or pnpm

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/manishvidhya/portfolio.git
cd portfolio

# Install dependencies
npm install
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Required: Your production website URL
NEXT_PUBLIC_SITE_URL=https://manishvidhya.com
```

See `.env.example` for all available variables.

## 🏃‍♂️ Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## 🏗️ Build

```bash
# Run TypeScript check
npx tsc --noEmit

# Run ESLint
npm run lint

# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
manish-portfolio/
├── public/              # Static assets
│   ├── images/         # Project images
│   ├── documents/      # Resume, credentials
│   ├── audio/          # Voice intro (optional)
│   └── videos/         # Video intro (optional)
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── projects/
│   ├── components/     # React components
│   │   ├── ui/         # Base UI components
│   │   ├── layout/     # Header, Footer, Navigation
│   │   ├── hero/       # Hero section
│   │   ├── projects/   # Project components
│   │   ├── skills/     # Skills components
│   │   ├── experience/ # Experience components
│   │   ├── achievements/
│   │   ├── contact/
│   │   ├── brand/
│   │   └── journey/
│   ├── data/           # Content data files
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── achievements.ts
│   │   ├── certifications.ts
│   │   └── journey.ts
│   ├── config/         # Configuration files
│   │   ├── constants.ts
│   │   ├── seo.ts
│   │   └── brand.ts
│   ├── lib/            # Utilities
│   │   ├── utils.ts
│   │   ├── animations.ts
│   │   └── theme.tsx
│   ├── hooks/          # Custom React hooks
│   └── styles/         # Global styles
└── ...
```

## 🎨 Features

### Core Features
- ✅ Responsive design (mobile-first)
- ✅ Dark/Light/System theme with persistence
- ✅ Smooth animations with Framer Motion
- ✅ TypeScript strict mode
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Structured data (JSON-LD)
- ✅ Accessibility (WCAG 2.1 AA compliant)

### Sections
- ✅ Hero with profile and CTAs
- ✅ Brand showcase (current focus, projects, learning)
- ✅ About & Journey
- ✅ Skills ecosystem
- ✅ Projects showcase with filtering
- ✅ Detailed case studies
- ✅ Experience & Education timeline
- ✅ Achievements & Certifications
- ✅ Contact form

### UX Enhancements
- ✅ Active section detection
- ✅ Back to top button
- ✅ Mobile-friendly navigation
- ✅ Case study table of contents
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Reduced motion support
- ✅ Touch-friendly (44px minimum targets)

## 🔒 Security

- Security headers configured (CSP, X-Frame-Options, etc.)
- No sensitive data in client bundles
- Environment variables properly scoped
- External links have `rel="noopener noreferrer"`
- Input validation on contact form

## ♿ Accessibility

- Semantic HTML5
- Proper heading hierarchy
- ARIA labels and landmarks
- Keyboard navigation support
- Focus visible states
- Color contrast WCAG AA compliant
- Reduced motion preferences respected
- Screen reader tested

## 📊 Performance

- Server-side rendering (SSR)
- Static generation (SSG) for project pages
- Optimized images with Next.js Image
- Code splitting
- Minimal JavaScript bundle
- React Compiler enabled

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables on Vercel
Set in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL`: Your production URL

### Other Platforms
Build command: `npm run build`
Output directory: `.next`
Node version: 20+

## 📝 Content Updates

### Update Personal Information
Edit files in `src/data/`:
- `profile.ts` - Name, title, bio, assets
- `constants.ts` - Contact info, social links

### Add/Edit Projects
Edit `src/data/projects.ts`:
```typescript
{
  id: "unique-id",
  slug: "project-url-slug",
  title: "Project Title",
  description: "Project description",
  category: ["ai", "healthcare"],
  technologies: ["Python", "TensorFlow"],
  skills: ["Machine Learning", "Data Analysis"],
  status: "in-development",
  featured: true,
  coverImage: "/images/projects/cover.jpg",
  caseStudy: { /* ... */ }
}
```

### Update Skills
Edit `src/data/skills.ts`

### Update Experience/Education
Edit `src/data/experience.ts` and `src/data/education.ts`

## 🧪 Testing

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build test
npm run build
```

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animations
- `lucide-react` - Icons
- `clsx` & `tailwind-merge` - Class utilities

### Development
- `typescript` - Type safety
- `eslint` - Code linting
- `tailwindcss` - Styling
- `@tailwindcss/postcss` - PostCSS plugin

## 🤝 Contributing

This is a personal portfolio. However, if you find bugs or have suggestions, please open an issue.

## 📄 License

© 2024 Manish Vidhya Narayanan. All rights reserved.

## 📧 Contact

- Email: contact@manishvidhya.com
- GitHub: [@manishvidhya](https://github.com/manishvidhya)
- LinkedIn: [/in/manishvidhya](https://linkedin.com/in/manishvidhya)

---

Built with ❤️ using Next.js, React, and TypeScript
