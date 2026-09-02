# Portfolio Maintenance Guide

**Portfolio**: Manish Vidhya Narayanan | AI & Data Science Portfolio  
**Last Updated**: September 2, 2026  
**Framework**: Next.js 16.3.3 (App Router)

This guide explains how to maintain, update, and deploy the portfolio.

---

## 📋 Table of Contents

1. [Local Development Setup](#local-development-setup)
2. [Running the Portfolio](#running-the-portfolio)
3. [Code Quality Checks](#code-quality-checks)
4. [Content Updates](#content-updates)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)
7. [Git Workflow](#git-workflow)

---

## 🛠️ Local Development Setup

### Prerequisites

- **Node.js**: 20+ (LTS recommended)
- **npm**: 10+ (comes with Node.js)
- **Git**: For version control

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/futuristicmanish-beep/manish-ai-data-science-portfolio.git

# Navigate to project directory
cd manish-ai-data-science-portfolio/manish-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create `.env.local` in the project root:

```bash
# Production site URL (no trailing slash)
NEXT_PUBLIC_SITE_URL=https://manishvidhya.com
```

**Note**: Never commit `.env.local` to Git. It's already in `.gitignore`.

---

## 🏃‍♂️ Running the Portfolio

### Development Mode

```bash
npm run dev
```

- Opens at: `http://localhost:3000`
- Hot reload enabled (changes auto-refresh)
- Fast Refresh for instant updates
- Turbopack for fast compilation

### Production Mode (Local Test)

```bash
# Build for production
npm run build

# Start production server
npm start
```

- Opens at: `http://localhost:3000`
- Tests production performance
- Verifies build succeeds

### Stop the Server

Press `Ctrl+C` in the terminal.

---

## ✅ Code Quality Checks

Run these before committing code:

### TypeScript Check

```bash
npx tsc --noEmit
```

**Expected**: No errors  
**Checks**: Type safety across all files

### ESLint Check

```bash
npm run lint
```

**Expected**: No errors, no warnings  
**Checks**: Code quality, best practices, accessibility

### Security Audit

```bash
npm audit
```

**Expected**: 0 vulnerabilities  
**Action if vulnerabilities found**: Review and update dependencies

### Production Build Test

```bash
npm run build
```

**Expected**: Build succeeds with 7 routes  
**Routes**:
- `/` (homepage)
- `/projects` (projects list)
- `/projects/zynetra-healthcare` (case study)
- `/projects/ai-portfolio` (case study)
- `/robots.txt`
- `/sitemap.xml`
- `/_not-found`

### Run All Checks

```bash
npm run lint && npx tsc --noEmit && npm audit && npm run build
```

---

## 📝 Content Updates

### Update Personal Information

**File**: `src/data/profile.ts`

```typescript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  tagline: "Your tagline...",
  // ... update other fields
};
```

**File**: `src/config/constants.ts`

```typescript
export const CONTACT = {
  email: "your.email@example.com",
  phone: "+1234567890",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
};
```

### Update Projects

**File**: `src/data/projects.ts`

#### Add a New Project

```typescript
{
  id: "unique-project-id",
  slug: "project-url-slug", // Used in URL: /projects/project-url-slug
  title: "Project Title",
  description: "Short description (appears on cards)",
  longDescription: "Detailed description (appears on case study page)",
  category: ["ai", "healthcare"], // Categories for filtering
  technologies: ["Python", "TensorFlow", "FastAPI"],
  skills: ["Machine Learning", "Data Analysis"],
  status: "in-development", // or "completed", "prototype", "live"
  featured: true, // Shows on homepage
  coverImage: "/images/projects/project-cover.jpg",
  
  // Optional: Full case study
  caseStudy: {
    overview: "Project overview...",
    problem: "Problem statement...",
    solution: "Solution approach...",
    results: ["Result 1", "Result 2"],
    // ... more details
  }
}
```

#### Update Existing Project Status

Find the project by `id` and update the `status` field:

```typescript
status: "completed" // or "in-development", "live", "prototype"
```

### Update Skills

**File**: `src/data/skills.ts`

```typescript
export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      skills: [
        {
          name: "Python",
          level: 90, // 0-100
          description: "Your experience...",
          icon: "Python", // Lucide icon name
        },
        // Add more skills...
      ],
    },
    // Add more categories...
  ],
};
```

### Update Experience

**File**: `src/data/experience.ts`

```typescript
export const experienceData = [
  {
    id: "exp-1",
    title: "Job Title",
    company: "Company Name",
    location: "Location",
    startDate: "Jan 2024",
    endDate: "Present", // or specific date
    description: "Job description...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
    technologies: ["Tech1", "Tech2"],
  },
  // Add more experiences...
];
```

### Update Education

**File**: `src/data/education.ts`

```typescript
export const educationData = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    institution: "University Name",
    location: "City, Country",
    startDate: "2020",
    endDate: "2024",
    gpa: "8.5/10",
    achievements: ["Achievement 1", "Achievement 2"],
  },
  // Add more education...
];
```

### Update Achievements

**File**: `src/data/achievements.ts`

### Update Certifications

**File**: `src/data/certifications.ts`

### Add Project Images

1. Add images to: `public/images/projects/`
2. Reference in `projects.ts`: `/images/projects/your-image.jpg`
3. **Recommended**: Use WebP format for better performance
4. **Size**: Optimize images (max 1920px width recommended)

### Update SEO Metadata

**File**: `src/config/seo.ts`

Update site title, description, Open Graph data, etc.

---

## 🚀 Deployment

### Vercel Deployment (Current Setup)

**Production URL**: `https://manish-ai-data-science-portfolio-16jpk8g41.vercel.app/`  
**Repository**: Connected to GitHub

#### Automatic Deployment

Every push to `main` branch triggers automatic deployment:

```bash
git add .
git commit -m "your commit message"
git push origin main
```

Vercel will:
1. Detect the push
2. Run `npm install`
3. Run `npm run build`
4. Deploy automatically
5. Send notification when complete

#### Manual Deployment via Dashboard

1. Go to: [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click "Deployments"
4. Click "Redeploy" on any deployment
5. Confirm

#### Vercel Project Settings

**Root Directory**: `manish-portfolio`  
**Framework**: Next.js  
**Build Command**: `npm run build`  
**Install Command**: `npm install`  
**Output Directory**: `.next`  
**Node Version**: 20.x

#### Environment Variables on Vercel

Set in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL = https://manishvidhya.com
```

**Important**: Update this when custom domain is connected.

### Custom Domain Setup

**Note**: Custom domain `manishvidhya.com` is referenced in code but not yet connected.

#### To Connect Custom Domain:

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add domain: `manishvidhya.com`
3. Follow Vercel's DNS configuration instructions
4. Add DNS records at your domain registrar:
   - Type: `A` → Value: `76.76.21.21`
   - Type: `CNAME` → Value: `cname.vercel-dns.com`
5. Wait for DNS propagation (up to 48 hours)
6. Update `NEXT_PUBLIC_SITE_URL` environment variable on Vercel

#### Verify Domain is Working

```bash
# Check DNS propagation
nslookup manishvidhya.com

# Test HTTPS
curl -I https://manishvidhya.com
```

---

## 🔧 Troubleshooting

### Build Fails on Vercel

**Symptom**: Deployment fails with build errors

**Solutions**:

1. **Check build locally first**:
   ```bash
   npm run build
   ```

2. **Verify TypeScript**:
   ```bash
   npx tsc --noEmit
   ```

3. **Check Vercel build logs**:
   - Go to Deployments → Failed deployment → View logs
   - Look for specific error messages

4. **Verify Root Directory setting**:
   - Should be: `manish-portfolio`
   - Settings → General → Root Directory

### 404 on Deployment

**Symptom**: Vercel deployment shows 404 NOT_FOUND

**Solutions**:

1. **Verify Vercel Root Directory**:
   - Go to Settings → General
   - Set Root Directory: `manish-portfolio`
   - Redeploy

2. **Check routes were built**:
   ```bash
   npm run build
   # Look for: "✓ Generating static pages (7/7)"
   ```

3. **Verify no vercel.json conflicts**:
   - Should NOT have `vercel.json` in repository root
   - If exists, remove it

### Images Not Loading

**Symptom**: Images show broken or don't load

**Solutions**:

1. **Check file path**:
   - Must be in `public/` directory
   - Reference without `public/`: `/images/project.jpg` (not `/public/images/project.jpg`)

2. **Check file name case**:
   - Linux/Vercel is case-sensitive
   - Use lowercase filenames

3. **Verify image exists**:
   ```bash
   ls public/images/projects/
   ```

### TypeScript Errors After Update

**Symptom**: TypeScript shows errors after updating code

**Solutions**:

1. **Restart TypeScript server** (in VS Code):
   - Press `Ctrl+Shift+P`
   - Type: "TypeScript: Restart TS Server"

2. **Delete and reinstall**:
   ```bash
   Remove-Item -Recurse -Force node_modules
   Remove-Item package-lock.json
   npm install
   ```

3. **Check Next.js types**:
   ```bash
   # Regenerate Next.js types
   npm run dev
   # Then stop it and check errors
   ```

### Hot Reload Not Working

**Symptom**: Changes don't appear in browser during development

**Solutions**:

1. **Hard refresh browser**: `Ctrl+Shift+R`

2. **Restart dev server**:
   ```bash
   # Stop: Ctrl+C
   npm run dev
   ```

3. **Clear Next.js cache**:
   ```bash
   Remove-Item -Recurse -Force .next
   npm run dev
   ```

### Environment Variables Not Working

**Symptom**: Environment variables are undefined

**Solutions**:

1. **Check variable name prefix**:
   - Must start with `NEXT_PUBLIC_` for client-side access
   - Example: `NEXT_PUBLIC_SITE_URL`

2. **Restart development server**:
   - Changes to `.env.local` require restart
   ```bash
   # Stop and restart
   npm run dev
   ```

3. **Verify file name**: Must be exactly `.env.local`

4. **Check Vercel environment variables**:
   - Settings → Environment Variables
   - Must set for Production, Preview, and Development

---

## 🔄 Git Workflow

### Daily Development

```bash
# Check status
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new project case study"

# Push to GitHub (triggers Vercel deployment)
git push origin main
```

### Commit Message Conventions

Use conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test updates
- `chore:` - Maintenance tasks

**Examples**:
```bash
git commit -m "feat: add healthcare AI project case study"
git commit -m "fix: correct LinkedIn profile URL"
git commit -m "docs: update maintenance guide"
git commit -m "chore: update dependencies"
```

### Viewing Git History

```bash
# View recent commits
git log --oneline -10

# View changes in last commit
git show

# View all changes not yet committed
git diff
```

### Undoing Changes

```bash
# Discard changes to a file (before staging)
git checkout -- filename.tsx

# Unstage a file (after git add)
git reset HEAD filename.tsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) - CAREFUL!
git reset --hard HEAD~1
```

### Syncing with Remote

```bash
# Fetch latest changes
git fetch origin

# Pull latest changes
git pull origin main

# Check if local is behind remote
git status
```

---

## 📊 Performance Monitoring

### Lighthouse Audits

Run in Chrome DevTools:

1. Open Chrome DevTools (`F12`)
2. Go to "Lighthouse" tab
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Click "Analyze page load"

**Target Scores**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Vercel Analytics (Optional)

Enable in Vercel Dashboard → Analytics to track:
- Page views
- Performance metrics
- Error rates

---

## 🔐 Security Best Practices

1. **Never commit secrets**:
   - API keys go in `.env.local`
   - `.env.local` is in `.gitignore`

2. **Keep dependencies updated**:
   ```bash
   npm audit
   npm audit fix
   ```

3. **Review Vercel deployment logs**:
   - Check for exposed secrets
   - Verify environment variables are used correctly

4. **Use environment variables**:
   - Never hardcode URLs, keys, or tokens
   - Always use `process.env.NEXT_PUBLIC_*`

---

## 📞 Getting Help

### Documentation

- **Next.js 16**: Check `node_modules/next/dist/docs/` for version-specific docs
- **Tailwind CSS v4**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)

### Common Resources

- [Next.js Discussions](https://github.com/vercel/next.js/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
- [Vercel Support](https://vercel.com/support)

---

## 📝 Maintenance Checklist

### Weekly
- [ ] Check Vercel deployment status
- [ ] Monitor for any error notifications
- [ ] Verify site is accessible

### Monthly
- [ ] Run `npm audit` for security
- [ ] Check for Next.js updates
- [ ] Review Vercel Analytics (if enabled)
- [ ] Test all project links
- [ ] Verify contact links (email, GitHub, LinkedIn)

### Quarterly
- [ ] Review and update dependencies
- [ ] Run full Lighthouse audit
- [ ] Update project content
- [ ] Review and update resume
- [ ] Check for broken external links

### As Needed
- [ ] Add new projects
- [ ] Update experience/education
- [ ] Add certifications
- [ ] Update profile photo
- [ ] Refresh project screenshots

---

**Maintained by**: Manish Vidhya Narayanan  
**Last Updated**: September 2, 2026  
**Version**: 1.0.0
