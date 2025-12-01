# Image Assets

The following images need to be downloaded from Figma and placed in `/public/assets/`:

## Required Images

1. **Logo** (`/public/assets/logo.svg`)
   - Figma asset: Logo from sidebar
   - Format: SVG (optimized)

2. **Hero Image** (`/public/assets/hero-image.png`)
   - Figma asset: Campaign illustration (image 1966)
   - Format: PNG or WebP
   - Dimensions: ~234x234px

3. **Rewards Icon** (`/public/assets/rewards-icon.png`)
   - Figma asset: Traced Image (dollar sign icon)
   - Format: PNG or WebP
   - Dimensions: ~167x168px

4. **Curator Avatar** (`/public/assets/curator-avatar.png`)
   - Figma asset: Ellipse 3099
   - Format: PNG or WebP
   - Dimensions: 100x100px

## Download Instructions

1. Open the Figma file: https://www.figma.com/design/XgfAh36wUXyBZ3LoMmhclN/Untitled?node-id=1-211&m=dev
2. Select each asset
3. Export as:
   - SVGs: Optimize and export as SVG
   - Images: Export as PNG at 2x resolution, then convert to WebP
4. Place files in `/public/assets/` directory
5. Update component imports if filenames differ

## Current Status

All images currently use placeholder fallbacks. The application will work without these images, but they should be added for production.

