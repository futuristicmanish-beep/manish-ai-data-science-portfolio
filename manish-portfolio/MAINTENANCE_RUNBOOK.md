# MAINTENANCE RUNBOOK

**Quick Reference Guide for Portfolio Maintenance**

---

## QUICK HEALTH CHECK

### 5-Minute Check
```bash
# 1. Check site is live
# Visit: https://yourdomain.com

# 2. Test key pages
# Visit: /projects
# Visit: /projects/zynetra-healthcare

# 3. Check console (F12)
# Should have no errors
```

---

## UPDATING CONTENT

### Update Project Status

**File**: `src/data/projects.ts`

```typescript
{
  status: "in-development", // Change this
  // Options: "concept", "in-development", "prototype", "completed", "learning-project"
}
```

### Add New Project

**File**: `src/data/projects.ts`

```typescript
{
  id: "unique-id",
  slug: "project-url-slug",
  title: "Project Title",
  shortDescription: "Brief description",
  description: "Longer description",
  category: ["ai", "web"], // Options: ai, data-science, healthcare, web, full-stack, tools
  technologies: ["React", "Next.js"],
  skills: ["react", "nextjs"],
  status: "in-development",
  featured: false,
  order: 3, // Display order
  caseStudy: {
    problem: "...",
    solution: "...",
    // ... full case study
  }
}
```

### Update Skills

**File**: `src/data/skills.ts`

```typescript
{
  status: "learning", // Change to "comfortable" when proficient
}
```

### Add Achievement

**File**: `src/data/achievements.ts`

```typescript
{
  id: "unique-id",
  title: "Achievement Title",
  type: "hackathon", // Options: hackathon, competition, academic, program, recognition
  date: "2026",
  placement: "Participant", // Be honest!
  description: "What you did",
  order: 2,
}
```

### Add Certification

**File**: `src/data/certifications.ts`

```typescript
{
  id: "cert-id",
  name: "Certificate Name",
  issuer: "Issuing Organization",
  issueDate: "Month Year",
  credentialUrl: "https://...",
  skills: ["skill1", "skill2"],
  order: 1,
}
```

### Update Contact Info

**File**: `src/config/constants.ts`

```typescript
export const CONTACT_INFO = {
  email: "your.email@example.com", // Update this
  location: "City, State, Country",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername", // Update this
  linkedin: "https://linkedin.com/in/yourusername", // Update this
};
```

---

## DEPLOYMENT WORKFLOW

### Standard Update

```bash
# 1. Make changes
# Edit files as needed

# 2. Test locally
npm run lint
npm run build
npm start
# Test in browser

# 3. Commit and push
git add .
git commit -m "chore: update project status"
git push

# 4. Vercel auto-deploys
# Wait 2-3 minutes

# 5. Test production
# Visit live site
# Test changed pages
```

---

## DEPENDENCY UPDATES

### Safe Patch Updates

```bash
# Check what's outdated
npm outdated

# Update patch versions (16.3.3 → 16.3.4)
npm update

# Test
npm run lint
npm run build

# If successful, commit
git add package*.json
git commit -m "chore: update dependencies"
git push
```

### Major Updates (Careful!)

```bash
# Read changelog first!
# Visit: https://nextjs.org/docs

# Create backup
git checkout -b update-nextjs

# Update
npm install next@latest

# Test thoroughly
npm run lint
npm run build
npm start

# Test all functionality
# If works, merge to main
```

---

## SECURITY CHECKS

### Monthly Security Audit

```bash
# Check for vulnerabilities
npm audit

# If vulnerabilities found:
npm audit fix

# Test after fixing
npm run build

# Deploy if successful
```

---

## TROUBLESHOOTING

### Build Fails

```bash
# 1. Check error message carefully

# 2. Common fixes:
rm -rf .next node_modules
npm install
npm run build

# 3. If TypeScript errors:
# Fix the actual errors shown

# 4. If still fails:
# Check recent changes
git log
git diff HEAD~1

# 5. Rollback if needed
git revert HEAD
```

### Site Down

```bash
# 1. Check Vercel dashboard
# Look for deployment errors

# 2. Check environment variables
# Ensure NEXT_PUBLIC_SITE_URL is set

# 3. Rollback to previous deployment
# Vercel Dashboard → Deployments → Previous → Promote

# 4. Fix locally, retest, redeploy
```

### Images Not Loading

```bash
# Check file exists:
ls public/images/your-image.jpg

# Check path in code:
# Should be: /images/your-image.jpg
# NOT: public/images/your-image.jpg

# Redeploy if fixed
```

---

## TESTING CHECKLIST

### Before Every Deployment

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] Local testing works
- [ ] Changed pages tested
- [ ] Mobile responsive (resize browser)
- [ ] Dark/light theme (if visual changes)

### After Deployment

- [ ] Homepage loads
- [ ] Navigation works
- [ ] Changed pages verified
- [ ] No console errors (F12)
- [ ] Mobile test (actual device if possible)

---

## EMERGENCY CONTACTS

### Hosting
- **Platform**: Vercel
- **Dashboard**: https://vercel.com/dashboard

### Repository
- **Platform**: GitHub (assumed)
- **URL**: [Your Repo URL]

### Domain
- **Registrar**: [Your Domain Registrar]
- **DNS**: [Your DNS Provider]

---

## COMMON TASKS

### Add New Project Image

```bash
# 1. Place image in: public/images/projects/
# Example: public/images/projects/my-project-cover.jpg

# 2. Update project data
# File: src/data/projects.ts
coverImage: "/images/projects/my-project-cover.jpg",

# 3. Deploy
git add .
git commit -m "feat: add project cover image"
git push
```

### Update Resume

```bash
# 1. Place PDF in: public/documents/
# Example: public/documents/manish-resume.pdf

# 2. Ensure filename matches profileData:
# File: src/data/profile.ts
resume: "/documents/manish-resume.pdf",

# 3. Deploy
git add .
git commit -m "docs: update resume"
git push
```

### Change Production URL

```bash
# 1. Update environment variable in Vercel
# Dashboard → Settings → Environment Variables
# Variable: NEXT_PUBLIC_SITE_URL
# Value: https://yournewdomain.com

# 2. Redeploy (Vercel will auto-trigger)

# 3. Test sitemap and robots.txt
# Visit: /sitemap.xml
# Visit: /robots.txt
# Should show new domain
```

---

## MONITORING REMINDERS

### Daily
- Quick site check (just visit homepage)

### Weekly  
- Check any error alerts (if monitoring configured)
- Review analytics (if configured)

### Monthly
- Run `npm audit`
- Check Lighthouse score
- Review Search Console (if configured)

### Quarterly
- Update content (projects, skills)
- Review achievements
- Check for major dependency updates
- Full QA test

---

## BACKUP STRATEGY

### Version Control
- ✅ Git repository (primary backup)
- Commit frequently
- Push to remote regularly

### Before Major Changes
```bash
# Create checkpoint
git checkout -b backup-before-major-change
git push origin backup-before-major-change

# Work on main
git checkout main
# Make changes...

# If problems, restore:
git checkout backup-before-major-change
git checkout -b main-fixed
```

---

## PERFORMANCE CHECKS

### Quick Performance Test

```bash
# 1. Open Chrome DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Generate report
# 4. Check scores:
#    - Performance: Should be 90+
#    - Accessibility: Should be 95+
#    - Best Practices: Should be 95+
#    - SEO: Should be 95+
```

### If Performance Drops

1. Check image sizes (should use Next.js Image)
2. Check new dependencies (run `npm list`)
3. Check bundle size (build output shows sizes)
4. Compare Lighthouse before/after changes

---

## ACCESSIBILITY CHECKS

### Quick Keyboard Test

1. Press Tab repeatedly
2. All interactive elements should highlight
3. Press Enter on focused elements
4. Should activate (buttons, links)

### Theme Test

1. Toggle dark/light mode
2. All text should remain readable
3. No invisible elements
4. Proper contrast maintained

---

## CONTENT RULES

### DO ✅
- Keep project statuses accurate
- Update skills as they progress
- Add real achievements when earned
- Document actual learnings
- Maintain honest descriptions

### DON'T ❌
- Claim unearned awards
- Fabricate employment history
- Exaggerate project metrics
- Mark learning projects as "completed" prematurely
- Add unnecessary buzzwords

---

## QUICK COMMANDS

```bash
# Development
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint

# Security check
npm audit

# Check outdated
npm outdated

# Update packages
npm update

# Clean build
rm -rf .next node_modules
npm install
npm run build
```

---

## GETTING HELP

### Documentation
1. This runbook (quick reference)
2. MONITORING.md (detailed guide)
3. DEPLOYMENT.md (deployment guide)
4. PHASE_17_QA_REPORT.md (QA checklist)

### Next.js Issues
- Docs: https://nextjs.org/docs
- GitHub: https://github.com/vercel/next.js/issues

### Vercel Issues
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

---

*Keep this runbook updated as processes evolve.*
