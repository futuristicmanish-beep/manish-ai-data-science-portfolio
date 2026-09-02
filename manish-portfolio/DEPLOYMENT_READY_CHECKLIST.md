# Deployment Ready Checklist

**Manish Vidhya Narayanan | AI & Data Science Portfolio**

## ✅ Technical Validation Complete

### Build Status
- ✅ **ESLint**: 0 errors, 0 warnings
- ✅ **TypeScript**: 0 errors (strict mode)
- ✅ **Production Build**: Successful (2.4s compile, 5.7s TypeScript, 9 routes)
- ✅ **Node.js**: v24.19.0 (compatible)
- ✅ **npm**: 11.17.0 (compatible)

### Generated Routes (9 total)
```
✅ /                     (Static - Homepage)
✅ /_not-found          (Static - 404 Page)
✅ /projects            (Static - Projects List)
✅ /projects/zynetra-healthcare  (SSG - Case Study)
✅ /projects/ai-portfolio        (SSG - Case Study)
✅ /robots.txt          (Static - SEO)
✅ /sitemap.xml         (Static - SEO)
```

### Security
- ✅ **No secrets exposed**: Comprehensive scan passed
- ✅ **Security headers**: Configured in next.config.ts
- ✅ **External links**: All have `rel="noopener noreferrer"`
- ✅ **Environment variables**: Properly scoped (no NEXT_PUBLIC_ leaks)

### Performance
- ✅ **React Compiler**: Enabled
- ✅ **SSR/SSG**: Hybrid approach optimized
- ✅ **Code splitting**: Automatic
- ✅ **Image optimization**: Next.js Image component

---

## ⚠️ Pre-Deployment Requirements

### 1. CRITICAL - Replace Placeholder Assets

**Profile Assets** (Priority: HIGH)
- [ ] Replace: `/public/images/profile-placeholder.jpg`
  - **Location**: `src/data/profile.ts` line 25
  - **Required**: Actual professional headshot
  - **Dimensions**: Recommended 400x400px minimum

**Project Cover Images** (Priority: HIGH)
- [ ] Replace: `/public/images/projects/zynetra-cover.jpg`
- [ ] Replace: `/public/images/projects/portfolio-cover.jpg`
  - **Location**: `src/data/projects.ts`
  - **Required**: Project screenshots or mockups
  - **Dimensions**: 16:9 aspect ratio recommended

**Resume Document** (Priority: MEDIUM)
- [ ] Add: `/public/documents/manish-resume.pdf`
  - **Location**: `src/data/profile.ts` line 27
  - **Alternative**: Remove resume CTA if not providing

### 2. CRITICAL - Update Contact Information

**Email Address** (Priority: HIGH)
- [ ] Update: `contact@manishvidhya.com`
  - **Location**: `src/config/constants.ts` line 27
  - **Required**: Actual working email address

**Social Media URLs** (Priority: HIGH)
- [ ] Verify: `https://github.com/manishvidhya`
- [ ] Verify: `https://linkedin.com/in/manishvidhya`
  - **Location**: `src/config/constants.ts` lines 37-38
  - **Required**: Actual verified profile URLs

### 3. REQUIRED - Production Environment Variables

**Primary Variable**
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
- **Usage**: SEO metadata, sitemap, canonical URLs
- **Example**: `https://manishvidhya.com`
- **Required**: Must match actual production domain

### 4. OPTIONAL - Media Enhancements

**Audio/Video Introductions** (Priority: LOW)
- [ ] Add: `/public/audio/manish-introduction.mp3` (optional)
- [ ] Add: `/public/videos/manish-introduction.mp4` (optional)
  - **Location**: `src/data/profile.ts` lines 28-29
  - **Note**: Can remain as placeholders, won't break functionality

---

## 🚀 Hosting Platform Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Advantages:**
- Optimal Next.js performance
- Automatic HTTPS
- Edge deployment
- Easy environment variable management

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node.js Version: 20.x

### Option 2: Netlify
**Configuration:**
- Build Command: `npm run build`
- Publish Directory: `out` (requires Next.js static export)
- Node.js Version: 20.x

### Option 3: AWS Amplify
**Configuration:**
- Build Command: `npm run build`
- Base Directory: `/`
- Output Directory: `.next`

### Option 4: Cloudflare Pages
**Configuration:**
- Build Command: `npm run build`
- Output Directory: `.next`
- Compatibility Date: 2023-05-18

---

## 🔧 Pre-Deployment Actions Required

### 1. Domain Setup (If Not Using Vercel Default)
```
[ ] Purchase domain (e.g., manishvidhya.com)
[ ] Configure DNS records
[ ] Set up SSL certificate (automatic with most platforms)
```

### 2. Environment Configuration
```
[ ] Set NEXT_PUBLIC_SITE_URL to production domain
[ ] Verify no development URLs remain
```

### 3. Content Updates
```
[ ] Replace placeholder images
[ ] Update contact email
[ ] Verify social media URLs
[ ] Add resume PDF (or remove CTA)
```

### 4. Final Tests (Pre-Deploy)
```
[ ] Run npm run lint
[ ] Run npx tsc --noEmit  
[ ] Run npm run build
[ ] Verify all routes generate successfully
```

---

## 📋 Post-Deployment Verification Checklist

### Core Functionality
```
[ ] Homepage loads correctly
[ ] Navigation works (all links)
[ ] Projects page displays
[ ] Individual project pages load
[ ] 404 page works for invalid routes
[ ] Contact form validates correctly
```

### Theme & Responsiveness
```
[ ] Light mode works
[ ] Dark mode works
[ ] System theme detection works
[ ] Theme persistence works
[ ] Mobile responsive (320px+)
[ ] Desktop layout (1024px+)
```

### Performance & SEO
```
[ ] Images load properly
[ ] Fonts render correctly
[ ] Animations work smoothly
[ ] Page titles are correct
[ ] Meta descriptions present
[ ] Sitemap.xml accessible
[ ] Robots.txt accessible
```

### Accessibility
```
[ ] Keyboard navigation works
[ ] Focus states visible
[ ] Screen reader compatibility
[ ] Reduced motion respected
```

---

## 🚨 Deployment Blockers

### MUST FIX Before Public Launch
1. **Profile image placeholder** - Replace with actual photo
2. **Contact email placeholder** - Update to working email
3. **Social media URLs** - Verify GitHub and LinkedIn URLs exist

### SHOULD FIX Before Public Launch
1. **Project cover images** - Add actual project screenshots
2. **Resume document** - Add PDF or remove CTA button

### MAY REMAIN (Non-blocking)
1. **Audio/video introductions** - Optional features
2. **Language switching** - Placeholder for future feature
3. **Contact form backend** - Frontend validation sufficient for MVP

---

## 📞 Deployment Support

### Required Information for Deployment
1. **Production domain name** (e.g., manishvidhya.com)
2. **Hosting platform preference** (Vercel recommended)
3. **Confirmation that placeholder assets have been replaced**
4. **Approval to proceed with deployment**

### Ready to Deploy?
- [ ] All critical placeholders replaced
- [ ] Production domain decided
- [ ] Hosting platform selected
- [ ] Environment variables configured
- [ ] Final build successful

---

**Status**: ✅ **TECHNICALLY READY** (Pending content updates)

**Next Step**: Replace placeholder assets and provide deployment approval

**Estimated Setup Time**: 15-30 minutes (after assets provided)