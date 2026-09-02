# Design System Documentation

**Manish Vidhya Narayanan | AI & Data Science Portfolio**

## Overview

This document describes the foundation design system implemented in **Phase 5**. The design system provides a comprehensive set of reusable components, design tokens, and utilities for building a premium, futuristic, minimal portfolio website.

---

## Design Philosophy

- **Futuristic**: Modern, clean, technology-forward aesthetic
- **Premium**: High-quality, polished, professional appearance
- **Minimal**: Restrained use of effects, focused on content
- **Accessible**: Keyboard navigation, screen readers, reduced motion support
- **Responsive**: Mobile-first, works on all screen sizes

---

## Architecture

```
src/
├── components/ui/          # Reusable UI components
├── styles/                 # Design tokens and typography
├── lib/                    # Utilities and animations
├── config/                 # Constants and configuration
└── types/                  # TypeScript types
```

---

## Design Tokens

All design tokens are centralized in `src/styles/design-tokens.css`.

### Colors

**Dark Theme (Default)**
- Background: `#0a0a0a`
- Foreground: `#fafafa`
- Primary: Indigo (`#6366f1`)
- Secondary: Purple (`#a855f7`)
- Accent: Cyan (`#22d3ee`)

**Light Theme**
- Background: `#ffffff`
- Foreground: `#09090b`
- Colors adjusted for readability on light backgrounds

### Spacing System

- `--spacing-xs`: 8px
- `--spacing-sm`: 12px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px
- `--spacing-3xl`: 64px
- `--spacing-4xl`: 96px
- `--spacing-5xl`: 128px

### Border Radius

- `--radius-sm`: 6px
- `--radius-md`: 8px
- `--radius-lg`: 12px
- `--radius-xl`: 16px
- `--radius-2xl`: 24px
- `--radius-pill`: 9999px

### Typography Scale

- Font Families: Geist Sans, Geist Mono
- Responsive sizes using `clamp()` for fluid scaling
- Display heading: 40px - 96px
- H1: 32px - 60px
- H2: 28px - 48px
- H3: 24px - 36px
- H4: 20px - 30px

---

## Components

### Layout Components

#### Container
```tsx
<Container size="default">Content</Container>
```
Sizes: `default` | `narrow` | `wide` | `full`

#### Section
```tsx
<Section spacing="default" containerSize="default">
  Content
</Section>
```
Spacing: `default` | `compact` | `spacious`

### UI Components

#### Button
```tsx
<Button variant="primary" size="md">
  Click Me
</Button>
```
Variants: `primary` | `secondary` | `ghost` | `outline`
Sizes: `sm` | `md` | `lg`

#### Card
```tsx
<Card variant="default" interactive>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```
Variants: `default` | `glass` | `bordered` | `elevated`

#### Badge
```tsx
<Badge variant="primary" size="md">
  React
</Badge>
```
Variants: `default` | `primary` | `secondary` | `accent` | `success` | `warning` | `error` | `outline`

#### IconButton
```tsx
<IconButton label="Theme Toggle" variant="ghost">
  🌙
</IconButton>
```

#### Input & Textarea
```tsx
<Input 
  label="Full Name" 
  placeholder="Enter name"
  required 
/>

<Textarea 
  label="Message"
  placeholder="Your message..."
/>
```

#### Heading
```tsx
<Heading level={1} gradient>
  MANISH VIDHYA NARAYANAN
</Heading>
```

#### Link
```tsx
<Link href="#" variant="primary" external>
  Visit Site
</Link>
```

### Background Components

#### Background
```tsx
<Background variant="grid" />
```
Variants: `default` | `grid` | `dots` | `gradient` | `glow`

#### GradientOrb
```tsx
<GradientOrb 
  position="top-right" 
  color="primary" 
  size="lg" 
/>
```

---

## Animation System

Framer Motion utilities are available in `src/lib/animations.ts`:

- `fadeIn` - Basic fade in
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `scaleIn` - Scale and fade in
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `staggerContainer` - For staggered children
- `staggerItem` - Child items

**Reduced Motion Support**: All animations respect `prefers-reduced-motion`.

---

## Utilities

### cn() - Class Name Utility
```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

### Other Utilities
- `formatDate()` - Format dates for display
- `debounce()` - Debounce functions
- `generateId()` - Generate unique IDs
- `clamp()` - Clamp numbers
- `prefersReducedMotion()` - Check motion preference

---

## Accessibility

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Visible focus states on all focusable elements
- Proper tab order

### Screen Readers
- Semantic HTML elements
- ARIA labels where needed
- Alt text for images

### Reduced Motion
- Respects `prefers-reduced-motion` setting
- Animations can be disabled globally

### Color Contrast
- All text meets WCAG AA standards
- High contrast between foreground/background

---

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1536px

### Mobile-First Approach
All components are designed mobile-first with progressive enhancement for larger screens.

---

## Theme System

### Dark/Light Modes
The design system supports both dark and light themes:

- Dark mode is the default
- Light mode can be toggled (implementation in Phase 6)
- Uses CSS custom properties for easy theme switching
- System preference detection ready

---

## Performance Considerations

- Minimal JavaScript dependencies
- CSS-based animations where possible
- Transform/opacity for smooth animations
- Lazy loading ready
- Optimized asset loading

---

## Dependencies Added

```json
{
  "clsx": "^2.x" - Class name utilities
  "tailwind-merge": "^2.x" - Tailwind class merging
  "framer-motion": "^12.x" - Animation library
}
```

---

## File Structure

### Styles
- `src/styles/design-tokens.css` - All design tokens
- `src/styles/typography.css` - Typography system
- `src/app/globals.css` - Global styles

### Components
- `src/components/ui/` - All UI components
- `src/components/ui/index.ts` - Component exports

### Utilities
- `src/lib/utils.ts` - Helper functions
- `src/lib/animations.ts` - Animation variants

### Configuration
- `src/config/constants.ts` - Site constants
- `src/types/index.ts` - TypeScript types

---

## Next Steps (Phase 6)

The design system is complete and ready for:

1. **Global Layout** - Navigation, footer
2. **Theme Toggle** - Dark/light mode switcher
3. **Hero Section** - Complete hero with animation
4. **Content Sections** - Projects, skills, experience
5. **Advanced Features** - Custom cursor, page transitions

---

## Notes

- All personal information uses placeholders
- No fake data included
- Production-ready and scalable
- TypeScript-safe throughout
- ESLint compliant
- Build tested and verified

---

**Status**: ✅ Phase 5 Complete

**Build Status**: ✅ Passing
**TypeScript**: ✅ No errors
**ESLint**: ✅ No errors
**Responsive**: ✅ Mobile-first
**Accessible**: ✅ WCAG compliant
