# AERBAVS Aviation Website - Technical Documentation

## Project Overview

**Project Name:** AERBAVS MRO Parts & Leasing Corporate Website  
**Version:** 1.0.0  
**Type:** Modern, responsive corporate website for an aviation trading company  
**Status:** Production-ready (Next.js 15)

### Company Information
- **Legal Name:** AERBAVS MRO Parts & Leasing FZCO
- **Short Name:** AERBAVS
- **Tagline:** Supplying the Skies Since 2020
- **Founded Year:** 2020
- **Location:** Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE
- **Primary Focus:** Aviation parts supply, aircraft leasing, and 24/7 AOG support

### Company Description
AERBAVS is a Dubai-based aviation supply company dedicated to keeping aircraft airworthy and fleets operational. Operating from Dubai Digital Park, Dubai Silicon Oasis, they supply certified aircraft and engine parts, aviation tools, hangar supplies, consumables, and leasing solutions to airlines, MRO organisations, operators, and defence aviation units across the Middle East, Central Africa, South Asia, and beyond.

---

## Technology Stack

### Core Framework
- **Next.js:** v15.3.0 (App Router)
- **React:** v19.1.0
- **TypeScript:** v5.8.3
- **Node.js:** ES2022 target

### UI & Styling
- **Tailwind CSS:** v3.4.17
- **Tailwind Merge:** v3.3.1
- **Tailwind Typography:** v0.5.16
- **Tailwind Animate:** v1.0.7
- **PostCSS:** v8.5.6
- **Autoprefixer:** v10.4.21

### Component Libraries
- **Radix UI:** Used for accessible UI primitives
  - Accordion (v1.2.12)
  - Dialog (v1.1.15)
  - Dropdown Menu (v2.1.16)
  - Label (v2.1.7)
  - Navigation Menu (v1.2.14)
  - Separator (v1.1.7)
  - Slot (v1.1.7)
  - Tabs (v1.1.13)

### Animation & Icons
- **Framer Motion:** v12.23.5 (Advanced animations and transitions)
- **Lucide React:** v0.544.0 (Icon library)

### Utilities
- **Class Variance Authority:** v0.7.1
- **CLSX:** v2.1.1 (Conditional CSS classes)

### Development Tools
- **ESLint:** v9.29.0
- **TypeScript Compiler:** v5.8.3
- **Next.js Lint:** v15.3.0

---

## Project Structure

```
Aviation Website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata & viewport
│   │   ├── page.tsx                # Homepage - main landing page
│   │   ├── not-found.tsx           # 404 error page
│   │   ├── robots.ts               # SEO robots.txt configuration
│   │   ├── sitemap.ts              # SEO sitemap generation
│   │   ├── opengraph-image.tsx      # OG image for social sharing
│   │   ├── icon.tsx                # Favicon
│   │   ├── apple-icon.tsx          # Apple touch icon
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   ├── gallery/
│   │   │   └── page.tsx            # Gallery/media showcase
│   │   ├── industries/
│   │   │   └── page.tsx            # Industries served page
│   │   ├── services/
│   │   │   └── page.tsx            # Services page
│   │   ├── admin/                  # Admin panel (currently disabled)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx            # Admin dashboard
│   │   │   ├── login/
│   │   │   │   └── page.tsx        # Admin login
│   │   │   ├── about/
│   │   │   ├── achievements/
│   │   │   ├── certifications/
│   │   │   ├── contact/
│   │   │   ├── faq/
│   │   │   ├── global-operations/
│   │   │   ├── hero/
│   │   │   ├── industries/
│   │   │   ├── media/
│   │   │   ├── seo/
│   │   │   ├── services/
│   │   │   ├── what-we-do/
│   │   │   └── why-choose-us/
│   │   └── api/
│   │       └── auth/
│   │           ├── login/
│   │           │   └── route.ts    # POST: Admin authentication
│   │           └── logout/
│   │               └── route.ts    # POST: Logout
│   │       └── content/
│   │           └── route.ts        # GET/PUT: Content management
│   │       └── media/
│   │           └── route.ts        # Media upload & management
│   ├── components/
│   │   ├── animated-number.tsx     # Animated counter component
│   │   ├── conditional-layout.tsx  # Layout wrapper (navbar/footer)
│   │   ├── footer.tsx              # Site footer
│   │   ├── hero-slider.tsx         # Hero carousel component
│   │   ├── image-with-fallback.tsx # Image with fallback
│   │   ├── jsonld.tsx              # JSON-LD structured data
│   │   ├── logo.tsx                # Logo component
│   │   ├── navbar.tsx              # Navigation bar
│   │   ├── page-hero.tsx           # Page hero banner
│   │   ├── reveal.tsx              # Reveal animation wrapper
│   │   ├── section-heading.tsx     # Section heading component
│   │   ├── section.tsx             # Generic section wrapper
│   │   ├── admin/
│   │   │   ├── form-helpers.tsx    # Admin form utilities
│   │   │   └── sidebar.tsx         # Admin sidebar navigation
│   │   └── ui/                     # shadcn-style UI primitives
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx           # Mobile menu
│   │       └── textarea.tsx
│   ├── hooks/
│   │   └── use-scroll.ts           # Scroll position hook
│   ├── lib/
│   │   ├── cn.ts                   # Class name merge utility
│   │   ├── images.ts               # Image path utilities
│   │   ├── motion.ts               # Framer Motion presets
│   │   ├── nav.ts                  # Navigation constants
│   │   ├── seo.ts                  # SEO metadata builder
│   │   └── site.ts                 # Site configuration (see below)
│   ├── sections/
│   │   ├── about.tsx               # About section component
│   │   ├── achievements.tsx        # Achievements/statistics
│   │   ├── certifications.tsx      # Certifications display
│   │   ├── contact.tsx             # Contact form section
│   │   ├── cta.tsx                 # Call-to-action section
│   │   ├── faq.tsx                 # FAQ accordion section
│   │   ├── gallery.tsx             # Photo gallery section
│   │   ├── global-presence.tsx     # Global operations map
│   │   ├── hero.tsx                # Hero carousel section
│   │   ├── industries.tsx          # Industries served section
│   │   ├── services.tsx            # Services listing
│   │   ├── testimonials.tsx        # Client testimonials
│   │   ├── what-we-do.tsx          # Products/services catalog
│   │   └── why-choose-us.tsx       # Value propositions
│   ├── middleware.ts               # Request middleware
│   ├── assets/                     # Non-image assets
│   └── styles/
│       └── globals.css             # Global Tailwind styles
├── data/
│   └── content.json                # Content database (JSON)
├── public/
│   ├── images/
│   │   ├── about/                  # About page images
│   │   ├── hero/                   # Hero slider images
│   │   ├── industries/             # Industry-specific images
│   │   ├── products/               # Product category images
│   │   └── IMAGES.md               # Image catalog & naming
│   ├── placeholders/               # Placeholder images
│   └── uploads/                    # User-uploaded media
├── components.json                 # shadcn UI components registry
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── next.config.ts                  # Next.js configuration
├── postcss.config.mjs              # PostCSS configuration
├── package.json                    # Dependencies & scripts
└── README.md                       # Setup instructions
```

---

## Key Features

### 1. Landing Page (Homepage)
- **Hero Carousel:** 5-slide rotating banner with aviation imagery
- **Dynamic Content:** All sections load from JSON data
- **SEO Optimized:** Structured data, OG tags, meta descriptions
- **Responsive:** Mobile-first design with Tailwind CSS

### 2. Public Pages
- **About Page:** Company history and mission
- **Services Page:** Detailed service offerings
- **Industries Page:** Industry verticals served
- **Gallery Page:** Aircraft and operations photography
- **Contact Page:** Contact form and location details

### 3. Content Management
- **Data Source:** Centralized `data/content.json` file
- **API-driven:** Admin panel communicates via REST API
- **Hot reload:** No rebuild needed for content updates
- **Structure:** Nested objects for hero slides, sections, cards, etc.

### 4. Admin Panel (Currently Disabled)
- **Status:** Temporarily disabled via middleware
- **Authentication:** Password-based login (default: `admin123`)
- **Session Management:** Secure HTTP-only cookies
- **Section Management:** Edit each section independently
  - Hero Slider
  - About Section
  - What We Do (Products)
  - Services
  - Why Choose Us
  - Industries
  - Global Operations
  - Achievements
  - Certifications
  - FAQ
  - Contact
  - SEO Settings
  - Media Library

### 5. SEO & Analytics
- **Metadata Generation:** Dynamic title and description per page
- **Open Graph:** Social media previews
- **Twitter Cards:** Enhanced tweet embeds
- **Structured Data:** JSON-LD organization schema
- **Sitemap:** Auto-generated sitemap.xml
- **Robots.txt:** Search engine directives
- **Geo-targeting:** Dublin location metadata (Dubai Silicon Oasis)

### 6. Animations & UX
- **Framer Motion:** Page transitions and scroll animations
- **Reveal Effects:** Section fade-in on scroll
- **Animated Numbers:** Counter animations for statistics
- **Hero Slider:** Autoplay carousel with transitions
- **Smooth Scroll:** Parallax and scroll-based effects

### 7. Accessibility
- **Semantic HTML:** Proper heading hierarchy and landmarks
- **Skip Links:** Skip-to-content link for keyboard navigation
- **Radix UI:** WAI-ARIA compliant components
- **Color Contrast:** WCAG AA compliant

---

## Site Configuration

### [src/lib/site.ts](src/lib/site.ts)

Central configuration file containing all site-wide settings:

```typescript
export const siteConfig = {
  // Branding
  name: "AERBAVS",
  legalName: "AERBAVS MRO Parts & Leasing FZCO",
  tagline: "Supplying the Skies Since 2020",
  description: "...",
  shortDescription: "...",
  url: "https://www.aerbavs.com",
  ogImage: "/opengraph-image",
  foundedYear: "2020",

  // Contact Links
  links: {
    email: "info@aerbavs.com",
    emailSales: "sales@aerbavs.com",
    phone: "+971 54 176 1644",
    aog: "+971 54 176 1644",
    linkedin: "https://linkedin.com/company/aerbavs",
    twitter: "https://twitter.com/aerbavs",
  },

  // Locations
  locations: [
    {
      city: "Dubai",
      country: "UAE",
      address: "Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE",
      mapUrl: "https://maps.google.com/?q=Dubai+Digital+Park+Dubai+Silicon+Oasis",
      isPrimary: true,
    },
  ],

  // Keywords
  keywords: [
    "aviation parts supplier Dubai",
    "aircraft parts UAE",
    "MRO parts Dubai",
    "aviation consumables UAE",
    // ... 15+ more keywords
  ],
};
```

**How to Update:** Modify values in this file to change global branding, contact info, and SEO keywords.

---

## Content Management

### Content Structure ([data/content.json](data/content.json))

The entire site content is stored as JSON, organized into sections:

#### 1. Hero Section
```json
{
  "hero": {
    "slides": [
      {
        "id": "1",
        "src": "/images/hero/slide-1.jpg",
        "alt": "...",
        "eyebrow": "Supplying the Skies Since 2020",
        "headline": "AERBAVS MRO Parts & Leasing — FZCO",
        "subheading": "..."
      }
      // 4 more slides...
    ]
  }
}
```

#### 2. About Section
```json
{
  "about": {
    "eyebrow": "About AERBAVS",
    "title": "...",
    "description": "...",
    "ctaLabel": "Learn More About AERBAVS",
    "ctaHref": "/about",
    "cards": [
      {
        "title": "Dubai-Based Operations",
        "description": "...",
        "image": "/images/about/dubai-operations.jpg",
        "alt": "..."
      }
      // ... more cards
    ]
  }
}
```

#### 3. What We Do (Products/Services)
```json
{
  "whatWeDo": {
    "eyebrow": "What We Supply",
    "title": "...",
    "description": "...",
    "items": [
      {
        "title": "Tools and Equipment",
        "body": "...",
        "image": "/images/products/tools-equipment.jpg",
        "imageAlt": "..."
      }
      // 11 product categories total
    ]
  }
}
```

#### Other Sections
- `services`: Service offerings
- `whyChooseUs`: Value propositions
- `industries`: Industry verticals
- `globalOperations`: Office locations
- `achievements`: Statistics/metrics
- `certifications`: Certifications display
- `faq`: Frequently asked questions
- `contact`: Contact form setup

### Updating Content

1. **Via Code Editor:** Edit `data/content.json` directly
2. **Via Admin Panel:** Log in to `/admin` (when enabled) and edit sections through UI
3. **No rebuild required:** Content changes take effect on next page refresh

---

## API Routes

### Authentication API

#### POST `/api/auth/login`
Authenticates admin user with password.

**Request:**
```json
{
  "password": "your-admin-password"
}
```

**Response (Success - 200):**
```json
{
  "success": true
}
```
Sets `admin_session` HTTP-only cookie for 24 hours.

**Response (Failure - 401):**
```json
{
  "error": "Invalid credentials"
}
```

**Configuration:**
- `ADMIN_PASSWORD`: Environment variable (default: `admin123`)
- `SESSION_SECRET`: Session token (default: `aero_admin_2024`)

#### POST `/api/auth/logout`
Clears admin session.

### Content API

#### GET `/api/content`
Retrieves all site content from JSON file.

**Response:**
```json
{
  "hero": {...},
  "about": {...},
  "whatWeDo": {...},
  // ... all sections
}
```

**Cache:** Revalidates every 1 hour on homepage.

#### PUT `/api/content`
Updates site content (requires authentication).

**Request:**
```json
{
  "about": {
    "title": "New title"
  }
}
```

**Headers Required:**
- `Cookie: admin_session=<token>`
- `Content-Type: application/json`

**Response (Success - 200):**
```json
{
  "success": true
}
```

**Response (Unauthorized - 401):**
```json
{
  "error": "Unauthorized"
}
```

### Media API

#### POST/GET `/api/media`
Handles image uploads and retrieval for admin panel.

---

## Middleware

### [src/middleware.ts](src/middleware.ts)

Currently, the middleware **disables the admin panel**:

```typescript
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin panel is temporarily disabled — redirect all /admin/* to home
  if (pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
```

**To Re-enable Admin Panel:** Remove or comment out the admin redirect logic.

---

## Authentication & Security

### Default Credentials
- **Username:** Not required (password-only authentication)
- **Default Password:** `admin123`
- **Session Duration:** 24 hours

### Environment Variables (`.env.local`)

```bash
# Admin authentication
ADMIN_PASSWORD=admin123

# Session management
SESSION_SECRET=aero_admin_2024
```

### Security Practices
- **HTTP-Only Cookies:** Session tokens not accessible to JavaScript
- **SameSite Strict:** CSRF protection enabled
- **Secure Flag:** HTTPS-only in production
- **Password Hashing:** Currently plain-text (consider bcrypt for production)

---

## SEO Configuration

### Metadata Generation

#### Global Metadata ([src/app/layout.tsx](src/app/layout.tsx))
- Title template: `%s | AERBAVS`
- Meta description from `siteConfig`
- Open Graph image: `/opengraph-image`
- Twitter card: `summary_large_image`
- Canonical URL: `/`
- Geo-targeting: Dubai Silicon Oasis coordinates

#### Page-Specific Metadata ([src/lib/seo.ts](src/lib/seo.ts))

Built using `buildPageMetadata()` function with custom title, description, and keywords per page.

### Keywords

Primary keywords for SEO:
- aviation parts supplier Dubai
- aircraft parts UAE
- MRO parts Dubai
- aviation consumables UAE
- aircraft engine parts supplier
- aviation tools supplier Dubai
- aircraft leasing UAE
- AOG support Dubai
- (20 total keywords in config)

---

## Image Management

### Image Organization

Located in [public/images/](public/images/):

- **hero/:** Hero carousel images (5 images)
- **about/:** About section cards (3 images)
- **industries/:** Industry-specific imagery
- **products/:** Product category images (12 categories)

### Image Formats
- **Supported:** JPEG, PNG, WebP, AVIF
- **Optimization:** Next.js automatically serves WebP/AVIF to modern browsers
- **No External CDN:** All images served from `/public/images/`

### Adding New Images
1. Place image in appropriate folder under `public/images/`
2. Update `data/content.json` with image path
3. Add alt text for accessibility

---

## Styling & Theme

### Tailwind CSS Configuration ([tailwind.config.ts](tailwind.config.ts))

Custom theme with aviation-focused colors:
- **Primary Color:** `#0F172A` (dark slate)
- **Accent Colors:** Various shades for sections
- **Responsive:** Mobile-first approach

### Global Styles ([src/styles/globals.css](src/styles/globals.css))

- Tailwind directives
- Custom animations (if any)
- Font loading (Inter from Google Fonts)

### Design System
- **Spacing:** Tailwind scale (4px increments)
- **Typography:** Inter font family
- **Colors:** Dark blue (#0F172A) primary, slate accents
- **Breakpoints:** 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

---

## Development Workflow

### Setup & Installation

```bash
# Install dependencies
npm install

# Configure environment (optional)
echo "ADMIN_PASSWORD=your-password" > .env.local
```

### Development Server

```bash
npm run dev
```

Runs on `http://localhost:3000` with hot reload.

### Building for Production

```bash
npm run build
npm run start
```

### Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

### File Structure Best Practices
- Components in `src/components/` organized by feature
- Sections in `src/sections/` for page-specific layouts
- Utilities in `src/lib/` for shared functions
- Hooks in `src/hooks/` for React custom hooks
- Data in `data/content.json` (single source of truth)

---

## Deployment

### Vercel (Recommended)

1. Push repository to GitHub/GitLab/Bitbucket
2. Import into Vercel dashboard
3. **Framework preset:** Next.js
4. **Build command:** `npm run build`
5. **Output directory:** `.next`
6. **Environment variables:**
   - `ADMIN_PASSWORD` (if overriding default)
   - `SESSION_SECRET` (if overriding default)

### Custom Server

```bash
npm run build
npm run start
```

Listens on `http://localhost:3000` (or `$PORT` env variable).

### Environment Variables
Set these in your hosting platform:
```
ADMIN_PASSWORD=your-secure-password
SESSION_SECRET=your-session-secret
```

---

## Performance Optimizations

### Image Optimization
- Next.js Image component with automatic format selection
- WebP/AVIF generation for modern browsers
- Responsive image sizes

### Bundle Optimization
```typescript
// next.config.ts
experimental: {
  optimizePackageImports: ["lucide-react", "framer-motion"],
}
```

### Caching Strategy
- **Static Pages:** Pre-rendered at build time
- **Dynamic Content:** ISR (Incremental Static Regeneration) - revalidates every 1 hour
- **API Responses:** JSON file-based storage (fast read/write)

---

## Accessibility Features

### Keyboard Navigation
- Skip-to-content link at top of page
- Focusable nav items and buttons
- Radix UI components with built-in ARIA support

### Screen Readers
- Semantic HTML
- Proper heading hierarchy
- Image alt text
- Form labels with `<label>` elements

### Visual Accessibility
- WCAG AA color contrast (7:1 ratio for text)
- Readable font sizes (base 16px, scales appropriately)
- Sufficient spacing between interactive elements

---

## Known Issues & Limitations

### Admin Panel Disabled
- **Status:** Currently disabled via middleware
- **Reason:** Awaiting security implementation
- **To Enable:** Remove admin redirect in `src/middleware.ts`

### Plain-Text Password Storage
- **Current:** Passwords stored in environment variables (plain text)
- **Recommendation:** Implement bcrypt hashing for production

### No Database
- **Storage:** File-based JSON (suitable for small teams)
- **Scalability:** Consider migrating to database for high-volume content

---

## Maintenance Checklist

### Regular Tasks
- [ ] Update content in `data/content.json`
- [ ] Replace images in `public/images/`
- [ ] Monitor analytics (OG tags for shares)
- [ ] Test mobile responsiveness
- [ ] Verify links and contact forms

### Security Tasks
- [ ] Rotate admin password quarterly
- [ ] Update dependencies: `npm update`
- [ ] Audit packages: `npm audit`
- [ ] Review environment variables

### SEO Tasks
- [ ] Monitor search console for indexing
- [ ] Test OG tags with social platforms
- [ ] Verify structured data with Schema.org
- [ ] Check sitemap generation

---

## Support & Resources

### Project Resources
- **Framework:** [Next.js Documentation](https://nextjs.org)
- **Styling:** [Tailwind CSS Docs](https://tailwindcss.com)
- **UI Components:** [Radix UI](https://www.radix-ui.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion)
- **Icons:** [Lucide React](https://lucide.dev)

### Common Tasks

#### Changing the Logo
Edit `src/components/logo.tsx` to replace SVG or image.

#### Updating Contact Information
Modify `src/lib/site.ts`:
```typescript
links: {
  email: "new-email@aerbavs.com",
  phone: "+971 XX XXX XXXX",
  // ... other contacts
}
```

#### Adding a New Page
1. Create folder in `src/app/` (e.g., `my-page/`)
2. Add `page.tsx` inside
3. Add route to navigation in `src/components/navbar.tsx`
4. Update sitemap if needed

#### Enabling Admin Panel
1. Comment out redirect in `src/middleware.ts`
2. Set `ADMIN_PASSWORD` in `.env.local`
3. Visit `/admin/login`

---

## Version History

**v1.0.0** (Current)
- Initial launch with 13 editable content sections
- Next.js 15 with React 19
- Framer Motion animations
- Admin panel (disabled)
- SEO optimization
- Responsive design

---

## Document Information

**Last Updated:** May 2026  
**Maintained By:** Development Team  
**Project Location:** `d:\Aviation Website`

---

## Quick Reference

### Important Files
| File | Purpose |
|------|---------|
| [src/lib/site.ts](src/lib/site.ts) | Global site configuration |
| [data/content.json](data/content.json) | All site content |
| [src/app/layout.tsx](src/app/layout.tsx) | Root layout & metadata |
| [src/app/page.tsx](src/app/page.tsx) | Homepage composition |
| [src/middleware.ts](src/middleware.ts) | Request handling (admin disabled) |
| [next.config.ts](next.config.ts) | Next.js configuration |
| [tailwind.config.ts](tailwind.config.ts) | Tailwind theme |

### Key Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
npm run typecheck    # Run TypeScript compiler
```

### Default Credentials
- **Admin Login URL:** `/admin/login`
- **Default Password:** `admin123`
- **Session Duration:** 24 hours

---

End of Documentation
