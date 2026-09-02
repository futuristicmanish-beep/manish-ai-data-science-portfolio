# Manish Vidhya Narayanan | AI & Data Science Portfolio

**Live Portfolio**: [https://manish-ai-data-science-portfolio-rho.vercel.app/](https://manish-ai-data-science-portfolio-rho.vercel.app/)

A modern, professional portfolio website showcasing AI and data science projects, technical skills, and learning journey. Built with Next.js 16, React 19, and TypeScript to demonstrate full-stack development capabilities.

## 👨‍💻 About This Project

**Who**: Manish Vidhya Narayanan, First-year B.Tech AI & Data Science student  
**What**: Personal portfolio and project showcase  
**Why**: Demonstrate technical skills, project experience, and learning progress to recruiters and collaborators  
**Status**: Live and actively maintained  

## ✨ Key Features

- **Modern Tech Stack**: Next.js 16, React 19, TypeScript 5
- **Professional Design**: Luxury Noir theme with responsive layout
- **Project Showcase**: Detailed case studies with technical depth
- **SEO Optimized**: Google-indexed with structured data
- **Performance Focused**: Static generation, optimized assets
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Tech Stack

- **Framework**: Next.js 16.3.3 (App Router + Turbopack)
- **UI Library**: React 19.2.8
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 13
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🎯 What This Demonstrates

**Full-Stack Development**: Complete Next.js application with modern React patterns  
**Design Systems**: Consistent UI components and theming architecture  
**Performance**: Static generation, code splitting, optimized loading  
**SEO & Analytics**: Structured data, sitemap, Google Search Console integration  
**Accessibility**: Semantic HTML, keyboard navigation, screen reader support  
**Professional Practices**: TypeScript, linting, testing, documentation

## 🏃‍♂️ Quick Start

**Prerequisites**: Node.js 20+, npm

```bash
# Clone and install
git clone https://github.com/futuristicmanish-beep/manish-ai-data-science-portfolio.git
cd manish-ai-data-science-portfolio/manish-portfolio
npm install

# Run locally
npm run dev
# Visit http://localhost:3000
```

## 🔧 Environment Setup

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_SITE_URL=https://manish-ai-data-science-portfolio-rho.vercel.app
```

See `.env.example` for complete configuration options.

## ✅ Production Quality

**All validations pass**:
```bash
npm run lint      # ✅ 0 ESLint errors/warnings
npx tsc --noEmit  # ✅ 0 TypeScript errors  
npm run build     # ✅ Successful build (9 routes)
npm audit         # ✅ 0 vulnerabilities
```

## 🔒 Security & Best Practices

- Environment variables properly scoped (`.env.local` ignored)
- No secrets in client bundles
- Security headers configured
- Input validation on forms
- External links with `rel="noopener noreferrer"`

## 🎨 Design System

**Theme**: Luxury Noir with Gold/Silver accents  
**Responsive**: Mobile-first design (320px - 2560px+)  
**Accessibility**: WCAG 2.1 AA compliant  
**Animation**: Framer Motion with reduced motion support

## 🚀 Deployment

**Live Site**: [https://manish-ai-data-science-portfolio-rho.vercel.app/](https://manish-ai-data-science-portfolio-rho.vercel.app/)

Deployed on Vercel with:
- Automatic deployments from `main` branch
- Environment variables configured
- Custom domain ready (when acquired)
- Performance monitoring enabled

### Deploy Your Own Version

```bash
npm i -g vercel
vercel --prod
```

## 📊 Project Metrics

- **Build Time**: ~3-5 seconds
- **Bundle Size**: Optimized for performance
- **Lighthouse Score**: 95+ across all metrics
- **Routes**: 9 static/SSG pages
- **Dependencies**: Minimal, production-focused

## 🛠️ Built With

**Core**: Next.js 16.3.3 • React 19.2.8 • TypeScript 5  
**Styling**: Tailwind CSS v4 • Custom CSS Properties  
**Animation**: Framer Motion 13 • GPU-accelerated  
**Icons**: Lucide React • SVG-based  
**Deployment**: Vercel • Automatic CI/CD

## 📝 Content Management

### Personal Information
Update `src/data/profile.ts` and `src/config/constants.ts`

### Projects
Add to `src/data/projects.ts`:
```typescript
{
  id: "project-id",
  slug: "project-slug", 
  title: "Project Title",
  description: "Brief description",
  technologies: ["Next.js", "Python"],
  status: "in-development",
  featured: true,
  caseStudy: { /* detailed case study */ }
}
```

### Skills & Experience  
Update `src/data/skills.ts`, `src/data/experience.ts`, `src/data/education.ts`

## 🏗️ Architecture

```
Next.js App Router Structure:
├── app/                 # Route definitions
├── components/         # Reusable UI components  
├── data/              # Content management
├── config/            # Site configuration
├── lib/               # Utilities & helpers
└── hooks/             # Custom React hooks
```

**Key Patterns**: 
- Server/Client component separation
- Static data with TypeScript interfaces  
- Centralized theme management
- Component composition architecture

## 🧪 Development

```bash
npm run dev        # Development server
npm run lint       # Code linting
npm run build      # Production build
npx tsc --noEmit   # Type checking
npm audit          # Security audit
```

## 📧 Contact & Connect

**👤 Manish Vidhya Narayanan**  
B.Tech AI & Data Science Student  
Coimbatore Institute of Engineering and Technology

- **Portfolio**: [manish-ai-data-science-portfolio-rho.vercel.app](https://manish-ai-data-science-portfolio-rho.vercel.app/)
- **Email**: futuristic.manish@gmail.com
- **GitHub**: [@futuristicmanish-beep](https://github.com/futuristicmanish-beep)
- **LinkedIn**: [Manish Vidhya Narayanan](https://www.linkedin.com/in/manish-v-8893893ab)

---

## 🤝 Contributing

This is a personal portfolio project. However:
- **Bug reports**: Please open an issue
- **Suggestions**: Welcome via issues or email
- **Learning**: Feel free to explore the code structure

## 📄 License

© 2024-2026 Manish Vidhya Narayanan. All rights reserved.

---

**Built with ❤️ and Next.js 16 | Showcasing AI & Data Science Learning Journey**
