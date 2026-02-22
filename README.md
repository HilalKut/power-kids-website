# Power Kids Website

Turkish landing page project for **Power Kids**, built with Vite.

## Project Links

- GitHub Repository: [https://github.com/HilalKut/power-kids-website](https://github.com/HilalKut/power-kids-website)
- Live URL: https://power-kids-website.vercel.app

## Features

- Fully Turkish landing page content
- Responsive design for desktop/tablet/mobile
- Hero section with setup video CTA
- Package cards (pricing hidden, contact-oriented)
- References section with uploaded logo wall
- Floating action buttons (WhatsApp, email, back-to-top)
- WhatsApp-based contact flow for key CTAs

## Tech Stack

- Vite
- JavaScript
- HTML template strings
- CSS

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/HilalKut/power-kids-website.git
cd power-kids-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for Vite deployment.  
`vercel.json` uses:

- Build command: `vite build`
- Output directory: `dist`
- Framework: `vite`

Pushes to `main` can be automatically deployed if your GitHub repo is connected to Vercel/Netlify.

## Folder Highlights

- `src/pages/Home.js`: Main landing page content
- `src/styles/hero.css`: Main page styling
- `src/styles/global.css`: Global styles and variables
- `public/logo/`: Uploaded logo assets
- `public/images/phones.png`: “Her Veli İçin Rahatlık” section visual

## Notes for Submission

- Branch: `main`
- Latest pushed commit: Check `main` branch history
- Build check: `npm run build` passes
