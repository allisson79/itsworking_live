# Its Working AS - Website

This is the company website for Its Working AS, an IT service provider in Trondheim, Norway.

## Current Version

This site has been restored to the **December 6, 2025** version (pre-React implementation).

For detailed information about the restoration, see [RESTORATION_INFO.md](./RESTORATION_INFO.md).

## Site Structure

This is a static HTML/CSS/JavaScript website with the following pages:

- **index.html** - Home page
- **om-oss.html** - About us page  
- **kontakt.html** - Contact page
- **hvorfor-velge-oss.html** - Why choose us page
- **onepager.html** - One-page version
- **details.html** - Details page

## Technologies

- Plain HTML5
- CSS3 with [Pico CSS](https://picocss.com/) framework
- Vanilla JavaScript
- No build process required

## Development

### Running Locally

You can run this site using any static file server:

**Option 1: Python**
```bash
python -m http.server 5000
```

**Option 2: Node.js**
```bash
npx http-server -p 5000
```

**Option 3: PHP**
```bash
php -S localhost:5000
```

Then open your browser to `http://localhost:5000`

### File Structure

```
.
├── index.html              # Main homepage
├── style.css               # Custom styles
├── script.js               # JavaScript functionality
├── pico.min.css           # Pico CSS framework
├── js/
│   └── nav-loader.js      # Navigation loader
├── partials/
│   └── nav.html           # Navigation partial
├── backup_2025-08-09/     # Earlier backup
├── blog_backup/           # Blog content backup
└── attached_assets/       # Images and documents
```

## Deployment

The site is configured for deployment on Replit with the Python HTTP server.

## Contact

Its Working AS
- Website: https://itsworking.no
- Email: thomas@itsworking.no
- Phone: +47 988 50 462
- Address: Jomfrugata 18, Klingenberggården, Trondheim
