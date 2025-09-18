# Its Working AS Website

## Overview

This is a static website for Its Working AS, a Norwegian IT services company based in Trondheim. The website serves as their digital presence to showcase IT services, fiber internet solutions, and partnerships with technology providers like GlobalConnect. The site focuses on local, personal IT support for small and medium-sized businesses (SMB) in the Trondheim region.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The website is built as a static HTML/CSS/JavaScript application with a modern, responsive design:

- **Multi-page Structure**: Separate HTML files for different sections (index.html, om-oss.html, hvorfor-velge-oss.html, kontakt.html, details.html, onepager.html)
- **CSS Framework**: Uses Pico CSS as a base framework (pico.min.css) with extensive custom styling
- **Responsive Design**: Mobile-first approach with sophisticated glass morphism effects and dark theme
- **Component-based Navigation**: Shared navigation loaded via JavaScript (nav-loader.js)
- **Modern Visual Design**: Emphasis on glassmorphism, smooth animations, and professional typography

### Styling and Design System
- **Dark Theme**: Sophisticated color palette with primary blues, glass effects, and depth layers
- **CSS Variables**: Comprehensive design system using CSS custom properties for colors, shadows, borders, and spacing
- **Mobile Navigation**: Hamburger menu system with overlay for mobile devices
- **Glass Morphism**: Extensive use of backdrop filters and semi-transparent elements
- **Grid Layouts**: CSS Grid for responsive card layouts and content organization

### JavaScript Architecture
- **Modular Scripts**: Separate files for different functionality (script.js, nav-loader.js)
- **Mobile Menu Logic**: Complex hamburger menu implementation with overlay system
- **Event-driven**: DOM manipulation based on user interactions
- **Analytics Integration**: Conditional loading of analytics scripts based on domain

### Content Management
- **Static Content**: All content is hardcoded in HTML files
- **Norwegian Language**: All content is in Norwegian (no)
- **SEO Optimized**: Proper meta tags, structured content, and semantic HTML
- **Accessibility**: ARIA labels, semantic markup, and keyboard navigation support

### Performance and Security
- **Content Security Policy**: Basic CSP headers for security
- **Conditional Analytics**: Analytics only load on production domains
- **Optimized Assets**: Minified CSS frameworks and optimized images
- **Mobile Performance**: Touch-action optimizations and efficient mobile interactions

## External Dependencies

### CSS Frameworks
- **Pico CSS v1.5.13**: Base CSS framework for consistent styling and components
- **Custom CSS**: Extensive custom styling system (style.css) with dark theme and glass morphism effects

### Analytics and Tracking
- **Cloudflare Web Analytics**: Privacy-focused analytics with conditional loading
- **Google Analytics 4**: (Commented out, ready for implementation)
- **Hotjar**: (Commented out, ready for heatmap and user behavior tracking)

### Third-party Services
- **Pipedrive Web Forms**: Lead capture forms integrated for contact collection
- **Email Integration**: Direct mailto links for contact functionality
- **GlobalConnect Partnership**: Featured technology partner for fiber services

### Browser APIs and Standards
- **Intersection Observer**: Potential use for animations and scroll effects
- **CSS Custom Properties**: Extensive use of CSS variables
- **ES6+ JavaScript**: Modern JavaScript features and DOM APIs
- **Service Worker Ready**: Architecture supports PWA implementation

### Domain and Hosting
- **Production Domain**: itsworking.no
- **Development Environment**: Replit-compatible structure
- **Static Hosting**: Designed for deployment on static hosting platforms

The architecture prioritizes maintainability, performance, and user experience while supporting the company's local, personal approach to IT services in the Trondheim market.