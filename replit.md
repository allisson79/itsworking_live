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
- Updated header logo to SVG format (60px desktop, 44px mobile)

### Hero Image Mapping
- **Home**: trondheim_city.jpg
- **Services**: tjenester.jpg
- **Technology**: fjordgata.jpg
- **About**: oversikt_kontoret.png
- **Contact**: ProfilbildeThomas.png (positioned at center 85% to show jacket/logo)

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

### Database Schema
- **contact_messages**: Stores contact form submissions (name, email, company, message)

### API Endpoints
- **GET /api/status**: Returns the current status of the integration
  - Response: `{ status: "live", timestamp: "ISO-8601", environment: "production|development" }`
  - No authentication required
  - Used for health checks and monitoring
- **POST /api/contact**: Submit contact form
  - Requires: name, email, company (optional), message
  - Returns: 201 with created message or error

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
