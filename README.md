# Markit.one - Next.js 15 Production App

A production-ready Next.js 15 application with Tailwind CSS v3, SEO optimization, and modern UI components.

## Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS v3
- ✅ TypeScript
- ✅ Framer Motion animations
- ✅ Lucide React icons
- ✅ Comprehensive SEO meta tags
- ✅ Responsive design
- ✅ Production-ready configuration

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
markit-one/
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with Tailwind
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── BentoGrid.tsx
│   ├── ValueProp.tsx
│   ├── Footer.tsx
│   ├── SpotlightCard.tsx
│   └── AnimatedText.tsx
├── public/
│   ├── icon.svg         # Lucide Hexagon icon (SVG favicon)
│   ├── favicon.ico      # Placeholder - generate from icon.svg
│   ├── apple-touch-icon.png  # Generate 180x180 PNG from icon.svg
│   └── manifest.json
└── ...
```

## Favicon Setup

The app uses a Lucide Hexagon icon as the favicon. To generate proper favicon files:

1. **favicon.ico**: Convert `public/icon.svg` to ICO format (16x16, 32x32, 48x48)
   - Use [RealFaviconGenerator](https://realfavicongenerator.net/) or
   - Use ImageMagick: `convert icon.svg -resize 32x32 favicon.ico`

2. **apple-touch-icon.png**: Generate a 180x180 PNG from the SVG
   - Use online tools or ImageMagick: `convert icon.svg -resize 180x180 apple-touch-icon.png`

## SEO Configuration

The app includes comprehensive SEO meta tags in `app/layout.tsx`:

- Title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Robots meta tags
- Structured data ready

Update the `metadataBase` URL in `app/layout.tsx` to match your production domain.

## Technologies

- **Next.js 15**: React framework with App Router
- **Tailwind CSS v3**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## License

© 2024 Markit.one Inc. All rights reserved.


