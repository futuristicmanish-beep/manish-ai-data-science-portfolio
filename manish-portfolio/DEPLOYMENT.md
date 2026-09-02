# DEPLOYMENT GUIDE

**Manish Vidhya Narayanan | AI & Data Science Portfolio**

This guide covers deploying your portfolio to production using Vercel (recommended) or other hosting platforms.

---

## Prerequisites

Before deploying, ensure:

- [x] Phase 16 optimization complete
- [x] All tests passing (`npm run lint` and `npm run build`)
- [x] Git repository committed and pushed
- [x] Domain name registered (optional but recommended)

---

## Recommended: Deploy to Vercel

Vercel is the recommended platform for Next.js applications. It provides:
- Automatic deployments from Git
- Edge network for global performance
- Automatic SSL certificates
- Preview deployments for PRs
- Built-in analytics

### Step 1: Prepare Your Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Phase 16: Production optimization complete"
git push origin main
```

### Step 2: Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket
3. Import your portfolio repository

### Step 3: Configure Project

During import, Vercel will auto-detect Next.js:

**Framework Preset**: Next.js  
**Root Directory**: `manish-portfolio` (if in monorepo) or `./` (if standalone)  
**Build Command**: `npm run build` (auto-detected)  
**Output Directory**: `.next` (auto-detected)  
**Install Command**: `npm install` (auto-detected)

### Step 4: Set Environment Variables

In the Vercel dashboard, add:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Important**: Use your actual production URL (without trailing slash)

### Step 5: Deploy

Click **Deploy**. Vercel will:
1. Clone your repository
2. Install dependencies
3. Run the production build
4. Deploy to their CDN

First deployment takes ~2-3 minutes.

### Step 6: Configure Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain (e.g., `manishvidhya.com`)
3. Follow Vercel's DNS configuration instructions
4. SSL certificate is automatically provisioned

**Common DNS Records**:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 7: Update Environment Variable

After domain is configured, update:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Vercel will automatically redeploy.

---

## Alternative: Deploy to Netlify

### Prerequisites
- Netlify account
- Git repository

### Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"
  base = "manish-portfolio"

[build.environment]
  NEXT_PUBLIC_SITE_URL = "https://yourdomain.com"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Deploy

1. Connect repository to Netlify
2. Configure build settings
3. Add environment variables
4. Deploy

---

## Alternative: Deploy to AWS Amplify

### Prerequisites
- AWS account
- Git repository

### Steps

1. Open AWS Amplify Console
2. Connect your Git repository
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `.next`
4. Add environment variables
5. Deploy

---

## Alternative: Self-Hosted (VPS/Server)

### Prerequisites
- VPS or server (Ubuntu recommended)
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx for reverse proxy

### Build and Deploy

```bash
# On your local machine, build for production
npm run build

# Copy build files to server
scp -r .next package.json package-lock.json user@yourserver:/var/www/portfolio/

# On server
cd /var/www/portfolio
npm install --production
npm start

# Or with PM2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Post-Deployment Checklist

After deployment, verify:

### Functionality
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Theme switcher works
- [ ] Projects page loads
- [ ] Individual project pages load
- [ ] Contact form displays correctly
- [ ] 404 page shows for invalid URLs

### SEO
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Meta tags present in page source
- [ ] Open Graph tags present
- [ ] Structured data (JSON-LD) present

### Performance
- [ ] Run Lighthouse audit (90+ recommended)
- [ ] Check Core Web Vitals
- [ ] Verify images load correctly
- [ ] Test on mobile device

### Security
- [ ] HTTPS enabled (should be automatic)
- [ ] Security headers present (check with securityheaders.com)
- [ ] No mixed content warnings

---

## Environment Variables Reference

### Required

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your production website URL | `https://manishvidhya.com` |

### Optional (Future)

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_API_URL` | Backend API URL | `https://api.example.com` |
| `FORM_SUBMISSION_WEBHOOK` | Form submission endpoint | `https://hooks.example.com` |

---

## Continuous Deployment

### Automatic Deployments

Once connected to Vercel/Netlify:
- Every push to `main` branch triggers production deployment
- Pull requests get preview deployments
- Failed builds block deployment

### Manual Deployment

Redeploy without code changes:
- Vercel: Click **Redeploy** in dashboard
- Netlify: Click **Trigger deploy**

---

## Monitoring & Analytics

### Vercel Analytics (Built-in)

Enable in Vercel dashboard:
- Real User Monitoring (RUM)
- Core Web Vitals
- Page views and unique visitors

### Google Analytics (Optional)

1. Create GA4 property
2. Get measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Implement tracking in Phase 17

### Error Tracking (Optional)

Consider integrating:
- Sentry for error monitoring
- LogRocket for session replay
- New Relic for APM

---

## Troubleshooting

### Build Fails

**Check**:
- Environment variables are set correctly
- `npm run build` succeeds locally
- Node.js version matches (18+)
- Dependencies are up to date

**Solution**:
```bash
# Clear cache and rebuild locally
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

**Check**:
- Image paths are correct
- Images exist in `public/` directory
- Next.js Image domains configured (if using external images)

### 404 Errors

**Check**:
- All routes are properly generated
- Sitemap includes all pages
- Dynamic routes have `generateStaticParams`

### Slow Performance

**Check**:
- Images are optimized
- JavaScript bundles aren't too large
- Server components used where appropriate
- CDN/Edge caching enabled

---

## Domain Configuration

### DNS Setup

For custom domain, configure:

**Apex Domain** (`manishvidhya.com`):
```
Type: A
Name: @
Value: [Provided by hosting]
```

**WWW Subdomain** (`www.manishvidhya.com`):
```
Type: CNAME
Name: www
Value: [Provided by hosting]
```

### SSL Certificate

- **Vercel/Netlify**: Automatic, no configuration needed
- **Self-hosted**: Use Let's Encrypt with Certbot

```bash
# On Ubuntu with Nginx
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Updating the Site

### To Deploy Changes

```bash
# Make your changes
git add .
git commit -m "Update: [description]"
git push origin main

# Vercel/Netlify automatically redeploys
```

### To Update Content

1. Edit data files in `src/data/`
2. Commit and push changes
3. Automatic deployment triggers

### To Update Assets

1. Add new images to `public/images/`
2. Update references in data files
3. Commit and push

---

## Rollback

### Vercel

1. Go to **Deployments**
2. Find previous working deployment
3. Click **⋯** → **Promote to Production**

### Netlify

1. Go to **Deploys**
2. Find previous working deploy
3. Click **Publish deploy**

### Manual Rollback

```bash
git revert HEAD
git push origin main
```

---

## Performance Optimization

### After Deployment

1. **Run Lighthouse** in Chrome DevTools
2. **Check Core Web Vitals** in PageSpeed Insights
3. **Monitor Real User Metrics** via analytics
4. **Optimize Images** if LCP is slow
5. **Review Bundle Size** if FID/INP is high

---

## Support

For deployment issues:

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

---

## Next Steps After Deployment

1. Submit to search engines
2. Set up monitoring/alerts
3. Configure analytics
4. Test on real devices
5. Gather user feedback
6. Plan Phase 17 enhancements

---

**Deployment prepared. Site is production-ready.**
