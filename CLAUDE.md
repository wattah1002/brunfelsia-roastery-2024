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
- `styles.css` - All styling including responsive design and animations
- `script.js` - Handles all interactivity:
  - Smooth scroll navigation with section targeting
  - Hamburger menu for mobile with body scroll lock
  - Image slideshow (5-second rotation)
  - Intersection Observer for fade-in animations
  - Contact form validation (uses Formspree endpoint: movjqwov)
  - Badge ticker animation with dynamic speed calculation

## Key Implementation Details

- **No external dependencies** - Pure vanilla JavaScript, HTML5, CSS3
- **Responsive breakpoint**: 768px for mobile menu
- **Animation timing**: 
  - Hero fade-in: 1s ease-out
  - Section fade-in: 0.6s ease-out with 0.1 threshold
  - Image slideshow: 5s interval
- **Form handling**: Formspree integration, requires both email and message fields
- **Performance optimizations**: Debounced resize handlers, requestAnimationFrame for scroll animations