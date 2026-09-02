# DEPLOYMENT CHECKLIST

**Manish Vidhya Narayanan | AI & Data Science Portfolio**

Use this checklist before deploying the portfolio publicly.

---

## 🔴 CRITICAL (Required Before Launch)

### Contact Information

- [ ] **Email Address**
  - File: `src/config/constants.ts`
  - Current: `contact@manishvidhya.com`
  - Update to: _________________________

- [ ] **GitHub Profile**
  - File: `src/config/constants.ts`
  - Current: `https://github.com/manishvidhya`
  - Update to: _________________________

- [ ] **LinkedIn Profile**
  - File: `src/config/constants.ts`
  - Current: `https://linkedin.com/in/manishvidhya`
  - Update to: _________________________

### Profile Image

- [ ] **Add Profile Photo**
  - Add file to: `public/images/`
  - Update path in: `src/data/profile.ts`
  - Current: `/images/profile-placeholder.jpg`
  - New filename: _________________________

### Contact Form Backend

- [ ] **Connect Contact Form**
  - File: `src/components/contact/ContactForm.tsx`
  - Current: Simulated submission (TODO comment)
  - Options:
    - [ ] Email service (SendGrid, Mailgun)
    - [ ] Form service (Formspree, Netlify Forms)
    - [ ] Custom API endpoint

---

## 🟡 IMPORTANT (Recommended Before Launch)

### Project Assets

- [ ] **ZYNETRA Cover Image**
  - Add to: `public/images/projects/zynetra-cover.jpg`
  - Dimensions: 1200x630 recommended

- [ ] **ZYNETRA Gallery Images**
  - Add to: `public/images/projects/zynetra-1.jpg`
  - Add to: `public/images/projects/zynetra-2.jpg`
  - Add to: `public/images/projects/zynetra-3.jpg`

- [ ] **Portfolio Cover Image**
  - Add to: `public/images/projects/portfolio-cover.jpg`
  - Dimensions: 1200x630 recommended

### Resume

- [ ] **Add Resume File OR Remove CTA**
  - Option 1: Add file to `public/documents/manish-resume.pdf`
  - Option 2: Resume already removed from Hero (✅ Done in Phase 19)

### SEO Assets

- [ ] **Favicon**
  - Current: `src/app/favicon.ico` (Next.js default)
  - Replace with personal branding

- [ ] **Open Graph Image**
  - Add: `public/og-image.jpg` (1200x630)
  - Update in: `src/config/seo.ts`

---

## 🟢 OPTIONAL (Add When Available)

### Optional Media

- [ ] **Voice Introduction** (Optional)
  - Add to: `public/audio/manish-introduction.mp3`
  - File: `src/data/profile.ts`

- [ ] **Video Introduction** (Optional)
  - Add to: `public/videos/manish-introduction.mp4`
  - File: `src/data/profile.ts`

### GitHub Repository Links

- [ ] **ZYNETRA Healthcare Repo** (when ready to share)
  - Add `githubUrl` in: `src/data/projects.ts`

- [ ] **Portfolio Repo** (when ready to share)
  - Add `githubUrl` in: `src/data/projects.ts`

### Demo Links

- [ ] **ZYNETRA Live Demo** (when deployed)
  - Add `demoUrl` in: `src/data/projects.ts`

---

## 🧪 PRE-DEPLOYMENT TESTING

### Code Quality

- [ ] Run `npm run lint` → No errors
- [ ] Run `npm run build` → Successful build
- [ ] Check build output for warnings

### Functionality Testing

- [ ] Test all Hero CTAs:
  - [ ] "View Projects" scrolls to projects
  - [ ] "Contact Me" scrolls to contact
  - [ ] "My Skills" scrolls to skills

- [ ] Test navigation:
  - [ ] Header navigation works
  - [ ] Footer navigation works
  - [ ] Mobile menu works

- [ ] Test projects:
  - [ ] Project cards link to detail pages
  - [ ] `/projects` page loads
  - [ ] `/projects/zynetra-healthcare` loads
  - [ ] `/projects/ai-portfolio` loads

- [ ] Test contact form:
  - [ ] Form validation works
  - [ ] Email validation works
  - [ ] Submit button triggers action

### Cross-Browser Testing

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Responsive Testing

- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader compatible (basic test)
- [ ] Color contrast passes
- [ ] Focus states visible

---

## 🚀 DEPLOYMENT

### Hosting Platform

- [ ] Choose platform:
  - [ ] Vercel (recommended for Next.js)
  - [ ] Netlify
  - [ ] AWS Amplify
  - [ ] Other: _________________________

### Environment Variables

- [ ] Set `NEXT_PUBLIC_SITE_URL` to actual domain
- [ ] Configure any API keys (if using email service)

### Domain Setup

- [ ] Purchase/configure domain
- [ ] Update DNS settings
- [ ] Enable HTTPS/SSL

### Post-Deployment Verification

- [ ] Site loads correctly
- [ ] All images load
- [ ] Contact form works
- [ ] Social links work
- [ ] Mobile layout correct
- [ ] Performance test (Lighthouse)

---

## 📊 MONITORING SETUP (OPTIONAL)

### Analytics (Privacy-First)

- [ ] Choose analytics (if desired):
  - [ ] Plausible Analytics (privacy-focused)
  - [ ] Simple Analytics (privacy-focused)
  - [ ] None (current default)

### Error Monitoring

- [ ] Manual monitoring (current approach)
- [ ] OR: Choose error tracking service

### SEO

- [ ] Submit sitemap to Google Search Console
- [ ] Verify site ownership
- [ ] Test social sharing previews

---

## 📝 CONTENT UPDATES (AS AVAILABLE)

### Experience

- [ ] Add internships to `src/data/experience.ts`
- [ ] Add projects to `src/data/experience.ts`
- [ ] Add programs to `src/data/experience.ts`

### Certifications

- [ ] Add certifications to `src/data/certifications.ts`
- [ ] Include credential URLs
- [ ] Add issue/expiry dates

### Projects

- [ ] Add new projects to `src/data/projects.ts`
- [ ] Update project status as completed
- [ ] Add project screenshots
- [ ] Link GitHub repositories

### Achievements

- [ ] Add new achievements to `src/data/achievements.ts`
- [ ] Include credential links
- [ ] Update placement accurately

---

## ✅ COMPLETION

- [ ] All critical items completed
- [ ] All important items completed
- [ ] Site deployed successfully
- [ ] Shared with network (LinkedIn, etc.)

---

**Date Completed:** _________________________

**Deployed URL:** _________________________

**Notes:**
_________________________________________
_________________________________________
_________________________________________
