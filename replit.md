# Its Working AS Website

## Overview

This is a professional website for Its Working AS, a Norwegian IT services company based in Trondheim. The website serves as their digital presence to showcase IT services, fiber internet solutions, and partnerships with technology providers like GlobalConnect. The site focuses on local, personal IT support for small and medium-sized businesses (SMB) in the Trondheim region.

**Recent Updates (January 2026):**
- Added sticky header with shrink-on-scroll animation
- Implemented cookie consent banner (GDPR compliant)
- Added scroll-to-top button
- Added customer testimonials section
- Added FAQ accordion section
- Added newsletter signup form in footer
- Added social media links in footer
- Implemented smooth scroll animations (IntersectionObserver-based)
- Added SEO meta tags and Open Graph images
- Improved mobile responsiveness for all new components
- Added page transition animations
- Created reusable skeleton loading components

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
      AnimatedSection.tsx  # IntersectionObserver-based animations
      CookieConsent.tsx    # GDPR cookie banner
      FAQ.tsx              # FAQ accordion section
      Footer.tsx           # Footer with newsletter, social links
      Header.tsx           # Sticky header with scroll effect
      Layout.tsx           # Page layout wrapper
      Newsletter.tsx       # Newsletter signup form
      ScrollToTop.tsx      # Scroll-to-top button
      Skeleton.tsx         # Loading skeleton components
      Testimonials.tsx     # Customer testimonials section
      ui/                  # Radix UI components
    pages/          # Page components (Home, Services, About, Contact, Technology)
    hooks/          # Custom React hooks
    lib/            # Utilities and query client
  public/           # Static assets (images, og-image.jpg)
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
- **Home (/)**: Hero section, services overview, testimonials, FAQ, about company
- **Services (/tjenester)**: Detailed IT services (Fiber, WiFi, Security, Microsoft 365)
- **Technology (/teknologi)**: Technology partners (GlobalConnect, Digiflow)
- **About (/om-oss)**: Company story and philosophy
- **Contact (/kontakt)**: Contact form and company information

### Database Schema
- **contact_messages**: Stores contact form submissions (name, email, company, message)

### Running the Project
- **Development**: `npm run dev` - Starts Express server with Vite middleware
- **Database**: `npm run db:push` - Push schema changes to database
- **Build**: `npm run build` - Build for production

### External Dependencies
- **Radix UI**: Accessible component primitives (accordion, dialog, etc.)
- **Lucide React**: Icon library
- **React Hook Form + Zod**: Form handling and validation
- **TanStack Query**: Data fetching and caching

### Domain and Hosting
- **Production Domain**: itsworking.no
- **Contact Email**: kontakt@itsworking.no
- **Phone**: 988 50 462
- **Address**: Fjordgata 43, 7010 Trondheim (Klingenberggården)

### SEO
- Meta tags configured in index.html
- Open Graph images for social sharing
- Norwegian language (nb_NO locale)
- Canonical URL set to itsworking.no

The architecture prioritizes maintainability, performance, and user experience while supporting the company's local, personal approach to IT services in the Trondheim market.
