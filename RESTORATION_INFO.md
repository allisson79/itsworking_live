# Site Restoration Information

## Date Restored
January 15, 2026

## Restored Version
This repository has been restored to the state from **December 6, 2025** (commit `dfc063d562392ee4043498ea7c87bdfd76509982`).

## What Was Restored
The site has been restored to a simpler, pre-React version that uses:
- Plain HTML files
- CSS styling (using Pico CSS framework)
- Vanilla JavaScript
- Static file structure

### Main Pages
- `index.html` - Home page
- `om-oss.html` - About us page
- `kontakt.html` - Contact page
- `hvorfor-velge-oss.html` - Why choose us page
- `onepager.html` - One-page version
- `details.html` - Details page

### Key Assets
- `style.css` - Custom styles
- `script.js` - JavaScript functionality
- `pico.min.css` - Pico CSS framework
- `js/nav-loader.js` - Navigation loader
- `partials/nav.html` - Navigation partial

### Backup Folders
- `backup_2025-08-09/` - Earlier backup from August 2025
- `blog_backup/` - Blog content backup
- `arkiv/` - Archive folder

## What Was Removed
The modern React/TypeScript stack was removed, including:
- `client/` - React application files
- `server/` - Express server files
- `shared/` - Shared TypeScript code
- Build configuration files (package.json, vite.config.ts, tailwind.config.ts, etc.)
- Node.js dependencies

## Why This Restoration?
This restoration was requested to recover the version of the site from before December 15, 2025, returning to the simpler HTML/CSS/JS implementation that existed on December 6, 2025.

## Git Information
- **Original Commit:** `dfc063d562392ee4043498ea7c87bdfd76509982`
- **Commit Date:** December 6, 2025
- **Commit Message:** "Clean up duplicate workflows and conflicting port configurations"

## How to View the Site
Since this is a static HTML site, you can:
1. Open `index.html` directly in a web browser, or
2. Use a simple HTTP server like:
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`
   - PHP: `php -S localhost:8000`

Then navigate to `http://localhost:8000` in your browser.
