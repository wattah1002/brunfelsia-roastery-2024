# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Brunfelsia Roastery (brunfelsia.jp), a specialty coffee roasting company operated by Paddle&Brew 株式会社.

## Development Commands

This is a pure static site with no build process:
- **Local development**: Open `index.html` directly in a browser or use a local server (e.g., `python3 -m http.server`)
- **Deployment**: Push to GitHub (configured for GitHub Pages with CNAME)

## Architecture

Simple static site structure:
- `index.html` - Single-page application with sections: About, Scene, Promise, Company, Contact
- `styles.css` - All styling including responsive design and animations (1255 lines)
- `script.js` - Handles all interactivity:
  - Smooth scroll navigation with section targeting
  - Hamburger menu for mobile with body scroll lock
  - Image slideshow (5-second rotation)
  - Intersection Observer for fade-in animations
  - Contact form validation (uses Formspree endpoint: movjqwov)
  - Badge ticker animation with dynamic speed calculation
  - Dynamic hero container height adjustment (window.innerHeight)
  - Click-outside-menu functionality
- `assets/` - Static resources:
  - `images/` - Logo, backgrounds, and slideshow images (kv_*.jpg series)
  - `videos/` - kv.mp4 (currently unused)

## Key Implementation Details

- **No external dependencies** - Pure vanilla JavaScript, HTML5, CSS3
- **Responsive breakpoint**: 768px for mobile menu
- **Animation timing**: 
  - Hero fade-in: 1s ease-out
  - Section fade-in: 0.6s ease-out with 0.1 threshold (100ms delay for performance)
  - Image slideshow: 5s interval
  - Badge ticker: Dynamic speed based on text width (width/50)
- **Form handling**: Formspree integration (endpoint: movjqwov), requires both email and message fields
- **Performance optimizations**: 
  - Debounced resize handlers (250ms delay)
  - requestAnimationFrame for scroll animations
  - Intersection Observers unobserved after triggering
  - trackVisibility option for better performance
- **CSS Architecture**: Uses CSS custom properties (--main-bg-color, --main-bg-image) for theming
- **Contact endpoints**: Phone: 03-6450-7667, Email: vhan@brunfelsia.jp