# Its Working AS Website

## Overview

This is a professional website for Its Working AS, a Norwegian IT services company based in Trondheim. The website serves as their digital presence to showcase IT services, fiber internet solutions, and partnerships with technology providers like GlobalConnect. The site focuses on local, personal IT support for small and medium-sized businesses (SMB) in the Trondheim region.

**Recent Updates (January 2026):**
- Set up PostgreSQL database for contact form submissions
- Fixed missing image reference on Technology page
- All pages fully functional with working contact form
- Added `/api/status` endpoint for integration health checks
- Added SEO metadata with Open Graph and Twitter card support on all pages
- Created favicon (SVG, PNG, Apple touch icon)
- Enhanced mobile responsiveness across all pages (header, navigation, footer, forms)
- Implemented fullscreen hero sections with background images on all pages
- Updated header logo to high-resolution PNG (1965x708, transparent background) for crisp display on mobile/retina screens (60px desktop, 44px mobile)
- Centered all text across all pages for consistent presentation (service cards, about sections, partner cards, contact sections)
- **Performance optimizations**: Added React.lazy() code splitting for all pages, lazy loading for below-the-fold images
- **Navigation CTA**: "Kontakt oss" styled as prominent blue button in header (inspired by Digiflow)
- **Cookie consent**: Added GDPR-compliant cookie consent banner with preferences management
- **UI Polish (January 2026)**:
  - Scroll-aware sticky header with shadow on scroll
  - Subtle zoom animation on hero background image
  - Hover lift effects on service cards, partner cards, and CTA boxes site-wide
  - Scroll-triggered fade-in animations on content sections (using IntersectionObserver)
  - Restyled cookie banner - floating, dark background, more subtle
  - Founder photo with "20+ års erfaring" experience badge in Personlig IT-partner section
  - Accessibility: prefers-reduced-motion support for all animations
  - Removed blue taglines from all hero sections for cleaner look
  - Added LinkedIn integration: company page in footer, Thomas's profile in contact sections
  - Added responsibility-box styling for emphasis statements

### Design Choices
- **Text alignment**: All text is centered across the website for consistent presentation
- **Layout patterns**: Service detail sections use vertical column layout with centered icons and text
- **Single-column sections**: Use `.about-content.single-column` modifier for pages with one column (e.g., Technology page)

### Hero Image Mapping
- **Home**: trondheim_city.jpg
- **Services**: tjenester.jpg
- **Technology**: fjordgata.jpg
- **About**: oversikt_kontoret.png (positioned at center 70% to show Klingenberggården building)
- **Contact**: ProfilbildeThomas.png (positioned at center 85% to show jacket/logo)

### Social Links
- **Company LinkedIn**: https://www.linkedin.com/company/itsworking-no
- **Thomas Allisson LinkedIn**: https://linkedin.com/in/thomas-g-allisson-9a7611126

## User Preferences

Preferred communication style: Simple, everyday language.
**Critical Requirements:**
- No synthetic/mock data allowed (testimonials, user examples, etc.)
- All contact details must be verified and functional
- Professional language only - no unprofessional terms

## System Architecture

### Tech Stack
- **Frontend**: React 18 with TypeScript, Tailwind CSS, Radix UI components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Bundler**: Vite
- **Routing**: Wouter (client-side)

### Project Structure
```
client/
  src/
    components/     # React components including UI library
    pages/          # Page components (Home, Services, About, Contact, Technology)
    hooks/          # Custom React hooks
    lib/            # Utilities and query client
  public/           # Static assets (images)
server/
  index.ts          # Express server entry
  routes.ts         # API routes
  storage.ts        # Database storage layer
  db.ts             # Database connection
shared/
  schema.ts         # Drizzle schema definitions
  routes.ts         # Shared route definitions
```

### Pages
- **Home (/)**: Hero section, services overview, about company
- **Services (/tjenester)**: Detailed IT services (Fiber, WiFi, Security, Microsoft 365)
- **Technology (/teknologi)**: Technology partners (GlobalConnect, Digiflow)
- **About (/om-oss)**: Company story and philosophy
- **Contact (/kontakt)**: Contact form and company information
- **Privacy (/personvern)**: Privacy policy and cookie information (GDPR/Norwegian E-Com Act compliant)

### Database Schema
- **contact_messages**: Stores contact form submissions (name, email, company, message)

### API Endpoints
- **GET /api/status**: Returns the current status of the integration
  - Response: `{ status: "live", timestamp: "ISO-8601", environment: "production|development" }`
  - No authentication required
  - Used for health checks and monitoring
- **POST /api/contact**: Submit contact form
  - Requires: name, email, company (optional), message, recaptchaToken
  - Protected by Google reCAPTCHA v3 (score threshold: 0.5)
  - Returns: 201 with created message or error

### Security
- **reCAPTCHA v3**: Contact form protected with invisible CAPTCHA
  - Site key stored in VITE_RECAPTCHA_SITE_KEY env var
  - Secret key stored in RECAPTCHA_SECRET_KEY secret
  - Score below 0.5 rejects submission as potential bot

### Caching Policy
- **HTML pages**: `no-store, must-revalidate` - Ensures updates propagate immediately
- **Hashed assets (/assets/*)**: `1 year, immutable` - Vite generates content-hashed filenames for cache-busting
- **Images (public/)**: `7 days, stale-while-revalidate` - Moderate cache for non-hashed assets

### Running the Project
- **Development**: `npm run dev` - Starts Express server with Vite middleware
- **Database**: `npm run db:push` - Push schema changes to database
- **Build**: `npm run build` - Build for production

### External Dependencies
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **React Hook Form + Zod**: Form handling and validation
- **TanStack Query**: Data fetching and caching

### Domain and Hosting
- **Production Domain**: itsworking.no
- **Contact Email**: thomas@itsworking.no
- **Phone**: 988 50 462
- **Address**: Fjordgata 43, 7010 Trondheim (Klingenberggården)

The architecture prioritizes maintainability, performance, and user experience while supporting the company's local, personal approach to IT services in the Trondheim market.
