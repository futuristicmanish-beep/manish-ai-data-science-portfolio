# MONITORING & MAINTENANCE GUIDE

**Manish Vidhya Narayanan | AI & Data Science Portfolio**

This document outlines monitoring, analytics, and maintenance procedures for the portfolio.

---

## ANALYTICS STATUS

### Current Configuration
**Status**: ❌ NOT CONFIGURED

No analytics or tracking services are currently installed. This is intentional to:
- Respect user privacy
- Keep the application lightweight
- Avoid third-party dependencies
- Maintain fast performance

### Future Analytics Options

When analytics becomes necessary, consider privacy-first options:

#### Recommended: Privacy-Friendly Analytics
1. **Plausible Analytics** - Privacy-focused, no cookies, GDPR compliant
2. **Fathom Analytics** - Simple, privacy-first, no tracking
3. **Umami** - Self-hosted, open-source, privacy-focused
4. **Simple Analytics** - Privacy-first, no personal data collection

#### Alternative: Google Analytics 4
If using Google Analytics:
- Enable IP anonymization
- Disable data sharing
- Set appropriate data retention
- Consider consent mechanism if legally required

### Analytics Integration Checklist

Before adding analytics:
- [ ] Obtain explicit approval
- [ ] Choose privacy-friendly provider
- [ ] Review privacy policy requirements
- [ ] Implement consent mechanism if required
- [ ] Add NEXT_PUBLIC_GA_ID or equivalent to .env.example
- [ ] Test implementation in development
- [ ] Verify data collection is appropriate
- [ ] Deploy to production

---

## ERROR MONITORING

### Current Configuration
**Status**: ❌ NOT CONFIGURED

No error monitoring service is currently installed.

### Future Error Monitoring Options

When error monitoring becomes necessary:

1. **Sentry** - Industry standard, free tier available
2. **LogRocket** - Session replay + error tracking
3. **Rollbar** - Real-time error tracking
4. **New Relic** - Full APM solution

### Error Monitoring Integration Checklist

Before adding error monitoring:
- [ ] Obtain explicit approval
- [ ] Choose appropriate service
- [ ] Add API key to environment variables (keep private)
- [ ] Configure source maps for production debugging
- [ ] Set up error filtering (ignore known benign errors)
- [ ] Configure alerts for critical errors
- [ ] Test error reporting in development
- [ ] Deploy to production

### Error Boundaries

Current implementation: ✅ **IMPLEMENTED**
- Next.js provides automatic error boundaries
- Custom 404 page exists at `src/app/not-found.tsx`
- Graceful image fallbacks implemented

---

## PERFORMANCE MONITORING

### Current Configuration
**Status**: ⚠️ MANUAL MONITORING ONLY

Performance is monitored manually through:
- Lighthouse audits
- PageSpeed Insights
- Core Web Vitals in Chrome DevTools

### Performance Targets

**Lighthouse Scores** (to be measured after deployment):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**Core Web Vitals** (to be measured with real users):
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms

### Performance Monitoring Schedule

**After Initial Deployment**:
1. Run Lighthouse audit on production URL
2. Check PageSpeed Insights
3. Monitor Core Web Vitals in Search Console (if configured)
4. Document baseline metrics

**After Major Updates**:
1. Re-run Lighthouse before deployment
2. Compare against baseline
3. Investigate any regressions > 10 points
4. Fix performance issues before deploying

**Monthly**:
1. Run Lighthouse audit
2. Check for performance regressions
3. Review image optimization opportunities
4. Check dependency bundle sizes

---

## PRODUCTION HEALTH MONITORING

### Daily Health Checks

Verify these manually or via uptime monitor:
- [ ] Homepage loads (/)
- [ ] Projects page loads (/projects)
- [ ] Project case studies load (/projects/*)
- [ ] 404 page works for invalid URLs
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] No JavaScript console errors

### Weekly Health Checks
- [ ] All navigation links work
- [ ] Theme switching works (dark/light/system)
- [ ] Contact form displays and validates correctly
- [ ] Image fallbacks work (test with broken image URL)
- [ ] Mobile responsive behavior correct
- [ ] SSL certificate valid (https)

### Monthly Health Checks
- [ ] Run full QA checklist from PHASE_17_QA_REPORT.md
- [ ] Check for broken external links
- [ ] Verify social links (GitHub, LinkedIn)
- [ ] Test on multiple browsers
- [ ] Test on actual mobile devices
- [ ] Review dependency security (`npm audit`)

---

## SEO MONITORING

### Current Implementation
**Status**: ✅ CONFIGURED

SEO elements are properly implemented:
- Meta tags (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Canonical URLs

### SEO Monitoring Schedule

**After Initial Deployment**:
1. Submit sitemap to Google Search Console
2. Verify site ownership
3. Check indexing status
4. Test social sharing previews (Facebook Debugger, Twitter Card Validator)

**Weekly** (First Month):
1. Check Search Console for crawl errors
2. Monitor indexing status
3. Check for manual actions

**Monthly** (Ongoing):
1. Review search performance in Search Console
2. Check for crawl errors
3. Monitor Core Web Vitals
4. Review top queries and pages
5. Check mobile usability issues

**After Content Updates**:
1. Request re-indexing via Search Console (if significant changes)
2. Test Open Graph previews
3. Verify sitemap updates

---

## CONTENT MAINTENANCE

### Project Status Updates

Review project statuses quarterly:

**Current Projects**:
1. **ZYNETRA Healthcare** - Status: "in-development"
2. **AI Portfolio** - Status: "in-development"

**When to Update**:
- Project reaches milestone (prototype → completed)
- New features added (update case study)
- Project deployed (add demo URL)
- Project outcomes achieved (update learnings)

**What to Update**:
```typescript
// src/data/projects.ts
{
  status: "in-development" | "completed" | "prototype",
  demoUrl: "https://...", // when deployed
  caseStudy: {
    outcome: "...", // update when measurable
    learnings: [...], // add new insights
  }
}
```

### Skills Maintenance

Review skills quarterly:

**Current Status Levels**:
- `learning` - Actively learning, basic understanding
- `comfortable` - Can build projects independently
- `exploring` - Initial exploration, not yet proficient

**When to Update**:
- Skill progresses from learning → comfortable
- New technology learned (add to appropriate category)
- Technology becomes deprecated (mark or remove)

### Experience & Education

**Review Annually**:
- [ ] Update education progress (year)
- [ ] Add internships when obtained
- [ ] Add work experience when obtained
- [ ] Update achievements when earned

### Achievements & Certifications

**Add When Earned**:
- [ ] Hackathon participation/awards
- [ ] Certifications completed
- [ ] Academic achievements
- [ ] Publications or research

**Verify**:
- All credential URLs are valid
- Dates are accurate
- Placement labels are honest (Participant vs Winner)

---

## SECURITY MAINTENANCE

### Environment Variables

**Current Variables**:
```bash
NEXT_PUBLIC_SITE_URL=https://manishvidhya.com
```

**Security Rules**:
1. Never commit `.env.local` to git
2. Never expose private keys via `NEXT_PUBLIC_*`
3. Keep `.env.example` updated
4. Rotate credentials if compromised

### Dependency Security

**Monthly Check**:
```bash
npm audit
```

**Fix Critical/High Vulnerabilities**:
```bash
npm audit fix
```

**For Breaking Changes**:
1. Review changelog
2. Update carefully
3. Test thoroughly
4. Deploy after verification

### Security Headers

**Current Headers** (configured in next.config.ts):
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- X-Frame-Options: SAMEORIGIN

**Review Annually**: Check if additional headers needed

---

## DEPENDENCY MAINTENANCE

### Current Dependencies

**Core Framework**:
- Next.js 16.3.3
- React 19.2.8
- TypeScript 5.9.3

**UI Libraries**:
- Tailwind CSS 4
- Framer Motion 13.1.1
- Lucide React 1.38.0

**Utilities**:
- clsx 2.1.1
- tailwind-merge 3.6.0

### Update Strategy

**Patch Updates** (16.3.3 → 16.3.4):
- ✅ Safe to update
- Update quarterly or as needed
- Run tests after update

**Minor Updates** (16.3.0 → 16.4.0):
- ⚠️ Review changelog
- Test thoroughly
- Update when stable

**Major Updates** (16.0.0 → 17.0.0):
- ⚠️ Read migration guide
- Create backup/git checkpoint
- Plan dedicated update session
- Test extensively

### Update Process

```bash
# 1. Check outdated packages
npm outdated

# 2. Update specific package
npm update package-name

# 3. Run linting
npm run lint

# 4. Run build
npm run build

# 5. Test locally
npm start

# 6. Test all functionality
# Follow PHASE_17_QA_REPORT.md checklist

# 7. Commit if successful
git add .
git commit -m "chore: update dependencies"
```

---

## ANALYTICS EVENTS (Future)

### Recommended Events

When analytics is configured, track only meaningful events:

#### Page Views (Automatic)
- Homepage
- Projects page
- Individual project pages
- 404 page

#### User Actions (Manual Tracking)
```typescript
// Example event structure (implementation not included)
{
  event: 'project_view',
  project_slug: 'zynetra-healthcare',
  // NO personal data
}

{
  event: 'cta_click',
  cta_type: 'view_resume',
  // NO personal data
}

{
  event: 'contact_click',
  // NO form data
}
```

### Privacy Rules

**NEVER Track**:
- Names from contact form
- Email addresses
- Message contents
- IP addresses (beyond general location)
- Sensitive personal information

**DO Track** (If Useful):
- Page views (anonymous)
- Project interest (by slug)
- CTA interactions (type only)
- Traffic source (referrer)
- Device category (mobile/desktop)
- Country/region (aggregate)

---

## BACKUP & ROLLBACK

### Version Control
**Current**: Git repository

**Best Practices**:
- Commit frequently with descriptive messages
- Use conventional commit format:
  - `feat:` New feature
  - `fix:` Bug fix
  - `chore:` Maintenance
  - `docs:` Documentation
  - `style:` Formatting
  - `refactor:` Code restructure
  - `perf:` Performance improvement

### Deployment Strategy

**Pre-Deployment**:
1. `git status` - Check for uncommitted changes
2. `npm run lint` - Verify code quality
3. `npm run build` - Verify build succeeds
4. Local testing - Test critical paths
5. `git add .` & `git commit` - Create checkpoint
6. `git push` - Push to repository

**Post-Deployment**:
1. Verify homepage loads
2. Test key functionality
3. Monitor for errors
4. Keep previous deployment available for rollback

**Rollback Procedure** (Vercel):
1. Go to Deployments
2. Find previous working deployment
3. Click "Promote to Production"

---

## TESTING REGRESSION CHECKLIST

After every major update, test:

### Functionality
- [ ] Homepage loads and all sections visible
- [ ] Navigation works (all links)
- [ ] Projects page with filtering
- [ ] Project case studies load
- [ ] 404 page for invalid routes
- [ ] Theme switching (dark/light/system)
- [ ] Contact form validation
- [ ] Copy email button

### Responsive Design
- [ ] 320px (small mobile)
- [ ] 375px (standard mobile)
- [ ] 768px (tablet)
- [ ] 1024px (desktop)
- [ ] 1920px+ (large desktop)

### Accessibility
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus states visible
- [ ] Screen reader headings logical
- [ ] Image alt text appropriate
- [ ] Form labels present

### Performance
- [ ] Run Lighthouse
- [ ] Check bundle size
- [ ] Verify image loading
- [ ] Test animation performance

### Browser Compatibility
- [ ] Chrome
- [ ] Edge
- [ ] Mobile browser

---

## INCIDENT RESPONSE

### Site Down Checklist

1. **Verify Issue**
   - Check from different location/device
   - Check https://downforeveryoneorjustme.com

2. **Check Hosting**
   - Vercel status page
   - Check deployment logs
   - Verify DNS records

3. **Check Recent Changes**
   - Review last deployment
   - Check git commits
   - Review environment variables

4. **Rollback If Needed**
   - Promote previous deployment
   - Fix issue locally
   - Re-test
   - Re-deploy

5. **Document**
   - What happened
   - What caused it
   - How it was fixed
   - How to prevent it

---

## CONTACT FORM BACKEND (Future)

### Current Status
**Status**: Frontend Only (Simulated)

Contact form currently:
- Validates input
- Shows success/error states
- Does NOT actually send messages
- Displays disclaimer: "Frontend-only. Backend integration coming soon."

### Future Backend Options

When backend is needed:

1. **Formspree** - Simple form backend
2. **Netlify Forms** - If hosted on Netlify
3. **SendGrid** - Email API
4. **Custom API Route** - Next.js API route + email service

### Backend Integration Checklist

- [ ] Choose email service provider
- [ ] Set up API keys (keep private)
- [ ] Create API route or webhook
- [ ] Add rate limiting
- [ ] Add spam protection
- [ ] Test email delivery
- [ ] Remove "frontend-only" disclaimer
- [ ] Update ContactForm.tsx implementation

---

## CONTENT STRATEGY

### Portfolio Focus

The portfolio showcases:
1. **Technical Skills** - AI, Data Science, Full-Stack
2. **Projects** - Real work, honest status
3. **Growth Journey** - Learning process
4. **Professional Readiness** - For recruiters/collaborators

### Content Principles

**DO**:
- Keep project statuses honest
- Document real learnings
- Update skills as they develop
- Add achievements when earned
- Maintain professional tone

**DON'T**:
- Fabricate metrics or achievements
- Claim unearned awards
- Exaggerate project outcomes
- Add unnecessary buzzwords
- Overcomplicate with too many features

---

## RECRUITER EXPERIENCE

### Quick Information Access

Ensure recruiters can quickly find:
1. **Who**: Name and title (Hero section - immediate)
2. **What**: AI & Data Science focus (Hero section - immediate)
3. **Skills**: Technical capabilities (Skills section)
4. **Projects**: Practical work (Projects section)
5. **Experience**: Academic + project-based (Experience section)
6. **Contact**: How to reach (Contact section)

### Navigation Time Targets

- **Find name and role**: < 5 seconds
- **Understand technical focus**: < 30 seconds
- **See main projects**: < 1 minute
- **Find contact info**: < 1 minute

---

## MAINTENANCE SCHEDULE SUMMARY

### Daily (Automated/Quick)
- ✅ Site availability (manual spot check or uptime monitor)

### Weekly
- Review Search Console (if configured)
- Check for broken links
- Monitor for errors (if error tracking configured)

### Monthly
- Run Lighthouse audit
- `npm audit` security check
- Review content for updates needed
- Test on different devices/browsers

### Quarterly
- Update project statuses
- Review skills progress
- Check for major dependency updates
- Full QA regression test

### Annually
- Review education progress
- Update experience section
- Review entire portfolio for accuracy
- Consider feature additions if beneficial

---

## FUTURE ENHANCEMENTS (Ideas)

Consider adding only if valuable:

### Content Enhancements
- [ ] Blog/Articles section (demonstrate technical writing)
- [ ] Case study deep-dives with more details
- [ ] Project screenshots/demos when available

### Technical Enhancements
- [ ] Analytics integration (privacy-first)
- [ ] Contact form backend
- [ ] Resume download tracking
- [ ] Search Console integration
- [ ] Error monitoring

### Feature Considerations
- [ ] Dark mode improvements
- [ ] Animation refinements
- [ ] Additional project filters
- [ ] Testimonials section (when available)

**Rule**: Only add features that serve portfolio goals and justify maintenance cost.

---

## NOTES

### Current State
- Portfolio is production-ready
- No analytics or tracking configured (intentional)
- Manual monitoring recommended initially
- Add services only when needed and approved

### Philosophy
- **Privacy-first**: Respect user privacy
- **Performance-first**: Keep site fast
- **Honesty-first**: Accurate representation
- **Simplicity-first**: Avoid over-engineering

---

*Monitoring and maintenance guide prepared for sustainable long-term portfolio management.*
